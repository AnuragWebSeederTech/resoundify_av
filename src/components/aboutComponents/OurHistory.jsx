import React, { useState, useEffect, useRef } from 'react';

const OurHistory = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const milestones = [
    {
      year: '2010',
      quarter: 'Q1',
      title: 'Foundation & Vision',
      description: 'Established Resoundify with a clear mandate: revolutionize professional audio-visual infrastructure through intelligent networking and superior signal integrity.',
      impact: 'Market Entry',
      technology: 'Core R&D',
      category: 'foundation'
    },
    {
      year: '2012',
      quarter: 'Q3',
      title: 'Dante Interface Launch',
      description: 'Released first-generation Dante-enabled interfaces, establishing early market presence in corporate and educational segments with proven interoperability.',
      impact: '150+ Early Adopters',
      technology: 'Dante Protocol',
      category: 'product'
    },
    {
      year: '2015',
      quarter: 'Q2',
      title: 'AV over IP Platform',
      description: 'Launched comprehensive AV over IP ecosystem, enabling unified multimedia distribution across enterprise networks with sub-millisecond latency.',
      impact: '500% Revenue Growth',
      technology: 'IP Networking',
      category: 'expansion'
    },
    {
      year: '2023',
      quarter: 'Q2',
      title: 'AI Integration',
      description: 'Deployed machine learning algorithms for predictive audio optimization, automatic gain structuring, and intelligent fault detection.',
      impact: '40% Efficiency Gain',
      technology: 'ML/AI Pipeline',
      category: 'innovation'
    },
    {
      year: '2025',
      quarter: 'Q2',
      title: 'Global Infrastructure',
      description: 'Continuing strategic expansion through key partnerships, next-gen product development, and emerging market penetration.',
      impact: 'Ongoing Growth',
      technology: 'Cloud Integration',
      category: 'current'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      foundation: 'from-blue-600 to-indigo-600',
      product: 'from-emerald-600 to-teal-600',
      expansion: 'from-purple-600 to-violet-600',
      recognition: 'from-amber-600 to-orange-600',
      market: 'from-red-600 to-pink-600',
      innovation: 'from-cyan-600 to-blue-600',
      current: 'from-slate-800 to-slate-900'
    };
    return colors[category] || 'from-gray-600 to-gray-700';
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 lg:px-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 min-h-[75vh] flex items-center relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.5) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="max-w-8xl mx-auto w-full relative z-10">
        
        {/* Executive Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-20"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <span className="text-sm font-mono text-slate-500 tracking-widest uppercase">Company Timeline</span>
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-20"></div>
          </div>
          
          <h2 className="text-6xl font-extralight text-slate-900 tracking-tight mb-6 leading-tight">
            Engineering
            <span className="block font-light text-5xl text-slate-700 mt-2">Excellence Since 2010</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Strategic milestones in building industry-leading audio-visual infrastructure solutions, 
            from foundational R&D to global market leadership through continuous technological innovation.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Timeline spine */}
          <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200"></div>
          
          {/* Progress indicator */}
          <div 
            className="absolute left-12 top-0 w-px bg-gradient-to-b from-slate-700 to-slate-500 transition-all duration-1000 ease-out"
            style={{ 
              height: isVisible ? `${((activeIndex + 1) / milestones.length) * 100}%` : '0%' 
            }}
          ></div>

          {/* Timeline entries */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative transition-all duration-500 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                
                {/* Timeline node */}
                <div className="absolute left-9 top-8 z-20">
                  <div className={`w-6 h-6 rounded-full border-3 border-white shadow-lg transition-all duration-300 bg-gradient-to-r ${getCategoryColor(milestone.category)} ${
                    activeIndex === index ? 'scale-125 shadow-xl' : 'scale-100'
                  }`}>
                    <div className="w-full h-full rounded-full bg-white opacity-20"></div>
                  </div>
                </div>

                {/* Content card */}
                <div className="ml-24 group">
                  <div className={`bg-white border border-slate-200 rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-slate-300 ${
                    activeIndex === index ? 'shadow-md border-slate-300' : ''
                  }`}>
                    
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-baseline gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-mono font-bold text-slate-800">
                            {milestone.year}
                          </span>
                          <span className="text-sm font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                            {milestone.quarter}
                          </span>
                        </div>
                        <div className="h-6 w-px bg-slate-300"></div>
                        <h3 className="text-2xl font-semibold text-slate-900 leading-tight">
                          {milestone.title}
                        </h3>
                      </div>
                      
                      {milestone.category === 'current' && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">
                            Active
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 leading-relaxed mb-6 font-light text-lg">
                      {milestone.description}
                    </p>

                    {/* Metrics row */}
                    <div className="flex items-center gap-8 pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-1">
                          Impact
                        </span>
                        <span className="text-sm font-semibold text-slate-800">
                          {milestone.impact}
                        </span>
                      </div>
                      <div className="h-8 w-px bg-slate-200"></div>
                      <div>
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-1">
                          Technology
                        </span>
                        <span className="text-sm font-semibold text-slate-800">
                          {milestone.technology}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance metrics */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
            {[
              { value: '15+', label: 'Years', sublabel: 'Market Leadership' },
              { value: '10K+', label: 'Installations', sublabel: 'Global Deployments' },
              { value: '50+', label: 'Countries', sublabel: 'International Presence' },
              { value: '70%', label: 'Efficiency', sublabel: 'Installation Reduction' }
            ].map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-extralight text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurHistory;