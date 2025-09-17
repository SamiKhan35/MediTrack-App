import React from "react";
import servicesImage from "@/assets/Images/servicesImage.jpg";
import ServicesImage1 from "@/assets/Images/ServicesImage1.jpg";
import ServicesImage2 from "@/assets/Images/ServicesImage2.jpg";
import ServicesImage3 from "@/assets/Images/ServicesImage3.jpg";
import ServicesImage4 from "@/assets/Images/ServicesImage4.jpg";
import ServicesImage5 from "@/assets/Images/ServicesImage5.jpg";
import ServicesImage6 from "@/assets/Images/ServicesImage6.jpg";
import Footer from "./Footer";
import Nav from "./Navbar/Nav";

const Services = () => {
  const services = [
    { id: 1, title: "Medical", img: ServicesImage1 },
    { id: 2, title: "Icu", img: ServicesImage2 },
    { id: 3, title: "Test Room", img: ServicesImage3 },
    { id: 4, title: "Operation", img: ServicesImage4 },
    { id: 5, title: "Laboratory", img: ServicesImage5 },
    { id: 6, title: "General Surgery", img: ServicesImage6 },
  ];

  const testimonials = [
    {
      id: 1,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged.`,
      name: "Black, Marvin",
      img: ServicesImage1,
    },
    {
      id: 2,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged.`,
      name: "Nguyen, Shane",
      img: ServicesImage2,
    },
    {
      id: 3,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged.`,
      name: "Miles, Esther",
      img: ServicesImage3,
    },
  ];

  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <img
          src={servicesImage}
          alt="Specialities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
            Services
          </h1>
        </div>
      </div>

      {/* Services Cards Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 flex flex-col items-center text-center bg-white hover:shadow-xl transition"
          >
            <div className="border-2 border-gray-400 rounded-xl p-4 mb-4 w-60 h-60 flex items-center justify-center overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-34 h-40 object-cover rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">
          What Our <span className="text-green-600">Clients Say</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full md:w-[45%] border p-6 shadow-lg relative"
            >
              <p className="text-gray-700 italic mb-4 relative">
                <span className="text-green-600 text-3xl font-bold mr-2">“</span>
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <span className="font-semibold">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center">
        <button className="px-4 py-2 border mb-8 border-gray-400 rounded-lg bg-white text-gray-800 font-medium hover:bg-gray-100 transition">
          View More
        </button>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Services;
