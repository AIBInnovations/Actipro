/**
 * Port of the reference `CustomSlider` — the ingredient bowl.
 *
 * State lives entirely in class names so the 1s `var(--ease)` transitions in
 * styles.css do the animating: dishes rotate in from ±90°, the title
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

      this.current = (this.current + step + titles.length) % titles.length;
      this.next = (this.current + 1) % titles.length;
      this.previous = (this.current - 1 + titles.length) % titles.length;

      titles.forEach((title) => title.classList.remove("is--active"));
      leftIndicators.forEach((indicator) => indicator.classList.remove("is--active"));
      rightIndicators.forEach((indicator) => indicator.classList.remove("is--active"));

      images.forEach((image) => {
        image.classList.remove("from--right");
        image.classList.remove("to--right");
        image.classList.remove("is--active");
      });

      images[this.previous].classList.add("to--right");
      images[this.current].classList.add("from--right");

      titles[this.current].classList.add("is--active");
      images[this.current].classList.add("is--active");
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
