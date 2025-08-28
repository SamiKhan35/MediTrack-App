import React from "react";

const CardHighlight = ({ image, specialization, name, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      
      {/* Image section with rating badge */}
      <div className="relative h-full w-full flex items-center justify-center ">
        <img 
          src={image} 
          alt={name} 
          className="h-full object-cover"
        />
        {rating && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            ⭐ {rating}
          </span>
        )}
      </div>

      {/* Doctor details */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-sm text-blue-700 font-semibold mb-1">{specialization}</h3>
        <h2 className="text-lg font-bold text-gray-900 mb-2">{name}</h2>

        {/* Availability badge */}
        <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
          Available
        </span>

        {/* Fees + Book Now */}
        <div className="mt-3">
          <p className="text-gray-600 text-sm">Consultation fees</p>
          <p className="text-lg font-semibold text-gray-800">$0</p>
        </div>

        <button className="w-full mt-auto bg-blue-700 text-white font-medium py-2 rounded-lg hover:bg-blue-800">
          Book now
        </button>
      </div>
    </div>
  );
};

export default CardHighlight;
