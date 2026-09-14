import { useState } from "react";

import PageShell from "../components/PageShell.jsx";
import CtaButton from "../components/CtaButton.jsx";
import { VARIANTS } from "../data/variants.js";

/**
 * Find Your Oil. One question, three answers, per the plan - then the
 * side-by-side the plan asks for underneath, for people who want to compare
 * rather than be told.
 *
 * The comparison rows are read out of each variant's transcribed nutrition
 * panel rather than retyped, so the table can never disagree with the label on
 * the product page.
 */

/** Pulls a row out of a variant's nutrition table by its label prefix. */
function nutrient(variant, prefix) {
  const row = variant.nutrition?.find(([label]) => label.startsWith(prefix));
  return row ? row[1] : "-";
}

const COMPARE = [
  { label: "Best for", get: (v) => v.use },
  { label: "Process", get: (v) => v.process },
  { label: "Solves for", get: (v) => v.problem },
  { label: "Saturated fat (g)", get: (v) => nutrient(v, "Saturated Fat") },
  { label: "MUFA (g), min", get: (v) => nutrient(v, "Monounsaturated") },
  { label: "PUFA (g), min", get: (v) => nutrient(v, "Polyunsaturated") },
  { label: "Vitamin E (mg)", get: (v) => nutrient(v, "Tocopherols") },
  { label: "Omega-6 (g)", get: (v) => nutrient(v, "Omega-6") },
  { label: "Cholesterol (mg)", get: (v) => nutrient(v, "Cholesterol") },
];

export default function FindYourOil() {
  const [picked, setPicked] = useState(null);

  return (
    <PageShell
      metaTitle="Find Your Oil"
      metaDescription="Not all cooking calls for the same oil. One question, and a side-by-side of all three variants using figures from their own labels."
      eyebrow="Find Your Oil"
      title="Not all cooking calls for the same oil. Let's find yours."
      lede="One question. It takes about five seconds, and it's the same thing the Oil Bot asks."
    >
      <section className="page-section">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">What are you cooking most?</h2>
          </div>

          <ul className="choice-grid" data-reveal-group="">
            {VARIANTS.map((v) => (
              <li key={v.key}>
                <button
                  type="button"
                  className="choice-card"
                  data-picked={picked === v.key ? "true" : "false"}
                  onClick={() => setPicked(picked === v.key ? null : v.key)}
                  aria-pressed={picked === v.key}
                >
                  <img loading="lazy" src={v.ingredient} alt="" className="choice-card__img" />
                  <span className="choice-card__use">{v.use}</span>
                  <span className="choice-card__arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {picked ? <Answer variant={VARIANTS.find((v) => v.key === picked)} /> : null}
        </div>
      </section>

      <section className="page-section is--tinted">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Not sure? Compare them side by side.</h2>
            <p className="section-head__p">
              Every figure below is taken from that variant's own label, per 100g.
            </p>
          </div>

          <div className="table-wrap" data-reveal="">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="visually-hidden">Property</span>
                  </th>
                  {VARIANTS.map((v) => (
                    <th scope="col" key={v.key}>
                      {v.short}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {VARIANTS.map((v) => (
                      <td key={v.key}>{row.get(v)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-inner is--narrow">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Still deciding?</h2>
            <p className="section-head__p">
              Ask the Oil Bot, tell it what you usually cook and it'll point you to the right variant and take you
              straight to that product's page. It's open 9am to 11pm.
            </p>
          </div>

          <div className="page-actions" data-reveal="">
            <CtaButton to="/products" label="See all three" />
            <CtaButton to="/the-process" label="How they're made" className="is--clear" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Answer({ variant }) {
  if (!variant) return null;

  return (
    <div className="answer" role="status">
      <div className="answer__media">
        <div className="answer__glow" aria-hidden="true"></div>
        <img loading="lazy" src={variant.pack} alt={variant.name} className="answer__pack" />
      </div>

      <div className="answer__body">
        <span className="answer__label">Your oil</span>
        <h3 className="answer__h3">{variant.name}</h3>
        <p className="answer__p">{variant.recommendation}</p>

        <ul className="product-row__badges">
          {variant.badges.map((b) => (
            <li className="range-badge" key={b}>
              {b}
            </li>
          ))}
        </ul>

        <div className="page-actions">
          <CtaButton to={`/products/${variant.key}`} label="See the product" />
        </div>
      </div>
    </div>
  );
}
