/**
 * Closing CTA, draggable fact track, and the depth-blurred floating
 * ingredients behind them.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function Join() {
  return (
    <section className="join" data-marker-end="">
      <div className="join-container">
        <div className="join-header">
          <h3 className="join-header__h3">It's a Lifestyle</h3>
          <h2 className="join-header__h2">Ready to upgrade your everyday?</h2>
          <p className="join-header__p">Tell the Oil Bot what you usually cook. It'll point you to the right variant.</p>

          <a href="/oil-bot" className="cta-button">
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
                <span className="cta-button__text--span">Ask the Oil Bot</span>
              </div>
            </div>
          </a>
        </div>

        <div className="join-slider" data-drag-container="">
          <div className="join-slider__bounds" data-drag-bounds="">
            <div className="join-slider__track" data-drag-track="">
              <div className="join-slider__element">
                <div className="join-slider__item is--one">
                  <div className="join-slider__inner">
                    <div className="join-slider__content">
                      <img
                        loading="lazy"
                        src="/logo.png"
                        alt=""
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Advanced Dewaxing Technology
                        <span className="join-slider__span">Refined Sunflower Oil</span>
                      </h4>
                      <p className="join-slider__p">
                        Sunflower oil naturally carries wax that clouds the oil and affects its stability. Cryo filtration
                        chills the oil to solidify and remove that wax, then multi-stage purification filters out what
                        remains, so the oil stays clear and carries no unwanted residue into your body.
                      </p>
                    </div>
                  </div>

                  <div className="join-slider__blur">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 102 102" fill="none">
                      <circle cx="51" cy="51" r="51" fill="#F4783E"></circle>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="join-slider__element">
                <div className="join-slider__item is--two">
                  <div className="join-slider__inner">
                    <div className="join-slider__content">
                      <img
                        loading="lazy"
                        src="/logo.png"
                        alt=""
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        High Absorbent Refining
                        <span className="join-slider__span">Refined Corn Oil</span>
                      </h4>
                      <p className="join-slider__p">
                        Corn oil's biggest real-world impact is how much of it your food actually soaks up. Multi-stage
                        refining strips out impurities and excess moisture while engineering the oil to be absorbed
                        less during cooking, so fried food comes out lighter, not greasier.
                      </p>
                    </div>
                  </div>

                  <div className="join-slider__blur">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 102 102" fill="none">
                      <circle cx="51" cy="51" r="51" fill="#F4783E"></circle>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="join-slider__element">
                <div className="join-slider__item is--three">
                  <div className="join-slider__inner">
                    <div className="join-slider__content">
                      <img
                        loading="lazy"
                        src="/logo.png"
                        alt=""
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Smart Fry Technology
                        <span className="join-slider__span">
                          Refined Rice Bran Oil
                        </span>
                      </h4>
                      <p className="join-slider__p">
                        Inspired by Japanese research into how oil behaves at high heat, cryo filtration is combined with
                        controlled-temperature refinement to keep the oil naturally stable. Smart Fry Technology then
                        engineers it for faster heat transfer, so less oil is absorbed into food during frying,
                        without compromising the oil's natural balance of good fats.
                      </p>
                    </div>
                  </div>

                  <div className="join-slider__blur">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 102 102" fill="none">
                      <circle cx="51" cy="51" r="51" fill="#F4783E"></circle>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="join-slider__element">
                <div className="join-slider__item is--four">
                  <div className="join-slider__inner">
                    <div className="join-slider__content">
                      <img
                        loading="lazy"
                        src="/logo.png"
                        alt=""
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Batch Traceability
                        <span className="join-slider__span">Every Bottle, Every Variant</span>
                      </h4>
                      <p className="join-slider__p">
                        Every bottle carries a Lot Number you can look up on its product page to see that specific batch's
                        manufacturing and packing details. We're not asking you to trust a label. We're giving you a
                        way to verify it.
                      </p>
                    </div>
                  </div>

                  <div className="join-slider__blur">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 102 102" fill="none">
                      <circle cx="51" cy="51" r="51" fill="#F4783E"></circle>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="join-slider__element">
                <div className="join-slider__item is--five">
                  <div className="join-slider__inner">
                    <div className="join-slider__content">
                      <img
                        loading="lazy"
                        src="/logo.png"
                        alt=""
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        In-House Quality Testing
                        <span className="join-slider__span">
                          Before Any Bottle Is Packed
                        </span>
                      </h4>
                      <p className="join-slider__p">
                        Every variant passes through in-house quality testing before packaging. A generic "refined for
                        purity" claim tells you nothing. Knowing which problem your oil's refining actually solves
                        tells you everything.
                      </p>
                    </div>
                  </div>

                  <div className="join-slider__blur">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 102 102" fill="none">
                      <circle cx="51" cy="51" r="51" fill="#F4783E"></circle>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="join-slider__element">
                <div className="join-slider__item is--six">
                  <div className="join-slider__inner">
                    <div className="join-slider__content">
                      <img
                        loading="lazy"
                        src="/logo.png"
                        alt=""
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Free From Argemone Oil
                        <span className="join-slider__span">A Promise, Not A Claim</span>
                      </h4>
                      <p className="join-slider__p">Nothing added that we wouldn't want in our own kitchens.</p>
                    </div>
                  </div>

                  <div className="join-slider__blur">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 102 102" fill="none">
                      <circle cx="51" cy="51" r="51" fill="#F4783E"></circle>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="join-slider__element">
                <div className="join-slider__item is--six">
                  <div className="join-slider__inner">
                    <div className="join-slider__content">
                      <img
                        loading="lazy"
                        src="/logo.png"
                        alt=""
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Three Decades of Manufacturing
                        <span className="join-slider__span">Madhuri Refiners Pvt. Ltd.</span>
                      </h4>
                      <p className="join-slider__p">
                        Actipro began in 2013 with one idea: an active life starts with what's in your pan, not just what's
                        on your plate. It is made by Madhuri Refiners Pvt. Ltd., built as its own brand with its own
                        promise: upgrade everyday cooking into conscious living.
                      </p>
                    </div>
                  </div>

                  <div className="join-slider__blur">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 102 102" fill="none">
                      <circle cx="51" cy="51" r="51" fill="#F4783E"></circle>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="join-slider__element">
                <div className="join-slider__item is--six">
                  <div className="join-slider__inner">
                    <div className="join-slider__content">
                      <img
                        loading="lazy"
                        src="/logo.png"
                        alt=""
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        FSSAI Licensed
                        <span className="join-slider__span">Lic. No. 11424999000132</span>
                      </h4>
                      <p className="join-slider__p">
                        Additives are disclosed on every pack: permitted antifoaming agent (DMPS, INS 900a) and antioxidant
                        (TBHQ, INS 319). Marketed by Madhuri Refiners Pvt. Ltd., Indore (M.P.). Any information given
                        here does not claim diagnosis, treatment, cure, or prevention of any disease.
                      </p>
                    </div>
                  </div>

                  <div className="join-slider__blur">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 102 102" fill="none">
                      <circle cx="51" cy="51" r="51" fill="#F4783E"></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="join-floating">
        <img
          loading="lazy"
          src="/assets/img/ing-sunflower.webp"
          alt=""
          className="join-floating__img is--1"
        />
        <img
          loading="lazy"
          src="/assets/img/ing-corn.webp"
          alt=""
          className="join-floating__img is--2"
        />
        <img
          loading="lazy"
          src="/assets/img/ing-rice-bran.webp"
          alt=""
          className="join-floating__img is--3"
        />
        <img
          loading="lazy"
          src="/assets/img/ing-sunflower.webp"
          alt=""
          className="join-floating__img is--4"
        />
        <img
          loading="lazy"
          src="/assets/img/ing-corn.webp"
          alt=""
          className="join-floating__img is--5"
        />
        <img
          loading="lazy"
          src="/assets/img/ing-rice-bran.webp"
          alt=""
          className="join-floating__img is--6"
        />
        <img
          loading="lazy"
          src="/assets/img/ing-sunflower.webp"
          alt=""
          className="join-floating__img is--7"
        />
        <img
          loading="lazy"
          src="/assets/img/ing-corn.webp"
          alt=""
          className="join-floating__img is--8"
        />
        <img
          loading="lazy"
          src="/assets/img/ing-rice-bran.webp"
          alt=""
          className="join-floating__img is--9"
        />
        <img
          loading="lazy"
          src="/assets/img/ing-sunflower.webp"
          alt=""
          className="join-floating__img is--10"
        />
        <img
          loading="lazy"
          src="/assets/img/ing-corn.webp"
          alt=""
          className="join-floating__img is--11"
        />
      </div>
    </section>
  );
}
