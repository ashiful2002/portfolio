import React from "react";
import { motion } from "motion/react";
import Socials from "../Socials";
import ProfileCard from "./ProfileCard";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="container mx-auto my-12 max-w-7xl scroll-mt-16 p-6 text-gray-900 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100"
    >
      <h2 className="heading">About Me</h2>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 1. Image */}
        <ProfileCard />

        {/* 2. Text */}
        <motion.div
          initial={{ x: +300 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="rounded bg-gray-50 p-4 shadow-md duration-300 hover:shadow-xl dark:bg-gray-800"
        >
          <p className="mb-4 text-justify leading-relaxed text-gray-800 dark:text-gray-200">
            1. Hi, I'm <strong>Ashiful Islam</strong> — a passionate web
            developer with a love for crafting clean, efficient, and
            user-friendly digital experiences. My programming journey began
            several years ago when I first discovered the magic of turning ideas
            into reality through code. Since then, I’ve dedicated myself to
            mastering web technologies, continuously learning and experimenting
            to grow as a developer.
          </p>

          <p className="mb-4 text-justify leading-relaxed text-gray-800 dark:text-gray-200">
            2. I truly enjoy building{" "}
            <em>dynamic websites and web applications</em>
            that not only look great but also solve real-world problems. Whether
            it’s designing a smooth user interface or optimizing backend logic,
            I thrive in creating seamless experiences that delight users.
            Working on projects that challenge me to learn new skills or think
            creatively is where I find the most joy.
          </p>
        </motion.div>
      </div>

      {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ y: 600 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="rounded bg-gray-50 p-4 shadow-md duration-300 hover:shadow-xl dark:bg-gray-800"
        >
          <p className="mb-4 text-justify leading-relaxed text-gray-800 dark:text-gray-200">
            3. Outside of programming, I’m a firm believer in a balanced life. I
            enjoy <strong>playing sports</strong>, especially football and
            badminton, which help me stay active and sharp. I’m also passionate
            about <strong>painting and digital art</strong> — expressing myself
            through colors and creativity gives me a fresh perspective that
            often fuels my problem-solving skills in coding. When I’m not coding
            or creating art, I love spending time with friends, exploring new
            places, and discovering interesting books and podcasts.
          </p>

          <p className="text-justify leading-relaxed text-gray-800 md:hidden dark:text-gray-200">
            4. In short, I’m a curious, dedicated, and creative person who loves
            blending technology and art to make meaningful things. I believe the
            best work comes when you bring your whole self into it — and that’s
            exactly what I strive to do every day.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 600 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="hidden rounded bg-gray-50 p-4 shadow-md duration-300 hover:shadow-xl md:block dark:bg-gray-800"
        >
          <p className="text-justify leading-relaxed text-gray-800 dark:text-gray-200">
            4. In short, I’m a curious, dedicated, and creative person who loves
            blending technology and art to make meaningful things. I believe the
            best work comes when you bring your whole self into it — and that’s
            exactly what I strive to do every day.
          </p>
        </motion.div>
      </div> */}
    </section>
  );
};

export default AboutMe;
