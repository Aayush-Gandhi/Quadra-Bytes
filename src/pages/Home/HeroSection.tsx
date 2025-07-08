import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1562581870-5b61efe35190?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        loading="eager"
        className="object-cover w-full h-full"
        alt="Hero background"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-3xl md:text-4xl font-bold">QUADRA BYTES</h1>
        <p className="mt-4 text-2xl md:text-5xl font-semibold uppercase max-w-4xl">
          Empowering Progress, Amplifying Success
        </p>
        <p className="mt-4 text-base md:text-lg max-w-xl">
          At Quadra Bytes, we lead the charge in embracing and shaping technological advancements.
        </p>
        <div className="mt-8">
          <Button className="bg-[#38B6FF] hover:bg-[#38B6FF]/90 text-white text-base px-6 py-3 rounded-lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
