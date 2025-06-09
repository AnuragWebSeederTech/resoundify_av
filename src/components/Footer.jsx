import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 text-gray-800 px-6 lg:px-16 py-10 mt-auto">
        
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mb-6 lg:mb-0 max-w-sm">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="/images/resoundifyLogo.jpeg"
              alt="Resoundify Logo"
              className="h-12 w-auto object-cover rounded-lg"
            />
            <div>
              <h2 className="font-bold text-xl">Resoundify</h2>
              <p className="text-sm text-gray-600">Where Sound Meets Innovation</p>
            </div>
          </div>
          <p className="leading-relaxed text-lg">
            Resoundify is a premier AV brand specializing in cutting-edge Dante-enabled products, designed to revolutionize audio and video networking.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 mt-8 lg:mt-0">
          <div className="space-y-2">
            <p className="font-semibold">Quick Links</p>
            <a href="#home" className="block hover:text-blue-600 transition duration-300">Home</a>
            <a href="#products" className="block hover:text-blue-600 transition duration-300">Products</a>
            <a href="#support" className="block hover:text-blue-600 transition duration-300">Support</a>
            <a href="#contact" className="block hover:text-blue-600 transition duration-300">Contact</a>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">More</p>
            <a href="#about" className="block hover:text-blue-600 transition duration-300">About Us</a>
            <a href="#technology" className="block hover:text-blue-600 transition duration-300">Technology Spotlight</a>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Legal</p>
            <a href="#privacy" className="block hover:text-blue-600 transition duration-300">Privacy Policy</a>
            <a href="#terms" className="block hover:text-blue-600 transition duration-300">Terms of Use</a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row justify-between items-center border-t border-gray-300 pt-6">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-blue-800 font-medium">Resoundify</span>. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <a
            href="https://wa.me/918000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 p-2 rounded-full transform transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:scale-110 shadow-md"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="tel:+919876543210"
            className="bg-yellow-400 p-2 rounded-full transform transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:scale-110 shadow-md"
          >
            <FaPhoneAlt size={16} />
          </a>
          <a
            href="mailto:resoundify@example.com"
            className="bg-yellow-400 p-2 rounded-full transform transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:scale-110 shadow-md"
          >
            <MdOutlineMail size={20} />
          </a>
        </div>
        <p className="text-sm mt-4 lg:mt-0">
          Designed & developed by <span className="text-blue-800 font-medium">Webseeder Technologies</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
