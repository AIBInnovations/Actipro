import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Process from "./pages/Process.jsx";
import Contact from "./pages/Contact.jsx";
import FindYourOil from "./pages/FindYourOil.jsx";
import Media from "./pages/Media.jsx";
import Gifting from "./pages/Gifting.jsx";
import Faqs from "./pages/Faqs.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";

/**
 * Routing.
 *
 * Every page owns its own scroll bootstrap (the homepage runs `initHomepage`,
 * the rest run `initPage`), so the router's job is only to mount the right one
 * and make sure the previous one is fully unmounted first - hence `key` on the
 * element, which forces a remount even when two routes share a component.
 *
 * Deep links need a server rewrite to index.html. Vite's dev server does this
 * out of the box; `public/_redirects` covers Netlify-style hosts. Apache or
 * nginx will need the equivalent rule.
 */

/**
 * Routes clicks on internal links through the router.
 *
 * The navbar, footer and hero markup is a straight port of the reference DOM
 * and the overlay menu's GSAP timeline queries it by class - rewriting those
 * anchors into <Link> elements risks the menu more than it gains. A single
 * delegated listener gets the same result and covers every internal link on
 * the site, including ones added later. React Router's own <Link> calls
 * preventDefault first, so those are skipped by the defaultPrevented guard.
 */
function InternalLinks() {
  const navigate = useNavigate();

  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target.closest?.("a");
      if (!anchor || anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      // Same-origin paths only: mailto:, tel:, http(s) and #anchors pass through.
      if (!href || !href.startsWith("/")) return;

      event.preventDefault();

      // The Oil Bot stopped being a page when it became a floating widget, but
      // the navbar and the closing CTA still point at /oil-bot. Open the widget
      // where the visitor already is rather than sending them somewhere.
      if (href === "/oil-bot") {
        window.dispatchEvent(new CustomEvent("actipro:open-oilbot"));
        return;
      }

      navigate(href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);

  return null;
}

/** Lenis keeps its own scroll position, so a route change has to reset it. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <InternalLinks />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:key" element={<ProductDetailRoute />} />
        <Route path="/the-process" element={<Process />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/find-your-oil" element={<FindYourOil />} />
        <Route path="/media" element={<Media />} />
        <Route path="/gifting" element={<Gifting />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        {/* Direct visits to the old Oil Bot URL land on the flow it mirrors. */}
        <Route path="/oil-bot" element={<Navigate to="/find-your-oil" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

/** Remounts the shell per variant, so `initPage` rebinds to the new DOM. */
function ProductDetailRoute() {
  const { pathname } = useLocation();
  return <ProductDetail key={pathname} />;
}
