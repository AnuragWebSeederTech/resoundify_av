import React from 'react';

const WhyResoundify = () => {
  // Separate the regular features from the CTA feature
  const features = [
    {
      id: 1,
      title: "Dante Integration",
      description: "Seamless Dante integration for flawless AV transmission. Ensures reliable, ultra-low latency audio.",
      image: "/images/why2.png", // Image related to networking/integration
      imagePosition: "top"
    },
    {
      id: 2,
      title: "Crystal-Clear Audio",
      description: "Delivers crystal-clear, professional-grade audio. Guarantees noise-free transmission over IP networks.",
      image: "/images/why1.png", // Image related to clear audio/sound waves
      imagePosition: "bottom"
    },
    {
      id: 3,
      title: "Ultra-Low Latency",
      description: "Achieve ultra-low latency for all real-time applications. Optimized for minimal delay and rapid response.",
      image: "/images/Latency.png", // Image related to speed/real-time
      imagePosition: "top"
    },
    {
      id: 4,
      title: "Highly Scalable",
      description: "Highly scalable for any enterprise AV system. Supports hundreds of channels with flexible architecture.",
      image: "/images/why4.jpg", // Image related to scalability/growth
      imagePosition: "bottom"
    }
  ];

  // Define the CTA feature separately
  const ctaFeature = {
    id: 5,
    title: "Guaranteed Uptime", // Title will be used in the new CTA structure
    description: "Experience unparalleled reliability with Resoundify's guaranteed 99.9% uptime. Our enterprise-grade systems are backed by redundant infrastructure and 24/7 monitoring, ensuring your audio-visual communications are always online and performing flawlessly.",
  };

  return (
    <section className="py-15 bg-gradient-to-b from-gray-100 via-blue-200 to-white"> {/* Adjusted gradient for better look */}
      <div className="w-[90%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: 'Tilt Neon, cursive', textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Why Choose <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">Resoundify</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
            Discover our comprehensive suite of advanced audio-visual solutions designed to transform your communication experience with cutting-edge technology.
          </p>
          <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16"> {/* Added mb-16 for spacing below grid */}
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${feature.imagePosition === 'top' ? 'rounded-t-2xl' : 'rounded-b-2xl'}`}
            >
              {/* Original feature layout */}
              {feature.imagePosition === 'top' && (
                <>
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-700 rounded-t-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full p-5 h-80 object-cover hover:scale-115 transition-transform duration-300 rounded-t-4xl" // Added rounded-lg here
                    />
                  </div>
                  <div className="p-12">
                    <h3 className="text-3xl font-light lg:font-bold text-gray-900 mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-8">
                      <button className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors flex items-center group">
                        Learn more
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              )}

              {feature.imagePosition === 'bottom' && (
                <>
                  <div className="p-12 ">
                    <h3 className="text-3xl font-light lg:font-bold text-gray-900 mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                      {feature.description}
                    </p>
                    <button className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors flex items-center group">
                      Learn more
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-700 rounded-b-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full p-5 h-80 object-cover hover:scale-115 transition-transform duration-300 rounded-b-4xl" // Added rounded-lg here
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* --- */}

        {/* Independent CTA Section with Background Image and Overlay */}
        <div
          className="w-full text-white p-12 text-center shadow-xl rounded-2xl relative overflow-hidden" // Added relative and overflow-hidden
          style={{
            // backgroundImage: "url('/images/Uptime.png')", // <--- **IMPORTANT: Update this path to your actual image!**
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(0, 0, 0, 0.6)' // Fallback color and for overlay if image has transparent areas
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-700 to-black opacity-70 rounded-lg z-0"></div> {/* Increased opacity slightly */}

          {/* Content of the CTA */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight"> {/* Added leading-tight for better line spacing */}
              <span className="block text-blue-300 text-2xl font-semibold mb-2">Experience Unwavering Reliability</span>
              99.9% Uptime Guarantee
            </h2>
            <p className="text-lg sm:text-lg lg:text-xl mb-10 max-w-4xl mx-auto leading-relaxed"> {/* Changed max-w-7xl to max-w-4xl for better readability */}
              {ctaFeature.description}
            </p>
            {/* You can add a button here for the CTA, e.g.: */}
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 shadow-lg">
              Contact Us
            </button> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyResoundify;