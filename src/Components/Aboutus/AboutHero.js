import React from "react";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <img
        src="/Images/AboutUs/Hero.jpg"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-2xl font-bold font-title text-[#38B6FF]">
          QUADRA BYTES
        </h1>
        <p className="mt-4 text-6xl uppercase">About Us  </p>
      </div>
    </div>
  );
}
