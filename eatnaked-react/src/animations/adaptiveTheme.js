import { gsap, ScrollTrigger } from "./gsapSetup.js";

/**
 * The page is light, but a handful of sections are built around full-bleed
 * dark media (see styles/theme.css). `.navbar` and `.markers` are
 * `position: fixed`, so they float over whichever of the two happens to be
 * underneath them - a single colour would be unreadable over one or the other.
 *
 * This module gives each overlay the dark token scope exactly while a dark
 * section is behind it, and takes it away again otherwise. It only ever writes
 * one class name; every colour decision stays in CSS.
 */

/** Re-declares the token set with the original dark values. See theme.css. */
const ON_DARK = "is--on-dark";

/**
 * The overlays, each with the viewport line it actually occupies, in px from
 * the top of the viewport. A section counts as "behind" an overlay while it
 * spans that line.
 */
const OVERLAYS = [
  {
    id: "navbar",
    selector: ".navbar",
    /**
     * The navbar is a bar, not a line: "spans the top edge of the viewport"
     * is really "spans the middle of the bar". Measuring it also keeps the
     * line off zero, which the hero needs - see the seeding note in `init`.
     */
    line: (el) => {
      const inner = el.querySelector(".navbar-container") || el;
      const rect = inner.getBoundingClientRect();
      return Math.max(1, rect.top + rect.height / 2);
    },
  },
  {
    id: "markers",
    selector: ".markers",
    /** `.markers` is inset:0 with its content centred, so it reads the middle. */
    line: () => window.innerHeight / 2,
    // `display: none` in portrait, so there is nothing to keep readable.
    landscapeOnly: true,
  },
];

/**
 * The dark-media sections, in document order.
 *
 * `.partners` and `.quality` are `position: sticky` children - the trigger has
 * to be the outer wrapper (400vh / 200vh), because that is what occupies the
 * scroll range. A top-stuck child's top and bottom coincide with its wrapper's
 * at both ends of that range, so the wrapper's geometry is exactly the span
 * over which the dark scene is on screen.
 *
 * `.loader` is deliberately absent. It is `position: fixed` and covers the
 * whole viewport, so it has no scroll range to trigger on - but it is only up
 * at scroll 0, where `.hero` is behind both overlays anyway, so the state it
 * needs is the state it already gets.
 */
const DARK_SECTIONS = [
  /**
   * `.hero` is NOT here. It used to be - the showreel is shot against black -
   * but the hero is a light section now: `heroVideoKey` keys the black out so
   * the tray floats on white. The overlays must stay dark over it.
   */
  { selector: ".delivered" },
  { selector: ".partners-sticky" },
  {
    selector: ".showreel",
    // `display: none` in portrait, where the Flip never runs.
    landscapeOnly: true,
    /**
     * `.showreel` is an empty 100vh slot until `flipVideoAnimation` lands the
     * video in it, which it finishes at the showreel's `top 10%`. Until then
     * the middle of the viewport is still the light `.action` behind it, so
     * the markers must not switch at the slot's own top-centre crossing -
     * 40vh too early. The navbar's line sits below 10% of the viewport, so it
     * needs no such adjustment.
     */
    startLine: { markers: () => window.innerHeight * 0.1 },
  },
  { selector: ".quality-sticky" },
];

export class AdaptiveTheme {
  constructor() {
    this.mm = gsap.matchMedia();
    this.init();
  }

  init() {
    this.mm.add(
      {
        isLandscape: "(orientation: landscape)",
        isPortrait: "(orientation: portrait)",
      },
      (context) => {
        const { isLandscape } = context.conditions;
        const usable = (item) => (isLandscape || !item.landscapeOnly) && document.querySelector(item.selector);

        const overlays = OVERLAYS.filter(usable).map((overlay) => ({
          ...overlay,
          el: document.querySelector(overlay.selector),
          /**
           * How many dark sections are behind this overlay right now. Two dark
           * sections hand over at the same scroll position (hero → delivered,
           * showreel → quality), and nothing guarantees the order of the two
           * callbacks, so a boolean would let the one leaving clear what the
           * one arriving just set. A set of the sections currently spanning
           * the line cannot drift, and re-adding a section already in it is a
           * no-op.
           */
          active: new Set(),
        }));

        const sections = DARK_SECTIONS.filter(usable).map((section) => ({
          ...section,
          el: document.querySelector(section.selector),
        }));

        overlays.forEach((overlay) => {
          const line = () => overlay.line(overlay.el);

          sections.forEach((section) => {
            const startLine = section.startLine?.[overlay.id] || line;
            const sync = (self) => this.setActive(overlay, section.el, self.isActive);

            // Function-based start/end are re-evaluated on every refresh, so
            // the lines follow a resize without an explicit invalidate.
            const trigger = ScrollTrigger.create({
              trigger: section.el,
              start: () => `top top+=${startLine()}`,
              end: () => `bottom top+=${line()}`,
              onToggle: sync,
              // A refresh can move a section across the line without the
              // scroll position changing; re-seed from the new geometry.
              onRefresh: sync,
            });

            // A trigger created already in range doesn't fire onToggle during
            // its own first refresh, so seed from the trigger rather than wait
            // for a callback. This is the page-load state: the hero is behind
            // both overlays at scroll 0. (It is also why neither line above is
            // ever 0 - ScrollTrigger counts progress of exactly 0 as inactive,
            // so a section starting at the very top of the document would
            // otherwise read as "not there" until the first pixel of scroll.)
            sync(trigger);
          });
        });

        // ScrollTriggers created in here belong to the matchMedia context and
        // die with it; the class it wrote does not.
        return () => {
          overlays.forEach((overlay) => {
            overlay.active.clear();
            overlay.el.classList.remove(ON_DARK);
          });
        };
      },
    );
  }

  setActive(overlay, section, isActive) {
    if (isActive) overlay.active.add(section);
    else overlay.active.delete(section);

    const onDark = overlay.active.size > 0;

    // Only touch the attribute on a real change: `.markers` watches its own
    // class for theme flips (see `markersAnimation`), and a no-op write still
    // reports as a mutation.
    if (overlay.el.classList.contains(ON_DARK) !== onDark) {
      overlay.el.classList.toggle(ON_DARK, onDark);
    }
  }

  destroy() {
    this.mm.revert();

    OVERLAYS.forEach(({ selector }) => {
      document.querySelector(selector)?.classList.remove(ON_DARK);
    });
  }
}
