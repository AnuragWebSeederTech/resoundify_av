import React from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    // Added bg-fixed to make the background image fixed relative to the viewport,
    // creating a parallax-like effect that often makes the image feel like it "fits" better.
    <footer
      className="bg-gray-900 text-gray-300 py-16 px-8 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed" // Added bg-fixed
      style={{ backgroundImage: "url('/images/image.png')" }} // Assuming the image is accessible at this public path
    >
      {/* Semi-transparent overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gray-900 opacity-80 z-0"></div>

      {/* Main content wrapper, placed above the overlay using z-index */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-8 relative z-10">

        {/* Company Info */}
        <div className="md:col-span-1 lg:col-span-4 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4 text-white">RESOUNDIFY</h3>
          <p className="text-base text-gray-400">Where Sound Meets Innovation</p>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            Resoundify is a premier AV brand specializing in cutting-edge Dante-enabled products, designed to revolutionize audio and video networking.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1 lg:col-span-2 text-center md:text-left">
          <h4 className="text-2xl font-semibold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3 text-lg">
            <li><a href="#home" className="hover:text-indigo-400 transition-colors duration-300">Home</a></li>
            <li><a href="#products" className="hover:text-indigo-400 transition-colors duration-300">Products</a></li>
            <li><a href="#support" className="hover:text-indigo-400 transition-colors duration-300">Support</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* More Links */}
        <div className="md:col-span-1 lg:col-span-2 text-center md:text-left">
          <h4 className="text-2xl font-semibold mb-6 text-white">More</h4>
          <ul className="space-y-3 text-lg">
            <li><a href="#about" className="hover:text-indigo-400 transition-colors duration-300">About Us</a></li>
            <li><a href="#tech-spotlight" className="hover:text-indigo-400 transition-colors duration-300">Technology Spotlight</a></li>
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div className="md:col-span-1 lg:col-span-4 text-center md:text-left">
          <h4 className="text-2xl font-semibold mb-6 text-white">Contact Us</h4>
          <p className="flex items-center justify-center md:justify-start space-x-3 mb-3 text-lg">
            <FaEnvelope className="text-indigo-400" size={20} />
            <span>resoundify@example.com</span>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-3 mb-5 text-lg">
            <FaPhoneAlt className="text-indigo-400" size={20} />
            <span>+91-9876543210</span>
          </p>
          <div className="flex justify-center md:justify-start space-x-5 mt-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-base text-center relative z-10">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Resoundify. All Rights Reserved.</p>
        <p className="text-gray-500 mt-3">Designed & developed by WebSeeder Technologies</p>
        <div className="mt-3 space-x-6">
          <a href="#privacy" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
          <a href="#terms" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;