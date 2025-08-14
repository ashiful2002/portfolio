import React from "react";
import resume from "../../../assets/resume/Ashiful_Islam_Resume.pdf";
import { aboutDetails } from "../../../Constants/Index";
import Socials from "./Socials.jsx";
import Lottie from "lottie-react";
import coding from "../../../assets/coding.json";
import Typewriter from "typewriter-effect";
import { MdDownloadForOffline } from "react-icons/md";

const Hero = () => {
  return (
    <div
      id="home"
      className="scroll-mt-20 text-gray-900 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100"
    >
      <div className="flex flex-col items-center justify-center rounded p-2 xl:flex-row">
        <div className="xl:w-1/2">
          <div className="mx-auto h-[350px] w-[350px] md:h-[500px] md:w-[700px]">
            <Lottie animationData={coding} loop={true} />
          </div>
        </div>

        <div className="md:text-right xl:w-1/2">
          {aboutDetails.map((item, index) => (
            <div key={index} className="mt-4">
              <h2 className="text-3xl font-bold capitalize dark:text-white">
                {item.name}
              </h2>

              <h5 className="mt-1 text-lg text-gray-700 dark:text-gray-300">
                <Typewriter
                  options={{
                    strings: item.titles,
                    autoStart: true,
                    loop: true,
                    cursorClassName: "Typewriter__cursor dark:text-gray-300",
                  }}
                />
              </h5>

              <a
                href={resume}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded bg-secondary-color px-2 py-2 text-white no-underline transition hover:bg-secondary-color/80 md:px-4 dark:hover:bg-secondary-color/90"
              >
                <span>Download Resume</span>
                <MdDownloadForOffline className="inline rounded-full bg-white text-xl text-primary-color dark:bg-gray-100" />
              </a>

              <p className="mt-3 text-justify tracking-tight text-gray-800 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Socials />
    </div>
  );
};

export default Hero;
