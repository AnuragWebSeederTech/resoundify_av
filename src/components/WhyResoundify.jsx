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
      stat: "99.9% Uptime"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Uncompromising Quality",
      description: "From crystal-clear audio to robust hardware, we prioritize performance and reliability in every product we design.",
      color: "from-emerald-600 via-green-500 to-teal-500",
      bgColor: "from-emerald-50 via-green-25 to-teal-50",
      accent: "emerald",
      stat: "Professional Grade"
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Simplified Solutions",
      description: "Our solutions are designed to be intuitive, user-friendly, and adaptable to your unique AV system requirements.",
      color: "from-purple-600 via-violet-500 to-indigo-500",
      bgColor: "from-purple-50 via-violet-25 to-indigo-50",
      accent: "purple",
      stat: "Plug & Play"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Future-Ready Technology",
      description: "Committed to staying ahead of the curve with products compatible with today's standards and ready for tomorrow's innovations.",
      color: "from-orange-600 via-red-500 to-pink-500",
      bgColor: "from-orange-50 via-red-25 to-pink-50",
      accent: "orange",
      stat: "Next-Gen Ready"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-tr from-emerald-200/30 via-cyan-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-200/25 via-pink-200/15 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        {/* Premium Header Section */}
        <div className={`text-center mb-32 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Main Title with Advanced Typography */}
          <h1 className="relative">
            <span className="text-5xl md:text-5xl font-extralight tracking-tight text-gray-900 pr-3">
                Why Choose
            </span>
            <span className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent relative">
                Resoundify?
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-8 font-light">
            Delivering cutting-edge audio-visual solutions that redefine how you connect, 
            communicate, and create with industry-leading Dante technology and unparalleled innovation.
          </p>
        </div>

        {/* Premium Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-10 bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 hover:border-gray-300/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/30 hover:-translate-y-3 cursor-pointer transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Dynamic Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping"></div>
              </div>
              
              {/* Icon with Advanced Styling */}
              <div className="relative z-10">
                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                  {feature.icon}
                  {/* Icon shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold text-${feature.accent}-700 bg-${feature.accent}-100 rounded-full`}>
                    {feature.stat}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-5 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-gray-500 group-hover:text-gray-700 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Card Number */}
              <div className="absolute top-8 right-8 text-6xl font-black text-gray-100 group-hover:text-gray-200 transition-colors select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default WhyResoundify;