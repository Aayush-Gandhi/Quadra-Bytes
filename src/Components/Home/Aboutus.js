import React from "react";

export default function Aboutus() {
  return (
    <div className="bg-[#38B6FF]/[.10] flex justify-around h-[750px] items-center font-outfit"> {/* Apply the custom font */}
        <div>
          <img src="/Images/Home/Aboutus.jpg" className="w-[500px] h-[550px] mix-blend-color-burn" alt="" />
        </div>
        <div className="w-[750px] space-y-4">
          <p className="text-[#38B6FF] text-2xl font-title tracking-widest">ABOUT US</p>
          <p className="uppercase text-5xl font-anton"> Welcome to <span className="text-[#38B6FF]"> Quadra Bytes </span> </p>
          <p className="text-2xl font-medium font-title text-justify">
            In a world driven by constant change, we thrive on adaptability and
            continuously push the boundaries of what is possible.
          </p>
          <p className="text-xl font-light font-title text-justify">
            At Quadra Bytes, we're not just adapting to change — we're driving
            it. In a world where technology evolves at lightning speed, we
            thrive on pushing the boundaries of what's possible. Welcome to the
            forefront of innovation, where your digital aspirations meet
            reality.
          </p>
          <button className="bg-[#38B6FF] text-white w-[150px] p-2 rounded-lg">
            Read More
          </button>
        </div>
    </div>
  );
}