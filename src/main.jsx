import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { createRoot } from "react-dom/client";
import { router } from "./Router/PublicRoutes";
import './index.css'
import AuthContext from "./Provider/AuthContext";
import { StrictMode } from "react";


createRoot(document.getElementById("root")).render(

  <StrictMode>

  <AuthContext>

    <RouterProvider router={router} />
  </AuthContext>
</StrictMode>

);
