import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const Links =(
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>
    )
    return (
     <div>
          <div className="navbar shadow-sm  bg-[#9538e2]">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
    <a className="text-[15px] md:text-2xl font-bold text-white ml-1">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal">{Links}</ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
     </div>
    );
};

export default Navbar;