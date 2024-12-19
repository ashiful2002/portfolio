import React from "react";

const Card = ({ children }) => {
  return (
    <div className="border w-[300px] mx-auto overflow-hidden shadow-sm rounded mb-3 p-2 bg-[#006A55] text-white hover:bg-teal-800 transition-all duration-100">
      {children}
    </div>
  );
};

export default Card;
