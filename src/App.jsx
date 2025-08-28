import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/features/auth/Login";
import Navbar from "@/pages/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Redirect root path to login */}
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nav" element={<Navbar />} />
      </Routes>
    </div>
  );
};

export default App;