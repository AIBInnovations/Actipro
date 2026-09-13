import { ScrollTrigger } from "./gsapSetup.js";

/** Port of the reference `Accordion` — the desktop Goals accordion. */
export class Accordion {
  constructor() {
    this.cleanups = [];
    this.timers = [];
    this.init();
  }

  init() {
    document.querySelectorAll("[data-accordion-css-init]").forEach((accordion) => {
      const closeSiblings = accordion.getAttribute("data-accordion-close-siblings") === "true";

      const onClick = (event) => {
        const toggle = event.target.closest("[data-accordion-toggle]");
        if (!toggle) return;

        const singleAccordion = toggle.closest("[data-accordion-status]");
        if (!singleAccordion) return;

        const parent = toggle.closest(".accordion-css__main-wrappper");

        if (parent) {
          const parentActive = parent.getAttribute("data-parent-status") === "active";
          parent.setAttribute("data-parent-status", parentActive ? "not-active" : "active");
        }

        const isActive = singleAccordion.getAttribute("data-accordion-status") === "active";
        singleAccordion.setAttribute("data-accordion-status", isActive ? "not-active" : "active");

        // The panel's height transition is 0.6s; refresh once it has settled.
        this.timers.push(setTimeout(() => ScrollTrigger.refresh(), 600));

        if (closeSiblings && !isActive) {
          accordion.querySelectorAll('[data-accordion-status="active"]').forEach((sibling) => {
            if (sibling !== singleAccordion) sibling.setAttribute("data-accordion-status", "not-active");
          });

          accordion.querySelectorAll('[data-parent-status="active"]').forEach((sibling) => {
            if (sibling !== parent) sibling.setAttribute("data-parent-status", "not-active");
          });
        }
      };

      accordion.addEventListener("click", onClick);
      this.cleanups.push(() => accordion.removeEventListener("click", onClick));
    });
  }

  destroy() {
    this.timers.forEach(clearTimeout);
    this.cleanups.forEach((fn) => fn());
    this.cleanups = [];
  }
}
