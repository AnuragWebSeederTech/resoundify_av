import React, { memo } from 'react';

// GradientButton Component: A reusable button with a gradient hover effect.
// It uses React.memo to prevent unnecessary re-renders if its props don't change.
const GradientButton = memo(({ text = 'Button', href = '#' }) => {
  return (
    // The anchor tag acts as the main button container.
    // It's styled with Tailwind CSS for responsiveness, positioning, and text.
    // 'group' class is crucial for enabling hover effects on child elements.
    <a
      href={href}
      className="relative inline-flex items-center justify-center px-0 lg:px-8 py-4 lg:py-5 w-40 lg:w-60 text-base lg:text-lg font-medium bg-transparent border-none cursor-pointer user-select-none overflow-hidden text-white group"
    >
      {/* Button text */}
      {/* On group hover, the text color changes to black with a smooth transition. */}
      <span className="block z-10 group-hover:text-black transition-colors duration-300">
        {text}
      </span>
      {/* Outer border span */}
      {/* This span creates the initial border and handles its color change on hover. */}
      {/* The 'overflow-hidden' is important for containing the sweeping effect. */}
      <span className="absolute inset-0 z-0 border-3 border-royalblue-500 rounded-2xl overflow-hidden group-hover:border-black transition-colors duration-300">
        {/* Inner span for the sweeping effect with gradient */}
        {/* This span starts as a narrow, tall white rectangle, rotated. */}
        {/* On group hover, it expands to full width and rotates further, creating a sweeping fill effect. */}
        {/* The 'active:bg-gray-200' provides feedback on click/tap. */}
        <span
          className="block absolute w-0 h-[500%] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-60 transition-all duration-1000 ease-out
                     group-hover:-rotate-90 group-hover:w-full group-hover:bg-white
                     active:bg-gray-200"
        ></span>
      </span>
    </a>
  );
});

// App Component (Demonstration only):
// This component is provided to easily preview the GradientButton in isolation.
// It sets up a black background to clearly show the button's appearance.
// It's not part of the HeroSection export and should be integrated into your application's main structure.
const App = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <GradientButton text="Learn More" href="#" />
      </div>
  );
};

// HeroSection Component: The main hero section of the website.
// It includes a background video, a main heading, a descriptive paragraph, and two call-to-action buttons.
const HeroSection = () => {
  // Logs a message when HeroSection re-renders, useful for debugging.
  console.log("HeroSection Rendered");

  return (
    // Main container for the hero section.
    // Sets minimum height, relative positioning for children, flexbox for centering content,
    // and applies the primary font 'Exo 2' as remembered from user preferences.
    <div className="min-h-[70vh] lg:min-h-[100vh] relative flex flex-col justify-center items-center font-light overflow-hidden text-center">
      {/* Background Video (NO OVERLAY) */}
      {/* This div positions the video to cover the entire section. */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover" // Ensures video covers the container without distortion
          autoPlay // Autoplays the video
          loop // Loops the video continuously
          muted // Mutes the video's audio
          playsInline // Allows video to play inline on mobile devices
          preload="metadata" // Preloads only video metadata for faster loading
        >
          <source src="/images/newbg5.mp4" type="video/mp4" /> {/* Video source */}
          Your browser does not support the video tag. {/* Fallback message */}
        </video>
      </div>

      {/* Optional: Overlay (commented out) */}
      {/* <div className="absolute inset-0 bg-blue-700 opacity-15 backdrop-blur-sm"></div> */}

      {/* Content */}
      {/* This div holds all the text content and buttons, positioned above the video (z-10). */}
      <div className="relative z-10 px-5 lg:px-40 py-20 text-center">
        {/* Main heading: "Redefining Audio-Visual Experience" */}
        {/* Features responsive text sizing, drop shadow for readability against video, and fade-in animation. */}
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight tracking-tight animate-fade-in-up delay-[200ms] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          Redefining <br />
          {/* Accent word: "Audio-Visual" with distinct styling if needed (currently white text). */}
          <span className="text-white">
            Audio-Visual
          </span>{' '}
          Experience
        </h1>

        {/* Paragraph: Descriptive text */}
        {/* Styled with white text, responsive sizing, drop shadow, and fade-in animation. */}
        <p className="text-base md:text-xl text-white max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-[400ms] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          At Resoundify, we deliver cutting-edge Dante-enabled solutions that redefine <br /> how you connect, communicate, and create exceptional results.
        </p>

        {/* Call-to-action buttons */}
        {/* Uses flexbox for layout, responsive stacking, and fade-in animation. */}
        <div className="flex lg:flex-row sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-[600ms]">
          <GradientButton text="Explore Products" href="/products" />
          <GradientButton text="Contact Us" href="/contact" />
        </div>
      </div>

      {/* Fade-in Animation Styles */}
      {/* Defines the CSS keyframes for the 'fade-in-up' animation and applies delays. */}
      {/* This is embedded directly for simplicity, but could be moved to a CSS file. */}
      <style>{`
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

export default HeroSection; // Exports the HeroSection component for use in other parts of the application.