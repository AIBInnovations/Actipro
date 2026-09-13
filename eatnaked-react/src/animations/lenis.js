import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsapSetup.js";

/**
 * Port of the reference `LenisSmooth` class.
 * Lenis drives ScrollTrigger, and GSAP's ticker drives Lenis' RAF loop.
 */
export class LenisSmooth {
  constructor(wrapper, content) {
    this.lenis = null;
    this.wrapper = wrapper;
    this.content = content;
    this.cleanups = [];

    this.config = {
      wheelMultiplier: 0.6,
      duration: 1,
      ...(this.wrapper && { wrapper: this.wrapper }),
      ...(this.content && { content: this.content }),
    };

    this.setUpLenisScroll();
    this.setScrollTo();
  }

  setUpLenisScroll() {
    const lenis = new Lenis({ ...this.config });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    lenis.scrollTo(0, { immediate: true });

    this.lenis = lenis;
    this.cleanups.push(() => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    });
  }

  getLenisInstance() {
    return this.lenis;
  }

  /** Wires every `[data-scrollto]` element to a smooth Lenis scroll. */
  setScrollTo() {
    document.querySelectorAll("[data-scrollto]").forEach((trigger) => {
      const onClick = () => {
        let target = trigger.getAttribute("data-scrollto");
        if (!isNaN(target)) target = parseFloat(target);

        this.lenis.scrollTo(target, { duration: 1.5, lock: true });
      };

      trigger.addEventListener("click", onClick);
      this.cleanups.push(() => trigger.removeEventListener("click", onClick));
    });
  }

  stopLenis() {
    this.lenis.stop();
  }

  startLenis() {
    this.lenis.start();
  }

  destroy() {
    this.cleanups.forEach((fn) => fn());
    this.cleanups = [];
    this.lenis = null;
  }
}
