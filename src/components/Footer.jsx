import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    // Updated background to a deep, sophisticated indigo/blue for consistency
    // and better integration with other dark sections.
    <footer className="bg-indigo-950 text-indigo-200 px-6 lg:px-16 py-10 mt-auto">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mb-6 lg:mb-0 max-w-sm">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="/images/resoundifyLogo.jpeg" // Ensure this logo is visible on a dark background
              alt="Resoundify Logo"
              className="h-12 w-auto object-cover rounded-lg"
            />
            <div>
              {/* Adjusted text color for contrast */}
              <h2 className="font-bold text-xl text-white">Resoundify</h2>
              <p className="text-sm text-indigo-300">Where Sound Meets Innovation</p>
            </div>
          </div>
          {/* Adjusted text color for contrast */}
          <p className="leading-relaxed text-lg text-indigo-200">
            Resoundify is a premier AV brand specializing in cutting-edge Dante-enabled products, designed to revolutionize audio and video networking.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 mt-8 lg:mt-0">
          <div className="space-y-2">
            {/* Adjusted text color for contrast */}
            <p className="font-semibold text-white">Quick Links</p>
            {/* Hover color consistent with main brand accent (e.g., indigo-400) */}
            <a href="#home" className="block hover:text-indigo-400 transition duration-300">Home</a>
            <a href="#products" className="block hover:text-indigo-400 transition duration-300">Products</a>
            <a href="#support" className="block hover:text-indigo-400 transition duration-300">Support</a>
            <a href="#contact" className="block hover:text-indigo-400 transition duration-300">Contact</a>
          </div>
          <div className="space-y-2">
            {/* Adjusted text color for contrast */}
            <p className="font-semibold text-white">More</p>
            {/* Hover color consistent with main brand accent */}
            <a href="#about" className="block hover:text-indigo-400 transition duration-300">About Us</a>
            <a href="#technology" className="block hover:text-indigo-400 transition duration-300">Technology Spotlight</a>
          </div>
          <div className="space-y-2">
            {/* Adjusted text color for contrast */}
            <p className="font-semibold text-white">Legal</p>
            {/* Hover color consistent with main brand accent */}
            <a href="#privacy" className="block hover:text-indigo-400 transition duration-300">Privacy Policy</a>
            <a href="#terms" className="block hover:text-indigo-400 transition duration-300">Terms of Use</a>
          </div>
        </div>
      </div>

      {/* Adjusted border color for better contrast on dark background */}
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-center border-t border-indigo-700 pt-6">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-indigo-400 font-medium">Resoundify</span>. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          {/* Updated icon background and text color for consistency */}
          <a
            href="https://wa.me/918000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-700 text-white p-2 rounded-full transform transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:scale-110 shadow-md"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="tel:+919876543210"
            className="bg-indigo-700 text-white p-2 rounded-full transform transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:scale-110 shadow-md"
          >
            <FaPhoneAlt size={16} />
          </a>
          <a
            href="mailto:resoundify@example.com"
            className="bg-indigo-700 text-white p-2 rounded-full transform transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:scale-110 shadow-md"
          >
            <MdOutlineMail size={20} />
          </a>
        </div>
        <p className="text-sm mt-4 lg:mt-0">
          Designed & developed by <span className="text-indigo-400 font-medium">Webseeder Technologies</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;