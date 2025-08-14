import { motion } from "framer-motion";
import ThreeBackground from "./ThreeBackground";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0, y: 0 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      className="relative my-4 flex flex-col items-center justify-center overflow-hidden rounded p-4 shadow-md duration-300 hover:shadow-xl dark:shadow-gray-700"
    >
      {/* Three.js animated background */}
      <ThreeBackground />

      {/* Foreground image */}
      <img
        src="https://i.ibb.co.com/tTHFhyPS/ashiful.png"
        alt="Ashiful Islam"
        className="absolute z-10 h-[300px] w-[300px] rounded-full object-cover"
      />

      <p className="badge relative z-10 ml-[110px] mt-[290px] bg-secondary-color font-thin dark:bg-secondary-color/90 text-white">
        Developer
      </p>
    </motion.div>
  );
}
