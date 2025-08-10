import React from "react";
import { projects } from "../../../Constants/Index";
import { Link } from "react-router-dom";

const truncateWords = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const Projects = () => {
  return (
    <div className="mt-20" id="projects">
      <div>
        <div className="flex flex-col items-center justify-center">
          <h2>Projects</h2>
          <p className="px-2">Explore my latest work here</p>
        </div>

        <div className="grid grid-cols-1 gap-2 rounded md:grid-cols-3 xl:grid-cols-4">
          {projects &&
            projects.map((item) => (
              <div className="m-2 mb-2 rounded-md border shadow" key={item.id}>
                <a href={item.url}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-[300px] w-full object-cover p-2"
                  />
                </a>

                <div>
                  <h2 className="px-2 capitalize">{item.title}</h2>
                  <p className="px-2">{truncateWords(item.desc, 20)}</p>
                  <div className="px-2 pb-2">
                    <Link className="btn btn-primary btn-sm" to="">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
