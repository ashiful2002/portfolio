import React from "react";
import { services } from "../../../Constants/Index";
import Card from "../../../Components/Card";

const Services = () => {
  return (
    <section id="services" className="mx-auto my-12 scroll-mt-16 p-6">
      <h2 className="heading">What i do</h2>

      {/* mx- auto ma x-w-7xl px-4 py-8 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {services.map(({ id, title, desc, icon: Icon }) => (
          <Card
            key={id}
            className="transection-all shadow- hove r:bg-[#407cff] flex flex-col items-center justify-between gap-4 rounded-lg bg-primary-color p-6 py-4 transition-all duration-300 hover:bg-secondary-color hover:shadow-lg"
            style={{ minHeight: "300px" }} // Optional: make cards uniform height
          >
            <Icon className="text-5xl text-white" />
            <h3 className="text-center text-xl font-semibold capitalize text-white">
              {title}
            </h3>
            <p className="text-center text-white">{desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
