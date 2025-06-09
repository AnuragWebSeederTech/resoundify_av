import React from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Ensure FaPhoneAlt is imported

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-8"> {/* Increased padding */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"> {/* Increased gap */}
        {/* Company Info */}
        <div className="md:col-span-1 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4 text-white">RESOUNDIFY</h3> {/* Increased heading size */}
          <p className="text-base text-gray-400">Where Sound Meets Innovation</p> {/* Increased text size */}
          <p className="mt-4 text-base leading-relaxed text-gray-400"> {/* Increased text size */}
            Resoundify is a premier AV brand specializing in cutting-edge Dante-enabled products, designed to revolutionize audio and video networking.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1 text-center md:text-left">
          <h4 className="text-2xl font-semibold mb-6 text-white">Quick Links</h4> {/* Increased heading size */}
          <ul className="space-y-3 text-lg"> {/* Increased spacing and text size */}
            <li><a href="#home" className="hover:text-indigo-400 transition-colors duration-300">Home</a></li>
            <li><a href="#products" className="hover:text-indigo-400 transition-colors duration-300">Products</a></li>
            <li><a href="#support" className="hover:text-indigo-400 transition-colors duration-300">Support</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* More Links */}
        <div className="md:col-span-1 text-center md:text-left">
          <h4 className="text-2xl font-semibold mb-6 text-white">More</h4> {/* Increased heading size */}
          <ul className="space-y-3 text-lg"> {/* Increased spacing and text size */}
            <li><a href="#about" className="hover:text-indigo-400 transition-colors duration-300">About Us</a></li>
            <li><a href="#tech-spotlight" className="hover:text-indigo-400 transition-colors duration-300">Technology Spotlight</a></li>
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div className="md:col-span-1 text-center md:text-left">
          <h4 className="text-2xl font-semibold mb-6 text-white">Contact Us</h4> {/* Increased heading size */}
          <p className="flex items-center justify-center md:justify-start space-x-3 mb-3 text-lg"> {/* Increased spacing and text size */}
            <FaEnvelope className="text-indigo-400" size={20} /> {/* Icon size adjusted */}
            <span>resoundify@example.com</span>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-3 mb-5 text-lg"> {/* Increased spacing and text size */}
            <FaPhoneAlt className="text-indigo-400" size={20} /> {/* Icon size adjusted */}
            <span>+91-9876543210</span>
          </p>
          <div className="flex justify-center md:justify-start space-x-5 mt-8"> {/* Increased spacing */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
              <FaLinkedin size={28} /> {/* Icon size adjusted */}
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
              <FaWhatsapp size={28} /> {/* Icon size adjusted */}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-base text-center"> {/* Increased padding and text size */}
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Resoundify. All Rights Reserved.</p>
        <p className="text-gray-500 mt-3">Designed & developed by WebSeeder Technologies</p>
        <div className="mt-3 space-x-6"> {/* Increased spacing */}
          <a href="#privacy" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
          <a href="#terms" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;