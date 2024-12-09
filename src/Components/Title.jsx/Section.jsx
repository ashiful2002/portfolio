import React from "react";

const Section = ({children, classname, id}) => {
  return (
    <div className={`container mx-auto my-3 ${classname}`} id={id}>
      {children}
    </div>
  );
}; 

export default Section;
