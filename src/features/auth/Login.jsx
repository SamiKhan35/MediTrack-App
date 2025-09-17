import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import loginimage from "../../assets/Images/loginimage.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // SIGNUP
        const res = await axios.post("http://localhost:5000/api/users", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setMessage("User Registered Successfully");
        console.log("Signup Record:", res.data);
      } else {
        // LOGIN
        const res = await axios.post("http://localhost:5000/api/users/login", {
          email: formData.email,
          password: formData.password,
        });
        setMessage("Logged in successfully!");
        console.log("Login Response:", res.data);

        // Navigate to Nav component
        navigate("/nav");
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      setMessage("Error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Side - fixed full screen image */}
      <div className="h-screen w-full">
        <img src={loginimage} alt="login" className="w-full h-full object-cover" />
      </div>

      {/* Right Side */}
      <div className="flex flex-col px-8 md:px-20 h-screen overflow-y-auto">
        <h1 className="text-4xl font-bold mt-16 mb-4 text-[#14476D] text-center">
          Welcome
        </h1>
        <p className="mb-8 text-center text-[#5BBF00]">
          {isSignup
            ? "Create a new account to continue"
            : "Log in to your account to continue"}
        </p>

        {isSignup ? (
          <>
            {/* SIGNUP FORM */}
            <h2 className="text-xl font-bold mb-4 text-[#14476D] text-center">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="User Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="text-white py-3 rounded-lg bg-[#14476D]"
              >
                Sign Up
              </button>
            </form>

            {/* Switch back to Login */}
            <p className="text-center text-gray-600 mt-6">
              Already have an account?{" "}
              <button
                onClick={() => setIsSignup(false)}
                className="font-bold text-[#14476D] hover:underline"
              >
                Log in
              </button>
            </p>
          </>
        ) : (
          <>
            {/* LOGIN FORM */}
            <h2 className="text-xl font-bold mb-4 text-[#14476D] text-center">
              Login
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-end">
                <a href="#" className="text-sm hover:underline text-[#14476D]">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="text-white py-3 rounded-lg bg-[#14476D]"
              >
                Log In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-gray-500">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social Login */}
            <div className="flex justify-center gap-6 mb-6">
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
                <FaGoogle className="text-red-500" />
                Google
              </button>
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
                <FaFacebook className="text-blue-600" />
                Facebook
              </button>
            </div>

            <p className="text-center text-gray-600 mb-6">
              Don’t have an account?{" "}
              <button
                onClick={() => setIsSignup(true)}
                className="font-bold text-[#14476D] hover:underline"
              >
                Sign Up
              </button>
            </p>
          </>
        )}

        {/*Show messages */}
        {message && (
          <p className="text-center mt-4 font-semibold text-red-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
