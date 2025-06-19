// App.js (for demonstration purposes, typically in your main App file)
import React from 'react';

// This is a placeholder for react-router-dom's Link component
// In a real application, you would uncomment the import for 'react-router-dom'
// and remove this mock Link component.
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>{children}</a>
);

// Footer Component
const Footer = () => {
  // Concise company description
  const companyDescription = "Resoundify delivers unparalleled Dante-enabled AV solutions, transforming connectivity and communication. We empower professional audio experiences with innovation and reliability.";

  return (
    // Main footer container with an even lighter blue gradient background, subtle shadow, and refined curves
    <footer
      className="bg-gradient-to-br from-blue-50 to-blue-50 text-gray-700 py-12 px-4 sm:px-6 lg:px-8 shadow-sm rounded-t-3xl relative overflow-hidden"
    >
      {/* Subtle, animated background flourishes for a dynamic feel using very light blues and lower opacity */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply opacity-10 animate-pulse-slow"></div>
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply opacity-10 animate-pulse-slow delay-200"></div>

      {/* Main Footer Content Grid - Now taking 80% width with a nearly transparent frosted glass effect */}
      <div className="relative z-10 w-4/5 mx-auto px-4 py-8 bg-opacity-10 rounded-xl shadow-sm backdrop-blur-sm border border-blue-50 border-opacity-70">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-8">

          {/* Company Info Section - Takes 2 columns on XL screens */}
          <div className="xl:col-span-2 text-center md:text-left">
            <div className="mb-6">
              {/* Resoundify logo text with stronger visual impact using a slightly deeper blue for contrast */}
              <img src ="/images/resoundifyLogo.jpeg" alt="Resoundify Logo" className="w-80 h-16 rounded-3xl mx-auto md:mx-0 mb-2" />
              <p className="text-blue-600 font-semibold text-xl leading-tight">Where Sound Meets Innovation</p>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm mb-8 max-w-md mx-auto md:mx-0 opacity-95">
              {companyDescription}
            </p>

            {/* Placeholder for social media or other calls to action - currently empty as requested */}
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-6 relative group cursor-pointer">
              Quick Links
              {/* Underline now animates on hover using lighter blue gradient */}
              <span className="absolute left-1/2 md:left-0 -bottom-2 w-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transform -translate-x-1/2 md:translate-x-0 transition-all duration-300 group-hover:w-12"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Solutions", path: "/solutions" },
                { name: "Support", path: "/contact" },
                { name: "About Us", path: "/about" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 transition-colors duration-300 text-base relative inline-block group hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-6 relative group cursor-pointer">
              Services
              {/* Underline now animates on hover using lighter blue gradient */}
              <span className="absolute left-1/2 md:left-0 -bottom-2 w-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transform -translate-x-1/2 md:translate-x-0 transition-all duration-300 group-hover:w-12"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Audio Solutions", path: "/services/audio" },
                { name: "Video Systems", path: "https://www.resoundify.com/services/video" },
                { name: "Network Integration", path: "/services/network" },
                { name: "Consultation", path: "/services/consultation" },
                { name: "Installation", path: "/services/installation" }
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-600 transition-colors duration-300 text-base relative inline-block group hover:text-blue-600"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-6 relative group cursor-pointer">
              Get In Touch
              {/* Underline now animates on hover using lighter blue gradient */}
              <span className="absolute left-1/2 md:left-0 -bottom-2 w-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transform -translate-x-1/2 md:translate-x-0 transition-all duration-300 group-hover:w-12"></span>
            </h4>

            <div className="space-y-5">
              {/* Email */}
              <div>
                <p className="text-gray-500 text-sm mb-0.5">Email Us</p>
                <a href="mailto:resoundify@example.com" className="text-blue-600 font-semibold transition-colors duration-300 text-base underline-offset-2 hover:text-blue-800 hover:underline">
                  resoundify@example.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-gray-500 text-sm mb-0.5">Call Us</p>
                <a href="tel:+919876543210" className="text-blue-600 font-semibold transition-colors duration-300 text-base underline-offset-2 hover:text-blue-800 hover:underline">
                  +91-9876543210
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="text-gray-500 text-sm mb-0.5">Visit Us</p>
                <p className="text-gray-800 text-base leading-relaxed font-medium">
                  Innovation Hub, Tech City<br />
                  India
                </p>
              </div>

              {/* Business Hours */}
              <div>
                <p className="text-gray-500 text-sm mb-0.5">Business Hours</p>
                <p className="text-gray-800 text-base font-medium">
                  Mon - Fri: 9AM - 6PM<br />
                  Sat: 10AM - 4PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar (Copyright & Legal Links - Enhanced) */}
      <div className="mt-10 pt-2 relative z-10 border-t-2 border-blue-100">

        <div className="max-w-7xl mx-auto px-4 py-0 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Resoundify. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Designed & developed by
              <span className="text-blue-500 cursor-pointer transition-colors duration-300 ml-1 font-semibold hover:text-blue-700">
                WebSeeder Technologies
              </span>
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6">
            <Link
              to="/privacy"
              className="text-gray-500 transition-colors duration-300 text-sm font-medium hover:text-gray-800"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 transition-colors duration-300 text-sm font-medium hover:text-gray-800"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;