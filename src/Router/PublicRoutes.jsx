import { createBrowserRouter } from "react-router";
import App from "../Layouts/App";
import JoinAsEmployee from "../Form/EmployeeForm";
import HrManagerFrom from "../Form/HrManagerFrom";
import LoginForm from "../Form/LoginForm";
import Dashboard_layout from "../Dashboard/Dashboard_layout";
import MyAssets from "../Dashboard/MyAssetPages";
import RequestAsset from "../Dashboard/RequestAsset";



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
  },
  {
    path:'/dashboard',
    element:<Dashboard_layout></Dashboard_layout>,
    children:[{
      path:'/dashboard/myasset',
      element:<MyAssets></MyAssets>
    },
    {
      path:'myrequest',
      element:<RequestAsset></RequestAsset>
    }
  ]
  }
  
]);
