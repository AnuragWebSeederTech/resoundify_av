import React from 'react';
import { Link } from 'react-router-dom';

const ExploreOurRange = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-24 px-10 sm:px-8 overflow-hidden bg-white text-gray-900" // Changed background to white, default text to dark
    >
      {/* Dynamic Background Blob/Shape - Adjusted colors for light theme */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 sm:w-[500px] sm:h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 sm:w-[400px] sm:h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[20%] right-[30%] w-56 h-56 sm:w-[300px] sm:h-[300px] bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content Block */}
        <div className="text-center md:text-left p-6 sm:p-8 md:p-12 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-100 transform -rotate-1 perspective-1000 group hover:rotate-0 transition-transform duration-700 ease-in-out">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tighter leading-tight text-gray-900 animate-fade-in-right"> {/* Text color adjusted */}
            Unleash the Future of <span className="text-indigo-600">Audio Excellence</span> {/* Accent color made stronger for light bg */}
          </h2>
          <p className="text-lg sm:text-lg max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed text-gray-700 font-light animate-fade-in-right delay-200"> {/* Text color adjusted */}
            Discover our groundbreaking suite of Dante-enabled professional audio equipment. Engineered for unmatched clarity, unparalleled reliability, and limitless scalability, Resoundify empowers visionaries to craft immersive sonic experiences.
          </p>
          <Link
            to="/products"
            className="inline-block relative z-10 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold px-10 py-4 sm:px-12 sm:py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-400 ease-in-out text-lg sm:text-lg
                       group-hover:translate-x-2 group-hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75 animate-fade-in-right delay-400"
          >
            Explore Our Innovations
            <span className="absolute top-0 left-0 w-full h-full rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></span>
          </Link>
        </div>

        {/* Right Side: Image/Visual Block */}
        <div className="relative flex items-center justify-center p-6 sm:p-8 md:p-12">
          {/* Decorative Ring 1 - Adjusted colors */}
          <div className="absolute w-[80%] h-[80%] border-4 border-indigo-400 border-opacity-40 rounded-full animate-spin-slow"></div>
          {/* Decorative Ring 2 - Adjusted colors */}
          <div className="absolute w-[60%] h-[60%] border-4 border-blue-400 border-opacity-40 rounded-full animate-spin-reverse-slow animation-delay-1500"></div>

          {/* Main Product Image Container - tilted for dynamism */}
          <div className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md bg-white rounded-2xl p-4 shadow-2xl border border-gray-200
                        transform rotate-6 hover:rotate-0 hover:scale-105 transition-transform duration-700 ease-in-out">
            <img
              src="WhatsApp Image 2025-06-07 at 10.35.04_c41ceaa0.jpg" // Using the uploaded image
              alt="Dante Pro Interface"
              className="w-full h-auto object-cover rounded-xl shadow-lg saturate-100" // Removed saturate for natural look on light bg
            />
            {/* Optional: Add a subtle overlay for texture */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-50 opacity-10 rounded-xl pointer-events-none"></div>

            {/* Faux metadata for product hint - Adjusted colors for light bg */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-gray-100 bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-lg py-2 px-3 text-sm text-gray-700">
              <span>Dante Pro Interface 16x16</span>
              <span className="font-semibold text-indigo-600">$1299</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animations (place these in your global CSS file for production) */}
      <style>
        {`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0; /* Hidden by default */
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite alternate; /* Slower and longer */
        }
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 30s linear infinite; /* Very slow spin */
        }

        @keyframes spinReverseSlow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-reverse-slow {
          animation: spinReverseSlow 25s linear infinite; /* Very slow spin in reverse */
        }
        `}
      </style>
    </section>
  );
};

export default ExploreOurRange;