import React, { useState, useRef, useEffect } from 'react';

const ProductFilter = ({ categories, activeCategory, setActiveCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setIsMenuOpen(false);
  };

  const activeCategory_name = categories.find(cat => cat.id === activeCategory)?.name || "All Products";

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-md border border-gray-200 text-gray-800 font-semibold hover:bg-gray-50 transition-all duration-200"
        >
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
            </svg>
            <span>{activeCategory_name}</span>
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
              isMenuOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Mobile Dropdown */}
        <div className={`
          mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden
          transform transition-all duration-300 ease-out origin-top
          ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
        `}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`
                w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200
                ${activeCategory === category.id 
                  ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-500' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'
                }
                ${index !== categories.length - 1 ? 'border-b border-gray-100' : ''}
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Sidebar Filter */}
      <div className="hidden lg:block">
        <div className="sticky top-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 px-4 py-4 min-h-[600px]">
            {/* Filter Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-7 h-7 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
                Filter Products
              </h3>
              <p className="text-base text-gray-600">Choose a category to browse</p>
            </div>

            {/* Filter Categories */}
            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`
                    w-full text-left px-6 py-4 rounded-2xl font-medium transition-all duration-200
                    flex items-center justify-between group text-base
                    ${activeCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-md'
                    }
                  `}
                >
                  <span className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full transition-colors ${
                      activeCategory === category.id ? 'bg-white' : 'bg-emerald-400 group-hover:bg-emerald-500'
                    }`} />
                    <span>{category.name}</span>
                  </span>
                  
                  {activeCategory === category.id && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Active Filter Display */}
            {activeCategory !== "all" && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium text-emerald-800">Active Filter</p>
                      <p className="text-emerald-700 font-semibold text-lg">{activeCategory_name}</p>
                    </div>
                    <button
                      onClick={() => handleCategoryClick("all")}
                      className="text-emerald-600 hover:text-emerald-800 p-2 rounded-xl hover:bg-emerald-100 transition-colors duration-200"
                      title="Clear filter"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;