import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer web development, app development, UI/UX design, AI/ML development, e-commerce solutions, and digital marketing services tailored to your business needs.",
    },
    {
      question: "How can I get a quote for my project?",
      answer: "You can contact us through our Contact Us page by filling out the form with your requirements. Our team will get back to you with a customized quote.",
    },
    {
      question: "Do you provide support after project completion?",
      answer: "Yes, we provide ongoing support and maintenance services to ensure your solutions continue to perform optimally.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project duration depends on complexity, but most projects are delivered within 4-12 weeks after requirements are finalized.",
    },
    {
      question: "Where is your company located?",
      answer: "We are headquartered in [Your City, Country], but we serve clients globally through remote collaboration.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl text-[#38B6FF] uppercase tracking-widest">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked <span className="text-[#38B6FF]">Questions</span>
          </h2>
          <p className="mt-4 text-lg">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
