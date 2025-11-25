import React, { use } from "react";
import { NavLink } from "react-router";
// import from "../Components/Style.css"
import "../Components/Style.css";
import { AuthContext } from "../Context/AuthContex";

const Navbar = () => {
  const {user,singOutUser} = use(AuthContext)
  const handleSingOut = ()=>{
    singOutUser()
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error)
    })
  }
   const links = <>
   <li><NavLink to={"/"} className={({ isActive }) => isActive ? "active-link" : ""} >Home</NavLink></li>
   <li><NavLink to={"/login"}  className={({ isActive }) => isActive ? "active-link" : ""}>Login</NavLink></li>
   <li><NavLink to={"/register"}  className={({ isActive }) => isActive ? "active-link" : ""}>Register</NavLink></li>
   </>
    
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Honda.S</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
       {user?<a onClick={handleSingOut} className="btn">SingOut</a>:<a className="btn">SingIn</a>}
      </div>
    </div>
  );
};

export default Navbar;
