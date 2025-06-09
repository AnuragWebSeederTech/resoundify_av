import React from 'react';

const WhatResoundifyDoes = () => {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Column: Heading and Main Description */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-wide text-gray-900">
            What Resoundify Does
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Resoundify creates smart, high-quality sound and video systems that are perfect for:
          </p>
          <ul className="list-disc list-inside space-y-3 mb-8 text-lg md:text-xl text-gray-700 font-medium">
            <li>Offices & Corporate Spaces</li>
            <li>Educational Institutions (Schools, Universities)</li>
            <li>Hospitality (Hotels, Restaurants)</li>
            <li>Live Event Stages & Venues</li>
          </ul>
          <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-700">
            Their products use Dante, a special kind of technology that lets sound move around smoothly over standard network cables — no messy wiring, no delays, no confusion. Whether it’s a small meeting room or a big concert hall, Resoundify’s tools make sure the sound is always clear, fast, and reliable.
          </p>
        </div>

        {/* Right Column: Placeholder for an image or illustration */}
        <div className="lg:w-1/2 flex justify-center items-center">
          {/* You can replace this with an actual image or illustration */}
          <div className="bg-gray-100 rounded-xl p-8 shadow-lg w-full max-w-lg h-64 flex items-center justify-center text-gray-400 text-center">
            <p>Placeholder for an engaging illustration or image about AV systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatResoundifyDoes;