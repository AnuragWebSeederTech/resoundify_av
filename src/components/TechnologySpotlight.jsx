import { useState, useEffect } from "react"

export default function TechnologySpotlight() {
  const [activeNode, setActiveNode] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
      {/* Background Network Animation */}
      <div className="absolute inset-0 px-10 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          {/* Network Lines */}
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${10 + i * 12}%`}
              y1="20%"
              x2={`${20 + i * 12}%`}
              y2="80%"
              stroke="url(#networkGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-wide leading-tight">
            Technology{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Spotlight
            </span>
          </h2>
          <p className="text-xl md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the power of Dante technology and how Resoundify leverages it for superior audio networking
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dante Network Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Dante Network Architecture</h3>

              {/* Network Nodes */}
              <div className="relative h-80 flex items-center justify-center">
                {/* Central Hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="w-8 h-8 bg-white rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Surrounding Nodes */}
                {[...Array(6)].map((_, i) => {
                  const angle = i * 60 * (Math.PI / 180)
                  const radius = 120
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          activeNode === i
                            ? "bg-gradient-to-r from-cyan-400 to-indigo-400 scale-110 shadow-lg"
                            : "bg-gray-700"
                        }`}
                      >
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>

                      {/* Connection Line */}
                      <div
                        className={`absolute top-1/2 left-21 origin-left h-0.5 transition-all duration-500 ${
                          activeNode === i ? "bg-cyan-400 shadow-lg" : "bg-gray-600"
                        }`}
                        style={{
                          width: `${radius}px`,
                          transform: `translate(-50%, -50%) rotate(${angle + Math.PI}rad)`,
                        }}
                      />
                    </div>
                  )
                })}
              </div>

              {/* Status Indicators */}
              <div className="flex justify-center space-x-6 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm">Connected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-blue-400 text-sm">Transmitting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-purple-400 text-sm">Low Latency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50">
              <h3 className="text-3xl font-bold text-white mb-6">Dante Integration</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Explain the benefits of Dante technology and how Resoundify leverages it for superior performance,
                reliability, and scalability in professional audio environments.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  "Seamless Audio Networking",
                  "Low Latency Transmission",
                  "Scalable Architecture",
                  "Simplified Cabling",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity" />
                <span className="relative">Discover Dante-Enabled Products</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
