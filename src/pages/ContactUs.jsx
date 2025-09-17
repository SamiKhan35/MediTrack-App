import React from "react";
import Nav from "./Navbar/Nav";
import contact from "@/assets/Images/contact.jpg";
import GoogleMap from "./GoogleMap";
import Footer from "./Footer";
import { Phone, Mail, MapPin } from "lucide-react"; // icons

const ContactUs = () => {
  return (
    <div>
      <Nav />
      
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <img
          src={contact}
          alt="Specialities"
          className="w-full h-full object-cover"
        />

        {/* Overlay with centered text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-16 px-6">
        {/* Phone */}
        <div className="bg-[#15476C] text-white shadow-lg p-6 flex flex-col items-center text-center">
          <Phone size={40} className="mb-3" />
          <h1 className="text-2xl font-semibold mb-2">Phone Numbers</h1>
          <p className="text-lg">+92 300 1234567</p>
        </div>

        {/* Email */}
        <div className="bg-[#15476C] text-white shadow-lg p-6 flex flex-col items-center text-center">
          <Mail size={40} className="mb-3" />
          <h1 className="text-2xl font-semibold mb-2">Email</h1>
          <p className="text-lg">sami@gmail.com</p>
        </div>

        {/* Address */}
        <div className="bg-[#15476C] text-white shadow-lg p-6 flex flex-col items-center text-center">
          <MapPin size={40} className="mb-3" />
          <h1 className="text-2xl font-semibold mb-2">Address</h1>
          <p className="text-lg">123 Main Street</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto py-16 px-6 gap-10 items-stretch">
        {/* Left Side - Google Map */}
        <div className="w-full h-[400px] shadow-lg rounded-lg overflow-hidden">
          <GoogleMap />
        </div>

        {/* Right Side - Form */}
        <div className="p-8 bg-white h-[500px] flex flex-col justify-between">
          <div>
            <p className="text-gray-600">Get in touch</p>
            <h1 className="text-3xl font-semibold mb-6 text-black">
              Contact Details
            </h1>

            <form className="space-y-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15476C]"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15476C]"
              />

              {/* Message */}
              <textarea
                placeholder="Your message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15476C]"
              ></textarea>
            </form>
            {/* Submit */}
          <button
            type="submit"
            className="min-w-[150px] mt-4 self-start bg-[#15476C] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#103a57] transition"
          >
            Submit
          </button>
          </div>

        
        </div>
          
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;