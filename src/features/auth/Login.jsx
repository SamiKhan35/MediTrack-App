import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import loginimage from "../../assets/Images/loginimage.jpg";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* ✅ Left Side - fixed full screen image */}
      <div className="h-screen w-full">
        <img src={loginimage} alt="" className="w-full h-full object-cover" />
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
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="User Name:"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email:"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password:"
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
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email:"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2  focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password:"
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
                Sign up
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
