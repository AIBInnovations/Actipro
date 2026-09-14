/**
 * Port of the reference `CursorFollower` — the "Drag ⟷" label that tracks the
 * pointer over the fact track and tilts with horizontal velocity.
 */
export class CursorFollower {
  constructor(wrapper, text, baseClass) {
    this.wrapper = wrapper;
    this.text = text;
    this.baseClass = baseClass;
    this.isPressed = false;
    this.cleanups = [];
    this.initCursor();
  }

  createFollower() {
    const container = document.createElement("div");
    container.className = `${this.baseClass}__cursor`;
    container.style.transform = "translate(0px, 0px)";

    const span = document.createElement("span");
    span.className = `${this.baseClass}__cursor-text ${this.baseClass}__inner`;
    span.style.transformOrigin = "50% 50%";
    span.style.transform = "rotate(0deg)";
    span.textContent = this.text;

    const rightSvg = `
      <svg width="100%" viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 10C17 9.47 17.5498 8.67857 18.1063 8.01429C18.8218 7.15714 19.6767 6.40929 20.657 5.83857C21.392 5.41071 22.283 5 23 5M23 5C22.283 5 21.3912 4.58929 20.657 4.16143C19.6767 3.59 18.8218 2.84214 18.1063 1.98643C17.5498 1.32143 17 0.528571 17 -2.38419e-07M23 5L5 5" stroke="currentColor" stroke-width="1.5"/>
        <path d="M6 1.43099e-07C6 0.53 5.45025 1.32143 4.89375 1.98571C4.17825 2.84286 3.32325 3.59071 2.343 4.16143C1.608 4.58929 0.717 5 5.96244e-08 5M5.96244e-08 5C0.717 5 1.60875 5.41071 2.343 5.83857C3.32325 6.41 4.17825 7.15786 4.89375 8.01357C5.45025 8.67857 6 9.47143 6 10M5.96244e-08 5L18 5" stroke="currentColor" stroke-width="1.5"/>
      </svg>
    `;

    container.appendChild(span);
    container.insertAdjacentHTML("beforeend", rightSvg);

    return container;
  }

  initCursor() {
    const cursor = this.createFollower();
    this.cursor = cursor;
    this.wrapper.appendChild(cursor);

    const innerElements = cursor.querySelectorAll(`.${this.baseClass}__inner`);
    let { width, height } = cursor.getBoundingClientRect();
    let { width: wrapperW, height: wrapperH } = this.wrapper.getBoundingClientRect();

    let center = `translate(${wrapperW / 2}px, ${wrapperH / 2 - height / 2}px)`;
    cursor.style.transform = center;

    const onResize = () => {
      ({ width, height } = cursor.getBoundingClientRect());
      ({ width: wrapperW, height: wrapperH } = this.wrapper.getBoundingClientRect());
      center = `translate(${wrapperW / 2}px, ${wrapperH / 2 - height / 2}px)`;
    };
    window.addEventListener("resize", onResize);
    this.cleanups.push(() => window.removeEventListener("resize", onResize));

    innerElements.forEach((el) => (el.style.transformOrigin = "50% 50%"));

    let currentRotation = 0;
    let targetRotation = 0;
    const rotationFactor = 15;
    let lastX = 0;
    let lastTime = performance.now();
    let mouseX = 0;
    let mouseY = 0;
    let isInside = false;
    let requestId = null;

    const animate = () => {
      if (!isInside) return;

      const rect = this.wrapper.getBoundingClientRect();
      const offsetX = mouseX - rect.left - width / 2;
      const offsetY = mouseY - rect.top - height / 2;

      cursor.style.transform = this.isPressed
        ? `translate(${offsetX}px, ${offsetY}px) scale(0.8)`
        : `translate(${offsetX}px, ${offsetY}px)`;

      currentRotation += (targetRotation - currentRotation) * 0.1;
      targetRotation *= 0.95;
      innerElements.forEach((el) => (el.style.transform = `rotate(${currentRotation}deg)`));

      requestId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const currentTime = performance.now();
      const timeDifference = currentTime - lastTime;

      if (timeDifference > 0) {
        const positionDifference = e.clientX - lastX;
        const velocityX = positionDifference / timeDifference;
        targetRotation = Math.max(Math.min(velocityX * rotationFactor, 50), -50);
      }

      lastX = e.clientX;
      lastTime = currentTime;

      if (!isInside) {
        isInside = true;
        animate();
      }
    };

    const onMouseLeave = () => {
      isInside = false;
      cancelAnimationFrame(requestId);

      cursor.style.transform = center;
      currentRotation = 0;
      targetRotation = 0;

      innerElements.forEach((el) => (el.style.transform = `rotate(0deg)`));
    };

    this.wrapper.addEventListener("mousemove", onMouseMove);
    this.wrapper.addEventListener("mouseleave", onMouseLeave);

    this.cleanups.push(() => {
      isInside = false;
      cancelAnimationFrame(requestId);
      this.wrapper.removeEventListener("mousemove", onMouseMove);
      this.wrapper.removeEventListener("mouseleave", onMouseLeave);
    });
  }

  destroy() {
    this.cleanups.forEach((fn) => fn());
    this.cleanups = [];
    this.cursor?.remove();
  }
}
