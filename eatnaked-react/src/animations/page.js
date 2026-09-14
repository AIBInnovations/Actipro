import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsapSetup.js";
import { LenisSmooth } from "./lenis.js";
import { Navbar } from "./navbar.js";
import { ActiveLinks } from "./activeLinks.js";
import { Accordion } from "./accordion.js";

/**
 * Bootstrap for the internal pages.
 *
 * `initHomepage` cannot be reused here: HomepageAnimations reaches straight
 * for `.goals`, `.bowl`, `.action` and friends and would throw on any page
 * that doesn't have them, and the preloader belongs to the first paint of the
 * site, not to every route change.
 *
 * What every page does share is the smooth scroller, the overlay menu, and one
 * generic reveal - anything marked `[data-reveal]` rises into place once, and
 * anything marked `[data-reveal-group]` staggers its children.
 *
 * Same gsap.context() discipline as the homepage: the reveals are `gsap.from`,
 * so only `ctx.revert()` restores the authored DOM on unmount.
 */
export function initPage() {
  const reduced = prefersReducedMotion();

  let teardown = () => {};

  const ctx = gsap.context(() => {
    const lenis = new LenisSmooth();
    const navbar = new Navbar(lenis);
    const activeLinks = new ActiveLinks();
    const accordion = new Accordion();

    const triggers = [];

    const reveal = (element, vars) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: element,
          start: "top 88%",
          toggleActions: "play none none reverse",
          animation: gsap.from(element, { autoAlpha: 0, y: 40, duration: 1, ease: "EA-ease", ...vars }),
        }),
      );
    };

    document.querySelectorAll("[data-reveal]").forEach((element) => reveal(element));

    document.querySelectorAll("[data-reveal-group]").forEach((group) => {
      const children = group.children;
      if (!children.length) return;

      triggers.push(
        ScrollTrigger.create({
          trigger: group,
          start: "top 88%",
          toggleActions: "play none none reverse",
          animation: gsap.from(children, {
            autoAlpha: 0,
            y: 50,
            stagger: 0.08,
            duration: 1,
            ease: "EA-ease",
          }),
        }),
      );
    });

    if (reduced) {
      gsap.globalTimeline.timeScale(100);
      lenis.getLenisInstance().options.duration = 0.01;
    }

    teardown = () => {
      triggers.forEach((t) => t.kill());
      accordion.destroy();
      navbar.destroy();

      if (reduced) gsap.globalTimeline.timeScale(1);

      lenis.destroy();
      void activeLinks;
    };
  });

  return function destroy() {
    teardown();
    ctx.revert();
  };
}
