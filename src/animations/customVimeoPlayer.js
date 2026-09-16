import Player from "@vimeo/player";

/**
 * Port of the reference `CustomVimeoPlayer`.
 *
 * Drives a Vimeo background iframe through the Player API and reflects every
 * state onto `data-vimeo-*` attributes; styles.css does the rest, so the play,
 * pause, timeline, mute and fullscreen controls are all local markup.
 */
export class CustomVimeoPlayer {
  constructor() {
    this.players = [];
    this.listeners = [];
    this.cleanups = [];
    this.initVimeoPlayer();
  }

  /** Registers a Player event handler so `destroy()` can detach exactly it. */
  on(player, event, handler) {
    player.on(event, handler);
    this.listeners.push([player, event, handler]);
  }

  initVimeoPlayer() {
    document.querySelectorAll("[data-vimeo-player-init]").forEach((el, i) => this.playerInit(el, i));
  }

  playerInit(vimeoElement, index) {
    const vimeoVideoID = vimeoElement.getAttribute("data-vimeo-video-id");
    if (!vimeoVideoID) return;

    const iframe = vimeoElement.querySelector("iframe");
    if (!iframe) return;

    const vimeoVideoURL = `https://player.vimeo.com/video/${vimeoVideoID}?api=1&background=1&autoplay=0&loop=0&muted=1`;
    iframe.setAttribute("src", vimeoVideoURL);

    const videoIndexID = "vimeo-player-advanced-index-" + index;
    vimeoElement.setAttribute("id", videoIndexID);

    const iframeID = vimeoElement.id;
    const player = new Player(iframeID);
    this.players.push(player);

    let videoAspectRatio;

    if (vimeoElement.getAttribute("data-vimeo-update-size") === "true") {
      player.getVideoWidth().then((width) => {
        player.getVideoHeight().then((height) => {
          const beforeEl = vimeoElement.querySelector(".vimeo-player__before");
          if (beforeEl) beforeEl.style.paddingTop = (height / width) * 100 + "%";
        });
      });
    }

    if (vimeoElement.getAttribute("data-vimeo-update-size") === "cover") {
      player.getVideoWidth().then((width) => {
        player.getVideoHeight().then((height) => {
          videoAspectRatio = height / width;
          const beforeEl = vimeoElement.querySelector(".vimeo-player__before");
          if (beforeEl) beforeEl.style.paddingTop = "0%";
          adjustVideoSizing();
        });
      });
    }

    /** Scales the iframe so the video covers its (Flip-resized) container. */
    function adjustVideoSizing() {
      const containerRatio = vimeoElement.offsetHeight / vimeoElement.offsetWidth;

      const iframeWrapper = vimeoElement.querySelector(".vimeo-player__iframe");
      if (iframeWrapper && videoAspectRatio) {
        if (containerRatio > videoAspectRatio) {
          const widthFactor = containerRatio / videoAspectRatio;
          iframeWrapper.style.width = widthFactor * 100 + "%";
          iframeWrapper.style.height = "100%";
        } else {
          const heightFactor = videoAspectRatio / containerRatio;
          iframeWrapper.style.height = heightFactor * 100 + "%";
          iframeWrapper.style.width = "100%";
        }
      }
    }

    if (vimeoElement.getAttribute("data-vimeo-update-size") === "cover") {
      window.addEventListener("resize", adjustVideoSizing);
      this.cleanups.push(() => window.removeEventListener("resize", adjustVideoSizing));
    }

    this.on(player, "play", () => {
      vimeoElement.setAttribute("data-vimeo-loaded", "true");
      vimeoElement.setAttribute("data-vimeo-playing", "true");
      adjustVideoSizing();
    });

    // The Flip timeline calls this once the showreel has finished resizing.
    window.adjustVideoSizing = adjustVideoSizing;
    this.cleanups.push(() => {
      if (window.adjustVideoSizing === adjustVideoSizing) delete window.adjustVideoSizing;
    });

    let checkVisibility = null;

    if (vimeoElement.getAttribute("data-vimeo-autoplay") === "false") {
      player.setVolume(1);
      player.pause();
    } else {
      player.setVolume(0);
      vimeoElement.setAttribute("data-vimeo-muted", "true");

      if (vimeoElement.getAttribute("data-vimeo-paused-by-user") === "false") {
        checkVisibility = () => {
          const rect = vimeoElement.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          if (inView) vimeoPlayerPlay();
          else vimeoPlayerPause();
        };

        checkVisibility();
        window.addEventListener("scroll", checkVisibility);
        this.cleanups.push(() => window.removeEventListener("scroll", checkVisibility));
      }
    }

    function vimeoPlayerPlay() {
      vimeoElement.setAttribute("data-vimeo-activated", "true");
      vimeoElement.setAttribute("data-vimeo-playing", "true");
      player.play();
    }

    function vimeoPlayerPause() {
      player.pause();
    }

    this.on(player, "pause", () => {
      vimeoElement.setAttribute("data-vimeo-playing", "false");
    });

    const playBtn = vimeoElement.querySelector('[data-vimeo-control="play"]');
    if (playBtn) {
      const onPlay = () => {
        // Always start silent to avoid a pop, then honour the mute state.
        player.setVolume(0);
        vimeoPlayerPlay();

        if (vimeoElement.getAttribute("data-vimeo-muted") === "true") player.setVolume(0);
        else player.setVolume(1);
      };
      playBtn.addEventListener("click", onPlay);
      this.cleanups.push(() => playBtn.removeEventListener("click", onPlay));
    }

    const pauseBtn = vimeoElement.querySelector('[data-vimeo-control="pause"]');
    if (pauseBtn) {
      const onPause = () => {
        vimeoPlayerPause();
        if (vimeoElement.getAttribute("data-vimeo-autoplay") === "true") {
          vimeoElement.setAttribute("data-vimeo-paused-by-user", "true");
          if (checkVisibility) window.removeEventListener("scroll", checkVisibility);
        }
      };
      pauseBtn.addEventListener("click", onPause);
      this.cleanups.push(() => pauseBtn.removeEventListener("click", onPause));
    }

    const muteBtn = vimeoElement.querySelector('[data-vimeo-control="mute"]');
    if (muteBtn) {
      const onMute = () => {
        if (vimeoElement.getAttribute("data-vimeo-muted") === "false") {
          player.setVolume(0);
          vimeoElement.setAttribute("data-vimeo-muted", "true");
        } else {
          player.setVolume(1);
          vimeoElement.setAttribute("data-vimeo-muted", "false");
        }
      };
      muteBtn.addEventListener("click", onMute);
      this.cleanups.push(() => muteBtn.removeEventListener("click", onMute));
    }

    const fullscreenSupported = !!(
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    );

    const fullscreenBtn = vimeoElement.querySelector('[data-vimeo-control="fullscreen"]');

    if (!fullscreenSupported && fullscreenBtn) fullscreenBtn.style.display = "none";

    if (fullscreenBtn) {
      const onFullscreen = () => {
        const fullscreenElement = document.getElementById(iframeID);
        if (!fullscreenElement) return;

        const isFullscreen =
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement;

        if (isFullscreen) {
          vimeoElement.setAttribute("data-vimeo-fullscreen", "false");
          (
            document.exitFullscreen ||
            document.webkitExitFullscreen ||
            document.mozCancelFullScreen ||
            document.msExitFullscreen
          ).call(document);
        } else {
          vimeoElement.setAttribute("data-vimeo-fullscreen", "true");
          (
            fullscreenElement.requestFullscreen ||
            fullscreenElement.webkitRequestFullscreen ||
            fullscreenElement.mozRequestFullScreen ||
            fullscreenElement.msRequestFullscreen
          ).call(fullscreenElement);
        }
      };
      fullscreenBtn.addEventListener("click", onFullscreen);
      this.cleanups.push(() => fullscreenBtn.removeEventListener("click", onFullscreen));
    }

    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      vimeoElement.setAttribute("data-vimeo-fullscreen", isFullscreen ? "true" : "false");
    };

    ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((event) => {
      document.addEventListener(event, handleFullscreenChange);
      this.cleanups.push(() => document.removeEventListener(event, handleFullscreenChange));
    });

    function secondsTimeSpanToHMS(s) {
      let h = Math.floor(s / 3600);
      s -= h * 3600;
      let m = Math.floor(s / 60);
      s -= m * 60;
      return m + ":" + (s < 10 ? "0" + s : s);
    }

    const vimeoDuration = vimeoElement.querySelector("[data-vimeo-duration]");
    player.getDuration().then((duration) => {
      if (vimeoDuration) vimeoDuration.textContent = secondsTimeSpanToHMS(duration);

      vimeoElement.querySelectorAll('[data-vimeo-control="timeline"], progress').forEach((el) => {
        el.setAttribute("max", duration);
      });
    });

    const timelineElem = vimeoElement.querySelector('[data-vimeo-control="timeline"]');
    const progressElem = vimeoElement.querySelector("progress");

    function updateTimelineValue() {
      player.getDuration().then(() => {
        const timeVal = timelineElem.value;
        player.setCurrentTime(timeVal);
        if (progressElem) progressElem.value = timeVal;
      });
    }

    if (timelineElem) {
      ["input", "change"].forEach((evt) => {
        timelineElem.addEventListener(evt, updateTimelineValue);
        this.cleanups.push(() => timelineElem.removeEventListener(evt, updateTimelineValue));
      });
    }

    this.on(player, "timeupdate", (data) => {
      if (timelineElem) timelineElem.value = data.seconds;
      if (progressElem) progressElem.value = data.seconds;
      if (vimeoDuration) vimeoDuration.textContent = secondsTimeSpanToHMS(Math.trunc(data.seconds));
    });

    let vimeoHoverTimer;
    const onMouseMove = () => {
      if (vimeoElement.getAttribute("data-vimeo-hover") === "false") {
        vimeoElement.setAttribute("data-vimeo-hover", "true");
      }
      clearTimeout(vimeoHoverTimer);
      vimeoHoverTimer = setTimeout(() => vimeoElement.setAttribute("data-vimeo-hover", "false"), 3000);
    };
    vimeoElement.addEventListener("mousemove", onMouseMove);
    this.cleanups.push(() => {
      clearTimeout(vimeoHoverTimer);
      vimeoElement.removeEventListener("mousemove", onMouseMove);
    });

    this.on(player, "ended", () => {
      if (vimeoElement.getAttribute("data-vimeo-autoplay") === "false") {
        vimeoElement.setAttribute("data-vimeo-activated", "false");
        vimeoElement.setAttribute("data-vimeo-playing", "false");
        player.unload();
      } else {
        player.play();
      }
    });
  }

  destroy() {
    this.cleanups.forEach((fn) => fn());
    this.cleanups = [];

    // Detach handlers and unload rather than `player.destroy()`, which would
    // rip the iframe out of React's tree; the SDK returns the same instance
    // for this element on the next init.
    this.listeners.forEach(([player, event, handler]) => {
      try {
        player.off(event, handler);
      } catch {
        /* the player may already be gone */
      }
    });
    this.listeners = [];

    this.players.forEach((p) => {
      try {
        p.unload();
      } catch {
        /* nothing loaded */
      }
    });
    this.players = [];
  }
}
