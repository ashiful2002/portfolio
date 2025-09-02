import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaJsSquare,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiVercel,
  SiPostman,
  SiFirebase,
  SiVisualstudiocode,
  SiReactbootstrap,
  SiMongodb,
} from "react-icons/si";

const SkillsDetails = () => {
  const [skills, setSkills] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "HTML5", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-4xl text-sky-400" />,
      },
      {
        name: "JavaScript",
        icon: <FaJsSquare className="text-4xl text-yellow-400" />,
      },
      { name: "React JS", icon: <FaReact className="text-4xl text-sky-400" /> },
      {
        name: "React Bootstrap",
        icon: <SiReactbootstrap className="text-4xl text-[#41e0fd]" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-4xl dark:text-white" />,
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-4xl text-green-500" />,
      },
      {
        name: "Express.js",
        icon: (
          <SiExpress className="text-4xl text-gray-700 dark:text-gray-300" />
        ),
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-4xl text-green-700" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-4xl dark:text-white" />,
      },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-500" /> },
      {
        name: "GitHub",
        icon: <FaGithub className="text-4xl dark:text-white" />,
      },
      { name: "NPM", icon: <FaNpm className="text-4xl text-red-600" /> },
      {
        name: "Vercel",
        icon: <SiVercel className="text-4xl dark:text-white" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-4xl text-orange-500" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-4xl text-yellow-500" />,
      },
      {
        name: "VS Code",
        icon: <SiVisualstudiocode className="text-4xl text-blue-500" />,
      },
      { name: "Figma", icon: <FaFigma className="text-4xl text-pink-500" /> },
    ],
  };

  return (
    <div className="container mx-auto my-12 max-w-7xl p-6 text-center">
      {/* Buttons */}
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={`mb-4 rounded-md px-4 py-2 font-semibold transition duration-200 ${
              skills === category
                ? "bg-sky-500 text-white"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
            }`}
            onClick={() => setSkills(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {skillsData[skills].map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center rounded-xl bg-white/30 p-4 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/40 hover:shadow-xl dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="transition-transform duration-300 group-hover:scale-125">
              {React.cloneElement(skill.icon, {
                className: `${skill.icon.props.className} transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]`,
              })}
            </div>
            <p className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsDetails;
