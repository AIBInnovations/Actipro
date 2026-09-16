import { useState } from "react";
import { Link } from "react-router-dom";

import PageShell from "../components/PageShell.jsx";
import CtaButton from "../components/CtaButton.jsx";

/**
 * FAQs.
 *
 * A React-controlled accordion rather than the homepage's `accordion.js`: that
 * module is wired to the Goals section's markup and class names, and bending
 * this page to fit it would couple two unrelated things. Answers only state
 * what the packs and the plan document actually support.
 */

const GROUPS = [
  {
    group: "The oils",
    items: [
      {
        q: "What's the difference between the three variants?",
        a: (
          <>
            Each one is refined for the problem that oil actually has. Sunflower oil carries natural wax, so it gets
            Advanced Dewaxing Technology. Corn oil's real-world issue is how much of it food soaks up, so it gets
            High Absorbent Refining. Rice bran oil is about heat stability, so it gets Smart Fry Technology.{" "}
            <Link to="/the-process" className="page-link">
              The full explanation is here
            </Link>
            .
          </>
        ),
      },
      {
        q: "Which one should I buy?",
        a: (
          <>
            It depends on what you cook most: sunflower oil for everyday meals and light sautéing, corn oil if you fry
            often, rice bran oil if you're cooking with heart health in mind.{" "}
            <Link to="/find-your-oil" className="page-link">
              Find Your Oil
            </Link>{" "}
            asks one question and points you at the right one.
          </>
        ),
      },
      {
        q: "Can I use one oil for everything?",
        a: "You can. Corn oil in particular is suitable across cooking styles, from light sautéing to high-heat frying, without switching mid-recipe. The three variants exist because each is better at a specific job, not because the others fail at yours.",
      },
      {
        q: "Are they suitable for deep frying?",
        a: "Yes. Corn oil is the one engineered specifically around frying, refined to be absorbed less, so fried food comes out lighter rather than greasier. Rice bran oil's Smart Fry Technology is built for heat stability and faster heat transfer.",
      },
    ],
  },
  {
    group: "What's in the pack",
    items: [
      {
        q: "What additives do the oils contain?",
        a: "A permitted antifoaming agent (Dimethyl Polysiloxane, DMPS, INS 900a) and a permitted antioxidant (TBHQ, INS 319). Both are declared on every pack rather than buried, and both are within FSSAI permitted limits.",
      },
      {
        q: "Is there any argemone oil?",
        a: "No. Every variant and every batch is free from argemone oil, and it is stated on the pack.",
      },
      {
        q: "Are the oils fortified?",
        a: "Yes, with Vitamin A and Vitamin D, at 2500 IU / 750 mcg and 450 IU / 11.25 mcg respectively at the time of packing. The exact figures are on each product page's nutrition table, taken straight from the label.",
      },
      {
        q: "Is the nutrition information on the site the same as on the pack?",
        a: "It is transcribed directly from each variant's own label, including the per-serve RDA column and the footnotes. If you ever spot a difference between the site and the bottle in your hand, the bottle is correct, and please tell us.",
      },
    ],
  },
  {
    group: "Batches and buying",
    items: [
      {
        q: "How do I check my batch?",
        a: (
          <>
            Every bottle carries a Lot Number on the back of the pack. The first two characters identify the batch, enter them on any{" "}
            <Link to="/products" className="page-link">
              product page
            </Link>{" "}
            under “Verify your batch”. The lookup is currently showing sample records while it is connected to the live
            batch system; until then, email your Lot Number and we'll check it by hand.
          </>
        ),
      },
      {
        q: "Where can I buy Actipro?",
        a: (
          <>
            Through our Amazon listings, and through distributors. For gifting or bulk quantities,{" "}
            <Link to="/contact-us" className="page-link">
              contact us directly
            </Link>{" "}
            rather than ordering through a marketplace.
          </>
        ),
      },
      {
        q: "How should I store the oil?",
        a: "In a dry place, away from heat and light, as printed on the pack. The use-by date holds on that basis.",
      },
      {
        q: "Who makes Actipro?",
        a: "Madhuri Refiners Pvt. Ltd., Indore (M.P.), under FSSAI licence 11424999000132. Actipro began in 2013 as its own brand, built on over three decades of edible oil manufacturing.",
      },
    ],
  },
];

export default function Faqs() {
  // One open at a time, keyed by "groupIndex-itemIndex"; null closes all.
  const [open, setOpen] = useState("0-0");

  return (
    <PageShell
      metaTitle="FAQs"
      metaDescription="Which variant to buy, what the additives are, how to check your batch, and where to find Actipro."
      eyebrow="FAQs"
      title="The questions we actually get asked."
      lede="If yours isn't here, the Oil Bot answers until 11pm, or write to us and a person will."
    >
      {GROUPS.map((group, gi) => (
        <section className={`page-section${gi % 2 ? " is--tinted" : ""}`} key={group.group}>
          <div className="page-inner">
            <div className="section-head" data-reveal="">
              <h2 className="section-head__h2">{group.group}</h2>
            </div>

            <ul className="faq" data-reveal-group="">
              {group.items.map((item, ii) => {
                const id = `${gi}-${ii}`;
                const isOpen = open === id;

                return (
                  <li className="faq__item" key={item.q} data-open={isOpen ? "true" : "false"}>
                    <h3 className="faq__q">
                      <button
                        type="button"
                        className="faq__toggle"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${id}`}
                        id={`faq-button-${id}`}
                        onClick={() => setOpen(isOpen ? null : id)}
                      >
                        <span>{item.q}</span>
                        <span className="faq__sign" aria-hidden="true"></span>
                      </button>
                    </h3>

                    <div
                      className="faq__panel"
                      id={`faq-panel-${id}`}
                      role="region"
                      aria-labelledby={`faq-button-${id}`}
                      hidden={!isOpen}
                    >
                      <p className="faq__a">{item.a}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}

      <section className="page-section">
        <div className="page-inner is--narrow">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">Still stuck?</h2>
          </div>

          <div className="page-actions" data-reveal="">
            <CtaButton to="/contact-us" label="Ask us directly" />
            <CtaButton to="/find-your-oil" label="Find your oil" className="is--clear" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
