import React from "react";
import Projects from "./Section/Projects/Projects";
import Skills from "./Section/Skills/Skills";
import Hero from "./Section/Hero";
import Services from "./Section/Services";
import Testimonials from "./Section/Testimonials";
import Contact from "./Section/Contact";
import AboutMe from "./Section/About/About";

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
