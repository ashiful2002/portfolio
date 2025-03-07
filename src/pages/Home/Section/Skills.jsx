import React from "react";

import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import { Progress } from "antd";
import { skillsDetails } from "../../../Constants/Index";

const Skills = () => {
  return (
    <Section id="skills" classname="">
      <PageTitle heading="skills" />
      <div className="p-1">
        <div className="rounded bg-slate-200 ">
          {skillsDetails.map(
            ({ id, icon: Icon, strokeColor, percent, level, title }) => (
              <div key={id} className="p-2">
                <div className="flex items-center justify-around">
                  <div className="flex flex-shrink-0 items-start justify-start">
                    <p
                      className="w-40 uppercase"
                      style={{ font: `${strokeColor}` }}
                    >
                      {title}
                    </p>
                  </div>
                  <div className="flex items-start justify-start">
                    <Icon
                      className="text-3xl drop-shadow-md"
                      style={{ color: `${strokeColor}` }}
                    />
                  </div>
                </div>
                <Progress percent={percent} strokeColor={strokeColor} />
              </div>
            ),
          )}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
