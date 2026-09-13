/**
 * Luminance-keys the hero showreel so it can sit on a white page.
 *
 * The source footage is a meal tray shot against pure black — 87% of every
 * frame is #000 — which is invisible on the reference's black page and a black
 * rectangle on a white one. There is no CSS blend mode that drops black out
 * over a light ground (`screen` washes to white, `multiply` and `darken` keep
 * the black), and neither libvpx-vp9 nor hevc_videotoolbox would emit a usable
 * alpha channel here, so the key runs per frame on a canvas instead.
 *
 * Alpha comes from luminance: fully transparent below `threshold`, fully
 * opaque a `tolerance` above it, with a smoothstep across the ramp so edges
 * do not stair-step. RGB is then un-premultiplied on partial pixels, which is
 * what stops the tray's glass edges picking up a grey halo against white.
 *
 * Cost is one readback per *video* frame (not per animation frame), on a
 * buffer capped at `maxWidth`, drawn with `object-fit: cover` geometry to
 * match what the raw <video> did.
 */
/** Below this alpha a pixel is left as shot: 1/a is too unstable to trust. */
const UNPREMULT_FLOOR = 0.22;
/** And even above it, never brighten a pixel by more than this. */
const UNPREMULT_MAX_GAIN = 2.2;

export class HeroVideoKey {
  constructor({ video, canvas, threshold = 0.045, tolerance = 0.12, softness = 0.06, maxWidth = 1280 } = {}) {
    this.video = video;
    this.canvas = canvas;
    this.threshold = threshold;
    this.tolerance = tolerance;
    this.softness = softness;
    this.maxWidth = maxWidth;

    this.destroyed = false;
    this.frameHandle = null;
    this.rafHandle = null;

    // willReadFrequently keeps the surface in main memory: without it every
    // getImageData is a GPU readback and the cost roughly triples.
    this.ctx = canvas?.getContext("2d", { willReadFrequently: true, alpha: true });
    if (!this.video || !this.ctx) return;

    this.onResize = () => this.resize();
    window.addEventListener("resize", this.onResize);

    this.resize();
    this.start();
  }

  /** Matches the canvas to its CSS box, capped so the per-frame loop stays cheap. */
  resize() {
    if (this.destroyed || !this.canvas) return;

    // The canvas may still be `display: none` at construction (CSS reveals it
    // on [data-keyed]), in which case its own rect is 0x0 — fall back to the
    // wrapper, which is always laid out.
    let { width, height } = this.canvas.getBoundingClientRect();
    if (!width || !height) {
      const box = this.canvas.parentElement?.getBoundingClientRect();
      width = box?.width || 0;
      height = box?.height || 0;
    }
    if (!width || !height) return;

    const scale = Math.min(1, this.maxWidth / width);
    const w = Math.max(1, Math.round(width * scale));
    const h = Math.max(1, Math.round(height * scale));

    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
    }
  }

  start() {
    const { video } = this;

    const render = () => {
      if (this.destroyed) return;
      this.drawFrame();
      this.schedule(render);
    };

    // Only paint when there is actually a new frame to paint.
    if (typeof video.requestVideoFrameCallback === "function") {
      this.schedule = (fn) => {
        this.frameHandle = video.requestVideoFrameCallback(fn);
      };
    } else {
      this.schedule = (fn) => {
        this.rafHandle = requestAnimationFrame(fn);
      };
    }

    this.schedule(render);
  }

  drawFrame() {
    const { video, ctx, canvas } = this;
    if (!video.videoWidth) return;
    if (!canvas.width || !canvas.height) {
      this.resize();
      if (!canvas.width || !canvas.height) return;
    }

    // object-fit: cover — fill the box, centre the overflow.
    const scale = Math.max(canvas.width / video.videoWidth, canvas.height / video.videoHeight);
    const dw = video.videoWidth * scale;
    const dh = video.videoHeight * scale;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, (canvas.width - dw) / 2, (canvas.height - dh) / 2, dw, dh);

    let frame;
    try {
      frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    } catch {
      // A cross-origin frame would taint the canvas. Ours is same-origin, but
      // if that ever changes, fall back to the unkeyed video rather than
      // throwing on every frame.
      this.fallbackToVideo();
      return;
    }

    const d = frame.data;
    const lo = this.threshold * 255;
    const hi = (this.threshold + this.tolerance) * 255;
    const span = hi - lo || 1;
    void this.softness;

    for (let i = 0; i < d.length; i += 4) {
      const r = d[i];
      const g = d[i + 1];
      const b = d[i + 2];

      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      if (lum <= lo) {
        d[i + 3] = 0;
        continue;
      }
      if (lum >= hi) continue; // already fully opaque

      let t = (lum - lo) / span;
      t = t * t * (3 - 2 * t); // smoothstep: no visible banding on the ramp

      d[i + 3] = t * 255;

      // The footage is a subject lit against black, i.e. already premultiplied
      // by its own coverage, so partial pixels need dividing back out or the
      // tray's glass edges composite their residual black onto the white page.
      //
      // The gain is capped: at low alpha 1/a explodes, and the footage's
      // motion blur is full of low-alpha pixels, so an uncapped divide bleaches
      // the whole blur to white. Below UNPREMULT_FLOOR the pixel is left as
      // shot — it is nearly transparent anyway.
      if (t > UNPREMULT_FLOOR) {
        const inv = Math.min(1 / t, UNPREMULT_MAX_GAIN);
        const nr = r * inv;
        const ng = g * inv;
        const nb = b * inv;
        d[i] = nr > 255 ? 255 : nr;
        d[i + 1] = ng > 255 ? 255 : ng;
        d[i + 2] = nb > 255 ? 255 : nb;
      }
    }

    ctx.putImageData(frame, 0, 0);
  }

  /** Hands display back to the raw <video> element. */
  fallbackToVideo() {
    this.destroy();
    this.video?.closest(".hero-video__bg")?.removeAttribute("data-keyed");
  }

  destroy() {
    if (this.destroyed) return;
    this.destroyed = true;

    window.removeEventListener("resize", this.onResize);

    if (this.frameHandle && typeof this.video?.cancelVideoFrameCallback === "function") {
      this.video.cancelVideoFrameCallback(this.frameHandle);
    }
    if (this.rafHandle) cancelAnimationFrame(this.rafHandle);

    if (this.canvas) {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.width = this.canvas.height = 0;
    }
  }
}
