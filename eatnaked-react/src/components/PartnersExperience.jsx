/**
 * 400vh scroll range around a sticky 100vh scene. The canvas plays the
 * miniature-city sequence while range cards cross-fade on top.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function PartnersExperience() {
  return (
    <div className="partners-sticky">
      <section className="partners" data-marker="">
        <div className="partners-container">
          <div className="partners-header">
            <h2 className="partners-header__h2">The Actipro Range</h2>
          </div>

          <div className="partners-card">
            <div className="partners-card__inner">
              <div className="partners-card__tag">Our Range</div>
              <div className="partners-card__flex">
                <img src="/logo.png" alt="Actipro" loading="lazy" />

                <span className="partners-card__span">Sunflower</span>
              </div>

              <p className="partners-card__p">Low-wax and neutral. Built to disappear into everyday cooking.</p>
            </div>

            <div className="partners-card__inner">
              <div className="partners-card__tag">Our Range</div>
              <div className="partners-card__flex">
                <img src="/logo.png" alt="Actipro" loading="lazy" />

                <span className="partners-card__span">Corn</span>
              </div>

              <p className="partners-card__p">Absorbed less during frying, so fried food comes out lighter.</p>
            </div>

            <div className="partners-card__inner">
              <div className="partners-card__tag">Our Range</div>
              <div className="partners-card__flex">
                <img src="/logo.png" alt="Actipro" loading="lazy" />

                <span className="partners-card__span">Rice Bran</span>
              </div>

              <p className="partners-card__p">Heat-stable and cholesterol-free. For heart-conscious kitchens.</p>
            </div>

            <div className="partners-card__inner">
              <div className="partners-card__tag">Our Range</div>
              <div className="partners-card__flex">
                <img src="/logo.png" alt="Actipro" loading="lazy" />

                <span className="partners-card__span">Tasting Trio</span>
              </div>

              <p className="partners-card__p">All three variants, boxed. For gifting, or for deciding.</p>
            </div>
          </div>
        </div>

        <canvas id="partners-canvas" width="2168" height="1452"></canvas>
      </section>
    </div>
  );
}
