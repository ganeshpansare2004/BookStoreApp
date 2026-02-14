import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import {useAuth} from "../context/AuthContext.js";
import { Link } from "react-router-dom";




function Navbar() {
  const [authUser ] =useAuth()
 
  
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navItems = (
    <>
     <li>
      <Link to="/" className="text-base-content">Home</Link>
    </li>
    <li>
      <Link to="/course" className="text-base-content">Course</Link>
    </li>
    <li>
      <Link to="/contact" className="text-base-content">Contact</Link>
    </li>
    <li>
      <Link to="/about" className="text-base-content">About</Link>
    </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${sticky ? "bg-base-200 shadow-md" : "bg-base-100"}`}
    >
    
      <div className="navbar max-w-screen-2xl mx-auto md:px-20 px-4">

        
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>

          <a className="text-2xl font-bold cursor-pointer text-base-content">
            .read<span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-extrabold">N</span>exa
          </a>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base-content">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end space-x-3">

          <div className="hidden md:block">
            <label className="px-3 py-2 flex items-center gap-2 text-base-content">
              <svg className="h-4 w-4 opacity-60" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"
                  stroke="currentColor" fill="none" />
                <path d="m21 21-4.3-4.3"
                  stroke="currentColor" />
              </svg>
              <input
                type="search"
                placeholder="Search"
                className="bg-transparent outline-none"
              />
            </label>
          </div>

      
          <label className="swap swap-rotate cursor-pointer text-base-content">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
            />

  
           <svg
  className="swap-off h-6 w-6 text-yellow-500"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth="2"
>
  <circle cx="12" cy="12" r="5" />
  <line x1="12" y1="1" x2="12" y2="3" />
  <line x1="12" y1="21" x2="12" y2="23" />
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
  <line x1="1" y1="12" x2="3" y2="12" />
  <line x1="21" y1="12" x2="23" y2="12" />
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
</svg>

{/* moon */}
          <svg
  className="swap-on h-6 w-6"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth="2"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M20.354 15.354A9 9 0 1 1 8.646 3.646
       7 7 0 0 0 20.354 15.354z"
  />
</svg>

          </label>
          {
            authUser?(<Logout/>):(
            <div className="">
          <button
            className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
            onClick={() =>
              document.getElementById("my_modal_3").showModal()
            }
            >
            Login
          </button>
          <Login />
          </div>
          )}
         </div>
      </div>
    </div>
  );
}

export default Navbar;
