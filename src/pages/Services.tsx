import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    img: "/Images/Services/Web.jpg",
    title: "Web Development",
    desc: "Web development refers to the process of creating and maintaining websites or web applications.",
  },
  {
    img: "/Images/Services/Appdev.jpg",
    title: "App Development",
    desc: "Creating software applications that run on smartphones, tablets, computers, or other devices.",
  },
  {
    img: "/Images/Services/Shopify.jpg",
    title: "Shopify Development",
    desc: "Shopify provides tools to help businesses set up an online presence and sell products or services effectively.",
  },
  {
    img: "/Images/Services/wordpress.jpg",
    title: "Wordpress Development",
    desc: "Open-source, flexible, and widely used for various websites, from blogs to e-commerce platforms.",
  },
  {
    img: "/Images/Services/odoo.jpg",
    title: "Odoo Development",
    desc: "Odoo offers fully integrated business apps to manage all aspects of a company within a single software suite.",
  },
  {
    img: "/Images/Services/ecom.jpg",
    title: "E-commerce Development",
    desc: "Streamline inventory, sales, and frontend buying experiences with custom e-commerce solutions.",
  },
  {
    img: "/Images/Services/uiux.jpg",
    title: "UI/UX Design",
    desc: "Creating beautiful, user-friendly designs for websites, apps, and other digital interfaces.",
  },
  {
    img: "/Images/Services/ai.jpg",
    title: "AI Development",
    desc: "Artificial intelligence solutions including NLP, vision, and predictive modeling for business automation.",
  },
  {
    img: "/Images/Services/digmar.jpg",
    title: "Digital Marketing",
    desc: "Targeted marketing strategies to maximize online reach, engagement, and conversions.",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <p className="text-xl text-[#38B6FF] uppercase tracking-widest">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Services <span className="text-[#38B6FF]">We Offer</span>
          </h2>
          <p className="text-lg mt-4">
            At Quadra Bytes, we provide a wide range of technology services to empower your business.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className={`flex flex-col md:flex-row items-center gap-8 p-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full md:w-1/3 rounded-lg object-cover"
                />
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-semibold text-[#38B6FF]">{service.title}</h3>
                  <p className="text-justify text-gray-700">{service.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
