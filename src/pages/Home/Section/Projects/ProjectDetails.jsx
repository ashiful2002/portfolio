import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { div } from "framer-motion/client";

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
    <section className="max-w- 7xl mx-auto scroll-mt-16 px-6 py-24">
      <h2 className="heading mb-6">Project Details</h2>

      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
        {/* Project Image */}
        <div className="m-32">
          <img
            src={project.img}
            alt={project.title}
            className="max-w-full rounded-lg object-contain shadow-lg"
          />
        </div>

        {/* Project Details */}
        <div className="-mt-32 space-y-6 xl:mt-24">
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
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-secondary-color px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-color"
            >
              Github Repo
            </a>
          </div>
          {/* Additional Details */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">Tech Stack</h3>
            <ul className="flex flex-wrap gap-2">
              {project.techStack?.map((tech, idx) => (
                <li
                  key={idx}
                  className="rounded bg-gray-200 px-3 py-1 text-sm text-gray-700"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Features</h3>
            <ul className="list-inside list-disc space-y-1 text-justify">
              {project.features?.map((feature, idx) => (
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary-color" />{" "}
                  <li className="list-none" key={idx}>
                    {feature}
                  </li>
                </span>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="mb-2 text-lg font-semibold">Role</h3>
            <p>{project.role || "N/A"}</p>
          </div> */}
          {/* 
          <div className="flex flex-wrap gap-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Date</h3>
              <p>{project.date || "N/A"}</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Duration</h3>
              <p>{project.duration || "N/A"}</p>
            </div>
          </div> */}

          {/* {project.collaborators && project.collaborators.length > 0 && (
            <div>
              <h3 className="mb-2 text-lg font-semibold">Collaborators</h3>
              <ul className="list-inside list-disc space-y-1">
                {project.collaborators.map((collab, idx) => (
                  <li key={idx}>{collab}</li>
                ))}
              </ul>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
