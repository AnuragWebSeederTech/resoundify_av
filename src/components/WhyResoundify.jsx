import React, { useState, useEffect, useRef } from 'react';

const ResoundifyFeaturesNew = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null); // Stores the ID of the currently hovered feature
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Tracks mouse position for the interactive light
  const containerRef = useRef(null); // Ref for the main container to observe mouse events
  const featureRefs = useRef({}); // Ref for each feature card to observe visibility

  // Define the main features with their details (now 3 for a cleaner layout with the new side element).
  const features = [
    {
      id: 1,
      title: "Dante Integration",
      description: "Seamless integration with Dante for flawless audio transmission, industry-standard professional networking, and robust reliability.",
      icon: "🎛️"
    },
    {
      id: 2,
      title: "Crystal Clarity",
      description: "Experience crystal-clear audio over IP networks with advanced signal processing, intelligent noise reduction, and pristine sound reproduction.",
      icon: "🔊"
    },
    {
      id: 3,
      title: "Ultra-Low Latency",
      description: "Achieve real-time audio processing with minimal delay, ensuring synchronized performance and optimized responsiveness for critical live applications.",
      icon: "⚡"
    },
    // The "Scalable Architecture" and "Guaranteed Uptime" features will be handled separately for layout.
  ];

  // Data for the side "Uptime" button structure
  const uptimeFeature = {
    id: 5,
    title: "99.9% Uptime",
    description: "Guaranteed reliability with redundant systems and 24/7 proactive monitoring.",
    icon: "🏆"
  };

  // Map to store visibility state for each feature card, for scroll-in animation
  const [featureVisibility, setFeatureVisibility] = useState({});
  const uptimeRef = useRef(null); // Ref for the Uptime button
  const [uptimeVisible, setUptimeVisible] = useState(false); // State for Uptime button visibility

  // Effect for tracking mouse position within the container for the subtle light effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate mouse position as a percentage of the container's width/height
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup: remove event listener when component unmounts
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Effect for Intersection Observer to trigger entrance animations for each feature card and uptime button on scroll
  useEffect(() => {
    const observers = [];

    // Observe main feature cards
    features.forEach(feature => {
      const cardRef = featureRefs.current[feature.id];
      if (cardRef) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setFeatureVisibility(prev => ({ ...prev, [feature.id]: true }));
              observer.unobserve(entry.target); // Stop observing once it's visible
            }
          },
          { threshold: 0.1 } // Trigger when 10% of the card is visible
        );
        observer.observe(cardRef);
        observers.push(observer);
      }
    });

    // Observe Uptime button
    if (uptimeRef.current) {
      const uptimeObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setUptimeVisible(true);
            uptimeObserver.unobserve(entry.target); // Stop observing once visible
          }
        },
        { threshold: 0.1 }
      );
      uptimeObserver.observe(uptimeRef.current);
      observers.push(uptimeObserver);
    }


    // Cleanup: disconnect all observers when component unmounts
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [features]); // Dependency array includes features

  return (
    <div
      ref={containerRef}
      // Ensure the component covers the full width and has a minimum height of 90vh
      className="relative w-full min-h-[90vh] bg-gradient-to-br from-black via-gray-950 to-black py-20 px-8 overflow-hidden font-['Inter']"
    >
      {/* Subtle Background Particles - Reduced quantity and increased animation duration for smoothness */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-blue-300/10 rounded-full animate-pulse" // Standard blue for particles
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 6}s` // Longer duration for smoother pulse
            }}
          />
        ))}
      </div>

      {/* Interactive Light following mouse - Standard blue/purple effect, reduced size */}
      <div
        className="absolute w-56 h-56 bg-gradient-radial from-blue-500/10 via-purple-500/05 to-transparent rounded-full blur-xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Main content wrapper - Utilizes more horizontal space with responsive padding */}
      <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        {/* Floating Header - Animates on initial load */}
        <div className="text-center mb-24 opacity-0 translate-y-[-20px] animate-fade-in-up">
          <div className="relative inline-block">
            <h2 className="text-5xl lg:text-6xl font-sans text-slate-200 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Why Choose <span className="font-semibold bg-gradient-to-br from-slate-600 to-slate-200 bg-clip-text text-transparent">Resoundify</span>
          </h2>
            {/* Subtler title glow using standard shades */}
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 blur-xl rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover the core capabilities that power unparalleled audio experiences.
          </p>
           <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8"></div>
       
        </div>

        {/* Main Content Area: Features Grid and Uptime button - Flex layout for horizontal distribution */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-center lg:justify-between gap-12 mb-24">

          {/* Feature Grid - Takes 2/3 width on large screens, more columns for wider use */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"> {/* Adjusted for 2 columns on MD+, could be 3 for very wide screens */}
            {features.map((feature, index) => {
              const isInView = featureVisibility[feature.id];
              const isCurrentHovered = hoveredFeature === feature.id;

              return (
                <div
                  key={feature.id}
                  ref={el => featureRefs.current[feature.id] = el} // Assign ref to each card
                  className={`
                    relative p-8 rounded-2xl border transition-all duration-700 ease-out
                    flex flex-col items-center text-center
                    bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md
                    shadow-2xl
                    ${isCurrentHovered
                      ? 'border-blue-400 shadow-blue-400/20 scale-[1.05] transform z-20' // Standard blue hover highlight
                      : 'border-slate-700/60 hover:border-blue-500/70 hover:shadow-lg'
                    }
                    ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}
                  `}
                  style={{ transitionDelay: isInView ? `${index * 120}ms` : '0ms' }} // Staggered animation on scroll
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Icon */}
                  <div className="mb-6 text-6xl flex items-center justify-center w-20 h-20 rounded-full bg-sky-500/15 text-sky-300">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>

                  {/* Description - Always visible for simpler layout */}
                  <p className="text-slate-300 text-base leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Small call to action / more info button */}
                  <button className="text-sky-300 text-sm font-medium hover:underline flex items-center mt-auto">
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Guaranteed Uptime Side Button Structure - Takes 1/3 width on large screens */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div
              ref={uptimeRef}
              className={`
                relative flex flex-col items-center justify-center p-8 rounded-full
                bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/60 shadow-xl
                min-w-[200px] min-h-[200px] max-w-[280px] max-h-[280px] aspect-square
                transition-all duration-700 ease-out
                ${uptimeVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}
              `}
              style={{ transitionDelay: '300ms' }} // Slightly delayed animation
            >
              <div className="text-6xl mb-4 text-amber-400"> {/* Distinct icon color for this special feature */}
                {uptimeFeature.icon}
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">{uptimeFeature.title}</h3>
              <p className="text-slate-300 text-sm text-center mb-4">{uptimeFeature.description}</p>
              <button className="text-amber-400 text-sm font-medium hover:underline flex items-center mt-auto">
                Read More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        
      </div>

      <style jsx>{`
        /* Custom Keyframes for subtle animations */
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }

        @keyframes fadeInMoveUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInMoveDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-fade-in-up {
            animation: fadeInMoveDown 1s ease-out forwards;
        }
        .animate-fade-in-up-delay {
            animation: fadeInMoveUp 1s ease-out forwards 0.5s; /* Apply a delay */
        }

        /* Additional delay for the uptime button if needed */
        .animate-fade-in-up-delay-2 {
            animation: fadeInMoveUp 1s ease-out forwards 0.8s;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default ResoundifyFeaturesNew;
