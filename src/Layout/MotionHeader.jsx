import React, { useState } from "react";
import Footer from "./Footer";
import { navItems } from "../Constants/Index";
import { Link, Outlet } from "react-router-dom";
import { motion } from "motion/react";
import { GiCrossMark } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

const MotionHeader = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleMenuIteem = () => {
    setToggle(false);
  };
  return (
    <div className="">
      <div className="container flex items-center justify-between mt-2"  >
        <div className="">
          <Link to="/" className="no-underline">
            <h1 className="rounded bg-blue-600 px-2 text-white">A. Islam</h1>{" "}
          </Link>
        </div>
        <div>
          {
            <div onClick={handleToggle} className="mr-4">
              {toggle ? (
                <GiCrossMark className="text-2xl md:hidden" />
              ) : (
                <FaBars className="text-2xl md:hidden" />
              )}
            </div>
          }
          <motion.div
            className={`${
              toggle
                ? "absolute -ml-[400px] mt-10 flex w-[440px]  overflow-hidden flex-col items-center rounded-xl justify-center bg-slate-800"
                : "hidden"
            } list-none md:flex md:w-auto md:items-center md:me-auto`}
          >
            {navItems.map(({ url, title, id }) => (
              <Link
                key={id}
                to={url}
                onClick={handleMenuIteem}
                className="w-full cursor-pointer rounded p-3 capitalize no-underline   "
              >
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
