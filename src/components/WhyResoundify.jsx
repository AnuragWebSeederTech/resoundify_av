import React, { useState, useEffect } from 'react';
import { Zap, Shield, Settings, Cpu, Volume2, Network, ArrowRight, Play, Pause } from 'lucide-react';

const WhyResoundify = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        {/* Premium Header Section */}
        <div className={`text-center mb-32 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-black mb-16">
            Why Choose <span className="text-blue-500">Resoundify</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-6 font-light">
            Delivering cutting-edge audio-visual solutions that redefine how you connect,
            communicate, and create with industry-leading Dante technology and unparalleled innovation.
          </p>
        </div>

        {/* Premium Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-10 bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 hover:border-gray-300/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/30 hover:-translate-y-2 cursor-pointer transform-gpu overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Image Layer - Prominent Zoom */}
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
                {/* ICON BLOCK - Now smoothly collapses */}
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

                  {/* Learn More Link - Text color changes on hover */}
                  <div className="flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 mt-6">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Card Number - THIS WILL NOW DISAPPEAR ON HOVER */}
                <div className={`absolute top-8 right-8 text-6xl font-black text-gray-100 select-none transition-all duration-300 
                                 ${activeCard === index ? 'opacity-0' : 'opacity-100'}`}> {/* Added opacity based on activeCard */}
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* No custom text shadows or complex 3D perspective needed here */
      `}</style>
    </div>
  );
};

export default WhyResoundify;