import { gsap, Draggable } from "./gsapSetup.js";

/**
 * Port of the reference `FlickCards` — the desktop persona deck.
 *
 * Each card's position comes from its signed distance to the active index, so
 * dragging can interpolate between the current and next layout continuously
 * rather than snapping at release.
 */
export class FlickCards {
  constructor() {
    this.draggables = [];
    this.createdDraggers = [];
    this.initFlickCards();
  }

  initFlickCards() {
    const sliders = document.querySelectorAll("[data-flick-cards-init]");

    sliders.forEach((slider) => {
      const list = slider.querySelector("[data-flick-cards-list]");
      const cards = Array.from(list.querySelectorAll("[data-flick-cards-item]"));
      const total = cards.length;
      let activeIndex = 0;

      const sliderWidth = slider.offsetWidth;
      const threshold = 0;

      // Generate draggers inside each card and store references
      const draggers = [];
      cards.forEach((card) => {
        const infoContainer = card.querySelector(".flick-card__info");
        const dragger = document.createElement("div");
        dragger.setAttribute("data-flick-cards-dragger", "");
        infoContainer.appendChild(dragger);
        draggers.push(dragger);
        this.createdDraggers.push(dragger);
      });

      // Set initial drag status
      slider.setAttribute("data-flick-drag-status", "grab");

      function getConfig(i, currentIndex) {
        let diff = i - currentIndex;
        if (diff > total / 2) diff -= total;
        else if (diff < -total / 2) diff += total;

        switch (diff) {
          case 0:
            return { x: 0, y: 0, rot: 0, s: 1, o: 1, z: 5 };
          case 1:
            return { x: 56, y: 1, rot: 0, s: 0.8, o: 1, z: 4 };
          case -1:
            return { x: -56, y: 1, rot: -0, s: 0.8, o: 1, z: 4 };
          case 2:
            return { x: 100, y: 5, rot: 0, s: 0.8, o: 1, z: 3 };
          case -2:
            return { x: -100, y: 5, rot: -0, s: 0.8, o: 1, z: 3 };
          default: {
            const dir = diff > 0 ? 1 : -1;
            return { x: 55 * dir, y: 5, rot: 20 * dir, s: 0.6, o: 0, z: 2 };
          }
        }
      }

      function renderCards(currentIndex) {
        cards.forEach((card, i) => {
          const cfg = getConfig(i, currentIndex);
          let status;

          if (cfg.x === 0) status = "active";
          else if (cfg.x === 25) status = "2-after";
          else if (cfg.x === -25) status = "2-before";
          else if (cfg.x === 45) status = "3-after";
          else if (cfg.x === -45) status = "3-before";
          else status = "hidden";

          card.setAttribute("data-flick-cards-item-status", status);
          card.style.zIndex = cfg.z;

          gsap.to(card, {
            duration: 0.8,
            ease: "elastic.out(1, 1)",
            xPercent: cfg.x,
            yPercent: cfg.y,
            rotation: cfg.rot,
            scale: cfg.s,
            opacity: cfg.o,
          });
        });
      }

      renderCards(activeIndex);

      let pressX = 0;
      let pressY = 0;

      const created = Draggable.create(draggers, {
        type: "x",
        edgeResistance: 0.8,
        bounds: { minX: -sliderWidth / 2, maxX: sliderWidth / 2 },
        inertia: false,

        onPress() {
          pressX = this.pointerX;
          pressY = this.pointerY;
          slider.setAttribute("data-flick-drag-status", "grabbing");
        },

        onDrag() {
          const rawProgress = this.x / sliderWidth;
          const progress = Math.min(1, Math.abs(rawProgress));
          const direction = rawProgress > 0 ? -1 : 1;
          const nextIndex = (activeIndex + direction + total) % total;

          cards.forEach((card, i) => {
            const from = getConfig(i, activeIndex);
            const to = getConfig(i, nextIndex);
            const mix = (prop) => from[prop] + (to[prop] - from[prop]) * progress;

            gsap.set(card, {
              xPercent: mix("x"),
              yPercent: mix("y"),
              rotation: mix("rot"),
              scale: mix("s"),
              opacity: mix("o"),
            });
          });
        },

        onRelease() {
          slider.setAttribute("data-flick-drag-status", "grab");

          const releaseX = this.pointerX;
          const releaseY = this.pointerY;
          const dragDistance = Math.hypot(releaseX - pressX, releaseY - pressY);

          const raw = this.x / sliderWidth;
          let shift = 0;
          if (raw > threshold) shift = -1;
          else if (raw < -threshold) shift = 1;

          if (shift !== 0) {
            activeIndex = (activeIndex + shift + total) % total;
            renderCards(activeIndex);
          }

          gsap.to(this.target, { x: 0, duration: 0.3, ease: "power1.out" });

          // A press that barely moved is a click: let it through to whatever
          // sits under the dragger (the card's CTA).
          if (dragDistance < 4) {
            this.target.style.pointerEvents = "none";

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                const el = document.elementFromPoint(releaseX, releaseY);
                if (el) {
                  el.dispatchEvent(new MouseEvent("click", { view: window, bubbles: true, cancelable: true }));
                }

                this.target.style.pointerEvents = "auto";
              });
            });
          }
        },
      });

      this.draggables.push(...created);
    });
  }

  destroy() {
    this.draggables.forEach((d) => d.kill());
    this.draggables = [];
    this.createdDraggers.forEach((d) => d.remove());
    this.createdDraggers = [];
  }
}
