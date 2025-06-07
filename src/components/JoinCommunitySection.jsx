import React from 'react';

const JoinCommunitySection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Decorative abstract shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-20" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between z-10 space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide text-gray-800">
            Join the Resoundify Community
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-600 leading-relaxed">
            At Resoundify, we believe in the power of sound to inspire, connect, and transform. Let us help you create audio-visual experiences that resonate. Explore our products, connect with our team, and experience the future of AV with Resoundify.
          </p>
          <p className="mb-8 text-lg md:text-xl font-semibold text-gray-700">
            Resoundify – Where Sound Meets Innovation.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-300"
          >
            Join the Community
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 px-4 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Example image
            alt="Audio-visual collaboration"
            className="w-full max-w-md rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-15 animate-bounce-slow" />
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-200 rounded-full opacity-15 animate-bounce-slow" />

      {/* Custom bounce animation */}
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