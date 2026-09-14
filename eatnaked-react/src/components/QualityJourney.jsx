/**
 * 200vh scroll range around a sticky scene: the bottle travels from refinery to
 * kitchen while the two heading blocks cross-fade.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function QualityJourney() {
  return (
    <div className="quality-sticky">
      <section className="quality" data-marker="">
        <div className="quality-container">
          <div className="quality-header">
            <div className="quality-block">
              <div className="quality-block__tag">In-House Quality Testing</div>
              <h2 className="quality-block__h2">From our refinery</h2>
            </div>

            <div className="quality-block">
              <div className="quality-block__tag">For An Active Everyday Life</div>
              <h2 className="quality-block__h2">To your kitchen</h2>
            </div>
          </div>
        </div>

        <picture>
          <source srcSet="/assets/images/quality-portrait.avif" type="image/avif" media="(orientation: portrait)" />
          <img src="/assets/img/a029-32c28f2543.avif" alt="" />
        </picture>

        <canvas id="bag-canvas" width="2168" height="1452"></canvas>
      </section>
    </div>
  );
}
