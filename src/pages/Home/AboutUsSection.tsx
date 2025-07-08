import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function AboutUsSection() {
  return (
    <section className="bg-[#38B6FF]/10 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
            alt="About us"
            className="w-full max-w-sm md:max-w-md rounded-lg object-cover mix-blend-color-burn"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <p className="text-[#38B6FF] text-xl tracking-widest uppercase">
            About Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Welcome to <span className="text-[#38B6FF]">Quadra Bytes</span>
          </h2>
          <p className="text-lg text-justify">
            In a world driven by constant change, we thrive on adaptability and
            continuously push the boundaries of what is possible.
          </p>
          <p className="text-base text-justify">
            At Quadra Bytes, we're not just adapting to change — we're driving
            it. In a world where technology evolves at lightning speed, we
            thrive on pushing the boundaries of what's possible. Welcome to the
            forefront of innovation, where your digital aspirations meet
            reality.
          </p>
          <Link to="/about-us">
            <Button className="bg-[#38B6FF] hover:bg-[#38B6FF]/90 w-fit">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
