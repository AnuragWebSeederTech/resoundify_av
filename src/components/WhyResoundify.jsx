import React, { useState, useEffect } from 'react';
import { Shield, Settings, Cpu, Network, ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const WhyResoundify = () => {
  const [activeCard, setActiveCard] = useState(0); // Start with the first card active

  // useInView hook for the header section to animate its appearance on scroll
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Network className="w-10 h-10" />,
      title: "Dante-Centric Innovation",
      description: "Built to integrate seamlessly with Dante, ensuring flawless audio transmission, low latency, and unmatched scalability for your AV systems.",
      color: "from-slate-900 to-slate-700", // Dark gradient for icon background, from color palette
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
      color: "from-slate-700 to-slate-900", // Dark gradient for icon background, from color palette
      accent: "emerald",
      stat: "Professional Grade",
      imageSrc: "/images/Fidelity1.jpg",
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
      color: "from-slate-900 to-slate-700", // Dark gradient for icon background, from color palette
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
      color: "from-slate-700 to-slate-900", // Dark gradient for icon background, from color palette
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
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-inter">
      {/* Google Fonts import for 'Inter' font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Background Gradient Shapes - subtle and light, using existing palette */}
      <div className="absolute inset-0 opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lightSlateGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              {/* Changed to slate tones from the provided palette */}
              <stop offset="0%" stopColor="#F1F5F9" stopOpacity="0.8"/> {/* Slate 100 */}
              <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.8"/> {/* Slate 200 */}
            </linearGradient>
          </defs>
          {/* Using the new slate gradients for shapes */}
          <circle cx="10%" cy="20%" r="80" fill="url(#lightSlateGradient1)" className="animate-pulse-slow" style={{ animationDelay: '0s' }} />
          <circle cx="80%" cy="50%" r="120" fill="url(#lightSlateGradient2)" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <circle cx="30%" cy="90%" r="60" fill="url(#lightSlateGradient1)" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <rect x="50%" y="10%" width="100" height="100" rx="20" ry="20" fill="url(#lightSlateGradient2)" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        </svg>
      </div>

      {/* Main content container */}
      <div ref={contentRef} className="relative z-10 w-full px-4 md:px-8 lg:px-12 xl:px-24 py-24 sm:py-32 max-w-full mx-auto">
        {/* Premium Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-24 transform transition-all duration-1000 ${headerInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.05), 0 0 15px rgba(0, 0, 0, 0.03)' }}
          >
            Why Choose <span className="font-semibold bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">Resoundify</span> {/* Changed to slate-900 to slate-500 from palette */}
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed mt-6 font-light"> {/* Changed to slate-700 from palette */}
            Delivering cutting-edge audio-visual solutions that redefine how you connect,
            communicate, and create with industry-leading Dante technology and unparalleled innovation.
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8 opacity-50"></div> {/* Changed to slate-400 from palette */}
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
                  className={`relative p-6 rounded-lg border border-slate-300 bg-white/80 backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1
                              ${isActive ? 'shadow-lg border-slate-300 transform -translate-y-1' : ''} {/* Kept border-slate-300 for active */}
                              ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-md`}>
                      {feature.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className={`text-xl font-semibold text-slate-900 ${isActive ? 'text-slate-900' : ''}`}> {/* Changed to slate-900 */}
                        {feature.title}
                      </h3>
                      <p className={`mt-2 text-slate-700 leading-relaxed text-sm ${isActive ? 'block' : 'hidden md:block'}`}> {/* Changed to slate-700 */}
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {isActive && (
                    <div className="mt-4 px-2 pt-2 border-t border-gray-100">
                      <ul className="space-y-2 text-sm">
                        {feature.detailPoints.map((point, i) => (
                          <li key={i} className="flex items-center text-slate-700"> {/* Changed to slate-700 */}
                            <CheckCircle className="w-4 h-4 mr-3 text-slate-900 flex-shrink-0" /> {/* Changed to slate-900 */}
                            {point}
                          </li>
                        ))}
                      </ul>
                      <button className="mt-6 inline-flex items-center px-5 py-2 border border-slate-300 rounded-full text-slate-600 font-medium text-sm hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"> {/* Changed to slate-300 border and slate-600 text, hover bg-slate-100 */}
                        Discover More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  )}
                  <div className={`absolute top-4 right-4 text-slate-200 text-3xl font-bold select-none transition-all duration-300
                                  ${isActive ? 'text-slate-400' : 'opacity-0 md:opacity-100'}`}> {/* Changed to slate-400 */}
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Featured Image and Description for Active Card */}
          <div className="relative hidden lg:block rounded-lg overflow-hidden border border-slate-300 shadow-xl bg-white/80 p-4"> {/* Changed to slate-300 */}
            <div className="relative w-full h-120 rounded-md overflow-hidden bg-slate-100">
              <img
                key={activeCard}
                src={features[activeCard].imageSrc}
                alt={features[activeCard].title}
                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-100"
              />
            </div>

            <div className="p-6 text-slate-900"> {/* Changed to slate-900 */}
              <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-slate-100 text-slate-600 mb-3 shadow-sm"> {/* Changed to slate-100 bg and slate-600 text */}
                {features[activeCard].stat}
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-2"> {/* Changed to slate-900 */}
                {features[activeCard].title}
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed"> {/* Changed to slate-700 */}
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