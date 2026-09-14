import Swiper from "swiper";
import { Navigation, Pagination, Controller, EffectFade } from "swiper/modules";

/**
 * Port of the reference `CustomSwiper`.
 *
 * Reads every `[data-swiper-class]` element and builds a Swiper whose wrapper,
 * slide, pagination and navigation class names are namespaced to that section
 * - styles.css targets those names directly, so no Swiper stylesheet is used.
 * Landscape is disabled for both homepage sliders; they exist only in portrait,
 * where the desktop accordion and flick deck are hidden.
 */
export class CustomSwiper {
  constructor() {
    this.swiperList = [];
    this.swiperMap = new Map();
    this.syncPairs = [];

    this.init();
    this.bindEvents();
  }

  init() {
    this.setUpSwiper();
    this.setupSync();
  }

  setUpSwiper() {
    const swiperClass = Array.from(document.querySelectorAll("[data-swiper-class]"));

    swiperClass.forEach((el) => {
      const className = el.getAttribute("data-swiper-class");

      const parentClassName = el.getAttribute("data-swiper-parent-class") || null;
      const syncTarget = el.getAttribute("data-swiper-sync") || null;
      const enabled = el.getAttribute("data-swiper-enabled") || false;
      const enabledMobile = el.getAttribute("data-swiper-enabled-mobile") || false;
      const slidesPerView = el.getAttribute("data-swiper-slides-per-view");
      const slidesPerViewMobile = el.getAttribute("data-swiper-slides-per-view-mobile");
      const centered = el.getAttribute("data-swiper-centered");
      const centeredMobile = el.getAttribute("data-swiper-centered-mobile");
      const spaceBetween = el.getAttribute("data-swiper-space-between") || 0;
      const spaceBetweenMobile = el.getAttribute("data-swiper-space-between-mobile") || 0;
      const initialSlide = el.getAttribute("data-swiper-initial-slide") || 0;
      const initialSlideMobile = el.getAttribute("data-swiper-initial-slide-mobile") || 0;
      const effect = el.getAttribute("data-swiper-effect") || "slide";
      const loop = el.getAttribute("data-swiper-loop") || false;
      const directionLandscape = el.getAttribute("data-swiper-direction-landscape") || "horizontal";
      const directionPortrait = el.getAttribute("data-swiper-direction-portrait") || "horizontal";
      const store = el.getAttribute("data-swiper-store") || false;

      const swiper = new Swiper(`.${className}-swiper-container`, {
        modules: [Navigation, Pagination, Controller, EffectFade],
        wrapperClass: `${className}-swiper-wrapper`,
        slideClass: `${className}-swiper-slide`,
        speed: 800,
        grabCursor: true,
        loop,
        effect,
        pagination: {
          el: `.${className}-swiper-pagination`,
          clickable: true,
          bulletClass: `${className}-swiper-pagination-bullet`,
          bulletActiveClass: `${className}-swiper-pagination-bullet-active`,
        },
        navigation: {
          el: `.${className}-swiper-navigation`,
          nextEl: `.${className}-swiper-button-next`,
          prevEl: `.${className}-swiper-button-prev`,
          disabledClass: `${className}-swiper-button-disabled`,
        },
        breakpoints: {
          "@0.1": {
            slidesPerView: slidesPerViewMobile,
            centeredSlides: !!centeredMobile,
            spaceBetween: spaceBetweenMobile ? spaceBetweenMobile : 0,
            initialSlide: initialSlideMobile,
            direction: directionPortrait,
            enabled: enabledMobile !== "false",
          },
          "@1.0": {
            slidesPerView,
            centeredSlides: !!centered,
            spaceBetween,
            initialSlide,
            direction: directionLandscape,
            enabled: enabled !== "false",
          },
        },

        on: {
          slideChange: function () {
            const activeIndex = this.activeIndex + 1;
            el.setAttribute("data-swiper-active-slide", activeIndex);

            if (parentClassName) {
              const parentEl = document.querySelector(`.${parentClassName}`);
              if (parentEl) parentEl.setAttribute("data-swiper-active-slide", activeIndex);
            }
          },
        },
      });

      this.swiperList.push(swiper);
      this.swiperMap.set(className, swiper);

      if (syncTarget) this.syncPairs.push([className, syncTarget]);

      if (store) {
        window.swiperStore = window.swiperStore || {};
        window.swiperStore[className] = swiper;
      }
    });
  }

  setupSync() {
    this.syncPairs.forEach(([swiperAName, swiperBName]) => {
      const swiperA = this.swiperMap.get(swiperAName);
      const swiperB = this.swiperMap.get(swiperBName);

      if (swiperA && swiperB) {
        swiperA.controller.control = swiperB;
        swiperB.controller.control = swiperA;
      }
    });
  }

  bindEvents() {
    this.onResize = () => {
      clearTimeout(this.resizeTimer);

      this.resizeTimer = setTimeout(() => {
        this.swiperList.forEach((swiper) => {
          if (swiper && typeof swiper.update === "function") swiper.update();
        });
      }, 250);
    };

    window.addEventListener("resize", this.onResize);
  }

  destroy() {
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.onResize);

    this.swiperList.forEach((swiper) => {
      if (swiper && !swiper.destroyed) swiper.destroy(true, true);
    });
    this.swiperList = [];
    this.swiperMap.clear();
  }
}
