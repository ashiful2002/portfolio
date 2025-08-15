import React, { useState } from "react";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import Socials from "./Socials";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you, ${name}! Your message has been sent.`);
    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

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

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col gap-4 md:max-w-2xl"
        >
          {/* Name & Email */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-4">
            <div className="flex flex-1 flex-col">
              <label
                htmlFor="name"
                className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition-all duration-200 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-800"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <label
                htmlFor="email"
                className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition-all duration-200 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-800"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject of your message"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition-all duration-200 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-800"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 transition-all duration-200 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-800"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 py-3 text-white transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-500 dark:focus:ring-offset-gray-800"
          >
            Send Message
          </button>
        </form>
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
