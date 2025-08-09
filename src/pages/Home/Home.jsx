import React from "react";
import Projects from "./Section/Projects";
import Skills from "./Section/Skills";
import Hero from "./Section/Hero";
import Services from "./Section/Services";
import Testimonials from "./Section/Testimonials";
import Contact from "./Section/Contact";
import DiceGame from "../../Components/DiceGame";

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
