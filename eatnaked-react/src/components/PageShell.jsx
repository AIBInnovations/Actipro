import { useEffect } from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import OilBot from "./OilBot.jsx";
import GlobalGrid from "./GlobalGrid.jsx";

import { initPage } from "../animations/page.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

/**
 * Chrome for every route that isn't the homepage.
 *
 * The homepage keeps its own shell (it has the preloader, the markers rail and
 * a bootstrap full of section-specific scroll scenes); this one carries just
 * the nav, the footer, the Oil Bot and the page's own scroll reveals.
 *
 * `key` on the shell is set by the router to the pathname, so navigating
 * remounts it and `initPage` tears down and rebuilds against the new DOM
 * rather than holding ScrollTriggers pointed at elements that are gone.
 */
export default function PageShell({ eyebrow, title, lede, metaTitle, metaDescription, metaImage, children }) {
  // Falls back to the page's own heading and lede, so a page that forgets to
  // set metadata still gets something better than the site-wide default.
  usePageMeta({
    title: metaTitle ?? eyebrow,
    description: metaDescription ?? lede,
    image: metaImage,
  });

  useEffect(() => {
    const destroy = initPage();
    return destroy;
  }, []);

  return (
    <div className="overflow-wrapper">
      <Navbar />

      <div className="overflow-container">
        <main className="page">
          <header className="page-head">
            <div className="page-head__inner">
              <div className="page-eyebrow">
                <span className="page-eyebrow__rule"></span>
                <span className="page-eyebrow__text">{eyebrow}</span>
              </div>

              <h1 className="page-head__h1">{title}</h1>
              {lede ? <p className="page-head__p">{lede}</p> : null}
            </div>
          </header>

          {children}
        </main>

        <Footer />
      </div>

      <OilBot />
      <GlobalGrid />
    </div>
  );
}
