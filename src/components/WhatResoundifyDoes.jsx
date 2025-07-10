import React, { useEffect, useRef, useState } from 'react';
import { Network, Monitor, Cable, CheckCircle, Zap, ArrowRight, Target, Globe } from 'lucide-react';

export default function WhatResoundifyDoes() {
  const sectionRef = useRef(null);
  // We don't necessarily need isVisible state if we only animate once.
  // We'll use a ref to track if the animations have already played.
  const animationsPlayed = useRef(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationsPlayed.current) {
            // Only trigger animations if intersecting AND they haven't played yet
            animationsPlayed.current = true; // Mark as played
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el) => {
              const index = parseInt(el.dataset.animate, 10);
              // Only add to the set if it's not already there
              if (!animatedElements.has(index)) {
                setTimeout(() => {
                  setAnimatedElements(prev => new Set([...prev, index]));
                }, index * 100);
              }
            });
            obs.disconnect(); // Stop observing once animations are triggered
          }
          // No 'else' block needed here if we want one-time animation
          // The elements will stay visible due to the CSS classes
        });
      },
      { threshold: 0.15, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function: disconnect observer if component unmounts before animation plays
    return () => observer.disconnect();
  }, []); // Empty dependency array: Effect runs once on mount

  console.log("WhatResoundifyDoes Rendered");
  return (
    // Main section container with a light background using specified colors
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-cyan-50 to-white py-8 lg:py-12 overflow-hidden">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            animatedElements.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-animate={0}
        >
          {/* Heading Font (for H1, H2): Tilt Neon applied here */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }} // Only kept textShadow
          >
            What <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">Resoundify</span> Delivers
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Professional audio networking solutions engineered for enterprise excellence
          </p>
          <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10 lg:mb-20">

          {/* Network Architecture Card */}
          <div
            className={`group relative transition-all duration-1000 ${
              animatedElements.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-animate={1}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-slate-300 hover:bg-slate-100 transition-all duration-500 hover:shadow-xl hover:shadow-slate-300/30 hover:-translate-y-2">
              <div className="absolute inset-0 bg-rose-100 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light lg:font-semibold text-slate-900 mb-4">Network Architecture</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Enterprise-grade Dante network design and implementation for seamless audio distribution across complex infrastructures.
                </p>
                <div className="flex items-center text-slate-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* System Integration Card */}
          <div
            className={`group relative transition-all duration-1000 delay-100 ${
              animatedElements.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-animate={2}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-slate-300 hover:bg-slate-100 transition-all duration-500 hover:shadow-xl hover:shadow-slate-300/30 hover:-translate-y-2">
              <div className="absolute inset-0 bg-amber-100 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Cable className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light lg:font-semibold text-slate-900 mb-4">Future-Ready Technology</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Products are designed to be compatible with current standards and prepared for future innovations, ensuring long-term relevance.
                </p>
                <div className="flex items-center text-slate-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">View Integration</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* 24/7 Monitoring Card */}
          <div
            className={`group relative transition-all duration-1000 delay-200 ${
              animatedElements.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-animate={3}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-slate-300 hover:bg-slate-100 transition-all duration-500 hover:shadow-xl hover:shadow-slate-300/30 hover:-translate-y-2">
              <div className="absolute inset-0 bg-indigo-100 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light lg:font-semibold text-slate-900 mb-4">24/7 Monitoring</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Continuous system monitoring having proactive maintenance and expert technical support ensuring optimal performance.
                </p>
                <div className="flex items-center text-slate-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">Support Details</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics Section */}
        <div
          className={`group relative transition-all duration-1000 delay-[300ms] ${ // Adjusted delay for a smoother flow
            animatedElements.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-animate={4}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-slate-900 mb-4">Proven Excellence</h3>
            <p className="text-slate-600 text-lg">Performance metrics that matter</p>
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
                  className="group bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-slate-300
                             hover:bg-slate-800 hover:text-white hover:shadow-xl hover:shadow-slate-300/30 transition-all duration-500 hover:-translate-y-2
                             flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center
                                   group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow text-left">
                    <div className="text-2xl font-bold mb-1">
                      {metric.value}
                    </div>
                    <div className="text-md font-semibold mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs">
                      {metric.desc}
                    </div>
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