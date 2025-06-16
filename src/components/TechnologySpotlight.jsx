import React from 'react';
import { Network, Zap, Waves, Cpu } from 'lucide-react'; // Importing icons for visual appeal

const TechnologySpotlight = () => {
  return (
    // Main section container with a clean white background, consistent font, and generous padding
    <section className="bg-white font-inter py-20 sm:py-24 lg:py-32 overflow-hidden relative">
      {/* Link to import the 'Inter' font from Google Fonts to ensure consistent typography */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Outer container for content, centered and utilizing a wide portion of the screen */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">

        {/* Section Heading - now directly colored for better visibility */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-blue-900 text-shadow-white">
          Technology Spotlight: Dante Integration
        </h2>

        {/* Main Content Block for Dante Explanation - reduced padding */}
        <div className="relative w-full bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl overflow-hidden border border-blue-100 group transform transition duration-500 hover:scale-[1.005] hover:shadow-3xl-subtle">

          {/* Abstract SVG Background Pattern */}
          <svg
            className="absolute inset-0 w-full h-full z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-breathe-bg"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg" // Fixed xmlns attribute
          >
            {/* Layers for subtle wave patterns with gradients */}
            <path d="M0 200C300 50 600 350 900 200C1200 50 1200 0 1200 0L0 0V200Z" fill="url(#dantePatternGradient1)" />
            <path d="M0 400C300 250 600 550 900 400C1200 250 1200 150 1200 150L0 150V400Z" fill="url(#dantePatternGradient2)" opacity="0.6" />
            <path d="M0 600C300 450 600 750 900 600C1200 450 1200 300 1200 300L0 300V600Z" fill="url(#dantePatternGradient3)" opacity="0.8" />
            <defs>
              {/* Gradient definitions for the SVG patterns, now using a range of blues */}
              <linearGradient id="dantePatternGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#93c5fd" /> {/* Blue-300 */}
                <stop offset="100%" stopColor="#bfdbfe" /> {/* Blue-200 */}
              </linearGradient>
              <linearGradient id="dantePatternGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" /> {/* Blue-400 */}
                <stop offset="100%" stopColor="#93c5fd" /> {/* Blue-300 */}
              </linearGradient>
              <linearGradient id="dantePatternGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" /> {/* Blue-500 */}
                <stop offset="100%" stopColor="#60a5fa" /> {/* Blue-400 */}
              </linearGradient>
            </defs>
          </svg>

          {/* Content overlaying the SVG background */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Main Dante Explanation Text */}
            <div className="text-gray-800 text-center max-w-3xl mb-12 animate-fade-in">
              <p className="text-xl font-semibold mb-4 text-gray-700 leading-relaxed">
                Experience the future of audio networking.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Dante is the industry standard for high-quality, ultra-low latency audio over IP. It simplifies complex AV setups, eliminating bulky analog cables for a streamlined, digital workflow.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                Resoundify products are built with Dante at their core, ensuring effortless integration, superior audio performance, and flexible scalability for any professional application.
              </p>
            </div>

            {/* Feature highlights and Visual Element side-by-side */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
              {/* Left Column: Feature Highlights */}
              <div className="lg:w-1/2 text-gray-800 text-center lg:text-left animate-slide-in-left">
                <ul className="space-y-4 text-left text-gray-700 text-base">
                  <li className="flex items-center">
                    <Network className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    Effortless Digital Audio Networking
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-blue-700 mr-3 flex-shrink-0" />
                    Ultra-Low Latency & High Fidelity
                  </li>
                  <li className="flex items-center">
                    <Waves className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    Simplified Cabling & Scalability
                  </li>
                  <li className="flex items-center">
                    <Cpu className="w-5 h-5 text-blue-700 mr-3 flex-shrink-0" />
                    Seamless Integration with Existing Systems
                  </li>
                </ul>
              </div>

              {/* Right Column: Visual Element (Video/Infographic Placeholder) */}
              <div className="lg:w-1/2 flex justify-center items-center animate-slide-in-right">
                <div className="w-full max-w-lg h-72 sm:h-80 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl border border-gray-300 flex items-center justify-center relative transition duration-300 ease-in-out hover:shadow-2xl-subtle-hover">
                  {/* Placeholder Image for Video/Infographic */}
                  <img
                    src="https://placehold.co/600x400/1d4ed8/FFFFFF?text=Dante+Explained" // Updated placeholder color
                    alt="Dante Technology Infographic Placeholder"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/1d4ed8/FFFFFF?text=Dante+Explained"; }}
                  />
                  {/* Text overlay for the placeholder */}
                  <span className="absolute text-white text-lg sm:text-xl font-bold opacity-80 pointer-events-none text-center p-4">
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button - Discover Dante-Enabled Products - lighter blue */}
            <div className="text-center mt-16 animate-fade-in delay-700"> {/* Increased top margin */}
              <a
                href="/products#dante-enabled" // Example link to a specific section of your products page
                className="inline-flex items-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 glow-on-hover-light-blue"
              >
                Discover Dante-Enabled Products
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations and the glow effect for the new button color */}
      <style>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Reusing animations from previous components */
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Animation for pulse effect (used on headings) */
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Text shadow for heading */
        .text-shadow-white {
          text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.6), -1px -1px 2px rgba(255, 255, 255, 0.6);
        }

        /* New glow effect for the CTA button, using lighter blues */
        .glow-on-hover-light-blue {
          position: relative;
          z-index: 1;
        }
        .glow-on-hover-light-blue:before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #60a5fa, #3b82f6, #60a5fa); /* Lighter blues */
          background-size: 400% 400%;
          filter: blur(8px);
          opacity: 0;
          transition: opacity .3s ease-in-out;
          border-radius: 9999px; /* Matches rounded-full */
          z-index: -1;
        }
        .glow-on-hover-light-blue:hover:before {
          opacity: 1;
          animation: glowing-light-blue 8s linear infinite;
        }
        @keyframes glowing-light-blue {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        /* Custom subtle shadow for main content block on hover */
        .hover\\:shadow-3xl-subtle:hover {
            box-shadow: 0 30px 60px -15px rgba(29, 78, 216, 0.2), 0 15px 30px -8px rgba(37, 99, 235, 0.15); /* Adjusted for blue tones */
        }

        /* Custom subtle shadow for the image/infographic container on hover */
        .hover\\:shadow-2xl-subtle-hover:hover {
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1);
        }

        /* New animation for the SVG background to create a subtle 'breathing' effect */
        .animate-breathe-bg {
            animation: breathe-bg 25s ease-in-out infinite alternate; /* Slower, smoother, alternating */
            transform-origin: center center;
        }
        @keyframes breathe-bg {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(0.5%, 0.5%) scale(1.005); } /* Very slight translate and scale */
            100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default TechnologySpotlight;