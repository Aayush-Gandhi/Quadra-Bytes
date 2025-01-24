import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white h-[565px] m-auto flex items-center justify-center">
      <div className="flex w-full max-w-7xl justify-between space-x-8">
        
        {/* Left Section */}
        <div className="w-1/3 m-auto space-y-6">
          <div>
            <p className="text-lg font-semibold mb-2">Quick Links</p>
          </div>
          <div>
            <a href="#" onClick={() => navigate("/")} className="block">Home</a>
          </div>
          <div>
            <a href="#" onClick={() => navigate("/about")} className="block">About Us</a>
          </div>
          <div>
            <a href="#" onClick={() => navigate("/services")} className="block">Services</a>
          </div>
          <div>
            <a href="#" onClick={() => navigate("/contact")} className="block">Contact Us</a>
          </div>
        </div>

        {/* Center Section (Logo + Social Icons) */}
        <div className="w-1/3 text-center m-auto">
          <div>
            <img
              src="/Images/Logo.png"
              className="w-[174px] h-[144px] mx-auto mb-4"
              alt="Logo"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <FaFacebookF className="text-white border-2 border-gray-800 rounded-full w-11 h-11 p-2 bg-gray-800" />
            <BsInstagram className="text-white border-2 border-gray-800 rounded-full w-11 h-11 p-2 bg-gray-800" />
            <FaSquareXTwitter className="text-white border-2 border-gray-800 rounded-full w-11 h-11 p-2 bg-gray-800" />
            <FaLinkedinIn className="text-white border-2 border-gray-800 rounded-full w-11 h-11 p-2 bg-gray-800" />
          </div>
        </div>

        {/* Right Section (Contact Info) */}
        <div className="w-1/3 flex flex-col pl-[20%] m-auto">
          <div className="mb-4">
            <p className="text-lg font-semibold">Contact Information</p>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-left">Phone</p>
            <p className="text-left">+1 1234567890</p>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-left">Email</p>
            <p className="text-left">example@example.com</p>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-left">Address</p>
            <p className="text-left">1234 Example St, City, County</p>
          </div>
        </div>

      </div>
    </div>
  );
}
