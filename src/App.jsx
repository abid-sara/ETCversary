import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import ETCVersary from "./components/etcVersary";
import Agenda from "./components/agenda/Agenda";
import Speakers from "./components/speakers/Speakers";
import Mentors from "./components/mentors/Mentors";
import Sponsors from "./components/sponsors/sponsors";
import AboutEtc from "./components/AboutETC";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <ETCVersary></ETCVersary>
      <Agenda></Agenda>
      <Speakers></Speakers>
      <Mentors></Mentors>
      <Sponsors></Sponsors>
      <AboutEtc></AboutEtc>
      <Footer></Footer>
    </>
  );
}

export default App;
