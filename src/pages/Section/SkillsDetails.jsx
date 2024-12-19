import React from "react";
import PageTitle from "../../Components/Title.jsx/PageTitle";
import { skillsDetails } from "../../Constants/Index";
import { Flex, Progress } from "antd";

const SkillsDetails = () => {
  return (
    <div>
      <PageTitle heading="mapping icons as apge title" />
      <div>
        <div className="border bg-slate-300 rounded ">
          {skillsDetails.map(
            ({ id, icon: Icon, strokeColor, percent, level }) => (
              <div key={id}>
                <div className="flex items-center justify-around">
                  <span>{<Icon className="text-3xl text-violet-500" />}</span>
                  <span>{level}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Flex gap={3}>
                    <Progress
                      percent={percent}
                      percentPosition={{
                        align: "start",
                        type: "inner",
                      }}
                      size={[300, 13]}
                      strokeColor={strokeColor}
                    />
                  </Flex>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsDetails;
