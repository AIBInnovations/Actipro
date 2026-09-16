import PageShell from "../components/PageShell.jsx";
import CtaButton from "../components/CtaButton.jsx";
import { VARIANTS } from "../data/variants.js";

/**
 * About Us. Copy is the brand story from the website plan document, kept close
 * to verbatim - it is the one piece of writing the plan supplies in full.
 */

const STORY = [
  "Actipro began in 2013 with one idea: an active life starts with what's in your pan, not just what's on your plate. Every variant is refined with its own dedicated process, because “healthier oil” shouldn't be a vague claim. It should be something we can explain, step by step, and stand behind.",
  "Every bottle carries more than a nutrition panel, a traceable batch number, a process you can actually understand, and a promise we take seriously: no argemone oil, no cutting corners, nothing added that we wouldn't want in our own kitchens.",
  "We call Actipro a lifestyle oil because that's how we think about it, not restriction, just an upgrade to the everyday. Same tadka, same Sunday cooking, just an oil doing a little more work for you than you'd ever notice.",
];

const DIFFERENCE = [
  {
    title: "A process per oil, not one for all three",
    body: "Most brands run a single generic refine and print the same handful of claims on every bottle. Sunflower, corn and rice bran are different oils with different natural properties, so each gets refined the way it needs to be.",
  },
  {
    title: "Claims we can show our working on",
    body: "Every benefit on the pack traces back to a step in a process we can describe. If we can't explain how it happens, it doesn't go on the label.",
  },
  {
    title: "A batch you can look up",
    body: "Every bottle carries a Lot Number tied to real manufacturing and packing records. We're not asking you to trust a label, we're giving you a way to verify it.",
  },
];

export default function About() {
  return (
    <PageShell
      metaTitle="About Us"
      metaDescription="Actipro began in 2013 with one idea: an active life starts with what's in your pan. Made by Madhuri Refiners, with over three decades in edible oil manufacturing."
      eyebrow="About Us"
      title="Cooking oil, reconsidered for how you actually want to live."
      lede="Actipro is made by Madhuri Refiners Pvt. Ltd., with over three decades in edible oil manufacturing, built as its own brand with its own promise: upgrade everyday cooking into conscious living."
    >
      <section className="page-section">
        <div className="page-inner is--narrow">
          <div className="prose" data-reveal="">
            {STORY.map((para, i) => (
              <p className="prose__p" key={i}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section is--tinted">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">How we're different</h2>
            <p className="section-head__p">Three things that change what ends up in the bottle.</p>
          </div>

          <ul className="stack-grid" data-reveal-group="">
            {DIFFERENCE.map((d) => (
              <li className="stack-card" key={d.title}>
                <h3 className="stack-card__h3">{d.title}</h3>
                <p className="stack-card__p">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">One promise, three ways of keeping it</h2>
            <p className="section-head__p">
              Each oil carries the name of the process built for it. The full explanation lives on The Process.
            </p>
          </div>

          <ul className="mini-grid" data-reveal-group="">
            {VARIANTS.map((v) => (
              <li className="mini-card" key={v.key}>
                <img loading="lazy" src={v.ingredient} alt="" className="mini-card__img" />
                <span className="mini-card__label">{v.short}</span>
                <h3 className="mini-card__h3">{v.process}</h3>
                <p className="mini-card__p">Solves for {v.problem.toLowerCase()}.</p>
              </li>
            ))}
          </ul>

          <div className="page-actions" data-reveal="">
            <CtaButton to="/the-process" label="How it's made" />
            <CtaButton to="/products" label="See the range" className="is--clear" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
