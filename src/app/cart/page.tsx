import React from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';

const Cart = () => {
  return (
    <div>
      <Header />
      {/* Background Image */}
      <Image
        src="/images/cart.png"
        alt="Cart background"
        width={1440}
        height={316}
        priority
        className="w-full object-cover"
      />
      <div className="flex flex-col lg:flex-row justify-evenly px-4 lg:px-8">
        {/* Cart Items Section */}
        <div className="flex-1 min-h-screen flex items-center justify-center">
          <div className="p-6 max-w-5xl w-full">
            {/* Cart Header */}
            <div className="flex justify-between items-center bg-[#F9F1E7] py-3 px-4">
              <h2 className="font-semibold text-[14px] sm:text-[16px]">Product</h2>
              <h2 className="font-semibold text-[14px] sm:text-[16px]">Price</h2>
              <div className="flex">
                <h2 className="font-semibold text-[14px] sm:text-[16px] mr-4">Quantity</h2>
                <h2 className="font-semibold text-[14px] sm:text-[16px]">Subtotal</h2>
              </div>
            </div>
            {/* Cart Items */}
            <div className="mt-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b">
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/c.png"
                    alt="Asgaard sofa"
                    className="h-[80px] w-[80px] sm:h-[105px] sm:w-[108px] object-cover rounded-md"
                  />
                  <h3 className="text-[#9F9F9F] text-[14px] sm:text-[16px] font-medium">
                    Asgaard sofa
                  </h3>
                </div>
                <div className="flex gap-4 items-center w-full md:w-auto justify-between">
                  <p className="text-gray-500 text-[14px] sm:text-[16px]">Rs. 250,000.00</p>
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-11 border rounded-md text-center py-1"
                  />
                  <p className="text-black text-[14px] sm:text-[16px]">Rs. 250,000.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="flex-1 flex items-center justify-center min-h-screen mt-8 lg:mt-0">
          <div className="bg-[#F9F1E7] py-6 px-4 rounded-md shadow-md w-full max-w-sm">
            <div className="mb-6 text-center">
              <h2 className="font-semibold text-[24px] sm:text-[32px]">Cart Totals</h2>
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-center text-[14px] sm:text-[16px] mb-4">
                <span>Subtotal</span>
                <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between items-center text-[14px] sm:text-[16px] mb-4">
                <span>Total</span>
                <span className="text-[#B88E2F] font-semibold">Rs. 250,000.00</span>
              </div>
            </div>
            <button className="w-full border-2 border-black rounded-md py-3 text-[16px] sm:text-[20px] hover:bg-black hover:text-white transition">
              Check Out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
