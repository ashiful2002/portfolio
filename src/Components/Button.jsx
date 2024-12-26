import React from "react";

const Button = ({ children, varient, href, onClick, disabled, className }) => {
  const classes =
    "my-3 min-w-10 rounded transition-all duration-300 px-2 py-1 font-semibold capitalize tracking-wider text-white transition-colors";
  const classes2 =
    "py-2 px-5 bg-violet-500 text-white  font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75";

  const renderbtn = () => (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${classes} ${className} bg-violet-500 hover:bg-violet-600`}
    >
      {children}
    </button>
  );
  const rendersecondaryBtn = () => (
    <button
      onClick={onClick}
      varient={varient}
      className={`${classes} ${className} bg-red-600 hover:bg-red-700`}
    >
      {children}
    </button>
  );
  const renderLink = () => (
    <button
      onClick={onClick}
      href={href}
      className={`${classes} ${className} bg-pink-500 underline`}
    >
      {children}
    </button>
  );

  return varient ? rendersecondaryBtn() : renderbtn();
};

export default Button;
