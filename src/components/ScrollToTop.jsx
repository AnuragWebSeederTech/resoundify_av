// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the document
    window.scrollTo(0, 0); 
    // Or for a smoother scroll:
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); 
    // Or for an instant scroll, often preferred for page transitions:
    // window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]); // Re-run effect whenever the pathname changes

  return null; // This component doesn't render any UI
};

export default ScrollToTop;