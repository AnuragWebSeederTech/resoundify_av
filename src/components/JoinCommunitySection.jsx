import React from 'react';

const JoinCommunitySection = () => {
  return (
    // Updated background to a subtle, consistent light grey/off-white for better visual flow
    // and contrast with the darker sections, avoiding the pastel gradient.
    <section className="relative py-20 px-6 bg-gray-50 text-gray-800 overflow-hidden">
      {/* Removed the strong background gradient overlay, relying on a simpler, cleaner base.
          Could add very subtle, abstract shapes from the main brand colors if desired, but keep it minimal. */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-20" /> */}

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between z-10 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-4 lg:pl-10">
          {/* Main heading color, ensured good contrast on light background */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide text-gray-900">
            Join the Resoundify Community
          </h2>
          {/* Body text color, ensured good contrast */}
          <p className="mb-8 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            At Resoundify, we believe in the power of sound to inspire, connect, and transform. Let us help you create audio-visual experiences that resonate. Explore our products, connect with our team, and experience the future of AV with Resoundify.
          </p>
          {/* Emphasized text, ensured good contrast */}
          <p className="mb-8 text-lg md:text-xl font-semibold text-indigo-700"> {/* Changed to a darker indigo for emphasis */}
            Resoundify – Where Sound Meets Innovation.
          </p>
          {/* "Join the Community" Button: Updated to match the consistent brand accent color */}
          <a
            href="#"
            className="inline-block bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-600 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            Join the Community
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 px-4 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Example image
            alt="Audio-visual collaboration"
            className="w-full max-w-2xl rounded-4xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Floating decorative elements: Updated colors to align with the new palette.
          Using very light opacity to keep them subtle on a light background. */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-bounce-slow" />
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce-slow" />

      {/* Custom bounce animation (kept as is) */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default JoinCommunitySection;