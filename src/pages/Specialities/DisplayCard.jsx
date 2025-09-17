import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";   // 👈 import this
import {
  FaStar,
  FaVoteYea,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDollarSign,
  FaPen,
} from "react-icons/fa";

import specImg11 from "@/assets/Images/specImg11.jpg";
import specImg12 from "@/assets/Images/specImg12.jpg";
import specImg13 from "@/assets/Images/specImg13.jpg";
import specImg14 from "@/assets/Images/specImg14.jpg";

const badges = [specImg11, specImg12, specImg13, specImg14];

const DisplayCard = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // 👈

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors/alldoctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <p className="text-center py-10">Loading doctors...</p>;

  return (
    <div className="space-y-6">
      {doctors.map((doc) => (
        <div
          key={doc._id}
          className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden flex p-6 items-center"
        >
          {/* Left Side Image */}
          <div className="w-1/3">
            <img
              src={doc.images?.[0] || "https://via.placeholder.com/150"}
              alt={doc.name}
              className="w-[100%] h-[60vh] object-cover rounded-xl"
            />
          </div>

          {/* Right Side Info */}
          <div className="w-2/3 pl-6">
            <h2 className="text-2xl font-bold text-gray-800">{doc.name}</h2>
            <p className="text-lg text-gray-600">{doc.specialization}</p>

            {/* Stars */}
            <div className="flex mt-2 text-yellow-500 text-xl">
              {Array.from({ length: Math.round(doc.rating || 0) }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Badges */}
            <div className="flex space-x-3 mt-3">
              {badges.map((badge, i) => (
                <img
                  key={i}
                  src={badge}
                  alt={`badge-${i}`}
                  className="w-10 h-10 object-cover"
                />
              ))}
            </div>

            {/* Extra Details */}
            <div className="grid grid-cols-2 gap-4 mt-5 text-gray-700">
              <div className="flex items-center space-x-2">
                <FaVoteYea className="text-blue-600" />
                <span>{doc.votes || 0} Votes</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-green-600" />
                <span>{doc.days?.join(", ") || "N/A"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-600" />
                <span>{doc.country || "N/A"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaDollarSign className="text-yellow-600" />
                <span>${doc.fee}</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2">
                <FaPen className="text-purple-600" />
                <span>{doc.availableToday ? "Available Today" : "Absent Today"}</span>
              </div>
            </div>

            {/* View Profile Button */}
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => navigate(`/doctor/${doc._id}`)} // 👈 navigate with doctor id
                className="px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-800 font-medium hover:bg-gray-100 transition"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayCard;
