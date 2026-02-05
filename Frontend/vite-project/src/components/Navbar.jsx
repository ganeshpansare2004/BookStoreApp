import React, { useEffect, useState } from "react";
import Login from "./Login";

function Navbar() {
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

  // DaisyUI theme handler
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a>About</a></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50
      ${sticky ? "shadow-md bg-base-200 transition-all duration-300" : ""}`}
    >
      <div className="navbar">

        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">readNexa</a>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end space-x-3">

          {/* Search */}
          <div className="hidden md:block">
            <label className="px-3 py-2 flex items-center gap-2">
              <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="currentColor" fill="none" />
                <path d="m21 21-4.3-4.3" stroke="currentColor" />
              </svg>
              <input type="search" placeholder="Search" className="bg-transparent outline-none" />
            </label>
          </div>

          {/* THEME TOGGLE */}
          <label className="swap swap-rotate cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
            />

            {/* Sun */}
            <svg className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 4V2m0 20v-2m10-8h-2M4 12H2m15.36 6.36-1.42-1.42M8.06 7.06 6.64 5.64m12.72 0-1.42 1.42M8.06 16.94l-1.42 1.42M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/>
            </svg>

            {/* Moon */}
            <svg className="swap-on h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3
              7 7 0 0 0 21 12.79z"/>
            </svg>
          </label>

          <a className="btn btn-primary btn-sm" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
