import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import navbarlogo from "@/assets/Images/navbarlogo.png"; 
import HeroSection from "../HeroSection";
import Overlap from "../Overlap";
import heroImage from "@/assets/Images/landingpage.png";
import CardGrid from "../cards/CardGrid";
import HignlightedCard from "../cards/HignlightedCard";
// import ServiceSlider from '@/pages/cards/ServiceSlider';
import Testimonial from '@/pages/Testimonial';
import UserTrust from "../userTrust";
import Articles from "../Articles";
import Footer from "../Footer";

const Navbar = () => {
   const [open, setOpen] = useState(false);

 return (
    <>
      {/* Navbar */}
      <nav className="w-full shadow-sm bg-white text-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flexbox layout for better alignment */}
          <div className="flex justify-between items-center py-4">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <img 
                src={navbarlogo} 
                alt="MediTreck Logo" 
                className="h-14 w-auto object-contain rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation Menu */}
            <ul className="hidden md:flex items-center space-x-8 font-medium">
              <li className="text-green-600 hover:text-green-700 cursor-pointer transition-colors duration-200 font-semibold">
                Home
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Specialities
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Doctor
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                About Us
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Service
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Faq
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Contact US
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

        <HeroSection
        title={
          <>
            Empowering Healthcare <br />
            Professionals with Seamless Patient <br />
            Management
          </>
        }
        image={heroImage}
        height="600px"   // optional override
        overlay="bg-black/50" // optional override
      />

      <Overlap/>

      <CardGrid/>
      <HignlightedCard/>
      {/* <ServiceSlider/> */}
      <Testimonial/>
      <UserTrust/>
      <Articles/>
      <Footer/>

    </>
 )
}

export default Navbar;
