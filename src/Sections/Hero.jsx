import React from "react";

import heroImage from "../assets/react.svg";
import PageTitle from "../Components/Title.jsx/PageTitle";
const Hero = () => {
  return (

    <div className="bg-amber-100">

    
    <div className="container mx-auto" id="link1">
        <PageTitle heading="hero section " title="home"/>
      <div className=" flex items-center justify-center gap-5">
        <div>
          <img width={400} src={heroImage} alt="heroImage" />
        </div>
        <div>
          <h1 className="capitalize">heading text</h1>
          <p>
            little description Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Necessitatibus, aliquid, nulla ullam esse ab
            repellendus, delectus veniam rerum quam vero rem nemo quia facere
            dolorem minus quisquam consequatur optio eius.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
