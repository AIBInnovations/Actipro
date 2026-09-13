/**
 * Full-viewport hero: showreel background, floating ingredient pills, and
 * the "From Our Kitchen to Your Door" block. Pinned on landscape.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function Hero() {
  return (
    <section className="hero" data-marker="" data-scroll-next=".delivered">
      <div className="hero-container">
        <div className="hero-tagline">
          It's a Lifestyle
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 15" fill="none">
            <path
              d="M9.15967 7.53441C8.83111 7.84884 8.48463 8.27451 8.16973 8.84538C7.8586 7.72203 7.4664 6.89849 7.06995 6.29557C8.88909 0.217788 0.0234375 0 0.0234375 0C0.0234375 0 0.282237 7.59617 4.91234 7.42175C4.90292 6.91311 4.82419 6.39881 4.71388 5.91656C4.64176 5.60214 4.55596 5.30233 4.46734 5.02561C4.1713 4.10779 3.83708 3.45632 3.83708 3.45632C4.1746 3.90981 4.47347 4.34255 4.73745 4.74937C5.64584 6.14708 6.14176 7.23413 6.37227 7.8083C6.94126 9.03064 7.45226 11.0412 7.45226 14.3268C7.45226 14.6988 7.75442 15 8.12495 15C8.49641 15 8.79811 14.6988 8.79811 14.3268C8.79811 13.2619 8.74673 12.3144 8.65386 11.4692C8.86835 10.4378 9.1922 9.70569 9.52737 9.18715C9.74751 8.76713 10.1534 8.04777 10.7002 7.31332C11.1872 6.65996 11.7877 5.99434 12.467 5.51917C12.467 5.51917 11.074 7.06112 10.984 8.57055C14.8316 8.77137 14.981 2.7181 14.981 2.7181C14.981 2.7181 7.93969 2.95852 9.15967 7.53441Z"
              fill="#3EB649"
            ></path>
          </svg>
        </div>

        <h1 className="hero-h1">EAT local, EAT healthy, EATnaked.</h1>
        <p className="hero-p is--portrait">
          Meal prepping has become popular with health/fitness enthusiasts and busy professionals alike.
        </p>

        <a href="/register" className="cta-button is--portrait">
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
              <span className="cta-button__text--span">Order Now</span>
            </div>
          </div>
        </a>

        <div className="hero-video">
          <div className="hero-video__tag">
            <div className="hero-video__tag-img">
              <img loading="lazy" src="/assets/img/a002-673a07abab.png" alt="Vegetables" />
            </div>
            <span className="hero-video__tag-text">Vegetables</span>
          </div>

          <div className="hero-video__tag">
            <div className="hero-video__tag-img">
              <img loading="lazy" src="/assets/img/a003-c89aea1fd3.png" alt="Grains" />
            </div>
            <span className="hero-video__tag-text">Grains</span>
          </div>

          <div className="hero-video__tag">
            <div className="hero-video__tag-img">
              <img loading="lazy" src="/assets/img/a004-3ee660c9ce.png" alt="Proteins" />
            </div>
            <span className="hero-video__tag-text">Proteins</span>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-tags">
            <div className="hero-tag">Bold</div>

            <div className="hero-tag">Fresh</div>

            <div className="hero-tag">Tailored</div>
          </div>

          <h2 className="hero-h2">From Our Kitchen to Your Door</h2>

          <p className="hero-text">Healthy eating made effortless. Fuel your body and free your time.</p>
        </div>

        <div className="hero-contact">
          <a href="/customer-support" className="hero-contact__link">
            <span className="hero-contact__icon">
              <svg width="100%" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.6646 15.7094C13.9449 14.9897 13.596 13.1891 13.4286 11.5523C13.2093 9.44369 13.3225 7.2993 13.8417 5.23011C14.231 3.6787 14.8497 1.94462 15.7963 0.997995M15.7963 0.997995C14.8497 1.94462 13.1146 2.56421 11.5642 2.95259C9.49399 3.47078 7.34961 3.58403 5.24293 3.36663C3.60515 3.1983 1.80266 2.84743 1.08488 2.12964M15.7963 0.997995L1.79215 15.0021"
                  stroke="currentColor"
                  strokeWidth="2.3"
                ></path>
              </svg>
            </span>
            <span className="hero-contact__text">Contact Us</span>
          </a>

          <svg
            className="hero-contact__link--blur"
            width="100%"
            viewBox="0 0 289 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_3175_1238)" data-figma-bg-blur-radius="4">
              <ellipse cx="144.5" cy="64" rx="111.5" ry="31" fill="#F4783E"></ellipse>
            </g>
            <defs>
              <filter
                id="filter0_f_3175_1238"
                x="0.799999"
                y="0.799999"
                width="287.4"
                height="126.4"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="16.1" result="effect1_foregroundBlur_3175_1238"></feGaussianBlur>
              </filter>
              <clipPath id="bgblur_0_3175_1238_clip_path" transform="translate(-0.799999 -0.799999)">
                <ellipse cx="144.5" cy="64" rx="111.5" ry="31"></ellipse>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* The showreel is shot against pure black. animations/heroVideoKey.js
          keys that out onto the canvas and sets data-keyed, at which point CSS
          swaps which of the two is visible — so if the keyer never starts, the
          raw video still plays. */}
      <div className="hero-video__bg">
        <video
          src="/assets/videos/Hero-Showreel.mp4"
          autoPlay
          muted
          loop
          fetchPriority="high"
          playsInline
          webkit-playsinline
        ></video>
        <canvas className="hero-video__canvas" aria-hidden="true"></canvas>
      </div>
    </section>
  );
}
