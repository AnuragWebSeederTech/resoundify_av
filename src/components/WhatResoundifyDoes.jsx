import React from 'react';

const WhatResoundifyDoes = () => {
  return (
    // Changed background to a deeper indigo-to-white gradient
    <section className="py-24 px-8 bg-white text-gray-800"> {/* Changed gradient to indigo-300 */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-16 lg:space-y-0 lg:space-x-16">
        {/* Left Column: Heading and Main Description */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Main Heading: text-5xl md:text-6xl, font-extrabold */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-wide text-gray-900 leading-tight">
            What <span className="text-indigo-600">Resoundify</span> Does
          </h2>
          {/* Paragraphs and list items: text-xl md:text-2xl, font-normal */}
          <p className="mb-8 text-xl md:text-2xl leading-relaxed text-black font-normal">
            Resoundify creates smart, high-quality sound and video systems that are perfect for:
          </p>
          <ul className="list-disc list-inside space-y-4 mb-10 text-xl md:text-2xl text-gray-700 font-normal">
            <li>Offices & Corporate Spaces</li>
            <li>Educational Institutions (Schools, Universities)</li>
            <li>Hospitality (Hotels, Restaurants)</li>
            <li>Live Event Stages & Venues</li>
          </ul>
          <p className="mb-8 text-xl md:text-2xl leading-relaxed text-gray-700 font-normal">
            Their products use Dante, a special kind of technology that lets sound move around smoothly over standard network cables — no messy wiring, no delays, no confusion. Whether it’s a small meeting room or a big concert hall, Resoundify’s tools make sure the sound is always clear, fast, and reliable.
          </p>
        </div>

        {/* Right Column: Image or illustration */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="/images/what.jpg"
            alt="Illustration of AV systems for various spaces"
            className="w-full max-w-lg h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatResoundifyDoes;