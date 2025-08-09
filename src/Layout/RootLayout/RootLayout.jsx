import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div className="w-full xl:w-11/12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
