import React from 'react';

const applications = [
  { icon: '🏢', title: 'Offices & Corporate', description: 'Elevate communication, presentations, and internal communications with pristine audio.' },
  { icon: '🎓', title: 'Schools & Universities', description: 'Ensure every lecture, assembly, and campus announcement is heard clearly.' },
  { icon: '🏨', title: 'Hotels & Restaurants', description: 'Create the perfect ambiance and enhance guest experiences with superior sound.' },
  { icon: '🎵', title: 'Live Events & Venues', description: 'Deliver powerful, reliable audio for unforgettable performances and events.' }
];

// Added a new array for Key Features
const keyFeatures = [
  { icon: '✨', title: 'Crystal Clear Audio', description: 'Experience unparalleled sound fidelity in every corner.' },
  { icon: '🚀', title: 'Seamless Integration', description: 'Systems designed for effortless setup and operation.' },
  { icon: '🛡️', title: 'Unmatched Reliability', description: 'Robust solutions for continuous, interruption-free performance.' },
];

const ResoundifySection = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 font-inter bg-slate-50">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header Section */}
        <div className="mb-16 opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <div className="text-xl sm:text-2xl font-medium text-blue-700 mb-6 tracking-wide">
            Redefining Audio-Visual Experiences
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            What Resoundify <span className="text-blue-500">DOES.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mt-6 max-w-4xl mx-auto leading-relaxed">
            We don’t just build audio-video systems. We engineer seamless, crystal-clear auditory and visual environments that transform professional spaces into extraordinary experiences.
          </p>
        </div>

<<<<<<< HEAD
        {/* Perfect For Section */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Perfect For
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 justify-items-center">
            {applications.map((app, index) => (
              <div
                key={index}
                className="w-full max-w-xs p-6 bg-blue-50 rounded-xl shadow-lg border border-gray-100
                           text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-blue-200
                           opacity-0 animate-slideUp"
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                <div className="text-5xl text-blue-700 mb-4 drop-shadow-md">{app.icon}</div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">{app.title}</h4>
                <p className="text-gray-700 text-base leading-relaxed">{app.description}</p>
=======
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
                  src="/images/Dante_Feature.jpg"
                  alt="Dante Network Simplified Diagram"
                  className="w-full h-full object-contain p-4" // Use object-contain and padding for SVG clarity
                />
>>>>>>> 7c37e0ab73d1f4602bef9e0776514554c352dac6
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Section - NEW ADDITION */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
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
        <div className="py-16 px-6 bg-blue-50 text-gray-900 rounded-3xl mx-auto max-w-5xl
                        shadow-lg border border-blue-100 transition-all duration-500 hover:shadow-xl hover:border-blue-300
                        opacity-0 animate-fadeIn"
             style={{ animationDelay: `${0.9 + keyFeatures.length * 0.2}s` }}>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Powered by <span className="text-blue-500">Dante Network Technology</span>
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            Our cutting-edge systems leverage **Dante network technology** to transmit high-quality audio over standard Ethernet cables. No complex wiring, zero delays—just remarkably **reliable and professional sound quality** across your entire setup.
          </p>
          <button className="inline-flex items-center px-10 py-4 bg-blue-500 text-white rounded-full font-semibold text-lg
                             hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50">
            Discover Dante's Advantages
            <svg className="w-5 h-5 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default ResoundifySection;