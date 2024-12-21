import React from "react";

const Section = ({ children, classname, id }) => {
  return (
    <div className={`${classname} container mx-auto my-3 px-0`} id={id}>
      {children}
    </div>
  );
};

export default Section;
