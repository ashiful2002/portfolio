import React, { useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const ContactForm = () => {
  const form = useRef();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setBtnDisabled(true);
    emailjs
      .sendForm("service_5dfru8f", "template_wu7z0nl", form.current, {
        publicKey: "nGiYi51Xc7LsGmqCI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setBtnDisabled(false);
          toast.success(`email send successfully`);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div>
      {" "}
      <form
        onSubmit={sendEmail}
        ref={form}
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
              name="name"
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
              name="email"
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
            name="subject"
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
            name="message"
            placeholder="Write your message here..."
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 transition-all duration-200 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-800"
          />
        </div>

        <button
          disabled={btnDisabled}
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-white transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-500 dark:focus:ring-offset-gray-800"
        >
          {btnDisabled ? (
            <>
              <FaSpinner className="animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
