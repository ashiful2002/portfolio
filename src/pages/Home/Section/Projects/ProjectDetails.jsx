import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  FaCheckCircle,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiBootstrap,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const techIcons = {
  React: <FaReact className="mr-1 inline text-blue-400" />,
  "Node.js": <FaNodeJs className="mr-1 inline text-green-600" />,
  JavaScript: <FaJsSquare className="mr-1 inline text-yellow-400" />,
  HTML: <FaHtml5 className="mr-1 inline text-orange-500" />,
  CSS: <FaCss3Alt className="mr-1 inline text-blue-500" />,
  Redux: <SiRedux className="mr-1 inline text-purple-600" />,
  "Tailwind CSS": <SiTailwindcss className="mr-1 inline text-sky-400" />,
  "Next.js": <SiNextdotjs className="mr-1 inline text-black" />,
  Firebase: <SiFirebase className="mr-1 inline text-yellow-500" />,
  Bootstrap: <SiBootstrap className="mr-1 inline text-purple-500" />,
  Express: <SiExpress className="mr-1 inline text-gray-700" />,
  MongoDB: <SiMongodb className="mr-1 inline text-green-700" />,
};

const ProjectDetails = () => {
  const projects = useLoaderData();
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <div className="mt-20 text-center text-xl font-semibold">
        Project not found
      </div>
    );

  return (
    <section className="mx-auto max-w-7xl scroll-mt-16 px-6 py-24">
      <h2 className="heading mb-6">Project Details</h2>

      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
        {/* Project Image */}
        <div className="flex items-center justify-center">
          <img
            src={project.img}
            alt={project.title}
            className="max-w-full rounded-lg object-contain shadow-lg"
          />
        </div>

        {/* Project Details */}
        <div className="space-y-6 xl:mt-10">
          <h2 className="heading text-left">{project.title}</h2>
          <p className="text-justify leading-relaxed">{project.desc}</p>

          <div className="flex gap-5">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-primary-color px-3 py-2 text-white transition-colors duration-200 hover:bg-secondary-color"
            >
              Visit Project
            </a>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-secondary-color px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-color"
              >
               Source Code
              </a>
            )}
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">Tech Stack</h3>
            <ul className="flex flex-wrap gap-2">
              {project.techStack?.map((tech, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-1 rounded bg-gray-200 px-3 py-1 text-sm text-gray-700"
                >
                  {techIcons[tech] || null} {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">Features</h3>
            <ul className="list-inside list-disc space-y-2">
              {project.features?.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-primary-color" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
