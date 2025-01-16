import React from "react";
import { projects } from "../../../Constants/Index";
import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
const Projects = () => {
  return (
    <Section id="projects">
      <PageTitle heading="projects" />
      <div>
        <div className="">
          <p className="px-2">There are some projects i've recently done</p>

          <div className="grid grid-cols-1 gap-2 rounded border md:grid-cols-3">
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
                    <img src={item.img} alt={item.title} className="p-2" />

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
    </Section>
  );
};

export default Projects;
