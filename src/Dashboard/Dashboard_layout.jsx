import React, { useContext, useEffect, useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ClipboardList, 
  UserPlus, 
  ListPlus,
  Home,
  Building,
  Link
} from 'lucide-react';
import { NavLink, Outlet } from 'react-router';
import baseUrl from '../Hooks/baseUrlAxiosInstance';
import { MyContext } from '../Provider/AuthContext';



const Dashboard_layout = () => {
const {email}=useContext(MyContext)
const [admin,setAdmin]=useState(false)
const [loading,setLoading]=useState(true)
// console.log(email)
useEffect(()=>{
  baseUrl.post('/admin',{email:email})
  .then(res=>{
    setAdmin(res?.data?.isAdmin )
    console.log("admin is checking",res?.data?.isAdmin)
    setLoading(false)

  
})
},[email])

// console.log(admin)


  // const admin = false;
  const [activeItem, setActiveItem] = useState('');



  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }


  return (
    


    <div>
 



 
 
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <Outlet></Outlet>

          
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li className="text-purple-600 text-3xl border-b border-b-gray-500 p-4">
              <Building className="w-8 h-8 inline-block mr-2" />
              XYZ Company
            </li>

            {admin ? (
              <>
                <li
                  className={`p-2 ${activeItem === 'adminHome' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('adminHome')}
                >
                  <NavLink to={'/dashboard/adminhome'}>
                    <LayoutDashboard className="w-5 h-5 mr-2" />
                    Admin Home
                  </NavLink>
                </li>
                <li
                  className={`p-2 ${activeItem === 'assetList' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('assetList')}
                >
                  <a>
                    <Package className="w-5 h-5 mr-2" />
                    Asset List
                  </a>
                </li>
                <li
                  className={`p-2 ${activeItem === 'addAsset' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('addAsset')}
                >
                  <NavLink to={'/dashboard/assetlist'}>
                    <ListPlus className="w-5 h-5 mr-2" />
                    Add Asset
                  </NavLink>
                </li>
                <li
                  className={`p-2 ${activeItem === 'allRequests' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('allRequests')}
                >
                  <a>
                    <ClipboardList className="w-5 h-5 mr-2" />
                    All Requests
                  </a>
                </li>
                <li
                  className={`p-2 ${activeItem === 'employeeList' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('employeeList')}
                >
                  <a>
                    <Users className="w-5 h-5 mr-2" />
                    My Employee List
                  </a>
                </li>
                <li
                  className={`p-2 ${activeItem === 'addEmployee' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('addEmployee')}
                >
                  <a>
                    <UserPlus className="w-5 h-5 mr-2" />
                    Add Employee
                  </a>
                </li>
              </>
            ) : (
              <>
                <li 
                  className={`p-2 ${activeItem === 'home' ? 'bg-purple-500 text-white' : ''}`}
                  onClick={() => setActiveItem('home')}
                >
                  <NavLink to={'/dashboard/home'}>
                    <Home className="w-5 h-5 mr-2" />
                    Home
                  </NavLink>
                </li>
                <li
                  className={` p-2 ${activeItem === 'myAssets' ? 'bg-purple-600 text' : ''}`}
                  onClick={() => setActiveItem('myAssets')}
                >
                  <NavLink to={'/dashboard/myasset'} className='bg-gray-300'>
                    <Package className="w-5 h-5 mr-2" />
                    My Assets
                  </NavLink>
                </li>

                
                <li
                  className={`p-2 ${activeItem === 'myTeam' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('myTeam')}
                >
                  <NavLink to={'/dashboard/myteam'}>
                    <Users className="w-5 h-5 mr-2" />
                    My Team
                  </NavLink>
                </li>
                <li
                  className={`p-2 ${activeItem === 'requestAsset' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('requestAsset')}
                >
                  <NavLink to={'/dashboard/myrequest'}>
                    <ClipboardList className="w-5 h-5 mr-2" />
                    Request Asset
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_layout;