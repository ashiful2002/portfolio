import React from "react";
import Projects from "./Section/Projects";
import Skills from "./Section/Skills";
import Hero from "./Section/Hero";

const Home = () => {
  return (
    <>
      <Hero />
   
      
      {/* <Features /> */}
      <Skills />
      <Projects />
    </>
  );
};

export default Home;