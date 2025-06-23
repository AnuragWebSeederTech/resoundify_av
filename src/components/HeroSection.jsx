import React, { memo } from 'react';

const FancyButton = memo(({ text = 'Buy Tickets', href = '#' }) => {
  return (
    <a
      href={href}
      // Initial state: Very light gray background, dark teal border & text
      className="relative inline-block w-65 px-8 py-5 border-2 border-teal-700 bg-gray-100 text-teal-800 font-serif text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400 hover:border-gray-500 group overflow-visible"
    >
      {/* Lines are dark teal initially, visible on light button background */}
      <span className="absolute top-[-2px] left-2.5 w-6 h-[2px] bg-teal-800 transition-all duration-500 ease-out group-hover:left-[-2px] group-hover:w-0"></span>
      {/* Text becomes dark teal initially, black on hover for contrast */}
      <span className="block text-left pl-8 transition-all duration-300 ease-in-out group-hover:pl-6 group-hover:text-gray-900">
        {text}
      </span>
      {/* Middle line dark teal initially, white on hover */}
      <span className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-[2px] bg-teal-700 transition-all duration-300 ease-in-out group-hover:w-3.5 group-hover:bg-gray-900"></span>
      {/* Bottom lines dark teal initially, white on hover */}
      <span className="absolute bottom-[-2px] right-7.5 w-6 h-[2px] bg-teal-800 transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
      <span className="absolute bottom-[-2px] right-2.5 w-2.5 h-[2px] bg-teal-800 transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
    </a>
  );
});

const HeroSection = () => {
  return (
    <div className="min-h-[100vh] relative flex flex-col justify-center items-center font-light overflow-hidden text-center">
      {/* Background Video (NO OVERLAY) */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/images/newbg3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 px-40 py-20 text-center">
        {/*
          Main heading: Dark rich teal with a strong black drop-shadow for contrast.
        */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-teal-700 mb-6 leading-tight tracking-tight animate-fade-in-up delay-[200ms] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          Redefining <br />
          {/*
            Accent word: Light gray with strong black drop-shadow, complementing the professional palette.
          */}
          <span className="text-gray-300 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] font-serif">
            Audio-Visual
          </span>{' '}
          Experience
        </h1>

        {/*
          Paragraph: White text with a strong black drop-shadow for readability.
        */}
        <p className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-12 leading-relaxed font-sans animate-fade-in-up delay-[400ms] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          At Resoundify, we deliver cutting-edge Dante-enabled solutions that redefine <br /> how you connect, communicate, and create exceptional results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-[600ms]">
          <FancyButton text="Explore Products" href="/products" />
          <FancyButton text="Contact Us" href="/contact" />
        </div>
      </div>

      {/* Fade-in Animation */}
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

        .delay-\[200ms\] {
          animation-delay: 0.2s;
        }
        .delay-\[400ms\] {
          animation-delay: 0.4s;
        }
        .delay-\[600ms\] {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;