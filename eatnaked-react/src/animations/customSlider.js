/**
 * Port of the reference `CustomSlider` - the ingredient bowl.
 *
 * State lives entirely in class names so the 1s `var(--ease)` transitions in
 * styles.css do the animating: the product swings out the way the pressed
 * arrow points and the next one swings in from the opposite side, the title
 * crossfades vertically, and each side's ingredient column swaps.
 */
export class CustomSlider {
  constructor() {
    this.cleanups = [];
    this.timers = [];

    const section = document.querySelector("[data-custom-slider]");
    if (!section) return;

    const prevButton = section.querySelector("[data-custom-slider-prev]");
    const nextButton = section.querySelector("[data-custom-slider-next]");
    const titles = Array.from(section.querySelectorAll("[data-custom-slider-title]"));
    const images = Array.from(section.querySelectorAll("[data-custom-slider-image]"));
    const leftIndicators = Array.from(section.querySelectorAll("[data-custom-slider-indicator='left']"));
    const rightIndicators = Array.from(section.querySelectorAll("[data-custom-slider-indicator='right']"));

    this.isAnimating = false;
    this.current = 0;
    this.next = this.current + 1;
    this.previous = titles.length - 1;

    titles[this.current].classList.add("is--active");
    images[this.current].classList.add("is--active");
    leftIndicators[this.current].classList.add("is--active");
    rightIndicators[this.current].classList.add("is--active");

    const go = (step) => {
      if (this.isAnimating) return;
      this.isAnimating = true;

      const previousIndex = this.current;
      this.current = (this.current + step + titles.length) % titles.length;
      this.next = (this.current + 1) % titles.length;
      this.previous = (this.current - 1 + titles.length) % titles.length;

      titles.forEach((title) => title.classList.remove("is--active"));
      leftIndicators.forEach((indicator) => indicator.classList.remove("is--active"));
      rightIndicators.forEach((indicator) => indicator.classList.remove("is--active"));

      // The arrow decides the direction: press right and the product swings out
      // to the right while the next one swings in from the left.
      const outgoing = images[previousIndex];
      const incoming = images[this.current];
      const exit = step > 0 ? "to--right" : "to--left";
      const park = step > 0 ? "park--left" : "park--right";

      images.forEach((image) => {
        image.classList.remove("to--right", "to--left", "park--left", "park--right");
        if (image !== outgoing) image.classList.remove("is--active");
      });

      // Park the incoming slide off-stage with transitions off, flush the
      // style, then let it animate in - otherwise it would jump straight to
      // its resting position with nothing to transition from.
      incoming.classList.add(park);
      void incoming.offsetWidth;
      incoming.classList.remove(park);

      outgoing.classList.remove("is--active");
      outgoing.classList.add(exit);

      titles[this.current].classList.add("is--active");
      incoming.classList.add("is--active");
      leftIndicators[this.current].classList.add("is--active");
      rightIndicators[this.current].classList.add("is--active");

      section.setAttribute("data-current-slide", this.current);

      this.timers.push(
        setTimeout(() => {
          this.isAnimating = false;
        }, 1000),
      );
    };

    const onPrev = () => go(-1);
    const onNext = () => go(1);

    prevButton.addEventListener("click", onPrev);
    nextButton.addEventListener("click", onNext);

    this.cleanups.push(() => prevButton.removeEventListener("click", onPrev));
    this.cleanups.push(() => nextButton.removeEventListener("click", onNext));
  }

  destroy() {
    this.timers.forEach(clearTimeout);
    this.cleanups.forEach((fn) => fn());
    this.cleanups = [];
  }
}
