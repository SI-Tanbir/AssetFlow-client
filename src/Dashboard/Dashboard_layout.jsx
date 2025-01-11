import React, { useState } from 'react';

const Dashboard_layout = () => {
  const isAdmin = false;

  // State to track active item
  const [activeItem, setActiveItem] = useState('');

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li className="text-purple-600 text-3xl border-b border-b-gray-500 p-4">
              XYZ Company
            </li>

            {isAdmin ? (
              <>
                <li
                  className={`p-2 ${activeItem === 'adminHome' ? 'bg-purple-600  text-white' : ''}`}
                  onClick={() => setActiveItem('adminHome')}
                >
                  <a>Admin Home</a>
                </li>
                <li
                  className={`p-2 ${activeItem === 'assetList' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('assetList')}
                >
                  <a>Asset List</a>
                </li>
                <li
                  className={`p-2 ${activeItem === 'addAsset' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('addAsset')}
                >
                  <a>Add Asset</a>
                </li>
                <li
                  className={`p-2 ${activeItem === 'allRequests' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('allRequests')}
                >
                  <a>All Requests</a>
                </li>
                <li
                  className={`p-2 ${activeItem === 'employeeList' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('employeeList')}
                >
                  <a>My Employee List</a>
                </li>
                <li
                  className={`p-2 ${activeItem === 'addEmployee' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('addEmployee')}
                >
                  <a>Add Employee</a>
                </li>
              </>
            ) : (
              <>
             <li className={`p-2 ${activeItem == 'home' ? 
              'bg-purple-500 text-white' :''}`}
              onClick={() => setActiveItem('home')}
              >
                  <a>Home</a>
                </li>
                <li
                  className={`p-2 ${activeItem === 'myAssets' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('myAssets')}
                >
                  <a>My Assets</a>
                </li>
                <li
                  className={`p-2 ${activeItem === 'myTeam' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('myTeam')}
                >
                  <a>My Team</a>
                </li>
                <li
                  className={`p-2 ${activeItem === 'requestAsset' ? 'bg-purple-600 text-white' : ''}`}
                  onClick={() => setActiveItem('requestAsset')}
                >
                  <a>Request Asset</a>
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
