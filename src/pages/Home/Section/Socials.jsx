import React from "react";
import { SoicalMidea } from "../../../Constants/Index";

const Socials = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        {SoicalMidea.map(({ id, url, icon: Icon, title }) => (
          <div key={id} className="">
            <a href={url}>
              <Icon className="text-2xl text-[#45ffdad9]" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
