import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const ref = useRef(null);

  // Toggle mobile menu
  const handleOpen = () => {
    setOpen(!open);
  };

  // Close menu when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1023) {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup event
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside); // Cleanup
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-20 bg-transparent">
      <div className="flex justify-between px-[200px] pt-[20px]">
        {/* Logo */}
        <div className="text-white flex items-center">
          <img
            src="/Images/Logo.png"
            className="w-10 mix-blend-color-burn"
            alt="Logo"
          />
          <span className="ml-2">Quadra Bytes</span>
        </div>

        {/* Navigation Menu */}
        <div className="text-white/[.80] flex items-center justify-end space-x-7">
          <ul className="flex space-x-10 text-sm xl:text-lg items-center">
            <li>
              <a href="" onClick={() => navigate("/")}>
                Home
              </a>
            </li>
            <li>
              <a href="" onClick={() => navigate("/Aboutus")}>
                About Us
              </a>
            </li>
            <li>
              <a href="" onClick={() => navigate("/Services")}>
                Services
              </a>
            </li>
            <li>
              <button
                className="border-2 rounded-md px-4 py-2 border-[#38B6FF] text-[#38B6FF] hover:bg-[#38B6FF] hover:text-white"
                onClick={() => navigate("/Contactus")}
              >
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
