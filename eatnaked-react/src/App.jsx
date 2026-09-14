import { useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Delivered from "./components/Delivered.jsx";
import Goals from "./components/Goals.jsx";
import PartnersExperience from "./components/PartnersExperience.jsx";
import PersonaCards from "./components/PersonaCards.jsx";
import BowlSlider from "./components/BowlSlider.jsx";
import KitchenAction from "./components/KitchenAction.jsx";
import QualityJourney from "./components/QualityJourney.jsx";
import Join from "./components/Join.jsx";
import Footer from "./components/Footer.jsx";
import SectionMarkers from "./components/SectionMarkers.jsx";
import Loader from "./components/Loader.jsx";
import GlobalGrid from "./components/GlobalGrid.jsx";

import { initHomepage } from "./animations/homepage.js";

/**
 * The homepage.
 *
 * Sections render as plain markup; every animation is imperative and runs
 * from the single mount effect below, which is this app's DOMContentLoaded.
 * Nothing here re-renders on scroll - GSAP writes to the DOM directly.
 *
 * The `overflow-container` / sticky-wrapper alternation is structural: the
 * Partners and Quality scenes need tall scroll ranges around a sticky child,
 * which `overflow: hidden` would break.
 */
export default function App() {
  useEffect(() => {
    const destroy = initHomepage();
    return destroy;
  }, []);

  return (
    <div className="overflow-wrapper">
      <Navbar />

      <div className="overflow-container">
        <Hero />
        <Delivered />
        <Goals />
      </div>

      <PartnersExperience />

      <div className="overflow-container">
        <PersonaCards />
        <BowlSlider />
        <KitchenAction />
      </div>

      <QualityJourney />

      <div className="overflow-container">
        <Join />
        <Footer />
      </div>

      <SectionMarkers />
      <Loader />
      <GlobalGrid />
    </div>
  );
}
