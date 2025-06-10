import React from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white z-50 sticky top-0">
      {/* Top bar - Contact Info */}
      <div className="bg-gray-100 text-gray-700 text-base px-6 lg:px-16 py-1.5 flex justify-between items-center"> {/* Increased text-sm to text-base, py-2 to py-3 */}
        <div></div>

        {/* Right Side: Contact + LinkedIn */}
        <div className="flex items-center space-x-6 font-medium tracking-wide">
          {/* Email */}
          <div className="flex items-center space-x-2 hover:text-indigo-600 transition duration-300 cursor-pointer">
            <FaEnvelope size={18} /> {/* Icon size adjusted */}
            <span>resoundify@example.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2 hover:text-indigo-600 transition duration-300 cursor-pointer">
            <FaPhoneAlt size={18} /> {/* Icon size adjusted */}
            <span>+91-9876543210</span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition duration-300"
          >
            <FaLinkedin size={22} /> {/* Icon size adjusted */}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white flex justify-between items-center px-6 lg:px-16 py-0 mx-auto"> {/* py-3 to py-4 */}
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/resoundifyLogo.jpeg"
            alt="Resoundify Logo"
            className="h-14 w-auto object-cover rounded-lg" // Increased logo size
          />
        </div>

        {/* Navigation Links */}
        <nav className="space-x-12 font-semibold text-lg text-gray-700 hidden md:flex"> {/* Increased text-base to text-lg, space-x-10 to space-x-12 */}
          <a
            href="#home"
            className="relative hover:text-indigo-600 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#about"
            className="relative hover:text-indigo-600 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="#contact"
            className="relative hover:text-indigo-600 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;