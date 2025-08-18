import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/Images/Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact-us", label: "Contact Us" },
    { path: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo + Company Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Quadra Bytes Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-black">Quadra Bytes</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-[#38B6FF] transition-colors ${
                location.pathname === link.path ? "text-[#38B6FF] font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <motion.div
                className="flex flex-col h-full"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="flex flex-col items-center p-4 space-y-4 mt-[25%]">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`text-lg hover:text-[#38B6FF] transition-colors ${
                        location.pathname === link.path ? "text-[#38B6FF] font-semibold" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
