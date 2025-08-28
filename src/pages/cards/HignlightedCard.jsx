import React from "react";
import CardHighlight from "./CardHighlight";

// Import images from assets folder
import img1 from "@/assets/Images/face.jpg";
import img2 from "@/assets/Images/b face.jpg";
import img3 from "@/assets/Images/bb face.jpg";

// Array of card data (only 3 cards)
const cardData = [
  { image: img1, specialization: "Laboratory", name: "Dr. Julia, Kaiser", rating: "4.63" },
  { image: img2, specialization: "Cardiologist", name: "Dr. Jürgen, Krause", rating: "4.00" },
  { image: img3, specialization: "Dentist", name: "Dr. Gisela, von Schr", rating: "4.10" },
];

const HignlightedCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Highlighted{" "}
          <span className="text-green-600">Doctors</span>
        </h2>
        <p className="text-center -mt-4">
"Meet Our Expert Doctors – Skilled, Compassionate, and Committed to Your Care.</p>
      </div>

      {/* ✅ Show only 3 cards */}
      <div className="flex gap-4 justify-center flex-nowrap mt-8">
        {cardData.map((item, index) => (
          <div key={index}>
            <CardHighlight 
            key={index}
            image={item.image}
            specialization={item.specialization}
            name={item.name}
            rating= {item.rating}
            
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HignlightedCard;


