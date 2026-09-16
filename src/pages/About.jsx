import PageShell from "../components/PageShell.jsx";
import CtaButton from "../components/CtaButton.jsx";
import { VARIANTS } from "../data/variants.js";

/**
 * About Us. Copy is the brand story from the website plan document, kept close
 * to verbatim - it is the one piece of writing the plan supplies in full.
 *
 * The page used to be three stacked walls of text, which on a phone was four
 * screens of scrolling with nothing to look at. The copy is unchanged; what
 * changed is the rhythm - a portrait opener, a figure breaking the story in
 * half, a stat strip, and a horizontal photo rail so the last block is swiped
 * through rather than scrolled past.
 */

const STORY_OPEN =
  "Actipro began in 2013 with one idea: an active life starts with what's in your pan, not just what's on your plate. Every variant is refined with its own dedicated process, because “healthier oil” shouldn't be a vague claim. It should be something we can explain, step by step, and stand behind.";

const STORY_REST = [
  "Every bottle carries more than a nutrition panel, a traceable batch number, a process you can actually understand, and a promise we take seriously: no argemone oil, no cutting corners, nothing added that we wouldn't want in our own kitchens.",
  "We call Actipro a lifestyle oil because that's how we think about it, not restriction, just an upgrade to the everyday. Same tadka, same Sunday cooking, just an oil doing a little more work for you than you'd ever notice.",
];

const FACTS = [
  { n: "2013", l: "Actipro begins" },
  { n: "30+", l: "Years of refining" },
  { n: "3", l: "Dedicated processes" },
  { n: "Zero", l: "Argemone oil. Ever." },
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

const KITCHENS = [
  { src: "life-festive.webp", cap: "Festival cooking, unchanged" },
  { src: "life-family-table.webp", cap: "The everyday family table" },
  { src: "life-couple-cooking.webp", cap: "Weeknight, two pairs of hands" },
  { src: "life-cooking.webp", cap: "Sunday, the long way round" },
];

export default function About() {
  return (
    <PageShell
      metaTitle="About Us"
      metaDescription="Actipro began in 2013 with one idea: an active life starts with what's in your pan. Made by Madhuri Refiners, with over three decades in edible oil manufacturing."
      metaImage="/assets/img/life-holding-pack.webp"
      eyebrow="About Us"
      title="Cooking oil, reconsidered for how you actually want to live."
      lede="Actipro is made by Madhuri Refiners Pvt. Ltd., with over three decades in edible oil manufacturing, built as its own brand with its own promise: upgrade everyday cooking into conscious living."
    >
      <section className="page-section is--flush-top">
        <div className="page-inner">
          <figure className="figure is--portrait" data-reveal="">
            <img
              src="/assets/img/life-holding-pack.webp"
              alt="A home cook holding a pack of Actipro Lifestyle Oil in her kitchen"
              width="900"
              height="1125"
              className="figure__img"
            />
          </figure>
        </div>
      </section>

      <section className="page-section">
        <div className="page-inner is--narrow">
          <div className="prose" data-reveal="">
            <p className="prose__p">{STORY_OPEN}</p>
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
            <figcaption className="figure__cap">Three oils, three jobs, one counter.</figcaption>
          </figure>

          <div className="prose" data-reveal="">
            {STORY_REST.map((para, i) => (
              <p className="prose__p" key={i}>
                {para}
              </p>
            ))}
          </div>

          <ul className="stat-strip" data-reveal-group="">
            {FACTS.map((f) => (
              <li className="stat" key={f.n}>
                <span className="stat__n">{f.n}</span>
                <span className="stat__l">{f.l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section is--tinted">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">How we're different</h2>
            <p className="section-head__p">Three things that change what ends up in the bottle.</p>
          </div>

          <figure className="figure is--wide" data-reveal="">
            <img
              loading="lazy"
              src="/assets/img/range-ingredients-hero.webp"
              alt="The three Actipro packs with sunflower seeds, corn and rice bran"
              width="1400"
              height="788"
              className="figure__img"
            />
          </figure>

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
        </div>
      </section>

      <section className="page-section is--tinted">
        <div className="page-inner">
          <div className="section-head" data-reveal="">
            <h2 className="section-head__h2">In real kitchens</h2>
            <p className="section-head__p">Not a restriction. Just the same cooking, with an oil doing more of the work.</p>
          </div>
        </div>

        {/* Outside .page-inner so the rail can run to the edge of the screen,
            which is what signals "this scrolls sideways" on a phone. */}
        <ul className="photo-rail" data-reveal="">
          {KITCHENS.map((k) => (
            <li className="photo-rail__item" key={k.src}>
              <img loading="lazy" src={`/assets/img/${k.src}`} alt={k.cap} className="photo-rail__img" />
              <span className="photo-rail__cap">{k.cap}</span>
            </li>
          ))}
        </ul>

        <div className="page-inner">
          <div className="page-actions" data-reveal="">
            <CtaButton to="/the-process" label="How it's made" />
            <CtaButton to="/products" label="See the range" className="is--clear" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
