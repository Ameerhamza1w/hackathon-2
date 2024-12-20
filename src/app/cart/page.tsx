import { IoChevronForwardSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

import Image from "next/image";
import Header from "../components/header";
import React from "react";
import Footer from "../components/footer";

const page = () => {
  return (
    <div>
      <Header />

      {/* Banner Section */}
      <div className="h-[40vh] w-full relative">
        <Image
          src="/shopbanner.png"
          width={1440}
          height={100}
          className="absolute w-full h-full object-cover"
          alt="Shop Banner"
        />
        <div className="flex justify-center items-center flex-col h-full z-50 relative text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold">
            Cart
          </h2>
          <div className="flex text-xs sm:text-sm md:text-base">
            <p className="font-poppins font-semibold flex items-center">
              Home
              <IoChevronForwardSharp />
            </p>
            <span>Cart</span>
          </div>
        </div>
      </div>
      <br />

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-20 lg:px-36 gap-7">
        {/* Product Card Section */}
        <div className="flex-1">
          <div className="mt-8 pl-4">
            <div className="h-[55px] bg-[#F9F1E7] flex justify-between items-center text-xs sm:text-sm md:text-base font-bold">
              <h3>Product</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Subtotal</h3>
            </div>
          </div>
          <br />
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center text-center">
            <Image
              src="/sofa.png"
              width={100}
              height={100}
              alt=""
              className="rounded-[10px] w-20 h-20 sm:w-24 sm:h-24 bg-[#F9F1E7] mt-6"
            />
            <p className="text-sm sm:text-base md:text-lg">Asgaard Sofa</p>
            <span className="text-sm sm:text-base md:text-lg">
              Rs. 250,000.00
            </span>
            <button className="w-10 h-10 bg-[#FAFAFA] border border-gray-500 rounded-md flex justify-center items-center">
              1
            </button>
            <span className="text-sm sm:text-base md:text-lg">
              Rs. 250,000.00
            </span>
            <MdDelete className="h-5 w-5 sm:h-6 sm:w-6 text-[#B88E2F]" />
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="w-full md:w-[393px] bg-[#F9F1E7] p-6 mt-7 flex flex-col items-center text-center font-poppins">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
            Cart Totals
          </h1>

          <div className="flex justify-between w-full mt-5 sm:mt-7">
            <p className="text-sm sm:text-base md:text-lg">Subtotal</p>
            <span className="text-[#9F9F9F] text-sm sm:text-base">
              Rs. 250,000.00
            </span>
          </div>

          <div className="flex justify-between w-full mt-3 sm:mt-5">
            <p className="text-sm sm:text-base md:text-lg">Total</p>
            <span className="text-[#B88E2F] text-sm sm:text-base md:text-lg">
              Rs. 250,000.00
            </span>
          </div>

          <button className="mt-5 sm:mt-6 w-full sm:w-[222px] h-[50px] md:h-[59px] bg-[#000000] text-white rounded-[15px] flex items-center justify-center">
            Check Out
          </button>
        </div>
      </div>
      <br />
      <hr />

      {/* Features Section */}
      <div className="bg-[#FAF3EA] py-10 sm:py-20 px-4 sm:px-8 flex flex-wrap justify-between gap-6">
        {[
          { src: "/cup.png", title: "High Quality", desc: "crafted from top materials" },
          { src: "/guarantee.png", title: "Warranty Protection", desc: "Over 2 years" },
          { src: "/shipping.png", title: "Free Shipping", desc: "Order over 150 $" },
          { src: "/customer-support.png", title: "24 / 7 Support", desc: "Dedicated support" },
        ].map((item, index) => (
          <div key={index} className="flex gap-4 items-center w-full sm:w-auto">
            <Image src={item.src} width={200} height={300} alt="" className="w-10" />
            <div>
              <h5 className="font-poppins font-bold text-sm sm:text-lg md:text-xl">
                {item.title}
              </h5>
              <p className="text-[#898989] text-xs sm:text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default page;
