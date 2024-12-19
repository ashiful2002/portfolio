import React from "react";
import Projects from "./Section/Projects";
import Hero from "./Section/Hero";
import Skills from "./Section/Skills";
import Features from "../Sections/Features";

import SkillsDetails from "./Section/SkillsDetails";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Navigation />
      <IconCards /> */}
      <SkillsDetails />
      <Features />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
