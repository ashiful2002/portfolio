import React from "react";

import { FaCss3, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { SiAntdesign, SiReactbootstrap } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

import Section from "../../Components/Title.jsx/Section";
import PageTitle from "../../Components/Title.jsx/PageTitle";
import {  Progress, Typography } from "antd";
import { skills } from "../../Constants/Index";

const Skills = () => {
  return (
    <Section>
        <>
      <PageTitle heading="my Skills" />
      <div>
        <h3></h3>
        <div>
          <div></div>
          <div>
            <div className="iconDiv flex justify-around items-center flex-col">
              {skills &&  skills.map((item) => (
                <div key={item.id} className="">
                  <div className="flex justify-center items-center gap-2 ">
                   <div>
                   <Typography.Title level={item.level} className=" ">
                     {item.title}
                    </Typography.Title>
                   </div>
                    
                    <div>
                   <img src={item.icon} className="w-7" alt="" srcset="" />
                    </div>
                  </div>

                  <div>
                    <Progress
                      percent={item.percent}
                      percentPosition={{
                        align: "center",
                        type: "inner",
                      }}
                      size={[200, 20]}
                      strokeColor={item.strokeColor}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
    </Section>
  );
};

export default Skills;
