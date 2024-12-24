import React from "react";

import heroImage from "../../../assets/hero.jpg";
import heroImage2 from "../../../assets/heroimage2.jpg";
import heroImage3 from "../../../assets/heroimage3.png";
import { aboutDetails } from "../../../Constants/Index";
import Section from "../../../Components/Title.jsx/Section";
import Button from "../../../Components/Button.jsx";

const Hero = () => {
  return (
    <Section id="home">
      <div>
        <div className="flex flex-col items-center justify-center rounded bg-slate-600 p-2 text-neutral-100 xl:flex-row">
          <div className="xl:w-1/2">
            <img
              src={heroImage3}
              alt="heroImage"
              srcset=""
              className="w-[450px] rounded-xl p-2 md:w-[500px]"
            />
          </div>

          <div className="md:text-right xl:w-1/2">
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
  );
};

export default Hero;
