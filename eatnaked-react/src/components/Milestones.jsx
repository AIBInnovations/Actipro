/**
 * Milestones, on a connecting thread - the plan asks for the milestones "with
 * a connecting thread or a pathway", so the line running through the nodes is
 * the point, not decoration. It draws itself on scroll.
 *
 * Only the two anchors the brand story actually supports carry a year. The
 * later nodes are stated as achievements rather than dated, because inventing
 * dates on a live page is worse than leaving them out.
 */

const NODES = [
  {
    key: "refiners",
    marker: "Three decades",
    title: "Madhuri Refiners Pvt. Ltd.",
    body: "Over thirty years of edible oil manufacturing out of Indore, long before Actipro carried its own name.",
  },
  {
    key: "actipro",
    marker: "2013",
    title: "Actipro begins",
    body: "Built as its own brand with its own promise: an active life starts with what's in your pan, not just what's on your plate.",
  },
  {
    key: "processes",
    marker: "Three, not one",
    title: "A process per oil",
    body: "Advanced Dewaxing for Sunflower Oil, High Absorbent Refining for Corn Oil, Smart Fry for Rice Bran Oil, instead of one generic refine and the same claims on every bottle.",
  },
  {
    key: "fssai",
    marker: "Licensed",
    title: "FSSAI licensed",
    body: "Lic. No. 11424999000132. Every permitted additive disclosed on the pack rather than buried, and free from argemone oil on every variant, every batch.",
  },
  {
    key: "traceability",
    marker: "Every bottle",
    title: "A batch you can check",
    body: "In-house quality testing before packaging, and a Lot Number you can look up to see that specific batch's manufacturing and packing details.",
  },
];

export default function Milestones() {
  return (
    <section className="miles" data-marker="">
      <div className="miles-container">
        <div className="miles-header">
          <div className="miles-eyebrow">
            <span className="miles-eyebrow__rule"></span>
            <span className="miles-eyebrow__text">The Thread</span>
          </div>

          <h2 className="miles-header__h2">How we got here, in order.</h2>
          <p className="miles-header__p">
            Not a founding myth. Five things that actually changed what ends up in the bottle.
          </p>
        </div>

        <ol className="miles-track" data-miles-track="">
          <span className="miles-thread" aria-hidden="true">
            <span className="miles-thread__fill" data-miles-thread=""></span>
          </span>

          {NODES.map((n) => (
            <li className="miles-node" key={n.key}>
              <span className="miles-node__dot" aria-hidden="true"></span>
              <span className="miles-node__marker">{n.marker}</span>
              <h3 className="miles-node__h3">{n.title}</h3>
              <p className="miles-node__p">{n.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
