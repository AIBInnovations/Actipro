import { gsap } from "./gsapSetup.js";

/**
 * Port of the reference `SecuenceAnimations`.
 *
 * Attaches the partner-card and quality-heading choreography onto the
 * scrubbed timelines owned by each SequenceScrollHandler, so card swaps land
 * on exact frames of the canvas sequence.
 */
export class SecuenceAnimations {
  constructor() {
    this.mm = gsap.matchMedia();
  }

  partnersAnimation(scrollHandler) {
    this.mm.add(
      {
        isLandscape: "(orientation: landscape)",
        isPortrait: "(orientation: portrait)",
      },
      (context) => {
        this.device = {
          isLandscape: context.conditions.isLandscape,
          isPortrait: context.conditions.isPortrait,
        };

        const { isLandscape, isPortrait } = context.conditions;

        const timeline = scrollHandler.timeline;
        if (!timeline) return;

        const partnersCards = document.querySelectorAll(".partners-card");
        const partnersHeader = document.querySelector(".partners-header__h2");
        const innerCards = document.querySelectorAll(".partners-card__inner");

        if (isLandscape) {
          timeline.to(scrollHandler.frames, scrollHandler.updateFrame(60, 1.5), 0.3);
          timeline.to(scrollHandler.frames, scrollHandler.updateFrame(110, 2), 3);
          timeline.to(scrollHandler.frames, scrollHandler.updateFrame(160, 2), 6);
          timeline.to(scrollHandler.frames, scrollHandler.updateFrame(scrollHandler.frames.maxIndex, 2), 8);

          timeline.to(partnersHeader, { yPercent: 100, autoAlpha: 0, duration: 2 }, 0.1);

          // first state
          timeline.from(partnersCards, { xPercent: 150, yPercent: 100, autoAlpha: 0, duration: 2 }, 0);

          // second state
          timeline.to(partnersCards, { xPercent: 290, duration: 2 }, 3);
          timeline.to(innerCards[0], { autoAlpha: 0, duration: 0.3 }, 4);
          timeline.to(innerCards[1], { autoAlpha: 1, duration: 0.3 }, 4);

          // last state
          timeline.to(partnersCards, { xPercent: 100, yPercent: 100, duration: 4 }, 6);
          timeline.to(innerCards[1], { autoAlpha: 0, duration: 0.3 }, 7.3);
          timeline.to(innerCards[2], { autoAlpha: 1, duration: 0.3 }, 7.3);

          timeline.to(innerCards[2], { autoAlpha: 0, duration: 0.3 }, 9.4);
          timeline.to(innerCards[3], { autoAlpha: 1, duration: 0.3 }, 9.4);
        }

        if (isPortrait) {
          timeline.to(scrollHandler.frames, scrollHandler.updateFrame(scrollHandler.totalFrames, 10), 0);
          timeline.to(partnersHeader, { yPercent: 100, autoAlpha: 0, duration: 2.2 }, 1.3);

          timeline.from(partnersCards, { y: 100, scale: 0.9, autoAlpha: 0, duration: 1 }, 1.3);
          timeline.to(innerCards[0], { autoAlpha: 0, scale: 0.9, duration: 0.3 }, 4.5);
          timeline.to(innerCards[1], { autoAlpha: 1, duration: 0.2 }, 4.9);

          timeline.to(partnersCards, { y: -100, duration: 2 }, 5.5);

          timeline.to(innerCards[1], { autoAlpha: 0, scale: 0.9, duration: 0.3 }, 7);
          timeline.to(innerCards[2], { autoAlpha: 1, duration: 0.2 }, 7.4);

          timeline.to(innerCards[2], { autoAlpha: 0, scale: 0.9, duration: 0.3 }, 9);
          timeline.to(innerCards[3], { autoAlpha: 1, duration: 0.2 }, 9.3);
        }
      },
    );
  }

  bagAnimation(scrollHandler) {
    this.mm.add(
      {
        isLandscape: "(orientation: landscape)",
        isPortrait: "(orientation: portrait)",
      },
      (context) => {
        this.device = {
          isLandscape: context.conditions.isLandscape,
          isPortrait: context.conditions.isPortrait,
        };

        const blocks = document.querySelectorAll(".quality-block");
        const timeline = scrollHandler.timeline;
        if (!timeline) return;

        timeline.to(scrollHandler.frames, scrollHandler.updateFrame(scrollHandler.frames.maxIndex, 10), 0);
        timeline.to(blocks[0], { y: -60, autoAlpha: 0, duration: 2 }, 1.3);
        timeline.fromTo(blocks[1], { y: 60, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 2 }, 7);
      },
    );
  }

  destroy() {
    this.mm.revert();
  }
}
