import React from "react";
import Section from "../../Components/Title.jsx/Section";
import heroImage from "../../assets/hero.jpg";
import { aboutDetails } from "../../Constants/Index";

const Hero = () => {
  return (
    <Section id="home">
      <div>
        <div className="flex items-center justify-center flex-col xl:flex-row  bg-slate-600 rounded  text-neutral-100 p-2">
          <div className="xl:w-1/2">
            <img
              src={heroImage}
              alt="heroImage"
              srcset=""
              className="rounded-xl p-2 w-[450px] md:w-full"
            />
          </div>

          <div className="xl:w-1/2 md:text-right">
            {aboutDetails.map((item, index) => (
              <div key={index} className="mt-4">
                <h2 className="text-capitalize ">{item.name}</h2>
                <h5>{item.title}</h5>
                <p className="text-justify tracking-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
