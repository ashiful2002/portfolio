import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import Header from "../Layout/Header";
import Home from "../pages/Home/Home";
import Practice from "../pages/Practices/Practice";
import Blog from "../pages/Blog";
import MotionHeader from "../Layout/MotionHeader";
import RootLayout from "../Layout/RootLayout/RootLayout";
import project from "../../src/pages/Home/Section/Projects/projects.json";
import ProjectDetails from "../pages/Home/Section/Projects/ProjectDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // hydrateFallbackElement: <Bspin />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/ashiful2002/portfolio/refs/heads/main/src/pages/Home/Section/Projects/projects.json",
          ).then((res) => res.json()),
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/ashiful2002/portfolio/refs/heads/main/src/pages/Home/Section/Projects/projects.json",
          ).then((res) => res.json()),
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
