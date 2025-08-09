import React from "react";
import { projects } from "../../../Constants/Index";
import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
const Projects = () => {
  return (
    <div className="mt-20" id="projects">
      {/* <PageTitle heading="projects" /> */}
      <div>
        <div className="">
          <div className="flex flex-col items-center justify-center">
            <h2>Projects</h2>
            <p className="px-2">
              Some of my latest projects are here. you can get idea what i am
              doing now.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 rounded md:grid-cols-3 xl:grid-cols-4">
            {projects &&
              projects.map((item) => (
                <div
                  className="m-2 mb-2 rounded-md border shadow"
                  key={item.id}
                >
                  <a
                    href={item.url}
                    className="text-neutral-800 no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-h-[300px] w-full object-cover p-2"
                    />

                    <div className="">
                      <h2 className="px-2 capitalize">{item.title}</h2>
                      <p className="px-2">{item.desc}</p>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
