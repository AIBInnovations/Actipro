import { gsap, ScrollTrigger } from "./gsapSetup.js";

/**
 * Port of the reference `Preloader`.
 *
 * The apple fills from the bottom as the partner frame sequence decodes: the
 * clip rect is driven in steps at 20/50/80/100%, then the black and orange
 * layers slide off and hand the hero its entrance.
 */
export class Preloader {
  constructor(lenis) {
    this.progressText = document.querySelector(".loader-text__number");
    this.clipPath = document.querySelector("#clip-apple");

    this.lenisSmooth = lenis;
    this.lenis = lenis.getLenisInstance();
    this.lenis.stop();

    this.destroyed = false;
    this.completeTimer = null;

    // The loader's own tweens fire from async callbacks, after the outer
    // gsap.context() has closed, so it keeps a context of its own to revert.
    this.ctx = gsap.context(() => {});
  }

  update(percent) {
    if (this.destroyed) return;

    this.progressText.textContent = `${percent}`;

    this.ctx.add(() => this.step(percent));
  }

  /** Applies the step that matches this progress reading. */
  step(percent) {
    if (percent == 20) {
      gsap.to(this.clipPath, { duration: 0.5, yPercent: -20, ease: "EA-ease" });
      gsap.to(".loader-gradient", { duration: 0.5, opacity: 0.2, ease: "linear" });
    }

    if (percent == 50) {
      gsap.to(this.clipPath, { duration: 0.5, yPercent: -35, ease: "EA-ease" });
      gsap.to(".loader-gradient", { duration: 0.5, opacity: 0.4, ease: "linear" });
    }

    if (percent == 80) {
      gsap.to(this.clipPath, { duration: 0.5, yPercent: -80, ease: "EA-ease" });
      gsap.to(".loader-gradient", { duration: 0.5, opacity: 0.8, ease: "linear" });
    }

    if (percent == 100) {
      gsap.to(this.clipPath, { duration: 0.5, yPercent: -100, ease: "EA-ease" });
      gsap.to(".loader-gradient", { duration: 0.5, opacity: 1, ease: "linear" });

      this.completeTimer = setTimeout(() => this.complete(), 700);
    }
  }

  complete() {
    if (this.destroyed) return;

    this.ctx.add(() => this.runCompleteTimeline());
  }

  runCompleteTimeline() {
    ScrollTrigger.refresh();

    const navbarChildren = document.querySelector(".navbar-container").children;
    const heroBottomChildren = document.querySelector(".hero-bottom").children;

    gsap
      .timeline({ defaults: { ease: "EA-loader" } })

      .to({}, { duration: 1.5 }, 0)
      .to(".loader-apple, .loader-circles, .loader-gradient", { autoAlpha: 0, duration: 0.6 }, 0.5)
      .to(".loader-text span", { autoAlpha: 0, yPercent: 100, stagger: 0.05, duration: 0.6 }, 0.3)
      .to([".loader-layer.is--black", ".loader-layer.is--orange"], { yPercent: 100, duration: 1.3, stagger: 0.03 }, 0.8)
      .from(navbarChildren, { y: -20, autoAlpha: 0, stagger: 0.1, duration: 1.2, clearProps: "all" }, 1)
      .from(".markers-inner", { x: 10, autoAlpha: 0, clearProps: "all", duration: 1.2 }, 1.5)
      .from(heroBottomChildren, { x: -20, autoAlpha: 0, stagger: 0.08, duration: 1.2, clearProps: "all" }, 1.2)
      .from(
        ".hero-tagline, .hero-h1, .hero-p.is--portrait, .hero .cta-button",
        { y: 30, autoAlpha: 0, stagger: 0.1, clearProps: "all", duration: 1.2 },
        0.9,
      )
      .set(".loader", { autoAlpha: 0 })
      .add(() => {
        this.lenis.start();
      });
  }

  destroy() {
    this.destroyed = true;
    clearTimeout(this.completeTimer);
    this.ctx.revert();
  }
}
