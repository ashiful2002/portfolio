import React from "react";
import Section from "../../Components/Title.jsx/Section";
import PageTitle from "../../Components/Title.jsx/PageTitle";
const Projects = () => {
  return (
    <Section id="projects">
      <PageTitle heading="projects" />
      <div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border rounded">
            <div className="border rounded-md shadow m-2 mb-5">
              {" "}
              <iframe
                src="https://engineershome.vercel.app/"
                width="375px"
                height="500px"
                frameborder="0"
              ></iframe>
            </div>
            <div className="border rounded-md shadow m-2 mb-5">
              {" "}
              <iframe
                src="https://helloshe.org/"
                width="375px"
                height="500px"
                frameborder="0"
              ></iframe>
            </div>
            <div className="border rounded-md shadow m-2 mb-5">
              {" "}
              <iframe
                src="https://photoholicah.vercel.app/"
                width="375px"
                height="500px"
                frameborder="0"
              ></iframe>
            </div>
            <div className="border rounded-md shadow m-2 mb-5">
              {" "}
              <iframe
                src="https://rswa-rowmari.vercel.app/"
                width="375px"
                height="500px"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
