import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-black border-t border-gray-200">
      {/* Main Footer Section */}
      <div className="flex flex-wrap justify-between px-6 md:px-10 py-10 max-w-[1140px] mx-auto text-sm">
        {/* Left Section - Address */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h2
            className="font-poppins font-normal text-[16px] leading-[24px] mb-4"
            style={{ color: "#9F9F9F" }}
          >
            Funiro.
          </h2>
          <address
            className="not-italic text-sm text-gray-600"
            style={{ lineHeight: "24px" }}
          >
            400 University Drive Suite 200 <br />
            Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Center Section - Links and Help */}
        <div className="flex w-full sm:w-1/3 justify-between mb-6 sm:mb-0">
          {/* Links Column */}
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
            <h3
              className="font-poppins font-medium text-[16px] leading-[24px] mb-4"
              style={{ color: "#9F9F9F" }}
            >
              Links
            </h3>
            <ul className="space-y-4 text-gray-600">
              {["Home", "Shop", "About", "Contact"].map((item, index) => (
                <li
                  key={index}
                  className="font-poppins font-semibold hover:underline cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
            <h3
              className="font-poppins font-medium text-[16px] leading-[24px] mb-4"
              style={{ color: "#9F9F9F" }}
            >
              Help
            </h3>
            <ul className="space-y-4 text-gray-600">
              {["Payment Options", "Returns", "Privacy Policies"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="font-poppins font-semibold hover:underline cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3
            className="font-poppins font-medium text-[16px] leading-[24px] mb-4"
            style={{ color: "#9F9F9F" }}
          >
            Newsletter
          </h3>
          <form className="flex items-center mb-4" aria-label="Newsletter Form">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              aria-label="Enter your email address"
              className="p-3 text-sm flex-grow border-b border-gray-400 focus:outline-none"
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
              }}
            />
            <a
              href="#"
              aria-label="Subscribe to newsletter"
              className="font-poppins font-semibold text-sm text-black hover:underline ml-4"
              style={{ textDecoration: "underline" }}
            >
              Subscribe
            </a>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-200 py-6 text-left px-6 md:px-10">
        <p className="text-xs text-gray-500">2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
