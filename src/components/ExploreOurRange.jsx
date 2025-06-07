import React from 'react';

const ExploreOurRange = () => {
  return (
    <section className="relative py-16 px-6 bg-gray-900 text-white overflow-hidden">
      {/* Background gradient or abstract shape for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-30" />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
          Explore Our Range
        </h2>
        <p className="max-w-7xl mx-auto mb-8 text-lg md:text-xl text-gray-300">
          Discover our lineup of Dante-enabled products, including audio interfaces, amplifiers, processors, and more – all engineered to deliver exceptional performance and flexibility. Whether you're an integrator, engineer, or AV enthusiast, Resoundify provides the tools to bring your vision to life.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-300"
        >
          View Products
        </a>
      </div>

      {/* Some animated floating shapes for extra visual effect */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gray-700 rounded-full opacity-20 animate-bounce-slow" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gray-700 rounded-full opacity-15 animate-bounce-slow" />
      <div className="absolute top-0 right-0 w-20 h-20 bg-gray-700 rounded-full opacity-25 animate-bounce-slow" />    

      {/* Custom keyframes for slow bounce animation */}
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

export default ExploreOurRange;