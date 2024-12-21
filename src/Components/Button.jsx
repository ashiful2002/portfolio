import React from "react";

const Button = ({ children, varient, href, onClick ,disabled }) => {
  
  const classes =
    "my-3 min-w-10 rounded  px-3 py-2 font-semibold capitalize tracking-wider text-white";
  const renderbtn = () => (
    <button disabled={disabled}
      onClick={onClick}
      className={`${classes} bg-violet-500 hover:bg-violet-600`}
    >
      {children}
    </button>
  );
  const rendersecondaryBtn = () => (
    <button
 
      onClick={onClick}
      varient={varient}
      className={`${classes} bg-red-600 hover:bg-red-700`}
    >
      {children}
    </button>
  );
  const renderLink = () => (
    <button
      onClick={onClick}
      href={href}
      className={`${classes} bg-pink-500 underline`}
    >
      {children}
    </button>
  );

  return varient ? rendersecondaryBtn() : renderbtn();
};

export default Button;
