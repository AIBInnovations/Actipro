import { Link } from "react-router-dom";

/**
 * The site's pill button. Same markup everywhere - the background, blur and
 * inner wrapper are what styles.css hangs the hover states off, so it is a
 * component rather than a copied block.
 *
 * Internal destinations route through React Router; anything with a scheme or
 * a `target` falls back to a plain anchor so Amazon links still leave the site.
 */
export default function CtaButton({ to, href, label, target, className = "" }) {
  const inner = (
    <>
      <div className="cta-button__background"></div>
      <div className="cta-button__blur"></div>

      <div className="cta-button__inner">
        <div className="cta-button__icon">
          <svg width="100%" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 10C12 9.47 12.5498 8.67857 13.1063 8.01429C13.8218 7.15714 14.6767 6.40929 15.657 5.83857C16.392 5.41071 17.283 5 18 5M18 5C17.283 5 16.3912 4.58929 15.657 4.16143C14.6767 3.59 13.8218 2.84214 13.1063 1.98643C12.5498 1.32143 12 0.528571 12 -2.38419e-07M18 5L0 5"
              stroke="white"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
        <div className="cta-button__text">
          <span className="cta-button__text--span">{label}</span>
        </div>
      </div>
    </>
  );

  const classes = `cta-button ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
      {inner}
    </a>
  );
}
