import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail, MdLocationPin } from "react-icons/md";

export default function Contact() {
  return (
    <div className="w-full h-full pb-20">
      <div className="flex w-[1284px] h-[600px] m-auto">
        <div className="w-1/2 m-auto">
          <p className="font-anton text-5xl">
            <span className="text-[#38B6FF]"> Contact </span> Information
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex space-x-2 items-center font-title">
              <FiPhoneCall />
              <p> Phone: 123-456-7890 </p>
            </div>
            <div className="flex space-x-2 items-center font-title">
              <MdEmail />
              <p> Email: example@example.com </p>
            </div>
            <div className="flex space-x-2 items-center font-title">
              <MdLocationPin />
              <p> Address: 1234 Example St, City, Country </p>
            </div>
            <div className="flex space-x-4 items-center">
              <img src="/Images/Home/fb.jpg" className="w-[45px]" alt="" />
              <img src="/Images/Home/inst.jpg" className="w-[45px]" alt="" />
              <img src="/Images/Home/tweet.jpg" className="w-[45px]" alt="" />
              <img src="/Images/Home/lkdn.jpg" className="w-[45px]" alt="" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/Images/Home/contact.jpg" className="h-[600px]" alt="" />
        </div>
      </div>
    </div>
  );
}
