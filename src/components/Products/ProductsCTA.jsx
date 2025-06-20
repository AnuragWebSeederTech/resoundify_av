import React from 'react';

const ProductsCTA = () => {
  return (
    <div className="text-center  rounded-3xl py-16 px-8 shadow-2xl relative overflow-hidden">
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full transform translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Ready to Elevate Your Audio Experience?
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Whether you're an audio engineer, system integrator, or simply an AV enthusiast, Resoundify provides the tools to bring your most ambitious sound visions to life.
        </p>
        <button className="bg-white text-gray-700 font-medium px-12 py-5 rounded-full text-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out group">
          Contact Our Experts
          <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default ProductsCTA;
