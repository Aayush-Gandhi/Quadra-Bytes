import Hero from "@/pages/Home/HeroSection";
import AboutUsSection from "@/pages/Home/AboutUsSection";
import ServicesSection from "@/pages/Home/ServicesSection";
import ContactUsSection from "@/pages/Home/ContactUsSection";
import TestimonialsSection from "./TestimonialsSection";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      {/* Other sections here */}
      <ContactUsSection />
      <TestimonialsSection />
    </>
  );
}
