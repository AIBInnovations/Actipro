import { gsap, ScrollTrigger, Draggable, prefersReducedMotion } from "./gsapSetup.js";
import { LenisSmooth } from "./lenis.js";
import { Navbar } from "./navbar.js";
import { Preloader } from "./preloader.js";
import { HomepageAnimations } from "./homepageAnimations.js";
import { AdaptiveTheme } from "./adaptiveTheme.js";
import { ActiveLinks } from "./activeLinks.js";
import { CursorFollower } from "./cursorFollower.js";
import { CustomSwiper } from "./globalSwiper.js";
import { FlickCards } from "./flickCards.js";
import { Accordion } from "./accordion.js";
import { CustomSlider } from "./customSlider.js";
import { CustomVimeoPlayer } from "./customVimeoPlayer.js";

/**
 * Port of the reference `/js/pages/homepage.js` bootstrap.
 *
 * Called once from App's mount effect (React's stand-in for DOMContentLoaded)
 * and returns a teardown.
 *
 * Everything runs inside a `gsap.context()`. That matters more than it looks:
 * most entrance animations are `gsap.from()`, which writes the start state to
 * the element immediately. Merely killing those tweens would leave the page
 * stuck at opacity 0, and a second init would then read that as the *end*
 * state and animate 0 → 0. `ctx.revert()` restores the authored DOM, so a
 * StrictMode double-mount or an HMR update replays cleanly.
 */
export function initHomepage() {
  const reduced = prefersReducedMotion();

  let teardown = () => {};

  const ctx = gsap.context(() => {
    const lenis = new LenisSmooth();
    const preloader = new Preloader(lenis);

    preloader.autoRun();

    const navbar = new Navbar(lenis);
    const activeLinks = new ActiveLinks();
    const swiper = new CustomSwiper();
    const flickCards = new FlickCards();
    const accordion = new Accordion();
    const customSlider = new CustomSlider();

    const vimeoPlayer = new CustomVimeoPlayer();
    const homepageAnimations = new HomepageAnimations(lenis);

    // After HomepageAnimations: it measures the sections the other modules
    // have just laid out (and pinned), so it wants the same settled layout.
    const adaptiveTheme = new AdaptiveTheme();

    // Draggable fact track, each with its own "Drag ⟷" cursor.
    const cursorFollowers = [];
    const draggables = [];

    document.querySelectorAll("[data-drag-container]").forEach((container) => {
      const className = container.className;
      const bounds = container.querySelector("[data-drag-bounds]");
      const track = container.querySelector("[data-drag-track]");

      const cursorFollower = new CursorFollower(container, "Drag", className);
      cursorFollowers.push(cursorFollower);

      draggables.push(
        ...Draggable.create(track, {
          type: "x",
          bounds,
          inertia: true,
          onPress() {
            container.setAttribute("data-is-pressed", "");
            cursorFollower.isPressed = true;
          },
          onRelease() {
            container.removeAttribute("data-is-pressed");
            cursorFollower.isPressed = false;
          },
        }),
      );
    });

    // Respect the OS setting: keep every scroll position mapping, drop the easing.
    if (reduced) {
      gsap.globalTimeline.timeScale(100);
      lenis.getLenisInstance().options.duration = 0.01;
    }

    // Dev-only handle: lets you drive the page from the console while tuning.
    if (import.meta.env.DEV) window.__lenis = lenis.getLenisInstance();

    teardown = () => {
      adaptiveTheme.destroy();
      homepageAnimations.destroy();
      vimeoPlayer.destroy();
      customSlider.destroy();
      accordion.destroy();
      flickCards.destroy();
      swiper.destroy();
      navbar.destroy();
      preloader.destroy();

      draggables.forEach((d) => d.kill());
      cursorFollowers.forEach((c) => c.destroy());


      if (reduced) gsap.globalTimeline.timeScale(1);
      if (import.meta.env.DEV) delete window.__lenis;

      lenis.destroy();
      void activeLinks;
    };
  });

  return function destroy() {
    teardown();

    // Kill anything that escaped the context (async timelines), then revert
    // every inline style the context wrote.
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ctx.revert();
  };
}
