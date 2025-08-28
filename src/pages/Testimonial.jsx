import React from "react";
import bgImage from "@/assets/Images/Rectangle 1.jpg"; 
import img1 from "@/assets/Images/image11.jpg"; 
import img2 from "@/assets/Images/image12.jpg";

const Testimonial = () => {
  return (
    <div
      className="relative w-full mt-12 bg-cover bg-center py-16 rounded-tr-[100px] rounded-bl-[100px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side */}
        <div className="text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            We are committed to
            <br />
            understanding your{" "}
            <span className="text-green-500 font-bold">
              unique needs and delivering care
            </span>
          </h1>
          <p className="text-lg mt-16 md:text-xl max-w-lg">
            Our hospital appointment and record management system is designed with a deep 
            understanding of your individual healthcare journey. We are dedicated to providing 
            a seamless and personalized experience, ensuring your unique needs are met with attentive and efficient care."
          </p>
        </div>   

        {/* Right Side with overlapping images */}
        <div className="relative flex justify-center md:justify-end">
          {/* Large Image */}
          <img
            src={img1}
            alt="Healthcare 1"
            className="w-96 h-64 md:w-[420px] md:h-[280px] object-cover rounded-2xl shadow-xl "
          />
          {/* Small Overlapping Image */}
          <img
            src={img2}
            alt="Healthcare 2"
            className="absolute -bottom-22 left-16 w-60 h-40 object-cover rounded-xl shadow-lg border-4 border-none  bg-[#0A1F44]"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
