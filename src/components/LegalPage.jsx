import PageShell from "./PageShell.jsx";

/**
 * Shared layout for Terms and Privacy: a numbered section list with a sticky
 * index beside it. Both pages are long, plain prose and nothing else, so they
 * share everything except their content.
 */
export default function LegalPage({ eyebrow, title, lede, updated, sections }) {
  return (
    <PageShell metaTitle={title} metaDescription={lede} eyebrow={eyebrow} title={title} lede={lede}>
      <section className="page-section">
        <div className="page-inner legal">
          <nav className="legal__index" aria-label="On this page">
            <span className="legal__updated">Last updated {updated}</span>
            <ol className="legal__index-list">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#s${i + 1}`} className="legal__index-link">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal__body">
            {sections.map((s, i) => (
              <section className="legal__section" id={`s${i + 1}`} key={s.heading} data-reveal="">
                <h2 className="legal__h2">
                  <span className="legal__n">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>

                {s.body.map((para, pi) => (
                  <p className="legal__p" key={pi}>
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
