import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div className="bg-neutral-700 text-white">
      <div className="container mx-auto">
        <div className="text-center">
          <div>
            <p className="">
              &copy; {fullYear} all right reserved by
              <a
                href="https://ashiful-islam.vercel.app/"
                className=" text-white ml-2"
              >
                A. islam
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
