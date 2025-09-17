import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import navbarlogo1 from "@/assets/Images/navbarlogo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#15476C] text-white rounded-t-4xl">
      {/* 🔹 Newsletter Section */}
     <div className="bg-white w-full max-w-lg mx-auto -mt-10 rounded-lg shadow-md p-4 flex items-center justify-between">
  
<div className="flex items-center gap-4">
  {/* Left side text */}
  <p className="text-xs text-blue-800">
    SUBSCRIBE TO OUR <br />
    <span className="text-green-600 font-bold">NEWSLETTER</span>
  </p>

  {/* Right side input + button */}
  <div className="relative w-full max-w-sm ml-6">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full border text-black border-gray-300 rounded-md px-3 py-2 pr-24 text-sm focus:outline-none"
    />
    <button
      className="absolute right-1 top-1 bottom-1 bg-[#15476C] text-white text-sm px-4 rounded-md hover:bg-[#123a59]"
    >
      Book now
    </button>
  </div>
</div>

</div>


      {/* 🔹 Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
        <img
        src={navbarlogo1}
        alt="MediTreck Logo"
        className="h-16 w-auto max-w-[160px] object-contain filter brightness-0 invert cursor-pointer transition-transform duration-300 hover:scale-105"
        />

          <p className="text-sm text-gray-200 leading-relaxed">
            MediTrack simplifies healthcare for hospitals and patients. Manage
            appointments, access records, and improve care — all in one place.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Specialties</a></li>
            <li><a href="#" className="hover:text-gray-300">Doctor</a></li>
            <li><a href="#" className="hover:text-gray-300">About us</a></li>
            <li><a href="#" className="hover:text-gray-300">Service</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact us</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> 945.860.8544 ×2890</li>
            <li className="flex items-center gap-2"><Mail size={16} /> meditrack@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> 5350 Saviankist Field, Sedrickstad 33352-4353</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow us</h3>
          <div className="flex space-x-4">
            <a href="#"><FaLinkedin size={20} /></a>
            <a href="#"><FaFacebook size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Footer */}
      <div className="text-center py-4 text-sm text-gray-300">
        2025 MediTrack. All right reserved. designed by{" "}
        <span className="font-semibold text-white">SaMi</span>
      </div>
    </footer>
  );
};

export default Footer;
