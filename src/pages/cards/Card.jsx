import React from "react";

const Card = ({ image, name }) => {
  return (
    <div className="bg-white rounded-xl mt-8 overflow-hidden w-full max-w-[220px] hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-40 object-cover rounded-t-xl"
      />
      
      {/* Name */}
      <div className="p-3 text-center">
        <p className="text-gray-800 font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default Card;
