"use client";
import React, { useState } from "react";
import Image from "next/image";

// Hero Component
const Hero = () => {
  return (
    <div className="relative h-[713px] w-full banner">
      <Image
        src="/herohero.jpg"
        width={1440}
        height={100}
        className="absolute w-full h-full object-cover"
        alt="Hero Image"
      />
      <div className="absolute z-30 top-2/4 right-12 w-[643px] p-5 bg-[#FFF3E3] transform -translate-y-2/4">
        <h1 className="text-[#333333] font-poppins font-bold">New Arrival</h1>
        <h5 className="text-[52px] text-[#B88E2F] font-poppins font-bold">
          Discover Our <br /> New Collection
        </h5>
        <p className="font-poppins font-bold text-[18px] text-[#333333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="w-[222px] h-[74px] bg-[#B88E2F] text-[#FFFFFF] font-poppins font-bold px-[72px] py-[25px] mt-5">
          BUY Now
        </button>
      </div>
    </div>
  );
};

export default Hero;

// Hero1 Component
export const Hero1 = () => {
  const products = [
    { id: 1, img: "/images/1.png", title: "Syltherine", description: "Stylish cafe chair", oldPrice: "Rp 3,500.000", newPrice: "Rp 2,500.000", discount: "-30%" },
    { id: 2, img: "/images/1.png", title: "Leviosa", description: "Stylish cafe chair", oldPrice: null, newPrice: "Rp 2,500.000" },
    { id: 3, img: "/images/3.png", title: "Lolito", description: "Luxury big sofa", oldPrice: "Rp 14,000.000", newPrice: "Rp 7,000.000", discount: "-50%" },
    { id: 4, img: "/images/4.png", title: "Respira", description: "Outdoor bar table and stool", oldPrice: null, newPrice: "Rp 500.000", discount: "New" },
    { id: 5, img: "/images/5.png", title: "Grifo", description: "Night lamp", oldPrice: null, newPrice: "Rp 1,500.000" },
    { id: 6, img: "/images/6.png", title: "Muggo", description: "Small mug", oldPrice: null, newPrice: "Rp 150.000", discount: "New" },
    { id: 7, img: "/images/7.png", title: "Lagro", description: "Cute bed set", oldPrice: "Rp 14,000.000", newPrice: "Rp 7,000.000", discount: "-50%" },
    { id: 8, img: "/images/8.png", title: "Sereno", description: "Minimalist flower pot", oldPrice: null, newPrice: "Rp 500.000", discount: "New" },
  ];

  return (
    <div className="flex justify-center items-center py-12 min-h-screen bg-gray-100">
      <div className="text-center max-w-screen-xl w-full px-4">
        <h2 className="text-4xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative group bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-center items-center">
              <div className="flex justify-center items-center h-[300px] w-[300px]">
                <Image src={product.img} alt={product.title} width={300} height={300} className="object-contain" />
              </div>
              {product.discount && (
                <div className={`absolute top-4 right-4 text-white text-xs font-bold flex items-center justify-center ${product.discount === "New" ? "bg-green-500" : "bg-red-500"} w-8 h-8 rounded-full`}>
                  {product.discount}
                </div>
              )}
              <div className="flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-500 text-sm">{product.description}</p>
                {product.oldPrice && <p className="text-gray-500 line-through">{product.oldPrice}</p>}
                <p className="text-black font-bold">{product.newPrice}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href="/products" className="bg-[#B88E2F] text-white py-3 px-6 rounded-lg hover:bg-[#a87929] transition duration-300">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

// Hero3 Component
export const Hero3 = () => {
  const categories = [
    { id: 1, img: "/images/dining.png", title: "Dining" },
    { id: 2, img: "/images/living.png", title: "Living" },
    { id: 3, img: "/images/bed.png", title: "Bedroom" },
  ];

  return (
    <div className="flex justify-center items-center py-12 min-h-screen bg-gray-100">
      <div className="text-center max-w-screen-xl w-full px-4">
        <div className="mb-8">
          <h2 className="font-poppins font-bold text-[32px] text-[#333333]">Browse The Range</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center rounded-lg overflow-hidden bg-white shadow-md" style={{ width: "381px", height: "480px" }}>
              <Image src={category.img} alt={category.title} width={381} height={400} className="object-cover w-full h-[400px]" />
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Hero4 = () => {
  const images = [
    { id: 1, src: "/images/care.png", alt: "Care" },
    { id: 2, src: "/images/dining.png", alt: "Dining" },
    { id: 3, src: "/images/care.png", alt: "Care" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const pairedImages = [
    { src1: "/images/care.png", src2: "/images/dining.png" },
    { src1: "/images/care.png", src2: "/images/dining.png" },
  ];

  return (
    <div className="bg-[#FCF8F3] py-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#333333] mb-4">50+ Beautiful Rooms Inspiration</h2>
          <p className="text-gray-600 mb-6">Our designer already made a lot of beautiful prototypes of rooms that inspire you.</p>
          <button className="bg-[#B88E2F] text-white py-3 px-6 rounded-lg hover:bg-[#a87929] transition duration-300">Explore More</button>
        </div>
        <div className="flex-1 relative">
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md flex">
            <div className="w-1/2 relative">
              <Image src={pairedImages[currentIndex].src1} alt={images[currentIndex].alt} layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
            <div className="w-1/2 relative">
              <Image src={pairedImages[currentIndex].src2} alt={images[currentIndex].alt} layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero5 = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-white relative">
      <div className="absolute top-5 text-center">
        <p className="text-sm font-semibold text-gray-500">Share Your Setup With</p>
        <h2 className="text-3xl font-bold mt-1">#FuniroFurniture</h2>
      </div>
      <div className="w-full flex justify-center items-center mt-20 p-4 gap-6">
        <div className="flex flex-col gap-4 w-[30%]">
          <div className="flex gap-4">
            <div className="w-[48%] h-[300px] relative">
              <Image src="/images/1.png" alt="Left Image 1" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="w-[48%] h-[150px] relative">
              <Image src="/images/f2.png" alt="Left Image 2" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[48%] h-[300px] relative">
              <Image src="/images/f3.png" alt="Left Image 3" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="w-[48%] h-[150px] relative">
              <Image src="/images/f4.png" alt="Left Image 4" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[20%] h-[300px] relative">
          <Image src="/images/FM.png" alt="Middle Image" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4 w-[30%]">
          <div className="flex gap-4">
            <div className="w-[48%] h-[300px] relative">
              <Image src="/images/FL.png" alt="Right Image 1" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="w-[48%] h-[300px] relative">
              <Image src="/images/FL2.png" alt="Right Image 2" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[48%] h-[250px] relative">
              <Image src="/images/fL3.png" alt="Right Image 3" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="w-[48%] h-[250px] relative">
              <Image src="/images/FL4.png" alt="Right Image 4" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
