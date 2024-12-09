import React from "react";
import Image from "next/image";

const ComparisonPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-[#B88E2F]">Furnico</div>
          <nav className="flex gap-6 text-gray-700 text-sm md:text-base">
            <a href="#" className="hover:text-[#B88E2F]">Home</a>
            <a href="#" className="hover:text-[#B88E2F]">Shop</a>
            <a href="#" className="hover:text-[#B88E2F]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-100">
        <div className="h-[316px] w-full">
          <Image
            src="/images/hero-bg.jpg" // Replace with actual image path
            alt="Product Comparison"
            width={1440}
            height={316}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Product Comparison</h1>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">Do the Product Comparison</h2>
          <button className="bg-[#B88E2F] text-white px-4 py-2 rounded-lg hover:bg-[#a87929]">
            Add Product
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Details</th>
                <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Product 1</th>
                <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Product 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Price</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Rp 2,500.000</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Rp 3,500.000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Material</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Wood</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Metal</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Dimensions</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">50x60x80 cm</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">60x70x90 cm</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Availability</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">In Stock</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Out of Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between px-4">
          <div className="text-gray-700 mb-4 sm:mb-0">
            <h3 className="font-semibold mb-2">Customer Care</h3>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div className="text-gray-700 mb-4 sm:mb-0">
            <h3 className="font-semibold mb-2">About Us</h3>
            <ul className="space-y-2">
              <li>Our Story</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="text-gray-700">
            <h3 className="font-semibold mb-2">Contact</h3>
            <ul className="space-y-2">
              <li>support@furnico.com</li>
              <li>+123 456 789</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          © 2023 Furnico. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default ComparisonPage;
