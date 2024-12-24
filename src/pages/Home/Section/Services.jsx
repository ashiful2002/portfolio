import React from "react";
import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import { services } from "../../../Constants/Index";
import Card from "../../../Components/Card";
const Services = () => {
  return (
    <Section id="services">
      <PageTitle heading="my services" className="" />
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-3 xl:grid-cols-3 px-2">
          {services.map(({ id, title, desc, icon: Icon }) => (
            <Card
              key={id}
              className="flex w-screen flex-col items-center justify-between gap-3 overflow-hidden bg-[#006A55] sm:w-[250px] md:w-[400px]"
            >
              <Icon className="mt-4 text-5xl" />
              <h3 className="capitalize">{title}</h3>
              <p>{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
