// src/components/IconCards.js
import React from "react";
import {icons} from "../constants/icons";

const IconCards = () => {
  return (
    <div className="flex gap-4 flex-wrap">

      {icons.map(({ id, name, icon: Icon }) => (
        <div key={id}>
          <Icon size={40} className="tetx"/>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default IconCards;
