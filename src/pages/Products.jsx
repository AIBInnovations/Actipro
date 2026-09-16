import { Link } from "react-router-dom";

import PageShell from "../components/PageShell.jsx";
import CtaButton from "../components/CtaButton.jsx";
import { VARIANTS, COMPLIANCE, DISCLAIMER } from "../data/variants.js";

/**
 * Products index. The per-variant detail pages (nutrition table, full process
 * breakdown, batch lookup) are their own route - this page is the range, the
 * compliance block the plan asks to repeat, and the routes into each product.
 *
 * "Explore on Amazon" has no listing URL yet, so it points at the contact page
 * rather than a dead `#`. Swap `AMAZON` in when the listings exist.
 */

const AMAZON = null;

export default function Products() {
  return (
    <PageShell
      metaTitle="Our Range"
      metaDescription="Three oils, three dedicated refining processes. Refined Sunflower Oil, Corn Oil and Rice Bran Oil, with full nutrition, compliance and batch details for each."
      eyebrow="Our Range"
      title="Three oils, three dedicated processes."
      lede="Not all cooking calls for the same oil. Each Actipro variant is refined for the problem it actually has, wax content, oil absorption, or heat stability."
    >
      <section className="page-section">
        <div className="page-inner">
          <div className="product-range" data-reveal="">
            <img loading="lazy" src="/assets/img/pack-range.webp" alt="The Actipro range" className="product-range__img" />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-inner">
          <ul className="product-list" data-reveal-group="">
            {VARIANTS.map((v) => (
              <li className="product-row" key={v.key}>
                <div className="product-row__media">
                  <div className="product-row__glow" aria-hidden="true"></div>
                  <img loading="lazy" src={v.pack} alt={v.name} className="product-row__pack" />
                </div>

                <div className="product-row__body">
                  <span className="product-row__use">{v.use}</span>
                  <h2 className="product-row__h2">{v.name}</h2>
                  <p className="product-row__p">{v.blurb}</p>

                  <ul className="product-row__badges">
                    {v.badges.map((b) => (
                      <li className="range-badge" key={b}>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <dl className="product-row__meta">
                    <div>
                      <dt>Process</dt>
                      <dd>{v.process}</dd>
                    </div>
                    <div>
                      <dt>Solves for</dt>
                      <dd>{v.problem}</dd>
                    </div>
                  </dl>

                  <div className="page-actions">
                    <CtaButton to={`/products/${v.key}`} label="Full details" />
                    <CtaButton
                      href={AMAZON ?? "/contact-us"}
                      target={AMAZON ? "_blank" : undefined}
                      label="Explore on Amazon"
                      className="is--clear"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section is--flush-top">
        <div className="page-inner">
          <figure className="figure is--wide" data-reveal="">
            <img
              loading="lazy"
              src="/assets/img/life-couple-cooking.webp"
              alt="Two people cooking together with the Actipro range on the counter"
              width="1400"
              height="788"
              className="figure__img"
            />
            <figcaption className="figure__cap">One range, whatever is on the stove.</figcaption>
          </figure>
        </div>
      </section>

      <section className="page-section is--tinted">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Quality &amp; compliance</h2>
            <p className="section-head__p">
              The same declarations that appear on the pack, repeated here rather than buried in small print.
            </p>
          </div>

          <dl className="spec-list" data-reveal-group="">
            {COMPLIANCE.map(([term, value]) => (
              <div className="spec-row" key={term}>
                <dt className="spec-row__dt">{term}</dt>
                <dd className="spec-row__dd">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="page-actions" data-reveal="">
            <CtaButton to="/products/sunflower#verify" label="Verify your batch" />
            <Link to="/the-process" className="page-link">
              Read how each oil is made
            </Link>
          </div>

          <p className="page-disclaimer" data-reveal="">
            {DISCLAIMER}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
