import React from "react";

const Section = ({children, classname, id}) => {
  return (
    <div className={`container  px-0 mx-auto my-3 ${classname}`} id={id}>
      {children}
    </div>
  );
}; 

export default Section;
