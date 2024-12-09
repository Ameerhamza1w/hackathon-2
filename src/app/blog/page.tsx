import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const Page = () => {
  return (
    <div>
      <Header />

      {/* Banner Section */}
      <div className="h-[200px] sm:h-[313px] w-full relative">
        <Image
          src="/shopbanner.png"
          layout="fill"
          className="object-cover"
          alt="Shop Banner"
        />
        <div className="flex justify-center items-center flex-col h-full z-50 relative text-center">
          <h2 className="text-[24px] sm:text-[40px] font-poppins font-bold">Blog</h2>
          <div className="flex">
            <p className="font-poppins font-semibold flex items-center text-[12px] sm:text-[16px]">
              Home
              <IoChevronForwardSharp />
            </p>
            <span className="text-[12px] sm:text-[16px]">Blog</span>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="px-4 sm:px-8 lg:px-16">
        {/* First Blog Post */}
        <div className="mt-6">
          <Image
            src="/blog{1}.jpg"
            width={1440}
            height={800}
            className="w-full h-auto rounded-[10px]"
            alt="Blog Image 1"
          />
          <h5 className="font-bold text-[20px] sm:text-[30px] mt-2 text-[#000000]">
            Going all-in with millennial design
          </h5>
          <p className="text-[#9F9F9F] font-normal text-[14px] sm:text-[16px] mt-2 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
            aliquam ultrices.
          </p>
          <div className="text-[14px] sm:text-[16px] underline mt-3">
            <h2>Read more</h2>
          </div>
        </div>

        {/* Second Blog Post */}
        <div className="mt-6">
          <Image
            src="/blog(02).jpg"
            width={1440}
            height={800}
            className="w-full h-auto rounded-[10px]"
            alt="Blog Image 2"
          />
          <h5 className="font-bold text-[20px] sm:text-[30px] mt-2 text-[#000000]">
            Exploring new ways of decorating
          </h5>
          <p className="text-[#9F9F9F] font-normal text-[14px] sm:text-[16px] mt-2 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
            aliquam ultrices.
          </p>
          <div className="text-[14px] sm:text-[16px] underline mt-3">
            <h2>Read more</h2>
          </div>
        </div>

        {/* Third Blog Post */}
        <div className="mt-6">
          <Image
            src="/blog(03).jpg"
            width={1440}
            height={800}
            className="w-full h-auto rounded-[10px]"
            alt="Blog Image 3"
          />
          <h5 className="font-bold text-[20px] sm:text-[30px] mt-2 text-[#000000]">
            Modern interior design tips
          </h5>
          <p className="text-[#9F9F9F] font-normal text-[14px] sm:text-[16px] mt-2 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
            aliquam ultrices.
          </p>
          <div className="text-[14px] sm:text-[16px] underline mt-3">
            <h2>Read more</h2>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="text-center mt-8 mb-5 flex justify-center">
        <ul className="flex gap-4">
          <li className="w-10 h-10 sm:w-14 sm:h-14 bg-[#B88E2F] text-white rounded-md flex justify-center items-center text-sm sm:text-base">
            1
          </li>
          <li className="w-10 h-10 sm:w-14 sm:h-14 bg-[#F9F1E7] rounded-md flex justify-center items-center text-sm sm:text-base">
            2
          </li>
          <li className="w-10 h-10 sm:w-14 sm:h-14 bg-[#F9F1E7] rounded-md flex justify-center items-center text-sm sm:text-base">
            3
          </li>
          <li className="w-14 h-10 sm:w-20 sm:h-14 bg-[#F9F1E7] rounded-md flex justify-center items-center text-sm sm:text-base">
            Next
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
