import React from "react";
import resume from "../../../assets/resume/Ashiful_Islam_Resume.pdf";
import { aboutDetails } from "../../../Constants/Index";
import Section from "../../../Components/Title.jsx/Section";
import Button from "../../../Components/Button.jsx";
import Socials from "./Socials.jsx";
import Lottie from "lottie-react";
import coding from "../../../assets/coding.json";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div id="home" className="scroll-mt-20">
      <div className="flex flex-col items-center justify-center rounded p-2 xl:flex-row">
        <div className="xl:w-1/2">
          <div className="mx-auto h-[350px] w-[350px] md:h-[500px] md:w-[700px]">
            <Lottie animationData={coding} loop={true} />
          </div>
        </div>

        <div className="md:text-right xl:w-1/2">
          {aboutDetails.map((item, index) => (
            <div key={index} className="mt-4">
              <h2 className="capitalize">{item.name}</h2>
              {/* <h5>{item.title}</h5> */}
              <h5>
                <Typewriter
                  options={{
                    strings: item.titles,
                    autoStart: true,
                    loop: true,
                    cursorClassName: "Typewriter__cursor",
                  }}
                />
              </h5>
              <a
                href={resume}
                download
                className=":bg-blue-700 mt-2 inline-block rounded bg-secondary-color px-2 py-2 text-white no-underline transition md:px-4"
              >
                Download Resume
              </a>
              <p className="mt-3 text-justify tracking-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Hero;
