import React, { useRef, useState } from "react";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import Socials from "../Socials";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto my-12 max-w-7xl scroll-mt-16 p-6 transition-colors duration-300 dark:bg-gray-900"
    >
      <h2 className="heading">Contact Me</h2>

      <div className="flex flex-col gap-8 md:flex-row md:justify-around">
        {/* Contact info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
            <HiOutlineMail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <a
              href="mailto:ashifulislam2002@gmail.com"
              className="transition-colors duration-200 hover:text-blue-600 hover:underline dark:hover:text-blue-400"
            >
              ashifulislam2002@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
            <HiOutlineLocationMarker className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="flex">
            <Socials />
          </div>
        </div>

        {/* form  */}
        <ContactForm />
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastClassName="dark:bg-gray-800 dark:text-white"
      />
    </section>
  );
};

export default Contact;
