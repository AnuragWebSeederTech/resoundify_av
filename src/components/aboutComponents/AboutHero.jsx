// AboutHero.js
import React from 'react';

const AboutHero = ({ backgroundImage = '/images/aboutbg2.png' }) => {
  return (
    <section 
      className="relative h-[65vh] bg-cover bg-top" 
      style={{ 
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Dark Overlay for text readability over the background image */}
      <div className="absolute inset-0 bg-black opacity-0"></div> 

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-6 leading-tight tracking-tight animate-fade-in-up delay-[200ms]"
        >
          ABOUT
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-black mt-4 max-w-3xl text-center leading-relaxed opacity-0 animate-fade-in-up delay-[400ms]">
          At Resoundify, we are a leading AV brand dedicated to delivering cutting-edge, Dante-enabled audio and video solutions that redefine connectivity and empower exceptional experiences.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;