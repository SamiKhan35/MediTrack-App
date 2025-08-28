import React from 'react'
import { FaBook } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";
import { GiHealthPotion } from "react-icons/gi";
const Overlap = () => {
  return (
    <div>
        {/* Overlapping Container */}
<div className="relative -mt-24 z-10 flex justify-center">
  <div className="bg-white shadow-lg rounded-2xl p-6 w-11/12 md:w-4/5 flex flex-wrap justify-around items-center gap-6">
    
    {/* Single Item */}
    <div className="flex flex-col items-center text-center">
      <div className="bg-green-100 p-4 rounded-full mb-2">
        {/* Replace with icon (e.g. lucide, react-icons) */}
    <FaBook />

      </div>
      <p className="font-semibold text-gray-700">Book Appointment</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="bg-blue-100 p-4 rounded-full mb-2">
        💬
      </div>
      <p className="font-semibold text-gray-700">Talk to Doctors</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="bg-purple-100 p-4 rounded-full mb-2">
        <FaHospitalAlt />

      </div>
      <p className="font-semibold text-gray-700">Hospitals & Clinics</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="bg-yellow-100 p-4 rounded-full mb-2">
        <GiHealthPotion />

      </div>
      <p className="font-semibold text-gray-700">Healthcare</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="bg-red-100 p-4 rounded-full mb-2">
        💊
      </div>
      <p className="font-semibold text-gray-700">Medicine & Supplies</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="bg-indigo-100 p-4 rounded-full mb-2">
        🔬
      </div>
      <p className="font-semibold text-gray-700">Lab Testing</p>
    </div>

  </div>
</div>

    </div>
  )
}

export default Overlap