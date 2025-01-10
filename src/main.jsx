import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { createRoot } from "react-dom/client";
import { router } from "./Router/PublicRoutes";
import './index.css'
import AuthContext from "./Provider/AuthContext";


createRoot(document.getElementById("root")).render(

  <AuthContext>

    <RouterProvider router={router} />
  </AuthContext>
);
