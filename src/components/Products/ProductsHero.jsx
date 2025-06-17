import React from 'react';

const ProductsHero = () => {
  return (
    <section 
      className="relative text-white py-28 px-6 lg:px-16 overflow-hidden shadow-xl bg-cover bg-center"
      style={{ backgroundImage: `url('/images/productbg.jpg')` }} // Placeholder image path
    >
      <div className="absolute inset-0 bg-black opacity-20"></div> {/* Optional: Add an overlay for better text readability */}

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight tracking-tighter">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-200">Innovation</span>
        </h1>
        <p className="text-xl md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-10">
          Discover Resoundify's cutting-edge audio-visual solutions. Each product is engineered for unparalleled performance, seamlessly integrating with your vision.
        </p>
        <button className="bg-white text-indigo-700 font-sans px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ProductsHero;