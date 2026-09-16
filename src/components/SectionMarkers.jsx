/**
 * Fixed right-hand section index. The active entry turns orange and its
 * line morphs from straight to a wave. Hidden in portrait.
 *
 * Markup mirrors the reference DOM so styles.css applies unchanged.
 */
export default function SectionMarkers() {
  return (
    <div className="markers">
      <div className="markers-container">
        <div className="markers-inner">
          <div className="markers-block is--active" data-scrollto=".hero">
            <span className="markers-block__text">Lifestyle</span>
            <span className="markers-block__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="8" viewBox="0 0 32 8" fill="none">
                <path
                  d="M0.5 4.22581C4.61596 8.8857 11.884 8.8857 16 4.22581L16.3519 3.91083C20.6997 0.0192925 27.3178 0.156903 31.5 4.22581"
                  stroke="#DB5E2C"
                  strokeWidth="0.5"
                  data-original="M0.5 4.22581C4.61596 8.8857 11.884 8.8857 16 4.22581L16.3519 3.91083C20.6997 0.0192925 27.3178 0.156903 31.5 4.22581"
                ></path>
              </svg>
            </span>
          </div>
          <div className="markers-block" data-scrollto=".range">
            <span className="markers-block__text">Our Range</span>
            <span className="markers-block__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="2" viewBox="0 0 32 2" fill="none">
                <path
                  d="M0.5 1H31.5"
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeWidth="0.5"
                  data-original="M0.5 1H31.5"
                ></path>
              </svg>
            </span>
          </div>
          <div className="markers-block" data-scrollto=".delivered">
            <span className="markers-block__text">Traceable</span>
            <span className="markers-block__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="2" viewBox="0 0 32 2" fill="none">
                <path
                  d="M0.5 1H31.5"
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeWidth="0.5"
                  data-original="M0.5 1H31.5"
                ></path>
              </svg>
            </span>
          </div>
          <div className="markers-block" data-scrollto=".goals">
            <span className="markers-block__text">Process</span>
            <span className="markers-block__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="2" viewBox="0 0 32 2" fill="none">
                <path
                  d="M0.5 1H31.5"
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeWidth="0.5"
                  data-original="M0.5 1H31.5"
                ></path>
              </svg>
            </span>
          </div>
          <div className="markers-block" data-scrollto=".design">
            <span className="markers-block__text">Find Yours</span>
            <span className="markers-block__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="2" viewBox="0 0 32 2" fill="none">
                <path
                  d="M0.5 1H31.5"
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeWidth="0.5"
                  data-original="M0.5 1H31.5"
                ></path>
              </svg>
            </span>
          </div>
          <div className="markers-block" data-scrollto=".bowl">
            <span className="markers-block__text">Inside</span>
            <span className="markers-block__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="2" viewBox="0 0 32 2" fill="none">
                <path
                  d="M0.5 1H31.5"
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeWidth="0.5"
                  data-original="M0.5 1H31.5"
                ></path>
              </svg>
            </span>
          </div>
          <div className="markers-block" data-scrollto=".action">
            <span className="markers-block__text">Made By</span>
            <span className="markers-block__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="2" viewBox="0 0 32 2" fill="none">
                <path
                  d="M0.5 1H31.5"
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeWidth="0.5"
                  data-original="M0.5 1H31.5"
                ></path>
              </svg>
            </span>
          </div>
          <div className="markers-block" data-scrollto=".purpose">
            <span className="markers-block__text">Purpose</span>
            <span className="markers-block__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="2" viewBox="0 0 32 2" fill="none">
                <path
                  d="M0.5 1H31.5"
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeWidth="0.5"
                  data-original="M0.5 1H31.5"
                ></path>
              </svg>
            </span>
          </div>
          <div className="markers-block" data-scrollto=".miles">
            <span className="markers-block__text">Milestones</span>
            <span className="markers-block__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="2" viewBox="0 0 32 2" fill="none">
                <path
                  d="M0.5 1H31.5"
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeWidth="0.5"
                  data-original="M0.5 1H31.5"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <svg id="curved" xmlns="http://www.w3.org/2000/svg" width="32" height="8" viewBox="0 0 32 8" fill="none">
        <path
          d="M0.5 4.22581C4.61596 8.8857 11.884 8.8857 16 4.22581L16.3519 3.91083C20.6997 0.0192925 27.3178 0.156903 31.5 4.22581"
          stroke="#DB5E2C"
          strokeWidth="0.5"
        ></path>
      </svg>
      <svg id="line" xmlns="http://www.w3.org/2000/svg" width="32" height="2" viewBox="0 0 32 2" fill="none">
        <path d="M0.5 1H31.5" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.5"></path>
      </svg>
    </div>
  );
}
