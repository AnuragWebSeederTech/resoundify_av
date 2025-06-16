import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-[95vh] relative flex items-center font-sans overflow-hidden">
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/herobg2.jpg" // Ensure this path is correct
          alt="Professional Audio Visual Background"
          className="w-full h-full object-cover"
        />
        {/* Solid black overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-70" /> 
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center w-full">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight tracking-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Welcome to {' '}
          <span className="text-white">
            Resoundify
          </span>{' '}
          
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '0.4s'}}>
         At Resoundify, we deliver cutting-edge Dante-enabled solutions that redefinehow you connect, communicate, and create exceptional results.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button className="group px-8 py-4 bg-blue-400 text-blue-900 rounded-lg font-semibold text-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 min-w-[200px]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Explore Products
          </button>
          
          <button className="group px-8 py-4 bg-transparent border-2 border-blue-400 text-white rounded-lg font-semibold text-lg hover:bg-blue-200 hover:text-blue-900 transition-all duration-300 flex items-center gap-3 min-w-[200px] backdrop-blur-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-6 0H3m6 0v-5a2 2 0 012-2h2a2 2 0 012 2v5" />
            </svg>
            Contact Us
          </button>
        </div>

       
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;