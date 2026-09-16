import PageShell from "../components/PageShell.jsx";
import CtaButton from "../components/CtaButton.jsx";
import { VARIANTS } from "../data/variants.js";

/**
 * The Process. The plan supplies this page almost in full, including the
 * argument for why it exists at all - so the copy stays close to verbatim and
 * the layout just gives each of the three technologies room to be read.
 */
export default function Process() {
  return (
    <PageShell
      metaTitle="The Process"
      metaDescription="Advanced Dewaxing for Sunflower Oil, High Absorbent Refining for Corn Oil, Smart Fry for Rice Bran Oil. One promise, three different ways of keeping it."
      eyebrow="The Process"
      title="One promise, three different ways of keeping it."
      lede="Most cooking oil brands use a single generic refining process and print the same handful of health claims on every bottle, regardless of what's actually inside. We didn't want to do that."
    >
      <section className="page-section">
        <div className="page-inner is--narrow">
          <p className="lead-p" data-reveal="">
            Sunflower, corn and rice bran are different oils with different natural properties, so each one gets
            refined the way it needs to be refined, not the way that's easiest for us.
          </p>

          <figure className="figure is--wide" data-reveal="">
            <img
              src="/assets/img/range-ingredients-hero.webp"
              alt="The three Actipro packs with the sunflower seeds, corn and rice bran they are refined from"
              width="1400"
              height="788"
              className="figure__img"
            />
            <figcaption className="figure__cap">Three raw materials. Three different problems to solve.</figcaption>
          </figure>
        </div>
      </section>

      {VARIANTS.map((v, i) => (
        <section className={`page-section process-block${i % 2 ? " is--tinted" : ""}`} key={v.key}>
          <div className="page-inner">
            <div className="process-block__head" data-reveal="">
              <span className="process-block__badge">{v.processShort}</span>
              <div>
                <span className="process-block__oil">{v.name}</span>
                <h2 className="process-block__h2">{v.process}</h2>
              </div>
            </div>

            <p className="process-block__lede" data-reveal="">
              {v.processLede}
            </p>

            <figure className="figure is--wide" data-reveal="">
              <img
                loading="lazy"
                src={v.scene}
                alt={`${v.name} in use`}
                className="figure__img"
              />
            </figure>

            <ol className="step-grid" data-reveal-group="">
              {v.steps.map((s) => (
                <li className="step-card" key={s.n}>
                  <span className="step-card__n">{s.n}</span>
                  <h3 className="step-card__h3">{s.title}</h3>
                  <p className="step-card__p">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <section className="page-section">
        <div className="page-inner is--narrow">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Why this matters more than it sounds</h2>
          </div>

          <div className="prose" data-reveal="">
            <p className="prose__p">
              A generic “refined for purity” claim tells you nothing. Knowing which problem your oil's refining process
              actually solves, wax content, oil absorption, or heat stability, means you're choosing an oil based on
              what it does, not just what it says.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section is--tinted">
        <div className="page-inner is--narrow">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Every batch, checked before it reaches you</h2>
          </div>

          <div className="prose" data-reveal="">
            <p className="prose__p">
              Every variant passes through in-house quality testing before packaging, and every bottle carries a Lot
              Number you can look up on its product page to see that specific batch's manufacturing and packing
              details. We're not asking you to trust a label, we're giving you a way to verify it.
            </p>
          </div>

          <figure className="figure is--wide" data-reveal="">
            <img
              loading="lazy"
              src="/assets/img/life-kitchen-spread.webp"
              alt="The three Actipro packs on a kitchen counter beside a finished meal"
              width="1400"
              height="788"
              className="figure__img"
            />
          </figure>

          <div className="page-actions" data-reveal="">
            <CtaButton to="/products" label="See the range" />
            <CtaButton to="/products/sunflower#verify" label="Verify your batch" className="is--clear" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
