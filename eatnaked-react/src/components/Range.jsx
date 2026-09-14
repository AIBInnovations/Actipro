import CtaButton from "./CtaButton.jsx";
import { VARIANTS } from "../data/variants.js";

/**
 * "Our Range" preview - the three variants with a route into each product
 * page. The homepage plan asks for 3-4 best sellers shown with Learn More
 * buttons; the hero's variant pills are decorative images, not links, so this
 * is the only place on the homepage that actually routes to a product.
 */
export default function Range() {
  return (
    <section className="range" data-marker="">
      <div className="range-container">
        <div className="range-header">
          <div className="range-eyebrow">
            <span className="range-eyebrow__rule"></span>
            <span className="range-eyebrow__text">Our Range</span>
          </div>

          <h2 className="range-header__h2">Three oils. Three different jobs.</h2>
          <p className="range-header__p">
            Each one refined for the problem it actually has to solve, not the one that was easiest to print on a label.
          </p>
        </div>

        <ul className="range-grid">
          {VARIANTS.map((v) => (
            <li className="range-card" key={v.key}>
              <div className="range-card__media">
                <div className="range-card__glow" aria-hidden="true"></div>
                <img loading="lazy" src={v.pack} alt={v.name} className="range-card__pack" />
              </div>

              <div className="range-card__body">
                <span className="range-card__use">{v.use}</span>
                <h3 className="range-card__h3">{v.name}</h3>
                <p className="range-card__p">{v.blurb}</p>

                <ul className="range-card__badges">
                  {v.badges.map((b) => (
                    <li className="range-badge" key={b}>
                      {b}
                    </li>
                  ))}
                </ul>

                <span className="range-card__process">{v.process}</span>

                <CtaButton to={`/products/${v.key}`} label="Learn More" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
