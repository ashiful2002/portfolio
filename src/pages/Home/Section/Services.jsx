import React from "react";
import { services } from "../../../Constants/Index";

const Services = () => {
  return (
    <section id="services" className="mx-auto my-12 scroll-mt-16 p-6">
      <h2 className="heading mb-8 text-center">What I Do</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {services.map(({ id, title, desc, icon: Icon }) => (
          <div
            key={id}
            className="relative rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 p-[2px] transition-transform hover:scale-105"
          >
            <div className="flex h-full flex-col items-center rounded-xl bg-white p-6 text-center">
              <div className="mb-3 flex justify-center">
                <Icon className="text-4xl text-sky-500" />
              </div>
              <h4 className="text-lg font-bold">{title}</h4>
              <p className="mt-2 text-start text-sm text-gray-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
