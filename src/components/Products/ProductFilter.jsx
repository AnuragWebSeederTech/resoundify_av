import React from 'react';

const ProductFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    // Primary Font (for entire site): Exo 2 applied here
    <div className="flex flex-wrap justify-center gap-4 mb-16 px-4 py-3 bg-white rounded-full shadow-lg max-w-fit mx-auto font-[Exo_2]">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
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
  );
};

export default ProductFilter;
