import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 right-0 z-20 bg-transparent">
      <div className="flex justify-between px-6 md:px-20 py-4 items-center">
        {/* Logo Section */}
        <div className="text-white flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="/Images/Logo.png"
            className="w-10 mix-blend-color-burn"
            alt="Logo"
          />
          <span className="ml-2 font-bold text-lg">Quadra Bytes</span>
        </div>

        {/* Desktop Navigation */}
        <div className="text-white flex-col md:flex-row md:flex absolute md:static bg-black md:bg-transparent w-full md:w-auto top-16 left-0 md:top-auto md:left-auto">
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-7 text-sm xl:text-lg">
            <li className="py-2 md:py-0 px-4 md:px-0">
              <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Home</a>
            </li>
            <li className="py-2 md:py-0 px-4 md:px-0">
              <a href="#" onClick={(e) => { e.preventDefault(); navigate("/AboutUs"); }}>About Us</a>
            </li>
            <li className="py-2 md:py-0 px-4 md:px-0">
              <a href="#" onClick={(e) => { e.preventDefault(); navigate("/services"); }}>Services</a>
            </li>
            <li className="py-2 md:py-0 px-4 md:px-0">
              <button className="border-2 rounded-md px-4 py-2 border-[#38B6FF] text-[#38B6FF] hover:bg-[#38B6FF] hover:text-white" onClick={() => { navigate("/contact"); }}>
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
