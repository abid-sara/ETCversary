import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import ETCVersary from "./components/etcVersary";
import Agenda from "./components/agenda/Agenda";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <ETCVersary></ETCVersary>
    </>
  );
}

export default App;
