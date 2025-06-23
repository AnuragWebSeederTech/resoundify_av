import React, { memo } from 'react';

const FancyButton = memo(({ text = 'Buy Tickets', href = '#' }) => {
  return (
    <a
      href={href}
      className="relative inline-block w-65 px-8 py-5 border-2 border-slate-600 text-white font-serif text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gradient-to-br from-white to-slate-700 group overflow-visible"
    >
      <span className="absolute top-[-2px] left-2.5 w-6 h-[2px] bg-black transition-all duration-500 ease-out group-hover:left-[-2px] group-hover:w-0"></span>
      <span className="block text-left pl-8 transition-all duration-300 ease-in-out group-hover:pl-6 group-hover:text-black">
        {text}
      </span>
      <span className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-3.5 group-hover:bg-black"></span>
      <span className="absolute bottom-[-2px] right-7.5 w-6 h-[2px] bg-slate-800 transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
      <span className="absolute bottom-[-2px] right-2.5 w-2.5 h-[2px] bg-slate-800 transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
    </a>
  );
});

const HeroSection = () => {
  return (
    <div className="min-h-[100vh] relative flex flex-col justify-center items-center font-light overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/images/newbg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-10" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl z-10 mx-auto py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight animate-fade-in-up delay-[200ms]">
          Redefining <br />
          <span className="bg-gradient-to-br from-slate-700 to-white bg-clip-text text-transparent font-serif">
            Audio-Visual
          </span>{' '}
          Experience
        </h1>

        <p className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-12 leading-relaxed font-sans animate-fade-in-up delay-[400ms]">
          At Resoundify, we deliver cutting-edge Dante-enabled solutions that redefine how you connect, <br /> communicate, and create exceptional results.
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
