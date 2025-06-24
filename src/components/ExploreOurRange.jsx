import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ExploreProductsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Removed AnimatedText component as it's no longer needed for special text animations
  // Just direct rendering of text in h1

  return (
    <>
      <style jsx>{`
        /* Remove macDockBounce animation as it's no longer needed for heading */
        /* @keyframes macDockBounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.15);
          }
        } */

        /* Background gradient patch that follows cursor */
        .gradient-spotlight {
          position: absolute;
          width: 500px; /* Size of the gradient patch */
          height: 500px; /* Size of the gradient patch */
          background: radial-gradient(circle at center, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%); /* Purple to blue fading to transparent */
          border-radius: 50%;
          transform: translate(-50%, -50%); /* Center the gradient on the cursor */
          pointer-events: none; /* Allows clicks to pass through */
          transition: background-color 0.5s ease-out; /* Smooth transition if you change colors */
          animation: pulse-light 5s infinite alternate; /* Subtle pulsing for extra flair */
          will-change: transform; /* Optimize for smooth movement */
        }

        @keyframes pulse-light {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(1.05); opacity: 1; }
        }

        /* Initial heading text animation (optional, for a smooth entrance) */
        .animated-heading-char {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUpFadeIn 0.8s forwards;
        }

        @keyframes slideUpFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Existing animations (kept for context, but you can remove if not relevant to the problem) */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.3)); }
          50% { filter: drop-shadow(0 0 25px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 35px rgba(59, 130, 246, 0.4)); }
        }
        
        .wave-line {
          animation: wave 3s ease-in-out infinite;
        }
        
        @keyframes wave {
          0%, 100% { stroke-dasharray: 5, 15; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 15, 5; stroke-dashoffset: 40; }
        }
        
        .particle {
          animation: particle-float 4s ease-in-out infinite;
        }
        
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(10px, -15px) scale(1.2); opacity: 0.8; }
          50% { transform: translate(-5px, -25px) scale(0.8); opacity: 0.6; }
          75% { transform: translate(8px, -10px) scale(1.1); opacity: 0.9; }
        }
      `}</style>

      <section 
        className="relative h-[75vh] bg-white overflow-hidden flex items-center justify-center" // Changed background to white
      >
        {/* Background gradient patch that follows cursor */}
        <div 
          className="gradient-spotlight" 
          style={{ 
            left: `${mousePosition.x}px`, 
            top: `${mousePosition.y}px` 
          }}
        ></div>

        {/* Existing background elements, adjusted for the new white background */}
        <div className="absolute inset-0 z-0">
          {/* These will now appear on top of the white background but under the spotlight gradient */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl transition-all duration-1000"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl transition-all duration-1200"></div>
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-pink-200/15 rounded-full blur-3xl transition-all duration-800"></div>
        </div>

        <div className="relative z-10 w-full px-8 py-20">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Content Side with Static Text and Initial Animation */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-sans text-slate-900 leading-tight">
                    {["Unleash the ", "Future", " of Audio Excellence"].map((segment, segIndex) => (
                      <React.Fragment key={segIndex}>
                        {segment.split('').map((char, charIndex) => (
                          <span 
                            key={`${segIndex}-${charIndex}`}
                            className={`inline-block animated-heading-char ${segIndex === 1 ? 'bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text font-semibold text-transparent' : ''}`}
                            style={{
                              animationDelay: `${(segIndex * 0.1) + (charIndex * 0.03)}s`, // Staggered initial appearance
                              // No hover-specific styles here
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </React.Fragment>
                    ))}
                  </h1>
                  
                  <p className="text-xl text-slate-600 leading-relaxed max-w-2xl transform transition-all duration-500 hover:scale-102 hover:text-slate-700">
                    Discover our groundbreaking suite of Dante-enabled professional audio equipment. 
                    Engineered for unmatched clarity, unparalleled reliability, and limitless scalability, 
                    <span className="text-purple-500 font-semibold transition-all duration-300 hover:text-purple-600 hover:scale-105 inline-block"> Resoundify</span> empowers visionaries 
                    to craft immersive sonic experiences.
                  </p>
                </div>

                {/* Enhanced CTA Button */}
                <div className="pt-6">
                  <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full text-white font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-300/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative flex items-center z-10">
                      Explore Our Products
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Enhanced Visual Side with Advanced SVG Animations */}
              <div className="relative h-96 lg:h-[500px] group cursor-pointer">
                {/* Floating circles with complex animations */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full opacity-60 transition-all duration-700 group-hover:scale-125 group-hover:opacity-90 group-hover:shadow-2xl group-hover:shadow-blue-300/50" style={{animation: 'float 6s ease-in-out infinite'}}></div>
                
                <div className="absolute top-16 left-16 w-32 h-32 bg-gradient-to-br from-pink-200/50 to-blue-200/50 rounded-full opacity-50 transition-all duration-900 group-hover:scale-150 group-hover:opacity-80 group-hover:translate-x-4 group-hover:-translate-y-6" style={{animation: 'float 4s ease-in-out infinite 1s'}}></div>
                
                <div className="absolute bottom-20 right-12 w-40 h-40 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full opacity-50 transition-all duration-800 group-hover:scale-140 group-hover:opacity-85 group-hover:-translate-x-6 group-hover:translate-y-3" style={{animation: 'float 5s ease-in-out infinite 2s'}}></div>
                
                <div className="absolute top-32 right-20 w-16 h-16 bg-blue-200/60 rounded-full opacity-60 transition-all duration-600 group-hover:scale-200 group-hover:opacity-90 group-hover:translate-x-8" style={{animation: 'float 3s ease-in-out infinite 0.5s'}}></div>
                
                <div className="absolute bottom-32 left-20 w-20 h-20 bg-purple-200/60 rounded-full opacity-60 transition-all duration-1000 group-hover:scale-175 group-hover:opacity-85 group-hover:-translate-x-4 group-hover:-translate-y-6" style={{animation: 'float 3.5s ease-in-out infinite 1.5s'}}></div>
                
                <div className="absolute top-20 left-1/2 w-12 h-12 bg-pink-200/70 rounded-full opacity-70 transition-all duration-500 group-hover:scale-220 group-hover:opacity-95 group-hover:translate-y-4" style={{animation: 'float 2.5s ease-in-out infinite 2.5s'}}></div>
                
                {/* Advanced SVG with morphing paths and particles */}
                <svg className="absolute inset-0 w-full h-full transition-all duration-1000 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" style={{animation: 'pulse-glow 4s ease-in-out infinite'}}>
                  <defs>
                    <linearGradient id="morphLine1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4">
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
                        <animate attributeName="stop-color" 
                          values="#8b5cf6;#ec4899;#06b6d4;#8b5cf6" 
                          dur="3s" 
                          repeatCount="indefinite" 
                          begin="0.5s" />
                      </stop>
                    </linearGradient>
                    
                    <linearGradient id="morphLine2" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5">
                        <animate attributeName="stop-color" 
                          values="#ec4899;#06b6d4;#8b5cf6;#ec4899" 
                          dur="4s" 
                          repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4">
                        <animate attributeName="stop-color" 
                          values="#06b6d4;#3b82f6;#ec4899;#06b6d4" 
                          dur="4s" 
                          repeatCount="indefinite" 
                          begin="1s" />
                      </stop>
                    </linearGradient>

                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Morphing animated paths */}
                  <path 
                    stroke="url(#morphLine1)" 
                    strokeWidth="3" 
                    fill="none"
                    filter="url(#glow)"
                    className="group-hover:stroke-[5] transition-all duration-500">
                    <animate attributeName="d" 
                      values="M 80 80 Q 200 150 320 120;M 80 80 Q 250 100 320 120;M 80 80 Q 180 200 320 120;M 80 80 Q 220 180 320 120;M 80 80 Q 200 150 320 120" 
                      dur="6s" 
                      repeatCount="indefinite" />
                    <animate attributeName="stroke-dasharray" 
                      values="0,300;150,150;300,0;150,150;0,300" 
                      dur="4s" 
                      repeatCount="indefinite" />
                  </path>

                  <path 
                    stroke="url(#morphLine2)" 
                    strokeWidth="2.5" 
                    fill="none"
                    filter="url(#glow)"
                    className="group-hover:stroke-[4] transition-all duration-500">
                    <animate attributeName="d" 
                      values="M 300 300 Q 180 200 60 250;M 300 300 Q 120 180 60 250;M 300 300 Q 220 240 60 250;M 300 300 Q 150 160 60 250;M 300 300 Q 180 200 60 250" 
                      dur="5s" 
                      repeatCount="indefinite" 
                      begin="1s" />
                    <animate attributeName="stroke-dasharray" 
                      values="5,15;15,5;25,5;15,5;5,15" 
                      dur="3s" 
                      repeatCount="indefinite" />
                  </path>

                  <path 
                    stroke="url(#morphLine1)" 
                    strokeWidth="2" 
                    fill="none"
                    filter="url(#glow)"
                    className="group-hover:stroke-[3.5] transition-all duration-500">
                    <animate attributeName="d" 
                      values="M 200 50 Q 250 200 180 350;M 200 50 Q 280 180 180 350;M 200 50 Q 220 220 180 350;M 200 50 Q 260 160 180 350;M 200 50 Q 250 200 180 350" 
                      dur="7s" 
                      repeatCount="indefinite" 
                      begin="2s" />
                    <animate attributeName="stroke-dasharray" 
                      values="10,20;20,10;30,5;20,10;10,20" 
                      dur="2.5s" 
                      repeatCount="indefinite" />
                  </path>

                  {/* Floating particles */}
                  <g className="particle">
                    <circle cx="120" cy="150" r="3" fill="#3b82f6" opacity="0.7">
                      <animate attributeName="cy" values="150;120;150" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  
                  <g className="particle">
                    <circle cx="280" cy="200" r="2.5" fill="#8b5cf6" opacity="0.6">
                      <animate attributeName="cx" values="280;300;280" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="r" values="2.5;4;2.5" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  
                  <g className="particle">
                    <circle cx="180" cy="300" r="2" fill="#ec4899" opacity="0.8">
                      <animate attributeName="cy" values="300;280;300" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="180;190;180" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Energy waves */}
                  <circle cx="200" cy="200" r="50" fill="none" stroke="url(#morphLine1)" strokeWidth="1" opacity="0.3">
                    <animate attributeName="r" values="50;100;50" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="200" cy="200" r="30" fill="none" stroke="url(#morphLine2)" strokeWidth="1.5" opacity="0.4">
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