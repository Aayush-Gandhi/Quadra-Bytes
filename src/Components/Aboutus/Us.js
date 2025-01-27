import React from "react";

export default function Us() {
  return (
    <div className="h-[1059px] bg-[#38B6FF]/[0.10]  px-6">
      <div className="py-[108px]">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <p className="text-2xl text-[#38B6FF] font-title font-semibold">WHY CHOOSE US</p>
          <p className="text-5xl font-bold font-title pt-2">
            WHY CHOOSE <span className="text-[#38B6FF]">QUADRABYTES?</span>
          </p>
        </div>

        {/* Grid with Inner Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[672px] pt-14 px-[200px]">
          {/* Top-left Item */}
          <div className=" p-8 border-b-2 border-r-2  border-[#38B6FF]  flex flex-col justify-center">
            <p className="text-3xl font-semibold mb-2 font-oswald">24/7 Priority Support</p>
            <p className="text-gray-600 text-xl text-justify w-[658px] font-title mt-7">
              Your success is our priority. Enjoy around-the-clock priority
              support and maintenance services, guaranteeing the smooth
              operation of your software. Our dedicated team is always ready to
              address your queries and ensure optimal performance.
            </p>
          </div>

          {/* Top-right Item */}
          <div className="p-8 border-b-2 border-[#38B6FF] flex flex-col justify-center ">
            <p className="text-3xl font-semibold mb-2 font-oswald">
              Flexible Payment Plans
            </p>
            <p className="text-gray-600 text-xl text-justify w-[678px] font-title mt-7">
              We understand the importance of flexibility. Our flexible payment
              plans make it easier for you to invest in the software solutions
              you need without compromising your budget. Choose a plan that
              aligns with your financial goals.
            </p>
          </div>

          {/* Bottom-left Item */}
          <div className="p-8 pt-[60px] border-r-2 border-[#38B6FF]">
            <p className="text-3xl font-semibold mb-2 font-oswald">
              Transparent Communication
            </p>
            <p className="text-gray-600 text-xl text-justify font-title mt-7">
              Communication is key to success. We maintain transparent and open
              communication throughout the development process, keeping you
              informed at every step. This ensures a shared understanding of
              goals, progress, and expectations.
            </p>
          </div>

          {/* Bottom-right Item */}
          <div className="p-8 pt-[60px] border-[#38B6FF] ">
            <p className="text-3xl font-semibold mb-2 font-oswald">
              Exclusive Bundle Deals
            </p>
            <p className="text-gray-600 text-xl text-justify font-title mt-7">
              Maximize your savings with our exclusive bundle offers. Combine
              multiple services or software solutions and enjoy special
              discounts, creating a comprehensive solution tailored to your
              specific requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
