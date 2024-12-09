import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear()
  return (
    <div className="bg-neutral-700 text-white">
      <div className="container mx-auto">
        <div className="text-center">
          <div>
            <a href="https://ashiful-islam.vercel.app"  rel="noopener noreferrer" className=" text-white">
              <p className="">&copy; {fullYear} all right reserved by MUKTO</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
