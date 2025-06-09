import React from 'react';

const ExploreOurRange = () => {
  return (
    // Background changed to bg-indigo-950 to match TechnologySpotlight
    <section className="py-24 px-8 bg-white text-black text-center">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-wide text-black leading-tight"> {/* Updated font weight and size for consistency */}
        Explore Our <span className="text-indigo-400">Range</span> {/* Accent color for dark theme */}
      </h2>
      <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-black font-normal"> {/* Updated font size and weight for consistency */}
        Discover our lineup of Dante-enabled products, including audio interfaces, amplifiers, processors, and more – all engineered to deliver exceptional performance and flexibility. Whether you're an integrator, engineer, or AV enthusiast, Resoundify provides the tools to bring your vision to life.
      </p>
      <a
        href="#products"
        className="inline-block bg-indigo-500 text-white font-semibold px-10 py-5 rounded-full shadow-lg hover:bg-indigo-600 hover:scale-105 transition-all duration-300 ease-in-out text-xl md:text-2xl" // Updated font size for consistency
      >
        View Products
      </a>
    </section>
  );
};

export default ExploreOurRange;