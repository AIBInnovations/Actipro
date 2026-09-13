/**
 * Closing CTA, draggable testimonial track, and the depth-blurred floating
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
          <h2 className="join-header__h2">Are you ready to EATnaked?</h2>
          <p className="join-header__p">Customize Your Plan, or Let Us Choose For You.</p>

          <a href="/register" className="cta-button">
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
                <span className="cta-button__text--span">Get Started</span>
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
                        src="/assets/img/a030-47809cbab5.png"
                        alt="Join Slider"
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Jenn Flanders
                        <span className="join-slider__span">UCLA Campus Life/Recreation </span>
                      </h4>
                      <p className="join-slider__p">
                        “EATnaked provides a wide variety of healthy food options that are both delicious and
                        nutritious. They offer catering services for meetings or events; the staff is friendly and
                        professional. I recommend EATnaked to anyone looking for great healthy food option and a no
                        hassle catering experience!”
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
                        src="/assets/img/a031-20c71f45a1.png"
                        alt="Join Slider"
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Alexis Cantley
                        <span className="join-slider__span">UCLA Men’s Volleyball Operations</span>
                      </h4>
                      <p className="join-slider__p">
                        “As a D1 athletics program, finding a company that is flexible with our schedule and
                        accommodating of our dietary needs is essential, and EATnaked has done just that. They help us
                        to provide our players with good tasting meals that hit all of their protein and other macro
                        needs.”
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
                        src="/assets/img/a032-948e52e070.png"
                        alt="Join Slider"
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Sharon Kwak
                        <span className="join-slider__span">
                          Equinox Group | Senior Recruiter, People Services - West Region
                        </span>
                      </h4>
                      <p className="join-slider__p">
                        “EatNaked is an amazing and highly reputable business! From the high-quality food to the level
                        of professionalism, they never disappoint. They have partnered with us for multiple employee
                        events, as well as smaller team meetings. Personally, I am also a huge fan of the delicious and
                        fresh foods. I have used them as a meal prep service myself, and consistently encourage
                        friends/family looking for a healthy, fresh, and great meal prep that EatNaked is the best
                        option.”
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
                        src="/assets/img/a033-97038f4339.png"
                        alt="Join Slider"
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Mauricio Ramos
                        <span className="join-slider__span">Chapcare | Marketing and Outreach Director</span>
                      </h4>
                      <p className="join-slider__p">
                        “We love collaborating with EatNaked because of what they believe and stand for: fresh, organic
                        and locally sourced food and businesses. Healthy nutrition is very important for us and
                        supporting a place like EatNaked means a lot to us!”
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
                        src="/assets/img/a034-c56584a9f9.png"
                        alt="Join Slider"
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Dr. Luis Felipe Restrepo
                        <span className="join-slider__span">
                          California State University, Chico | Head Men’s Soccer Coach Founder, Vision Navigator
                        </span>
                      </h4>
                      <p className="join-slider__p">
                        “We have enjoyed our partnership with eatnaked. Our focus is always the health and well being of
                        our student athletes as well as providing that winning edge on and off the field.”
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
                        src="/assets/img/a035-15ee8fd50e.png"
                        alt="Join Slider"
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Corey Calliet
                        <span className="join-slider__span">Celebrity Trainer | Actor | Motivational Speaker</span>
                      </h4>
                      <p className="join-slider__p">“EATnaked is my go to meal company for me and my clients.”</p>
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
                        src="/assets/img/a035-15ee8fd50e.png"
                        alt="Join Slider"
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Andres Ochoa Baeza
                        <span className="join-slider__span">Men’s Soccer Coach </span>
                      </h4>
                      <p className="join-slider__p">
                        “Eat Naked provides a great product through and through. Great meals, great variety, great
                        service, great juices, and great leadership. Simply put, EAT Naked is great! In addition to the
                        product, every interaction with the EAT Naked folks is always positive. You know it is a great
                        product when everyone involved is bought into the process.”
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
                        src="/assets/img/a035-15ee8fd50e.png"
                        alt="Join Slider"
                        className="join-slider__img"
                      />
                      <h4 className="join-slider__h4">
                        Casey Thomas
                        <span className="join-slider__span">Registered Dietician </span>
                      </h4>
                      <p className="join-slider__p">
                        “I've been leaning on EatNaked for years for both meal preps and catering events with the
                        athletes I work with. They understand the flexibility and reliability required in athletics and
                        have never given me a reason to switch away. My headaches are removed, the players love the
                        food, and I can adjust the meals to hit my athletes' nutritional needs. I frequently find myself
                        recommending them to other colleagues and clients.”
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
          src="/assets/img/a036-0e77dbdf32.png"
          alt="floating veggies"
          className="join-floating__img is--1"
        />
        <img
          loading="lazy"
          src="/assets/img/a037-1b176f4e0e.png"
          alt="floating veggies"
          className="join-floating__img is--2"
        />
        <img
          loading="lazy"
          src="/assets/img/a038-9a358dc0e4.png"
          alt="floating veggies"
          className="join-floating__img is--3"
        />
        <img
          loading="lazy"
          src="/assets/img/a039-8277d32d4b.png"
          alt="floating veggies"
          className="join-floating__img is--4"
        />
        <img
          loading="lazy"
          src="/assets/img/a040-76719d8ffa.png"
          alt="floating veggies"
          className="join-floating__img is--5"
        />
        <img
          loading="lazy"
          src="/assets/img/a041-0e026464ab.png"
          alt="floating veggies"
          className="join-floating__img is--6"
        />
        <img
          loading="lazy"
          src="/assets/img/a042-444362e75d.png"
          alt="floating veggies"
          className="join-floating__img is--7"
        />
        <img
          loading="lazy"
          src="/assets/img/a043-a130d33a2c.png"
          alt="floating veggies"
          className="join-floating__img is--8"
        />
        <img
          loading="lazy"
          src="/assets/img/a044-23758f48e1.png"
          alt="floating veggies"
          className="join-floating__img is--9"
        />
        <img
          loading="lazy"
          src="/assets/img/a045-aa0b88e704.png"
          alt="floating veggies"
          className="join-floating__img is--10"
        />
        <img
          loading="lazy"
          src="/assets/img/a046-f4f819ba76.png"
          alt="floating veggies"
          className="join-floating__img is--11"
        />
      </div>
    </section>
  );
}
