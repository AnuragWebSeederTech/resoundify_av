import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(true); // State for header visibility
  const [isWhiteBg, setIsWhiteBg] = useState(false); // State for background color
  const [lastScrollY, setLastScrollY] = useState(0); // To track scroll direction
  const location = useLocation(); // Hook to get current path

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchTerm("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
      setIsSearchOpen(false);
      setSearchTerm("");
    }
  };

  // Effect for handling scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine header visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) { // Scroll down
        setIsVisible(false);
      } else { // Scroll up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Determine background color based on scroll position and route
      // Assuming your hero section is at the very top (scrollY < some value, e.g., 600px)
      // and typically corresponds to the home page (or specific routes)
      const isHeroSection = location.pathname === '/' && currentScrollY < 600; // Adjust 600 as needed
      setIsWhiteBg(!isHeroSection && currentScrollY > 50); // Becomes white after scrolling a bit past hero or on other pages
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, location.pathname]); // Re-run when lastScrollY or path changes

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      ${isWhiteBg ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'}`}
    >
      {/* Merged Top Bar and Main Nav */}
      <div className="flex justify-between items-center px-6 lg:px-10 py-4 mx-auto relative">
        <div className="flex items-center space-x-4">
          {/* Wrapped logo with Link component */}
          <Link to="/" className="focus:outline-none"> {/* Added focus:outline-none for accessibility */}
            <img
              src={isWhiteBg ? "/images/resoundifyLogo.jpeg" : "/images/resoundifyLogo1.png"}
              alt="Resoundify Logo"
              className="h-12 w-auto object-cover rounded-lg cursor-pointer" // Added cursor-pointer for visual cue
            />
          </Link>
        </div>

        <nav className={`flex items-center space-x-15 font-medium mr-15 text-xl hidden md:flex
          ${isWhiteBg ? 'text-gray-800' : 'text-white'}`}>
          <Link to="/" className={`relative hover:scale-125 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full
            ${isWhiteBg ? 'hover:text-blue-700 after:bg-blue-700' : 'hover:text-white after:bg-white'}`}>
            Home
          </Link>
          <Link to="/about" className={`relative hover:scale-125 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full
            ${isWhiteBg ? 'hover:text-blue-700 after:bg-blue-700' : 'hover:text-white after:bg-white'}`}>
            About
          </Link>
          <Link to="/products" className={`relative hover:scale-125 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full
            ${isWhiteBg ? 'hover:text-blue-700 after:bg-blue-700' : 'hover:text-white after:bg-white'}`}>
            Products
          </Link>
          <Link to="/contact" className={`relative hover:scale-125 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full
            ${isWhiteBg ? 'hover:text-blue-700 after:bg-blue-700' : 'hover:text-white after:bg-white'}`}>
            Contact
          </Link>
        </nav>

        {/* Contact Icons (moved from original top bar) */}
        <div className={`flex items-center space-x-10 tracking-wide
          ${isWhiteBg ? 'text-gray-800' : 'text-white'}`}>
          <div className="flex items-center space-x-2 hover:text-blue-700 transition duration-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-700 transition duration-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

      {/* Global font style */}
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