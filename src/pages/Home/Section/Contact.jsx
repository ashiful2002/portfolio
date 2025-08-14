import React, { useState } from "react";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import Socials from "./Socials";
import { toast, ToastContainer } from "react-toastify";

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
    <section id="contact" className="mx-auto my-12 max-w-7xl scroll-mt-16 p-6">
      <h2 className="heading">Contact Me</h2>

      <div className="flex flex-col gap-8 md:flex-row md:justify-around">
        {/* Contact info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 text-gray-700">
            <HiOutlineMail className="h-6 w-6 text-primary-color" />
            <a
              href="mailto:ashifulislam2002@gmail.com"
              className="hover:underline"
            >
              ashifulislam2002@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <HiOutlineLocationMarker className="h-6 w-6 text-primary-color" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex">
            <Socials />
          </div>
        </div>
        {/* <div className="hidden xl:block">
          <Socials />
        </div> */}
        {/* Email subscription form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col gap-4 md:max-w-2xl"
        >
          {/* Name & Email */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-4">
            <div className="flex flex-1 flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
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
                className="w-full rounded border border-gray-300 bg-white px-4 py-2 focus:border-blue-600 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
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
                className="w-full rounded border border-gray-300 bg-white px-4 py-2 focus:border-blue-600 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
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
              className="w-full rounded border border-gray-300 bg-white px-4 py-2 focus:border-blue-600 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
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
              className="w-full resize-none rounded border border-gray-300 bg-white px-4 py-2 focus:border-blue-600 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          <button
            type="submit"
            className="rounded bg-blue-600 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
