/**
 * Preload screen. The apple fills from the bottom as the partner frame
 * sequence decodes — see `animations/preloader.js`.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-container">
        <div className="loader-apple">
          <svg width="241" height="289" viewBox="0 0 241 289" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="clip-apple">
                <rect className="clipper" id="rect-1" x="0" y="100%" width="242" height="100%"></rect>
              </clipPath>
            </defs>

            <path
              d="M135.732 92.5418L179.002 50.8633C179.002 50.8633 172.681 33.6262 147.135 31.9466L122.384 97.271L135.732 92.5418Z"
              fill="var(--apple-base)"
            ></path>
            <path
              d="M0 135.28C0 135.28 88.5282 90.7286 237.21 124.717C237.21 124.717 237.21 91.3032 213.829 86.3088C190.448 81.3145 129.721 91.8778 96.3512 80.1654C62.9377 68.453 11.1379 44.5419 0 135.28Z"
              fill="var(--apple-base)"
            ></path>
            <path
              d="M238.89 180.936C238.89 180.936 242.78 163.655 239.995 134.175C239.995 134.175 87.9548 109.689 1.10609 168.694C1.10609 168.694 -0.573477 194.328 26.7408 241.664C26.7408 241.664 91.358 174.837 238.935 180.981"
              fill="var(--apple-base)"
            ></path>
            <path
              d="M233.32 199.279C233.32 199.279 119.732 194.285 46.187 267.786C46.187 267.786 46.1869 284.493 87.3793 288.382C87.3793 288.382 137.5 210.417 227.708 220.98C227.708 220.98 233.851 219.875 233.277 199.279"
              fill="var(--apple-base)"
            ></path>
            <path
              d="M123.622 123.966C117.832 122.64 112.086 121.138 106.429 119.414C53.0378 122.199 18.1217 134.53 5.43688 139.789C8.88431 142.441 14.0554 146.065 20.9502 150.132C52.3749 134.441 89.2359 127.016 123.622 123.966Z"
              fill="var(--apple-base)"
            ></path>
            <path
              d="M127.245 210.505C115.754 210.328 105.19 209.577 95.5552 208.428C63.5559 220.45 43.2249 234.681 33.5456 242.549C43.7995 243.919 53.9208 244.758 63.9537 245.2C84.0638 229.378 106.03 218.24 127.289 210.461"
              fill="var(--apple-base)"
            ></path>
            <path
              d="M154.427 239.278C176.614 235.566 195.222 230.836 208.348 227.035C187.929 227.433 169.896 232.251 154.427 239.278Z"
              fill="var(--apple-base)"
            ></path>
            <path
              d="M92.285 288.692C110.141 289.487 172.946 289.487 203.796 253.864C203.796 253.864 162.383 267.256 108.771 270.526C101.39 277.598 95.865 284.095 92.285 288.692Z"
              fill="var(--apple-base)"
            ></path>
            <path
              d="M40.5302 1.62645C40.5302 1.62645 35.5357 79.9892 133.522 67.7464C133.522 67.7464 144.572 -12.2959 40.5302 1.62645Z"
              fill="var(--apple-base)"
            ></path>

            <g clipPath="url(#clip-apple)">
              <path
                d="M135.732 92.5418L179.002 50.8633C179.002 50.8633 172.681 33.6262 147.135 31.9466L122.384 97.271L135.732 92.5418Z"
                fill="#2B6B22"
              ></path>
              <path
                d="M0 135.28C0 135.28 88.5282 90.7286 237.21 124.717C237.21 124.717 237.21 91.3032 213.829 86.3088C190.448 81.3145 129.721 91.8778 96.3512 80.1654C62.9377 68.453 11.1379 44.5419 0 135.28Z"
                fill="#DB5E2C"
              ></path>
              <path
                d="M238.89 180.936C238.89 180.936 242.78 163.655 239.995 134.175C239.995 134.175 87.9548 109.689 1.10609 168.694C1.10609 168.694 -0.573477 194.328 26.7408 241.664C26.7408 241.664 91.358 174.837 238.935 180.981"
                fill="#DB5E2C"
              ></path>
              <path
                d="M233.32 199.279C233.32 199.279 119.732 194.285 46.187 267.786C46.187 267.786 46.1869 284.493 87.3793 288.382C87.3793 288.382 137.5 210.417 227.708 220.98C227.708 220.98 233.851 219.875 233.277 199.279"
                fill="#DB5E2C"
              ></path>
              <path
                d="M123.622 123.966C117.832 122.64 112.086 121.138 106.429 119.414C53.0378 122.199 18.1217 134.53 5.43688 139.789C8.88431 142.441 14.0554 146.065 20.9502 150.132C52.3749 134.441 89.2359 127.016 123.622 123.966Z"
                fill="#DB5E2C"
              ></path>
              <path
                d="M127.245 210.505C115.754 210.328 105.19 209.577 95.5552 208.428C63.5559 220.45 43.2249 234.681 33.5456 242.549C43.7995 243.919 53.9208 244.758 63.9537 245.2C84.0638 229.378 106.03 218.24 127.289 210.461"
                fill="#DB5E2C"
              ></path>
              <path
                d="M154.427 239.278C176.614 235.566 195.222 230.836 208.348 227.035C187.929 227.433 169.896 232.251 154.427 239.278Z"
                fill="#DB5E2C"
              ></path>
              <path
                d="M92.285 288.692C110.141 289.487 172.946 289.487 203.796 253.864C203.796 253.864 162.383 267.256 108.771 270.526C101.39 277.598 95.865 284.095 92.285 288.692Z"
                fill="#DB5E2C"
              ></path>
              <path
                d="M40.5302 1.62645C40.5302 1.62645 35.5357 79.9892 133.522 67.7464C133.522 67.7464 144.572 -12.2959 40.5302 1.62645Z"
                fill="#2B6B22"
              ></path>
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
