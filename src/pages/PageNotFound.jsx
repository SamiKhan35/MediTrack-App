import React from 'react'
import Nav from "./Navbar/Nav";
import pagenotfound from "@/assets/Images/notfound.png";

const PageNotFound = () => {
  return (
    <div>
      <Nav />
      
      {/* Hero Section */}
     <div className="bg-sky-50 w-full h-[100vh] flex flex-col items-center justify-start pt-32">
  <img
    src={pagenotfound}
    alt="Page Not Found"
    className="max-w-md w-full h-auto object-contain"
  />
</div>

    </div>
  )
}

export default PageNotFound
