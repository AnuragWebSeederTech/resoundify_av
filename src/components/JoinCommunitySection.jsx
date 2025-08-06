import React, { memo } from 'react'; // Import memo

// Define the GradientButton component
// This component is memoized for performance and accepts a className prop for responsiveness.
const GradientButton = memo(({ text = 'Button', href = '#', className = '' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer" 
      // Combine base classes with any additional classes passed via the className prop
      className={`relative inline-flex items-center justify-center px-8 py-5 text-lg font-medium bg-transparent border-none cursor-pointer user-select-none overflow-hidden text-royalblue-500 group ${className}`}
    >
      {/* Button text, changes color on hover */}
      <span className="block z-10 group-hover:text-black transition-colors duration-300">
        {text}
      </span>
      {/* Outer border span, changes color on hover */}
      <span className="absolute inset-0 z-0 border-3 border-royalblue-500 rounded-2xl overflow-hidden group-hover:border-black transition-colors duration-300">
        {/* Inner span for the sweeping effect with gradient */}
        <span
          className="block absolute w-0 h-[500%] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-60 transition-all duration-1000 ease-out
                     group-hover:-rotate-90 group-hover:w-full group-hover:bg-white
                     active:bg-gray-200"
        ></span>
      </span>
    </a>
  );
});

// Define the main ResoundifyHeroSection component
const ResoundifyHeroSection = () => {
  return (
    // Main container for the hero section
    // Uses flexbox to manage layout, stacking on mobile (flex-col) and
    // arranging side-by-side on larger screens (md:flex-row).
    // `items-center` ensures vertical centering in rows and horizontal centering in columns.
    // `justify-center` for mobile (columns) and `md:justify-between` for desktop (rows).
    // Added `gap-8` for spacing between sections on both stacked and row layouts.
    <div
      className="relative w-[95%] max-w-screen-xl mx-auto my-8
                 bg-gradient-to-b from-black via-slate-900 to-black
                 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8
                 min-h-[400px] md:h-96 overflow-hidden rounded-xl shadow-2xl m-2"
    >
      {/* Left side: Image container with responsive sizing */}
      {/* Added `flex-shrink-0` to prevent unintended shrinking */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center py-8 px-4 md:py-30 md:px-0 flex-shrink-0">
        {/* Absolute gradient overlay for the image section */}
        {/* Adjusted opacity and color slightly for better visual presence */}
        <div
          className="absolute inset-0 rounded-xl opacity-80
                     bg-gradient-to-t from-transparent via-slate-700 to-transparent
                     md:bg-gradient-to-l from-black via-slate-700 to-black"
        ></div>
        {/* Placeholder image for an AV product or stylized sound wave */}
        <img
          src="https://i.giphy.com/l3vR4Fiim9wdPWp5C.webp" // Replace with an actual Resoundify icon or stylized audio-visual element
          alt="Resoundify Icon"
          // Responsive image sizing: smaller on mobile, larger on tablet/desktop
          className="relative z-10 w-32 h-32 sm:w-48 sm:h-48 rounded-3xl object-contain"
        />
      </div>

      {/* Right side: Text content - Adapted from Resoundify content */}
      {/* Responsive alignment: text-center on mobile, text-left on larger screens */}
      {/* Added `flex-shrink-0` to prevent unintended shrinking */}
      <div className="w-full md:w-1/2 relative z-20 flex flex-col items-center md:items-start justify-center p-4 md:p-8 text-white text-center md:text-left flex-shrink-0">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl text-slate-200 mb-4 sm:mb-6 tracking-tight"
          style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
        >
          Resoundify{' '}
          <span className="font-semibold bg-gradient-to-br from-slate-600 to-slate-200 bg-clip-text text-transparent">
            Community
          </span>
        </h2>
        {/* Paragraph text with responsive font size */}
        <p className="text-base sm:text-lg text-white mb-4 leading-relaxed">
          At Resoundify, we believe in the power of sound to inspire, connect, and transform. Explore our
          products, connect with our team, and experience the future of AV with Resoundify.
        </p>
        {/* Integrated GradientButton with responsive width */}
        <GradientButton text="Join Now!" href="https://www.linkedin.com/" className="w-full md:max-w-[240px] max-w-[160px] md:max-h-[100px] max-h-[50px] md:mt-0 mt-5" />
      </div>

      {/* Navigation Arrows (Optional, if this is part of a carousel) */}
      {/*
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition">
        &lt;
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition">
        &gt;
      </button>
      */}
    </div>
  );
};

export default ResoundifyHeroSection;
