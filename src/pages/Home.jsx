import { useEffect } from "react";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Range from "../components/Range.jsx";
import Delivered from "../components/Delivered.jsx";
import Goals from "../components/Goals.jsx";
import PersonaCards from "../components/PersonaCards.jsx";
import BowlSlider from "../components/BowlSlider.jsx";
import KitchenAction from "../components/KitchenAction.jsx";
import Purpose from "../components/Purpose.jsx";
import Milestones from "../components/Milestones.jsx";
import Join from "../components/Join.jsx";
import Footer from "../components/Footer.jsx";
import SectionMarkers from "../components/SectionMarkers.jsx";
import Loader from "../components/Loader.jsx";
import GlobalGrid from "../components/GlobalGrid.jsx";
import OilBot from "../components/OilBot.jsx";

import { initHomepage } from "../animations/homepage.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

/**
 * The homepage. Everything below the router.
 *
 * Sections render as plain markup; every animation is imperative and runs
 * from the single mount effect below, which is this app's DOMContentLoaded.
 * Nothing here re-renders on scroll - GSAP writes to the DOM directly.
 *
 * The `overflow-container` wrapper is structural: it clips the sections whose
 * decorative art would otherwise widen the page. It used to be split in three
 * because two sticky scroll scenes had to sit outside it; those scenes are
 * gone, so it is one wrapper again.
 */
export default function Home() {
  // No title override: the homepage keeps the site-wide one. It still needs the
  // hook so the canonical and og:url point at "/" after navigating back here.
  usePageMeta();

  useEffect(() => {
    const destroy = initHomepage();
    return destroy;
  }, []);

  return (
    <div className="overflow-wrapper">
      <Navbar />

      <div className="overflow-container">
        <Hero />
        <Range />
        <Delivered />
        <Goals />
        <PersonaCards />
        <BowlSlider />
        <KitchenAction />
        <Purpose />
        <Milestones />
        <Join />
        <Footer />
      </div>

      <SectionMarkers />
      <OilBot />
      <Loader />
      <GlobalGrid />
    </div>
  );
}
