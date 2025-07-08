import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Example Inc.",
      message:
        "Quadra Bytes helped us transform our digital strategy. Their team is knowledgeable, responsive, and delivers quality work consistently.",
      image: "/Images/Testimonials/john.jpg",
    },
    {
      name: "Jane Smith",
      role: "CTO, Sample Co.",
      message:
        "Working with Quadra Bytes was a game-changer. Their solutions improved our operations efficiency by 40%.",
      image: "/Images/Testimonials/jane.jpg",
    },
    {
      name: "Alex Johnson",
      role: "Founder, Startup XYZ",
      message:
        "Highly recommend Quadra Bytes. Their design and development expertise is unmatched.",
      image: "/Images/Testimonials/alex.jpg",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl text-[#38B6FF] uppercase tracking-widest">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Hear from <span className="text-[#38B6FF]">Our Clients</span>
          </h2>
          <p className="mt-4 text-lg">
            We take pride in delivering excellent services to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#38B6FF]/10 shadow hover:shadow-lg transition">
              <CardContent className="p-6 space-y-4 flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <p className="italic">"{testimonial.message}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-700">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
