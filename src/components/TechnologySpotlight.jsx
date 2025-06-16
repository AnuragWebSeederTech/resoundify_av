import React, { useState, useEffect, useRef } from 'react';
import { 
  Network, 
  Zap, 
  Clock, 
  Shield, 
  ArrowRight, 
  Play, 
  Pause,
  Settings,
  Radio,
  Cpu,
  ChevronDown,
  Maximize2,
  BarChart3
} from 'lucide-react';

const DanteTechnologySpotlight = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [networkActivity, setNetworkActivity] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle features
    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 4000);

    // Generate network activity animation
    const activityInterval = setInterval(() => {
      setNetworkActivity(prev => [
        ...prev.slice(-8),
        {
          id: Date.now(),
          intensity: Math.random(),
          type: Math.random() > 0.5 ? 'input' : 'output'
        }
      ]);
    }, 500);

    return () => {
      clearInterval(featureInterval);
      clearInterval(activityInterval);
    };
  }, []);

  // Mouse tracking for advanced interactions
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const danteFeatures = [
    {
      icon: <Network className="w-10 h-10" />,
      title: "Network Audio Distribution",
      description: "Seamless audio transmission over standard Ethernet networks with automatic device discovery and configuration.",
      metric: "512+ Channels",
      color: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      accentColor: "blue"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Ultra-Low Latency",
      description: "Sub-millisecond latency performance ensuring perfect synchronization for live performances and broadcast.",
      metric: "<1ms Latency",
      color: "from-emerald-600 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      accentColor: "emerald"
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Intelligent Routing",
      description: "Advanced signal routing with real-time monitoring, automatic failover, and centralized control systems.",
      metric: "Zero Config",
      color: "from-purple-600 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      accentColor: "purple"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Enterprise Security",
      description: "Bank-level encryption with redundant pathways, fault tolerance, and comprehensive network monitoring.",
      metric: "99.9% Uptime",
      color: "from-orange-600 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      accentColor: "orange"
    }
  ];

  const networkNodes = [
    { id: 'input1', x: 15, y: 25, type: 'input', label: 'Console', active: true },
    { id: 'input2', x: 15, y: 45, type: 'input', label: 'Mics', active: true },
    { id: 'input3', x: 15, y: 65, type: 'input', label: 'Playback', active: false },
    { id: 'switch', x: 50, y: 45, type: 'switch', label: 'Dante Switch', active: true },
    { id: 'output1', x: 85, y: 25, type: 'output', label: 'Monitors', active: true },
    { id: 'output2', x: 85, y: 45, type: 'output', label: 'Main PA', active: true },
    { id: 'output3', x: 85, y: 65, type: 'output', label: 'Recording', active: false }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden" ref={containerRef}>
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Dynamic Grid with Mouse Interaction */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}
        ></div>
        
        {/* Sophisticated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_100%)]"></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-tr from-cyan-50/30 via-transparent to-indigo-50/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Animated Network Visualization Background */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="1"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          {/* Dynamic Flow Lines */}
          <path d="M 100,200 Q 400,150 600,200 Q 800,250 1100,200" stroke="url(#flowGradient)" strokeWidth="3" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,1000;0,1000" dur="8s" repeatCount="indefinite"/>
          </path>
          <path d="M 100,400 Q 400,350 600,400 Q 800,450 1100,400" stroke="url(#flowGradient)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dasharray" values="1000,1000;0,1000;1000,1000" dur="10s" repeatCount="indefinite"/>
          </path>
          <path d="M 100,600 Q 400,550 600,600 Q 800,650 1100,600" stroke="url(#flowGradient)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dasharray" values="500,1000;1000,0;500,1000" dur="12s" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        {/* Sophisticated Header */}
        <div className="text-center mb-24">
          <h1 className="text-7xl md:text-5xl font-extralight mb-8 tracking-tight text-gray-900 relative">
            <span className=''>Dante</span>
            <span className="font-bold pl-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
              Integration
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mt-12">
            Experience the future of audio networking with Resoundify's advanced Dante-enabled solutions
          </p>
        </div>

        {/* Advanced Content Layout */}
        <div className="grid lg:grid-cols-5 gap-12 mb-32">
          {/* Interactive Network Visualization - Takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="relative group">
              {/* Main Visualization Container */}
              <div className="bg-gradient-to-br from-gray-50/50 to-white border border-gray-200/60 rounded-3xl p-8 relative overflow-hidden backdrop-blur-sm">
                {/* Advanced Network Diagram */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl relative overflow-hidden cursor-pointer group"
                     onClick={() => setIsPlaying(!isPlaying)}>
                  
                  {/* Network Topology Visualization */}
                  <div className="absolute inset-0 p-8">
                    <svg className="w-full h-full" viewBox="0 0 500 300">
                      {/* Background Grid */}
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                        </pattern>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      
                      {/* Connection Lines with Animation */}
                      {networkNodes
                        .filter(node => node.type !== 'switch')
                        .map((node, index) => {
                          const switchNode = networkNodes.find(n => n.type === 'switch');
                          return (
                            <line
                              key={`connection-${index}`}
                              x1={node.x * 5}
                              y1={node.y * 3}
                              x2={switchNode.x * 5}
                              y2={switchNode.y * 3}
                              stroke={node.active ? '#3B82F6' : '#6B7280'}
                              strokeWidth="2"
                              opacity={node.active ? 0.8 : 0.3}
                              filter={node.active ? "url(#glow)" : "none"}
                            >
                              {node.active && (
                                <animate
                                  attributeName="stroke-opacity"
                                  values="0.3;1;0.3"
                                  dur={`${2 + index * 0.5}s`}
                                  repeatCount="indefinite"
                                />
                              )}
                            </line>
                          );
                        })}
                      
                      {/* Network Nodes */}
                      {networkNodes.map((node, index) => (
                        <g key={node.id}>
                          {/* Node Circle */}
                          <circle
                            cx={node.x * 5}
                            cy={node.y * 3}
                            r={node.type === 'switch' ? 16 : 12}
                            fill={
                              node.type === 'switch' 
                                ? '#3B82F6' 
                                : node.type === 'input' 
                                  ? node.active ? '#10B981' : '#6B7280'
                                  : node.active ? '#F59E0B' : '#6B7280'
                            }
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                            filter={node.active ? "url(#glow)" : "none"}
                          >
                            {node.active && (
                              <animate
                                attributeName="r"
                                values={`${node.type === 'switch' ? 16 : 12};${node.type === 'switch' ? 18 : 14};${node.type === 'switch' ? 16 : 12}`}
                                dur="3s"
                                repeatCount="indefinite"
                              />
                            )}
                          </circle>
                          
                          {/* Node Icon */}
                          <text
                            x={node.x * 5}
                            y={node.y * 3 + 1}
                            textAnchor="middle"
                            fill="white"
                            fontSize="8"
                            fontWeight="bold"
                          >
                            {node.type === 'switch' ? '◉' : node.type === 'input' ? '◐' : '◑'}
                          </text>
                          
                          {/* Node Label */}
                          <text
                            x={node.x * 5}
                            y={node.y * 3 - 25}
                            textAnchor="middle"
                            fill="rgba(255,255,255,0.9)"
                            fontSize="10"
                            fontWeight="500"
                          >
                            {node.label}
                          </text>
                          
                          {/* Activity Indicator */}
                          {node.active && (
                            <circle
                              cx={node.x * 5 + 8}
                              cy={node.y * 3 - 8}
                              r="3"
                              fill="#10B981"
                            >
                              <animate
                                attributeName="opacity"
                                values="0;1;0"
                                dur="1.5s"
                                repeatCount="indefinite"
                              />
                            </circle>
                          )}
                        </g>
                      ))}
                      
                      {/* Data Flow Animation */}
                      {networkActivity.slice(-3).map((activity, index) => (
                        <circle
                          key={activity.id}
                          r="2"
                          fill="#60A5FA"
                          opacity={activity.intensity}
                        >
                          <animateMotion
                            dur="2s"
                            repeatCount="1"
                            path="M 75,135 Q 250,120 250,135 Q 250,150 425,135"
                          />
                        </circle>
                      ))}
                    </svg>
                  </div>
                  
                  {/* Interactive Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-all duration-500">
                    <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl border border-white/20">
                      {isPlaying ? (
                        <Pause className="w-10 h-10 text-gray-800" />
                      ) : (
                        <Play className="w-10 h-10 text-gray-800 ml-1" />
                      )}
                    </div>
                  </div>

                  {/* Advanced Status Panel */}
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-semibold">Network Active</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
                      <div>
                        <div className="text-white font-semibold">Nodes: 7</div>
                        <div>Active: 5</div>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Latency</div>
                        <div>&lt;0.5ms</div>
                      </div>
                    </div>
                  </div>

                  {/* Expand Button */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors border border-white/10">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Network Description */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Real-Time Network Visualization
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Watch how Dante technology creates seamless connections between audio devices, 
                    enabling complex routing with simple network infrastructure and zero-configuration setup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Feature Cards - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Dante Advantages
              </h2>
              <p className="text-gray-600 text-lg">
                Revolutionary audio networking that transforms how professionals work
              </p>
            </div>
            
            {danteFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl border transition-all duration-700 cursor-pointer transform ${
                  activeFeature === index 
                    ? `bg-gradient-to-br ${feature.bgGradient} border-${feature.accentColor}-200 shadow-xl shadow-${feature.accentColor}-100/50 scale-105` 
                    : 'bg-white/70 border-gray-200/60 hover:border-gray-300/80 hover:shadow-lg backdrop-blur-sm'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex items-start gap-5">
                  {/* Advanced Icon Container */}
                  <div className={`relative p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white transition-all duration-500 ${
                    activeFeature === index ? 'scale-110 shadow-lg' : 'group-hover:scale-105'
                  }`}>
                    {feature.icon}
                    
                    {/* Icon Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-xl"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Metric Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 transition-all duration-300 ${
                      activeFeature === index 
                        ? `text-${feature.accentColor}-700 bg-${feature.accentColor}-100` 
                        : 'text-gray-500 bg-gray-100'
                    }`}>
                      <BarChart3 className="w-3 h-3" />
                      {feature.metric}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeFeature === index && (
                  <div className="absolute right-4 top-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-16 text-center relative overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-light mb-8 text-white">
                Experience the
                <span className="block font-bold text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                  Dante Difference
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Transform your audio infrastructure with Resoundify's comprehensive suite of 
                Dante-enabled products engineered for professional excellence.
              </p>
              
              <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 flex items-center gap-4 mx-auto overflow-hidden">
                <span className="relative z-10">Discover Dante-Enabled Products</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                
                {/* Advanced Button Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanteTechnologySpotlight;