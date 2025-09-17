import React from "react";
import specialities from "@/assets/Images/specialities.png";
import Nav from "../Navbar/Nav";
import Articles from "../Articles";
import Footer from "../Footer";
import DisplayCard from "./DisplayCard";

const Specialities = () => {
  return (
    <div className="w-full">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <img
          src={specialities}
          alt="Specialities"
          className="w-full h-full object-cover"
        />

        {/* Overlay with centered text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
            Specialities
          </h1>
        </div>
      </div>

      {/* Display Cards Section */}
      <div className="my-16 px-6">
        <DisplayCard />
      </div>

      {/* Footer with spacing above */}
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  );
};

export default Specialities;
