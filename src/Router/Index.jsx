import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import Header from "../Layout/Header";
import Home from "../pages/Home/Home";
import Practice from "../pages/Practices/Practice";
import Blog from "../pages/Blog";
import MotionHeader from "../Layout/MotionHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/practice",
        element: <Practice />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
