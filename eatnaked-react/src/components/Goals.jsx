/**
 * Refining-process picker. Landscape uses the custom accordion, portrait swaps
 * to a Swiper carousel — both are in the markup, CSS decides which shows.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function Goals() {
  return (
    <section className="goals" data-marker="">
      <div className="goals-container">
        <div className="goals-header">
          <h2 className="goals-header__h2">One Promise, Three Ways of Keeping It</h2>
          <p className="goals-header__p">Each oil refined the way it actually needs to be</p>
        </div>

        <div data-accordion-close-siblings="true" data-accordion-css-init="" className="accordion-css">
          <div className="accordion-css__list">
            <div className="accordion-css__main-wrappper" data-parent-status="not-active">
              <div className="accordion-css__blur-wrappper">
                <svg width="100%" viewBox="0 0 377 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_3260_3230" maskUnits="userSpaceOnUse" x="0" y="0" width="377" height="71">
                    <rect
                      x="377"
                      y="70.101"
                      width="377"
                      height="70.1009"
                      transform="rotate(180 377 70.101)"
                      fill="#D9D9D9"
                    ></rect>
                  </mask>
                  <g mask="url(#mask0_3260_3230)">
                    <g filter="url(#filter0_f_3260_3230)">
                      <ellipse
                        cx="188.167"
                        cy="65.3866"
                        rx="103.425"
                        ry="19.0625"
                        transform="rotate(180 188.167 65.3866)"
                        fill="#F4783E"
                        fillOpacity="0.72"
                      ></ellipse>
                    </g>
                  </g>
                  <path
                    d="M185 42C88.9025 42 11 54.536 11 70H359C359 54.536 281.098 42 185 42Z"
                    fill="#DB5E2C"
                    fillOpacity="0.45"
                  ></path>
                  <defs>
                    <filter
                      id="filter0_f_3260_3230"
                      x="-35.4583"
                      y="-73.8759"
                      width="447.25"
                      height="278.525"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="60.1" result="effect1_foregroundBlur_3260_3230"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="accordion-css__inner">
                <div data-accordion-status="not-active" className="accordion-css__item">
                  <div className="accordion-css__item-blur">
                    <img src="/assets/img/a005-f4fef06d2e.avif" alt="decorative gradient" loading="lazy" />
                  </div>

                  <div className="accordion-css__item-top-spacer">
                    <div className="accordion-css__item-top-spacer-wrap">
                      <div className="accordion-css__item-top-spacer-content"></div>
                    </div>
                  </div>

                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <div className="accordion-css__top-flex">
                      <svg width="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.3564 21.5C13.2627 18.2188 16.4314 15.875 20.0814 16.2625C23.5564 16.6313 26.3189 19.5625 26.4939 23.05C26.5377 23.9688 26.4127 24.85 26.1439 25.6688C25.9814 26.1688 25.4939 26.5 24.9627 26.5H6.34895C3.19395 26.5 0.827697 23.6131 1.44645 20.5194L5.2502 1.5H12.7502L15.2502 5.875L9.89395 9.70625L8.3752 7.75"
                          fill="#8D8D8D"
                        ></path>
                        <path
                          d="M12.3564 21.5C13.2627 18.2188 16.4314 15.875 20.0814 16.2625C23.5564 16.6313 26.3189 19.5625 26.4939 23.05C26.5377 23.9688 26.4127 24.85 26.1439 25.6688C25.9814 26.1688 25.4939 26.5 24.9627 26.5H6.34895C3.19395 26.5 0.827697 23.6131 1.44645 20.5194L5.2502 1.5H12.7502L15.2502 5.875L9.89395 9.70625L8.3752 7.75M9.9002 9.70625L12.7502 20.25"
                          stroke="#8D8D8D"
                          strokeWidth="2"
                          strokeMiterlimit="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>

                      <span>Refined Sunflower Oil</span>
                    </div>

                    <div className="accordion-css__top-loader">
                      <svg width="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.3" cx="40" cy="40" r="37.5" stroke="currentColor" strokeWidth="5"></circle>
                        <path
                          d="M76.9699 43.0303C78.3653 20.2396 60.1834 2.56522 38.7881 3.03033"
                          stroke="currentColor"
                          strokeWidth="5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M30.612 46.982L21.828 47V45.65L26.022 42.032C26.55 41.588 26.988 41.186 27.336 40.826C27.684 40.466 27.96 40.136 28.164 39.836C28.368 39.524 28.512 39.218 28.596 38.918C28.68 38.618 28.722 38.294 28.722 37.946C28.722 37.13 28.5 36.494 28.056 36.038C27.624 35.57 27.012 35.336 26.22 35.336C25.416 35.336 24.768 35.612 24.276 36.164C23.796 36.704 23.55 37.436 23.538 38.36H21.774C21.798 37.436 21.996 36.626 22.368 35.93C22.74 35.234 23.256 34.7 23.916 34.328C24.588 33.944 25.362 33.752 26.238 33.752C27.114 33.752 27.87 33.92 28.506 34.256C29.142 34.592 29.634 35.066 29.982 35.678C30.342 36.278 30.522 36.998 30.522 37.838C30.522 38.294 30.462 38.732 30.342 39.152C30.222 39.56 30.03 39.968 29.766 40.376C29.514 40.772 29.184 41.186 28.776 41.618C28.368 42.038 27.876 42.5 27.3 43.004L23.898 45.956L23.304 45.344H30.612V46.982ZM36.4865 47.216C35.5985 47.216 34.8245 47.042 34.1645 46.694C33.5165 46.334 33.0065 45.836 32.6345 45.2C32.2745 44.552 32.0945 43.796 32.0945 42.932H33.8405C33.8405 43.772 34.0805 44.432 34.5605 44.912C35.0405 45.392 35.6945 45.632 36.5225 45.632C37.1105 45.632 37.6205 45.512 38.0525 45.272C38.4845 45.02 38.8205 44.678 39.0605 44.246C39.3005 43.802 39.4205 43.286 39.4205 42.698C39.4205 42.134 39.3065 41.636 39.0785 41.204C38.8505 40.76 38.5205 40.412 38.0885 40.16C37.6685 39.908 37.1525 39.782 36.5405 39.782C36.0005 39.782 35.4905 39.902 35.0105 40.142C34.5305 40.37 34.1405 40.67 33.8405 41.042L32.3465 40.664L33.9305 33.986H40.4465V35.606H34.5785L35.3885 34.886L34.1825 39.728L33.5885 39.854C33.9245 39.338 34.3805 38.948 34.9565 38.684C35.5325 38.408 36.1685 38.27 36.8645 38.27C37.7525 38.27 38.5205 38.462 39.1685 38.846C39.8165 39.218 40.3205 39.734 40.6805 40.394C41.0405 41.054 41.2205 41.798 41.2205 42.626C41.2205 43.526 41.0165 44.324 40.6085 45.02C40.2125 45.704 39.6605 46.244 38.9525 46.64C38.2565 47.024 37.4345 47.216 36.4865 47.216ZM49.1912 37.064C49.1912 37.7 49.0472 38.27 48.7592 38.774C48.4832 39.278 48.0992 39.674 47.6072 39.962C47.1152 40.238 46.5452 40.376 45.8972 40.376C45.2612 40.376 44.6972 40.238 44.2052 39.962C43.7132 39.674 43.3232 39.278 43.0352 38.774C42.7592 38.27 42.6212 37.7 42.6212 37.064C42.6212 36.416 42.7592 35.84 43.0352 35.336C43.3232 34.832 43.7132 34.442 44.2052 34.166C44.6972 33.878 45.2612 33.734 45.8972 33.734C46.5452 33.734 47.1152 33.878 47.6072 34.166C48.0992 34.442 48.4832 34.832 48.7592 35.336C49.0472 35.84 49.1912 36.416 49.1912 37.064ZM47.8052 37.064C47.8052 36.476 47.6312 36.002 47.2832 35.642C46.9352 35.27 46.4732 35.084 45.8972 35.084C45.3452 35.084 44.8892 35.27 44.5292 35.642C44.1812 36.002 44.0072 36.476 44.0072 37.064C44.0072 37.64 44.1812 38.114 44.5292 38.486C44.8892 38.846 45.3452 39.026 45.8972 39.026C46.4612 39.026 46.9172 38.846 47.2652 38.486C47.6252 38.114 47.8052 37.64 47.8052 37.064ZM56.0492 34.004L46.1672 47H44.4392L54.3212 34.004H56.0492ZM57.9032 43.922C57.9032 44.558 57.7592 45.128 57.4712 45.632C57.1952 46.136 56.8112 46.532 56.3192 46.82C55.8272 47.096 55.2572 47.234 54.6092 47.234C53.9732 47.234 53.4092 47.096 52.9172 46.82C52.4252 46.532 52.0352 46.136 51.7472 45.632C51.4592 45.128 51.3152 44.558 51.3152 43.922C51.3152 43.274 51.4592 42.704 51.7472 42.212C52.0352 41.708 52.4252 41.318 52.9172 41.042C53.4092 40.754 53.9732 40.61 54.6092 40.61C55.2572 40.61 55.8272 40.754 56.3192 41.042C56.8112 41.318 57.1952 41.708 57.4712 42.212C57.7592 42.704 57.9032 43.274 57.9032 43.922ZM56.4992 43.922C56.4992 43.334 56.3252 42.86 55.9772 42.5C55.6292 42.128 55.1732 41.942 54.6092 41.942C54.0452 41.942 53.5892 42.128 53.2412 42.5C52.8932 42.86 52.7192 43.334 52.7192 43.922C52.7192 44.498 52.8932 44.972 53.2412 45.344C53.5892 45.704 54.0452 45.884 54.6092 45.884C55.1732 45.884 55.6292 45.704 55.9772 45.344C56.3252 44.972 56.4992 44.498 56.4992 43.922Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>

                    <div className="accordion-css__top-tag">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                      </svg>

                      <span>Advanced Dewaxing Technology</span>
                    </div>
                  </div>

                  <div className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <div className="accordion-css__item-block">
                          <span>Wax content, untreated</span>
                          <span>After dewaxing</span>
                        </div>

                        <div className="accordion-css__item-block">
                          <strong>High</strong>
                          <strong>Low</strong>
                        </div>

                        <div className="accordion-css__item-bottom-loader">
                          <div className="accordion-css__item-bottom-loader-bar">
                            <div className="accordion-css__item-bottom-loader-circle">
                              <svg
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  data-figma-bg-blur-radius="40"
                                  cx="16.2966"
                                  cy="16.7039"
                                  r="16.2829"
                                  fill="white"
                                  fillOpacity="0.79"
                                ></circle>
                                <defs>
                                  <clipPath id="bgblur_0_2397_4772_clip_path" transform="translate(39.9863 39.579)">
                                    <circle cx="16.2966" cy="16.7039" r="16.2829"></circle>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-css__item-info">
                          <div className="accordion-css__item-bar"></div>

                          <div className="accordion-css__item-grid">
                            <div className="accordion-css__item-grid-group">
                              <span>Step 01</span>
                              <strong>Cryo Filtration</strong>
                            </div>

                            <div className="accordion-css__item-grid-group">
                              <span>Step 02</span>
                              <strong>Multi-Stage Purification</strong>
                            </div>

                            <div className="accordion-css__item-grid-group">
                              <span>Step 03</span>
                              <strong>Low-Wax, Clear Oil</strong>
                            </div>
                          </div>

                          <div className="accordion-css__item-images">
                            <img src="/assets/img/a006-10d77336be.avif" alt="Actipro refining process" loading="lazy" />
                            <img src="/assets/img/a007-eead608b1c.avif" alt="Actipro refining process" loading="lazy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-css__main-wrappper" data-parent-status="not-active">
              <div className="accordion-css__blur-wrappper">
                <svg width="100%" viewBox="0 0 607 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="303.5" cy="55" rx="303.5" ry="55" fill="#DB5E2C" fillOpacity="0.45"></ellipse>
                </svg>
              </div>

              <div className="accordion-css__inner">
                <div data-accordion-status="not-active" className="accordion-css__item">
                  <div className="accordion-css__item-blur">
                    <img src="/assets/img/a005-f4fef06d2e.avif" alt="decorative gradient" loading="lazy" />
                  </div>

                  <div className="accordion-css__item-top-spacer">
                    <div className="accordion-css__item-top-spacer-wrap">
                      <div className="accordion-css__item-top-spacer-content"></div>
                    </div>
                  </div>

                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <div className="accordion-css__top-flex">
                      <svg width="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2397_4502" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                          <path
                            d="M24.625 1.25H3.375C2.81141 1.25 2.27091 1.47388 1.8724 1.8724C1.47388 2.27091 1.25 2.81141 1.25 3.375V24.625C1.25 25.1886 1.47388 25.7291 1.8724 26.1276C2.27091 26.5261 2.81141 26.75 3.375 26.75H24.625C25.1886 26.75 25.7291 26.5261 26.1276 26.1276C26.5261 25.7291 26.75 25.1886 26.75 24.625V3.375C26.75 2.81141 26.5261 2.27091 26.1276 1.8724C25.7291 1.47388 25.1886 1.25 24.625 1.25Z"
                            fill="#8D8D8D"
                            stroke="#8D8D8D"
                            strokeWidth="2"
                          ></path>
                          <path
                            d="M16.3375 5.5C15.0462 5.5 14 6.51646 14 7.7695C14 10.0397 16.7625 12.1031 18.25 12.5833C19.7375 12.1031 22.5 10.0404 22.5 7.7695C22.5 6.51646 21.4538 5.5 20.1625 5.5C19.7902 5.49846 19.4228 5.58508 19.0904 5.75276C18.758 5.92044 18.47 6.16442 18.25 6.46475C18.03 6.16442 17.742 5.92044 17.4096 5.75276C17.0772 5.58508 16.7098 5.49846 16.3375 5.5Z"
                            fill="black"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_2397_4502)">
                          <path d="M-3 -3H31V31H-3V-3Z" fill="currentColor"></path>
                        </g>
                      </svg>

                      <span>Refined Corn Oil</span>
                    </div>

                    <div className="accordion-css__top-loader">
                      <svg width="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.3" cx="40" cy="40" r="37.5" stroke="currentColor" strokeWidth="5"></circle>
                        <path
                          d="M76.9699 43.0303C78.3653 20.2396 60.1834 2.56522 38.7881 3.03033"
                          stroke="currentColor"
                          strokeWidth="5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M30.612 46.982L21.828 47V45.65L26.022 42.032C26.55 41.588 26.988 41.186 27.336 40.826C27.684 40.466 27.96 40.136 28.164 39.836C28.368 39.524 28.512 39.218 28.596 38.918C28.68 38.618 28.722 38.294 28.722 37.946C28.722 37.13 28.5 36.494 28.056 36.038C27.624 35.57 27.012 35.336 26.22 35.336C25.416 35.336 24.768 35.612 24.276 36.164C23.796 36.704 23.55 37.436 23.538 38.36H21.774C21.798 37.436 21.996 36.626 22.368 35.93C22.74 35.234 23.256 34.7 23.916 34.328C24.588 33.944 25.362 33.752 26.238 33.752C27.114 33.752 27.87 33.92 28.506 34.256C29.142 34.592 29.634 35.066 29.982 35.678C30.342 36.278 30.522 36.998 30.522 37.838C30.522 38.294 30.462 38.732 30.342 39.152C30.222 39.56 30.03 39.968 29.766 40.376C29.514 40.772 29.184 41.186 28.776 41.618C28.368 42.038 27.876 42.5 27.3 43.004L23.898 45.956L23.304 45.344H30.612V46.982ZM36.4865 47.216C35.5985 47.216 34.8245 47.042 34.1645 46.694C33.5165 46.334 33.0065 45.836 32.6345 45.2C32.2745 44.552 32.0945 43.796 32.0945 42.932H33.8405C33.8405 43.772 34.0805 44.432 34.5605 44.912C35.0405 45.392 35.6945 45.632 36.5225 45.632C37.1105 45.632 37.6205 45.512 38.0525 45.272C38.4845 45.02 38.8205 44.678 39.0605 44.246C39.3005 43.802 39.4205 43.286 39.4205 42.698C39.4205 42.134 39.3065 41.636 39.0785 41.204C38.8505 40.76 38.5205 40.412 38.0885 40.16C37.6685 39.908 37.1525 39.782 36.5405 39.782C36.0005 39.782 35.4905 39.902 35.0105 40.142C34.5305 40.37 34.1405 40.67 33.8405 41.042L32.3465 40.664L33.9305 33.986H40.4465V35.606H34.5785L35.3885 34.886L34.1825 39.728L33.5885 39.854C33.9245 39.338 34.3805 38.948 34.9565 38.684C35.5325 38.408 36.1685 38.27 36.8645 38.27C37.7525 38.27 38.5205 38.462 39.1685 38.846C39.8165 39.218 40.3205 39.734 40.6805 40.394C41.0405 41.054 41.2205 41.798 41.2205 42.626C41.2205 43.526 41.0165 44.324 40.6085 45.02C40.2125 45.704 39.6605 46.244 38.9525 46.64C38.2565 47.024 37.4345 47.216 36.4865 47.216ZM49.1912 37.064C49.1912 37.7 49.0472 38.27 48.7592 38.774C48.4832 39.278 48.0992 39.674 47.6072 39.962C47.1152 40.238 46.5452 40.376 45.8972 40.376C45.2612 40.376 44.6972 40.238 44.2052 39.962C43.7132 39.674 43.3232 39.278 43.0352 38.774C42.7592 38.27 42.6212 37.7 42.6212 37.064C42.6212 36.416 42.7592 35.84 43.0352 35.336C43.3232 34.832 43.7132 34.442 44.2052 34.166C44.6972 33.878 45.2612 33.734 45.8972 33.734C46.5452 33.734 47.1152 33.878 47.6072 34.166C48.0992 34.442 48.4832 34.832 48.7592 35.336C49.0472 35.84 49.1912 36.416 49.1912 37.064ZM47.8052 37.064C47.8052 36.476 47.6312 36.002 47.2832 35.642C46.9352 35.27 46.4732 35.084 45.8972 35.084C45.3452 35.084 44.8892 35.27 44.5292 35.642C44.1812 36.002 44.0072 36.476 44.0072 37.064C44.0072 37.64 44.1812 38.114 44.5292 38.486C44.8892 38.846 45.3452 39.026 45.8972 39.026C46.4612 39.026 46.9172 38.846 47.2652 38.486C47.6252 38.114 47.8052 37.64 47.8052 37.064ZM56.0492 34.004L46.1672 47H44.4392L54.3212 34.004H56.0492ZM57.9032 43.922C57.9032 44.558 57.7592 45.128 57.4712 45.632C57.1952 46.136 56.8112 46.532 56.3192 46.82C55.8272 47.096 55.2572 47.234 54.6092 47.234C53.9732 47.234 53.4092 47.096 52.9172 46.82C52.4252 46.532 52.0352 46.136 51.7472 45.632C51.4592 45.128 51.3152 44.558 51.3152 43.922C51.3152 43.274 51.4592 42.704 51.7472 42.212C52.0352 41.708 52.4252 41.318 52.9172 41.042C53.4092 40.754 53.9732 40.61 54.6092 40.61C55.2572 40.61 55.8272 40.754 56.3192 41.042C56.8112 41.318 57.1952 41.708 57.4712 42.212C57.7592 42.704 57.9032 43.274 57.9032 43.922ZM56.4992 43.922C56.4992 43.334 56.3252 42.86 55.9772 42.5C55.6292 42.128 55.1732 41.942 54.6092 41.942C54.0452 41.942 53.5892 42.128 53.2412 42.5C52.8932 42.86 52.7192 43.334 52.7192 43.922C52.7192 44.498 52.8932 44.972 53.2412 45.344C53.5892 45.704 54.0452 45.884 54.6092 45.884C55.1732 45.884 55.6292 45.704 55.9772 45.344C56.3252 44.972 56.4992 44.498 56.4992 43.922Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>

                    <div className="accordion-css__top-tag">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                      </svg>

                      <span>High Absorbent Refining</span>
                    </div>
                  </div>

                  <div className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <div className="accordion-css__item-block">
                          <span>Oil absorbed by food</span>
                          <span>With Actipro</span>
                        </div>

                        <div className="accordion-css__item-block">
                          <strong>More</strong>
                          <strong>Less</strong>
                        </div>

                        <div className="accordion-css__item-bottom-loader">
                          <div className="accordion-css__item-bottom-loader-bar">
                            <div className="accordion-css__item-bottom-loader-circle">
                              <svg
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  data-figma-bg-blur-radius="40"
                                  cx="16.2966"
                                  cy="16.7039"
                                  r="16.2829"
                                  fill="white"
                                  fillOpacity="0.79"
                                ></circle>
                                <defs>
                                  <clipPath id="bgblur_0_2397_4772_clip_path" transform="translate(39.9863 39.579)">
                                    <circle cx="16.2966" cy="16.7039" r="16.2829"></circle>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-css__item-info">
                          <div className="accordion-css__item-bar"></div>

                          <div className="accordion-css__item-grid">
                            <div className="accordion-css__item-grid-group">
                              <span>Step 01</span>
                              <strong>Advanced Refining</strong>
                            </div>

                            <div className="accordion-css__item-grid-group">
                              <span>Step 02</span>
                              <strong>Less Oil Absorption</strong>
                            </div>

                            <div className="accordion-css__item-grid-group">
                              <span>Step 03</span>
                              <strong>Nutrient Retention</strong>
                            </div>
                          </div>

                          <div className="accordion-css__item-images">
                            <img src="/assets/img/a008-4640c2e6b8.avif" alt="Actipro refining process" loading="lazy" />
                            <img src="/assets/img/a009-d1db0b52c6.avif" alt="Actipro refining process" loading="lazy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-css__main-wrappper" data-parent-status="active">
              <div className="accordion-css__blur-wrappper">
                <svg width="100%" viewBox="0 0 377 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_3260_3230" maskUnits="userSpaceOnUse" x="0" y="0" width="377" height="71">
                    <rect
                      x="377"
                      y="70.101"
                      width="377"
                      height="70.1009"
                      transform="rotate(180 377 70.101)"
                      fill="#D9D9D9"
                    ></rect>
                  </mask>
                  <g mask="url(#mask0_3260_3230)">
                    <g filter="url(#filter0_f_3260_3230)">
                      <ellipse
                        cx="188.167"
                        cy="65.3866"
                        rx="103.425"
                        ry="19.0625"
                        transform="rotate(180 188.167 65.3866)"
                        fill="#F4783E"
                        fillOpacity="0.72"
                      ></ellipse>
                    </g>
                  </g>
                  <path
                    d="M185 42C88.9025 42 11 54.536 11 70H359C359 54.536 281.098 42 185 42Z"
                    fill="#DB5E2C"
                    fillOpacity="0.45"
                  ></path>
                  <defs>
                    <filter
                      id="filter0_f_3260_3230"
                      x="-35.4583"
                      y="-73.8759"
                      width="447.25"
                      height="278.525"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="60.1" result="effect1_foregroundBlur_3260_3230"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="accordion-css__inner">
                <div data-accordion-status="active" className="accordion-css__item">
                  <div className="accordion-css__item-blur">
                    <img src="/assets/img/a005-f4fef06d2e.avif" alt="decorative gradient" loading="lazy" />
                  </div>

                  <div className="accordion-css__item-top-spacer">
                    <div className="accordion-css__item-top-spacer-wrap">
                      <div className="accordion-css__item-top-spacer-content"></div>
                    </div>
                  </div>

                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <div className="accordion-css__top-flex">
                      <svg width="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2397_4727" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                          <path
                            d="M28.0418 1.83337H3.9585C3.39491 1.83337 2.85441 2.05726 2.45589 2.45577C2.05738 2.85429 1.8335 3.39479 1.8335 3.95837V28.0417C1.8335 28.6053 2.05738 29.1458 2.45589 29.5443C2.85441 29.9428 3.39491 30.1667 3.9585 30.1667H28.0418C28.6054 30.1667 29.1459 29.9428 29.5444 29.5443C29.9429 29.1458 30.1668 28.6053 30.1668 28.0417V3.95837C30.1668 3.39479 29.9429 2.85429 29.5444 2.45577C29.1459 2.05726 28.6054 1.83337 28.0418 1.83337Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.5 12.4966C9.85497 9.66325 12.6883 8.24658 16 8.24658C19.3112 8.24658 22.1446 9.66325 24.5 12.4966"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M16 20.9584C16.5636 20.9584 17.1041 20.7345 17.5026 20.336C17.9011 19.9375 18.125 19.397 18.125 18.8334C18.125 18.2698 17.9011 17.7293 17.5026 17.3308C17.1041 16.9323 16.5636 16.7084 16 16.7084C15.4364 16.7084 14.8959 16.9323 14.4974 17.3308C14.0989 17.7293 13.875 18.2698 13.875 18.8334C13.875 19.397 14.0989 19.9375 14.4974 20.336C14.8959 20.7345 15.4364 20.9584 16 20.9584Z"
                            fill="black"
                          ></path>
                          <path
                            d="M12.4585 13.875L16.0058 18.8333"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_2397_4727)">
                          <path d="M-1 -1H33V33H-1V-1Z" fill="#8E8E8E"></path>
                        </g>
                      </svg>

                      <span>Refined Rice Bran Oil</span>
                    </div>

                    <div className="accordion-css__top-loader">
                      <svg width="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.3" cx="40" cy="40" r="37.5" stroke="currentColor" strokeWidth="5"></circle>
                        <path
                          d="M76.9699 43.0303C78.3653 20.2396 60.1834 2.56521 38.7881 3.03033"
                          stroke="currentColor"
                          strokeWidth="5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M21.144 33.986H30.234V35.606H21.144V33.986ZM28.866 34.67L30.234 35.606L25.302 47H23.466L28.866 34.67ZM31.0218 43.382C31.0218 42.494 31.2918 41.732 31.8318 41.096C32.3718 40.448 33.0918 40.04 33.9918 39.872L34.0098 40.25C33.2058 40.034 32.5818 39.662 32.1378 39.134C31.7058 38.594 31.4898 37.94 31.4898 37.172C31.4898 36.488 31.6698 35.894 32.0298 35.39C32.3898 34.874 32.8938 34.472 33.5418 34.184C34.2018 33.896 34.9638 33.752 35.8278 33.752C36.6798 33.752 37.4238 33.896 38.0598 34.184C38.7078 34.472 39.2118 34.874 39.5718 35.39C39.9318 35.906 40.1118 36.506 40.1118 37.19C40.1118 37.958 39.8898 38.612 39.4458 39.152C39.0138 39.68 38.3958 40.04 37.5918 40.232L37.5738 39.89C38.1738 39.974 38.7018 40.184 39.1578 40.52C39.6138 40.844 39.9678 41.252 40.2198 41.744C40.4718 42.236 40.5978 42.788 40.5978 43.4C40.5978 44.156 40.3938 44.822 39.9858 45.398C39.5898 45.974 39.0318 46.424 38.3118 46.748C37.6038 47.06 36.7698 47.216 35.8098 47.216C34.8498 47.216 34.0098 47.06 33.2898 46.748C32.5698 46.424 32.0118 45.974 31.6158 45.398C31.2198 44.822 31.0218 44.15 31.0218 43.382ZM32.7498 43.256C32.7498 43.736 32.8758 44.156 33.1278 44.516C33.3798 44.876 33.7338 45.158 34.1898 45.362C34.6578 45.554 35.1978 45.65 35.8098 45.65C36.4218 45.65 36.9558 45.554 37.4118 45.362C37.8678 45.158 38.2218 44.876 38.4738 44.516C38.7258 44.156 38.8518 43.736 38.8518 43.256C38.8518 42.536 38.5758 41.966 38.0238 41.546C37.4718 41.114 36.7278 40.898 35.7918 40.898C34.8678 40.898 34.1298 41.114 33.5778 41.546C33.0258 41.966 32.7498 42.536 32.7498 43.256ZM33.1098 37.28C33.1098 37.916 33.3498 38.426 33.8298 38.81C34.3218 39.194 34.9758 39.386 35.7918 39.386C36.6078 39.386 37.2558 39.2 37.7358 38.828C38.2158 38.444 38.4558 37.94 38.4558 37.316C38.4558 36.692 38.2158 36.2 37.7358 35.84C37.2558 35.468 36.6078 35.282 35.7918 35.282C34.9758 35.282 34.3218 35.468 33.8298 35.84C33.3498 36.2 33.1098 36.68 33.1098 37.28ZM48.7518 37.064C48.7518 37.7 48.6078 38.27 48.3198 38.774C48.0438 39.278 47.6598 39.674 47.1678 39.962C46.6758 40.238 46.1058 40.376 45.4578 40.376C44.8218 40.376 44.2578 40.238 43.7658 39.962C43.2738 39.674 42.8838 39.278 42.5958 38.774C42.3198 38.27 42.1818 37.7 42.1818 37.064C42.1818 36.416 42.3198 35.84 42.5958 35.336C42.8838 34.832 43.2738 34.442 43.7658 34.166C44.2578 33.878 44.8218 33.734 45.4578 33.734C46.1058 33.734 46.6758 33.878 47.1678 34.166C47.6598 34.442 48.0438 34.832 48.3198 35.336C48.6078 35.84 48.7518 36.416 48.7518 37.064ZM47.3658 37.064C47.3658 36.476 47.1918 36.002 46.8438 35.642C46.4958 35.27 46.0338 35.084 45.4578 35.084C44.9058 35.084 44.4498 35.27 44.0898 35.642C43.7418 36.002 43.5678 36.476 43.5678 37.064C43.5678 37.64 43.7418 38.114 44.0898 38.486C44.4498 38.846 44.9058 39.026 45.4578 39.026C46.0218 39.026 46.4778 38.846 46.8258 38.486C47.1858 38.114 47.3658 37.64 47.3658 37.064ZM55.6098 34.004L45.7278 47H43.9998L53.8818 34.004H55.6098ZM57.4638 43.922C57.4638 44.558 57.3198 45.128 57.0318 45.632C56.7558 46.136 56.3718 46.532 55.8798 46.82C55.3878 47.096 54.8178 47.234 54.1698 47.234C53.5338 47.234 52.9698 47.096 52.4778 46.82C51.9858 46.532 51.5958 46.136 51.3078 45.632C51.0198 45.128 50.8758 44.558 50.8758 43.922C50.8758 43.274 51.0198 42.704 51.3078 42.212C51.5958 41.708 51.9858 41.318 52.4778 41.042C52.9698 40.754 53.5338 40.61 54.1698 40.61C54.8178 40.61 55.3878 40.754 55.8798 41.042C56.3718 41.318 56.7558 41.708 57.0318 42.212C57.3198 42.704 57.4638 43.274 57.4638 43.922ZM56.0598 43.922C56.0598 43.334 55.8858 42.86 55.5378 42.5C55.1898 42.128 54.7338 41.942 54.1698 41.942C53.6058 41.942 53.1498 42.128 52.8018 42.5C52.4538 42.86 52.2798 43.334 52.2798 43.922C52.2798 44.498 52.4538 44.972 52.8018 45.344C53.1498 45.704 53.6058 45.884 54.1698 45.884C54.7338 45.884 55.1898 45.704 55.5378 45.344C55.8858 44.972 56.0598 44.498 56.0598 43.922Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>

                    <div className="accordion-css__top-tag">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                      </svg>

                      <span>Smart Fry Technology</span>
                    </div>
                  </div>

                  <div className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <div className="accordion-css__item-block">
                          <span>Heat stability, typical</span>
                          <span>With Smart Fry</span>
                        </div>

                        <div className="accordion-css__item-block">
                          <strong>Low</strong>
                          <strong>High</strong>
                        </div>

                        <div className="accordion-css__item-bottom-loader">
                          <div className="accordion-css__item-bottom-loader-bar">
                            <div className="accordion-css__item-bottom-loader-circle">
                              <svg
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  data-figma-bg-blur-radius="40"
                                  cx="16.2966"
                                  cy="16.7039"
                                  r="16.2829"
                                  fill="white"
                                  fillOpacity="0.79"
                                ></circle>
                                <defs>
                                  <clipPath id="bgblur_0_2397_4772_clip_path" transform="translate(39.9863 39.579)">
                                    <circle cx="16.2966" cy="16.7039" r="16.2829"></circle>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-css__item-info">
                          <div className="accordion-css__item-bar"></div>

                          <div className="accordion-css__item-grid">
                            <div className="accordion-css__item-grid-group">
                              <span>Step 01</span>
                              <strong>Cryo Filtration</strong>
                            </div>

                            <div className="accordion-css__item-grid-group">
                              <span>Step 02</span>
                              <strong>Controlled Refinement</strong>
                            </div>

                            <div className="accordion-css__item-grid-group">
                              <span>Step 03</span>
                              <strong>Faster Heat Transfer </strong>
                            </div>
                          </div>

                          <div className="accordion-css__item-images">
                            <img src="/assets/img/a010-9568d1e8db.avif" alt="Actipro refining process" loading="lazy" />
                            <img src="/assets/img/a011-a34cab6b1c.avif" alt="Actipro refining process" loading="lazy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="goals-swiper-container"
          data-swiper-class="goals"
          data-swiper-parent-class="goals"
          data-swiper-slides-per-view="1"
          data-swiper-space-between="0"
          data-swiper-slides-per-view-mobile="auto"
          data-swiper-centered-mobile="true"
          data-swiper-space-between-mobile="20"
          data-swiper-enabled="false"
          data-swiper-enabled-mobile="true"
        >
          <div className="goals-swiper-wrapper">
            <div className="goals-swiper-slide">
              <div className="goals-swiper-slide__inner">
                <div className="goals-swiper-slide__blur">
                  <img src="/assets/img/a005-f4fef06d2e.avif" alt="decorative gradient" loading="lazy" />
                </div>

                <div className="goals-swiper-slide__top">
                  <div className="goals-swiper-slide__top-flex">
                    <svg width="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.3564 21.5C13.2627 18.2188 16.4314 15.875 20.0814 16.2625C23.5564 16.6313 26.3189 19.5625 26.4939 23.05C26.5377 23.9688 26.4127 24.85 26.1439 25.6688C25.9814 26.1688 25.4939 26.5 24.9627 26.5H6.34895C3.19395 26.5 0.827697 23.6131 1.44645 20.5194L5.2502 1.5H12.7502L15.2502 5.875L9.89395 9.70625L8.3752 7.75"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M12.3564 21.5C13.2627 18.2188 16.4314 15.875 20.0814 16.2625C23.5564 16.6313 26.3189 19.5625 26.4939 23.05C26.5377 23.9688 26.4127 24.85 26.1439 25.6688C25.9814 26.1688 25.4939 26.5 24.9627 26.5H6.34895C3.19395 26.5 0.827697 23.6131 1.44645 20.5194L5.2502 1.5H12.7502L15.2502 5.875L9.89395 9.70625L8.3752 7.75M9.9002 9.70625L12.7502 20.25"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeMiterlimit="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>

                    <span>Refined Sunflower Oil</span>
                  </div>

                  <div className="goals-swiper-slide__top-loader">
                    <svg width="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.3" cx="40" cy="40" r="37.5" stroke="currentColor" strokeWidth="5"></circle>
                      <path
                        d="M76.9699 43.0303C78.3653 20.2396 60.1834 2.56522 38.7881 3.03033"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M30.612 46.982L21.828 47V45.65L26.022 42.032C26.55 41.588 26.988 41.186 27.336 40.826C27.684 40.466 27.96 40.136 28.164 39.836C28.368 39.524 28.512 39.218 28.596 38.918C28.68 38.618 28.722 38.294 28.722 37.946C28.722 37.13 28.5 36.494 28.056 36.038C27.624 35.57 27.012 35.336 26.22 35.336C25.416 35.336 24.768 35.612 24.276 36.164C23.796 36.704 23.55 37.436 23.538 38.36H21.774C21.798 37.436 21.996 36.626 22.368 35.93C22.74 35.234 23.256 34.7 23.916 34.328C24.588 33.944 25.362 33.752 26.238 33.752C27.114 33.752 27.87 33.92 28.506 34.256C29.142 34.592 29.634 35.066 29.982 35.678C30.342 36.278 30.522 36.998 30.522 37.838C30.522 38.294 30.462 38.732 30.342 39.152C30.222 39.56 30.03 39.968 29.766 40.376C29.514 40.772 29.184 41.186 28.776 41.618C28.368 42.038 27.876 42.5 27.3 43.004L23.898 45.956L23.304 45.344H30.612V46.982ZM36.4865 47.216C35.5985 47.216 34.8245 47.042 34.1645 46.694C33.5165 46.334 33.0065 45.836 32.6345 45.2C32.2745 44.552 32.0945 43.796 32.0945 42.932H33.8405C33.8405 43.772 34.0805 44.432 34.5605 44.912C35.0405 45.392 35.6945 45.632 36.5225 45.632C37.1105 45.632 37.6205 45.512 38.0525 45.272C38.4845 45.02 38.8205 44.678 39.0605 44.246C39.3005 43.802 39.4205 43.286 39.4205 42.698C39.4205 42.134 39.3065 41.636 39.0785 41.204C38.8505 40.76 38.5205 40.412 38.0885 40.16C37.6685 39.908 37.1525 39.782 36.5405 39.782C36.0005 39.782 35.4905 39.902 35.0105 40.142C34.5305 40.37 34.1405 40.67 33.8405 41.042L32.3465 40.664L33.9305 33.986H40.4465V35.606H34.5785L35.3885 34.886L34.1825 39.728L33.5885 39.854C33.9245 39.338 34.3805 38.948 34.9565 38.684C35.5325 38.408 36.1685 38.27 36.8645 38.27C37.7525 38.27 38.5205 38.462 39.1685 38.846C39.8165 39.218 40.3205 39.734 40.6805 40.394C41.0405 41.054 41.2205 41.798 41.2205 42.626C41.2205 43.526 41.0165 44.324 40.6085 45.02C40.2125 45.704 39.6605 46.244 38.9525 46.64C38.2565 47.024 37.4345 47.216 36.4865 47.216ZM49.1912 37.064C49.1912 37.7 49.0472 38.27 48.7592 38.774C48.4832 39.278 48.0992 39.674 47.6072 39.962C47.1152 40.238 46.5452 40.376 45.8972 40.376C45.2612 40.376 44.6972 40.238 44.2052 39.962C43.7132 39.674 43.3232 39.278 43.0352 38.774C42.7592 38.27 42.6212 37.7 42.6212 37.064C42.6212 36.416 42.7592 35.84 43.0352 35.336C43.3232 34.832 43.7132 34.442 44.2052 34.166C44.6972 33.878 45.2612 33.734 45.8972 33.734C46.5452 33.734 47.1152 33.878 47.6072 34.166C48.0992 34.442 48.4832 34.832 48.7592 35.336C49.0472 35.84 49.1912 36.416 49.1912 37.064ZM47.8052 37.064C47.8052 36.476 47.6312 36.002 47.2832 35.642C46.9352 35.27 46.4732 35.084 45.8972 35.084C45.3452 35.084 44.8892 35.27 44.5292 35.642C44.1812 36.002 44.0072 36.476 44.0072 37.064C44.0072 37.64 44.1812 38.114 44.5292 38.486C44.8892 38.846 45.3452 39.026 45.8972 39.026C46.4612 39.026 46.9172 38.846 47.2652 38.486C47.6252 38.114 47.8052 37.64 47.8052 37.064ZM56.0492 34.004L46.1672 47H44.4392L54.3212 34.004H56.0492ZM57.9032 43.922C57.9032 44.558 57.7592 45.128 57.4712 45.632C57.1952 46.136 56.8112 46.532 56.3192 46.82C55.8272 47.096 55.2572 47.234 54.6092 47.234C53.9732 47.234 53.4092 47.096 52.9172 46.82C52.4252 46.532 52.0352 46.136 51.7472 45.632C51.4592 45.128 51.3152 44.558 51.3152 43.922C51.3152 43.274 51.4592 42.704 51.7472 42.212C52.0352 41.708 52.4252 41.318 52.9172 41.042C53.4092 40.754 53.9732 40.61 54.6092 40.61C55.2572 40.61 55.8272 40.754 56.3192 41.042C56.8112 41.318 57.1952 41.708 57.4712 42.212C57.7592 42.704 57.9032 43.274 57.9032 43.922ZM56.4992 43.922C56.4992 43.334 56.3252 42.86 55.9772 42.5C55.6292 42.128 55.1732 41.942 54.6092 41.942C54.0452 41.942 53.5892 42.128 53.2412 42.5C52.8932 42.86 52.7192 43.334 52.7192 43.922C52.7192 44.498 52.8932 44.972 53.2412 45.344C53.5892 45.704 54.0452 45.884 54.6092 45.884C55.1732 45.884 55.6292 45.704 55.9772 45.344C56.3252 44.972 56.4992 44.498 56.4992 43.922Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>

                  <div className="goals-swiper-slide__top-tag">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4 4" fill="none">
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg>

                    <span>Advanced Dewaxing Technology</span>
                  </div>
                </div>

                <div className="goals-swiper-slide__bottom">
                  <div className="goals-swiper-slide__block">
                    <span>Wax content, untreated</span>
                    <span>After dewaxing</span>
                  </div>

                  <div className="goals-swiper-slide__block">
                    <strong>High</strong>
                    <strong>Low</strong>
                  </div>

                  <div className="goals-swiper-slide__bottom-loader">
                    <div className="goals-swiper-slide__bottom-loader-bar">
                      <div className="goals-swiper-slide__bottom-loader-circle">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle
                            data-figma-bg-blur-radius="40"
                            cx="16.2966"
                            cy="16.7039"
                            r="16.2829"
                            fill="white"
                            fillOpacity="0.79"
                          ></circle>
                          <defs>
                            <clipPath id="bgblur_0_2397_4772_clip_path" transform="translate(39.9863 39.579)">
                              <circle cx="16.2966" cy="16.7039" r="16.2829"></circle>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="goals-swiper-slide__info">
                    <div className="goals-swiper-slide__bar"></div>

                    <div className="goals-swiper-slide__grid">
                      <div className="goals-swiper-slide__grid-group">
                        <span>Step 01</span>
                        <strong>Cryo Filtration</strong>
                      </div>

                      <div className="goals-swiper-slide__grid-group">
                        <span>Step 02</span>
                        <strong>Multi-Stage Purification</strong>
                      </div>

                      <div className="goals-swiper-slide__grid-group">
                        <span>Step 03</span>
                        <strong>Low-Wax, Clear Oil</strong>
                      </div>
                    </div>

                    <div className="goals-swiper-slide__images">
                      <img src="/assets/img/a006-10d77336be.avif" alt="Actipro refining process" loading="lazy" />
                      <img src="/assets/img/a007-eead608b1c.avif" alt="Actipro refining process" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="goals-swiper-slide">
              <div className="goals-swiper-slide__inner">
                <div className="goals-swiper-slide__blur">
                  <img src="/assets/img/a005-f4fef06d2e.avif" alt="decorative gradient" loading="lazy" />
                </div>

                <div className="goals-swiper-slide__top">
                  <div className="goals-swiper-slide__top-flex">
                    <svg width="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_3263_3289" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                        <path
                          d="M24.375 1H3.125C2.56141 1 2.02091 1.22388 1.6224 1.6224C1.22388 2.02091 1 2.56141 1 3.125V24.375C1 24.9386 1.22388 25.4791 1.6224 25.8776C2.02091 26.2761 2.56141 26.5 3.125 26.5H24.375C24.9386 26.5 25.4791 26.2761 25.8776 25.8776C26.2761 25.4791 26.5 24.9386 26.5 24.375V3.125C26.5 2.56141 26.2761 2.02091 25.8776 1.6224C25.4791 1.22388 24.9386 1 24.375 1Z"
                          fill="white"
                          stroke="white"
                          strokeWidth="2"
                        ></path>
                        <path
                          d="M16.0875 5.24999C14.7962 5.24999 13.75 6.26645 13.75 7.51949C13.75 9.7897 16.5125 11.8531 18 12.3333C19.4875 11.8531 22.25 9.79041 22.25 7.51949C22.25 6.26645 21.2038 5.24999 19.9125 5.24999C19.5402 5.24845 19.1728 5.33507 18.8404 5.50275C18.508 5.67043 18.22 5.91441 18 6.21474C17.78 5.91441 17.492 5.67043 17.1596 5.50275C16.8272 5.33507 16.4598 5.24845 16.0875 5.24999Z"
                          fill="black"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_3263_3289)">
                        <path d="M-3.25 -3.25H30.75V30.75H-3.25V-3.25Z" fill="#F4783E"></path>
                      </g>
                    </svg>

                    <span>Refined Corn Oil</span>
                  </div>

                  <div className="goals-swiper-slide__top-loader">
                    <svg width="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.3" cx="40" cy="40" r="37.5" stroke="currentColor" strokeWidth="5"></circle>
                      <path
                        d="M76.9699 43.0303C78.3653 20.2396 60.1834 2.56522 38.7881 3.03033"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M30.612 46.982L21.828 47V45.65L26.022 42.032C26.55 41.588 26.988 41.186 27.336 40.826C27.684 40.466 27.96 40.136 28.164 39.836C28.368 39.524 28.512 39.218 28.596 38.918C28.68 38.618 28.722 38.294 28.722 37.946C28.722 37.13 28.5 36.494 28.056 36.038C27.624 35.57 27.012 35.336 26.22 35.336C25.416 35.336 24.768 35.612 24.276 36.164C23.796 36.704 23.55 37.436 23.538 38.36H21.774C21.798 37.436 21.996 36.626 22.368 35.93C22.74 35.234 23.256 34.7 23.916 34.328C24.588 33.944 25.362 33.752 26.238 33.752C27.114 33.752 27.87 33.92 28.506 34.256C29.142 34.592 29.634 35.066 29.982 35.678C30.342 36.278 30.522 36.998 30.522 37.838C30.522 38.294 30.462 38.732 30.342 39.152C30.222 39.56 30.03 39.968 29.766 40.376C29.514 40.772 29.184 41.186 28.776 41.618C28.368 42.038 27.876 42.5 27.3 43.004L23.898 45.956L23.304 45.344H30.612V46.982ZM36.4865 47.216C35.5985 47.216 34.8245 47.042 34.1645 46.694C33.5165 46.334 33.0065 45.836 32.6345 45.2C32.2745 44.552 32.0945 43.796 32.0945 42.932H33.8405C33.8405 43.772 34.0805 44.432 34.5605 44.912C35.0405 45.392 35.6945 45.632 36.5225 45.632C37.1105 45.632 37.6205 45.512 38.0525 45.272C38.4845 45.02 38.8205 44.678 39.0605 44.246C39.3005 43.802 39.4205 43.286 39.4205 42.698C39.4205 42.134 39.3065 41.636 39.0785 41.204C38.8505 40.76 38.5205 40.412 38.0885 40.16C37.6685 39.908 37.1525 39.782 36.5405 39.782C36.0005 39.782 35.4905 39.902 35.0105 40.142C34.5305 40.37 34.1405 40.67 33.8405 41.042L32.3465 40.664L33.9305 33.986H40.4465V35.606H34.5785L35.3885 34.886L34.1825 39.728L33.5885 39.854C33.9245 39.338 34.3805 38.948 34.9565 38.684C35.5325 38.408 36.1685 38.27 36.8645 38.27C37.7525 38.27 38.5205 38.462 39.1685 38.846C39.8165 39.218 40.3205 39.734 40.6805 40.394C41.0405 41.054 41.2205 41.798 41.2205 42.626C41.2205 43.526 41.0165 44.324 40.6085 45.02C40.2125 45.704 39.6605 46.244 38.9525 46.64C38.2565 47.024 37.4345 47.216 36.4865 47.216ZM49.1912 37.064C49.1912 37.7 49.0472 38.27 48.7592 38.774C48.4832 39.278 48.0992 39.674 47.6072 39.962C47.1152 40.238 46.5452 40.376 45.8972 40.376C45.2612 40.376 44.6972 40.238 44.2052 39.962C43.7132 39.674 43.3232 39.278 43.0352 38.774C42.7592 38.27 42.6212 37.7 42.6212 37.064C42.6212 36.416 42.7592 35.84 43.0352 35.336C43.3232 34.832 43.7132 34.442 44.2052 34.166C44.6972 33.878 45.2612 33.734 45.8972 33.734C46.5452 33.734 47.1152 33.878 47.6072 34.166C48.0992 34.442 48.4832 34.832 48.7592 35.336C49.0472 35.84 49.1912 36.416 49.1912 37.064ZM47.8052 37.064C47.8052 36.476 47.6312 36.002 47.2832 35.642C46.9352 35.27 46.4732 35.084 45.8972 35.084C45.3452 35.084 44.8892 35.27 44.5292 35.642C44.1812 36.002 44.0072 36.476 44.0072 37.064C44.0072 37.64 44.1812 38.114 44.5292 38.486C44.8892 38.846 45.3452 39.026 45.8972 39.026C46.4612 39.026 46.9172 38.846 47.2652 38.486C47.6252 38.114 47.8052 37.64 47.8052 37.064ZM56.0492 34.004L46.1672 47H44.4392L54.3212 34.004H56.0492ZM57.9032 43.922C57.9032 44.558 57.7592 45.128 57.4712 45.632C57.1952 46.136 56.8112 46.532 56.3192 46.82C55.8272 47.096 55.2572 47.234 54.6092 47.234C53.9732 47.234 53.4092 47.096 52.9172 46.82C52.4252 46.532 52.0352 46.136 51.7472 45.632C51.4592 45.128 51.3152 44.558 51.3152 43.922C51.3152 43.274 51.4592 42.704 51.7472 42.212C52.0352 41.708 52.4252 41.318 52.9172 41.042C53.4092 40.754 53.9732 40.61 54.6092 40.61C55.2572 40.61 55.8272 40.754 56.3192 41.042C56.8112 41.318 57.1952 41.708 57.4712 42.212C57.7592 42.704 57.9032 43.274 57.9032 43.922ZM56.4992 43.922C56.4992 43.334 56.3252 42.86 55.9772 42.5C55.6292 42.128 55.1732 41.942 54.6092 41.942C54.0452 41.942 53.5892 42.128 53.2412 42.5C52.8932 42.86 52.7192 43.334 52.7192 43.922C52.7192 44.498 52.8932 44.972 53.2412 45.344C53.5892 45.704 54.0452 45.884 54.6092 45.884C55.1732 45.884 55.6292 45.704 55.9772 45.344C56.3252 44.972 56.4992 44.498 56.4992 43.922Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>

                  <div className="goals-swiper-slide__top-tag">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4 4" fill="none">
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg>

                    <span>High Absorbent Refining</span>
                  </div>
                </div>

                <div className="goals-swiper-slide__bottom">
                  <div className="goals-swiper-slide__block">
                    <span>Oil absorbed by food</span>
                    <span>With Actipro</span>
                  </div>

                  <div className="goals-swiper-slide__block">
                    <strong>More</strong>
                    <strong>Less</strong>
                  </div>

                  <div className="goals-swiper-slide__bottom-loader">
                    <div className="goals-swiper-slide__bottom-loader-bar">
                      <div className="goals-swiper-slide__bottom-loader-circle">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle
                            data-figma-bg-blur-radius="40"
                            cx="16.2966"
                            cy="16.7039"
                            r="16.2829"
                            fill="white"
                            fillOpacity="0.79"
                          ></circle>
                          <defs>
                            <clipPath id="bgblur_0_2397_4772_clip_path" transform="translate(39.9863 39.579)">
                              <circle cx="16.2966" cy="16.7039" r="16.2829"></circle>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="goals-swiper-slide__info">
                    <div className="goals-swiper-slide__bar"></div>

                    <div className="goals-swiper-slide__grid">
                      <div className="goals-swiper-slide__grid-group">
                        <span>Step 01</span>
                        <strong>Advanced Refining</strong>
                      </div>

                      <div className="goals-swiper-slide__grid-group">
                        <span>Step 02</span>
                        <strong>Less Oil Absorption</strong>
                      </div>

                      <div className="goals-swiper-slide__grid-group">
                        <span>Step 03</span>
                        <strong>Nutrient Retention</strong>
                      </div>
                    </div>

                    <div className="goals-swiper-slide__images">
                      <img src="/assets/img/a008-4640c2e6b8.avif" alt="Actipro refining process" loading="lazy" />
                      <img src="/assets/img/a009-d1db0b52c6.avif" alt="Actipro refining process" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="goals-swiper-slide">
              <div className="goals-swiper-slide__inner">
                <div className="goals-swiper-slide__blur">
                  <img src="/assets/img/a005-f4fef06d2e.avif" alt="decorative gradient" loading="lazy" />
                </div>

                <div className="goals-swiper-slide__top">
                  <div className="goals-swiper-slide__top-flex">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_3263_3296" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="31">
                        <path
                          d="M27.2083 1H3.125C2.56142 1 2.02091 1.22388 1.6224 1.6224C1.22388 2.02091 1 2.56142 1 3.125V27.2083C1 27.7719 1.22388 28.3124 1.6224 28.7109C2.02091 29.1095 2.56142 29.3333 3.125 29.3333H27.2083C27.7719 29.3333 28.3124 29.1095 28.7109 28.7109C29.1095 28.3124 29.3333 27.7719 29.3333 27.2083V3.125C29.3333 2.56142 29.1095 2.02091 28.7109 1.6224C28.3124 1.22388 27.7719 1 27.2083 1Z"
                          fill="white"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M6.6665 11.6632C9.02148 8.82991 11.8548 7.41324 15.1665 7.41324C18.4777 7.41324 21.3111 8.82991 23.6665 11.6632"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M15.1665 20.125C15.7301 20.125 16.2706 19.9011 16.6691 19.5026C17.0676 19.1041 17.2915 18.5636 17.2915 18C17.2915 17.4364 17.0676 16.8959 16.6691 16.4974C16.2706 16.0989 15.7301 15.875 15.1665 15.875C14.6029 15.875 14.0624 16.0989 13.6639 16.4974C13.2654 16.8959 13.0415 17.4364 13.0415 18C13.0415 18.5636 13.2654 19.1041 13.6639 19.5026C14.0624 19.9011 14.6029 20.125 15.1665 20.125Z"
                          fill="black"
                        ></path>
                        <path
                          d="M11.625 13.0417L15.1723 18"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_3263_3296)">
                        <path d="M-1.8335 -1.83334H32.1665V32.1667H-1.8335V-1.83334Z" fill="#F4783E"></path>
                      </g>
                    </svg>

                    <span>Refined Rice Bran Oil</span>
                  </div>

                  <div className="goals-swiper-slide__top-loader">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.3" cx="40" cy="40" r="37.5" stroke="currentColor" strokeWidth="5"></circle>
                      <path
                        d="M76.9699 43.0303C78.3653 20.2396 60.1834 2.56522 38.7881 3.03033"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M21.144 33.986H30.234V35.606H21.144V33.986ZM28.866 34.67L30.234 35.606L25.302 47H23.466L28.866 34.67ZM31.0218 43.382C31.0218 42.494 31.2918 41.732 31.8318 41.096C32.3718 40.448 33.0918 40.04 33.9918 39.872L34.0098 40.25C33.2058 40.034 32.5818 39.662 32.1378 39.134C31.7058 38.594 31.4898 37.94 31.4898 37.172C31.4898 36.488 31.6698 35.894 32.0298 35.39C32.3898 34.874 32.8938 34.472 33.5418 34.184C34.2018 33.896 34.9638 33.752 35.8278 33.752C36.6798 33.752 37.4238 33.896 38.0598 34.184C38.7078 34.472 39.2118 34.874 39.5718 35.39C39.9318 35.906 40.1118 36.506 40.1118 37.19C40.1118 37.958 39.8898 38.612 39.4458 39.152C39.0138 39.68 38.3958 40.04 37.5918 40.232L37.5738 39.89C38.1738 39.974 38.7018 40.184 39.1578 40.52C39.6138 40.844 39.9678 41.252 40.2198 41.744C40.4718 42.236 40.5978 42.788 40.5978 43.4C40.5978 44.156 40.3938 44.822 39.9858 45.398C39.5898 45.974 39.0318 46.424 38.3118 46.748C37.6038 47.06 36.7698 47.216 35.8098 47.216C34.8498 47.216 34.0098 47.06 33.2898 46.748C32.5698 46.424 32.0118 45.974 31.6158 45.398C31.2198 44.822 31.0218 44.15 31.0218 43.382ZM32.7498 43.256C32.7498 43.736 32.8758 44.156 33.1278 44.516C33.3798 44.876 33.7338 45.158 34.1898 45.362C34.6578 45.554 35.1978 45.65 35.8098 45.65C36.4218 45.65 36.9558 45.554 37.4118 45.362C37.8678 45.158 38.2218 44.876 38.4738 44.516C38.7258 44.156 38.8518 43.736 38.8518 43.256C38.8518 42.536 38.5758 41.966 38.0238 41.546C37.4718 41.114 36.7278 40.898 35.7918 40.898C34.8678 40.898 34.1298 41.114 33.5778 41.546C33.0258 41.966 32.7498 42.536 32.7498 43.256ZM33.1098 37.28C33.1098 37.916 33.3498 38.426 33.8298 38.81C34.3218 39.194 34.9758 39.386 35.7918 39.386C36.6078 39.386 37.2558 39.2 37.7358 38.828C38.2158 38.444 38.4558 37.94 38.4558 37.316C38.4558 36.692 38.2158 36.2 37.7358 35.84C37.2558 35.468 36.6078 35.282 35.7918 35.282C34.9758 35.282 34.3218 35.468 33.8298 35.84C33.3498 36.2 33.1098 36.68 33.1098 37.28ZM48.7518 37.064C48.7518 37.7 48.6078 38.27 48.3198 38.774C48.0438 39.278 47.6598 39.674 47.1678 39.962C46.6758 40.238 46.1058 40.376 45.4578 40.376C44.8218 40.376 44.2578 40.238 43.7658 39.962C43.2738 39.674 42.8838 39.278 42.5958 38.774C42.3198 38.27 42.1818 37.7 42.1818 37.064C42.1818 36.416 42.3198 35.84 42.5958 35.336C42.8838 34.832 43.2738 34.442 43.7658 34.166C44.2578 33.878 44.8218 33.734 45.4578 33.734C46.1058 33.734 46.6758 33.878 47.1678 34.166C47.6598 34.442 48.0438 34.832 48.3198 35.336C48.6078 35.84 48.7518 36.416 48.7518 37.064ZM47.3658 37.064C47.3658 36.476 47.1918 36.002 46.8438 35.642C46.4958 35.27 46.0338 35.084 45.4578 35.084C44.9058 35.084 44.4498 35.27 44.0898 35.642C43.7418 36.002 43.5678 36.476 43.5678 37.064C43.5678 37.64 43.7418 38.114 44.0898 38.486C44.4498 38.846 44.9058 39.026 45.4578 39.026C46.0218 39.026 46.4778 38.846 46.8258 38.486C47.1858 38.114 47.3658 37.64 47.3658 37.064ZM55.6098 34.004L45.7278 47H43.9998L53.8818 34.004H55.6098ZM57.4638 43.922C57.4638 44.558 57.3198 45.128 57.0318 45.632C56.7558 46.136 56.3718 46.532 55.8798 46.82C55.3878 47.096 54.8178 47.234 54.1698 47.234C53.5338 47.234 52.9698 47.096 52.4778 46.82C51.9858 46.532 51.5958 46.136 51.3078 45.632C51.0198 45.128 50.8758 44.558 50.8758 43.922C50.8758 43.274 51.0198 42.704 51.3078 42.212C51.5958 41.708 51.9858 41.318 52.4778 41.042C52.9698 40.754 53.5338 40.61 54.1698 40.61C54.8178 40.61 55.3878 40.754 55.8798 41.042C56.3718 41.318 56.7558 41.708 57.0318 42.212C57.3198 42.704 57.4638 43.274 57.4638 43.922ZM56.0598 43.922C56.0598 43.334 55.8858 42.86 55.5378 42.5C55.1898 42.128 54.7338 41.942 54.1698 41.942C53.6058 41.942 53.1498 42.128 52.8018 42.5C52.4538 42.86 52.2798 43.334 52.2798 43.922C52.2798 44.498 52.4538 44.972 52.8018 45.344C53.1498 45.704 53.6058 45.884 54.1698 45.884C54.7338 45.884 55.1898 45.704 55.5378 45.344C55.8858 44.972 56.0598 44.498 56.0598 43.922Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>

                  <div className="goals-swiper-slide__top-tag">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4 4" fill="none">
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg>

                    <span>Smart Fry Technology</span>
                  </div>
                </div>

                <div className="goals-swiper-slide__bottom">
                  <div className="goals-swiper-slide__block">
                    <span>Heat stability, typical</span>
                    <span>With Smart Fry</span>
                  </div>

                  <div className="goals-swiper-slide__block">
                    <strong>Low</strong>
                    <strong>High</strong>
                  </div>

                  <div className="goals-swiper-slide__bottom-loader">
                    <div className="goals-swiper-slide__bottom-loader-bar">
                      <div className="goals-swiper-slide__bottom-loader-circle">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle
                            data-figma-bg-blur-radius="40"
                            cx="16.2966"
                            cy="16.7039"
                            r="16.2829"
                            fill="white"
                            fillOpacity="0.79"
                          ></circle>
                          <defs>
                            <clipPath id="bgblur_0_2397_4772_clip_path" transform="translate(39.9863 39.579)">
                              <circle cx="16.2966" cy="16.7039" r="16.2829"></circle>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="goals-swiper-slide__info">
                    <div className="goals-swiper-slide__bar"></div>

                    <div className="goals-swiper-slide__grid">
                      <div className="goals-swiper-slide__grid-group">
                        <span>Step 01</span>
                        <strong>Cryo Filtration</strong>
                      </div>

                      <div className="goals-swiper-slide__grid-group">
                        <span>Step 02</span>
                        <strong>Controlled Refinement</strong>
                      </div>

                      <div className="goals-swiper-slide__grid-group">
                        <span>Step 03</span>
                        <strong>Faster Heat Transfer</strong>
                      </div>
                    </div>

                    <div className="goals-swiper-slide__images">
                      <img src="/assets/img/a010-9568d1e8db.avif" alt="Actipro refining process" loading="lazy" />
                      <img src="/assets/img/a011-a34cab6b1c.avif" alt="Actipro refining process" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="goals-swiper-pagination">
            <span
              className="goals- goals-"
              tabIndex="0"
              role="button"
              aria-label="Go to slide 1"
              aria-current="true"
            ></span>
            <span className="goals-" tabIndex="0" role="button" aria-label="Go to slide 2"></span>
            <span className="goals-" tabIndex="0" role="button" aria-label="Go to slide 3"></span>
          </div>
          <span className="swiper-notification" aria-atomic="true"></span>
        </div>
      </div>
    </section>
  );
}
