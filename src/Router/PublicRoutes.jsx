import { createBrowserRouter } from "react-router";
import App from "../Layouts/App";
import JoinAsEmployee from "../Form/EmployeeForm";
import HrManagerFrom from "../Form/HrManagerFrom";
import LoginForm from "../Form/LoginForm";

export let router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
   
  },
  {path:'/employee-join',
    element:<JoinAsEmployee></JoinAsEmployee>
  },
  {
    path:'/hr-join',
    element:<HrManagerFrom></HrManagerFrom>
  },
  {
    path:'/login',
    element:<LoginForm></LoginForm>
  }
]);
