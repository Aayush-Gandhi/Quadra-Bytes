import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function ContactUsSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-[#38B6FF]">Contact</span> Information
          </h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-[#38B6FF]" />
              <p>123-456-7890</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-[#38B6FF]" />
              <p>example@example.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-[#38B6FF]" />
              <p>1234 Example St, City, Country</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <Facebook className="w-8 h-8 text-[#38B6FF] hover:text-black transition-colors" />
            <Instagram className="w-8 h-8 text-[#38B6FF] hover:text-black transition-colors" />
            <Twitter className="w-8 h-8 text-[#38B6FF] hover:text-black transition-colors" />
            <Linkedin className="w-8 h-8 text-[#38B6FF] hover:text-black transition-colors" />
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D"
            alt="Contact illustration"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
