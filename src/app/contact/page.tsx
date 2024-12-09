import Footer from "../components/footer"; 
import Header from "../components/header";
import Image from "next/image";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const page = () => {
  return (
    <div>
      <Header />
      <div className="h-[313px] w-full relative">
        <Image
          src="/shopbanner.png"
          width={1440}
          height={100}
          className="absolute w-full h-full object-cover"
          alt=""
        />
        <div className="flex justify-center items-center flex-col h-full z-50 relative">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-poppins font-bold text-center">
            Contact
          </h2>
          <div className="flex text-sm md:text-base">
            <p className="font-poppins font-semibold flex items-center">
              Home
              <IoChevronForwardSharp />
            </p>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1183px] px-5 sm:px-10 lg:px-0 mx-auto my-10">
        <div className="text-center font-poppins mb-10 mt-8">
          <h5 className="font-bold text-[24px] sm:text-[28px] md:text-[36px]">
            Get In Touch With Us
          </h5>
          <p className="text-[#9F9F9F] text-[14px] sm:text-[16px] md:text-[18px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us
            <br />
            An Email. Our Staff Always Be There To Help You Out. Do Not
            Hesitate!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="w-full sm:w-[45%] lg:w-[399px]">
            <div className="flex gap-2 mb-6">
              <FaLocationDot className="text-lg" />
              <div>
                <h3 className="font-bold text-base sm:text-lg">Address</h3>
                <p className="text-sm sm:text-base">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-6">
              <FaPhoneAlt className="text-lg" />
              <div>
                <h3 className="font-bold text-base sm:text-lg">Phone</h3>
                <p className="text-sm sm:text-base">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <MdAccessTimeFilled className="text-lg" />
              <div>
                <h3 className="font-bold text-base sm:text-lg">Working Time</h3>
                <p className="text-sm sm:text-base">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[55%]">
            <div className="mb-4">
              <label htmlFor="" className="mb-2 block text-sm sm:text-base">
                Your name
              </label>
              <input
                type="text"
                className="w-full border rounded-md h-12 sm:h-16 md:h-16 border-[#9F9F9F] px-4"
                placeholder="Abc"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="mb-2 block text-sm sm:text-base">
                Email address
              </label>
              <input
                type="text"
                className="w-full border rounded-md h-12 sm:h-16 md:h-16 border-[#9F9F9F] px-4"
                placeholder="Abc@def.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="mb-2 block text-sm sm:text-base">
                Subject
              </label>
              <input
                type="text"
                className="w-full border rounded-md h-12 sm:h-16 md:h-16 border-[#9F9F9F] px-4"
                placeholder="This is optional"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="mb-2 block text-sm sm:text-base">
                Your Message
              </label>
              <textarea
                className="w-full border rounded-md h-24 sm:h-32 md:h-32 border-[#9F9F9F] px-4 py-2"
                placeholder="Hi! I’d like to ask about..."
              ></textarea>
            </div>
            <button className="mt-3 w-full sm:w-[222px] py-3 font-poppins font-bold bg-[#B88E2F] text-white">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF3EA] py-20 px-5 sm:px-10 lg:px-10 flex flex-wrap justify-between gap-6">
        {[
          { src: "/cup.png", title: "High Quality", desc: "crafted from top materials" },
          { src: "/guarantee.png", title: "Warranty Protection", desc: "Over 2 years" },
          { src: "/shipping.png", title: "Free Shipping", desc: "Order over $150" },
          { src: "/customer-support.png", title: "24 / 7 Support", desc: "Dedicated support" },
        ].map((item, idx) => (
          <div key={idx} className="flex gap-4 items-center w-full sm:w-[45%] lg:w-[22%]">
            <Image src={item.src} width={50} height={50} alt="" className="w-10" />
            <div>
              <h5 className="font-poppins font-bold text-[20px] sm:text-[22px] md:text-[24px]">
                {item.title}
              </h5>
              <p className="text-[#898989] text-sm sm:text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default page;
