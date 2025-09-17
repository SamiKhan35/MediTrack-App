import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaStar,
  FaVoteYea,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDollarSign,
  FaPen,
} from "react-icons/fa";

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/doctors/alldoctors/${id}`
        );
        setDoctor(response.data);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading doctor details...</p>;
  if (!doctor) return <p className="text-center py-10">Doctor not found</p>;

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white shadow-lg rounded-2xl p-6">
      <div className="flex gap-6">
        {/* Doctor Image */}
        <div className="w-1/3">
          <img
            src={doctor.images?.[0] || "https://via.placeholder.com/150"}
            alt={doctor.name}
            className="w-full h-[60vh] object-cover rounded-xl"
          />
        </div>

        {/* Doctor Info */}
        <div className="w-2/3">
          <h2 className="text-3xl font-bold text-gray-800">{doctor.name}</h2>
          <p className="text-lg text-gray-600">{doctor.specialization}</p>

          {/* Stars */}
          <div className="flex mt-2 text-yellow-500 text-xl">
            {Array.from({ length: Math.round(doctor.rating || 0) }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* Extra Details */}
          <div className="grid grid-cols-2 gap-4 mt-5 text-gray-700">
            <div className="flex items-center space-x-2">
              <FaVoteYea className="text-blue-600" />
              <span>{doctor.votes || 0} Votes</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-green-600" />
              <span>{doctor.days?.join(", ") || "N/A"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-red-600" />
              <span>{doctor.country || "N/A"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaDollarSign className="text-yellow-600" />
              <span>${doctor.fee}</span>
            </div>
            <div className="flex items-center space-x-2 col-span-2">
              <FaPen className="text-purple-600" />
              <span>
                {doctor.availableToday ? "Available Today" : "Absent Today"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
