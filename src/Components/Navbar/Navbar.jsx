import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { GiShoppingCart } from "react-icons/gi";
import { IoHeartOutline } from "react-icons/io5";
import WishlistContext from '../../Context/WishlistContext';
import CartContext from '../../Context/CartContext';

const Navbar = () => {
    const {cart} = useContext(CartContext);
    const {wishlist} = useContext(WishlistContext);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const Links =(
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>
    )
    return (
     <div>
          <div className={`navbar shadow-sm ${isHome? "bg-[#9538e2]": "bg-[#f6f6f6]"}`}>
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-1">
        <svg xmlns="http://www.w3.org/2000/svg"  className={`h-5 w-5 ${isHome ? "text-white" : "text-black"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
    <a className={`text-[15px] md:text-2xl font-bold ${isHome ? "text-white" : "text-black"} ml-1`}>Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className={`menu menu-horizontal ${isHome ? "text-white": "text-black"}`}>{Links}</ul>
  </div>
  {/* icons */}
  <div className="navbar-end">
  {/* icons container */}
  <div className="flex items-center gap-4  rounded-full">
    {/* cart icon */}
   <div>
   <Link>
    <button className='relative'>
      {
        cart.length > 0 && <span className='absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full size-4'>
                {cart.length}
              </span>
      }
         <GiShoppingCart className={`
          transition-all cursor-pointer duration-300 ease-in-out
          ${isHome 
            ? "text-4xl p-2 rounded-full bg-white hover:text-[#9538e2] hover:shadow-lg" 
            : "text-4xl p-2 rounded-full border border-gray-300 hover:shadow-md hover:bg-gray-100"
          }`
        }/>
    </button>
   </Link>
   </div>

    {/* wishlist icon */}
   <div>
      <Link to='/dashboard/wishlist'>
          <button className='relative'>
            {
              wishlist.length > 0 && <span className='absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full size-4'>
                {wishlist.length}
              </span>
            }
              <IoHeartOutline className={`
                transition-all cursor-pointer duration-300 ease-in-out
                ${isHome 
                  ? "text-4xl p-2 rounded-full bg-white hover:text-[#9538e2] hover:shadow-lg" 
                  : "text-4xl p-2 rounded-full border border-gray-300 hover:shadow-md hover:bg-gray-100"
                }`
              }/>
          </button>
      </Link>
   </div>
  </div>
</div>

</div>
     </div>
    );
};

export default Navbar;