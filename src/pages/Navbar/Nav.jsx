import React, { useState } from 'react'
import navbarlogo1 from "@/assets/Images/navbarlogo1.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-sm bg-[#FFFFFFF5] text-gray-700 rounded-b-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flexbox layout for better alignment */}
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src={navbarlogo1}
              alt="MediTreck Logo"
              className="h-16 w-auto max-w-[160px] object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex items-center space-x-8 font-medium">
            <li>
              <Link to="/nav" className="text-green-600 hover:text-green-700 transition-colors duration-200 font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/specialities" className="hover:text-blue-600 transition-colors duration-200">
                Specialities
              </Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-blue-600 transition-colors duration-200">
                Doctor
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-600 transition-colors duration-200">
                Service
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-blue-600 transition-colors duration-200">
                Faq
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 transition-colors duration-200">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-1"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100">
            <ul className="flex flex-col space-y-1 py-4 font-medium">
              <li className="text-green-600 hover:bg-green-50 cursor-pointer px-4 py-3 rounded-md transition-colors duration-200 font-semibold">
                Home
              </li>
              <li className="hover:bg-gray-50 hover:text-blue-600 cursor-pointer px-4 py-3 rounded-md transition-colors duration-200">
                Specialities
              </li>
              <li className="hover:bg-gray-50 hover:text-blue-600 cursor-pointer px-4 py-3 rounded-md transition-colors duration-200">
                Doctor
              </li>
              <li className="hover:bg-gray-50 hover:text-blue-600 cursor-pointer px-4 py-3 rounded-md transition-colors duration-200">
                About Us
              </li>
              <li className="hover:bg-gray-50 hover:text-blue-600 cursor-pointer px-4 py-3 rounded-md transition-colors duration-200">
                Service
              </li>
              <li className="hover:bg-gray-50 hover:text-blue-600 cursor-pointer px-4 py-3 rounded-md transition-colors duration-200">
                Faq
              </li>
              <li className="hover:bg-gray-50 hover:text-blue-600 cursor-pointer px-4 py-3 rounded-md transition-colors duration-200">
                Contact US
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
