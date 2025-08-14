import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaNpm,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import SkillsDetails from "./SkillsDetails";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiReactbootstrap,
  SiTailwindcss,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

const skills = [
  {
    id: 0,
    name: "HTML5",
    icon: <FaHtml5 size={50} className="text-orange-600" />,
  },
  { id: 1, name: "CSS", icon: <FaCss3Alt size={50} color="#264de4" /> },
  {
    id: 2,
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={50} color="#38BDF8" />,
  },
  { id: 17, name: "Figma", icon: <FaFigma size={50} color="#F24E1E" /> },
  { id: 3, name: "JavaScript", icon: <FaJsSquare size={50} color="#F0DB4F" /> },
  { id: 4, name: "React JS", icon: <FaReact size={50} color="#61DBFB" /> },
  {
    id: 5,
    name: "React Bootstrap",
    icon: <SiReactbootstrap size={50} color="#41e0fd" />,
  },
  { id: 15, name: "Firebase", icon: <SiFirebase size={50} color="#FFCA28" /> },
  {
    id: 6,
    name: "Next.js",
    icon: <SiNextdotjs size={50} className="dark:text-white" />,
  },
  { id: 7, name: "Node.js", icon: <FaNodeJs size={50} color="#3C873A" /> },
  {
    id: 8,
    name: "Express.js",
    icon: <SiExpress size={50} className="dark:text-gray-300" />,
  },
  { id: 9, name: "MongoDB", icon: <SiMongodb size={50} color="#4DB33D" /> },
  { id: 10, name: "Git", icon: <FaGitAlt size={50} color="#F05032" /> },
  {
    id: 11,
    name: "GitHub",
    icon: <FaGithub size={50} className="dark:text-white" />,
  },
  { id: 12, name: "NPM", icon: <FaNpm size={50} color="#CB3837" /> },
  {
    id: 13,
    name: "Vercel",
    icon: <SiVercel size={50} className="dark:text-white" />,
  },
  { id: 14, name: "Postman", icon: <SiPostman size={50} color="#FF6C37" /> },
  {
    id: 16,
    name: "VS Code",
    icon: <SiVisualstudiocode size={50} color="#007ACC" />,
  },
];

const Skills = () => {
  // Scroll duration can be adjusted here
  const scrollDuration = 15; // slower: higher, faster: lower

  const scrollingVariants = {
    animate: {
      x: ["0%", "-20%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: scrollDuration,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section
      id="skills"
      className="mx-auto my-12 scroll-mt-16 space-y-10 overflow-hidden py-6 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100"
    >
      <h2 className="heading">Skills</h2>

      <motion.div
        initial={{ y: -600 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="mx-auto max-w-7xl"
      >
        <SkillsDetails />
      </motion.div>

      {/* Smooth Scrolling Skills */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex w-max gap-10"
          variants={scrollingVariants}
          animate="animate"
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="mx-4 flex flex-col items-center justify-center text-center"
              title={skill.name}
            >
              {skill.icon}
              <span className="mt-2 text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
