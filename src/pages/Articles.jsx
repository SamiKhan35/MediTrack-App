import React from "react";
import Articleimage1 from "@/assets/Images/Articleimag1.jpg";
import Articleimag2 from "@/assets/Images/Articleimag2.jpg";
import Articleimag3 from "@/assets/Images/Articleimag3.jpg";

const Articles = () => {
  const users = [
    {
      name: "MediTrack Making your clinic painless Visit?",
      image: Articleimage1,
      review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
      doctor: "Clinics",
    },
    {
      name: "MediTrack Making your clinic painless Visit?",
      image: Articleimag2,
      review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
      doctor: "Clinic",
    },
    {
      name: "MediTrack Making your clinic painless Visit?",
      image: Articleimag3,
      review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
      doctor: "Doctor",
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Stay Updated With{" "}
        <span className="text-green-600">Our Latest Articles</span>
      </h1>
      <p className="text-center mb-12">
        Stay Informed with Our Latest Insights. Explore Articles That Matter to
        You
      </p>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-stretch"
          >
            {/* Alternate Left / Right positioning */}
            {index % 2 === 0 ? (
              <>
                {/* Card on Left */}
                <div className="w-full md:w-5/6 max-w-4xl  bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
   
                  {/* Image Left with Date Overlay */}
                  <div className="md:w-4/8 relative flex justify-center items-center p-4">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-100 object-cover rounded-lg shadow-md"
                    />
                    {/* 🔹 Date Overlay */}
                    <span className="absolute top-20 left-6 bg-white bg-opacity-70 text-black px-3 py-1 rounded-md text-sm ">
                      15 <br /> April
                    </span>
                  </div>

                  {/* Content Right */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    {/* 🔹 Button Above Heading */}
                    <div className="text-left mt-4">
                      <button className="bg-[#15476C] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#123a59] transition">
                        {user.doctor}
                      </button>
                    </div>

                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-tight">
                      {user.name}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                      {user.review}
                    </p>
                  </div>
                </div>

                {/* Empty Right */}
                <div className="hidden md:block w-1/2"></div>
              </>
            ) : (
              <>
                {/* Empty Left */}
                <div className="hidden md:block w-1/2"></div>

                {/* Card on Right */}
                <div className="w-full md:w-2/3 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                  {/* Image Left with Date Overlay */}
                  <div className="md:w-4/8 relative flex justify-center items-center p-4">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-100 object-cover rounded-lg shadow-md"
                    />
                    {/* 🔹 Date Overlay */}
                    <span className="absolute top-20 left-6 bg-white bg-opacity-70 text-black px-3 py-1 rounded-md text-sm">
                      15 <br /> April
                    </span>
                  </div>

                  {/* Content Right */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    {/* 🔹 Button Above Heading */}
                    <div className="text-left mt-4">
                      <button className="bg-[#15476C] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#123a59] transition">
                        {user.doctor}
                      </button>
                    </div>

                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-tight">
                      {user.name}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                      {user.review}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
  <button className="text-[#123a59] px-6 py-2 border border-[#123a59] rounded-md hover:bg-[#123a59] hover:text-white transition">
    View all articles
  </button>
  <br/><br/><br/><br/><br/><br/>
</div>
    </div>
  );
};

export default Articles;
