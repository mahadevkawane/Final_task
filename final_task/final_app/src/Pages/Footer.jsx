import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-5 sm:px-12 md:px-20 py-14 font-[DM Sans]">
      <div className="max-w-[1440px] w-full mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-5">
          Stay Updated With the Latest Announcements
        </h2>

        <button className="mt-4 border border-white rounded-full px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg hover:bg-white hover:text-black transition-colors duration-200">
          Join Now →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-14 md:mt-20 max-w-[1440px] w-full mx-auto text-left">
        <div className="flex items-center space-x-4">
  <img
    src="/Images/bringt.svg"
    alt="Brington Logo"
    className="w-12 h-12 object-contain filter invert"
  />
  <div className="flex flex-col items-start">
    <h3 className="font-extrabold text-xl mb-3">Brington</h3>
    <p className="text-sm sm:text-base text-gray-400">
      Building the future, one step at a time.
    </p>
  </div>
</div>
        <div className="flex flex-col">
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>support@brington.com</li>
            <li>+91-123-456-7890</li>
            <li>India</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-10 w-full" />

      <div className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row items-start justify-between text-xs sm:text-sm text-gray-400 gap-3 sm:gap-0">
        <p>© 2035 Brington Inc. All rights reserved.</p>
        <p className="text-left md:text-right">
          Designed with care and passion by Brington
        </p>
      </div>
    </footer>
  );
};

export default Footer;
