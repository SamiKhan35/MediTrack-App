import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/features/auth/Login";
import Navbar from "@/pages/Navbar/Navbar";
import Specialities from "@/pages/Specialities/Specialities";
import Nav from "./pages/Navbar/Nav";
import Doctor from "./pages/doctor/Doctor";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "@/pages/PageNotFound"
import Services from "./pages/Services";
import FrequentAsked from "./pages/FrequentAsked";
import DoctorDetails from "./pages/Specialities/DoctorDetails";



const App = () => {
  return (
    <div>
      <Routes>
        {/* Redirect root path to login */}
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/navmenubar" element={<Nav />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FrequentAsked />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />

      </Routes>
    </div>
  );
};

export default App;