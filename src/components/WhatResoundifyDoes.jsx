import React from 'react';

const WhatResoundifyDoes = () => {
  return (
    <section className="min-h-screen bg-white font-sans relative overflow-hidden">
      {/* --- Dynamic, Layered Top Section --- */}
      {/* Changed gradient direction to 'to-b' (top to bottom) and colors to from-gray-900 to-indigo-900 for a darker, consistent theme. */}
      <div className="relative px-10 bg-gradient-to-b from-black to-blue-900 py-24 md:py-32 lg:py-40 px-4 sm:px-8 lg:px-16 text-white text-left overflow-hidden z-10">

        {/* Subtle Background Circles/Bubbles for visual texture */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute w-64 h-64 bg-black rounded-full -top-16 -left-16 blur-3xl"></div>
          <div className="absolute w-96 h-96 bg- rounded-full -bottom-24 -right-24 blur-3xl"></div>
        </div>

        {/* Content Overlayed - Main Statement */}
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Side: Bold Heading with Accent */}
          <div className="md:w-3/5">
            <p className="text-xl md:text-xl font-semibold text-blue-200 mb-4 animate-fade-in-down">
              Redefining Audio-Visual Experiences
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none animate-fade-in-left">
              <span className="block">What Resoundify</span>
              {/* Even more emphasized with larger shadow and strong skew */}
              <span className="block text-white text-shadow-xl transform -skew-y-3 inline-block relative -mt-4 md:-mt-8 lg:-mt-10">DOES.</span>
            </h1>
          </div>

          {/* Right Side: Core Value Proposition */}
          <div className="md:w-2/5 md:mt-12 text-lg md:text-lg text-blue-100 animate-fade-in-right">
            <p>
              We don't just build audio-video systems; we engineer seamless, crystal-clear auditory and visual environments that transform professional spaces of all sizes into extraordinary experiences.
            </p>
            <p className="mt-4 font-semibold text-white">
              Discover the power of clarity.
            </p>
          </div>
        </div>
      </div>

      {/* --- Section Divider / Transition --- */}
      <div className="relative -mt-16 md:-mt-20 lg:-mt-4 w-full h-32 bg-white transform -skew-y-3 origin-top-left z-20 shadow-lg overflow-hidden">
        <img
          src="/images/NewLogo.jpeg" // replace with actual path
          alt="Logo"
          className="absolute inset-0 w-full h-full object-cover opacity-100 transform scale-150"
        />
      </div>

      {/* --- Main Content Below Header --- */}
      <div className="py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center relative z-30">

        {/* --- PERFECT FOR Section - Enhanced Design --- */}
        <div className="w-full max-w-6xl mb-20 relative px-4 py-12 md:px-8 md:py-16 rounded-3xl bg-gradient-to-tr from-blue-50 to-purple-50 shadow-inner-xl animate-fade-in">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 text-center mb-12 animate-fade-in">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* Card 1: Offices & Corporate */}
            <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out border border-gray-100 animate-slide-in-left delay-100">
              <div className="p-4 bg-blue-100 rounded-full mb-4 inline-flex items-center justify-center shadow-md">
                <span className="text-5xl leading-none" role="img" aria-label="Office building">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Offices & Corporate</h3>
              <p className="text-gray-600 text-sm">Elevate communication, presentations, and internal communications with pristine audio.</p>
            </div>

            {/* Card 2: Schools & Universities */}
            <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out border border-gray-100 animate-slide-in-up delay-200">
              <div className="p-4 bg-purple-100 rounded-full mb-4 inline-flex items-center justify-center shadow-md">
                <span className="text-5xl leading-none" role="img" aria-label="Graduation cap">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Schools & Universities</h3>
              <p className="text-gray-600 text-sm">Ensure every lecture, assembly, and campus announcement is heard clearly.</p>
            </div>

            {/* Card 3: Hotels & Restaurants */}
            <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out border border-gray-100 animate-slide-in-down delay-300">
              <div className="p-4 bg-green-100 rounded-full mb-4 inline-flex items-center justify-center shadow-md">
                <span className="text-5xl leading-none" role="img" aria-label="Hotel">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hotels & Restaurants</h3>
              <p className="text-gray-600 text-sm">Create the perfect ambiance and enhance guest experiences with superior sound.</p>
            </div>

            {/* Card 4: Live Events & Venues */}
            <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out border border-gray-100 animate-slide-in-right delay-400">
              <div className="p-4 bg-yellow-100 rounded-full mb-4 inline-flex items-center justify-center shadow-md">
                <span className="text-5xl leading-none" role="img" aria-label="Musical notes">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Events & Venues</h3>
              <p className="text-gray-600 text-sm">Deliver powerful, reliable audio for unforgettable performances and events.</p>
            </div>
          </div>
        </div>

        {/* --- DANTE TECHNOLOGY Section - Enhanced Design with Base64 SVG --- */}
        <div className="w-full max-w-6xl relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 p-8 md:p-12 rounded-3xl shadow-2xl border border-blue-200 animate-fade-in-up">
          {/* Abstract background waves/lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-30 z-0"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 150C250 50 500 250 750 150C1000 50 1000 0 1000 0L0 0V150Z" fill="url(#danteGradient)" />
            <path d="M0 300C250 200 500 400 750 300C1000 200 1000 150 1000 150L0 150V300Z" fill="url(#danteGradient)" opacity="0.5" />
            <defs>
              <linearGradient id="danteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c7d2fe" /> {/* Blue-200 */}
                <stop offset="100%" stopColor="#ddd6fe" /> {/* Purple-200 */}
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
                Powered by <span className="text-blue-700">Dante Network Technology</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our cutting-edge systems leverage *Dante network technology* to transmit high-quality audio over standard Ethernet cables. This means *no complex wiring, zero delays, just remarkably **reliable and professional sound quality* across your entire setup.
              </p>
              <a
                href="/products"
                className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-purple-700 hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-xl group"
              >
                Discover Dante's Advantages
                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2">
              <div className="w-full max-w-md h-64 bg-white border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300 ease-in-out">
                <img
                  src="https://noisegate.com.au/wp-content/uploads/2023/03/Dante-Feature-1024x512.jpg"
                  alt="Dante Network Simplified Diagram"
                  className="w-full h-full object-contain p-4" // Use object-contain and padding for SVG clarity
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatResoundifyDoes;