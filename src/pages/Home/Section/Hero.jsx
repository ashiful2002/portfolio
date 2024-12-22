import React from "react";

import heroImage from "../../../assets/hero.jpg";
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
              src={heroImage}
              alt="heroImage"
              srcset=""
              className="w-[450px] rounded-xl p-2 md:w-full"
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
          <div className="capitalize">
            <h2 className="bg-primary-color text-center">heading</h2>
            <p className="bg-secondary-color rounded p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              enim odio dolore, ducimus inventore velit? Natus quisquam, alias
              quam in nemo mollitia magnam, quidem laborum rerum quibusdam ex
              obcaecati, quas itaque optio. Vel tenetur nisi nostrum rerum ipsa
              ratione debitis!
            </p>
            <Button>click</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
