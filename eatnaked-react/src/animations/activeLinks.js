/** Port of the reference `ActiveLinks` — marks nav entries for the current path. */
export class ActiveLinks {
  constructor() {
    this.init();
  }

  init() {
    const currentURL = window.location.pathname.toLowerCase();

    document.querySelectorAll("[data-active]").forEach((item) => {
      const value = item.getAttribute("data-active");

      item.classList.remove("is--active");

      if (
        currentURL === `/${value}` ||
        currentURL.includes(`/${value}`) ||
        (value === "index" && (currentURL === "/" || currentURL === "/index"))
      ) {
        item.classList.add("is--active");
      }
    });
  }
}
