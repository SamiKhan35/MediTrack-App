import React from "react";

const HeroSection = ({
  title,        // h1 text
  image,        // background image
  height = "500px", // default height but can be overridden
  overlay = "bg-black/40" // default overlay color
}) => {
  return (
    <div className="relative w-full" style={{ height }}>
      {/* Background Image */}
      <img
        src={image}
        alt="Hero Section"
        className="w-full h-full object-cover"
      />

      {/* Overlay with Text */}
      <div className={`absolute inset-0 ${overlay} flex items-center justify-center`}>
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center leading-relaxed">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
