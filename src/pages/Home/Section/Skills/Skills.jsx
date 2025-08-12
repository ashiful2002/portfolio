// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaGitAlt,
//   FaDatabase,
// } from "react-icons/fa";

// const skills = [
//   { id: 1, icon: <FaReact size={50} color="#61DBFB" />, name: "React" },
//   { id: 2, icon: <FaNodeJs size={50} color="#3C873A" />, name: "Node.js" },
//   { id: 3, icon: <FaHtml5 size={50} color="#E44D26" />, name: "HTML5" },
//   { id: 4, icon: <FaCss3Alt size={50} color="#264de4" />, name: "CSS3" },
//   { id: 5, icon: <FaJsSquare size={50} color="#F0DB4F" />, name: "JavaScript" },
//   { id: 6, icon: <FaGitAlt size={50} color="#F05032" />, name: "Git" },
//   { id: 7, icon: <FaDatabase size={50} color="#f29111" />, name: "Databases" },
// ];

// const scrollVariants = {
//   leftToRight: {
//     animate: { x: ["-50%", "0%"] },
//   },
//   rightToLeft: {
//     animate: { x: ["0%", "-50%"] },
//   },
// };

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="mx-auto my-12 max-w-7xl scroll-mt-16 space-y-10 overflow-hidden p-6"
//     >
//       <h2 className="heading mb-6">Skills</h2>

//       {/* Row 1: left to right */}
//       <motion.div
//         className="flex gap-10"
//         variants={scrollVariants.leftToRight}
//         animate="animate"
//         transition={{
//           repeat: Infinity,
//           duration: 15,
//           ease: "linear",
//         }}
//       >
//         {[...skills, ...skills].map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center text-center"
//             title={skill.name}
//           >
//             {skill.icon}
//             <span className="mt-2 text-sm font-medium">{skill.name}</span>
//           </div>
//         ))}
//       </motion.div>

//       {/* Row 2: right to left */}
//       <motion.div
//         className="flex gap-10"
//         variants={scrollVariants.rightToLeft}
//         animate="animate"
//         transition={{
//           repeat: Infinity,
//           duration: 15,
//           ease: "linear",
//         }}
//       >
//         {[...skills, ...skills].map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center text-center"
//             title={skill.name}
//           >
//             {skill.icon}
//             <span className="mt-2 text-sm font-medium">{skill.name}</span>
//           </div>
//         ))}
//       </motion.div>

//       {/* Row 3: left to right */}
//       <motion.div
//         className="flex gap-10"
//         variants={scrollVariants.leftToRight}
//         animate="animate"
//         transition={{
//           repeat: Infinity,
//           duration: 15,
//           ease: "linear",
//         }}
//       >
//         {[...skills, ...skills].map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center text-center"
//             title={skill.name}
//           >
//             {skill.icon}
//             <span className="mt-2 text-sm font-medium">{skill.name}</span>
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import SkillsDetails from "./SkillsDetails";

const skills = [
  { id: 1, icon: <FaReact size={50} color="#61DBFB" />, name: "React" },
  { id: 2, icon: <FaNodeJs size={50} color="#3C873A" />, name: "Node.js" },
  { id: 3, icon: <FaHtml5 size={50} color="#E44D26" />, name: "HTML5" },
  { id: 4, icon: <FaCss3Alt size={50} color="#264de4" />, name: "CSS3" },
  { id: 5, icon: <FaJsSquare size={50} color="#F0DB4F" />, name: "JavaScript" },
  { id: 6, icon: <FaGitAlt size={50} color="#F05032" />, name: "Git" },
  { id: 7, icon: <FaDatabase size={50} color="#f29111" />, name: "Databases" },
];

const scrollVariants = {
  leftToRight: {
    animate: { x: ["-50%", "0%"] },
  },
  rightToLeft: {
    animate: { x: ["0%", "-50%"] },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto my-12 scroll-mt-16 space-y-10 overflow-hidden p-6"
    >
      <h2 className="heading mb-6">Skills</h2>

      <motion.div
        initial={{ y: -600 }}
        animate={{ x: 0, y: 0 }}
        transition={{
          duration: 3,
          ease: "easeInOut", // equally smooth start and end
        }}
        className="container"
      >
        <SkillsDetails />
      </motion.div>
      {/* Bottom Row: scroll right to left */}
      <marquee>
        <div
          className="flex gap-10"
          variants={scrollVariants.rightToLeft}
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
              title={skill.name}
            >
              {skill.icon}
              <span className="mt-2 text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </marquee>
    </section>
  );
};

export default Skills;
