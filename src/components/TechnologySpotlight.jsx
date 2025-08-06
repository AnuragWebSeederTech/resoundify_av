import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Zap, Volume2, Expand, Rocket, Play, Waves, Circle } from 'lucide-react';

const DanteTechnologySection = () => {
  const [activePoint, setActivePoint] = useState(0);
  const headerRef = useRef(null);
  const videoSectionRef = useRef(null);
  const pointRefs = useRef([]);
  const [headerOffsetTop, setHeaderOffsetTop] = useState(0);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isVideoSectionReached, setIsVideoSectionReached] = useState(false);

  const points = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Effortless Setup",
      description: "Dante simplifies complex AV networks, making installation and configuration straightforward with auto-discovery for both audio and video devices.",
      color: "from-blue-400 to-cyan-500",
      accent: "blue",
      pattern: "M0,0 Q50,25 100,0 T200,0"
    },
    {
      icon: <Volume2 className="w-8 h-8 text-white" />, // Keeping Volume2 for primary association with 'sound', but description covers both.
      title: "Superior AV Quality",
      description: "Experience pristine, uncompressed audio and high-fidelity video transmission with Dante's near-zero latency performance.",
      color: "from-purple-400 to-violet-500",
      accent: "purple",
      pattern: "M0,25 Q50,0 100,25 T200,25"
    },
    {
      icon: <Expand className="w-8 h-8 text-white" />,
      title: "Unmatched Scalability",
      description: "Easily expand your audio and video systems without complex re-cabling or compatibility issues, supporting thousands of channels.",
      color: "from-emerald-400 to-green-500",
      accent: "emerald",
      pattern: "M0,12.5 Q50,37.5 100,12.5 T200,12.5"
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Future-Proof AV",
      description: "Stay ahead with an adaptable platform ready for tomorrow's audio and video demands, including Dante-enabled cameras and AV-over-IP.",
      color: "from-orange-400 to-amber-500",
      accent: "orange",
      pattern: "M0,37.5 Q50,12.5 100,37.5 T200,37.5"
    }
  ];

  // Store refs for each point in the pointRefs array
  const setPointRef = useCallback((el, index) => {
    if (el) {
      pointRefs.current[index] = el;
    }
  }, []);

  // Effect for header offset and scroll handling
  useEffect(() => {
    const measureHeaderOffset = () => {
      if (headerRef.current) {
        // Use getBoundingClientRect().top + window.scrollY for absolute document offset
        setHeaderOffsetTop(headerRef.current.getBoundingClientRect().top + window.scrollY);
      }
    };

    // Measure initially and on resize to account for layout shifts
    measureHeaderOffset();
    window.addEventListener('resize', measureHeaderOffset);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Fix header when it reaches the top of the viewport
      if (currentScrollY >= headerOffsetTop && !isVideoSectionReached) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function for scroll and resize listeners
    return () => {
      window.removeEventListener('resize', measureHeaderOffset);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerOffsetTop, isVideoSectionReached]); // Dependencies to re-run when header offset or video section state changes

  // Effect for Intersection Observers
useEffect(() => {
  // Intersection Observer for the video section (to unfix header)
  const videoObserver = new IntersectionObserver(
    ([entry]) => {
      // When the video section's top is at or past the top of the viewport
      // and it's intersecting, set isVideoSectionReached to true.
      // Also check if its top is effectively at the top (<= 0)
      if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
        setIsVideoSectionReached(true);
      } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
        // If it's not intersecting AND it's below the viewport, it means we scrolled up past it.
        // Or if it's no longer intersecting and its top is above the viewport (meaning we scrolled far past it down),
        // ensure it's false to allow header to become fixed again.
        setIsVideoSectionReached(false);
      }
    },
    {
      root: null, // relative to the viewport
      threshold: 0, // as soon as any part of the target enters/leaves the root
    }
  );

  if (videoSectionRef.current) {
    videoObserver.observe(videoSectionRef.current);
  }

  // Intersection Observer for the points - REFINED FOR GLOW AND SMOOTHNESS
  const pointObserver = new IntersectionObserver(
    (entries) => {
      let newActivePoint = activePoint; // Keep current active if no better candidate

      entries.forEach(entry => {
        const index = pointRefs.current.indexOf(entry.target);

        if (index !== -1) {
          // If the element is intersecting the root (viewport) within our defined margin
          // and is past the top boundary of the active zone, make it active.
          // This creates a "scroll-snap" like feel for activation.
          if (entry.isIntersecting) {
            newActivePoint = index; // The last element to enter the active zone wins
          }
        }
      });

      // Update activePoint only if it has genuinely changed
      if (newActivePoint !== activePoint) {
        setActivePoint(newActivePoint);
      }
    },
    {
      root: null, // relative to the viewport
      // Define a very precise "active zone" in the middle of the viewport.
      // An item will become active when its top edge crosses the 30% mark from the top,
      // and it will remain active until its bottom edge crosses the 70% mark from the top.
      // This makes the activation more stable and less "flickery".
      rootMargin: '-30% 0px -70% 0px', // Top: 30% from viewport top, Bottom: 70% from viewport top
      threshold: 0, // We want to trigger as soon as it enters/leaves the rootMargin
    }
  );

  pointRefs.current.forEach(ref => {
    if (ref) {
      pointObserver.observe(ref);
    }
  });

  // Cleanup function for observers
  return () => {
    if (videoSectionRef.current) {
      videoObserver.unobserve(videoSectionRef.current);
    }
    pointRefs.current.forEach(ref => {
      if (ref) {
        pointObserver.unobserve(ref);
      }
    });
    pointObserver.disconnect();
  };
}, [activePoint]); // Added activePoint to re-evaluate observer if it changes manually
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 lg:py-12">
      {/* Spacer to reserve space for the fixed header, preventing content jump */}

      {/* Header section, dynamically positioned */}
      <div
        ref={headerRef}
        className={`w-full  'relative'`}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="relative">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight"
              style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
            >
              Technology <span className="font-semibold bg-gradient-to-br from-slate-900 to-slate-500 bg-clip-text text-transparent">Spotlight</span>
            </h2>
          </div>
        </div>
        <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8"></div>
      </div>

      {/* Main Content Area within the section */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        {/* Revolutionary Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start py-2 lg:py-8">
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
                    <h2 className="text-3xl font-light lg:font-bold text-slate-800 mb-2">Benefits of</h2>
                    <h2 className="text-3xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dante Technology</h2>
                  </div>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed">
                  Dante is the leading solution for digital audio and video networking, delivering uncompressed, multi-channel digital media via standard Ethernet networks with near-zero latency and perfect synchronization. It simplifies system setup, eliminates bulky analog cabling, and provides superior AV quality. <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Resoundify</span> leverages Dante to provide unparalleled flexibility and scalability in both audio and video installations, including Dante-enabled cameras and AV-over-IP systems.
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
                  ref={el => setPointRef(el, index)} // Assign ref to each point div
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
                        <h3 className="text-2xl font-light lg:font-bold text-slate-800 mb-3 flex items-center gap-3">
                          {point.title}
                          {activePoint === index && <Waves className="w-5 h-5 text-blue-500 animate-bounce" />}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-base sm:text-lg lg:text-xl">
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
        <div ref={videoSectionRef} className="mt-12 pb-5">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl text-slate-800 mb-6">
              Experience the <span className="bg-gradient-to-r from-slate-800 to-slate-400 font-semibold bg-clip-text text-transparent">Revolution</span>
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Witness the future of digital audio networking as Dante transforms the industry with revolutionary technology that defies conventional limitations.
            </p>
            <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8"></div>
          </div>

          <div className="relative max-w-6xl mx-auto group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-slate-300 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/W__BdFBNCQg"
                  title="Dante Technology: The Future is Now"
                  className="w-full h-full rounded-3xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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