/**
 * Preload screen. The Actipro logo fills with colour from the bottom as the partner
 * frame sequence decodes - see `animations/preloader.js`.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-container">
        <div className="loader-apple">
          <svg viewBox="0 0 1624 504" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* preloader.js drives this clipPath upward in steps; the rect starts a
                  full height below the mark, so the logo begins entirely unfilled. */}
              <clipPath id="clip-apple">
                <rect className="clipper" id="rect-1" x="0" y="100%" width="1624" height="100%"></rect>
              </clipPath>
            </defs>

            {/* Resting state: the logo's own white keyline layer, colour drained out. */}
            <image href="/logo-outline.png" x="0" y="0" width="1624" height="504" opacity="0.85"></image>

            {/* Red and green wash up into it as the frame sequence decodes. */}
            <g clipPath="url(#clip-apple)">
              <image href="/logo.png" x="0" y="0" width="1624" height="504"></image>
            </g>
          </svg>
        </div>

        <div className="loader-text">
          <span className="loader-text__number">0</span>
          <span>%</span>
        </div>
      </div>

      <div className="loader-layer is--black"></div>
      <div className="loader-layer is--orange"></div>

      <div className="loader-circles">
        <svg width="1778" height="1080" viewBox="0 0 1778 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            className="circle"
            opacity="0.45"
            cx="889"
            cy="585"
            r="888"
            stroke="#3A3A3A"
            strokeDasharray="10 10"
          ></circle>
          <g opacity="0.49" filter="url(#filter0_d_3434_2371)">
            <circle
              cx="890"
              cy="585"
              r="780.5"
              stroke="url(#paint0_linear_3434_2371)"
              strokeOpacity="0.1"
              shapeRendering="crispEdges"
            ></circle>
          </g>
          <g opacity="0.49" filter="url(#filter1_d_3434_2371)">
            <circle
              cx="890"
              cy="585"
              r="532.75"
              stroke="url(#paint1_linear_3434_2371)"
              strokeOpacity="0.22"
              strokeWidth="0.5"
              shapeRendering="crispEdges"
            ></circle>
          </g>
          <circle
            className="circle"
            cx="880.644"
            cy="588.326"
            r="442"
            transform="rotate(-19.9798 880.644 588.326)"
            stroke="#3A3A3A"
            strokeDasharray="10 10"
          ></circle>
          <circle
            className="circle"
            opacity="0.28"
            cx="890"
            cy="585"
            r="335"
            stroke="#3A3A3A"
            strokeDasharray="10 10"
          ></circle>
          <defs>
            <filter
              id="filter0_d_3434_2371"
              x="105"
              y="-196"
              width="1570"
              height="1570"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3434_2371"></feBlend>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3434_2371" result="shape"></feBlend>
            </filter>
            <filter
              id="filter1_d_3434_2371"
              x="353"
              y="52"
              width="1074"
              height="1074"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3434_2371"></feBlend>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3434_2371" result="shape"></feBlend>
            </filter>
            <linearGradient
              id="paint0_linear_3434_2371"
              x1="890"
              y1="-196"
              x2="890"
              y2="1366"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_3434_2371"
              x1="890"
              y1="52"
              x2="890"
              y2="1118"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="loader-gradient">
        <svg width="1462" height="514" viewBox="0 0 1462 514" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.31">
            <g filter="url(#filter0_f_3434_2189)">
              <ellipse cx="731" cy="515.046" rx="349" ry="132.954" fill="#F4783E"></ellipse>
            </g>
            <g filter="url(#filter1_f_3434_2189)">
              <ellipse cx="731" cy="432.523" rx="121.487" ry="82.5231" fill="#F4783E"></ellipse>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_3434_2189"
              x="0.200012"
              y="0.292297"
              width="1461.6"
              height="1029.51"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feGaussianBlur stdDeviation="190.9" result="effect1_foregroundBlur_3434_2189"></feGaussianBlur>
            </filter>
            <filter
              id="filter1_f_3434_2189"
              x="403.313"
              y="143.8"
              width="655.375"
              height="577.446"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feGaussianBlur stdDeviation="103.1" result="effect1_foregroundBlur_3434_2189"></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
