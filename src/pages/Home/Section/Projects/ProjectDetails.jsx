import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  FaCheckCircle,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiAntdesign,
  SiReactbootstrap,
  SiVercel,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-sky-400" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-gray-700 dark:text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-700" />,
  JavaScript: <FaJsSquare className="text-yellow-400" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  HTML: <FaHtml5 className="text-orange-600" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Git: <FaGitAlt className="text-orange-500" />,
  GitHub: <FaGithub className="text-black dark:text-white" />,
  Vercel: <SiVercel className="text-black dark:text-white" />,
  Postman: <SiPostman className="text-orange-500" />,
  Figma: <FaFigma className="text-pink-500" />,
  "VS Code": <SiVisualstudiocode className="text-blue-500" />,
  "React Bootstrap": <SiReactbootstrap className="text-[#41e0fd]" />,
  "Ant Design": <SiAntdesign className="text-blue-500" />, // Added
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
    // <section className="mx-auto max-w-7xl scroll-mt-16 px-6 py-24 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
    //   <h2 className="heading mb-6 dark:text-white">Project Details</h2>

    //   <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
    //     {/* Project Image */}
    //     <div className="relative mt-5">
    //       <img
    //         src={project.img}
    //         alt={project.title}
    //         className="max-w-full rounded-lg object-contain shadow-lg dark:shadow-gray-700"
    //       />
    //     </div>

    //     {/* Project Details */}
    //     <div className="space-y-6 xl:mt-10">
    //       <h2 className="heading text-left dark:text-white">{project.title}</h2>
    //       <p className="text-justify leading-relaxed text-gray-800 dark:text-gray-300">
    //         {project.desc}
    //       </p>

    //       <div className="flex w-6/12 flex-col gap-2 sm:flex-row sm:gap-5">
    //         <a
    //           href={project.url}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="inline-flex items-center gap-2 rounded bg-primary-color px-3 py-2 text-white no-underline transition-colors duration-200 hover:bg-secondary-color"
    //         >
    //           <FiExternalLink size={18} />
    //           Visit Project
    //         </a>
    //         {project.repoUrl && (
    //           <a
    //             href={project.repoUrl}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="inline-flex items-center gap-2 rounded bg-secondary-color px-3 py-2 text-white no-underline transition-colors duration-200 hover:bg-primary-color"
    //           >
    //             <FaGithub size={18} />
    //             Source Code
    //           </a>
    //         )}
    //       </div>

    //       {/* Tech Stack */}
    //       <div>
    //         <h3 className="mb-2 text-lg font-semibold dark:text-white">
    //           Tech Stack
    //         </h3>
    //         <ul className="flex flex-wrap gap-2">
    //           {project.techStack?.map((tech, idx) => (
    //             <li
    //               key={idx}
    //               className="flex items-center gap-1 rounded bg-gray-200 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-100"
    //             >
    //               {techIcons[tech] || null} {tech}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Features */}
    //       <div>
    //         <h3 className="mb-2 text-lg font-semibold dark:text-white">
    //           Features
    //         </h3>
    //         <ul className="list-inside list-disc space-y-2">
    //           {project.features?.map((feature, idx) => (
    //             <li key={idx} className="flex items-start gap-2">
    //               <FaCheckCircle className="mt-1 text-primary-color" />
    //               <span className="text-gray-800 dark:text-gray-300">
    //                 {feature}
    //               </span>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* additional  Features */}
    //       <div>
    //         <h3 className="mb-2 text-lg font-semibold dark:text-white">
    //           Aditional Features
    //         </h3>
    //         <ul className="list-inside list-disc space-y-2">
    //           {project.additionalFeatures?.map((feature, idx) => (
    //             <li key={idx} className="flex items-start gap-2">
    //               <FaCheckCircle className="mt-1 text-secondary-color" />
    //               <span className="text-gray-800 dark:text-gray-300">
    //                 {feature}
    //               </span>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="mx-auto max-w-7xl scroll-mt-16 px-6 py-24 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
  <h2 className="heading mb-6 dark:text-white">Project Details</h2>

  <div className="flex flex-col lg:flex-row gap-10">
    {/* Sticky Project Image */}
    <div className="lg:w-1/2 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
      <img
        src={project.img}
        alt={project.title}
        className="max-w-full rounded-lg object-contain shadow-lg dark:shadow-gray-700 sticky"
      />
    </div>

    {/* Project Details */}
    <div className="lg:w-1/2 space-y-6">
      <h2 className="heading text-left dark:text-white">{project.title}</h2>
      <p className="text-justify leading-relaxed text-gray-800 dark:text-gray-300">
        {project.desc}
      </p>

      <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-5">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded bg-primary-color px-3 py-2 text-white no-underline transition-colors duration-200 hover:bg-secondary-color"
        >
          <FiExternalLink size={18} />
          Visit Project
        </a>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-secondary-color px-3 py-2 text-white no-underline transition-colors duration-200 hover:bg-primary-color"
          >
            <FaGithub size={18} />
            Source Code
          </a>
        )}
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="mb-2 text-lg font-semibold dark:text-white">
          Tech Stack
        </h3>
        <ul className="flex flex-wrap gap-2">
          {project.techStack?.map((tech, idx) => (
            <li
              key={idx}
              className="flex items-center gap-1 rounded bg-gray-200 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-100"
            >
              {techIcons[tech] || null} {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Features */}
      <div>
        <h3 className="mb-2 text-lg font-semibold dark:text-white">Features</h3>
        <ul className="list-inside list-disc space-y-2">
          {project.features?.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="mt-1 text-primary-color" />
              <span className="text-gray-800 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional Features */}
      <div>
        <h3 className="mb-2 text-lg font-semibold dark:text-white">
          Additional Features
        </h3>
        <ul className="list-inside list-disc space-y-2">
          {project.additionalFeatures?.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="mt-1 text-secondary-color" />
              <span className="text-gray-800 dark:text-gray-300">{feature}</span>
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
