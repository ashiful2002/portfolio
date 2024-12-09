import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "../src/Router/Index.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Layout/Header.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
