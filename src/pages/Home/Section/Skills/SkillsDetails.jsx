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
      { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
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
        icon: <SiNextdotjs className="text-4xl text-black" />,
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-4xl text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-4xl text-gray-700" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-4xl text-green-700" />,
      },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-4xl text-black" /> },
      { name: "NPM", icon: <FaNpm className="text-4xl text-red-600" /> },
      { name: "Vercel", icon: <SiVercel className="text-4xl text-black" /> },
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
    <div className="p-6 text-center">
      {/* <h2 className="mb-6 text-3xl font-bold">My Skills</h2> */}

      {/* Buttons */}
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={`rounded-md px-4 py-2 mb-4 font-semibold transition duration-200 ${
              skills === category
                ? "bg-sky-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
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
            className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md transition hover:shadow-lg"
          >
            {skill.icon}
            <p className="mt-2 text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsDetails;
