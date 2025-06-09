import React from 'react';

const TechnologySpotlight = () => {
  return (
    // Dark background consistent with 'Explore Our Range'
    <section className="relative py-20 px-6 bg-indigo-950 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between z-10 space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide text-white">
            Technology Spotlight: Dante Integration
          </h2>
          <p className="mb-8 text-lg md:text-xl leading-relaxed text-indigo-200">
            Dante replaces bulky, complicated cabling with simple network connections. You can send high-quality audio everywhere in your setup — without delays or mess. Resoundify builds all its products around this powerful technology, ensuring seamless, high-fidelity audio networking for your projects.
          </p>
          {/* Placeholder for video/infographic explanation */}
          <div className="bg-gray-800 rounded-xl p-6 mb-8 text-gray-400 text-center flex items-center justify-center h-48">
            <p>Placeholder for an explanatory video or infographic about Dante.</p>
          </div>
          {/* Call to Action Button consistent with other buttons */}
          <a
            href="#products" // Link to your products section
            className="inline-block bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-600 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Discover Dante-Enabled Products
          </a>
        </div>

        {/* Image/Video Placeholder */}
        <div className="lg:w-1/2 flex justify-center">
          {/* This could be a static image that summarizes Dante, or a responsive video embed */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-2xl w-full max-w-lg h-80 flex items-center justify-center text-gray-400 text-center">
            <p>Placeholder for Dante visual/video (e.g., wiring diagram, animated explanation)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySpotlight;