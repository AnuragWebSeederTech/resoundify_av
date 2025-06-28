// AboutHero.js
import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative h-[65vh] bg-cover bg-top">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-black to-blue-300"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight tracking-tight animate-fade-in-up delay-[200ms] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] font-[Tilt_Neon]">
          ABOUT
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;