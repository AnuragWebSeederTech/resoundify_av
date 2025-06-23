import React from 'react';
import { ArrowRight, Volume2, Waves, Headphones } from 'lucide-react';

export default function ResoundifyCommunity() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
                Hi. <span className="bg-gradient-to-r from-green-400 via-yellow-400 via-orange-400 via-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Welcome!</span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We shape the functionality, aesthetics, and overall user experience of a wide range of Audio-Visual products.
              </p>

              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-900">
                  Join the <span className="text-purple-600">Resoundify Community!</span>
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Resoundify, we believe in the power of sound to inspire, connect, and transform. 
                  Let us help you create audio-visual experiences that resonate. Explore our products, 
                  connect with our team, and experience the future of AV with Resoundify.
                </p>
                
                <p className="text-lg font-semibold text-gray-900">
                  <span className="text-purple-600">Resoundify</span> – Where Sound Meets Innovation.
                </p>
              </div>

              <div className="pt-4">
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
                  JOIN NOW!
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 relative overflow-hidden">
              {/* Main visual element */}
              <div className="relative z-10 flex flex-col items-center justify-center h-96">
                {/* Central sound wave visualization */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Volume2 className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-300 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-pink-300 animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>

                {/* Sound wave bars */}
                <div className="flex items-end space-x-2 mb-8">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div 
                      key={i}
                      className="bg-gradient-to-t from-purple-400 to-pink-400 rounded-full animate-pulse"
                      style={{ 
                        width: '6px',
                        height: `${Math.random() * 60 + 20}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1.5s'
                      }}
                    />
                  ))}
                </div>

                {/* Floating icons */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-blue-600" />
                </div>
                
                <div className="absolute top-16 right-12 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Waves className="w-5 h-5 text-green-600" />
                </div>
                
                <div className="absolute bottom-12 left-16 w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
              </div>

              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-transparent rounded-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200 to-transparent rounded-full opacity-50"></div>
              
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }, (_, i) => (
                    <div key={i} className="border border-gray-300"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}