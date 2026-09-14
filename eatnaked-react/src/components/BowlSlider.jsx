/**
 * Benefit bowl. Variants rotate in and out around a large circular motif,
 * with benefit tags on both sides.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function BowlSlider() {
  return (
    <section className="bowl" data-custom-slider="" data-current-slide="0" data-marker="">
      <div className="bowl-container">
        <div className="bowl-bounds">
          <div className="bowl-center">
            <div className="bowl-header">
              <div className="bowl-header__tag">What's actually inside</div>
              <div className="bowl-header__titles">
                <h2 className="bowl-header__title is--active" data-custom-slider-title="">
                  Refined Corn Oil — High Absorbent Refining Technology
                </h2>
                <h2 className="bowl-header__title" data-custom-slider-title="">
                  Refined Rice Bran Oil — Smart Fry Technology
                </h2>
              </div>
            </div>

            <div className="bowl-reference">
              <div className="bowl-reference__image is--active" data-custom-slider-image="">
                <img src="/assets/img/pack-corn-scene.webp" alt="" loading="lazy" />
              </div>

              <div className="bowl-reference__image to--right" data-custom-slider-image="">
                <img src="/assets/img/pack-rice-bran-scene.webp" alt="" loading="lazy" />
              </div>
            </div>

            <div className="bowl-reference-mock">
              <div className="bowl-navigation">
                <button
                  className="bowl-navigation__button is--prev"
                  data-custom-slider-prev=""
                  aria-label="Previous slide"
                >
                  <div className="bowl-navigation__button-ellipse"></div>
                  <svg width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.0797 0.98047C10.0797 1.80145 9.22816 3.02739 8.36613 4.05638C7.25781 5.38411 5.9334 6.54256 4.41497 7.42661C3.27644 8.08936 1.89626 8.72557 0.785616 8.72557M0.785616 8.72557C1.89626 8.72557 3.2776 9.36177 4.41497 10.0245C5.9334 10.9097 7.25781 12.0681 8.36613 13.3936C9.22816 14.4237 10.0797 15.6519 10.0797 16.4707M0.785616 8.72557L28.668 8.72557"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </button>

                <button className="bowl-navigation__button is--next" data-custom-slider-next="" aria-label="Next slide">
                  <div className="bowl-navigation__button-ellipse"></div>
                  <svg width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.9203 16.0195C18.9203 15.1986 19.7718 13.9726 20.6339 12.9436C21.7422 11.6159 23.0666 10.4574 24.585 9.5734C25.7236 8.91064 27.1037 8.27443 28.2144 8.27443M28.2144 8.27443C27.1037 8.27443 25.7224 7.63823 24.585 6.97547C23.0666 6.09032 21.7422 4.93187 20.6339 3.60635C19.7718 2.57625 18.9203 1.3481 18.9203 0.529335M28.2144 8.27443L0.332031 8.27443"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="bowl-circle">
            <svg
              className="bowl-circle__svg is--landscape"
              width="100%"
              viewBox="0 0 1452 896"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_3290_1769" fill="white">
                <path d="M29.4572 930.048C-3.52496 817.719 -8.83645 699.077 13.9761 584.25C36.7887 469.424 87.0478 361.822 160.463 270.631C233.878 179.44 328.27 107.368 435.579 60.5671C542.888 13.7663 659.929 -6.37332 776.709 1.86752C893.49 10.1084 1006.54 46.4849 1106.22 107.892C1205.89 169.299 1289.22 253.912 1349.1 354.51C1408.99 455.107 1443.64 568.7 1450.1 685.593C1456.56 802.485 1434.64 919.206 1386.21 1025.79L1383.66 1024.63C1431.91 918.46 1453.74 802.189 1447.31 685.747C1440.87 569.305 1406.35 456.15 1346.7 355.94C1287.05 255.73 1204.04 171.443 1104.75 110.272C1005.46 49.1022 892.843 12.8659 776.512 4.65678C660.182 -3.55229 543.592 16.5097 436.697 63.1302C329.801 109.751 235.774 181.545 162.641 272.385C89.5088 363.224 39.4434 470.411 16.7187 584.795C-6.00593 699.179 -0.714912 817.364 32.1401 929.26L29.4572 930.048Z"></path>
              </mask>
              <path
                d="M29.4572 930.048C-3.52496 817.719 -8.83645 699.077 13.9761 584.25C36.7887 469.424 87.0478 361.822 160.463 270.631C233.878 179.44 328.27 107.368 435.579 60.5671C542.888 13.7663 659.929 -6.37332 776.709 1.86752C893.49 10.1084 1006.54 46.4849 1106.22 107.892C1205.89 169.299 1289.22 253.912 1349.1 354.51C1408.99 455.107 1443.64 568.7 1450.1 685.593C1456.56 802.485 1434.64 919.206 1386.21 1025.79L1383.66 1024.63C1431.91 918.46 1453.74 802.189 1447.31 685.747C1440.87 569.305 1406.35 456.15 1346.7 355.94C1287.05 255.73 1204.04 171.443 1104.75 110.272C1005.46 49.1022 892.843 12.8659 776.512 4.65678C660.182 -3.55229 543.592 16.5097 436.697 63.1302C329.801 109.751 235.774 181.545 162.641 272.385C89.5088 363.224 39.4434 470.411 16.7187 584.795C-6.00593 699.179 -0.714912 817.364 32.1401 929.26L29.4572 930.048Z"
                stroke="url(#paint0_linear_3290_1769)"
                strokeWidth="4"
                mask="url(#path-1-inside-1_3290_1769)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_3290_1769"
                  x1="662.329"
                  y1="-29.312"
                  x2="668.5"
                  y2="1258.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0948152" stopColor="var(--bg)"></stop>
                  <stop offset="0.491816" stopColor="var(--bg)" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="bowl-circle__svg is--portrait"
              width="430"
              height="490"
              viewBox="0 0 430 490"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3303_1962)">
                <mask id="path-1-inside-1_3303_1962" fill="white">
                  <path d="M99.4946 396.44C70.4719 377.877 46.3717 352.568 29.2514 322.672C12.1311 292.776 2.49909 259.181 1.17768 224.756C-0.143734 190.33 6.88466 156.096 21.6629 124.975C36.4411 93.855 58.5303 66.7727 86.0447 46.0404C113.559 25.3081 145.682 11.5414 179.67 5.91567C213.659 0.289927 248.504 2.97214 281.231 13.7334C313.959 24.4946 343.596 43.0152 367.613 67.7142C391.631 92.4132 409.315 122.557 419.156 155.573L418.368 155.808C408.564 122.919 390.948 92.8916 367.023 68.2878C343.099 43.684 313.576 25.2348 280.974 14.515C248.373 3.79529 213.662 1.12341 179.805 6.72747C145.947 12.3315 113.948 26.0451 86.5399 46.6975C59.1315 67.35 37.1275 94.3279 22.4062 125.328C7.68491 156.329 0.683599 190.431 1.99992 224.724C3.31624 259.017 12.9111 292.482 29.9654 322.263C47.0198 352.044 71.0271 377.256 99.938 395.746L99.4946 396.44Z"></path>
                </mask>
                <path
                  d="M99.4946 396.44C70.4719 377.877 46.3717 352.568 29.2514 322.672C12.1311 292.776 2.49909 259.181 1.17768 224.756C-0.143734 190.33 6.88466 156.096 21.6629 124.975C36.4411 93.855 58.5303 66.7727 86.0447 46.0404C113.559 25.3081 145.682 11.5414 179.67 5.91567C213.659 0.289927 248.504 2.97214 281.231 13.7334C313.959 24.4946 343.596 43.0152 367.613 67.7142C391.631 92.4132 409.315 122.557 419.156 155.573L418.368 155.808C408.564 122.919 390.948 92.8916 367.023 68.2878C343.099 43.684 313.576 25.2348 280.974 14.515C248.373 3.79529 213.662 1.12341 179.805 6.72747C145.947 12.3315 113.948 26.0451 86.5399 46.6975C59.1315 67.35 37.1275 94.3279 22.4062 125.328C7.68491 156.329 0.683599 190.431 1.99992 224.724C3.31624 259.017 12.9111 292.482 29.9654 322.263C47.0198 352.044 71.0271 377.256 99.938 395.746L99.4946 396.44Z"
                  stroke="url(#paint0_linear_3303_1962)"
                  strokeWidth="4"
                  mask="url(#path-1-inside-1_3303_1962)"
                ></path>
                <mask id="path-2-inside-2_3303_1962" fill="white">
                  <path d="M99.4946 94.6922C70.4719 113.254 46.3717 138.564 29.2514 168.46C12.1311 198.356 2.49909 231.95 1.17768 266.376C-0.143734 300.802 6.88466 335.036 21.6629 366.156C36.4411 397.277 58.5303 424.359 86.0447 445.091C113.559 465.824 145.682 479.59 179.67 485.216C213.659 490.842 248.504 488.16 281.231 477.398C313.959 466.637 343.596 448.117 367.613 423.418C391.631 398.719 409.315 368.575 419.156 335.559L418.368 335.324C408.564 368.213 390.948 398.24 367.023 422.844C343.099 447.448 313.576 465.897 280.974 476.617C248.373 487.337 213.662 490.008 179.805 484.404C145.947 478.8 113.948 465.087 86.5399 444.434C59.1315 423.782 37.1275 396.804 22.4062 365.803C7.68491 334.803 0.683599 300.701 1.99992 266.408C3.31624 232.115 12.9111 198.649 29.9654 168.869C47.0198 139.088 71.0271 113.876 99.938 95.3854L99.4946 94.6922Z"></path>
                </mask>
                <path
                  d="M99.4946 94.6922C70.4719 113.254 46.3717 138.564 29.2514 168.46C12.1311 198.356 2.49909 231.95 1.17768 266.376C-0.143734 300.802 6.88466 335.036 21.6629 366.156C36.4411 397.277 58.5303 424.359 86.0447 445.091C113.559 465.824 145.682 479.59 179.67 485.216C213.659 490.842 248.504 488.16 281.231 477.398C313.959 466.637 343.596 448.117 367.613 423.418C391.631 398.719 409.315 368.575 419.156 335.559L418.368 335.324C408.564 368.213 390.948 398.24 367.023 422.844C343.099 447.448 313.576 465.897 280.974 476.617C248.373 487.337 213.662 490.008 179.805 484.404C145.947 478.8 113.948 465.087 86.5399 444.434C59.1315 423.782 37.1275 396.804 22.4062 365.803C7.68491 334.803 0.683599 300.701 1.99992 266.408C3.31624 232.115 12.9111 198.649 29.9654 168.869C47.0198 139.088 71.0271 113.876 99.938 95.3854L99.4946 94.6922Z"
                  stroke="url(#paint1_linear_3303_1962)"
                  strokeWidth="4"
                  mask="url(#path-2-inside-2_3303_1962)"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3303_1962"
                  x1="119.606"
                  y1="-69.0004"
                  x2="111.959"
                  y2="347.776"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.036404" stopColor="var(--bg)" stopOpacity="0"></stop>
                  <stop offset="0.452354" stopColor="var(--bg)"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3303_1962"
                  x1="119.606"
                  y1="560.132"
                  x2="111.959"
                  y2="143.356"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.036404" stopColor="var(--bg)" stopOpacity="0"></stop>
                  <stop offset="0.452354" stopColor="var(--bg)"></stop>
                </linearGradient>
                <clipPath id="clip0_3303_1962">
                  <rect width="430" height="490" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="bowl-indicators">
            <div className="bowl-indicators__left">
              <div className="bowl-indicators__left-inner is--fixed">
                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/ing-rice-bran.webp" alt="" />
                  </div>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/ing-rice-bran.webp" alt="" />
                  </div>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/ing-rice-bran.webp" alt="" />
                  </div>
                </div>
              </div>

              <div className="bowl-indicators__left-inner is--active" data-custom-slider-indicator="left">
                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-vitamin-e.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Vitamin E</span>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-phytosterols.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Phytosterols</span>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-omega-6.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Omega-6</span>
                </div>
              </div>

              <div className="bowl-indicators__left-inner" data-custom-slider-indicator="left">
                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-cholesterol-free.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Cholesterol Free</span>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-plant-sterols.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Plant Sterols</span>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-balanced-mufa.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Balanced MUFA</span>
                </div>
              </div>
            </div>

            <div className="bowl-indicators__right">
              <div className="bowl-indicators__right-inner is--fixed">
                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/ing-rice-bran.webp" alt="" />
                  </div>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/ing-rice-bran.webp" alt="" />
                  </div>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/ing-rice-bran.webp" alt="" />
                  </div>
                </div>
              </div>

              <div className="bowl-indicators__right-inner is--active" data-custom-slider-indicator="right">
                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-less-absorbed.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Less Absorbed</span>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-mild-taste.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Mild Taste</span>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-versatile.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Versatile</span>
                </div>
              </div>

              <div className="bowl-indicators__right-inner" data-custom-slider-indicator="right">
                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-vitamin-a-d.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Vitamin A &amp; D</span>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-antioxidants.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Antioxidants</span>
                </div>

                <div className="bowl-indicators__tag">
                  <div className="bowl-indicators__tag-img">
                    <img src="/assets/img/tag-heat-stable.webp" alt="" />
                  </div>
                  <span className="bowl-indicators__tag-text">Heat Stable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
