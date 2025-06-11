// Header.js
import React from "react";

const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 right-0 bg-transparent z-50">
      {/* Top bar - Contact Info */}
      <div className="text-gray-200 text-base px-6 lg:px-16 py-1 flex justify-between items-center"> {/* Removed background and blur classes, changed text to a lighter color for contrast */}
        <div></div>

        {/* Right Side: Contact + LinkedIn */}
        <div className="flex items-center space-x-6 font-medium tracking-wide">
          {/* Email */}
          <div className="flex items-center space-x-2 hover:text-indigo-400 transition duration-300 cursor-pointer"> {/* Adjusted hover color for better visibility */}
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
          <div className="flex items-center space-x-2 hover:text-indigo-400 transition duration-300 cursor-pointer"> {/* Adjusted hover color for better visibility */}
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
            className="hover:text-indigo-400 transition duration-300" // Adjusted hover color for better visibility
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
      <div className="flex justify-between items-center px-6 lg:px-16 py-0 mx-auto"> {/* Removed background and blur classes */}
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/resoundifyLogo.jpeg"
            alt="Resoundify Logo"
            className="h-14 w-auto object-cover rounded-lg"
          />
        </div>

        {/* Navigation Links */}
        <nav className="space-x-12 font-semibold text-lg text-white hidden md:flex"> {/* Changed text color to white for contrast */}
          <a
            href="/"
            className="relative hover:text-indigo-400 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full" // Adjusted hover/underline color
          >
            Home
          </a>
          <a
            href="/about"
            className="relative hover:text-indigo-400 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full" // Adjusted hover/underline color
          >
            About
          </a>
          <a
            href="#contact"
            className="relative hover:text-indigo-400 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full" // Adjusted hover/underline color
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;