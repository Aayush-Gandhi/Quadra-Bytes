import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael Rivera",
      // role: "CTO, Horizon Tech",
      message:
        "Quadra Bytes completely revamped our web platform. Their development team delivered a fast, modern, and scalable solution that improved our user experience and boosted engagement across the board.",
      // image: "/Images/Testimonials/john.jpg",
    },
    {
      name: "Sarah Thompson",
      // role: "Marketing Director, BrightWave Media",
      message:
        "Partnering with Quadra Bytes elevated our entire marketing strategy. Their creative approach, data-driven insights, and flawless execution helped us reach new audiences and exceed our campaign goals.",
      // image: "/Images/Testimonials/jane.jpg",
    },
    {
      name: "Tim David",
      // role: "Founder, Nova Innovations",
      message:
        "Our experience with Quadra Bytes has been outstanding. Their professionalism, responsiveness, and commitment to quality set them apart. They’ve become our go-to partner for all things digital.",
      //  image: "/Images/Testimonials/alex.jpg",
    },
  ];

  return (
    <section className="bg-[#38B6FF]/10 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl text-[#38B6FF] uppercase tracking-widest">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our <span className="text-[#38B6FF]">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow hover:shadow-lg transition">
              <CardContent className="p-6 space-y-4 flex flex-col items-center text-center">
                {/* <img
                  // src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                /> */}
                <p className="italic text-gray-600">"{testimonial.message}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  {/* <p className="text-sm text-gray-500">{testimonial.role}</p> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
