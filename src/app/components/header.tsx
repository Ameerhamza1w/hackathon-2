import React from "react";
import { IoIosContact } from "react-icons/io";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full border-b border-gray-300 bg-white">
      <div className="flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4 max-w-[1270px] mx-auto">
      
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl sm:text-2xl font-bold font-poppins text-black">
            Furniro
          </h1>
        </div>

        
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-12">
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
              <Link href="/blog" className="text-black font-medium hover:text-gray-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black font-medium hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        
        <div className="flex items-center space-x-4 sm:space-x-6">
          <IoIosContact className="w-5 h-5 sm:w-6 sm:h-6 text-black cursor-pointer hover:text-gray-600" />
          <FaSearch className="w-5 h-5 sm:w-6 sm:h-6 text-black cursor-pointer hover:text-gray-600" />
          <FaRegHeart className="w-5 h-5 sm:w-6 sm:h-6 text-black cursor-pointer hover:text-gray-600" />
          <MdOutlineShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-black cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="block md:hidden px-6 py-4 border-t border-gray-300">
        <ul className="flex justify-around text-sm">
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
            <Link href="/blog" className="text-black font-medium hover:text-gray-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black font-medium hover:text-gray-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
