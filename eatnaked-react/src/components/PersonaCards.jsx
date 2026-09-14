/**
 * Use-case deck. Landscape gets the draggable flick-card stack, portrait a
 * Swiper — the desktop interaction is not a carousel.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function PersonaCards() {
  return (
    <section className="design" data-marker="">
      <div className="design-container">
        <div data-flick-cards-init="" className="flick-group" data-flick-drag-status="grab">
          <div className="flick-group__relative-object">
            <div className="flick-group__relative-object-before"></div>
          </div>

          <div data-flick-cards-collection="" className="flick-group__collection">
            <div data-flick-cards-list="" className="flick-group__list">
              <div data-flick-cards-item-status="active" data-flick-cards-item="" className="flick-group__item">
                <div className="flick-card">
                  <div className="flick-card__before"></div>

                  <div className="flick-card__media">
                    <img
                      width="256"
                      loading="lazy"
                      alt=""
                      src="/assets/img/dish-pulao.webp"
                      className="cover-image"
                    />
                  </div>
                </div>

                <div className="flick-card__inner-blur--1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 140 140" fill="none">
                    <circle cx="70" cy="70" r="70" fill="#F4783E" fillOpacity="0.47"></circle>
                  </svg>
                </div>
                <div className="flick-card__inner-blur--2">
                  <svg width="100%" viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="180" cy="70" rx="180" ry="70" fill="#F4783E" fillOpacity="0.47"></ellipse>
                  </svg>
                </div>

                <div className="flick-card__info">
                  <h3 className="flick-card__info__h3">Everyday Meals</h3>
                  <h4 className="flick-card__info__h4">Refined Sunflower Oil.</h4>

                  <a href="/find-your-oil" className="cta-button">
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
                        <span className="cta-button__text--span">Find Your Oil</span>
                      </div>
                    </div>
                  </a>
                  <div data-flick-cards-dragger=""></div>
                </div>
              </div>

              <div data-flick-cards-item-status="hidden" data-flick-cards-item="" className="flick-group__item">
                <div className="flick-card">
                  <div className="flick-card__before"></div>

                  <div className="flick-card__media">
                    <img
                      width="256"
                      loading="lazy"
                      alt=""
                      src="/assets/img/dish-chaat.webp"
                      className="cover-image"
                    />
                  </div>
                </div>

                <div className="flick-card__inner-blur--1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 140 140" fill="none">
                    <circle cx="70" cy="70" r="70" fill="#F4783E" fillOpacity="0.47"></circle>
                  </svg>
                </div>
                <div className="flick-card__inner-blur--2">
                  <svg width="100%" viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="180" cy="70" rx="180" ry="70" fill="#F4783E" fillOpacity="0.47"></ellipse>
                  </svg>
                </div>

                <div className="flick-card__info">
                  <h3 className="flick-card__info__h3">Deep Frying</h3>
                  <h4 className="flick-card__info__h4">Refined Corn Oil.</h4>

                  <a href="/find-your-oil" className="cta-button">
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
                        <span className="cta-button__text--span">Find Your Oil</span>
                      </div>
                    </div>
                  </a>
                  <div data-flick-cards-dragger=""></div>
                </div>
              </div>

              <div data-flick-cards-item-status="hidden" data-flick-cards-item="" className="flick-group__item">
                <div className="flick-card">
                  <div className="flick-card__before"></div>

                  <div className="flick-card__media">
                    <img
                      width="256"
                      loading="lazy"
                      alt=""
                      src="/assets/img/dish-curry.webp"
                      className="cover-image"
                    />
                  </div>
                </div>

                <div className="flick-card__inner-blur--1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 140 140" fill="none">
                    <circle cx="70" cy="70" r="70" fill="#F4783E" fillOpacity="0.47"></circle>
                  </svg>
                </div>
                <div className="flick-card__inner-blur--2">
                  <svg width="100%" viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="180" cy="70" rx="180" ry="70" fill="#F4783E" fillOpacity="0.47"></ellipse>
                  </svg>
                </div>

                <div className="flick-card__info">
                  <h3 className="flick-card__info__h3">Heart-Conscious</h3>
                  <h4 className="flick-card__info__h4">Refined Rice Bran Oil.</h4>

                  <a href="/find-your-oil" className="cta-button">
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
                        <span className="cta-button__text--span">Find Your Oil</span>
                      </div>
                    </div>
                  </a>
                  <div data-flick-cards-dragger=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="design-header">
          <h2 className="design-header__h2">Not all cooking calls for the same oil. Let's find yours.</h2>
        </div>

        <div
          className="design-swiper-container is--portrait"
          data-swiper-class="design"
          data-swiper-parent-class="design"
          data-swiper-slides-per-view="1"
          data-swiper-space-between="0"
          data-swiper-slides-per-view-mobile="auto"
          data-swiper-centered-mobile="true"
          data-swiper-space-between-mobile="20"
          data-swiper-enabled="false"
          data-swiper-enabled-mobile="true"
        >
          <div className="design-swiper-wrapper">
            <div className="design-swiper__slide design-swiper-slide">
              <div className="design-swiper__inner">
                <div className="design-swiper__content">
                  <h3 className="design-swiper__content__h3">Everyday Meals</h3>
                  <h4 className="design-swiper__content__h4">Refined Sunflower Oil.</h4>

                  <a href="/find-your-oil" className="cta-button">
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
                        <span className="cta-button__text--span">Find Your Oil</span>
                      </div>
                    </div>
                  </a>

                  <img src="/assets/img/dish-pulao.webp" alt="" className="design-swiper__image" />
                </div>
              </div>

              <div className="design-swiper__inner-blur--1">
                <svg width="100%" viewBox="0 0 330 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="164.777" cy="119.498" rx="164.777" ry="119.498" fill="#F4783E"></ellipse>
                </svg>
              </div>
              <div className="design-swiper__inner-blur--2">
                <svg width="100%" viewBox="0 0 329 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="164.5" cy="63" rx="164.5" ry="63" fill="#F4783E"></ellipse>
                </svg>
              </div>
            </div>

            <div className="design-swiper__slide design-swiper-slide">
              <div className="design-swiper__inner">
                <div className="design-swiper__content">
                  <h3 className="design-swiper__content__h3">Deep Frying</h3>
                  <h4 className="design-swiper__content__h4">Refined Corn Oil.</h4>

                  <a href="/find-your-oil" className="cta-button">
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
                        <span className="cta-button__text--span">Find Your Oil</span>
                      </div>
                    </div>
                  </a>

                  <img src="/assets/img/dish-chaat.webp" alt="" className="design-swiper__image" />
                </div>
              </div>

              <div className="design-swiper__inner-blur--1">
                <svg width="100%" viewBox="0 0 330 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="164.777" cy="119.498" rx="164.777" ry="119.498" fill="#F4783E"></ellipse>
                </svg>
              </div>
              <div className="design-swiper__inner-blur--2">
                <svg width="100%" viewBox="0 0 329 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="164.5" cy="63" rx="164.5" ry="63" fill="#F4783E"></ellipse>
                </svg>
              </div>
            </div>

            <div className="design-swiper__slide design-swiper-slide">
              <div className="design-swiper__inner">
                <div className="design-swiper__content">
                  <h3 className="design-swiper__content__h3">Heart-Conscious</h3>
                  <h4 className="design-swiper__content__h4">Refined Rice Bran Oil.</h4>

                  <a href="/find-your-oil" className="cta-button">
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
                        <span className="cta-button__text--span">Find Your Oil</span>
                      </div>
                    </div>
                  </a>

                  <img src="/assets/img/dish-curry.webp" alt="" className="design-swiper__image" />
                </div>
              </div>

              <div className="design-swiper__inner-blur--1">
                <svg width="100%" viewBox="0 0 330 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="164.777" cy="119.498" rx="164.777" ry="119.498" fill="#F4783E"></ellipse>
                </svg>
              </div>
              <div className="design-swiper__inner-blur--2">
                <svg width="100%" viewBox="0 0 329 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="164.5" cy="63" rx="164.5" ry="63" fill="#F4783E"></ellipse>
                </svg>
              </div>
            </div>
          </div>

          <div className="design-swiper-pagination">
            <span
              className="design- design-"
              tabIndex="0"
              role="button"
              aria-label="Go to slide 1"
              aria-current="true"
            ></span>
            <span className="design-" tabIndex="0" role="button" aria-label="Go to slide 2"></span>
            <span className="design-" tabIndex="0" role="button" aria-label="Go to slide 3"></span>
          </div>
          <span className="swiper-notification" aria-atomic="true"></span>
        </div>
      </div>
    </section>
  );
}
