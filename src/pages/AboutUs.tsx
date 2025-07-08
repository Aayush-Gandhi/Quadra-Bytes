import { Card, CardContent } from "@/components/ui/card";

export default function AboutUsPage() {
  const whyChooseUs = [
    {
      title: "24/7 Priority Support",
      description:
        "Your success is our priority. Enjoy around-the-clock priority support and maintenance services, guaranteeing the smooth operation of your software. Our dedicated team is always ready to address your queries and ensure optimal performance.",
    },
    {
      title: "Flexible Payment Plans",
      description:
        "We understand the importance of flexibility. Our flexible payment plans make it easier for you to invest in the software solutions you need without compromising your budget. Choose a plan that aligns with your financial goals.",
    },
    {
      title: "Transparent Communication",
      description:
        "Communication is key to success. We maintain transparent and open communication throughout the development process, keeping you informed at every step. This ensures a shared understanding of goals, progress, and expectations.",
    },
    {
      title: "Exclusive Bundle Deals",
      description:
        "Maximize your savings with our exclusive bundle offers. Combine multiple services or software solutions and enjoy special discounts, creating a comprehensive solution tailored to your specific requirements.",
    },
  ];

  return (
    <div className="bg-[#38B6FF]/10 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* About Us Hero */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src="/Images/AboutUs/About.jpg"
              alt="About us"
              className="w-full max-w-md rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-[#38B6FF] text-xl tracking-widest uppercase">About Us</p>
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
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <div className="text-center mb-12">
            <p className="text-[#38B6FF] text-xl uppercase">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Why Choose <span className="text-[#38B6FF]">Quadra Bytes?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="border-[#38B6FF]">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-justify">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
