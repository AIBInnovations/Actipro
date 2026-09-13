import { gsap } from "./gsapSetup.js";

/** Port of the reference `Navbar` — full-screen overlay menu, GSAP sequenced. */
export class Navbar {
  constructor(lenis) {
    this.mm = gsap.matchMedia();
    this.lenis = lenis.getLenisInstance();
    this.cleanups = [];

    this.setupToggles();
  }

  setupToggles() {
    const navbar = document.querySelector(".navbar");
    const menu = navbar.querySelector(".navbar-menu");
    const blocks = navbar.querySelectorAll(".navbar-menu__block");
    const centerLinks = Array.from(navbar.querySelector(".navbar-center").children) || [];
    const isCustomerLink = navbar.querySelector(".navbar-right__link.is--customer") || null;
    const toggles = document.querySelectorAll("[data-menu-toggle]");
    const layer = document.querySelector(".navbar-menu__layer");
    const contactBlock = document.querySelector(".navbar-menu__contact") || null;
    const termsLinks = document.querySelectorAll(".navbar-menu__terms-link") || [];
    const socialsLinks = document.querySelectorAll(".navbar-menu__socials-li") || [];
    const ctaButton = menu.querySelector(".cta-button") || null;

    gsap.set([centerLinks, isCustomerLink], { willChange: "transform" });

    let links = null;
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "EA-ease" }, paused: true });
    this.tl = tl;

    this.mm.add(
      {
        isDesktop: "(min-width: 992px)",
        isMobile: "(max-width: 991px)",
        isLandscape: "(orientation: landscape)",
        isPortrait: "(orientation: portrait)",
      },
      (context) => {
        const { isLandscape } = context.conditions;

        const menuContainer = isLandscape
          ? document.querySelector(".navbar-menu__container.is--landscape")
          : document.querySelector(".navbar-menu__container.is--portrait");

        links = menuContainer.querySelectorAll(".navbar-menu__block-link");
      },
    );

    const openMenu = () => {
      tl.clear();
      tl.seek(0);
      tl.set(menu, { autoAlpha: 1 });
      tl.to(layer, { autoAlpha: 1 }, 0);
      tl.to(centerLinks, { yPercent: -100, autoAlpha: 0, stagger: 0.03 }, 0);
      tl.to(isCustomerLink, { yPercent: -100, autoAlpha: 0 }, 0.1);
      tl.fromTo(links, { xPercent: -80, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, stagger: 0.03 }, 0.2);
      tl.fromTo(blocks, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.2);
      tl.fromTo(contactBlock, { yPercent: 50, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1 }, 0.3);
      tl.fromTo(termsLinks, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.03 }, 0.4);
      tl.fromTo(
        socialsLinks,
        { yPercent: 100, rotateZ: "5deg", autoAlpha: 0 },
        { yPercent: 0, rotateZ: 0, autoAlpha: 1, stagger: 0.03 },
        0.3,
      );
      tl.fromTo(ctaButton, { yPercent: 80, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1 }, 0.4);
      tl.play(0);
    };

    const closeMenu = () => {
      tl.clear();
      tl.seek(0);
      tl.set(menu, { autoAlpha: 1 });
      tl.to(contactBlock, { yPercent: 50, autoAlpha: 0 }, 0);
      tl.to(termsLinks, { y: 50, autoAlpha: 0, duration: 0.6 }, 0.2);
      tl.to(links, { xPercent: -80, autoAlpha: 0, stagger: 0.03 }, 0);
      tl.to(blocks, { autoAlpha: 0 }, 0);
      tl.to(ctaButton, { yPercent: 80, autoAlpha: 0 }, 0);
      tl.to(socialsLinks, { yPercent: 100, rotateZ: "0deg", autoAlpha: 0, stagger: 0.03 }, 0);
      tl.to(layer, { autoAlpha: 0 }, 0.4);
      tl.set(menu, { autoAlpha: 0 });
      tl.to(centerLinks, { yPercent: 0, autoAlpha: 1, stagger: 0.03 }, 0.4);
      tl.to(isCustomerLink, { yPercent: 0, autoAlpha: 1 }, 0.4);
      tl.play(0);
    };

    toggles.forEach((toggle) => {
      const onClick = () => {
        if (!navbar) return;

        if (navbar.getAttribute("data-menu-status") === "not-active") {
          this.lenis.stop();
          navbar.setAttribute("data-menu-status", "active");
          openMenu();
        } else {
          this.lenis.start();
          navbar.setAttribute("data-menu-status", "not-active");
          closeMenu();
        }
      };

      toggle.addEventListener("click", onClick);
      this.cleanups.push(() => toggle.removeEventListener("click", onClick));
    });
  }

  destroy() {
    this.cleanups.forEach((fn) => fn());
    this.cleanups = [];
    this.tl?.kill();
    this.mm.revert();
  }
}
