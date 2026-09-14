import { Navigate, useParams } from "react-router-dom";

import PageShell from "../components/PageShell.jsx";
import CtaButton from "../components/CtaButton.jsx";
import BatchVerify from "../components/BatchVerify.jsx";
import { findVariant, COMPLIANCE, DISCLAIMER, NUTRITION_NOTES } from "../data/variants.js";

/**
 * One variant, in full: how it's made, what's inside, the label's own
 * nutrition panel, and the compliance block.
 *
 * The nutrition table is transcribed from that variant's own pack artwork, so
 * it carries the label's three columns - nutrient, per 100g, and the per-serve
 * RDA contribution - rather than flattening it to two.
 */
export default function ProductDetail() {
  const { key } = useParams();
  const variant = findVariant(key);

  if (!variant) return <Navigate to="/products" replace />;

  return (
    <PageShell
      metaTitle={variant.name}
      metaDescription={`${variant.blurb} Refined with ${variant.process}. Full nutrition, compliance and batch details.`}
      metaImage={variant.pack}
      eyebrow={variant.use}
      title={variant.name}
      lede={variant.blurb}
    >
      <section className="page-section">
        <div className="page-inner product-hero">
          <div className="product-hero__media" data-reveal="">
            <div className="product-hero__glow" aria-hidden="true"></div>
            <img loading="lazy" src={variant.pack} alt={variant.name} className="product-hero__pack" />
          </div>

          <div className="product-hero__body" data-reveal="">
            <ul className="product-row__badges">
              {variant.badges.map((b) => (
                <li className="range-badge" key={b}>
                  {b}
                </li>
              ))}
            </ul>

            <dl className="product-row__meta">
              <div>
                <dt>Process</dt>
                <dd>{variant.process}</dd>
              </div>
              <div>
                <dt>Solves for</dt>
                <dd>{variant.problem}</dd>
              </div>
            </dl>

            <p className="product-hero__p">{variant.processLede}</p>

            <div className="page-actions">
              <CtaButton href="/contact-us" label="Explore on Amazon" />
              <CtaButton href="#verify" label="Verify your batch" className="is--clear" />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section is--tinted">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">How it's made</h2>
            <p className="section-head__p">{variant.process}, in three steps.</p>
          </div>

          <ol className="step-grid" data-reveal-group="">
            {variant.steps.map((s) => (
              <li className="step-card" key={s.n}>
                <span className="step-card__n">{s.n}</span>
                <h3 className="step-card__h3">{s.title}</h3>
                <p className="step-card__p">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">What's inside</h2>
            <p className="section-head__p">The pack's claims, in everyday terms.</p>
          </div>

          <ul className="stack-grid" data-reveal-group="">
            {variant.inside.map((b) => (
              <li className="stack-card" key={b.title}>
                <h3 className="stack-card__h3">{b.title}</h3>
                <p className="stack-card__p">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {variant.nutrition ? (
        <section className="page-section is--tinted">
          <div className="page-inner is--narrow">
            <div className="section-head" data-reveal="">
              <h2 className="section-head__h2">Nutritional information</h2>
              <p className="section-head__p">Per 100g. Serving size 10g. Taken directly from the label.</p>
            </div>

            <div className="table-wrap" data-reveal="">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th scope="col">Nutrients</th>
                    <th scope="col">Per 100g</th>
                    <th scope="col">Per serve % RDA</th>
                  </tr>
                </thead>
                <tbody>
                  {variant.nutrition.map(([term, per100, rda]) => (
                    <tr key={term}>
                      <th scope="row">{term}</th>
                      <td>{per100}</td>
                      <td>{rda ?? "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-notes" data-reveal="">
              {NUTRITION_NOTES.map((note) => (
                <p className="table-notes__p" key={note}>
                  {note}
                </p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="page-section" id="verify">
        <div className="page-inner is--narrow">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Verify your batch</h2>
            <p className="section-head__p">
              Every bottle carries a Lot Number you can look up to see that batch's manufacturing and packing details.
            </p>
          </div>

          <div data-reveal="">
            <BatchVerify />
          </div>
        </div>
      </section>

      <section className="page-section is--tinted">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Quality &amp; compliance</h2>
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
            <CtaButton href="/contact-us" label="Explore on Amazon" />
          </div>

          <p className="page-disclaimer" data-reveal="">
            {DISCLAIMER}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
