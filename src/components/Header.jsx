import React from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Added FaEnvelope and FaPhoneAlt

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white z-50 sticky top-0">
      {/* Top bar - Contact Info: Updated background color for consistency */}
      <div className="bg-indigo-950 text-indigo-200 text-sm px-6 lg:px-16 py-2 flex justify-between items-center">
        {/* Adjusted padding and text color for better visual balance and consistency */}
        {/* Left Side: Empty or Logo if needed (keeping as is for now) */}
        <div></div>

        {/* Right Side: Contact + LinkedIn */}
        <div className="flex items-center space-x-6 font-medium tracking-wide">
          {/* Email: Replaced emoji with FaEnvelope icon */}
          <div className="flex items-center space-x-2 hover:text-indigo-400 transition duration-300 cursor-pointer">
            <FaEnvelope size={16} /> {/* Using react-icons for consistency */}
            <span>resoundify@example.com</span>
          </div>

          {/* Phone: Replaced emoji with FaPhoneAlt icon */}
          <div className="flex items-center space-x-2 hover:text-indigo-400 transition duration-300 cursor-pointer">
            <FaPhoneAlt size={16} /> {/* Using react-icons for consistency */}
            <span>+91-9876543210</span>
          </div>

          {/* LinkedIn: Hover color adjusted */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      {/* Adjusted padding for more consistent alignment with the top bar */}
      <div className="bg-white flex justify-between items-center px-6 lg:px-16 py-3 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/resoundifyLogo.jpeg" // Ensure this logo has good contrast on white
            alt="Resoundify Logo"
            className="h-12 w-auto object-cover rounded-lg"
          />
        </div>

        {/* Navigation Links: Adjusted text color and hover effect to match new palette */}
        <nav className="space-x-10 font-semibold text-gray-800 hidden md:flex">
          <a
            href="#home"
            // Changed hover text color and underline color to the brand accent (indigo-600)
            className="relative hover:text-indigo-600 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#about"
            // Changed hover text color and underline color to the brand accent
            className="relative hover:text-indigo-600 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="#contact"
            // Changed hover text color and underline color to the brand accent
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