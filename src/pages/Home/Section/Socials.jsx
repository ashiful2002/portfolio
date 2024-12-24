import React from "react";
import { SoicalMidea } from "../../../Constants/Index";

const Socials = () => {
  return (
    <>
      <div className="my-4 flex items-center justify-center gap-4">
        {SoicalMidea.map(({ id, url, icon: Icon, title }) => (
          <div key={id} className="">
            <a href={url}>
              <Icon className="text-2xl text-violet-500" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Socials;
