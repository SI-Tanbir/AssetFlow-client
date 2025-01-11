import React, { useContext } from "react";
import { Link, useSearchParams } from "react-router";
import { MyContext } from "../Provider/AuthContext";

const Navbar = () => {

  const {test,user,signOutFirebase}=useContext(MyContext)
  console.log(test)
  const handleSignout=()=>{
    // e.preventDefault()
    signOutFirebase()
    .then(
      console.log("success full signout")
    ).catch((error) => {
      // An error happened.
      console.log(error)
    });

  }



    const navli=
    
    <>
       <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/employee-join'}>Join as Employee</Link></li>
          <li><Link to={'/hr-join'}>Join as HR</Link></li>

          {  user ? 
          <>
                 


 
                    <li><button   > My Assets</button></li>

                     
                    <li><button   >My Team</button></li>

                     
                    <li><button   >Request for an Asset</button></li>

                       
                    <li><button   >Profile</button></li>


                     <li><button onClick={handleSignout}  >Signout</button></li>



                    </>
                     :
                     <li><Link to={'/login'} >Login</Link></li>
                     }
          {/* <li><Link to={'login'} >Login</Link></li> */}
    </>



  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">

        {/* todo: company logo will be added if user give company name */}

        <a href="#" className="btn btn-ghost normal-case text-xl">
          AssetFlow
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
