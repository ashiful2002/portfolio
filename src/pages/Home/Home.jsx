import React from "react";
import Projects from "./Section/Projects/Projects";
import Skills from "./Section/Skills/Skills";
import Hero from "./Section/Hero";
import Services from "./Section/Services";
import AboutMe from "./Section/About/About";
import Contact from "./Section/Contact/Contact";

const Home = () => {
  return (
    <div className="mx-auto w-full dark:bg-gray-900">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
