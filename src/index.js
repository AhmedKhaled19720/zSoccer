import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Contact from "./contact/Contact";
import Gallary from "./gallary/Gallary";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      
        <App />
     
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "Contact",
    element: (<Contact/>),
  },
  {
    path: "Gallary",
    element: (<Gallary/>),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
