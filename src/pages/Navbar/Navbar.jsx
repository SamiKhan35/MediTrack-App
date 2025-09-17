import React from "react";
 import HeroSection from "@/pages/HeroSection";
import Overlap from "@/pages/Overlap";
import heroImage from "@/assets/Images/landingpage.png";
import CardGrid from "@/pages/cards/CardGrid";
import HignlightedCard from "../cards/HignlightedCard";
// import ServiceSlider from '@/pages/cards/ServiceSlider';
import Testimonial from '@/pages/Testimonial';
import UserTrust from "@/pages/UserTrust";
import Articles from "@/pages/Articles";
import Footer from "@/pages/Footer";
import Nav from "./Nav";

const Navbar = () => {
  //  const [open, setOpen] = useState(false);

 return (
    <>
      <Nav/>
   <div className="pt-20">
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

        

      <Overlap/>

      <CardGrid/>
      {/* <HignlightedCard/> */}
      {/* <ServiceSlider/> */}
      <Testimonial/>
      <UserTrust/>
      <Articles/>
      <Footer/>

    </>
 )
}

export default Navbar;
