import React from "react";
import Section from "../../Components/Title.jsx/Section";
import PageTitle from "../../Components/Title.jsx/PageTitle";
import { projects } from "../../Constants/Index";
const Projects = () => {
  return (
    <Section id="projects">
      <PageTitle heading="projects" />
      <div>
        <div className="">
          <p className="px-2">There are some projects i've recently done</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border rounded">
            {projects &&
              projects.map((item) => (
                <div
                  className="border rounded-md shadow m-2 mb-2"
                  key={item.id}
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt={item.title} className="p-2" />
                  </a>
                  <div className="">
                    <h2 className="px-2 capitalize">{item.title}</h2>
                    <p className="px-2 ">{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
