import { gsap, ScrollTrigger, Flip } from "./gsapSetup.js";

/**
 * Port of the reference `HomepageAnimations` - every scroll-driven beat that
 * isn't owned by a canvas sequence.
 *
 * Orientation-specific work goes through `gsap.matchMedia`, so rotating a
 * device tears down and rebuilds only the triggers that differ.
 */
export class HomepageAnimations {
  constructor(lenis) {
    this.lenis = lenis.getLenisInstance();

    this.mm = gsap.matchMedia();
    this.orientation = null;
    this.cleanups = [];
    this.triggers = [];

    this.init();
  }

  init() {
    this.setOrientation();
    this.deliveredVideoScroll();
    this.scrollToNextSection();
    this.heroSectionAnimation();
    this.goalsSectionAnimation();
    this.bowlSectionAnimation();
    this.actionSectionAnimation();
    this.markersAnimation();
    this.joinSectionAnimation();
  }

  /** Creates a ScrollTrigger and records it so `destroy()` can kill it. */
  st(config) {
    const trigger = ScrollTrigger.create(config);
    this.triggers.push(trigger);
    return trigger;
  }

  setOrientation() {
    this.mm.add(
      {
        isLandscape: "(orientation: landscape)",
        isPortrait: "(orientation: portrait)",
      },
      (context) => {
        this.orientation = context.conditions.isLandscape ? "landscape" : "portrait";
      },
    );
  }

  /**
   * Flips the small in-headline showreel into the full-bleed `.showreel`
   * slot as you scroll past the Action section.
   */
  flipVideoAnimation() {
    document.querySelectorAll("[data-flip-video]").forEach((element) => {
      const key = element.dataset.flipVideo;

      const wrapperElements = document.querySelectorAll(`[data-flip-wrapper='${key}']`);
      const targetEl = document.querySelector(`[data-flip-target='${key}']`);

      let tl;

      const flipTimeline = () => {
        if (this.orientation === "portrait") return;

        if (tl) {
          tl.scrollTrigger?.kill();
          tl.kill();
          gsap.set(targetEl, { clearProps: "all" });
        }

        tl = gsap
          .timeline({
            onComplete: () => {
              window.adjustVideoSizing?.();
            },
            scrollTrigger: {
              trigger: wrapperElements[0],
              start: this.orientation === "portrait" ? "top 60%" : "top 50%",
              endTrigger: wrapperElements[1],
              end: this.orientation === "portrait" ? "top top" : "top 10%",
              scrub: 1,
              refreshPriority: 6,
              invalidateOnRefresh: true,
            },
          })
          .add(Flip.fit(targetEl, wrapperElements[1], { ease: "none", duration: 1 }, 0));
      };

      flipTimeline();

      let resizeTimer;
      const onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          flipTimeline();
          ScrollTrigger.refresh();
        }, 200);
      };

      window.addEventListener("resize", onResize);
      this.cleanups.push(() => {
        clearTimeout(resizeTimer);
        window.removeEventListener("resize", onResize);
        tl?.scrollTrigger?.kill();
        tl?.kill();
        // Flip.fit writes inline geometry; drop it so the video returns to
        // its authored place in the headline.
        gsap.set(targetEl, { clearProps: "all" });
      });
    });
  }

  markersAnimation() {
    this.mm.add(
      {
        isLandscape: "(orientation: landscape)",
        isPortrait: "(orientation: portrait)",
      },
      (context) => {
        const { isLandscape } = context.conditions;

        if (!isLandscape) return;

        const overlay = document.querySelector(".markers");
        const markers = Array.from(document.querySelector(".markers-inner").children);
        const sections = document.querySelectorAll("[data-marker]");
        const endSection = document.querySelector("[data-marker-end]");

        const basePath = "M0.5 1H31.5";
        const targetPath =
          "M0.5 4.22581C4.61596 8.8857 11.884 8.8857 16 4.22581L16.3519 3.91083C20.6997 0.0192925 27.3178 0.156903 31.5 4.22581";

        /**
         * Marker colours are theme tokens now, resolved off the element being
         * tweened: `.markers` carries `is--on-dark` while a dark section is
         * behind it (see adaptiveTheme.js), so the same token name resolves to
         * two different values depending on where the page is. Hence the
         * function-based values below - GSAP calls them when the tween starts,
         * whereas a value read once at setup would be frozen in whichever
         * scope happened to be current then.
         */
        const token = (element, name, fallback) => getComputedStyle(element).getPropertyValue(name).trim() || fallback;

        // `--fg-subtle` is rgba(255,255,255,.5) on dark - the original #FFFFFF80.
        const baseColor = (index, element) => token(element, "--fg-subtle", "#FFFFFF80");
        // `--orange-text` is the brand orange on dark and a darkened, readable
        // version of it on white; it falls back to the brand orange itself.
        const targetColor = (index, element) => token(element, "--orange-text", token(element, "--orange", "#f4783e"));

        const deactivateAll = () => {
          markers.forEach((marker) => {
            if (marker.classList.contains("is--active")) {
              const [text, line] = marker.children;
              gsap.to(text, { color: baseColor, opacity: 0.5 });
              gsap.to(line.querySelector("path"), { stroke: baseColor, strokeOpacity: 0.5, morphSVG: basePath });
              marker.classList.remove("is--active");
            }
          });
        };

        const activate = (marker) => {
          if (!marker) return;
          const [text, line] = marker.children;
          gsap.to(text, { color: targetColor, opacity: 1 });
          gsap.to(line.querySelector("path"), { stroke: targetColor, strokeOpacity: 1, morphSVG: targetPath });
          marker.classList.add("is--active");
        };

        /**
         * Those tweens write the *resolved* colour inline, so it stops
         * following the theme the moment the overlay's scope flips underneath
         * it. Re-read the tokens whenever that happens.
         *
         * Colours only: `overwrite: "auto"` drops just the conflicting
         * properties from a tween still in flight, leaving its morph running.
         */
        const repaint = (duration = 0.3) => {
          markers.forEach((marker) => {
            const [text, line] = marker.children;
            const isActive = marker.classList.contains("is--active");
            const color = isActive ? targetColor : baseColor;

            gsap.to(text, { color, opacity: isActive ? 1 : 0.5, duration, overwrite: "auto" });
            gsap.to(line.querySelector("path"), {
              stroke: color,
              strokeOpacity: isActive ? 1 : 0.5,
              duration,
              overwrite: "auto",
            });
          });
        };

        // The markup ships `stroke="white"` on every line that has not been
        // through `activate()` yet, which is invisible on a light page.
        repaint(0);

        const themeObserver = new MutationObserver(() => repaint());
        themeObserver.observe(overlay, { attributes: true, attributeFilter: ["class"] });

        sections.forEach((section, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top 40%",
            end: "bottom 40%",
            onEnter: () => {
              deactivateAll();
              activate(markers[index]);
            },
            onLeaveBack: () => {
              deactivateAll();
              activate(markers[index - 1]);
            },
          });
        });

        ScrollTrigger.create({
          trigger: endSection,
          start: "top 40%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
          animation: gsap.to(markers, { autoAlpha: 0, duration: 0.5 }),
        });

        return () => themeObserver.disconnect();
      },
    );
  }

  heroSectionAnimation() {
    this.mm.add(
      {
        isLandscape: "(orientation: landscape)",
        isPortrait: "(orientation: portrait)",
      },
      (context) => {
        const { isLandscape } = context.conditions;

        if (!isLandscape) return;

        const hero = document.querySelector(".hero");
        const heroChildren = Array.from(hero.children);

        ScrollTrigger.create({
          trigger: hero,
          start: "clamp(top top)",
          end: "bottom 40%",
          pin: true,
          pinSpacing: false,
          scrub: true,
          refreshPriority: 10,
          animation: gsap.to(heroChildren, { autoAlpha: 0, y: 30 }),
        });
      },
    );
  }

  joinSectionAnimation() {
    const section = document.querySelector(".join");
    const header = document.querySelector(".join-header");
    const headerChildren = Array.from(header.children);

    const slider = document.querySelector(".join-slider");
    const sliderItems = slider.querySelectorAll(".join-slider__element");

    const veggies = document.querySelectorAll(".join-floating__img");

    this.st({
      trigger: header,
      start: "top 90%",
      end: "bottom 40%",
      toggleActions: "play none none reverse",
      refreshPriority: 4,
      animation: gsap.from(headerChildren, { autoAlpha: 0, y: 30, stagger: 0.05, duration: 1.2, ease: "EA-ease" }),
    });

    this.st({
      trigger: slider,
      start: "top 100%",
      end: "bottom 40%",
      toggleActions: "play none none reverse",
      refreshPriority: 4,
      animation: gsap.fromTo(
        sliderItems,
        { autoAlpha: 0, x: 300 },
        { autoAlpha: 1, x: 0, stagger: 0.1, ease: "power4.out", duration: 1.5, clearProps: "all" },
      ),
    });

    this.st({
      trigger: section,
      start: "top 60%",
      end: "top 10%",
      toggleActions: "play none none reverse",
      animation: gsap.from(veggies, {
        autoAlpha: 0,
        translateZ: 300,
        stagger: { from: "random", each: 0.05 },
        ease: "EA-ease",
        duration: 1.2,
      }),
    });
  }

  goalsSectionAnimation() {
    const goals = document.querySelector(".goals");
    const header = goals.querySelector(".goals-header");
    const goalsAccordionItems = goals.querySelectorAll(".accordion-css__main-wrappper");

    this.st({
      trigger: goals,
      start: "top 100%",
      end: "bottom 40%",
      toggleActions: "play none none reverse",
      refreshPriority: 8,
      animation: gsap.from(goalsAccordionItems, { y: 150, stagger: 0.08, duration: 1.2, ease: "EA-ease" }),
    });

    this.st({
      trigger: header,
      start: "top 100%",
      end: "bottom 100%",
      toggleActions: "play none none reverse",
      refreshPriority: 8,
      animation: gsap.from(header, { autoAlpha: 0, x: -50, duration: 1.2, ease: "EA-ease" }),
    });
  }

  bowlSectionAnimation() {
    const bowl = document.querySelector(".bowl");

    this.st({
      trigger: bowl,
      start: "bottom 60%",
      end: "bottom 10%",
      scrub: true,
      refreshPriority: 7,
      animation: gsap.to(bowl, { autoAlpha: 0 }),
    });
  }

  actionSectionAnimation() {
    this.mm.add(
      {
        isLandscape: "(orientation: landscape)",
        isPortrait: "(orientation: portrait)",
      },
      (context) => {
        const { isLandscape } = context.conditions;

        const section = document.querySelector(".action");
        const content = section.querySelector(".action-content");
        const contentChildren = Array.from(content.children);

        if (isLandscape) this.flipVideoAnimation();

        ScrollTrigger.create({
          trigger: content,
          start: "top 80%",
          end: "bottom 100%",
          toggleActions: "play none none reverse",
          refreshPriority: 6,
          animation: gsap.from(contentChildren, {
            autoAlpha: 0,
            y: 30,
            stagger: 0.08,
            duration: 1.2,
            ease: "EA-ease",
          }),
        });
      },
    );
  }

  /** Hero auto-advances into Delivered once you nudge it 8% down. */
  scrollToNextSection() {
    this.mm.add(
      {
        isLandscape: "(orientation: landscape)",
        isPortrait: "(orientation: portrait)",
      },
      (context) => {
        const { isLandscape } = context.conditions;

        if (!isLandscape) return;

        document.querySelectorAll("[data-scroll-next]").forEach((section) => {
          const targetSection = document.querySelector(section.dataset.scrollNext);

          ScrollTrigger.create({
            trigger: section,
            start: "clamp(8% 0%)",
            refreshPriority: 11,
            onEnter: () => {
              this.lenis.scrollTo(targetSection, { duration: 1.2 });
            },
          });
        });
      },
    );
  }

  deliveredVideoScroll() {
    const video = document.querySelector(".delivered-video__single");
    if (!video) return;

    try {
      video.pause();
    } catch {
      /* not ready yet */
    }

    const playFromStart = () => {
      video.currentTime = 0;
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const reset = () => {
      try {
        video.pause();
      } catch {
        /* not ready yet */
      }
      video.currentTime = 0;
    };

    this.st({
      trigger: video,
      start: "top 100%",
      end: "bottom 0%",
      invalidateOnRefresh: true,
      onEnter: playFromStart,
      onEnterBack: playFromStart,
      onLeave: reset,
      onLeaveBack: reset,
      refreshPriority: 9,
    });
  }

  destroy() {
    this.cleanups.forEach((fn) => fn());
    this.cleanups = [];
    this.triggers.forEach((t) => {
      t.animation?.kill();
      t.kill();
    });
    this.triggers = [];
    this.mm.revert();
  }
}
