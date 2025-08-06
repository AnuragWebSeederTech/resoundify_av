import React, { useState, useEffect, memo } from 'react';
import { ArrowRight } from 'lucide-react'; // Importing ArrowRight icon from lucide-react

// Define the GradientButton component using React.memo for performance optimization.
// This component creates a styled button with a unique hover effect.
const GradientButton = memo(({ text = 'Button', href = '#' }) => {
  return (
    // The main button container, styled to be an inline-flex element.
    <a
      href={href}
      className="relative inline-flex items-center justify-center px-1 lg:px-8 py-5 w-50 lg:w-65 text-base lg:text-lg font-medium bg-transparent border-none cursor-pointer user-select-none overflow-hidden font-inherit text-black group" // Original styling for the button base
    >
      {/* Span for the button text. On hover, the text color transitions to white. */}
      <span className="block z-10 relative group-hover:text-white transition-colors duration-300"> {/* Text becomes white on hover */}
        {text}
      </span>
      
      {/* Inner span for the border and the sweeping background effect. */}
      {/* This span has a border that changes color on hover and contains the animated sweep. */}
      <span className="absolute inset-0 z-0 border-3 border-royalblue-500 rounded-2xl overflow-hidden group-hover:border-black transition-colors duration-300"> {/* Changed group-hover:border-white to group-hover:border-black */}
        
      {/* Inner span for the sweeping effect with a white background. */}
      {/* This element rotates and expands on hover, revealing a gradient background. */}
      <span
        className="block absolute w-0 h-[500%] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-60 transition-all duration-1000 ease-out
                   group-hover:-rotate-90 group-hover:w-full group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                   active:bg-gray-200"
      ></span>
      </span>
      {/* Outer border span - removed as original button had no explicit border */}
    </a>
  );
});

// Main component for the Explore Products Section.
export default function ExploreProductsSection() {
  // State to track the mouse position for the spotlight effect.
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect hook to add and remove mousemove event listener.
  // This updates the mousePosition state whenever the mouse moves.
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount.

  return (
    <>
      {/* Style block for custom CSS animations and classes. */}
      <style>{`
        /* CSS for the gradient spotlight effect that follows the mouse. */
        .gradient-spotlight {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle at center, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%); /* Centers the spotlight relative to its top/left */
          pointer-events: none; /* Allows clicks to pass through */
          transition: background-color 0.5s ease-out; /* Smooth transition for background color changes */
          animation: pulse-light 5s infinite alternate; /* Applies a pulsing animation */
          will-change: transform; /* Added for optimization, hints browser about upcoming transform changes */
        }

        /* Keyframes for the pulsing light animation of the spotlight. */
        @keyframes pulse-light {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(1.05); opacity: 1; }
        }

        /* CSS for individual characters in the animated heading. */
        .animated-heading-char {
          opacity: 0; /* Initially hidden */
          transform: translateY(20px); /* Starts slightly below its final position */
          animation: slideUpFadeIn 0.8s forwards; /* Applies slide-up and fade-in animation */
        }

        /* Keyframes for the slide-up and fade-in animation. */
        @keyframes slideUpFadeIn {
          to {
            opacity: 1; /* Fully visible */
            transform: translateY(0); /* Moves to its final position */
          }
        }

        /* Keyframes for a floating animation, applied to background circles. */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); will-change: transform, opacity; } /* Added will-change for optimization */
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        /* Keyframes for a pulsing glow effect, applied to the SVG. */
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.3)); } /* Initial subtle glow */
          50% { filter: drop-shadow(0 0 25px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 35px rgba(59, 130, 246, 0.4)); } /* Stronger, multi-color glow at midpoint */
        }
        
        /* The wave-line and particle animations are defined here,
           even if not directly applied to an element in the provided JSX.
           They are available for dynamic application or other elements. */
        .wave-line {
          animation: wave 3s ease-in-out infinite;
        }
        
        /* Keyframes for the wave animation (stroke-dasharray manipulation). */
        @keyframes wave {
          0%, 100% { stroke-dasharray: 5, 15; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 15, 5; stroke-dashoffset: 40; }
        }
        
        /* CSS for individual particles in the SVG. */
        .particle {
          animation: particle-float 4s ease-in-out infinite;
        }
        
        /* Keyframes for the particle floating animation. */
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; will-change: transform, opacity; } /* Added will-change for optimization */
          25% { transform: translate(10px, -15px) scale(1.2); opacity: 0.8; }
          50% { transform: translate(-5px, -25px) scale(0.8); opacity: 0.6; }
          75% { transform: translate(8px, -10px) scale(1.1); opacity: 0.9; }
        }
      `}</style>

      {/* Main section container for the Explore Products content. */}
      <section
        className="relative lg:h-[75vh] bg-white overflow-hidden flex items-center justify-center py-8 lg:py-0" 
      >
        {/* Background gradient patch that follows the cursor. */}
        <div
          className="gradient-spotlight"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`
          }}
        ></div>

        {/* Existing background elements (large blurred circles), adjusted for the new white background. */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl transition-all duration-1000"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl transition-all duration-1200"></div>
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-pink-200/15 rounded-full blur-3xl transition-all duration-800"></div>
        </div>

        {/* Content wrapper to ensure proper z-index and layout. */}
        <div className="relative z-10 w-full px-8 py-0 lg:py-10">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Content Side with Heading, Description, and Button. */}
              <div className="space-y-8">
                <div className="space-y-6 px-0 lg:px-3">
                  {/* Main animated heading. */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight"> 
                    {/* Iterates through text segments to apply character-by-character animation. */}
                    {["Crafting Immersive ", "AV Experiences, ", "Today"].map((segment, segIndex) => (
                      <React.Fragment key={segIndex}>
                        {segment.split('').map((char, charIndex) => (
                          <span
                            key={`${segIndex}-${charIndex}`}
                            className={`inline-block animated-heading-char ${segIndex === 1 ? 'bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text font-semibold text-transparent' : ''}`}
                            style={{
                              animationDelay: `${(segIndex * 0.1) + (charIndex * 0.03)}s`, // Staggers animation start for each character
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char} {/* Renders non-breaking space for actual spaces */}
                          </span>
                        ))}
                      </React.Fragment>
                    ))}
                  </h1>

                  {/* Description paragraph with hover effects. */}
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl transform transition-all duration-500 hover:scale-102 hover:text-slate-700">
                    Discover our groundbreaking suite of Dante-enabled professional audio and video equipment. Engineered for unmatched clarity, unparalleled reliability, and limitless scalability,
                    <span className="text-purple-500 font-semibold transition-all duration-300 hover:text-purple-600 hover:scale-105 inline-block"> Resoundify</span> empowers visionaries
                    to craft immersive audio-visual experiences.
                  </p>
                </div>

                {/* Container for the GradientButton component. */}
                <div className="pt-6">
                  <GradientButton text="Explore Our Products" href="/products" />
                </div>
              </div>

              {/* Right Visual Side with Advanced SVG Animations and Floating Circles. */}
              <div className="relative h-96 lg:h-[500px] group cursor-pointer">
                {/* Floating circles with complex animations and hover effects. */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full opacity-60 transition-all duration-700 group-hover:scale-125 group-hover:opacity-90 group-hover:shadow-2xl group-hover:shadow-blue-300/50" style={{animation: 'float 6s ease-in-out infinite'}}></div>

                <div className="absolute top-16 left-16 w-32 h-32 bg-gradient-to-br from-pink-200/50 to-blue-200/50 rounded-full opacity-50 transition-all duration-900 group-hover:scale-150 group-hover:opacity-80 group-hover:translate-x-4 group-hover:-translate-y-6" style={{animation: 'float 4s ease-in-out infinite 1s'}}></div>

                <div className="absolute bottom-20 right-12 w-40 h-40 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full opacity-50 transition-all duration-800 group-hover:scale-140 group-hover:opacity-85 group-hover:-translate-x-6 group-hover:translate-y-3" style={{animation: 'float 5s ease-in-out infinite 2s'}}></div>

                <div className="absolute top-32 right-20 w-16 h-16 bg-blue-200/60 rounded-full opacity-60 transition-all duration-600 group-hover:scale-200 group-hover:opacity-90 group-hover:translate-x-8" style={{animation: 'float 3s ease-in-out infinite 0.5s'}}></div>

                <div className="absolute bottom-32 left-20 w-20 h-20 bg-purple-200/60 rounded-full opacity-60 transition-all duration-1000 group-hover:scale-175 group-hover:opacity-85 group-hover:-translate-x-4 group-hover:-translate-y-6" style={{animation: 'float 3.5s ease-in-out infinite 1.5s'}}></div>

                <div className="absolute top-20 left-1/2 w-12 h-12 bg-pink-200/70 rounded-full opacity-70 transition-all duration-500 group-hover:scale-220 group-hover:opacity-95 group-hover:translate-y-4" style={{animation: 'float 2.5s ease-in-out infinite 2.5s'}}></div>

                {/* Advanced SVG with morphing paths and particles, applying a glow filter. */}
                <svg className="absolute inset-0 w-full h-full transition-all duration-1000 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" style={{animation: 'pulse-glow 4s ease-in-out infinite'}}>
                  <defs>
                    {/* Linear gradient definition for morphing lines (morphLine1). */}
                    <linearGradient id="morphLine1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4">
                        {/* Animation for stop color and opacity changes. */}
                        <animate attributeName="stop-color"
                          values="#3b82f6;#8b5cf6;#ec4899;#3b82f6"
                          dur="3s"
                          repeatCount="indefinite" />
                        <animate attributeName="stop-opacity"
                          values="0.4;0.9;0.6;0.4"
                          dur="2s"
                          repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6">
                        {/* Animation for stop color changes with a delay. */}
                        <animate attributeName="stop-color"
                          values="#8b5cf6;#ec4899;#06b6d4;#8b5cf6"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="0.5s" />
                      </stop>
                    </linearGradient>

                    {/* Linear gradient definition for morphing lines (morphLine2). */}
                    <linearGradient id="morphLine2" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5">
                        {/* Animation for stop color changes. */}
                        <animate attributeName="stop-color"
                          values="#ec4899;#06b6d4;#8b5cf6;#ec4899"
                          dur="4s"
                          repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4">
                        {/* Animation for stop color changes with a delay. */}
                        <animate attributeName="stop-color"
                          values="#06b6d4;#3b82f6;#ec4899;#06b6d4"
                          dur="4s"
                          repeatCount="indefinite"
                          begin="1s" />
                      </stop>
                    </linearGradient>

                    {/* SVG filter for a glow effect. */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/> {/* Blurs the source graphic */}
                      <feMerge>
                        <feMergeNode in="coloredBlur"/> {/* Merges the blurred output */}
                        <feMergeNode in="SourceGraphic"/> {/* Merges the original graphic */}
                      </feMerge>
                    </filter>
                  </defs>

                  {/* First morphing animated path. */}
                  <path
                    stroke="url(#morphLine1)" /* Applies the morphLine1 gradient as stroke */
                    strokeWidth="3"
                    fill="none"
                    filter="url(#glow)" /* Applies the glow filter */
                    className="group-hover:stroke-[5] transition-all duration-500"> {/* Stroke width increases on hover */}
                    {/* Animation for path 'd' attribute (morphing shape). */}
                    <animate attributeName="d"
                      values="M 80 80 Q 200 150 320 120;M 80 80 Q 250 100 320 120;M 80 80 Q 180 200 320 120;M 80 80 Q 220 180 320 120;M 80 80 Q 200 150 320 120"
                      dur="6s"
                      repeatCount="indefinite" />
                    {/* Animation for stroke-dasharray (dashed line effect). */}
                    <animate attributeName="stroke-dasharray"
                      values="0,300;150,150;300,0;150,150;0,300"
                      dur="4s"
                      repeatCount="indefinite" />
                  </path>

                  {/* Second morphing animated path. */}
                  <path
                    stroke="url(#morphLine2)" /* Applies the morphLine2 gradient as stroke */
                    strokeWidth="2.5"
                    fill="none"
                    filter="url(#glow)" /* Applies the glow filter */
                    className="group-hover:stroke-[4] transition-all duration-500"> {/* Stroke width increases on hover */}
                    {/* Animation for path 'd' attribute (morphing shape) with a delay. */}
                    <animate attributeName="d"
                      values="M 300 300 Q 180 200 60 250;M 300 300 Q 120 180 60 250;M 300 300 Q 220 240 60 250;M 300 300 Q 150 160 60 250;M 300 300 Q 180 200 60 250"
                      dur="5s"
                      repeatCount="indefinite"
                      begin="1s" />
                    {/* Animation for stroke-dasharray (dashed line effect). */}
                    <animate attributeName="stroke-dasharray"
                      values="5,15;15,5;25,5;15,5;5,15"
                      dur="3s"
                      repeatCount="indefinite" />
                  </path>

                  {/* Third morphing animated path. */}
                  <path
                    stroke="url(#morphLine1)" /* Applies the morphLine1 gradient as stroke */
                    strokeWidth="2"
                    fill="none"
                    filter="url(#glow)" /* Applies the glow filter */
                    className="group-hover:stroke-[3.5] transition-all duration-500"> {/* Stroke width increases on hover */}
                    {/* Animation for path 'd' attribute (morphing shape) with a delay. */}
                    <animate attributeName="d"
                      values="M 200 50 Q 250 200 180 350;M 200 50 Q 280 180 180 350;M 200 50 Q 220 220 180 350;M 200 50 Q 260 160 180 350;M 200 50 Q 250 200 180 350"
                      dur="7s"
                      repeatCount="indefinite"
                      begin="2s" />
                    {/* Animation for stroke-dasharray (dashed line effect). */}
                    <animate attributeName="stroke-dasharray"
                      values="10,20;20,10;30,5;20,10;10,20"
                      dur="2.5s"
                      repeatCount="indefinite" />
                  </path>

                  {/* Group for a floating particle. */}
                  <g className="particle">
                    <circle cx="120" cy="150" r="3" fill="#3b82f6" opacity="0.7">
                      {/* Animation for circle y-position and opacity. */}
                      <animate attributeName="cy" values="150;120;150" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Group for another floating particle. */}
                  <g className="particle">
                    <circle cx="280" cy="200" r="2.5" fill="#8b5cf6" opacity="0.6">
                      {/* Animation for circle x-position and radius. */}
                      <animate attributeName="cx" values="280;300;280" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="r" values="2.5;4;2.5" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Group for a third floating particle. */}
                  <g className="particle">
                    <circle cx="180" cy="300" r="2" fill="#ec4899" opacity="0.8">
                      {/* Animation for circle y-position and x-position. */}
                      <animate attributeName="cy" values="300;280;300" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="180;190;180" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* First energy wave circle. */}
                  <circle cx="200" cy="200" r="50" fill="none" stroke="url(#morphLine1)" strokeWidth="1" opacity="0.3">
                    {/* Animation for circle radius and opacity. */}
                    <animate attributeName="r" values="50;100;50" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite" />
                  </circle>

                  {/* Second energy wave circle. */}
                  <circle cx="200" cy="200" r="30" fill="none" stroke="url(#morphLine2)" strokeWidth="1.5" opacity="0.4">
                    {/* Animation for circle radius and opacity with a delay. */}
                    <animate attributeName="r" values="30;80;30" dur="3s" repeatCount="indefinite" begin="1s" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" begin="1s" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
