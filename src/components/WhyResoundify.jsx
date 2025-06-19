import React, { useState, useEffect } from 'react';
import { Shield, Settings, Cpu, Network, ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const WhyResoundify = () => {
  const [activeCard, setActiveCard] = useState(0); // Start with the first card active

  // useInView hook for the header section to animate its appearance on scroll
  const { ref: headerRef, inView: headerInView } = useInView({
    // Removed triggerOnce: true so it animates every time it comes into view
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Network className="w-10 h-10" />,
      title: "Dante-Centric Innovation",
      description: "Built to integrate seamlessly with Dante, ensuring flawless audio transmission, low latency, and unmatched scalability for your AV systems.",
      color: "from-blue-400 to-blue-500", // Light blue gradient
      accent: "blue",
      stat: "99.9% Uptime",
      imageSrc: "/images/Dante_Centric.png",
      detailPoints: [
        "Flawless audio transmission over IP",
        "Ultra-low latency performance",
        "Scalable for any enterprise AV system",
        "Seamless integration with existing Dante hardware"
      ]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Uncompromising Quality",
      description: "From crystal-clear audio to robust hardware, we prioritize performance and reliability in every product we design.",
      color: "from-emerald-400 to-emerald-500", // Light emerald gradient
      accent: "emerald",
      stat: "Professional Grade",
      imageSrc: "/images/Fidelity.png",
      detailPoints: [
        "Durable, long-lasting hardware",
        "Superior audio fidelity and clarity",
        "Rigorous testing and quality assurance",
        "Reliable performance in demanding environments"
      ]
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Simplified Solutions",
      description: "Our solutions are designed to be intuitive, user-friendly, and adaptable to your unique AV system requirements.",
      color: "from-purple-400 to-purple-500", // Light purple gradient
      accent: "purple",
      stat: "Plug & Play",
      imageSrc: "/images/future3.png",
      detailPoints: [
        "Intuitive setup and configuration",
        "User-friendly control interfaces",
        "Customizable for unique system needs",
        "Reduced complexity, faster deployment"
      ]
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Future-Ready Technology",
      description: "Committed to staying ahead of the curve with products compatible with today's standards and ready for tomorrow's innovations.",
      color: "from-orange-400 to-orange-500", // Light orange gradient
      accent: "orange",
      stat: "Next-Gen Ready",
      imageSrc: "/images/future2.png",
      detailPoints: [
        "Compliant with industry standards",
        "Designed for long-term relevance",
        "Easily upgradeable architecture",
        "Adaptable to emerging AV technologies"
      ]
    }
  ];

  // useInView for the main content area to trigger its animations
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true, // This can remain true if you only want the whole section to fade in once
    threshold: 0.1,
  });

  // Removed the currentImageSrc and imageKey states and useEffect
  // We will directly use features[activeCard].imageSrc and rely on key prop for transitions

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-inter">
      {/* Google Fonts import for 'Inter' font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Background Gradient Shapes - subtle and light */}
      <div className="absolute inset-0 opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lightBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8"/> {/* Light Blue 100 */}
              <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.8"/> {/* Blue 200 */}
            </linearGradient>
            <linearGradient id="lightGrayGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F0F4F8" stopOpacity="0.6"/> {/* Cool Gray 100 */}
              <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.6"/> {/* Cool Gray 200 */}
            </linearGradient>
          </defs>
          <circle cx="10%" cy="20%" r="80" fill="url(#lightBlueGradient)" className="animate-pulse-slow" style={{ animationDelay: '0s' }} />
          <circle cx="80%" cy="50%" r="120" fill="url(#lightGrayGradient)" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <circle cx="30%" cy="90%" r="60" fill="url(#lightBlueGradient)" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <rect x="50%" y="10%" width="100" height="100" rx="20" ry="20" fill="url(#lightGrayGradient)" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        </svg>
      </div>

      {/* Main content container */}
      <div ref={contentRef} className="relative z-10 w-full px-4 md:px-8 lg:px-12 xl:px-24 py-24 sm:py-32 max-w-full mx-auto">
        {/* Premium Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-24 transform transition-all duration-1000 ${headerInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
         <h2 className="text-5xl lg:text-6xl font-light text-slate-800 mb-6 tracking-tight">
            Why Choose <span className="font-semibold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Resoundify</span> 
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6 font-light">
            Delivering cutting-edge audio-visual solutions that redefine how you connect,
            communicate, and create with industry-leading Dante technology and unparalleled innovation.
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-8 opacity-50"></div>
        </div>

        {/* New Layout: Side-by-Side Content and Image */}
        <div className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-700 ${contentInView ? 'opacity-100' : 'opacity-0'}`}>
          {/* Left Side: Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const { ref, inView } = useInView({
                threshold: 0.1,
              });

              const isActive = activeCard === index;

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`relative p-6 rounded-lg border border-gray-200 bg-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1
                                  ${isActive ? 'shadow-lg border-blue-400 transform -translate-y-1' : ''}
                                  ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-md`}>
                      {feature.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className={`text-xl font-semibold text-gray-800 ${isActive ? 'text-blue-600' : ''}`}>
                        {feature.title}
                      </h3>
                      <p className={`mt-2 text-gray-600 leading-relaxed text-sm ${isActive ? 'block' : 'hidden md:block'}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {isActive && (
                    <div className="mt-4 px-2 pt-2 border-t border-gray-100">
                      <ul className="space-y-2 text-sm">
                        {feature.detailPoints.map((point, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <button className="mt-6 inline-flex items-center px-5 py-2 border border-blue-400 rounded-full text-blue-600 font-medium text-sm hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                        Discover More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  )}
                  <div className={`absolute top-4 right-4 text-gray-300 text-3xl font-bold select-none transition-all duration-300
                                      ${isActive ? 'text-blue-200' : 'opacity-0 md:opacity-100'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Featured Image and Description for Active Card */}
          <div className="relative hidden lg:block rounded-lg overflow-hidden border border-gray-200 shadow-xl bg-white p-4">
            <div className="relative w-full h-80 rounded-md overflow-hidden bg-gray-100">
              {/* Simplified image handling */}
              <img
                key={activeCard} // Key changes when activeCard changes, forcing a re-render of the img and triggering CSS transition
                src={features[activeCard].imageSrc}
                alt={features[activeCard].title}
                // Tailwind CSS transition classes applied directly for fade effect
                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-100"
              />
            </div>

            <div className="p-6 text-gray-800">
              <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-600 mb-3 shadow-sm">
                {features[activeCard].stat}
              </span>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                {features[activeCard].title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {features[activeCard].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyResoundify;