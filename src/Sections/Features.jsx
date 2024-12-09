import React from "react";

import heroImage from "../assets/react.svg";
import PageTitle from "../Components/Title.jsx/PageTitle";
const Features = () => {
  return (
    <div id="link2">
      <div className="bg-lime-100">
        <div className="container mx-auto">
          <PageTitle heading="second section"  />
          <div className=" flex items-center flex-row-reverse justify-center gap-5">
            <div>
              <img width={400} src={heroImage} alt="heroImage" />
            </div>
            <div>
              <h1 className="capitalize">heading text</h1>
              <p>
                little description Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Necessitatibus, aliquid, nulla ullam esse ab
                repellendus, delectus veniam rerum quam vero rem nemo quia
                facere dolorem minus quisquam consequatur optio eius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
