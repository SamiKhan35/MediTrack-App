import React from "react";
import c1 from "@/assets/Images/c1.png";
import c2 from "@/assets/Images/c2.png";
import c3 from "@/assets/Images/c3.png";







const UserTrust = () => {
  const users = [
    {
      name: "Nice Treatment",
      name1: "Black, Marvin",
      image: c1,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
    {
      name: "Good Hospitability",
      name2: "Nguyen, Shane",
      image: c2,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
    {
      name: "Excellent Service",
      name3:"Miles, Esther",
      image: c3,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        15k Users Trust <span className="text-green-600">MediTrack</span> Worldwide
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between"
          >
            {/* Rating */}
            <div className="text-green-500 text-xl mb-2">★★★★★</div>
              <h1 className="text-lg font-semibold ">{user.name}</h1>

            {/* Review */}
            <p className="text-gray-600 text-sm leading-relaxed text-justify mt-6">
              {user.review}
            </p>

            {/* 👇 Avatar + Name moved to BOTTOM */}
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={user.image}
                alt={user.name}
                className=" flex w-12 h-12 rounded-full object-cover shadow mt-4"
              />
              <h1 className="text-lg font-semibold mt-4">{user.name1}</h1>
              <h1 className="text-lg font-semibold mt-4">{user.name2}</h1>
              <h1 className="text-lg font-semibold mt-4">{user.name3}</h1>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTrust;
