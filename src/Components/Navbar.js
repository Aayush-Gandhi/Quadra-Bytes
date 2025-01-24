import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  

  return (
    <div className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="flex justify-between px-[200px] pt-[20px]">
        <div className="text-white flex items-center">
          <img
            src="/Images/Logo.png"
            className="w-10 mix-blend-color-burn"
            alt="Logo"
          />{" "}
          Quadra Bytes{" "}
        </div>
        <div className="flex space-x-7 items-center text-white">
          <div>
            <a href="#" onClick={() => navigate("/")}>Home</a>
          </div>
          <div>
            <a href="#" onClick={() => navigate("/about")}>About Us</a>
          </div>
          <div>
            <a href="#" onClick={() => navigate("/services")}>Services</a>
          </div>
          <div className="bg-[#38B6FF] text-white w-[150px] p-2 rounded-lg text-center">
            <a href="#" onClick={() => navigate("/contact")}>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
