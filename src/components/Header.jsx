import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';

// Simple throttling function
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // This state is not used, consider removing if not needed.
  const [searchTerm, setSearchTerm] = useState(""); // This state is not used, consider removing if not needed.
  const [isVisible, setIsVisible] = useState(true);
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // New state to track mobile view (though not strictly needed for logo *sizing* with Tailwind)
  const [isMobileView, setIsMobileView] = useState(false);

  // Effect for handling scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const shouldBeVisible = !(currentScrollY > lastScrollY.current && currentScrollY > 100);
      if (isVisible !== shouldBeVisible) {
        setIsVisible(shouldBeVisible);
      }
      lastScrollY.current = currentScrollY;

      const isHeroSection = location.pathname === '/' && currentScrollY < 600;
      const shouldBeWhiteBg = !isHeroSection && currentScrollY > 50;
      if (isWhiteBg !== shouldBeWhiteBg) {
        setIsWhiteBg(shouldBeWhiteBg);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [isVisible, isWhiteBg, location.pathname]);

  // Effect for handling window resize to determine mobile view (keep for logo SRC logic if desired)
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Assuming 768px as the breakpoint for mobile (md in Tailwind)
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Disable/Enable body scroll when mobile menu is open/closed
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = ''; // Cleanup on component unmount
    };
  }, [isMobileMenuOpen]);


  console.log("Header Rendered");

  const textColorClass = isWhiteBg ? 'text-gray-800' : 'text-white';
  const hoverColorClass = isWhiteBg ? 'hover:text-blue-700 after:bg-blue-700' : 'hover:text-white after:bg-white';

  const logoSrc = isMobileView ? "/images/resoundifyLogo.jpeg" : (isWhiteBg ? "/images/resoundifyLogo.jpeg" : "/images/resoundifyLogo1.png");

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      ${isWhiteBg ? 'bg-white shadow-md' : 'bg-transparent'}
      ${textColorClass}`}
      style={{ fontFamily: 'Exo 2' }} // Applying Exo 2 as primary font as per your preference.
    >
      <div className="flex justify-between items-center px-6 lg:px-10 py-4 mx-auto relative">
        <div className="flex items-center space-x-4">
          <Link to="/" className="focus:outline-none">
            <img
              src={logoSrc}
              alt="Resoundify Logo"
              className="h-8 w-auto object-cover rounded-lg cursor-pointer md:h-12 lg:h-12" // MODIFIED HERE
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`items-center space-x-15 font-medium mr-15 text-xl hidden md:flex ${textColorClass}`}>
          <Link to="/" className={`relative hover:scale-125 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${hoverColorClass}`}>
            Home
          </Link>
          <Link to="/about" className={`relative hover:scale-125 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${hoverColorClass}`}>
            About
          </Link>
          <Link to="/products" className={`relative hover:scale-125 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${hoverColorClass}`}>
            Products
          </Link>
          <Link to="/contact" className={`relative hover:scale-125 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${hoverColorClass}`}>
            Contact
          </Link>
        </nav>

        {/* Desktop Contact Icons */}
        <div className={`items-center space-x-10 tracking-wide hidden md:flex ${textColorClass}`}>
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

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-2xl focus:outline-none ${textColorClass}`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-100 w-full bg-gradient-to-bl from-gray-500 via-gray-800-400 to-white rounded-b-xl bg-opacity-40 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col items-center py-20 text-white`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-4xl focus:outline-none"
          aria-label="Close mobile menu"
        >
          &times;
        </button>
        <nav className="flex flex-col items-center space-y-6 text-2xl font-semibold mb-10">
          <Link to="/" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/products" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            Products
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-8">
          <div className="hover:text-blue-400 transition duration-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div className="hover:text-blue-400 transition duration-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);