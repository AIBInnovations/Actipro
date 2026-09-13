import { gsap } from "./gsapSetup.js";

/**
 * Port of the reference `SequenceScrollHandler`.
 *
 * Owns one <canvas>, the frame cursor for its sequence, and the scrubbed
 * timeline that section animations attach their own tweens to. Frames are
 * composited on an offscreen buffer first, then blitted, so a repaint never
 * shows a half-drawn frame.
 */
export class SequenceScrollHandler {
  constructor(lenis, imageSequenceLoader, preloader = null, id = null) {
    this.id = id;
    this.mm = gsap.matchMedia();

    this.preloader = preloader;
    this.updateFrame = this.updateFrame.bind(this);

    this.imageSequenceLoader = imageSequenceLoader;

    this.imageSequenceLoader.onOrientationChange = async () => {
      await this.preloadImages();
    };

    this.lenis = lenis.getLenisInstance();

    this.canvas = null;
    this.context = null;
    this.bufferCanvas = document.createElement("canvas");
    this.bufferContext = this.bufferCanvas.getContext("2d");
    this.trigger = null;
    this.extension = null;
    this.totalFrames = null;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.loaderAnimationCompleted = false;
    this.animationStarted = false;
    this.destroyed = false;

    this.images = [];
    this.preRenderedFrames = [];

    this.frameDuration = 1;

    this.device = {};
    this.setupDeviceConditions();

    this.timeline = null;
    this.onCompleteCB = null;
  }

  init() {
    this.setCanvasSize();
    this.bindEvents();
    this.preloadImages();

    return this;
  }

  setCanvas(selector) {
    this.canvas = document.querySelector(selector);
    this.context = this.canvas.getContext("2d");

    return this;
  }

  setAnimationTrigger(selector) {
    this.trigger = document.querySelector(selector);

    return this;
  }

  setInitialConfig(config) {
    this.totalFrames = config.totalFrames;

    this.frames = {
      currentIndex: 0,
      maxIndex: this.totalFrames,
      lastRenderedFrame: -1,
      threshold: 0.2,
    };

    return this;
  }

  onComplete(cb) {
    this.onCompleteCB = cb;
    return this;
  }

  setTimeline({ refreshPriority = 1, end = "bottom bottom" }) {
    this.timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: this.trigger,
          start: "clamp(top top)",
          end,
          scrub: 1.05,
          refreshPriority,
        },
      })
      .to({}, { duration: 10 }, 0);

    return this;
  }

  setupDeviceConditions() {
    this.mm.add(
      {
        isLandscape: "(orientation: landscape)",
        isPortrait: "(orientation: portrait)",
      },
      (context) => {
        this.device = {
          isMobile: context.conditions.isMobile,
          isTablet: context.conditions.isTablet,
          isDesktop: context.conditions.isDesktop,
          isDesktopPortrait: context.conditions.isDesktopPortrait,
          isLandscape: context.conditions.isLandscape,
          isPortrait: context.conditions.isPortrait,
          isTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
        };

        this.frameDuration = this.device.isDesktop ? 0.98 : 0.95;
      },
    );
  }

  setCanvasSize() {
    if (!this.canvas) return;

    const { width, height } = this.canvas.getBoundingClientRect();

    this.canvasWidth = width;
    this.canvasHeight = height;

    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;

    this.bufferCanvas.width = this.canvas.width;
    this.bufferCanvas.height = this.canvas.height;
  }

  bindEvents() {
    this.handleResize = () => {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        if (this.destroyed) return;
        this.setCanvasSize();
        this.loadImage(Math.floor(this.frames.currentIndex));
      }, 400);
    };

    window.addEventListener("resize", this.handleResize);
  }

  async preloadImages() {
    let hasReachedFull = false;

    const { images } = await this.imageSequenceLoader.preload((percent) => {
      if (this.preloader && !hasReachedFull) {
        // The preloader's bar is driven by this one sequence, so its progress
        // is doubled: the bar fills while the first half of the frames land.
        const adjustedPercent = Math.min(100, Math.round(percent * 2));

        this.preloader.update(adjustedPercent);
        if (adjustedPercent >= 100) hasReachedFull = true;
      }
    });

    if (this.destroyed) return;

    this.images = images;

    if (this.onCompleteCB) this.onCompleteCB();

    this.loadImage(this.frames.currentIndex);
    if (!this.animationStarted) this.startAnimation();
  }

  loadImage(index) {
    if (this.destroyed || !this.context) return;
    if (index < 0 || index > this.frames.maxIndex) return;

    const img = this.images[index];
    if (!img) return;

    this.prepareFrame(img);

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.bufferCanvas, 0, 0);

    this.frames.currentIndex = index;
  }

  /** Draws `img` into the buffer with `object-fit: cover` geometry. */
  prepareFrame(img) {
    const scaleX = this.bufferCanvas.width / img.width;
    const scaleY = this.bufferCanvas.height / img.height;
    const scale = Math.max(scaleX, scaleY);

    const newWidth = img.width * scale;
    const newHeight = img.height * scale;

    const offsetX = (this.bufferCanvas.width - newWidth) / 2;
    const offsetY = (this.bufferCanvas.height - newHeight) / 2;

    this.bufferContext.clearRect(0, 0, this.bufferCanvas.width, this.bufferCanvas.height);
    this.bufferContext.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  }

  startAnimation() {
    this.animationStarted = true;
  }

  /**
   * Returns a tween vars object that walks the frame cursor to `index`.
   * Section timelines add these at their own positions, which is what ties
   * partner/bag beats to specific points in the scrubbed scroll range.
   */
  updateFrame(index, duration = 10) {
    return {
      currentIndex: index,
      roundProps: "currentIndex",
      ease: "none",
      duration,
      onUpdate: () => {
        if (
          this.frames.currentIndex !== this.frames.lastRenderedFrame &&
          Math.abs(this.lenis?.velocity) > this.frames.threshold
        ) {
          this.loadImage(this.frames.currentIndex);
          this.frames.lastRenderedFrame = this.frames.currentIndex;
        }
      },
      onComplete: () => {
        this.loadImage(this.frames.maxIndex);
      },
    };
  }

  destroy() {
    this.destroyed = true;
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.handleResize);

    this.timeline?.scrollTrigger?.kill();
    this.timeline?.kill();
    this.mm.revert();
    this.imageSequenceLoader.destroy();

    this.images = [];
    this.context = null;
    this.canvas = null;
  }
}
