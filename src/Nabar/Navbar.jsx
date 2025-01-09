import React from "react";
import { Link } from "react-router";

const Navbar = () => {

    const navli=<>
       <li><a href="#">Home</a></li>
          <li><Link to={'/employee-join'}>Join as Employee</Link></li>
          <li><a href="#">Join as HR Manager</a></li>
          <li><a href="#">Login</a></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a href="#" className="btn btn-ghost normal-case text-xl">
          AMS Company
        </a>
      </div>
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
       {navli}
        </ul>
      </div>
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
        {navli}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
