import React from "react";

export default function OurServices() {
  const services = [
    {
      img: "Images/Services/Web.jpg",
      no: "01",
      Title: "Web Development",
      Desc: "Web development refers to the process of creating and maintaining websites or web applications.",
    },
    {
      img: "Images/Services/Appdev.jpg",
      no: "02",
      Title: "App Development",
      Desc: "Process of creating software applications that run on various devices such as smartphones, tablets, computers, or other electronic devices.",
    },
    {
      img: "Images/Services/Shopify.jpg",
      no: "03",
      Title: "Shopify Development",
      Desc: "Shopify is an e-commerce platform. It provides a comprehensive set of tools and services to help entrepreneurs and businesses set up an online presence, sell products or services.",
    },
    {
      img: "Images/Services/wordpress.jpg",
      no: "04",
      Title: "Wordpress Development",
      Desc: "It's open-source, flexible, and widely used for various types of websites, ranging from blogs and small business sites to large e-commerce platforms.",
    },
    {
      img: "Images/Services/odoo.jpg",
      no: "05",
      Title: "Odoo Development",
      Desc: "Odoo is a suite of fully integrated open. source business apps that offers simplicity in everyday use. It is very intuitive. It is the all-in-one ERP that allows you to manage all aspects of a company in a single software.",
    },
    {
      img: "Images/Services/ecom.jpg",
      no: "06",
      Title: "E-commerce Development",
      Desc: "E-commerce software is a stand-alone program or software suite that enables. you to sell your products and services online. It allows you to streamline all of your processes from inventory to sales through the backend and makes it easy for a customer to buy from the front end, which is your website.",
    },
    {
      img: "Images/Services/uiux.jpg",
      no: "07",
      Title: "UI/UX Design",
      Desc: "UX/UI Design, Create beautiful, user-friendly designs for websites, mobile apps, and other human-machine Interfaces. Platform and. Infrastructure.",
    },
    {
      img: "Images/Services/ai.jpg",
      no: "08",
      Title: "AI Development",
      Desc: "EArtificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of Al Include expert systems, natural language processing, speech recognition and machine vision.",
    },
    {
      img: "Images/Services/digmar.jpg",
      no: "09",
      Title: "Digital Marketing",
      Desc: "Digital marketing provides businesses with the ability to target specific demographics, measure campaign performance in real-time, and adjust strategies dynamically.",
    },
  ];
  return (
    <div>
      {/* Header Section */}
      <div className="text-center pt-20">
        <p className="text-2xl text-[#38B6FF] font-title">Services</p>
        <p className="text-5xl font-anton pt-4">
          Our <span className="text-[#38B6FF]"> Services </span>
        </p>
        <p className="text-2xl font-title py-5">
          At Quadra Bytes we are providing all of these services
        </p>
      </div>

      {/* Services Section */}

      <div className="px-[200px] py-10 space-y-20">
        {services.map((service, index) => (
          <div key={index}>
            {/* Service Block */}
            <div
              className={`flex justify-between items-center ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              } gap-10`}
            >
              <div className="flex-shrink-0">
                <img
                  src={service.img}
                  alt={service.Title}
                  className="w-[521px] h-[313px]"
                />
              </div>
              <div className="flex-1">
                <p className="font-anton text-6xl text-[#38B6FF]/[0.50]">
                  {service.no}
                </p>
                <p className="font-anton text-3xl pt-4">{service.Title}</p>
                <p className="font-title text-xl pt-6 opacity-50">{service.Desc}</p>
              </div>
            </div>

            {/* Divider Line */}
            {index < services.length - 1 && (
              <div className="mt-10 border-t-2 border-[#38B6FF]/[0.50]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
