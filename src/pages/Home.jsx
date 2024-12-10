import React from "react";
import Section from "../Components/Title.jsx/Section";
import heroImage from "../assets/hero.jpg";
import { aboutDetails } from "../Constants/Index";
import Projects from "./Section/Projects";
const Home = () => {
  return (
    <>
    <Section>
      <h1 className="heading">home page</h1>
      <div>
        <div className="flex items-center justify-center flex-col xl:flex-row  bg-slate-600 rounded  text-neutral-200 p-4">
          <div className="xl:w-1/2">
            <img
              src={heroImage}
              alt="heroImage"
              srcset=""
              className="rounded-xl p-2 w-[450px]"
            />
          </div>

          <div className="xl:w-1/2">
            {aboutDetails.map((item, index) => (
              <div key={index} className="mt-4">
                <h2 className="text-capitalize">{item.name}</h2>
                <h5>{item.title}</h5>
                <p className="text-justify tracking-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </Section>
    <Projects />
    </>
  );
};

export default Home;
