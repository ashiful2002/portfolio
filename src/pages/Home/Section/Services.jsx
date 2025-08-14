import React from "react";
import { services } from "../../../Constants/Index";

const Services = () => {
  return (
    <section
      id="services"
      className="hite mx-auto my-12 scroll-mt-16 p-6 transition-colors duration-300 dark:bg-gray-900"
    >
      <h2 className="heading mb-8 text-center">What I Do</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {services.map(({ id, title, desc, icon: Icon }) => (
          <div
            key={id}
            className="relative rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 p-[2px] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-blue-900/30"
          >
            <div className="flex h-full flex-col items-center rounded-xl p-6 text-center transition-colors duration-300 dark:bg-gray-800">
              <div className="mb-3 flex justify-center">
                <Icon className="text-4xl text-sky-500 dark:text-sky-400" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h4>
              <p className="mt-2 text-start text-sm text-gray-600 dark:text-gray-300">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
