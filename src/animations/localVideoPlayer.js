/**
 * Drives the showreel player off a local `<video>` element.
 *
 * This replaces `CustomVimeoPlayer`, which drove a Vimeo iframe through their
 * Player API. The film is ours and self-hosted now, so there is no third-party
 * SDK, no embed request and nothing that can 401.
 *
 * The `data-vimeo-*` attribute names are kept deliberately: styles.css keys
 * every control state off them, so renaming would mean rewriting the whole
 * player stylesheet for no behavioural gain. Read them as "player state".
 *
 * Contract, unchanged from the Vimeo version:
 *   data-vimeo-playing         is it playing right now
 *   data-vimeo-activated       has it ever been started (hides the poster)
 *   data-vimeo-loaded          first frame has painted
 *   data-vimeo-muted           mute button state
 *   data-vimeo-fullscreen      fullscreen state
 *   data-vimeo-hover           pointer moved recently, so show the chrome
 *   data-vimeo-paused-by-user  autoplay players stop re-starting on scroll
 */
export class LocalVideoPlayer {
  constructor() {
    this.cleanups = [];
    document.querySelectorAll("[data-vimeo-player-init]").forEach((el, i) => this.playerInit(el, i));
  }

  /** Registers a listener so `destroy()` can detach exactly it. */
  listen(target, event, handler, options) {
    target.addEventListener(event, handler, options);
    this.cleanups.push(() => target.removeEventListener(event, handler, options));
  }

  playerInit(root, index) {
    const video = root.querySelector("video.vimeo-player__iframe");
    if (!video) return;

    root.setAttribute("id", `local-player-${index}`);

    const autoplay = root.getAttribute("data-vimeo-autoplay") === "true";
    const durationEl = root.querySelector("[data-vimeo-duration]");
    const timeline = root.querySelector('[data-vimeo-control="timeline"]');
    const progress = root.querySelector("progress");

    /** m:ss, matching the markup's authored placeholder. */
    const clock = (s) => {
      if (!Number.isFinite(s)) return "0:00";
      const total = Math.max(0, Math.trunc(s));
      const m = Math.floor(total / 60);
      const sec = total % 60;
      return `${m}:${sec < 10 ? "0" : ""}${sec}`;
    };

    // `object-fit: cover` on the element already does what the Vimeo version
    // had to compute by hand, so the Flip timeline's `window.adjustVideoSizing?.()`
    // is left undefined on purpose: the optional call is a no-op and the video
    // re-covers itself when the container resizes.

    video.muted = true;
    root.setAttribute("data-vimeo-muted", "true");

    const play = () => {
      root.setAttribute("data-vimeo-activated", "true");
      root.setAttribute("data-vimeo-playing", "true");
      // A rejected play() is normal (autoplay policy); reflect the real state.
      video.play().catch(() => root.setAttribute("data-vimeo-playing", "false"));
    };

    const pause = () => video.pause();

    this.listen(video, "loadeddata", () => {
      root.setAttribute("data-vimeo-loaded", "true");
      const max = video.duration;
      if (Number.isFinite(max)) {
        if (durationEl) durationEl.textContent = clock(max);
        [timeline, progress].forEach((el) => el && el.setAttribute("max", String(max)));
      }
    });

    this.listen(video, "playing", () => {
      root.setAttribute("data-vimeo-loaded", "true");
      root.setAttribute("data-vimeo-playing", "true");
    });

    this.listen(video, "pause", () => root.setAttribute("data-vimeo-playing", "false"));

    this.listen(video, "timeupdate", () => {
      const t = video.currentTime;
      if (timeline) timeline.value = String(t);
      if (progress) progress.value = t;
      if (durationEl) durationEl.textContent = clock(t);
    });

    this.listen(video, "ended", () => {
      if (autoplay) {
        video.currentTime = 0;
        play();
        return;
      }
      // Hand the poster and play button back, the way the Vimeo build did.
      root.setAttribute("data-vimeo-playing", "false");
      root.setAttribute("data-vimeo-activated", "false");
      video.currentTime = 0;
    });

    const playBtn = root.querySelector('[data-vimeo-control="play"]');
    if (playBtn) {
      this.listen(playBtn, "click", () => {
        // Honour the mute button rather than always starting silent.
        video.muted = root.getAttribute("data-vimeo-muted") === "true";
        play();
      });
    }

    const pauseBtn = root.querySelector('[data-vimeo-control="pause"]');
    if (pauseBtn) {
      this.listen(pauseBtn, "click", () => {
        pause();
        if (autoplay) root.setAttribute("data-vimeo-paused-by-user", "true");
      });
    }

    const muteBtn = root.querySelector('[data-vimeo-control="mute"]');
    if (muteBtn) {
      this.listen(muteBtn, "click", () => {
        const nextMuted = root.getAttribute("data-vimeo-muted") === "false";
        video.muted = nextMuted;
        root.setAttribute("data-vimeo-muted", nextMuted ? "true" : "false");
      });
    }

    if (timeline) {
      const scrub = () => {
        const t = Number(timeline.value);
        if (Number.isFinite(t)) {
          video.currentTime = t;
          if (progress) progress.value = t;
        }
      };
      ["input", "change"].forEach((evt) => this.listen(timeline, evt, scrub));
    }

    const fullscreenSupported = !!(
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    );

    const fullscreenBtn = root.querySelector('[data-vimeo-control="fullscreen"]');
    if (fullscreenBtn && !fullscreenSupported) fullscreenBtn.style.display = "none";

    if (fullscreenBtn && fullscreenSupported) {
      this.listen(fullscreenBtn, "click", () => {
        const active =
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement;

        if (active) {
          (
            document.exitFullscreen ||
            document.webkitExitFullscreen ||
            document.mozCancelFullScreen ||
            document.msExitFullscreen
          ).call(document);
          return;
        }

        // iOS Safari only offers fullscreen on the video element itself.
        const request =
          root.requestFullscreen ||
          root.webkitRequestFullscreen ||
          root.mozRequestFullScreen ||
          root.msRequestFullscreen;

        if (request) request.call(root);
        else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
      });
    }

    const onFullscreenChange = () => {
      const active =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;
      root.setAttribute("data-vimeo-fullscreen", active ? "true" : "false");
    };

    ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((evt) =>
      this.listen(document, evt, onFullscreenChange),
    );

    // The chrome fades out three seconds after the pointer stops moving.
    let hoverTimer;
    this.listen(root, "mousemove", () => {
      if (root.getAttribute("data-vimeo-hover") === "false") root.setAttribute("data-vimeo-hover", "true");
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => root.setAttribute("data-vimeo-hover", "false"), 3000);
    });
    this.cleanups.push(() => clearTimeout(hoverTimer));

    if (autoplay && root.getAttribute("data-vimeo-paused-by-user") === "false") {
      const checkVisibility = () => {
        const rect = root.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) play();
        else pause();
      };
      checkVisibility();
      this.listen(window, "scroll", checkVisibility, { passive: true });
    }
  }

  destroy() {
    this.cleanups.forEach((fn) => fn());
    this.cleanups = [];
  }
}
