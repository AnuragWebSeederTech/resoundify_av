import React, { useState, useRef, useEffect } from 'react';

const ProductFilter = ({ categories, activeCategory, setActiveCategory }) => {
  // State to manage the visibility of the dropdown menu on small screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Ref to detect clicks outside the dropdown menu to close it
  const menuRef = useRef(null);

  // Effect to handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open and the click is outside the menuRef element, close the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Function to handle category selection and close the menu
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setIsMenuOpen(false); // Close the menu after selecting a category
  };

  return (
    // Main container for the product filter, applying the primary font
    <div className="mb-12 px-4 font-[Exo_2]">
      {/* Horizontal filter buttons for medium and larger screens */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 py-3 bg-white rounded-full shadow-lg max-w-7xl mx-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`
              px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out
              relative overflow-hidden group
              ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-xl transform scale-105"
                  : "bg-transparent text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
              }
            `}
          >
            {/* Animated background on hover/active */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="relative z-10">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Hamburger menu for small screens */}
      <div className="md:hidden relative w-full max-w-xs mx-auto" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full flex justify-between items-center px-6 py-3 bg-white rounded-full shadow-lg text-gray-700 font-semibold text-lg transition-all duration-300 ease-in-out hover:bg-indigo-50 hover:text-indigo-700"
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
        >
          {/* Display active category name or "Filter Products" */}
          <span className="truncate">
            {activeCategory ? categories.find(cat => cat.id === activeCategory)?.name : "Filter Products"}
          </span>
          {/* Hamburger icon */}
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Dropdown menu for categories */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-xl z-20 overflow-hidden">
            <ul className="py-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`
                      block w-full text-left px-6 py-3 text-lg font-medium transition-colors duration-200
                      ${
                        activeCategory === category.id
                          ? "bg-indigo-100 text-indigo-700"
                          : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                      }
                    `}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;