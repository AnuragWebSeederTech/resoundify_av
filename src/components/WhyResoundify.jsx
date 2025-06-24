import React, { useState } from 'react';

const ResoundifyFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      id: 1,
      title: "Dante-Centric Innovation",
      image: "/images/Dante_Centric.png",
      points: [
        "Built to integrate seamlessly with Dante",
        "Ensuring flawless audio transmission",
        "Low latency performance",
        "Unmatched scalability for AV systems"
      ],
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 2,
      title: "Flawless Audio Transmission",
      image: "/images/Transmission.png",
      points: [
        "Crystal-clear audio over IP networks",
        "Professional-grade signal processing",
        "Noise-free digital transmission",
        "Enterprise-level audio quality"
      ],
      color: "from-emerald-400 to-teal-500"
    },
    {
      id: 3,
      title: "Ultra-Low Latency",
      image: "/images/Latency.png",
      points: [
        "Real-time audio processing",
        "Minimal delay for live applications",
        "Optimized for performance",
        "Industry-leading response times"
      ],
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 4,
      title: "Enterprise Scalability",
      image: "/images/Scalable.png",
      points: [
        "Scalable for any enterprise AV system",
        "Supports hundreds of audio channels",
        "Flexible system architecture",
        "Future-proof technology stack"
      ],
      color: "from-purple-400 to-violet-500"
    },
    {
      id: 5,
      title: "99.9% Uptime Guarantee",
      image: "/images/Uptime.png",
      points: [
        "Enterprise-grade reliability",
        "Redundant system architecture",
        "24/7 monitoring and support",
        "Mission-critical performance"
      ],
      color: "from-rose-400 to-pink-500"
    }
  ];

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const currentFeature = features[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-700 to-black py-12 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="text-center mb-34">
 <h2 className="text-5xl lg:text-6xl font-sans text-slate-300 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Why choose <span className="font-semibold bg-gradient-to-br from-slate-900 to-slate-500 bg-clip-text text-transparent">Resoundify</span> ?
          </h2>          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of advanced audio-visual solutions designed to transform your communication experience with cutting-edge technology.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-36 mb-12">
          {/* Left Side - Round Image */}
          <div className="w-130 h-100 flex-shrink-0 mx-auto lg:mx-0">
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl group">
              <div className={`absolute inset-0 bg-gradient-to-br ${currentFeature.color} opacity-0 transition-opacity duration-500 group-hover:opacity-30`}></div>
              <img
                src={currentFeature.image}
                alt={currentFeature.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side - Points Container */}
          <div className="flex-1 max-w-2xl">
            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                {currentFeature.title}
              </h2>
              
              <div className="space-y-4">
                {currentFeature.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentFeature.color} mt-2 flex-shrink-0`}></div>
                    <p className="text-gray-100 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="flex justify-center ml-165 space-x-16">
          <button
            onClick={prevFeature}
            className="group px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 active:scale-95 border border-gray-700"
          >
            <span className="font-medium transition-colors duration-200">
              Previous
            </span>
          </button>

          <button
            onClick={nextFeature}
            className={`group px-8 py-4 bg-gradient-to-r ${currentFeature.color} text-white rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 active:scale-95`}
          >
            <span className="font-medium transition-all duration-200">
              Next
            </span>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentIndex
                  ? `bg-gradient-to-r ${currentFeature.color} shadow-lg`
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ResoundifyFeatures;