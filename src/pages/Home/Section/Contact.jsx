import React from "react";
import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import { contactDetails } from "../../../Constants/Index";

const Contact = () => {
  return (
    <Section classname="bg-[#006A55]">
      <PageTitle heading="Gei in Touch" />
      <div>
        <div className="my-3 flex flex-col items-center justify-center gap-4">
          {contactDetails.map(({ id, title, icon: Icon, url }) => (
            <div key={id} className="">
              <a
                href={url}
                className="flex flex-col items-center justify-center gap-3 no-underline"
              >
                <Icon className="rounded text-5xl text-[#00ffccd0] hover:text-green-200" />
                <p className="text-white no-underline"> {title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
