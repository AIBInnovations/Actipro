/**
 * Fixed navigation bar plus the full-screen overlay menu.
 * GSAP sequencing lives in `animations/navbar.js`; this file is markup only.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function Navbar() {
  return (
    <nav className="navbar" data-menu-status="not-active">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/" className="navbar-logo" aria-label="Home">
            <img src="/logo.png" alt="Actipro logo" />
          </a>

          <div className="navbar-menu__button" data-menu-toggle="">
            <svg
              className="navbar-menu__button-svg is--open"
              width="100%"
              viewBox="0 0 49 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 13H48.5" stroke="currentColor" strokeWidth="2"></path>
              <path d="M0 1H48.5" stroke="currentColor" strokeWidth="2"></path>
            </svg>

            <svg
              className="navbar-menu__button-svg is--close"
              width="100%"
              viewBox="0 0 37 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.09912 35.2947L35.3938 0.999999" stroke="currentColor" strokeWidth="2"></path>
              <path d="M35.2949 35.2947L1.00024 0.999999" stroke="currentColor" strokeWidth="2"></path>
            </svg>
          </div>

          <span className="navbar-menu__text">Menu</span>
        </div>

        <ul className="navbar-center">
          <li>
            <a href="/about-us" className="navbar-center__li" data-active="about-us">
              <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor"></circle>
              </svg>
              <span className="navbar-center__link">About</span>
            </a>
          </li>

          <li>
            <a href="/products" className="navbar-center__li" data-active="products">
              <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor"></circle>
              </svg>
              <span className="navbar-center__link">Products</span>
            </a>
          </li>

          <li>
            <a href="/the-process" className="navbar-center__li" data-active="the-process">
              <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor"></circle>
              </svg>
              <span className="navbar-center__link">Process</span>
            </a>
          </li>

          <li>
            <a href="/contact-us" className="navbar-center__li" data-active="contact-us">
              <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor"></circle>
              </svg>
              <span className="navbar-center__link">Contact</span>
            </a>
          </li>
        </ul>

        <div className="navbar-right">
          <a href="/products#verify" className="navbar-right__link is--customer" data-is-customer="">
            Verify Your Batch
          </a>

          <a href="/products" className="cta-button is--clear">
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
                <span className="cta-button__text--span">Explore Our Range</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="navbar-menu" data-lenis-prevent="">
        <div className="navbar-menu__layer"></div>

        <div className="navbar-menu__container is--landscape">
          <ul className="navbar-menu__block">
            <li className="navbar-menu__block-li is--active" data-active="index">
              <a href="/" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Home</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="about-us">
              <a href="/about-us" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">About Us</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="the-process">
              <a href="/the-process" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Our Process</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="products">
              <a href="/products" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Products</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="find-your-oil">
              <a href="/find-your-oil" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Find Your Oil</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="contact-us">
              <a href="/contact-us" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Contact Us</span>
              </a>
            </li>
          </ul>

          <ul className="navbar-menu__block">
            <li className="navbar-menu__block-li" data-active="media">
              <a href="/media" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Media</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="gifting">
              <a href="/gifting" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Gifting</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="faqs">
              <a href="/faqs" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">FAQs</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="oil-bot">
              <a href="/oil-bot" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span is--crown">
                  Oil Bot
                  <svg
                    className="navbar-menu__block-crown"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 22 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6443 0.330422C11.5719 0.228407 11.4755 0.145095 11.3633 0.0875675C11.2511 0.0300405 11.1265 0 11 0C10.8735 0 10.7489 0.0300405 10.6367 0.0875675C10.5245 0.145095 10.4281 0.228407 10.3557 0.330422L5.39314 7.30299L1.342 3.31756C1.23211 3.20922 1.09199 3.13541 0.939387 3.10548C0.786788 3.07556 0.628588 3.09086 0.484845 3.14945C0.341101 3.20805 0.218286 3.3073 0.131969 3.43462C0.0456532 3.56194 -0.000277144 3.71159 1.25817e-06 3.86461V13.9093C1.25817e-06 14.729 0.331123 15.5151 0.920523 16.0948C1.50992 16.6744 2.30932 17 3.14286 17H18.8571C19.6907 17 20.4901 16.6744 21.0795 16.0948C21.6689 15.5151 22 14.729 22 13.9093V3.86461C22.0003 3.71159 21.9543 3.56194 21.868 3.43462C21.7817 3.3073 21.6589 3.20805 21.5152 3.14945C21.3714 3.09086 21.2132 3.07556 21.0606 3.10548C20.908 3.13541 20.7679 3.20922 20.658 3.31756L16.6069 7.30299L11.6443 0.330422Z"
                      fill="#F4783E"
                      fillOpacity="0.5"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>

          <ul className="navbar-menu__socials">
            <li className="navbar-menu__socials-li">
              <a href="#" className="navbar-menu__socials-link">
                Facebook
              </a>
            </li>

            <li className="navbar-menu__socials-li">
              <a href="#" className="navbar-menu__socials-link">
                Instagram
              </a>
            </li>

            <li className="navbar-menu__socials-li">
              <a href="#" className="navbar-menu__socials-link">
                YouTube
              </a>
            </li>
          </ul>

          <div className="navbar-menu__contact">
            <h3 className="navbar-menu__contact-h3">Mon to Sat · 9am to 7pm</h3>
            <a href="tel:+917224870701" className="navbar-menu__contact-link">
              +91 72248 70701
            </a>

            <a href="https://www.google.com/maps/search/?api=1&query=Madhuri+Refiners+Pvt+Ltd+Indore" target="_blank" className="navbar-menu__contact-link">
              Madhuri Refiners Pvt. Ltd., Indore (M.P.)
            </a>
          </div>

          <div className="navbar-menu__terms">
            <a href="/terms" className="navbar-menu__terms-link">
              Terms and Conditions
            </a>
            <a href="/privacy-policy" className="navbar-menu__terms-link">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="navbar-menu__container is--portrait">
          <ul className="navbar-menu__block">
            <li className="navbar-menu__block-li is--active" data-active="index">
              <a href="/" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Home</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="about-us">
              <a href="/about-us" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">About Us</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="the-process">
              <a href="/the-process" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Our Process</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="products">
              <a href="/products" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Products</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="find-your-oil">
              <a href="/find-your-oil" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Find Your Oil</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="contact-us">
              <a href="/contact-us" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Contact Us</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="media">
              <a href="/media" className="navbar-menu__block-link" data-is-customer-mobile="">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Media</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="gifting">
              <a href="/gifting" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">Gifting</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="faqs">
              <a href="/faqs" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span">FAQs</span>
              </a>
            </li>

            <li className="navbar-menu__block-li" data-active="oil-bot">
              <a href="/oil-bot" className="navbar-menu__block-link">
                <svg width="100%" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.7099 35.3664C30.1067 33.7631 29.3486 29.7331 28.9952 26.0677C28.5316 21.3457 28.8137 16.5391 30.0043 11.8957C30.8973 8.41424 32.3063 4.52041 34.44 2.38676M34.44 2.38676C32.3063 4.52041 28.4103 5.93169 24.931 6.82242C20.2855 8.01091 15.4789 8.29298 10.7612 7.83367C7.0936 7.47811 3.05929 6.7157 1.46039 5.1168M34.44 2.38676L2.87522 33.9515"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>

                <span className="navbar-menu__block-span is--crown">
                  Oil Bot
                  <svg
                    className="navbar-menu__block-crown"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 22 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6443 0.330422C11.5719 0.228407 11.4755 0.145095 11.3633 0.0875675C11.2511 0.0300405 11.1265 0 11 0C10.8735 0 10.7489 0.0300405 10.6367 0.0875675C10.5245 0.145095 10.4281 0.228407 10.3557 0.330422L5.39314 7.30299L1.342 3.31756C1.23211 3.20922 1.09199 3.13541 0.939387 3.10548C0.786788 3.07556 0.628588 3.09086 0.484845 3.14945C0.341101 3.20805 0.218286 3.3073 0.131969 3.43462C0.0456532 3.56194 -0.000277144 3.71159 1.25817e-06 3.86461V13.9093C1.25817e-06 14.729 0.331123 15.5151 0.920523 16.0948C1.50992 16.6744 2.30932 17 3.14286 17H18.8571C19.6907 17 20.4901 16.6744 21.0795 16.0948C21.6689 15.5151 22 14.729 22 13.9093V3.86461C22.0003 3.71159 21.9543 3.56194 21.868 3.43462C21.7817 3.3073 21.6589 3.20805 21.5152 3.14945C21.3714 3.09086 21.2132 3.07556 21.0606 3.10548C20.908 3.13541 20.7679 3.20922 20.658 3.31756L16.6069 7.30299L11.6443 0.330422Z"
                      fill="#F4783E"
                      fillOpacity="0.5"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>

          <a href="/products" className="cta-button is--clear">
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
                <span className="cta-button__text--span">Explore Our Range</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
