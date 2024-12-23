import React from "react";
import Footer from "./Footer";
import { navItems } from "../Constants/Index";
import { Link, Outlet } from "react-router-dom";
import { motion } from "motion/react"

const MotionHeader = () => {
  return (
    <div className="">
      <div className="container flex items-center justify-between">
        <div className="">
          <Link to="/">
            <h1 className="rounded bg-blue-600 px-2 text-white">A. Islam</h1>{" "}
          </Link>
        </div>
        <div>
          <motion.div className="capitalize">
            {navItems.map(({ url, title, id }) => (
              <Link key={id} to={url} className="mx-2 no-underline flex py-3 md:inline">
                {title}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MotionHeader;
