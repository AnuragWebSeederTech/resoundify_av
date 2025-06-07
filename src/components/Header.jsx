import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white z-50 sticky top-0">
      {/* Top bar - Contact Info */}
      <div className="bg-black text-gray-100 text-sm px-16 py-1 flex justify-between items-center backdrop-blur-sm bg-opacity-70">
  {/* Left Side: Empty or Logo if needed */}
  <div></div>

  {/* Right Side: Contact + LinkedIn */}
  <div className="flex items-center space-x-6 font-medium tracking-wide">
    {/* Email */}
    <div className="flex items-center space-x-2 hover:text-gray-400 transition duration-300 cursor-pointer">
      <span className="text-lg">📧</span>
      <span>resoundify@example.com</span>
    </div>

    {/* Phone */}
    <div className="flex items-center space-x-2 hover:text-gray-400 transition duration-300 cursor-pointer">
      <span className="text-lg">📞</span>
      <span>+91-9876543210</span>
    </div>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-400 transition duration-300"
    >
      <FaLinkedin size={20} />
    </a>
  </div>
</div>

      {/* Main Navigation */}
      <div className="bg-white flex justify-between items-center px-15 py-1 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/resoundifyLogo.jpeg"
            alt="Resoundify Logo"
            className="h-12 w-auto object-cover rounded-lg"
          />
        </div>

        {/* Navigation Links */}
        <nav className="space-x-10 font-semibold text-gray-700 hidden md:flex">
          <a
            href="#home"
            className="relative hover:text-gray-700 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#about"
            className="relative hover:text-gray-700 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="#contact"
            className="relative hover:text-gray-700 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;