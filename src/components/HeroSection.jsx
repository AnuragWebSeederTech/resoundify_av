import React, { memo } from 'react';

// GradientButton component with white to slate gradient on hover
const GradientButton = memo(({ text = 'Button', href = '#' }) => {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-center px-8 py-5 w-60 text-lg font-medium bg-transparent border-none cursor-pointer user-select-none overflow-hidden font-inherit text-royalblue-500 group" // Added 'group' class here
    >
      {/* Button text */}
      <span className="block z-10 group-hover:text-black transition-colors duration-300"> {/* Added group-hover:text-white and transition */}
        {text}
      </span>
      {/* Outer border span */}
      <span class="absolute inset-0 z-0 border-3 border-royalblue-500 rounded-2xl overflow-hidden group-hover:border-black transition-colors duration-300"> {/* Changed group-hover:border-white to group-hover:border-black */}
        {/* Inner span for the sweeping effect with gradient */}
        <span
          class="block absolute w-0 h-[500%] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-60 transition-all duration-1000 ease-out
                     group-hover:-rotate-90 group-hover:w-full group-hover:bg-white
                     active:bg-gray-200"
        ></span>
      </span>
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
          <source src="/images/newbg3.mp4" type="video/mp4" /> {/* Placeholder video URL */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 px-40 py-20 text-center">
        {/*
          Main heading: "Redefining" and "Experience" use slate text color with a black drop-shadow.
        */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-300 mb-6 leading-tight tracking-tight animate-fade-in-up delay-[200ms] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          Redefining <br />
          {/*
            Accent word: "Audio-Visual" has black text with a slate drop-shadow.
          */}
          <span className="text-black drop-shadow-[0_0_8px_rgba(112,128,144,0.8)] font-serif"> {/* Slate color is rgba(112,128,144) */}
            Audio-Visual
          </span>{' '}
          Experience
        </h1>

        {/*
          Paragraph: White text with a strong black drop-shadow for readability.
        */}
        <p className="text-lg md:text-xl text-black max-w-4xl mx-auto mb-12 leading-relaxed font-sans animate-fade-in-up delay-[400ms] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          At Resoundify, we deliver cutting-edge Dante-enabled solutions that redefine <br /> how you connect, communicate, and create exceptional results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-[600ms]">
          <GradientButton text="Explore Products" href="/products" />
          <GradientButton text="Contact Us" href="/contact" />
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


      


