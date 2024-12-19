import React from "react";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import { skillsDetails } from "../../../Constants/Index";
import { Flex, Progress } from "antd";
import Section from "../../../Components/Title.jsx/Section";

const SkillsDetails = () => {
  return (
    <Section>
      <PageTitle heading="mapping icons as apge title" />
      <div>
        <div className="border bg-slate-300 rounded ">
          {skillsDetails.map(
            ({ id, icon: Icon, strokeColor, percent, level }) => (
              <div key={id}>
                <div className="flex items-center justify-center">
                  <Flex gap={3}></Flex>
                  <Progress percent={percent} strokeColor={strokeColor} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
};

export default SkillsDetails;
