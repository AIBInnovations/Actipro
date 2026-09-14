/**
 * Fixed background grid that sits behind the whole page.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function GlobalGrid() {
  return (
    <div className="global-grid">
      <picture>
        <source srcSet="/assets/images/join-bg-portrait.png" type="image/png" media="(orientation: portrait)" />
        <img
          src="/assets/img/a048-647b3afa09.png"
          type="image/avif"
          alt="Actipro background"
          className="join-background"
          loading="lazy"
        />
      </picture>
    </div>
  );
}
