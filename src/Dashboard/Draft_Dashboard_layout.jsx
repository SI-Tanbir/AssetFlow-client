

<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
{/* Sidebar content here */}

{/* to do: it will dynamically change according to user company name */}
<li className="text-purple-600 text-3xl border-b border-b-gray-500 p-4">
  XYZ Company
</li>

{isAdmin ? (
  <>
    <li>
      <a>admin Home</a>
    </li>
    <li>
      <a>Asset List</a>
    </li>
    <li>
      <a>Add Asset</a>
    </li>
    <li>
      <a>All Requests</a>
    </li>
    <li>
      <a>My Employee List</a>
    </li>
    <li>
      <a>Add Employee</a>
    </li>
  </>
) : (
  <>
    <li>
      <a>Home</a>
    </li>
    <li>
      <a>My Assets</a>
    </li>

    <li>
      <a>My Team</a>
    </li>
    <li>
      <a>Request Asset</a>
    </li>
  </>
)}
</ul>

-------------


import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Users,
  ClipboardList,
  UserPlus,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const MenuItem = ({ icon, title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 py-3 px-4 hover:bg-purple-50 hover:text-purple-600 transition-colors w-full ${
      isActive ? "bg-purple-50 text-purple-600" : "text-gray-700"
    }`}
  >
    {icon}
    <span>{title}</span>
  </button>
);

const Dashboard_layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("/dashboard");
  const isAdmin = false; // This will come from your auth context later

  // Menu items for HR/Admin

  const adminMenuItems = [
    {
      path: "/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      title: "Home",

    },
    {
      path: "/dashboard/asset-list",
      icon: <Package className="w-5 h-5" />,
      title: "Asset List",
    },
    {
      path: "/dashboard/add-asset",
      icon: <Package className="w-5 h-5" />,
      title: "Add Asset",
    },
    {
      path: "/dashboard/all-requests",
      icon: <ClipboardList className="w-5 h-5" />,
      title: "All Requests",
    },
    {
      path: "/dashboard/employee-list",
      icon: <Users className="w-5 h-5" />,
      title: "My Employee List",
    },
    {
      path: "/dashboard/add-employee",
      icon: <UserPlus className="w-5 h-5" />,
      title: "Add Employee",
    },
  ];

  // Menu items for normal employee
  const employeeMenuItems = [
    {
      path: "/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      title: "Home",
      
    },
    {
      path: "/dashboard/my-assets",
      icon: <Package className="w-5 h-5" />,
      title: "My Assets",
    },
    {
      path: "/dashboard/my-team",
      icon: <Users className="w-5 h-5" />,
      title: "My Team",
    },
    {
      path: "/dashboard/request-asset",
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Request Asset",
    },
  ];

  const menuItems = isAdmin ? adminMenuItems : employeeMenuItems;

  const handleNavigation = (path) => {
    setActiveRoute(path);
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen flex">



      {/* Sidebar */}
      <div

        className={`bg-white fixed md:static w-64 min-h-screen transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >

        
        {/* Logo Section */}
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold text-purple-600">XYZ Assets</h2>
        </div>

        {/* Menu Items */}

        <div className="py-4">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              isActive={activeRoute === item.path}
              onClick={() => handleNavigation(item.path)}
            />
          ))}
        </div>

        {/* Profile & Logout Section */}
        <div className="border-t absolute bottom-0 w-full bg-white">
          <MenuItem
            icon={<User className="w-5 h-5" />}
            title="Profile"
            isActive={activeRoute === "/dashboard/profile"}
            onClick={() => handleNavigation("/dashboard/profile")}
          />
          
          <MenuItem
            icon={<LogOut className="w-5 h-5" />}
            title="Logout"
            onClick={() => {
              /* Add your logout logic */
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Header */}
        <div className="md:hidden bg-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-purple-600">XYZ Assets</h2>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-700"
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4">
          {/* Your page content will go here */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h1 className="text-2xl font-semibold text-gray-800">
              {menuItems.find((item) => item.path === activeRoute)?.title ||
                "Dashboard"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_layout;
