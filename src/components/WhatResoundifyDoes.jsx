import React, { useEffect, useRef, useState } from 'react';
import { Network, Monitor, Cable, CheckCircle, Zap, ArrowRight, Target, Globe } from 'lucide-react';

export default function WhatResoundifyDoes() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el, index) => {
              setTimeout(() => {
                setAnimatedElements(prev => new Set([...prev, index]));
              }, index * 100);
            });
          } else {
            setIsVisible(false);
            setAnimatedElements(new Set());
          }
        });
      },
      { threshold: 0.15, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 overflow-hidden">
      
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" stopOpacity="0.02"/>
              <stop offset="50%" stopColor="#334155" stopOpacity="0.03"/>
              <stop offset="100%" stopColor="#475569" stopOpacity="0.02"/>
            </linearGradient>
            <linearGradient id="accentGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.04"/>
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.06"/>
            </linearGradient>
            <pattern id="gridPattern" patternUnits="userSpaceOnUse" width="60" height="60">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
            <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="40" height="40">
              <circle cx="20" cy="20" r="1" fill="#3b82f6" opacity="0.1"/>
            </pattern>
          </defs>
          
          {/* Elegant flowing shapes */}
          <path 
            d="M0,300 C360,200 720,400 1440,250 L1440,0 L0,0 Z" 
            fill="url(#primaryGradient)"
          />
          <path 
            d="M0,500 C480,350 960,550 1440,400 L1440,800 L0,800 Z" 
            fill="url(#accentGradient)"
          />
          
          {/* Subtle grid overlay */}
          <rect width="100%" height="100%" fill="url(#gridPattern)"/>
          <rect width="100%" height="100%" fill="url(#dotPattern)"/>
          
          {/* Refined geometric elements */}
          <g opacity="0.08">
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={120 + (i * 120)}
                  cy={150 + Math.sin(i * 0.5) * 100}
                  r="3"
                  fill="#3b82f6"
                  className="animate-pulse"
                  style={{ 
                    animationDuration: `${4 + (i % 3)}s`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
                {i > 0 && (
                  <line
                    x1={120 + ((i-1) * 120)}
                    y1={150 + Math.sin((i-1) * 0.5) * 100}
                    x2={120 + (i * 120)}
                    y2={150 + Math.sin(i * 0.5) * 100}
                    stroke="#3b82f6"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                )}
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Floating accent elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/5 to-slate-500/5 transition-all duration-2000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 300}ms`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-animate
        >
          <h2 className="text-5xl lg:text-6xl font-light text-slate-800 mb-6 tracking-tight">
            What <span className="font-semibold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Resoundify</span> Delivers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Professional audio networking solutions engineered for enterprise excellence
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          
          {/* Network Architecture */}
          <div 
            className={`group relative transition-all duration-1000 ${
              animatedElements.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-animate
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Refined background pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-all duration-700" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="networkGrid" patternUnits="userSpaceOnUse" width="20" height="20">
                    <circle cx="10" cy="10" r="1" fill="#3b82f6"/>
                    <line x1="10" y1="10" x2="20" y2="10" stroke="#3b82f6" strokeWidth="0.3"/>
                    <line x1="10" y1="10" x2="10" y2="20" stroke="#3b82f6" strokeWidth="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#networkGrid)"/>
              </svg>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Network Architecture</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Enterprise-grade Dante network design and implementation for seamless audio distribution across complex infrastructures.
                </p>
                <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* System Integration */}
          <div 
            className={`group relative transition-all duration-1000 delay-100 ${
              animatedElements.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-animate
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-all duration-700" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cableGrid" patternUnits="userSpaceOnUse" width="30" height="30">
                    <path d="M5,15 C15,10 20,20 25,15" stroke="#64748b" strokeWidth="1" fill="none"/>
                    <circle cx="5" cy="15" r="1.5" fill="#64748b"/>
                    <circle cx="25" cy="15" r="1.5" fill="#64748b"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cableGrid)"/>
              </svg>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Cable className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">System Integration</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Comprehensive integration services connecting diverse audio systems through standardized Ethernet infrastructure.
                </p>
                <div className="flex items-center text-slate-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">View Integration</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Support & Monitoring */}
          <div 
            className={`group relative transition-all duration-1000 delay-200 ${
              animatedElements.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-animate
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-all duration-700" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="monitorGrid" patternUnits="userSpaceOnUse" width="25" height="25">
                    <rect x="8" y="8" width="9" height="6" stroke="#3b82f6" strokeWidth="0.5" fill="none"/>
                    <rect x="9" y="15" width="7" height="1" fill="#3b82f6" opacity="0.3"/>
                    <circle cx="12.5" cy="11" r="0.5" fill="#3b82f6"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#monitorGrid)"/>
              </svg>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">24/7 Monitoring</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Continuous system monitoring, proactive maintenance, and expert technical support ensuring optimal performance.
                </p>
                <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">Support Details</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Foundation */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-300 ${
            animatedElements.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-animate
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-slate-700 mb-4">Built on Industry Standards</h3>
            <p className="text-slate-500 text-lg">Professional audio networking foundation</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-200/50 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { name: "Dante Protocol", desc: "Core Technology" },
                { name: "Ethernet Standard", desc: "Network Infrastructure" },
                { name: "IP Transport", desc: "Data Delivery" },
                { name: "Scalable Design", desc: "Growth Ready" }
              ].map((tech, index) => (
                <div 
                  key={tech.name} 
                  className="group p-8 text-center border-r border-slate-200/50 last:border-r-0 hover:bg-white/80 transition-all duration-300"
                >
                  <div className="text-2xl font-semibold text-slate-700 mb-2 group-hover:text-blue-700 transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">
                    {tech.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div 
          className={`transition-all duration-1000 delay-400 ${
            animatedElements.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-animate
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-slate-700 mb-4">Proven Excellence</h3>
            <p className="text-slate-500 text-lg">Performance metrics that matter</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Projects Delivered", icon: Target, desc: "Successfully deployed worldwide" },
              { value: "99.8%", label: "System Uptime", icon: Zap, desc: "Industry-leading reliability" },
              { value: "50+", label: "Countries", icon: Globe, desc: "Global deployment reach" },
              { value: "24/7", label: "Support Coverage", icon: CheckCircle, desc: "Round-the-clock monitoring" }
            ].map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div 
                  key={metric.label} 
                  className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center border border-slate-200/50 hover:bg-white hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-sm text-slate-500">
                    {metric.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}