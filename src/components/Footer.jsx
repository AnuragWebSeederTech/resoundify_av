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
    // Main footer container with an even lighter slate gradient background, subtle shadow, and refined curves
    // Primary Font (for entire site): Exo 2 applied here
    <footer
      className="bg-gradient-to-br from-white via-slate-200 to-white text-slate-700 py-12 px-4 sm:px-6 lg:px-8 shadow-sm rounded-t-3xl relative overflow-hidden font-[Exo_2]"
    >
      {/* Main Footer Content Grid - Now using max-w-7xl for better control and proper padding */}
      <div className="relative z-10 w-[95%] mx-auto py-8 bg-opacity-10 rounded-xl backdrop-blur-sm lg:ml-25 md:ml-0"> {/* Corrected width and padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-8">

          {/* Company Info Section - Takes 2 columns on XL screens, adjusted for flex to push legal links down */}
          <div className="xl:col-span-2 text-center md:text-left flex flex-col justify-between"> {/* Added flex flex-col justify-between */}
            <div> {/* Wrapper for logo and description */}
              <div className="mb-6">
                {/* Resoundify logo text with stronger visual impact using a slightly deeper slate for contrast */}
                <img src="/images/resoundifyLogo1.png" alt="Resoundify Logo" className="w-80 h-16 rounded-3xl mx-auto md:mx-0 mb-2" />
                <p className="text-slate-700 font-semibold text-xl leading-tight">Where Sound Meets Innovation</p>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm mb-8 max-w-md mx-auto md:mx-0 opacity-95">
                {companyDescription}
              </p>
            </div>

            {/* Legal Links - now pushed to the bottom of this flex container */}
            <div className="flex items-center space-x-6 justify-center md:justify-start pt-4 md:pt-0"> {/* Added pt-4 for mobile spacing, md:pt-0 to remove on larger screens */}
              <Link
                to="/privacy"
                className="text-slate-500 transition-colors duration-300 text-sm font-medium hover:text-slate-800"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-slate-500 transition-colors duration-300 text-sm font-medium hover:text-slate-800"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-left"> {/* Added text-center for mobile */}
            {/* Heading Font (for H1, H2): Tilt Neon applied here */}
            <h4 className="text-xl font-bold text-slate-900 mb-6 relative group cursor-pointer font-[Tilt_Neon]">
              Quick Links
              {/* Corrected underline positioning for proper hover effect on all screens */}
              <span className="absolute left-1/2 md:left-0 -bottom-2 w-0 h-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full transform -translate-x-1/2 md:translate-x-0 transition-all duration-300 group-hover:w-12"></span>
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
                    className="text-slate-600 transition-colors duration-300 text-base relative inline-block group hover:text-slate-700"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="text-center md:text-left"> {/* Added text-center for mobile */}
            {/* Heading Font (for H1, H2): Tilt Neon applied here */}
            <h4 className="text-xl font-bold text-slate-900 mb-6 relative group cursor-pointer font-[Tilt_Neon]">
              Services
              {/* Corrected underline positioning for proper hover effect on all screens */}
              <span className="absolute left-1/2 md:left-0 -bottom-2 w-0 h-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full transform -translate-x-1/2 md:translate-x-0 transition-all duration-300 group-hover:w-12"></span>
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
                    className="text-slate-600 transition-colors duration-300 text-base relative inline-block group hover:text-slate-700"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="text-center md:text-left"> {/* Added text-center for mobile */}
            {/* Heading Font (for H1, H2): Tilt Neon applied here */}
            <h4 className="text-xl font-bold text-slate-900 mb-6 relative group cursor-pointer font-[Tilt_Neon]">
              Get In Touch
              {/* Corrected underline positioning for proper hover effect on all screens */}
              <span className="absolute left-1/2 md:left-0 -bottom-2 w-0 h-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full transform -translate-x-1/2 md:translate-x-0 transition-all duration-300 group-hover:w-12"></span>
            </h4>

            <div className="space-y-5">
              {/* Email */}
              <div>
                <p className="text-slate-500 text-sm mb-0.5">Email Us</p>
                <a href="mailto:resoundify@example.com" className="text-slate-700 font-semibold transition-colors duration-300 text-base underline-offset-2 hover:text-slate-900 hover:underline">
                  resoundify@example.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-slate-500 text-sm mb-0.5">Call Us</p>
                <a href="tel:+919876543210" className="text-slate-700 font-semibold transition-colors duration-300 text-base underline-offset-2 hover:text-slate-900 hover:underline">
                  +91-9876543210
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="text-slate-500 text-sm mb-0.5">Visit Us</p>
                <p className="text-slate-800 text-base leading-relaxed font-medium">
                  Innovation Hub, Tech City<br />
                  India
                </p>
              </div>

              {/* Business Hours */}
              <div>
                <p className="text-slate-500 text-sm mb-0.5">Business Hours</p>
                <p className="text-slate-800 text-base font-medium">
                  Mon - Fri: 9AM - 6PM<br />
                  Sat: 10AM - 4PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar (Copyright & "Designed By") */}
      <div className="mt-10 pt-2 relative z-10 border-t-2 border-slate-300">
        <div className="max-w-7xl mx-auto px-4 py-0 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

          {/* Left section: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Resoundify. All Rights Reserved.
            </p>
          </div>

          {/* Right section: Designed & Developed by */}
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              Designed & developed by
              <span className="text-slate-700 cursor-pointer transition-colors duration-300 ml-1 font-semibold hover:text-slate-900">
                <a href="https://www.webseeder.in" target="_blank" rel="noopener noreferrer">
                  WebSeeder Technologies Pvt Ltd
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;