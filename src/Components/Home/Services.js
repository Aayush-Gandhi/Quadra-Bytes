import React from "react";

const services = [
  { imgSrc: "/Images/Home/web.jpg", alt: "Web Development", label: "Web Development" },
  { imgSrc: "/Images/Home/app.jpg", alt: "App Development", label: "App Development" },
  { imgSrc: "/Images/Home/shopify.jpg", alt: "Shopify Development", label: "Shopify Development" },
  { imgSrc: "/Images/Home/word.jpg", alt: "Wordpress Development", label: "Wordpress Development" },
  { imgSrc: "/Images/Home/odoo.jpg", alt: "Odoo Development", label: "Odoo Development" },
  { imgSrc: "/Images/Home/ecom.jpg", alt: "E-commerce Development", label: "E-commerce Development" },
  { imgSrc: "/Images/Home/uiux.jpg", alt: "UI/UX Design", label: "UI/UX Design" },
  { imgSrc: "/Images/Home/ai.jpg", alt: "AI/ML Development", label: "AI/ML Development" },
  { imgSrc: "/Images/Home/dig.jpg", alt: "Digital Marketing", label: "Digital Marketing" }
];

export default function Services() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-[1520px] h-full m-auto p-4">
        {/* Title Section */}
        <div className="text-center mb-6">
          <p className="text-2xl mb-2 font-title text-[#38B6FF] uppercase">Our Services</p>
          <p className="text-5xl font-anton "> <span className="text-[#38B6FF]"> Services </span> We Provide</p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-3 grid-rows-3 w-full h-[840px] rounded-lg shadow-lg bg-white">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center border-b-2 border-r-2 border-gray-300 
                          ${index % 3 === 2 ? '' : 'border-r-2'} 
                          ${index >= 6 ? '' : 'border-b-2'} 
                          hover:shadow-[0_0_20px_rgba(0,175,255,0.8)] transition-all duration-300 ease-in-out`}
            >
              <img
                src={service.imgSrc}
                className="w-[74px] h-[74px] object-contain mb-2"
                alt={service.alt}
              />
              <p className="text-center font-medium">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
