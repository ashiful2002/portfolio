import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import RootLayout from "../Layout/RootLayout/RootLayout";
import ProjectDetails from "../pages/Home/Section/Projects/ProjectDetails";
import Rspinner from "../Components/Spinner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    hydrateFallbackElement: <Rspinner />,
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
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
