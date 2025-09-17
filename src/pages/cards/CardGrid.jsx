import React, { useState, useEffect } from "react";
import Card from "./Card";
import CardHighlight from "./CardHighlight"; 
import axios from "axios";

const CardGrid = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [specializationDoctors, setSpecializationDoctors] = useState([]); 
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // ✅ fetch doctors by specialization
const fetchDoctorsBySpecialization = async (specialization) => {
  try {
    const encodedSpecialization = encodeURIComponent(specialization);
    const response = await axios.get(
      `http://localhost:5000/api/doctors?specialization=${encodedSpecialization}`
    );
    setSpecializationDoctors(response.data);
  } catch (error) {
    console.error("Error fetching specialization doctors:", error);
  }
};


  if (loading) return <p className="text-center py-10">Loading doctors...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">
          Highlighting the <span className="text-green-600">Care & Support</span>
        </h2>
        <p className="text-center -mt-4">
          Compassionate care, seamless support – because every patient deserves the best.
        </p>
      </div>

      {/* ✅ All doctors (click to filter by specialization) */}
      <div className="flex gap-4 justify-center flex-nowrap overflow-x-auto">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            onClick={() => fetchDoctorsBySpecialization(doctor.specialization)}
          >
            <Card
              image={doctor.image || "https://via.placeholder.com/150"}
              name={`${doctor.name} - ${doctor.specialization} ($${doctor.fee})`}
            />
          </div>
        ))}
      </div>

      {/* ✅ Show doctors of selected specialization */}
      {specializationDoctors.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-center mb-6">
            Doctors in {specializationDoctors[0].specialization}
          </h3>
          <div className="flex gap-6 flex-wrap justify-center">
            {specializationDoctors.map((doc) => (
              <CardHighlight
                key={doc._id}
                image={doc.image || "https://via.placeholder.com/150"}
                specialization={doc.specialization}
                name={doc.name}
                fee={doc.fee}
                rating={doc.rating || "N/A"}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardGrid;
