import React from 'react';

const JoinCommunitySection = () => {
  return (
    <section className="relative py-24 px-8 bg-gray-50 text-gray-800 overflow-hidden"> {/* Increased padding */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between z-10 space-y-16 lg:space-y-0 lg:space-x-16"> {/* Increased spacing */}
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-6 lg:pl-10"> {/* Increased padding */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-wide text-gray-900 leading-tight"> {/* Increased heading size */}
            Join the Resoundify <span className="text-indigo-600">Community</span>
          </h2>
          <p className="mb-10 text-xl md:text-2xl text-gray-700 leading-relaxed"> {/* Increased text size */}
            At Resoundify, we believe in the power of sound to inspire, connect, and transform. Let us help you create audio-visual experiences that resonate. Explore our products, connect with our team, and experience the future of AV with Resoundify.
          </p>
          <p className="mb-10 text-xl md:text-2xl font-semibold text-indigo-700"> {/* Increased text size */}
            Resoundify – Where Sound Meets Innovation.
          </p>
          <a
            href="#"
            className="inline-block bg-indigo-500 text-white font-semibold px-10 py-5 rounded-full shadow-lg hover:bg-indigo-600 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out text-xl" // Padding & text size increased
          >
            Join the Community
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 px-6 flex justify-center"> {/* Increased padding */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Example image
            alt="Audio-visual collaboration"
            className="w-full max-w-2xl rounded-4xl shadow-2xl transform hover:scale-105 transition-transform duration-300 h-[400px] object-cover" // Added height
          />
        </div>
      </div>

      {/* Floating decorative elements: Maintained light theme compatibility */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-indigo-200 rounded-full opacity-20 animate-bounce-slow" /> {/* Increased size and opacity */}
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-bounce-slow" /> {/* Increased size and opacity */}

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px); /* Increased bounce height */
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite; /* Increased duration */
        }
      `}</style>
    </section>
  );
};

export default JoinCommunitySection;