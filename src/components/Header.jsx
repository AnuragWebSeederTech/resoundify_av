import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchTerm(""); // Clear search term when opening/closing
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
      setIsSearchOpen(false); // Close search bar after submit
      setSearchTerm(""); // Clear search term
    }
  };

  return (
    <header className="w-full absolute top-0 left-0 right-0 bg-transparent z-50">
      {/* Top bar - Contact Info */}
      <div className="text-gray-700 bg-white text-base px-6 lg:px-10 py-1 flex justify-end items-center border-b border-gray-200"> {/* Reduced padding to py-1 */}
        {/* Right Side: Contact + LinkedIn */}
        <div className="flex items-center space-x-6 font-medium tracking-wide">
          {/* Email */}
          <div className="flex items-center space-x-2 hover:text-blue-700 transition duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>resoundify@example.com</span>
          </div>
          {/* Phone */}
          <div className="flex items-center space-x-2 hover:text-blue-700 transition duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91-9876543210</span>
          </div>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
      {/* Main Navigation */}
      <div className="flex bg-white justify-between items-center px-6 lg:px-10 py-2 mx-auto shadow-md relative"> {/* Reduced padding to py-2 */}
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/resoundifyLogo.jpeg" // Ensure this path is correct
            alt="Resoundify Logo"
            className="h-12 w-auto object-cover rounded-lg"
          />
        </div>
        {/* Navigation Links and Search */}
<<<<<<< HEAD
        <nav className="flex items-center space-x-8 font-semibold text-lg text-gray-800 hidden md:flex">
          <a
            href="/"
            className="relative hover:text-blue-700 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="/about"
            className="relative hover:text-blue-700 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="/products"
            className="relative hover:text-blue-700 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            Products
          </a>
          <a
            href="/contact"
            className="relative hover:text-blue-700 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
=======
        <nav className="flex items-center space-x-8 font-semibold text-lg text-black hidden md:flex">
          <Link
            to="/"
            className="relative hover:text-indigo-600 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="relative hover:text-indigo-600 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            to="/products"
            className="relative hover:text-indigo-600 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="relative hover:text-indigo-600 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
>>>>>>> 7c37e0ab73d1f4602bef9e0776514554c352dac6
          >
            Contact
          </Link>
          {/* Search Icon */}
          <div
            className="cursor-pointer hover:text-blue-700 transition duration-300 ml-6"
            onClick={handleSearchToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </nav>

        {/* Search Bar */}
        {isSearchOpen && (
          <form
            onSubmit={handleSearchSubmit}
            className="absolute top-1/2 right-16 transform -translate-y-1/2 flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-lg transition-all duration-300 ease-in-out w-96"
          >
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow outline-none text-gray-800 text-lg"
              value={searchTerm}
              onChange={handleSearchChange}
              autoFocus // Focus input when it appears
            />
            <button type="submit" className="text-gray-600 hover:text-blue-700 transition duration-300 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleSearchToggle}
              className="text-gray-600 hover:text-red-500 transition duration-300 ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </form>
        )}
      </div>
      {/* Custom styles for the Inter font */}{/* This is only for the header; ensure it's consistent if applied globally */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        header, header * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </header>
  );
};

export default Header;
