import React from 'react';

const ExploreOurRange = () => {
  return (
    <section className="relative py-16 px-6 bg-indigo-950 text-white overflow-hidden">
      {/* Background gradient for depth and sophistication */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-950 opacity-90" />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
          Explore Our Range
        </h2>
        <p className="max-w-7xl mx-auto mb-8 text-lg md:text-xl text-indigo-200">
          Discover our lineup of Dante-enabled products, including audio interfaces, amplifiers, processors, and more – all engineered to deliver exceptional performance and flexibility. Whether you're an integrator, engineer, or AV enthusiast, Resoundify provides the tools to bring your vision to life.
        </p>
        <a
          href="#"
          className="inline-block bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-600 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
          // Applied changes:
          // - Changed background to a more refined indigo-500 (your primary accent color).
          // - Ensured text is white for contrast.
          // - Added a slightly darker hover state.
          // - Used transition-all for smoother effect.
        >
          View Products
        </a>
      </div>

      {/* Animated floating shapes for subtle visual effect, adjusted colors */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-indigo-700 rounded-full opacity-15 animate-bounce-slow" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-700 rounded-full opacity-10 animate-bounce-slow" />
      <div className="absolute top-0 right-0 w-20 h-20 bg-purple-700 rounded-full opacity-20 animate-bounce-slow" />

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