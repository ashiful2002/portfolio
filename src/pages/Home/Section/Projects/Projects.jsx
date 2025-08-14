import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const truncateWords = (text, wordLimit) => {
  const words = text?.split(" ") || [];
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text || "";
};

const Projects = () => {
  const projects = useLoaderData();
  console.log(projects);

  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <div className="mx-auto mt-2 scroll-mt-20" id="projects">
        <h2 className="heading">Projects</h2>
        <p className="px-2">No projects found to display.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-2 scroll-mt-20" id="projects">
      <div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="heading">Projects</h2>
          <p className="px-2">Explore my latest work here</p>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-2 rounded sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
          {projects.map((item) => (
            <div className="m-2 mb-2 rounded-md border shadow pb-4" key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.title}`}
              >
                <img
                  src={item.img}
                  alt={item.title || "Project image"}
                  className="max-h-[300px] w-full object-cover p-2"
                />
              </a>

              <div>
                <h2 className="px-2 capitalize">{item.title}</h2>
                <p className="px-2">{truncateWords(item.desc, 15)}</p>
                <div className="px-2 pb-2">
                  <Link
                    className={`mb-4 rounded-md bg-sky-500 px-4 py-2 font-semibold text-white no-underline shadow-md transition duration-200 hover:bg-sky-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-300`}
                    to={`/project/${item.id}`}
                  >
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
