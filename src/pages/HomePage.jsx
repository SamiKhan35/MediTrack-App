import React from "react";
import HeroSection from "./HeroSection";
import heroImage from "@/assets/Images/landingpage.png";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title={
          <>
            Empowering Healthcare <br />
            Professionals with Seamless Patient <br />
            Management
          </>
        }
        image={heroImage}
        height="600px"   // optional override
        overlay="bg-black/50" // optional override
      />
    </div>
  );
};

export default HomePage;
