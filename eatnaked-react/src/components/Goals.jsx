/**
 * Process section. Landscape uses the custom accordion, portrait swaps to a
 * Swiper carousel — both are in the markup, CSS decides which shows.
 *
 * The accordion's behaviour lives in `animations/accordion.js`, which keys off
 * `[data-accordion-css-init]`, `[data-accordion-toggle]`, `[data-accordion-status]`
 * and `.accordion-css__main-wrappper`. Those hooks are load-bearing; the rest of
 * the markup is free.
 */

const IconDroplet = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3.2c0 0-6.2 6.7-6.2 10.5a6.2 6.2 0 1 0 12.4 0C18.2 9.9 12 3.2 12 3.2Z"
      fill="currentColor"
    />
  </svg>
);

const IconSun = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4.1" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <path d="M12 2.6v2.3M12 19.1v2.3M2.6 12h2.3M19.1 12h2.3" />
      <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" />
    </g>
  </svg>
);

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20 4c0 9.4-4.6 14-11.6 14H4.9C4.9 9.3 10.2 4.5 20 4Z"
      fill="currentColor"
      fillOpacity="0.92"
    />
    <path d="M17 7 6 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const IconSliders = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 7.5h5M13 7.5h7M4 16.5h7M15 16.5h5" />
    </g>
    <circle cx="11" cy="7.5" r="2.3" fill="currentColor" />
    <circle cx="13" cy="16.5" r="2.3" fill="currentColor" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3 5 5.8v5.4c0 4.3 2.9 8.1 7 9.3 4.1-1.2 7-5 7-9.3V5.8L12 3Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 14.5 12 9.5l5 5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Dot = () => (
  <svg viewBox="0 0 8 8" fill="none" aria-hidden="true" className="accordion-css__top-tag-dot">
    <circle cx="4" cy="4" r="3" />
  </svg>
);

/** Stroke geometry for the progress ring: r=19 gives a 119.38 circumference. */
const RING_C = 119.38;
const ring = (pct) => ({ strokeDasharray: RING_C, strokeDashoffset: RING_C * (1 - pct / 100) });

const FEATURES = [
  { icon: <IconSliders />, title: "Tailored Refinement", body: "Each oil. A smarter process." },
  { icon: <IconLeaf />, title: "Lower Absorption", body: "Lighter, healthier food." },
  { icon: <IconShield />, title: "Fry Stability", body: "Consistent performance in every kitchen." },
];

/**
 * `ring` is a placeholder figure carried over from the original build — it has
 * no sourced meaning yet. See the README before treating it as a claim.
 */
const VARIANTS = [
  {
    key: "corn",
    name: "Refined Corn Oil",
    lede: "Optimised for everyday cooking",
    process: "High Absorbent Refining",
    icon: <IconDroplet />,
    ring: 25,
    fill: 74,
    fromLabel: "Oil absorbed by food",
    from: "More",
    toLabel: "With Actipro",
    to: "Less",
    promise: "A cleaner process. A lighter tomorrow.",
    steps: [
      { n: "01", title: "Advanced Refining", body: "Removes unwanted compounds with precision." },
      { n: "02", title: "Less Oil Absorption", body: "Helps food absorb significantly less oil." },
      { n: "03", title: "Nutrient Retention", body: "Preserves the natural goodness in every drop." },
    ],
    images: ["dish-corn-veg.webp", "dish-fried-rice.webp"],
    open: true,
  },
  {
    key: "sunflower",
    name: "Refined Sunflower Oil",
    lede: "Built for stability and performance",
    process: "Advanced Dewaxing Technology",
    icon: <IconSun />,
    ring: 25,
    fill: 80,
    fromLabel: "Wax content, untreated",
    from: "High",
    toLabel: "After dewaxing",
    to: "Low",
    promise: "Clearer oil. Cleaner cooking.",
    steps: [
      { n: "01", title: "Cryo Filtration", body: "Chills the oil so its natural wax solidifies out." },
      { n: "02", title: "Multi-Stage Purification", body: "Filters what remains for a smoother texture." },
      { n: "03", title: "Low-Wax, Clear Oil", body: "Stays clear and leaves no unwanted residue." },
    ],
    images: ["dish-pulao.webp", "dish-chaat.webp"],
    open: false,
  },
  {
    key: "rice-bran",
    name: "Refined Rice Bran Oil",
    lede: "For modern, mindful cooking",
    process: "Smart Fry Technology",
    icon: <IconLeaf />,
    ring: 78,
    fill: 78,
    fromLabel: "Heat stability, typical",
    from: "Low",
    toLabel: "With Smart Fry",
    to: "High",
    promise: "Steadier heat. Lighter frying.",
    steps: [
      { n: "01", title: "Cryo Filtration", body: "Keeps the oil naturally stable from the start." },
      { n: "02", title: "Controlled Refinement", body: "Temperature-held, so the good fats survive." },
      { n: "03", title: "Faster Heat Transfer", body: "Less oil soaks into food while it fries." },
    ],
    images: ["dish-curry.webp", "dish-curry-alt.webp"],
    open: false,
  },
];

export default function Goals() {
  return (
    <section className="goals" data-marker="">
      <div className="goals-grid-bg" aria-hidden="true"></div>

      <div className="goals-container">
        <div className="goals-header">
          <div className="goals-eyebrow">
            <span className="goals-eyebrow__rule"></span>
            <span className="goals-eyebrow__text">Process</span>
          </div>

          <h2 className="goals-header__h2">One Promise, Three Ways Of Keeping It</h2>
          <p className="goals-header__p">
            Each oil refined the way it actually needs to be — for lighter, healthier and better food.
          </p>

          <ul className="goals-features">
            {FEATURES.map((f) => (
              <li className="goals-feature" key={f.title}>
                <span className="goals-feature__icon">{f.icon}</span>
                <span className="goals-feature__body">
                  <strong>{f.title}</strong>
                  <span>{f.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div data-accordion-close-siblings="true" data-accordion-css-init="" className="accordion-css">
          <div className="accordion-css__list">
            {VARIANTS.map((v) => (
              <div
                className="accordion-css__main-wrappper"
                data-parent-status={v.open ? "active" : "not-active"}
                key={v.key}
              >
                <div className="accordion-css__inner">
                  <div data-accordion-status={v.open ? "active" : "not-active"} className="accordion-css__item">
                    <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                      <div className="accordion-css__top-flex">
                        <span className="accordion-css__top-icon">{v.icon}</span>
                        <span className="accordion-css__top-titles">
                          <strong>{v.name}</strong>
                          <span>{v.lede}</span>
                        </span>
                      </div>

                      <div className="accordion-css__top-loader">
                        <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
                          <circle className="accordion-css__ring-track" cx="22" cy="22" r="19" strokeWidth="3" />
                          <circle
                            className="accordion-css__ring-arc"
                            cx="22"
                            cy="22"
                            r="19"
                            strokeWidth="3"
                            strokeLinecap="round"
                            transform="rotate(-90 22 22)"
                            style={ring(v.ring)}
                          />
                        </svg>
                        <span className="accordion-css__top-loader-text">{v.ring}%</span>
                      </div>

                      <div className="accordion-css__top-tag">
                        <Dot />
                        <span>{v.process}</span>
                      </div>

                      <span className="accordion-css__top-chevron">
                        <IconChevron />
                      </span>
                    </div>

                    <div className="accordion-css__item-bottom">
                      <div className="accordion-css__item-bottom-wrap">
                        <div className="accordion-css__item-bottom-content">
                          <div className="accordion-css__item-block">
                            <span>{v.fromLabel}</span>
                            <span>{v.toLabel}</span>
                          </div>
                          <div className="accordion-css__item-block">
                            <strong>{v.from}</strong>
                            <strong>{v.to}</strong>
                          </div>

                          <div className="accordion-css__item-bottom-loader">
                            <div className="accordion-css__item-bottom-loader-bar" style={{ width: `${v.fill}%` }}>
                              <div className="accordion-css__item-bottom-loader-circle"></div>
                            </div>
                          </div>

                          <div className="accordion-css__item-info">
                            <p className="accordion-css__item-promise">{v.promise}</p>

                            <div className="accordion-css__item-body">
                              <div className="accordion-css__item-grid">
                                {v.steps.map((s) => (
                                  <div className="accordion-css__item-grid-group" key={s.n}>
                                    <span className="accordion-css__step-num">{s.n}</span>
                                    <strong>{s.title}</strong>
                                    <span className="accordion-css__step-body">{s.body}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="accordion-css__item-images">
                                {v.images.map((src) => (
                                  <img src={`/assets/img/${src}`} alt="" loading="lazy" key={src} />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="goals-swiper-container"
          data-swiper-class="goals"
          data-swiper-parent-class="goals"
          data-swiper-slides-per-view="1"
          data-swiper-space-between="0"
          data-swiper-slides-per-view-mobile="auto"
          data-swiper-centered-mobile="true"
          data-swiper-space-between-mobile="20"
          data-swiper-enabled="false"
          data-swiper-enabled-mobile="true"
        >
          <div className="goals-swiper-wrapper">
            {VARIANTS.map((v) => (
              <div className="goals-swiper-slide" key={v.key}>
                <div className="goals-swiper-slide__inner">
                  <div className="goals-swiper-slide__top">
                    <div className="goals-swiper-slide__top-flex">
                      <span className="accordion-css__top-icon">{v.icon}</span>
                      <span>{v.name}</span>
                    </div>
                    <div className="goals-swiper-slide__top-tag">
                      <Dot />
                      <span>{v.process}</span>
                    </div>
                  </div>

                  <div className="goals-swiper-slide__bottom">
                    <div className="goals-swiper-slide__block">
                      <span>{v.fromLabel}</span>
                      <span>{v.toLabel}</span>
                    </div>
                    <div className="goals-swiper-slide__block">
                      <strong>{v.from}</strong>
                      <strong>{v.to}</strong>
                    </div>

                    <div className="goals-swiper-slide__bottom-loader">
                      <div className="goals-swiper-slide__bottom-loader-bar" style={{ width: `${v.fill}%` }}>
                        <div className="goals-swiper-slide__bottom-loader-circle"></div>
                      </div>
                    </div>

                    <div className="goals-swiper-slide__info">
                      <div className="goals-swiper-slide__grid">
                        {v.steps.map((s) => (
                          <div className="goals-swiper-slide__grid-group" key={s.n}>
                            <span className="accordion-css__step-num">{s.n}</span>
                            <strong>{s.title}</strong>
                          </div>
                        ))}
                      </div>

                      <div className="goals-swiper-slide__images">
                        {v.images.map((src) => (
                          <img src={`/assets/img/${src}`} alt="" loading="lazy" key={src} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="goals-swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
