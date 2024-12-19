import React from "react";

import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import { Flex, Progress } from "antd";
import { skillsDetails } from "../../../Constants/Index";

const Skills = () => {
  return (
    <Section id="skills">
      <PageTitle heading="skills" />
      <div className="">
        <div className="border bg-slate-300 rounded ">
          {skillsDetails.map(
            ({ id, icon: Icon, strokeColor, percent, level, title }) => (
              <div key={id} className="p-2">
                <div className="flex items-center justify-around">
                  <div className="flex items-start justify-start ">
                    <p className="uppercase " style={{font:`${strokeColor}`}}>{title}</p>
                  </div>
                  <div className="flex items-start justify-start">
                    <Icon
                      className="text-3xl "
                      style={{ color:`${strokeColor}` , }}
                    />
                  </div>
                </div>
                <Progress percent={percent} strokeColor={strokeColor} />
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
