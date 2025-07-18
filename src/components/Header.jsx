import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from 'react-router-dom';

// Simple throttling function to limit how often a function can run
// This version is slightly more robust
const throttle = (func, limit) => {
  let inThrottle;
  let lastResult;
  return function() {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      inThrottle = true;
      lastResult = func.apply(context, args);
      setTimeout(() => inThrottle = false, limit);
    }
    return lastResult;
  };
};

const Header = () => {
  // State to control header visibility (slide up/down)
  const [isVisible, setIsVisible] = useState(true);
  // State to control header background and text color
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  // State to manage the mobile menu's open/closed status
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track screen width
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);


  // Ref to store the last scroll position for determining scroll direction
  const lastScrollY = useRef(0);
  // Hook to get the current location object from React Router
  const location = useLocation();

  // Memoize the scroll handler to prevent re-creation on every render
  // This is good practice when adding functions to event listeners as a dependency
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 100; // Define a threshold for when header hide/show applies

    // Determine if we are on the homepage
    const isHomePage = location.pathname === '/';

    let newIsVisible = isVisible; // Initialize with current state to minimize re-renders
    let newIsWhiteBg = isWhiteBg; // Initialize with current state

    // --- Universal Header Visibility Logic (Hide on scroll down, Show on scroll up) ---
    if (currentScrollY > scrollThreshold) {
      // If scrolled past the threshold:
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down, hide header
        newIsVisible = false;
      } else if (currentScrollY < lastScrollY.current) { // Only set to true if truly scrolling up
        // Scrolling up, show header
        newIsVisible = true;
      }
      // If currentScrollY === lastScrollY.current (no scroll), keep current visibility
    } else {
      // If near the top (below threshold), always visible
      newIsVisible = true;
    }

    // --- Page-Specific Header Background Logic ---
    if (isHomePage) {
      // On homepage: transparent only at the very top (less than 100px scroll)
      newIsWhiteBg = !(currentScrollY < 100); // If NOT within 100px of top, then white background
    } else {
      // On other pages: always white background
      newIsWhiteBg = true;
    }

    // Update states only if they have actually changed to prevent unnecessary re-renders
    if (isVisible !== newIsVisible) {
      // *** IMPORTANT DEBUGGING LOGS ***
      console.log(`Scroll: ${currentScrollY}, lastScroll: ${lastScrollY.current}, isVisible changed to: ${newIsVisible}`);
      setIsVisible(newIsVisible);
    }
    if (isWhiteBg !== newIsWhiteBg) {
      // *** IMPORTANT DEBUGGING LOGS ***
      console.log(`Scroll: ${currentScrollY}, isWhiteBg changed to: ${newIsWhiteBg}`);
      setIsWhiteBg(newIsWhiteBg);
    }

    lastScrollY.current = currentScrollY; // Update last scroll position
  }, [isVisible, isWhiteBg, location.pathname]); // Dependencies for useCallback

  // Effect hook to handle scroll behavior for header visibility and background change
  useEffect(() => {
    // Apply throttling to the scroll handler for performance
    const throttledHandleScroll = throttle(handleScroll, 100);

    // Add scroll event listener
    window.addEventListener("scroll", throttledHandleScroll);

    // Call handleScroll initially to set the correct state on component mount
    handleScroll(); // Ensures initial state is correct for the current page

    // Cleanup function: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [handleScroll]); // Dependency for this effect is the memoized handleScroll

  // Effect hook to close the mobile menu automatically when the route changes
  useEffect(() => {
    if (isMobileMenuOpen) { // Only attempt to close if it's currently open
      setIsMobileMenuOpen(false);
    }
  }, [location.pathname]); // Dependency on location.pathname

  // Effect hook to disable/enable body scrolling when the mobile menu is open/closed
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = ''; // Restore scrolling
    }
    // Cleanup: ensure scrolling is re-enabled if component unmounts while menu is open
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]); // Dependency on isMobileMenuOpen

  // Effect hook to update screen size state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount


  // Determine text color class based on background state
  const textColorClass = isWhiteBg ? 'text-gray-800' : 'text-white';
  // Determine hover color class for navigation links based on background state
  const hoverColorClass = isWhiteBg ? 'hover:text-blue-700 after:bg-blue-700' : 'hover:text-white after:bg-white';

  // Determine logo source based on screen size
  const logoSrc = isSmallScreen ? "/images/resoundifyLogo.jpeg" : "/images/resoundifyLogo1.png";

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isVisible ? 'translate-y-0' : '-translate-y-full'} {/* Controls header slide in/out */}
      ${isWhiteBg ? 'bg-white shadow-md' : 'bg-transparent'} {/* Controls background color */}
      ${textColorClass}`}
    >
      <div className="flex justify-between items-center px-6 lg:px-10 py-4 mx-auto relative">
        <div className="flex items-center space-x-4">
          <Link to="/" className="focus:outline-none">
            <img
              src={logoSrc} // Use the dynamically determined logoSrc
              alt="Resoundify Logo"
              className="h-8 w-auto object-cover rounded-lg cursor-pointer md:h-12 lg:h-12" // Responsive logo sizing
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
          <Link to="/projects" className={`relative hover:scale-125 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${hoverColorClass}`}>
            Projects
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
              // 'X' icon when menu is open
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`flex flex-col justify-between fixed top-0 left-0 h-230 w-full bg-gradient-to-bl from-gray-200 via-gray-800 to-white rounded-b-xl bg-opacity-40 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col items-center py-20 text-white`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-4xl focus:outline-none"
          aria-label="Close mobile menu"
        >
          &times; {/* Close button (X icon) */}
        </button>
        <nav className="flex flex-col items-center mt-35 space-y-12 text-2xl font-semibold mb-10">
          <Link to="/" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/products" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            Products
          </Link>
          <Link to="/projects" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        {/* Mobile Contact Icons */}
        <div className="flex items-end space-x-8">
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