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
  // console.log(projects);

  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <div
        className="dark:text-gray-50-100 container mx-auto my-12 mt-2 max-w-7xl scroll-mt-20 dark:bg-gray-900"
        id="projects"
      >
        <h2 className="heading">Projects</h2>
        <p className="px-2">No projects found to display.</p>
      </div>
    );
  }

  return (
    <div
      className="container mx-auto my-12 max-w-7xl scroll-mt-16 space-y-10 overflow-hidden py-6 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100"
      id="projects"
    >
      <div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="heading">Projects</h2>
          <p className="px-2 text-gray-800 dark:text-gray-300">
            Explore my latest work here
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-2 rounded sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
          {projects.map((item) => (
            <div
              key={item.id}
              className="m-2 mb-2 rounded-md pb-2 shadow-xl transition-colors duration-300 dark:border dark:border-gray-700 dark:bg-gray-800 dark:shadow"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.title}`}
              >
                <img
                  src={item.img}
                  alt={item.title || "Project image"}
                  className="max-h-[300px] w-full rounded-md object-cover p-2"
                />
              </a>

              <div>
                <h2 className="px-2 capitalize dark:text-white">
                  {item.title}
                </h2>
                <p className="px-2 text-sm text-gray-800 dark:text-gray-300">
                  {truncateWords(item.desc, 15)}
                </p>
                <div className="px-2 pb-2">
                  <Link
                    className="mb-4 rounded-md bg-primary-color px-3 py-1 text-white no-underline shadow-md transition duration-200 hover:bg-sky-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
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
