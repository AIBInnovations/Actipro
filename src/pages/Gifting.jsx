import PageShell from "../components/PageShell.jsx";
import CtaButton from "../components/CtaButton.jsx";
import { VARIANTS } from "../data/variants.js";

/**
 * Gifting.
 *
 * The plan marks this section "have to talk on" and settles only two things: a
 * tasting trio built around the occasion, and corporate/bulk routed to a
 * contact form rather than Amazon. So this page commits to exactly those two
 * and nothing more - no prices, no SKUs, no pack sizes invented to fill space.
 */

const OCCASIONS = [
  {
    title: "Diwali",
    body: "The festival is literally about lighting oil lamps. A trio that shows up on the table as well as in the diya, for the season when most kitchens are frying all week.",
  },
  {
    title: "Corporate & bulk",
    body: "Staff gifting, distributor hampers, or a run of sets for a client list. Volumes, packing and timelines are worked out per order, tell us the numbers and we'll come back with options.",
  },
  {
    title: "Housewarming & weddings",
    body: "A set that stocks a new kitchen with all three variants at once, so whoever is cooking has the right oil for whatever they're making.",
  },
];

export default function Gifting() {
  return (
    <PageShell
      metaTitle="Gifting"
      metaDescription="A tasting trio covering every way a kitchen cooks, plus corporate and bulk gifting handled directly rather than through a marketplace."
      eyebrow="Gifting"
      title="A set that covers every way a kitchen actually cooks."
      lede="One oil is a present. Three oils, each built for a different job, is something the person actually uses all year."
    >
      <section className="page-section">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">The tasting trio</h2>
            <p className="section-head__p">
              All three variants together, sunflower oil for everyday, corn oil for frying, rice bran oil for heart-conscious
              cooking, with the process behind each one printed on the pack.
            </p>
          </div>

          <div className="trio" data-reveal="">
            <div className="trio__media">
              <div className="trio__glow" aria-hidden="true"></div>
              <img loading="lazy" src="/assets/img/pack-range.webp" alt="The three Actipro variants" className="trio__img" />
            </div>

            <ul className="trio__list">
              {VARIANTS.map((v) => (
                <li className="trio__item" key={v.key}>
                  <img loading="lazy" src={v.ingredient} alt="" className="trio__icon" />
                  <span className="trio__body">
                    <strong>{v.name}</strong>
                    <span>{v.use}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section is--tinted">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Built around the occasion</h2>
          </div>

          <ul className="stack-grid" data-reveal-group="">
            {OCCASIONS.map((o) => (
              <li className="stack-card" key={o.title}>
                <h3 className="stack-card__h3">{o.title}</h3>
                <p className="stack-card__p">{o.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="page-inner is--narrow">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Tell us what you need</h2>
            <p className="section-head__p">
              Gifting and bulk orders are handled directly rather than through a marketplace listing, so we can get the
              quantities, packing and delivery right. Send us the details and we'll come back to you.
            </p>
          </div>

          <div className="page-actions" data-reveal="">
            <CtaButton to="/contact-us" label="Enquire about gifting" />
            <CtaButton to="/products" label="See the range" className="is--clear" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
