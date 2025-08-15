import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <div className="border border-red-900 dark:bg-gray-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
