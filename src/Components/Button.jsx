import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-violet-500 px-3 py-1 rounded font-semibold capitalize tracking-wider min-w-10 my-3">
      {children}
    </button>
  );
};

export default Button;
