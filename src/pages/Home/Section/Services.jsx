import React from "react";
import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import { services } from "../../../Constants/Index";
import Card from "../../../Components/Card";

const Services = () => {
  return (
    // <div
    //   id="services"
    //   className="pt-60" // adjust this value to your fixed header height (e.g. 80px = 20*4)
    // >
    //   <PageTitle heading="my services" />
    //   <div className="px-4 py-8 max-w-7xl mx-auto">
    //     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
    //       {services.map(({ id, title, desc, icon: Icon }) => (
    //         <Card
    //           key={id}
    //           className="flex flex-col items-center justify-between gap-4 bg-[#006A55] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    //           style={{ minHeight: "300px" }} // Optional: make cards uniform height
    //         >
    //           <Icon className="text-5xl text-white" />
    //           <h3 className="capitalize text-white text-xl font-semibold text-center">{title}</h3>
    //           <p className="text-white text-center">{desc}</p>
    //         </Card>
    //       ))}
    //     </div>
    //   </div>
    // </div>
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
