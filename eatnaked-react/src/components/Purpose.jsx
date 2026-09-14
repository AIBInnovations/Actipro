/**
 * Mission and vision. The homepage plan asks for both by name; the copy below
 * is drawn from the brand story in the plan document rather than invented -
 * the "active life starts with what's in your pan" line is the brand's own.
 *
 * Two panels rather than a single block, because mission (what we do now) and
 * vision (where it goes) answer different questions and shouldn't blur.
 */

const PANELS = [
  {
    key: "mission",
    label: "Mission",
    statement: "Upgrade everyday cooking into conscious living, without asking anyone to cook differently.",
    body: "Same tadka, same Sunday kitchen, same recipes your family already knows. Just an oil doing a little more work for you than you'd ever notice, refined for the problem it actually has, not the one that was easiest to print on a label.",
  },
  {
    key: "vision",
    label: "Vision",
    statement: "A kitchen where “healthier” is something you can verify, not something you take on faith.",
    body: "Every claim we make should be a process we can explain step by step, and every bottle should carry a batch you can look up. We'd rather be the oil people choose because they understand it than the one with the loudest label.",
  },
];

export default function Purpose() {
  return (
    <section className="purpose" data-marker="">
      <div className="purpose-container">
        <div className="purpose-header">
          <div className="purpose-eyebrow">
            <span className="purpose-eyebrow__rule"></span>
            <span className="purpose-eyebrow__text">Why We're Here</span>
          </div>

          <h2 className="purpose-header__h2">An active life starts with what's in your pan.</h2>
          <p className="purpose-header__p">
            Not just what's on your plate. That one idea is where Actipro started in 2013, and it still decides
            every process we run.
          </p>
        </div>

        <ul className="purpose-grid">
          {PANELS.map((p) => (
            <li className="purpose-panel" key={p.key}>
              <span className="purpose-panel__label">{p.label}</span>
              <p className="purpose-panel__statement">{p.statement}</p>
              <p className="purpose-panel__body">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
