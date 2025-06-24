import React, { useState, useEffect, useRef } from 'react';
import { Zap, Volume2, Expand, Rocket, Play, Waves, Circle } from 'lucide-react';

const DanteTechnologySection = () => {
  const [activePoint, setActivePoint] = useState(0);
  const headerRef = useRef(null); // Ref for the header itself
  const videoSectionRef = useRef(null); // Ref for the video section
  const [headerOffsetTop, setHeaderOffsetTop] = useState(0); // Tracks initial top position of header
  const [isHeaderFixed, setIsHeaderFixed] = useState(false); // Controls if header is fixed or static
  const [isVideoSectionReached, setIsVideoSectionReached] = useState(false); // New state to track if video section is at the top

  const points = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Effortless Setup",
      description: "Dante simplifies complex audio networks, making installation and configuration straightforward with intelligent auto-discovery.",
      color: "from-blue-400 to-cyan-500",
      accent: "blue",
      pattern: "M0,0 Q50,25 100,0 T200,0"
    },
    {
      icon: <Volume2 className="w-8 h-8 text-white" />,
      title: "Superior Quality",
      description: "Experience pristine, uncompressed audio with Dante's high-fidelity transmission and near-zero latency performance.",
      color: "from-purple-400 to-violet-500",
      accent: "purple",
      pattern: "M0,25 Q50,0 100,25 T200,25"
    },
    {
      icon: <Expand className="w-8 h-8 text-white" />,
      title: "Unmatched Scalability",
      description: "Easily expand your audio system without complex re-cabling or compatibility issues, supporting thousands of channels.",
      color: "from-emerald-400 to-green-500",
      accent: "emerald",
      pattern: "M0,12.5 Q50,37.5 100,12.5 T200,12.5"
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Future-Proof",
      description: "Stay ahead with an adaptable platform ready for tomorrow's audio demands and emerging technologies.",
      color: "from-orange-400 to-amber-500",
      accent: "orange",
      pattern: "M0,37.5 Q50,12.5 100,37.5 T200,37.5"
    }
  ];

  useEffect(() => {
    // Autoplay feature for points
    const interval = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % points.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [points.length]);

  useEffect(() => {
    // Measure header's initial offset from the top of the document
    const measureHeaderOffset = () => {
      if (headerRef.current) {
        // Use getBoundingClientRect().top + window.scrollY for accurate document offset
        setHeaderOffsetTop(headerRef.current.getBoundingClientRect().top + window.scrollY);
      }
    };

    // Set initial offset on mount and remeasure on resize
    measureHeaderOffset();
    window.addEventListener('resize', measureHeaderOffset);

    // This function determines if the header should be fixed based on scroll position
    // and the visibility of the video section.
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // The header should be fixed IF:
      // 1. We have scrolled past the header's initial top position (headerOffsetTop)
      // AND
      // 2. The video section has NOT reached the top of the viewport yet (isVideoSectionReached is false)
      if (currentScrollY >= headerOffsetTop && !isVideoSectionReached) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for the video section
    // This observer will update the `isVideoSectionReached` state, which `handleScroll` reacts to.
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the video section is intersecting AND its top is at or above the viewport's top (threshold 0)
        // This means the video section has scrolled into view at the top or above it.
        if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
          setIsVideoSectionReached(true); // Mark video section as reached
        } else if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
          // If the video section has completely scrolled *past* the top of the viewport (its bottom is now above 0)
          // This means it's no longer influencing the header's state.
          setIsVideoSectionReached(false); // Mark video section as no longer reached
        }
        // No explicit setIsHeaderFixed here. `handleScroll` will be re-evaluated due to `isVideoSectionReached`
        // being a dependency in the useEffect, and will then correctly set `isHeaderFixed`.
      },
      {
        root: null, // observe the viewport
        threshold: 0, // trigger as soon as any part of the target is visible or goes out
      }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    // Cleanup function: remove event listeners and unobserve when component unmounts or dependencies change
    return () => {
      window.removeEventListener('resize', measureHeaderOffset);
      window.removeEventListener('scroll', handleScroll);
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, [headerOffsetTop, isVideoSectionReached]); // Re-run this effect if headerOffsetTop or isVideoSectionReached changes

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Spacer to reserve space for the fixed header, preventing content jump */}
      {isHeaderFixed && (
        <div style={{ height: headerRef.current ? headerRef.current.offsetHeight : 0 }}></div>
      )}

      {/* Header content container */}
      <div className='h-[10vh] py-10 mb-5'>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="relative">
            <h2
              className="text-5xl lg:text-6xl font-sans text-slate-900 mb-6 tracking-tight"
              style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
            >
              Technology <span className="font-semibold bg-gradient-to-br from-slate-900 to-slate-500 bg-clip-text text-transparent">Spotlight</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content Area within the section */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Revolutionary Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start py-8">
          {/* Left Column - Main Description Card (sticky relative to the viewport) */}
          <div className="lg:col-span-7 space-y-12 lg:sticky lg:top-24">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-10 border border-slate-200 shadow-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Volume2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-slate-800 mb-2">Benefits of</h2>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dante Technology</h2>
                  </div>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed">
                  Dante is the leading solution for digital audio networking, delivering uncompressed, multi-channel digital media via standard Ethernet networks with near-zero latency and perfect synchronization. It simplifies system setup, eliminates bulky analog cabling, and provides superior sound quality. <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Resoundify</span> leverages Dante to provide unparalleled flexibility and scalability in audio installations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Points (will scroll) */}
          <div className="lg:col-span-5 relative">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {points.map((point, index) => (
                <path
                  key={index}
                  d={point.pattern}
                  stroke={`url(#gradient-${index})`}
                  strokeWidth="3"
                  fill="none"
                  className={`transition-opacity duration-500 ${activePoint === index ? 'opacity-100' : 'opacity-20'}`}
                  strokeDasharray="5,5"
                  style={{
                    transform: `translateY(${index * 140}px)`,
                    animation: activePoint === index ? 'dash 2s linear infinite' : 'none'
                  }}
                />
              ))}
              <defs>
                {points.map((point, index) => (
                  <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent"/>
                    <stop offset="50%" stopColor={point.accent === 'blue' ? '#3b82f6' : point.accent === 'purple' ? '#8b5cf6' : point.accent === 'emerald' ? '#10b981' : '#f97316'}/>
                    <stop offset="100%" stopColor="transparent"/>
                  </linearGradient>
                ))}
              </defs>
            </svg>

            <div className="relative z-10 space-y-8">
              {points.map((point, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-700 ${
                    activePoint === index ? '' : 'hover:scale-100'
                  }`}
                  onClick={() => setActivePoint(index)}
                >
                  {activePoint === index && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${point.color} rounded-2xl blur-xl opacity-20 animate-pulse`}></div>
                  )}
                  <div className={`relative backdrop-blur-xl rounded-2xl p-8 border transition-all duration-500 ${
                    activePoint === index
                      ? 'bg-white/90 border-slate-300 shadow-2xl'
                      : 'bg-white/60 border-slate-200 hover:bg-white/80 hover:border-slate-300'
                  }`}>
                    <div className="flex items-center gap-6">
                      <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${point.color} shadow-2xl`}>
                        {point.icon}
                        {activePoint === index && (
                          <div className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-2xl animate-ping opacity-30`}></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                          {point.title}
                          {activePoint === index && <Waves className="w-5 h-5 text-blue-500 animate-bounce" />}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revolutionary Video Section (will scroll into view after the points) */}
        <div ref={videoSectionRef} className="mt-32 pb-24">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-slate-800 mb-6">
              Experience the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Revolution</span>
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Witness the future of digital audio networking as Dante transforms the industry with revolutionary technology that defies conventional limitations.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-300 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center group cursor-pointer">
                  <div className="relative">
                    <div className="w-24 h-24 bg-white bg-opacity-90 backdrop-blur-xl rounded-full flex items-center justify-center border border-slate-300 group-hover:bg-opacity-100 transition-all duration-500 shadow-2xl">
                      <Play className="w-12 h-12 text-slate-800 ml-1" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-2xl font-bold text-white mb-2">Dante Technology: The Future is Now</h4>
                  <p className="text-gray-200">Discover how revolutionary audio networking transforms professional installations</p>
                </div>
                <div className="absolute top-8 right-8 text-blue-300">
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <Circle className="w-2 h-2 animate-pulse" />
                    <span>LIVE DEMO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </section>
  );
};

export default DanteTechnologySection;
