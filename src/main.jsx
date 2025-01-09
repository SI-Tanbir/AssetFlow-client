import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { createRoot } from "react-dom/client";
import { router } from "./Router/PublicRoutes";
import './index.css'


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
