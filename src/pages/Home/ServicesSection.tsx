import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  ShoppingCart,
  SquareAsterisk,
  Boxes,
  Store,
  Palette,
  BrainCircuit,
  Megaphone,
} from "lucide-react";

const services = [
  { icon: Code, label: "Web Development" },
  { icon: Smartphone, label: "App Development" },
  { icon: ShoppingCart, label: "Shopify Development" },
  { icon: SquareAsterisk, label: "Wordpress Development" },
  { icon: Boxes, label: "Odoo Development" },
  { icon: Store, label: "E-commerce Development" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: BrainCircuit, label: "AI/ML Development" },
  { icon: Megaphone, label: "Digital Marketing" },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <p className="text-xl text-[#38B6FF] uppercase tracking-widest">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-[#38B6FF]">Services</span> We Provide
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                  <Icon className="w-12 h-12 text-[#38B6FF]" />
                  <p className="text-center text-lg font-medium">{service.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
