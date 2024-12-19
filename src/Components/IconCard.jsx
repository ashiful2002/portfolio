import React from "react";
import { FaHome, FaUser, FaCog, FaBell } from "react-icons/fa";
import { icons } from "../constants/icons";

const IconCards = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {icons.map(({ id, name, icon: Icon }) => (
        <div key={id}>
          <Icon size={40} className="tetx" />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default IconCards;
