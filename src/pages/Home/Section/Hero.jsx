import React from "react";
import resume from "../../../assets/resume/Ashiful_Islam_Resume.pdf";
import { aboutDetails } from "../../../Constants/Index";
import Section from "../../../Components/Title.jsx/Section";
import Button from "../../../Components/Button.jsx";
import Socials from "./Socials.jsx";

const Hero = () => {
  return (
    <>
      <div id="home" className="mt-24">
        <div className="mt-[70px] flex flex-col items-center justify-center rounded p-2 xl:flex-row">
          <div className="xl:w-1/2">
            <img
              src="https://i.ibb.co.com/TMvvzPgs/9-DEE4-F7-C-029-A-4-A3-A-9-B9-C-48861-DD72643.png"
              alt="heroImage"
              srcset=""
              className="w-[350px] rounded-xl ring-violet-600 md:w-[500px]"
            />
          </div>

          <div className="md:text-right xl:w-1/2">
            {aboutDetails.map((item, index) => (
              <div key={index} className="mt-4">
                <h2 className="text-capitalize">{item.name}</h2>
                <h5>{item.title}</h5>
                <>
                  <Button className="mt-0 text-sm">
                    <a
                      href={resume}
                      type="file"
                      className="text-white no-underline"
                    >
                      Download Resume
                    </a>
                  </Button>
                </>
                <p className="text-justify tracking-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <Socials />
      </div>
    </>
  );
};

export default Hero;
