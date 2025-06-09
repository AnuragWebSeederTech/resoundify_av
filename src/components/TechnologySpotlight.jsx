import React from 'react';

const TechnologySpotlight = () => {
  return (
    // Fading dark gradient background
    <section className="relative py-24 px-8 bg-white text-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between z-10 space-y-16 lg:space-y-0 lg:space-x-16">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Heading size and weight matching the example */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-wide text-white leading-tight">
            Technology Spotlight: <span className="text-indigo-400">Dante Integration</span>
          </h2>
          {/* Paragraph size matching the example */}
          <p className="mb-10 text-lg md:text-xl leading-relaxed text-indigo-200">
            Dante replaces bulky, complicated cabling with simple network connections. You can send high-quality audio everywhere in your setup — without delays or mess. Resoundify builds all its products around this powerful technology, ensuring seamless, high-fidelity audio networking for your projects.
          </p>
          {/* Placeholder for video/infographic explanation - text size matching example */}
          <div className="bg-gray-800 rounded-xl p-10 mb-10 text-gray-400 text-center flex items-center justify-center h-72"> {/* Increased height */}
            <p className="text-lg">Placeholder for an explanatory video or infographic about Dante.</p>
          </div>
          {/* Call to Action Button - text size matching example */}
          <a
            href="#products"
            className="inline-block bg-indigo-500 text-white font-semibold px-10 py-5 rounded-full shadow-lg hover:bg-indigo-600 hover:scale-105 transition-all duration-300 ease-in-out text-lg"
          >
            Discover Dante-Enabled Products
          </a>
        </div>

        {/* Image/Video Placeholder - Increased size */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="bg-gray-800 rounded-xl p-10 shadow-2xl w-full max-w-lg h-[450px] flex items-center justify-center text-gray-400 text-center"> {/* Increased height */}
            <p className="text-lg">Placeholder for Dante visual/video (e.g., wiring diagram, animated explanation)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySpotlight;