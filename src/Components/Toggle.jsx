import React, { useState } from "react";
import { motion } from "motion/react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

import Button from "../Components/Button";

const Toggle = ({ children }) => {
  const [toggle, settoggle] = useState(false);
  const handleToggle = () => {
    settoggle(!toggle);
  };
  return (
    <div className="">
      <div className="">
        <Button onClick={handleToggle} className="mt-0 ">
          {toggle ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </Button>
        {toggle && <motion.p>{children}</motion.p>}
      </div>
    </div>
  );
};

export default Toggle;
