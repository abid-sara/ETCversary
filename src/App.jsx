import React, { useRef } from "react";
import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import ETCVersary from "./components/etcVersary";
import Agenda from "./components/agenda/Agenda";
import Speakers from "./components/speakers/Speakers";
import Mentors from "./components/mentors/Mentors";
import Sponsors from "./components/sponsors/sponsors";
import AboutEtc from "./components/AboutETC";
import Footer from "./components/footer";

const App = () => {
  const sectionsRef = {
    heroSection: useRef(null),
    etcVersary: useRef(null),
    agenda: useRef(null),
    community: useRef(null),
    about: useRef(null),
  };

  return (
    <div className="bg-blueCustom">
      <NavBar sectionsRef={sectionsRef} />

      <section ref={sectionsRef.heroSection}>
        <HeroSection />
      </section>
      <section ref={sectionsRef.etcVersary}>
        <ETCVersary />
      </section>
      <section ref={sectionsRef.agenda}>
        <Agenda />
      </section>
      <section>
        <Mentors />
      </section>
      <section>
        <Sponsors />
      </section>
      <section ref={sectionsRef.about}>
        <AboutEtc />
      </section>

      <Footer />
    </div>
  );
};

export default App;
