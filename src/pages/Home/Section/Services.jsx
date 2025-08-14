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
            className="relative rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 p-[2px]"
          >
            <div className="relative overflow-hidden rounded-xl">
              {/* Background color */}
              <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800"></div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-blue-500/10 to-blue-600/20"></div>

              {/* Content */}
              <div className="text-cente relative z-10 p-6 h-[260px]">
                <Icon className="mx-auto text-4xl text-primary-color" />
                <h4 className="mt-3 text-lg font-bold text-gray-800 dark:text-gray-100">
                  {title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
