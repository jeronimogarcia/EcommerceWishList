import React from "react";
import { Link } from "react-router-dom";
import { TbJewishStar } from 'react-icons/tb'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 w-full bg-gray-200 shadow-lg px-20 fixed top-0 text-2xl text-green-600 z-[1]">
      <Link to="/" className="w-52 hover:text-red-500">
        <div className="flex flex-row gap-2">
          <span className="flex items-center ">
            <TbJewishStar></TbJewishStar>
          </span>
          <span>EcommerceWishList</span>
        </div>
      </Link>
      <ol className="flex flex-row gap-6">
        <li>
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-red-500">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-red-500">
            Register
          </Link>
        </li>
        <li>
          <Link to="/wishlist" className="hover:text-red-500">
            Wish List
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Navbar;