import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#38B6FF] transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-[#38B6FF] transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#38B6FF] transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-[#38B6FF] transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Logo + Social */}
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Dummy logo image
            alt="Company Logo"
            className="w-44 h-auto mb-4"
          />
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-8 h-8 text-white hover:text-[#38B6FF] transition-colors" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-8 h-8 text-white hover:text-[#38B6FF] transition-colors" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-8 h-8 text-white hover:text-[#38B6FF] transition-colors" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-8 h-8 text-white hover:text-[#38B6FF] transition-colors" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-2">
            <li>
              <p>Phone</p>
              <p className="text-gray-400">+1 123-456-7890</p>
            </li>
            <li>
              <p>Email</p>
              <p className="text-gray-400">example@example.com</p>
            </li>
            <li>
              <p>Address</p>
              <p className="text-gray-400">1234 Example St, City, Country</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Quadra Bytes. All rights reserved.
      </div>
    </footer>
  );
}
