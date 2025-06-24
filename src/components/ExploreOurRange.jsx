import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ExploreProductsSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full px-8 py-20 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-sans text-slate-900 leading-tight">
                  Unleash the{' '}
                  <span className="bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text font-semibold text-transparent">
                    Future
                  </span>{' '}
                  of Audio Excellence
                </h1>
                
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Discover our groundbreaking suite of Dante-enabled professional audio equipment. 
                  Engineered for unmatched clarity, unparalleled reliability, and limitless scalability, 
                  <span className="text-purple-500 font-semibold"> Resoundify</span> empowers visionaries 
                  to craft immersive sonic experiences.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-200/50">
                  <span className="flex items-center">
                    Explore Our Products
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Visual Side - Abstract Audio Visualization */}
            <div className="relative h-96 lg:h-[500px]">
              {/* Large central circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-60"></div>
              
              {/* Medium circles */}
              <div className="absolute top-16 left-16 w-32 h-32 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-20 right-12 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-50"></div>
              
              {/* Small accent circles */}
              <div className="absolute top-32 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute bottom-32 left-20 w-20 h-20 bg-purple-200 rounded-full opacity-60"></div>
              <div className="absolute top-20 left-1/2 w-12 h-12 bg-pink-200 rounded-full opacity-70"></div>
              
              {/* Subtle lines connecting elements */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="line2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#f3e8ff" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                <path d="M 80 80 Q 200 150 320 120" stroke="url(#line1)" strokeWidth="2" fill="none"/>
                <path d="M 300 300 Q 180 200 60 250" stroke="url(#line2)" strokeWidth="2" fill="none"/>
                <path d="M 200 50 Q 250 200 180 350" stroke="url(#line1)" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}