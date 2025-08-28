import React from "react";
import Card from "./Card";

// Import images from assets folder
import img1 from "@/assets/Images/img1.jpg";
import img2 from "@/assets/Images/img2.jpg";
import img3 from "@/assets/Images/img3.jpg";
import img4 from "@/assets/Images/img4.jpg";
import img5 from "@/assets/Images/img5.jpg";
import img6 from "@/assets/Images/img6.jpg";
import img7 from "@/assets/Images/img7.png";
import img8 from "@/assets/Images/img8.jpg";

// Array of card data
const cardData = [
  { image: img1, name: "Cardiologist" },
  { image: img2, name: "Dentist" },
  { image: img3, name: "Neurology" },
  { image: img4, name: "Orthopedic" },
  { image: img5, name: "Laboratory" },
  { image: img6, name: "Ultrasound" },
  { image: img7, name: "Urology" },
  { image: img8, name: "Ophthalmology" },
];

const CardGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
    <div>
    <h2 className="text-2xl font-bold text-center mb-8">
    Highlighting the{" "}
    <span className="text-green-600">Care & Support</span>
    </h2>
    <p className="text-center -mt-4">
    Compassionate care, seamless support – because every patient deserves the best.
    </p>
    </div>


      {/* ✅ UPDATED: flex row, no scroll, no wrap */}
      <div className="flex gap-4 justify-center flex-nowrap">
        {cardData.map((item, index) => (
          <div key={index}>
            <Card image={item.image} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
