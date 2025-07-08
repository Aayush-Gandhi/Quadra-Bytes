import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cc: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace with your Web3Forms key
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key as keyof typeof formData]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          cc: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setStatus({ success: false, message: "Error sending message. Try again!" });
      }
    } catch (error) {
      setStatus({ success: false, message: "Something went wrong!" });
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-lg mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-[#38B6FF]">Contact</span> Us
          </h2>
          <p className="mt-4 text-lg">We’d love to hear from you. Fill out the form below to get in touch.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="tel"
              name="cc"
              placeholder="Country Code"
              value={formData.cc}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />

          <Textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
          />

          <Button type="submit" className="w-full bg-[#38B6FF] hover:bg-[#38B6FF]/90">
            Submit
          </Button>
        </form>

        {status && (
          <p
            className={`text-center font-semibold ${
              status.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
}
