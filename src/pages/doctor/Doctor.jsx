import React, { useState, useEffect } from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Footer";
import doctors from "@/assets/Images/doctors.png"; // Banner image
import { Mail, User } from "lucide-react";
import axios from "axios";

const Doctor = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch doctors from API on mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");
        setDoctorData(response.data); // Set the API data
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <>
        <Nav />
        <p className="text-center py-10 text-gray-700">Loading doctors...</p>
      </>
    );
  }

  return (
    <>
      <Nav />

      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <img
          src={doctors}
          alt="Specialities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
            Doctors
          </h1>
        </div>
      </div>

      {/* Doctors Grid Section */}
      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doctorData.map((doc) => (
            <div
              key={doc._id || doc.id}
              className="bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              {/* Doctor Image */}
              <img
                src={doc.image || "https://via.placeholder.com/150"}
                alt={doc.name}
                className="w-32 h-32 rounded-full object-cover"
              />

              {/* Doctor Details */}
              <div className="flex-1">
                <h1 className="flex items-center gap-3 text-xl font-bold text-gray-800">
                  <User size={20} /> {doc.name}
                  <span className="px-2 py-1 text-xs text-gray-500 rounded-md">
                    {doc.specialization}
                  </span>
                </h1>

                <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                  {doc.description}
                </p>

                <hr className="w-full my-3 border-gray-300" />

                {/* Email */}
                <a
                  href={`mailto:${doc.email}`}
                  className="text-sm text-blue-700 flex items-center gap-2 hover:underline"
                >
                  <Mail size={16} /> {doc.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-800 font-medium hover:bg-gray-100 transition">
          View More
        </button>
      </div>

      <div className="mt-60">
        <Footer />
      </div>
    </>
  );
};

export default Doctor;
