/**
 * Footer columns, the oversized EATnaked wordmark, and back-to-top.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top__col is--nav">
            <ul className="footer-top__ul">
              <li className="footer-top__li">
                <a href="/" data-active="index" className="footer-top__link is--active">
                  Home
                </a>
              </li>

              <li className="footer-top__li">
                <a href="/about-us" data-active="about-us" className="footer-top__link">
                  About Us
                </a>
              </li>

              <li className="footer-top__li">
                <a href="/community" data-active="community" className="footer-top__link">
                  Community
                </a>
              </li>

              <li className="footer-top__li">
                <a href="/our-menu" data-active="our-menu" className="footer-top__link">
                  Menu
                </a>
              </li>

              <li className="footer-top__li">
                <a href="/customer-support" data-active="customer-support" className="footer-top__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-top__col is--login">
            <ul className="footer-top__ul">
              <li className="footer-top__li">
                <a href="/login" className="footer-top__link">
                  Login
                </a>
              </li>

              <li className="footer-top__li">
                <a href="/register" className="footer-top__link">
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-top__col is--contact">
            <ul className="footer-top__ul">
              <li className="footer-top__li">
                <a href="mailto:connect@eatnaked.co" className="footer-top__link">
                  connect@eatnaked.co
                </a>
              </li>

              <li className="footer-top__li">
                <a href="tel:+19092765351" className="footer-top__link">
                  +1 909-276-5351
                </a>
              </li>

              <li className="footer-top__li">
                <a href="https://maps.app.goo.gl/YzK3Njmb3cBLay2w5" target="_blank" className="footer-top__link">
                  2032 Lincoln Ave., Pasadena, CA 91001
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-top__col is--social">
            <ul className="footer-top__ul">
              <li className="footer-top__li">
                <a href="https://www.facebook.com/MealPrep" target="_blank" className="footer-top__link">
                  Facebook
                </a>
              </li>

              <li className="footer-top__li">
                <a href="https://www.instagram.com/eatnakedco" target="_blank" className="footer-top__link">
                  Instagram
                </a>
              </li>

              <li className="footer-top__li">
                <a href="https://www.tiktok.com/@eatnakedla" target="_blank" className="footer-top__link">
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">EATnaked</div>

          <div className="footer-bottom__back-to-top" data-scrollto="top">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 166 167" fill="none">
              <circle cx="83" cy="83.1945" r="83" transform="rotate(-90 83 83.1945)" fill="#F4783E"></circle>
              <path
                d="M103.75 70.7445C101.55 70.7445 98.2661 68.4631 95.5093 66.1536C91.9521 63.1843 88.8485 59.636 86.4801 55.568C84.7045 52.5177 83 48.8201 83 45.8445M83 45.8445C83 48.8201 81.2955 52.5208 79.5199 55.568C77.1485 59.636 74.0449 63.1843 70.4937 66.1536C67.7339 68.4631 64.4436 70.7445 62.25 70.7445M83 45.8445L83 120.545"
                stroke="white"
                strokeWidth="6.225"
              ></path>
            </svg>
          </div>

          <p className="footer-copyright">© All rights reserved {new Date().getFullYear()}</p>

          <div className="footer-terms">
            <a href="terms" className="footer-terms__link">
              Terms and Conditions
            </a>
            <a href="privacy-policy" className="footer-terms__link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <picture>
        <source srcSet="/assets/images/footer-bg-portrait.avif" type="image/avif" media="(orientation: portrait)" />
        <img
          src="/assets/img/a047-c2dac2172d.avif"
          type="image/avif"
          alt="EATnaked footer Background"
          className="footer-background"
          loading="lazy"
        />
      </picture>
    </footer>
  );
}
