import React from "react";
 import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight, FaClock, FaGlobe } from "react-icons/fa";
 // import { Link } from "react-router-dom"; // Commented out for demo
 const Link = ({ to, children, className, ...props }) => (
    <a href={to} className={className} {...props}>{children}</a>
 );

 const Footer = () => {
    return (
      <footer
        className="bg-gray-900 text-gray-300 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/footerbg.jpg')" }}
      >
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/50 to-gray-900/80 z-0"></div>
        
        {/* Main Footer Content */}
        <div className="relative z-10">
          
          
       
          {/* Main Footer Grid */}
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
              
              {/* Company Info - Takes 2 columns on XL screens */}
              <div className="xl:col-span-2">
                <div className="mb-6">
                  <img src="/images/resoundifyLogo.jpeg" alt="Resoundify Logo" className="h-12 mb-3 border-2 rounded-sm" />
                  <p className="text-blue-400 font-medium text-lg">Where Sound Meets Innovation</p>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                  Resoundify is a premier AV brand specializing in cutting-edge Dante-enabled products, 
                  designed to revolutionize audio and video networking for the modern world.
                </p>
                
                {/* Key Features/Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-400">500+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-sm text-gray-400">Support Available</div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div>
                  <p className="text-white font-semibold mb-3">Follow Our Journey</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-sm group"
                    >
                      <FaLinkedin className="text-xl text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-sm group"
                    >
                      <FaWhatsapp className="text-xl text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 relative">
                  Quick Links
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                </h4>
                <ul className="space-y-3">
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
                        className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                      >
                        <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 relative">
                  Services
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Audio Solutions", path: "/services/audio" },
                    { name: "Video Systems", path: "/services/video" },
                    { name: "Network Integration", path: "/services/network" },
                    { name: "Consultation", path: "/services/consultation" },
                    { name: "Installation", path: "/services/installation" }
                  ].map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.path} 
                        className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                      >
                        <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 relative">
                  Get In Touch
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                </h4>
                
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1 group-hover:bg-blue-600/20 transition-colors duration-300">
                      <FaEnvelope className="text-blue-400" size={16} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email Us</p>
                      <a href="mailto:resoundify@example.com" className="text-white hover:text-blue-400 transition-colors duration-300">
                        resoundify@example.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1 group-hover:bg-green-600/20 transition-colors duration-300">
                      <FaPhoneAlt className="text-green-400" size={16} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Call Us</p>
                      <a href="tel:+919876543210" className="text-white hover:text-green-400 transition-colors duration-300">
                        +91-9876543210
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-3 group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                      <FaMapMarkerAlt className="text-red-400" size={16} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Visit Us</p>
                      <p className="text-white text-sm leading-relaxed">
                        Innovation Hub, Tech City<br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-3 group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                      <FaClock className="text-yellow-400" size={16} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Business Hours</p>
                      <p className="text-white text-sm">
                        Mon - Fri: 9AM - 6PM<br />
                        Sat: 10AM - 4PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                
                {/* Copyright */}
                <div className="text-center md:text-left">
                  <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Resoundify. All Rights Reserved.
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Designed & developed by 
                    <span className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-300 ml-1">
                      WebSeeder Technologies
                    </span>
                  </p>
                </div>

                {/* Legal Links */}
                <div className="flex items-center space-x-6">
                  <Link 
                    to="/privacy" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/terms" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Terms of Use
                  </Link>
                  <div className="flex items-center text-gray-400 text-sm">
                    <FaGlobe className="mr-1" size={12} />
                    English
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
 };

 export default Footer;