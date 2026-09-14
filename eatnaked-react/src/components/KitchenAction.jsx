/**
 * Refinery showreel. The Vimeo player starts inline inside the headline and
 * Flips out to the full-bleed `.showreel` slot on scroll.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function KitchenAction() {
  return (
    <>
      <section className="action" data-marker="">
        <div className="action-container">
          <div className="action-content">
            <div className="action-tag">Where It's Actually Made</div>

            <div className="action-header">
              <div className="action-h2-inline is--portrait">
                Our refinery In <span className="highlight">Action</span>
              </div>

              <p className="action-p is--portrait">
                Three decades of edible oil manufacturing behind every bottle. Actipro is made by Madhuri Refiners Pvt.
                Ltd. — built as its own brand, with its own promise: upgrade everyday cooking into conscious living.
              </p>

              <h2 className="action-h2">Our refinery</h2>
              <div className="action-h2-inline">
                <span>In</span>

                <div className="action-video is--landscape" data-flip-video="1">
                  <div className="action-video__wrapper" data-flip-wrapper="1">
                    <div className="action-video__target" data-flip-target="1" data-flip-id="auto-2">
                      <div
                        className="vimeo-player"
                        data-vimeo-player-init=""
                        data-vimeo-video-id="1129496694"
                        data-vimeo-autoplay="false"
                        data-vimeo-update-size="cover"
                        data-vimeo-playing="false"
                        data-vimeo-activated="false"
                        data-vimeo-fullscreen="false"
                        data-vimeo-paused-by-user="false"
                        data-vimeo-hover="false"
                        data-vimeo-loaded="false"
                        data-vimeo-muted="true"
                      >
                        <div className="vimeo-player__before"></div>

                        <iframe
                          src="https://player.vimeo.com/video/1129496694?api=1&amp;background=1&amp;autoplay=0&amp;loop=0&amp;muted=1"
                          width="640"
                          height="360"
                          frameBorder="0"
                          allowFullScreen
                          allow="autoplay; encrypted-media"
                          className="vimeo-player__iframe"
                        ></iframe>

                        <img
                          src="/assets/img/a028-43dd414d72.avif"
                          loading="lazy"
                          alt="Actipro showreel"
                          className="vimeo-player__placeholder"
                        />

                        <div className="vimeo-player__dark"></div>

                        <div className="vimeo-player__play" data-vimeo-control="play">
                          <div className="vimeo-player__btn">
                            <svg
                              className="vimeo-player__btn-play-svg"
                              width="100%"
                              viewBox="0 0 246 246"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g data-figma-bg-blur-radius="57.4">
                                <circle cx="123" cy="123" r="123" fill="currentColor" fillOpacity="0.11"></circle>
                                <circle
                                  cx="123"
                                  cy="123"
                                  r="122.5"
                                  stroke="url(#paint0_linear_2397_5211)"
                                  strokeOpacity="0.13"
                                ></circle>
                              </g>
                              <circle
                                data-figma-bg-blur-radius="57.4"
                                cx="123"
                                cy="123"
                                r="94"
                                fill="currentColor"
                                fillOpacity="0.05"
                              ></circle>
                              <path
                                d="M123 62C156.689 62 184 89.3106 184 123C184 156.689 156.689 184 123 184C89.3106 184 62 156.689 62 123C62 89.3106 89.3106 62 123 62ZM115.019 105.687C112.003 104.616 108.815 106.656 108.406 109.771C107.266 118.554 107.266 127.446 108.406 136.229C108.817 139.344 112.003 141.384 115.019 140.313L116.597 139.752C125.227 136.685 133.315 132.268 140.56 126.664C141.119 126.231 141.572 125.675 141.884 125.04C142.195 124.405 142.357 123.707 142.357 123C142.357 122.293 142.195 121.595 141.884 120.96C141.572 120.325 141.119 119.769 140.56 119.336C133.315 113.732 125.227 109.315 116.597 106.248L115.019 105.687Z"
                                fill="currentColor"
                                fillOpacity="0.63"
                              ></path>
                              <defs>
                                <clipPath id="bgblur_0_2397_5211_clip_path" transform="translate(57.4 57.4)">
                                  <circle cx="123" cy="123" r="123"></circle>
                                </clipPath>
                                <clipPath id="bgblur_1_2397_5211_clip_path" transform="translate(28.4 28.4)">
                                  <circle cx="123" cy="123" r="94"></circle>
                                </clipPath>
                                <linearGradient
                                  id="paint0_linear_2397_5211"
                                  x1="123"
                                  y1="0"
                                  x2="123"
                                  y2="246"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="white"></stop>
                                  <stop offset="1" stopColor="#999999"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>

                        <div className="vimeo-player__pause" data-vimeo-control="pause">
                          <div className="vimeo-player__btn">
                            <svg
                              className="vimeo-player__btn-pause-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M8 6.5C8 6.22386 8.22386 6 8.5 6H10.5C10.7761 6 11 6.22386 11 6.5V17.5C11 17.7761 10.7761 18 10.5 18H8.5C8.22386 18 8 17.7761 8 17.5V6.5Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M14 6.5C14 6.22386 14.2239 6 14.5 6H16.5C16.7761 6 17 6.22386 17 6.5V17.5C17 17.7761 16.7761 18 16.5 18H14.5C14.2239 18 14 17.7761 14 17.5V6.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>

                        <div className="vimeo-player__interface">
                          <div className="vimeo-player__interface-bottom">
                            <div className="vimeo-player__duration">
                              <span className="vimeo-player__duration-span" data-vimeo-duration="">
                                0:29
                              </span>
                            </div>
                            <div className="vimeo-player__timeline">
                              <progress
                                className="vimeo-player__timeline-progress"
                                min="0"
                                max="29"
                                value="0"
                              ></progress>
                              <input
                                className="vimeo-player__timeline-input"
                                type="range"
                                min="0"
                                max="29"
                                step="0.01"
                                data-vimeo-control="timeline"
                                defaultValue="0"
                              />
                            </div>
                            <div className="vimeo-player__mute" data-vimeo-control="mute">
                              <svg
                                className="vimeo-player__volume-up-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <svg
                                className="vimeo-player__volume-mute-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <div className="vimeo-player__fullscreen" data-vimeo-control="fullscreen">
                              <svg
                                className="vimeo-player__fullscreen-scale-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect x="3" y="14" width="2" height="7" fill="currentColor"></rect>
                                <rect x="3" y="3" width="2" height="7" fill="currentColor"></rect>
                                <rect x="19" y="3" width="2" height="7" fill="currentColor"></rect>
                                <rect x="19" y="14" width="2" height="7" fill="currentColor"></rect>
                                <rect x="3" y="19" width="7" height="2" fill="currentColor"></rect>
                                <rect x="14" y="19" width="7" height="2" fill="currentColor"></rect>
                                <rect x="3" y="3" width="7" height="2" fill="currentColor"></rect>
                                <rect x="14" y="3" width="7" height="2" fill="currentColor"></rect>
                              </svg>
                              <svg
                                className="vimeo-player__fullscreen-shrink-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect x="7" y="2" width="2" height="7" fill="currentColor"></rect>
                                <rect x="15" y="2" width="2" height="7" fill="currentColor"></rect>
                                <rect x="15" y="15" width="2" height="7" fill="currentColor"></rect>
                                <rect x="8" y="15" width="2" height="7" fill="currentColor"></rect>
                                <rect x="2" y="7" width="7" height="2" fill="currentColor"></rect>
                                <rect x="3" y="15" width="7" height="2" fill="currentColor"></rect>
                                <rect x="15" y="7" width="7" height="2" fill="currentColor"></rect>
                                <rect x="15" y="15" width="7" height="2" fill="currentColor"></rect>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="vimeo-player__loading">
                          <svg
                            className="vimeo-player__loading-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="L9"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            enableBackground="new 0 0 0 0"
                            xmlSpace="preserve"
                            width="100%"
                          >
                            <path
                              fill="currentColor"
                              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="highlight">Action</span>
              </div>
            </div>

            <p className="action-p is--landscape">
              Actipro is made by Madhuri Refiners Pvt. Ltd., with over three decades in edible oil manufacturing — built as its own
              brand, with its own promise: upgrade everyday cooking into conscious living.
            </p>
          </div>

          <div className="action-background">
            <svg
              className="is--landscape"
              width="100%"
              viewBox="0 0 1778 1778"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.45"
                cx="889"
                cy="889"
                r="888"
                stroke="var(--hairline-soft)"
                strokeDasharray="10 10"
              ></circle>
              <g opacity="0.49" filter="url(#filter0_d_3475_1524)">
                <circle
                  cx="890"
                  cy="889"
                  r="781"
                  fill="url(#paint0_linear_3475_1524)"
                  fillOpacity="0.03"
                  shapeRendering="crispEdges"
                ></circle>
                <circle
                  cx="890"
                  cy="889"
                  r="780.5"
                  stroke="url(#paint1_linear_3475_1524)"
                  strokeOpacity="0.1"
                  shapeRendering="crispEdges"
                ></circle>
              </g>
              <g opacity="0.49" filter="url(#filter1_d_3475_1524)">
                <circle
                  cx="890"
                  cy="889"
                  r="533"
                  fill="url(#paint2_linear_3475_1524)"
                  fillOpacity="0.01"
                  shapeRendering="crispEdges"
                ></circle>
                <circle
                  cx="890"
                  cy="889"
                  r="532.75"
                  stroke="url(#paint3_linear_3475_1524)"
                  strokeOpacity="0.22"
                  strokeWidth="0.5"
                  shapeRendering="crispEdges"
                ></circle>
              </g>
              <circle
                cx="880.644"
                cy="892.327"
                r="442"
                transform="rotate(-19.9798 880.644 892.327)"
                stroke="var(--hairline-soft)"
                strokeDasharray="10 10"
              ></circle>
              <g filter="url(#filter2_i_3475_1524)" data-figma-bg-blur-radius="314.545">
                <circle
                  cx="1299.46"
                  cy="750.698"
                  r="19"
                  transform="rotate(-19.9798 1299.46 750.698)"
                  fill="#F4783E"
                ></circle>
                <circle
                  cx="1299.46"
                  cy="750.698"
                  r="15.5"
                  transform="rotate(-19.9798 1299.46 750.698)"
                  stroke="var(--bg)"
                  strokeWidth="7"
                ></circle>
              </g>
              <g filter="url(#filter3_i_3475_1524)" data-figma-bg-blur-radius="314.545">
                <circle
                  cx="555.502"
                  cy="1195.68"
                  r="19"
                  transform="rotate(-19.9798 555.502 1195.68)"
                  fill="#F4783E"
                ></circle>
                <circle
                  cx="555.502"
                  cy="1195.68"
                  r="15.5"
                  transform="rotate(-19.9798 555.502 1195.68)"
                  stroke="var(--bg)"
                  strokeWidth="7"
                ></circle>
              </g>
              <g filter="url(#filter4_i_3475_1524)" data-figma-bg-blur-radius="314.545">
                <circle
                  cx="506.961"
                  cy="654.708"
                  r="19"
                  transform="rotate(-19.9798 506.961 654.708)"
                  fill="#F4783E"
                ></circle>
                <circle
                  cx="506.961"
                  cy="654.708"
                  r="15.5"
                  transform="rotate(-19.9798 506.961 654.708)"
                  stroke="var(--bg)"
                  strokeWidth="7"
                ></circle>
              </g>
              <circle
                opacity="0.28"
                cx="890"
                cy="889"
                r="335"
                stroke="var(--hairline-soft)"
                strokeDasharray="10 10"
              ></circle>
              <defs>
                <filter
                  id="filter0_d_3475_1524"
                  x="105"
                  y="108"
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
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3475_1524"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3475_1524" result="shape"></feBlend>
                </filter>
                <filter
                  id="filter1_d_3475_1524"
                  x="353"
                  y="356"
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
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3475_1524"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3475_1524" result="shape"></feBlend>
                </filter>
                <filter
                  id="filter2_i_3475_1524"
                  x="965.908"
                  y="417.147"
                  width="667.101"
                  height="667.101"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="28.6236"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3475_1524"></feBlend>
                </filter>
                <clipPath id="bgblur_0_3475_1524_clip_path" transform="translate(-965.908 -417.147)">
                  <circle cx="1299.46" cy="750.698" r="19" transform="rotate(-19.9798 1299.46 750.698)"></circle>
                </clipPath>
                <filter
                  id="filter3_i_3475_1524"
                  x="221.952"
                  y="862.131"
                  width="667.102"
                  height="667.101"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="28.6236"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3475_1524"></feBlend>
                </filter>
                <clipPath id="bgblur_1_3475_1524_clip_path" transform="translate(-221.952 -862.131)">
                  <circle cx="555.502" cy="1195.68" r="19" transform="rotate(-19.9798 555.502 1195.68)"></circle>
                </clipPath>
                <filter
                  id="filter4_i_3475_1524"
                  x="173.411"
                  y="321.157"
                  width="667.101"
                  height="667.101"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="28.6236"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3475_1524"></feBlend>
                </filter>
                <clipPath id="bgblur_2_3475_1524_clip_path" transform="translate(-173.411 -321.157)">
                  <circle cx="506.961" cy="654.708" r="19" transform="rotate(-19.9798 506.961 654.708)"></circle>
                </clipPath>
                <linearGradient
                  id="paint0_linear_3475_1524"
                  x1="890"
                  y1="108"
                  x2="890"
                  y2="1670"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3475_1524"
                  x1="890"
                  y1="108"
                  x2="890"
                  y2="1670"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_3475_1524"
                  x1="890"
                  y1="356"
                  x2="890"
                  y2="1422"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_3475_1524"
                  x1="890"
                  y1="356"
                  x2="890"
                  y2="1422"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="is--portrait"
              width="100%"
              viewBox="0 0 878 878"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.49" filter="url(#filter0_d_3359_1575)">
                <ellipse
                  cx="439.401"
                  cy="439"
                  rx="263.202"
                  ry="262.8"
                  fill="url(#paint0_linear_3359_1575)"
                  fillOpacity="0.01"
                  shapeRendering="crispEdges"
                ></ellipse>
                <path
                  d="M439.401 176.374C584.668 176.374 702.43 293.956 702.43 439C702.43 584.044 584.668 701.627 439.401 701.627C294.135 701.627 176.373 584.044 176.373 439C176.373 293.956 294.135 176.374 439.401 176.374Z"
                  stroke="url(#paint1_linear_3359_1575)"
                  strokeOpacity="0.22"
                  strokeWidth="0.346789"
                  shapeRendering="crispEdges"
                ></path>
              </g>
              <circle
                opacity="0.45"
                cx="439"
                cy="439"
                r="438"
                stroke="var(--hairline-soft)"
                strokeWidth="0.693578"
                strokeDasharray="6.94 6.94"
              ></circle>
              <g opacity="0.49" filter="url(#filter1_d_3359_1575)">
                <ellipse
                  cx="439.403"
                  cy="450.958"
                  rx="385.36"
                  ry="384.958"
                  fill="url(#paint2_linear_3359_1575)"
                  fillOpacity="0.03"
                  shapeRendering="crispEdges"
                ></ellipse>
                <path
                  d="M439.402 66.3467C652.039 66.3467 824.415 238.544 824.415 450.958C824.415 663.372 652.039 835.568 439.402 835.568C226.765 835.568 54.3898 663.372 54.3896 450.958C54.3896 238.544 226.765 66.3468 439.402 66.3467Z"
                  stroke="url(#paint3_linear_3359_1575)"
                  strokeOpacity="0.1"
                  strokeWidth="0.693578"
                  shapeRendering="crispEdges"
                ></path>
              </g>
              <circle
                cx="435.38"
                cy="440.46"
                r="193.252"
                transform="rotate(-19.9798 435.38 440.46)"
                stroke="var(--hairline-soft)"
                strokeWidth="0.693578"
                strokeDasharray="6.94 6.94"
              ></circle>
              <g filter="url(#filter2_i_3359_1575)" data-figma-bg-blur-radius="218.162">
                <circle
                  cx="618.493"
                  cy="378.537"
                  r="8.30723"
                  transform="rotate(-19.9798 618.493 378.537)"
                  fill="#F4783E"
                ></circle>
                <circle
                  cx="618.493"
                  cy="378.537"
                  r="5.87971"
                  transform="rotate(-19.9798 618.493 378.537)"
                  stroke="var(--bg)"
                  strokeWidth="4.85505"
                ></circle>
              </g>
              <g filter="url(#filter3_i_3359_1575)" data-figma-bg-blur-radius="218.162">
                <circle
                  cx="293.22"
                  cy="573.094"
                  r="8.30723"
                  transform="rotate(-19.9798 293.22 573.094)"
                  fill="#F4783E"
                ></circle>
                <circle
                  cx="293.22"
                  cy="573.094"
                  r="5.87971"
                  transform="rotate(-19.9798 293.22 573.094)"
                  stroke="var(--bg)"
                  strokeWidth="4.85505"
                ></circle>
              </g>
              <g filter="url(#filter4_i_3359_1575)" data-figma-bg-blur-radius="218.162">
                <circle
                  cx="271.997"
                  cy="336.567"
                  r="8.30723"
                  transform="rotate(-19.9798 271.997 336.567)"
                  fill="#F4783E"
                ></circle>
                <circle
                  cx="271.997"
                  cy="336.567"
                  r="5.87971"
                  transform="rotate(-19.9798 271.997 336.567)"
                  stroke="var(--bg)"
                  strokeWidth="4.85505"
                ></circle>
              </g>
              <defs>
                <filter
                  id="filter0_d_3359_1575"
                  x="173.425"
                  y="176.2"
                  width="531.951"
                  height="531.148"
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
                  <feOffset dy="2.77431"></feOffset>
                  <feGaussianBlur stdDeviation="1.38716"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3359_1575"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3359_1575" result="shape"></feBlend>
                </filter>
                <filter
                  id="filter1_d_3359_1575"
                  x="51.2687"
                  y="66"
                  width="776.267"
                  height="775.465"
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
                  <feOffset dy="2.77431"></feOffset>
                  <feGaussianBlur stdDeviation="1.38716"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3359_1575"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3359_1575" result="shape"></feBlend>
                </filter>
                <filter
                  id="filter2_i_3359_1575"
                  x="392.022"
                  y="152.066"
                  width="452.945"
                  height="452.943"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="19.8527"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3359_1575"></feBlend>
                </filter>
                <clipPath id="bgblur_0_3359_1575_clip_path" transform="translate(-392.022 -152.066)">
                  <circle cx="618.493" cy="378.537" r="8.30723" transform="rotate(-19.9798 618.493 378.537)"></circle>
                </clipPath>
                <filter
                  id="filter3_i_3359_1575"
                  x="66.7483"
                  y="346.622"
                  width="452.945"
                  height="452.943"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="19.8527"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3359_1575"></feBlend>
                </filter>
                <clipPath id="bgblur_1_3359_1575_clip_path" transform="translate(-66.7483 -346.622)">
                  <circle cx="293.22" cy="573.094" r="8.30723" transform="rotate(-19.9798 293.22 573.094)"></circle>
                </clipPath>
                <filter
                  id="filter4_i_3359_1575"
                  x="45.5257"
                  y="110.096"
                  width="452.945"
                  height="452.943"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="19.8527"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3359_1575"></feBlend>
                </filter>
                <clipPath id="bgblur_2_3359_1575_clip_path" transform="translate(-45.5257 -110.096)">
                  <circle cx="271.997" cy="336.567" r="8.30723" transform="rotate(-19.9798 271.997 336.567)"></circle>
                </clipPath>
                <linearGradient
                  id="paint0_linear_3359_1575"
                  x1="439.401"
                  y1="176.2"
                  x2="439.401"
                  y2="701.8"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3359_1575"
                  x1="439.401"
                  y1="176.2"
                  x2="439.401"
                  y2="701.8"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_3359_1575"
                  x1="439.403"
                  y1="66"
                  x2="439.403"
                  y2="835.916"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_3359_1575"
                  x1="439.403"
                  y1="66"
                  x2="439.403"
                  y2="835.916"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Flip destination for the headline showreel */}
      <div className="showreel" data-flip-wrapper="1" data-flip-id="auto-1"></div>
    </>
  );
}
