import React, { useState, useEffect } from 'react';

const ResoundifyFeatures = () => {
  // Crisped features content with one-word headings and two-line descriptions
  const features = [
    {
      id: 1,
      title: "Dante",
      description: "Seamless Dante integration for flawless AV transmission. Ensures reliable, ultra-low latency audio.",
      image: "/images/Dante_Centric.png" // Generated image for Dante
    },
    {
      id: 2,
      title: "Audio",
      description: "Delivers crystal-clear, professional-grade audio. Guarantees noise-free transmission over IP networks.",
      image: "/images/Transmission.png" // Generated image for Audio
    },
    {
      id: 3,
      title: "Latency",
      description: "Achieve ultra-low latency for all real-time applications. Optimized for minimal delay and rapid response.",
      image: "/images/Latency.png" // Generated image for Latency
    },
    {
      id: 4,
      title: "Scale",
      description: "Highly scalable for any enterprise AV system. Supports hundreds of channels with flexible architecture.",
      image: "/images/Scalable.png" // Generated image for Scale
    },
    {
      id: 5,
      title: "Uptime",
      description: "Guaranteed 99.9% uptime with enterprise-grade reliability. Supported by redundant systems and 24/7 monitoring.",
      image: "/images/Uptime.png" // Generated image for Uptime
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Configuration for the stack appearance and image size
  const visibleStackCount = 3;    // Number of images visible in the stack
  const verticalOffset = 35;      // Pixels to offset each subsequent image downwards
  const horizontalOffset = 35;    // Pixels to offset each subsequent image to the right
  const imageWidth = '400px';
  const imageHeight = '300px';
  // Calculate container size based on image size and offsets for the stack
  const stackContainerWidth = `calc(${imageWidth} + ${horizontalOffset * (visibleStackCount - 1)}px)`;
  const stackContainerHeight = `calc(${imageHeight} + ${verticalOffset * (visibleStackCount - 1)}px)`;

  // useEffect to handle the automatic image change interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Start fade transition for both image and text

      // After fade transition starts, update the index
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % features.length);
        setIsTransitioning(false); // End fade transition
      }, 350); // Half of the transition duration
    }, 3500); // Change feature every 3.5 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  const currentFeature = features[currentImageIndex];

  return (
    <div className="bg-gradient-to-b from-black via-slate-700 to-black py-12 px-10 ml-10 mr-10 mb-12 rounded-3xl shadow-lg font-[Exo_2]">
      <div className="px-10">
        {/* Top Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-6xl font-[Tilt_Neon] text-slate-300 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Why choose <span className="font-semibold bg-gradient-to-br from-slate-600 to-slate-200 bg-clip-text text-transparent">Resoundify</span> ?
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of advanced audio-visual solutions designed to transform your communication experience with cutting-edge technology.
          </p>
          <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-12"></div>
        </div>

        {/* Main Content Area - Image Stack and Description Side-by-Side */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24 gap-y-16 mb-12">
          {/* Left Side - Image Stack */}
          <div
            className="relative flex-shrink-0"
            style={{ width: stackContainerWidth, height: stackContainerHeight }}
          >
            {[...Array(visibleStackCount)].map((_, stackIndex) => {
              const imageIndex = (currentImageIndex + stackIndex) % features.length;
              const imageSrc = features[imageIndex].image;

              const translateX = stackIndex * horizontalOffset;
              const translateY = stackIndex * verticalOffset;
              const zIndex = visibleStackCount - stackIndex;

              const opacity = (stackIndex === 0 && isTransitioning) ? 0 : 1;
              const scale = isTransitioning ? (stackIndex === 0 ? 0.95 : 1.05) : 1;

              return (
                <div
                  key={`stack-${stackIndex}-${features[imageIndex].id}`}
                  className="absolute"
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                    zIndex: zIndex,
                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: opacity,
                  }}
                >
                  <img
                    src={imageSrc}
                    alt={features[imageIndex].title}
                    className="object-cover rounded-2xl shadow-xl border-4 border-white/20"
                    style={{
                      width: imageWidth,
                      height: imageHeight,
                      boxShadow: `0 ${8 + stackIndex * 4}px ${16 + stackIndex * 8}px rgba(0, 0, 0, ${0.2 + stackIndex * 0.1})`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Side - Description Content */}
          <div
            className="flex-1 max-w-lg text-center lg:text-left"
            style={{
              transition: 'opacity 0.5s ease-in-out',
              opacity: isTransitioning ? 0.4 : 1, // Text fades during transition
            }}
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {currentFeature.title}
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              {currentFeature.description}
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ResoundifyFeatures;