import React from "react";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <img src="/Images/Home/Hero.jpg" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
        <h1 className="text-2xl font-bold font-sans">QUADRA BYTES</h1>
        <p className="mt-4 text-6xl uppercase">
          Empowering Progress, Amplifying Success
        </p>
        <p className="mt-4 text-base pt-[30px]">
          At Quadra Bytes, we lead the charge in embracing and shaping
          technological advancements.
        </p>
        <div className="pt-[65px]">
            <button className="bg-[#38B6FF] text-white w-[150px] p-2 rounded-lg">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
