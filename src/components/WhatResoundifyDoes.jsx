import React, { useState, useEffect } from 'react';

const applications = [
  { icon: '🏢', title: 'Offices & Corporate', description: 'Elevate communication, presentations, and internal communications with pristine audio.' },
  { icon: '🎓', title: 'Schools & Universities', description: 'Ensure every lecture, assembly, and campus announcement is heard clearly.' },
  { icon: '🏨', title: 'Hotels & Restaurants', description: 'Create the perfect ambiance and enhance guest experiences with superior sound.' },
  { icon: '🎵', title: 'Live Events & Venues', description: 'Deliver powerful, reliable audio for unforgettable performances and events.' }
];

const keyFeatures = [
  { icon: '✨', title: 'Crystal Clear Audio', description: 'Experience unparalleled sound fidelity in every corner.' },
  { icon: '🚀', title: 'Seamless Integration', description: 'Systems designed for effortless setup and operation.' },
  { icon: '🛡️', title: 'Unmatched Reliability', description: 'Robust solutions for continuous, interruption-free performance.' },
];

const ResoundifySection = () => {
  const [currentApplicationIndex, setCurrentApplicationIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const displayDuration = 3000; // Time text is fully visible
    const transitionDuration = 1000; // Must match CSS transition duration for smoother fade

    // Timeout to start fading out
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, displayDuration);

    // Timeout to change content and start fading in the next item
    const cycleTimer = setTimeout(() => {
      setCurrentApplicationIndex((prevIndex) => (prevIndex + 1) % applications.length);
      setIsVisible(true); // Will cause the new content to fade in
    }, displayDuration + transitionDuration); // Wait for fade out to complete before changing content and fading in

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(cycleTimer);
    };
  }, [currentApplicationIndex]); // Dependency array: re-run when index changes

  const currentApplication = applications[currentApplicationIndex];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 font-inter bg-slate-50">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
            What Resoundify <span className="text-blue-500">Does.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 mt-6 max-w-4xl mx-auto leading-relaxed">
            We don't just build audio-video systems. We engineer seamless, crystal-clear auditory and visual environments that transform professional spaces into extraordinary experiences.
          </p>
        </div>
      </div>

      {/* Perfect For Section - Full Width Stripe */}
      <div className="relative overflow-hidden py-20 bg-pattern-light-gradient">
        {/* Decorative Pattern Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full transform rotate-45"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white opacity-5 rounded-full transform rotate-12"></div>
          <div className="absolute top-1/2 left-5 w-12 h-12 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-1/3 right-10 w-28 h-28 bg-white opacity-5 rounded-full transform -rotate-12"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-16 left-1/3 w-8 h-8 bg-white opacity-10 transform rotate-45"></div>
          <div className="absolute bottom-16 right-1/4 w-6 h-6 bg-white opacity-10 transform rotate-45"></div>
          <div className="absolute top-1/4 right-1/2 w-10 h-10 bg-white opacity-5 transform rotate-45"></div>
          
          {/* Dotted pattern */}
          <div className="absolute top-8 left-1/2 w-2 h-2 bg-white opacity-20 rounded-full"></div>
          <div className="absolute top-12 left-1/2 w-2 h-2 bg-white opacity-15 rounded-full ml-4"></div>
          <div className="absolute top-16 left-1/2 w-2 h-2 bg-white opacity-10 rounded-full ml-8"></div>
          <div className="absolute bottom-8 right-1/2 w-2 h-2 bg-white opacity-20 rounded-full"></div>
          <div className="absolute bottom-12 right-1/2 w-2 h-2 bg-white opacity-15 rounded-full mr-4"></div>
          <div className="absolute bottom-16 right-1/2 w-2 h-2 bg-white opacity-10 rounded-full mr-8"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center md:flex md:items-center md:justify-between md:text-left"> {/* Added flex for side-by-side layout */}
          {/* Perfect For Heading */}
          <h3 className="text-5xl sm:text-6xl font-sans text-gray-100 mb-8 md:mb-0 relative z-10 text-shadow-white md:w-1/2">
            Perfect For     ➡️
          </h3>
          {/* Fade In/Out Loop Box */}
          <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center min-h-[350px]"> {/* Increased min-height for the container */}
            {currentApplication && (
              <div
                key={currentApplication.title} // Key for re-rendering/animation
                className={`w-full max-w-lg p-6 bg-white rounded-xl shadow-lg border border-gray-100 min-h-[300px]
                            transition-opacity duration-[1000ms] ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}
                            flex flex-col md:flex-row items-center justify-between gap-6`} // Fixed to md:flex-row (text left, emoji right)
              >
                <div className="text-6xl text-blue-700 mb-4 md:mb-0 md:mr-6 drop-shadow-md flex-shrink-0"> {/* Fixed emoji margin */}
                  {currentApplication.icon}
                </div>
                <div className="text-center md:text-left flex-grow"> {/* Fixed text alignment */}
                  <h4 className="text-2xl font-semibold text-gray-900 mb-3">{currentApplication.title}</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">{currentApplication.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center"> {/* Re-establish max-w for subsequent sections */}
        {/* Key Features Section */}
        <div className="mb-20 mt-20"> {/* Added mt-20 for spacing after the stripe */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-12">
            Our Core Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-blue-50 rounded-2xl shadow-md border border-blue-100 flex flex-col items-center
                           text-center transition-transform duration-500 hover:scale-105 hover:shadow-lg animate-fadeIn"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="text-5xl text-blue-600 mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-700 text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dante Technology Section */}
        <div className="w-full max-w-6xl relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 p-8 md:p-12 rounded-3xl shadow-2xl border border-blue-200 animate-fadeIn mx-auto">
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
                <stop offset="0%" stopColor="#c7d2fe" />
                <stop offset="100%" stopColor="#ddd6fe" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
                Powered by <span className="text-blue-700">Dante Network Technology</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our cutting-edge systems leverage <strong>Dante network technology</strong> to transmit high-quality audio over standard Ethernet cables. No complex wiring, zero delays — just remarkably reliable and professional sound quality across your entire setup.
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
                  src="/images/Dante_Feature.jpg"
                  alt="Dante Network Simplified Diagram"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .text-shadow-white {
          text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.6), -1px -1px 2px rgba(255, 255, 255, 0.6);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.9s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.9s ease-out forwards; }

        .bg-pattern-light-gradient {
          background-color: #60A5FA; /* blue-400 as fallback */
          background-image:
            radial-gradient(at 20% 80%, rgba(147, 197, 253, 0.5) 0px, transparent 50%), /* blue-300 with transparency */
            radial-gradient(at 80% 20%, rgba(147, 197, 253, 0.5) 0px, transparent 50%),
            linear-gradient(to bottom right, #60A5FA, #93C5FD); /* blue-400 to blue-300 */
        }
      `}</style>
    </div>
  );
};

export default ResoundifySection;