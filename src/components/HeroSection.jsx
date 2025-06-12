// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    // Ensure font-sans is applied if you want the custom font
    <div className="h-[70vh] relative  flex items-center font-sans">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0">
        <img
          src="/images/voicewave.gif"
          alt="Background"
          className="w-full h-full object-cover filter blur-1xl" // Subtle blur
        />
        {/* Overlay to darken the background for better text contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      {/* Changed text-left to text-center */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-40 text-center w-full">

        {/* Main Heading */}
        {/* Re-added opacity-0 for animation start state */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-sweep-in-1">
          Welcome to Resoundify  
        </h1>

        {/* Description */}
        {/* Re-added opacity-0 for animation start state, added mx-auto to center block */}
        <p className="text-3xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-sweep-in-2">
         Resoundify is a premier AV brand specializing in cutting-edge Dante-enabled products. We deliver audio-visual solutions that redefine how you connect, communicate, and create.
        </p>

        {/* Optional Call-to-Action Button */}
        {/* If you uncomment the button, add 'opacity-0 animate-sweep-in-3' to it and 'mx-auto' if it's a block element */}
         <button className="mt-6 px-8 py-3 bg-blue-950 text-white rounded-lg font-semibold hover:bg-blue-900 transition animate-sweep-in-3" >
          Get Started
        </button> 
      </div>
    </div>
  );
};

export default HeroSection;