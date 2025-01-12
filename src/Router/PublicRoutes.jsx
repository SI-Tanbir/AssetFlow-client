import { createBrowserRouter } from "react-router";
import App from "../Layouts/App";
import JoinAsEmployee from "../Form/EmployeeForm";
import HrManagerFrom from "../Form/HrManagerFrom";
import LoginForm from "../Form/LoginForm";
import Dashboard_layout from "../Dashboard/Dashboard_layout";
import MyAssets from "../Dashboard/employee/MyAssetPages";
import RequestAsset from "../Dashboard/employee/RequestAsset";
import MyTeamPage from "../Dashboard/employee/TeamPage";
import EmployeeDashboard from "../Dashboard/employee/Dashboard_home";
import HRHomePage from "../Dashboard/Admin/HRHomePage";
import AssetList from "../Dashboard/Admin/AssetList";
import AllRequestsPage from "../Dashboard/Admin/AllRequest";



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
    children:[
      
      // employee path
      {
      path:'/dashboard/myasset',
      element:<MyAssets></MyAssets>
    },
    {
      path:'myrequest',
      element:<RequestAsset></RequestAsset>
    },
    {
      path:'myteam',
      element:<MyTeamPage></MyTeamPage>
    },
    {
      path:'home',
      element:<EmployeeDashboard></EmployeeDashboard>
    },

    // admin path adding here
    {
      path:'adminhome',
      element:<HRHomePage></HRHomePage>
    },
    {
      path:'assetlist',
      element:<AssetList></AssetList>
    },
    {
      path:'allrequest',
      element:<AllRequestsPage></AllRequestsPage>
    }
  ]
  }
  
]);
