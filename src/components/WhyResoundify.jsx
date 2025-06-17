import React, { useState } from 'react';
import { Shield, Settings, Cpu, Network, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer'; // Import useInView

const WhyResoundify = () => {
  const [activeCard, setActiveCard] = useState(null);

  // useInView hook for the header section to animate its appearance on scroll
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true, // Animation triggers only once when it enters the viewport
    threshold: 0.1, // Triggers when 10% of the header is visible
  });

  const features = [
    {
      icon: <Network className="w-10 h-10" />,
      title: "Dante-Centric Innovation",
      description: "Built to integrate seamlessly with Dante, ensuring flawless audio transmission, low latency, and unmatched scalability for your AV systems.",
      color: "from-blue-600 via-blue-500 to-cyan-500",
      bgColor: "from-blue-50 via-blue-25 to-cyan-50",
      accent: "blue",
      stat: "99.9% Uptime",
      imageSrc: "/images/Dante_Centric.png"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Uncompromising Quality",
      description: "From crystal-clear audio to robust hardware, we prioritize performance and reliability in every product we design.",
      color: "from-emerald-600 via-green-500 to-teal-500",
      bgColor: "from-emerald-50 via-green-25 to-teal-50",
      accent: "emerald",
      stat: "Professional Grade",
      imageSrc: "/images/Fidelity.png"
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Simplified Solutions",
      description: "Our solutions are designed to be intuitive, user-friendly, and adaptable to your unique AV system requirements.",
      color: "from-purple-600 via-violet-500 to-indigo-500",
      bgColor: "from-purple-50 via-violet-25 to-indigo-50",
      accent: "purple",
      stat: "Plug & Play",
      imageSrc: "/images/future3.png"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Future-Ready Technology",
      description: "Committed to staying ahead of the curve with products compatible with today's standards and ready for tomorrow's innovations.",
      color: "from-orange-600 via-red-500 to-pink-500",
      bgColor: "from-orange-50 via-red-25 to-pink-50",
      accent: "orange",
      stat: "Next-Gen Ready",
      imageSrc: "/images/future2.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-inter">
      {/* Google Fonts import for 'Inter' font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Main content container: adjusted padding for wider horizontal coverage and increased vertical space */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 xl:px-24 py-24 sm:py-32">
        {/* Premium Header Section */}
        <div
          ref={headerRef} 
          className={`text-center mb-32 transform transition-all duration-1000 ${headerInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-black mb-16">
            Why Choose <span className="text-blue-500">Resoundify</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-6 font-light">
            Delivering cutting-edge audio-visual solutions that redefine how you connect,
            communicate, and create with industry-leading Dante technology and unparalleled innovation.
          </p>
        </div>

        {/* Premium Features Grid: Increased gap between cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {features.map((feature, index) => {
            // useInView hook for each individual feature card to animate its appearance
            const { ref, inView } = useInView({
              triggerOnce: true, // Each card animates only once when it enters the viewport
              threshold: 0.1, // Triggers when 10% of the card is visible
            });

            return (
              <div
                key={index}
                ref={ref} 
                className={`group relative p-12 bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 hover:border-gray-300/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/30 hover:-translate-y-2 cursor-pointer transform-gpu overflow-hidden
                         ${inView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} `} 
                style={{ transitionDelay: `${index * 100}ms` }} 
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Image Layer - Prominent Zoom on hover */}
                {/* This section remains exactly as you provided, ensuring the image zoom on hover */}
                <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                  <img
                    src={feature.imageSrc}
                    alt={feature.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${activeCard === index ? 'scale-115' : 'scale-100'}`}
                  />
                </div>

                {/* Dynamic Gradient Overlay - Appears and adjusts on hover */}
                <div className={`absolute inset-0 rounded-3xl z-[5] transition-all duration-700 ease-out
                                  ${activeCard === index
                                      ? 'opacity-100 bg-gradient-to-t from-black/80 via-black/30 to-transparent'
                                      : 'opacity-0 bg-gradient-to-t from-transparent via-transparent to-transparent'}`}
                ></div>

                {/* Initial Background Layer - Fades out on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-3xl z-[4] transition-opacity duration-500 ease-out
                                  ${activeCard === index ? 'opacity-0' : 'opacity-100'}`}></div>

                {/* Content - Ensure it's above all overlays */}
                <div className="relative z-10 flex flex-col justify-start h-full transition-all duration-300 ease-out">
                  {/* ICON BLOCK - Smoothly collapses on hover */}
                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg relative overflow-hidden transform-gpu
                                    transition-all duration-500
                                    ${activeCard === index ? 'opacity-0 scale-75 h-0 mb-0' : 'opacity-100 scale-100 h-auto mb-8'}`} style={{ willChange: 'opacity, transform, height, margin' }}>
                    {feature.icon}
                    {/* Icon shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>

                  {/* Content - Text color changes to white/light on hover for readability */}
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-200 transition-colors">
                      {feature.description}
                    </p>

                    {/* Learn More Link - Text color changes and slides on hover */}
                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 mt-6">
                      <span className="font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Card Number - Disappears on hover */}
                  <div className={`absolute top-8 right-8 text-6xl font-black text-gray-100 select-none transition-all duration-300
                                    ${activeCard === index ? 'opacity-0' : 'opacity-100'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyResoundify;