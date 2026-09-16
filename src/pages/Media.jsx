import PageShell from "../components/PageShell.jsx";
import CtaButton from "../components/CtaButton.jsx";

/**
 * Media.
 *
 * The plan asks for two things here: cooking and product photography, and an
 * events column for award functions and the like. The gallery below is built
 * from the brand imagery that exists today; `EVENTS` is empty because no event
 * photography has been supplied, and the section is skipped entirely rather
 * than shipping an empty grid or placeholder tiles. Add entries and it appears.
 */

/**
 * The gallery is a bento: every tile declares its own footprint so the mosaic
 * is deliberate rather than whatever auto-placement happens to do.
 *
 *   hero  2 cols x 2 rows      wide  2 cols x 1 row
 *   tall  1 col  x 2 rows      (default) 1 x 1
 *
 * The order is chosen so the spans tile without leaving holes in the 2-column
 * phone layout: a hero, then tall+small+small, then a wide band, and repeat.
 *
 * `fit: "contain"` is for the pack and dish cut-outs, which sit on transparent
 * backgrounds and have to sit ON the peach ground rather than be cropped by it.
 */
const GALLERY = [
  {
    src: "/assets/img/life-festive-kitchen.webp",
    alt: "A festive kitchen with the three Actipro packs on the counter",
    caption: "Festival cooking, unchanged",
    tile: "hero",
  },
  {
    src: "/assets/img/pack-sunflower-scene.webp",
    alt: "Actipro Refined Sunflower Oil pack with sunflowers and seeds",
    caption: "Refined Sunflower Oil",
    tile: "tall",
    fit: "contain",
  },
  { src: "/assets/img/dish-chaat.webp", alt: "A bowl of sweet corn chaat", caption: "Sweet corn chaat", fit: "contain" },
  { src: "/assets/img/dish-pulao.webp", alt: "A bowl of vegetable pulao", caption: "Vegetable pulao", fit: "contain" },
  {
    src: "/assets/img/scene-everyday-meals.webp",
    alt: "A brass thali of dal, sabzi, rice and roti beside Actipro Refined Sunflower Oil",
    caption: "Everyday meals \u00b7 Refined Sunflower Oil",
    tile: "wide",
  },
  {
    src: "/assets/img/pack-corn-scene.webp",
    alt: "Actipro Refined Corn Oil pack with corn cobs and kernels",
    caption: "Refined Corn Oil",
    tile: "tall",
    fit: "contain",
  },
  {
    src: "/assets/img/dish-curry.webp",
    alt: "A bowl of mixed vegetable curry",
    caption: "Mixed vegetable curry",
    fit: "contain",
  },
  {
    src: "/assets/img/dish-fried-rice.webp",
    alt: "A bowl of vegetable fried rice",
    caption: "Vegetable fried rice",
    fit: "contain",
  },
  {
    src: "/assets/img/scene-deep-frying.webp",
    alt: "Pakoras lifted from a kadhai on a jhara, with Actipro Refined Corn Oil alongside",
    caption: "Deep frying \u00b7 Refined Corn Oil",
    tile: "wide",
  },
  {
    src: "/assets/img/pack-rice-bran-scene.webp",
    alt: "Actipro Refined Rice Bran Oil pack with rice and bran",
    caption: "Refined Rice Bran Oil",
    tile: "tall",
    fit: "contain",
  },
  {
    src: "/assets/img/dish-curry-alt.webp",
    alt: "A bowl of home-style curry",
    caption: "Home-style curry",
    fit: "contain",
  },
  {
    src: "/assets/img/dish-corn-veg.webp",
    alt: "A bowl of corn and mixed vegetables",
    caption: "Corn and mixed vegetables",
    fit: "contain",
  },
  {
    src: "/assets/img/life-family-table.webp",
    alt: "A family sharing a meal cooked with Actipro",
    caption: "The everyday family table",
    tile: "hero",
  },
  {
    src: "/assets/img/life-cooking.webp",
    alt: "A home cook serving a dish made with Actipro",
    caption: "Sunday, the long way round",
    tile: "tall",
  },
  {
    src: "/assets/img/life-holding-pack.webp",
    alt: "A home cook holding a pack of Actipro Lifestyle Oil",
    caption: "Lifestyle Oil",
  },
  {
    src: "/assets/img/range-grains.webp",
    alt: "The three Actipro packs with sunflower seeds, wheat and grains",
    caption: "The range",
  },
  {
    src: "/assets/img/scene-heart-conscious.webp",
    alt: "A bowl of vegetable khichdi beside Actipro Refined Rice Bran Oil",
    caption: "Heart-conscious cooking \u00b7 Refined Rice Bran Oil",
    tile: "wide",
  },
];

/** Events and award functions. Add { title, date, body, src, alt } entries. */
const EVENTS = [];

export default function Media() {
  return (
    <PageShell
      metaTitle="Media"
      metaDescription="Product photography, the dishes people make with Actipro, and the refinery it comes from."
      eyebrow="Media"
      title="The oil, the cooking, and everything around it."
      lede="Product photography, the dishes people actually make with Actipro, and the kitchens it ends up in."
    >
      <section className="page-section">
        <div className="page-inner">
          <ul className="gallery" data-reveal-group="">
            {GALLERY.map((item) => (
              <li
                className={`gallery__item is--${item.tile ?? "small"}${item.fit === "contain" ? " is--contain" : ""}`}
                key={item.src}
              >
                <figure className="gallery__figure">
                  <img loading="lazy" src={item.src} alt={item.alt} className="gallery__img" />
                  <figcaption className="gallery__caption">{item.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section is--tinted">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Inside the refinery</h2>
            <p className="section-head__p">
              Actipro is made by Madhuri Refiners Pvt. Ltd. in Indore, with over three decades in edible oil
              manufacturing.
            </p>
          </div>

          <div className="media-video" data-reveal="">
            <video
              className="media-video__el"
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              poster="/assets/img/pack-range.webp"
            >
              <source src="/assets/videos/delivered-showreel-landscape.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {EVENTS.length ? (
        <section className="page-section">
          <div className="page-inner">
            <div className="section-head" data-reveal="">
              <h2 className="section-head__h2">Events &amp; awards</h2>
            </div>

            <ul className="stack-grid" data-reveal-group="">
              {EVENTS.map((e) => (
                <li className="stack-card" key={e.title}>
                  {e.src ? <img loading="lazy" src={e.src} alt={e.alt ?? ""} className="gallery__img" /> : null}
                  <span className="mini-card__label">{e.date}</span>
                  <h3 className="stack-card__h3">{e.title}</h3>
                  <p className="stack-card__p">{e.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="page-section">
        <div className="page-inner is--narrow">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Press or partnership enquiry?</h2>
            <p className="section-head__p">
              For high-resolution assets, event coverage or anything else, write to us and we'll send what you need.
            </p>
          </div>

          <div className="page-actions" data-reveal="">
            <CtaButton to="/contact-us" label="Get in touch" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
