import { gsap, ScrollTrigger, Draggable, prefersReducedMotion } from "./gsapSetup.js";
import { LenisSmooth } from "./lenis.js";
import { Navbar } from "./navbar.js";
import { Preloader } from "./preloader.js";
import { HomepageAnimations } from "./homepageAnimations.js";
import { AdaptiveTheme } from "./adaptiveTheme.js";
import { HeroVideoKey } from "./heroVideoKey.js";
import { ActiveLinks } from "./activeLinks.js";
import { CursorFollower } from "./cursorFollower.js";
import { CustomSwiper } from "./globalSwiper.js";
import { FlickCards } from "./flickCards.js";
import { Accordion } from "./accordion.js";
import { CustomSlider } from "./customSlider.js";
import { CustomVimeoPlayer } from "./customVimeoPlayer.js";
import { ImageSequenceLoader } from "./imageSequenceLoader.js";
import { SequenceScrollHandler } from "./sequenceScrollHandler.js";
import { SecuenceAnimations } from "./sequenceAnimations.js";

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

    const partnersImageSequenceLoader = new ImageSequenceLoader().setImagesConfig({
      extension: "avif",
      totalFrames: 201,
      landscapeBasePath: "/assets/secuence-partners/landscape/sdl-",
      portraitBasePath: "/assets/secuence-partners/portrait/sdp-",
      batchCount: 8,
    });

    const partnersSequenceScrollHandler = new SequenceScrollHandler(
      lenis,
      partnersImageSequenceLoader,
      preloader,
      "partners",
    )
      .setCanvas("#partners-canvas")
      .setAnimationTrigger(".partners-sticky")
      .setInitialConfig({ totalFrames: 201 })
      .setTimeline({ refreshPriority: 7 })
      .init();

    const navbar = new Navbar(lenis);
    const activeLinks = new ActiveLinks();
    const swiper = new CustomSwiper();
    const flickCards = new FlickCards();
    const accordion = new Accordion();
    const customSlider = new CustomSlider();

    const secuenceAnimations = new SecuenceAnimations();
    secuenceAnimations.partnersAnimation(partnersSequenceScrollHandler);

    const bagImageSequenceLoader = new ImageSequenceLoader().setImagesConfig({
      extension: "webp",
      totalFrames: 40,
      landscapeBasePath: "/assets/secuence-bag/landscape/sdl-",
      portraitBasePath: "/assets/secuence-bag/portrait/sdp-",
      batchCount: 4,
      concurrency: 10,
    });

    const bagSequenceScrollHandler = new SequenceScrollHandler(lenis, bagImageSequenceLoader, null, "bag")
      .setCanvas("#bag-canvas")
      .setAnimationTrigger(".quality-sticky")
      .setInitialConfig({ totalFrames: 40 })
      .setTimeline({ refreshPriority: 5 })
      .init();

    secuenceAnimations.bagAnimation(bagSequenceScrollHandler);

    const vimeoPlayer = new CustomVimeoPlayer();
    const homepageAnimations = new HomepageAnimations(lenis);

    // After HomepageAnimations: it measures the sections the other modules
    // have just laid out (and pinned), so it wants the same settled layout.
    const adaptiveTheme = new AdaptiveTheme();

    // Reveal the canvas before constructing: the keyer measures it on the way
    // up, and a display:none canvas measures 0x0.
    const heroBg = document.querySelector(".hero-video__bg");
    heroBg?.setAttribute("data-keyed", "");
    const heroVideoKey = new HeroVideoKey({
      video: heroBg?.querySelector("video"),
      canvas: heroBg?.querySelector(".hero-video__canvas"),
    });
    if (heroVideoKey.destroyed) heroBg?.removeAttribute("data-keyed");

    // Draggable testimonial track, each with its own "Drag ⟷" cursor.
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
      heroVideoKey.destroy();
      heroBg?.removeAttribute("data-keyed");
      adaptiveTheme.destroy();
      homepageAnimations.destroy();
      secuenceAnimations.destroy();
      vimeoPlayer.destroy();
      customSlider.destroy();
      accordion.destroy();
      flickCards.destroy();
      swiper.destroy();
      navbar.destroy();
      preloader.destroy();

      draggables.forEach((d) => d.kill());
      cursorFollowers.forEach((c) => c.destroy());

      bagSequenceScrollHandler.destroy();
      partnersSequenceScrollHandler.destroy();

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
