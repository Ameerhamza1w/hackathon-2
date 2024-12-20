import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import React from "react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { IoChevronForwardSharp } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";

function shop() {
  return (
    <div>
      <Header />
      <div className="h-[313px] w-full relative ">
        <Image
          src="/shopbanner.png"
          width={1440}
          height={100}
          className="absolute w-full h-full  "
          alt=""
        />
        <div className="flex justify-center items-center flex-col h-full z-50 relative">
          <h2 className="text-[40px] font-poppins font-bold text-center">
            Shop
          </h2>
          <div className="flex ">
            <p className="font-poppins font-semibold flex items-center">
              Home <IoChevronForwardSharp />
            </p>
            <span>Shop</span>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#F9F1E7] py-5 px-20">
          <div className="flex gap-5 ">
            <p className="flex  gap-1">
              {" "}
              <Image
                src="/filter.png"
                width={1440}
                height={100}
                className="w-5"
                alt=""
              />{" "}
              Filter
            </p>
            <Image
              src="/dots.png"
              width={1440}
              height={100}
              className="w-5  "
              alt=""
            />
            <Image
              src="/listview.png"
              width={1440}
              height={100}
              className="w-5  "
              alt=""
            />
            <p className=" border-l pl-3 border-[#9F9F9F] ">
              Showing 1–16 of 32 results
            </p>
          </div>
          <div className="flex gap-5">
            <div>
              <label htmlFor="">Show</label>
              <input
                type="text"
                className="w-10 ml-2 h-[55px] px-1"
                placeholder="16"
              />
            </div>
            <div>
              <label htmlFor="">Short by</label>
              <input
                type="text"
                placeholder="Default"
                className="w-36 ml-2 h-[55px] px-2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* product */}

      <div className="w-[1230px] mx-auto my-0 product-main">
        <h2 className="text-[40px] font-poppins font-bold my-7 text-center">
          Our Products
        </h2>
        <div className="flex justify-between gap-5 mb-4">
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro1.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro6.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro2.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro3.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5 mb-4">
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro4.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro6.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro1.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro1.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5 mb-4">
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro1.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro6.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro2.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro3.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro4.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro6.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro1.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] bg-[#F4F5F7] product-card relative">
            <Image
              src="/pro1.png"
              width={200}
              height={200}
              alt=""
              className="w-full"
            />
            <div className="px-4 py-3">
              <h3 className="font-poppins text-[24px]">Syltherine</h3>
              <p className="font-poppins text-[16px] text-[#898989]">
                Stylish cafe chair
              </p>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-poppins text-[20px]">Rp 2.500.000</p>
                <span className="text-[#898989] text-[16px]">Rp 3.500.000</span>
              </div>
            </div>
            <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
                Add to cart
              </button>
              <div className="flex gap-5 mt-5">
                <p className="font-poppins font-bold text-white flex items-center">
                  <CiShare2 />
                  Share
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  <MdOutlineCompareArrows />
                  Compare
                </p>
                <p className="font-poppins font-bold text-white flex items-center">
                  {" "}
                  <CiHeart />
                  Like
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 mb-5 flex justify-center ">
          <ul className="flex gap-5">
            <li className="w-14 h-14 bg-[#B88E2F] text-white rounded-md flex justify-center items-center">
              1
            </li>
            <li className="w-14 h-14 bg-[#F9F1E7] rounded-md flex justify-center items-center">
              2
            </li>
            <li className="w-14 h-14 bg-[#F9F1E7] rounded-md flex justify-center items-center">
              3
            </li>
            <li className="w-20 h-14 bg-[#F9F1E7] rounded-md flex justify-center items-center">
              Next
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#FAF3EA] py-20 px-10 flex justify-between gap-6">
        <div className="flex gap-4">
          <Image
            src="/cup.png"
            width={200}
            height={300}
            alt=""
            className="w-10"
          />
          <div>
            <h5 className="font-poppins font-bold text-[24px]">High Quality</h5>
            <p className="text-[#898989]">crafted from top materials</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src="/guarantee.png"
            width={200}
            height={300}
            alt=""
            className="w-10"
          />
          <div>
            <h5 className="font-poppins font-bold text-[24px]">
              Warranty Protection
            </h5>
            <p className="text-[#898989]">Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src="/shipping.png"
            width={200}
            height={300}
            alt=""
            className="w-10"
          />
          <div>
            <h5 className="font-poppins font-bold text-[24px]">
              Free Shipping
            </h5>
            <p className="text-[#898989]">Order over 150 $</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src="/customer-support.png"
            width={200}
            height={300}
            alt=""
            className="w-10"
          />
          <div>
            <h5 className="font-poppins font-bold text-[24px]">
              24 / 7 Support
            </h5>
            <p className="text-[#898989]">Dedicated support</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default shop;
