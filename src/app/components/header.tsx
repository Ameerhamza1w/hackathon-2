import React from "react";
import { IoIosContact } from "react-icons/io";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full border-b border-gray-300">
      <div className="flex justify-between items-center px-16 py-4 max-w-[1270px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="w-[30px] h-[30px]" />
          <h1 className="text-2xl font-bold font-poppins text-black">Furniro</h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-12">
            <li>
              <Link href="/" className="text-black font-medium hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-black font-medium hover:text-gray-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/cart" className="text-black font-medium hover:text-gray-600">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black font-medium hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <IoIosContact className="w-6 h-6 text-black cursor-pointer hover:text-gray-600" />
          <FaSearch className="w-6 h-6 text-black cursor-pointer hover:text-gray-600" />
          <FaRegHeart className="w-6 h-6 text-black cursor-pointer hover:text-gray-600" />
          <MdOutlineShoppingCart className="w-6 h-6 text-black cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
