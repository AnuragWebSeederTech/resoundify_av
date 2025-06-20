import React, { useState, useEffect, useRef } from 'react';

const MissionVisionValues = () => {
  const [activeSection, setActiveSection] = useState('mission');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState(null);
  const sectionRef = useRef(null);

  const coreData = {
    mission: {
      title: 'Our Mission',
      subtitle: 'Driving Purpose',
      content: 'To revolutionize professional audio-visual experiences through intelligent networking solutions that seamlessly integrate clarity, reliability, and innovation—empowering organizations to communicate, collaborate, and create without technological barriers.',
      highlight: 'Seamless Integration',
      metrics: ['99.9% Uptime', 'Zero Latency', 'Universal Compatibility'],
      // Changed to a blue-centric gradient
      color: 'from-blue-600 to-blue-800' 
    },
    vision: {
      title: 'Our Vision',
      subtitle: 'Future Focused',
      content: 'To be the global standard for intelligent AV infrastructure, where every space—from boardrooms to stadiums—operates with perfect audio-visual harmony through our pioneering Dante-enabled ecosystem and AI-driven optimization.',
      highlight: 'Global Standard',
      metrics: ['Market Leadership', 'Technological Innovation', 'Industry Transformation'],
      // Changed to a blue/purple gradient
      color: 'from-indigo-600 to-purple-800' 
    }
  };

  const values = [
    {
      id: 'innovation',
      title: 'Innovation Excellence',
      description: 'Pioneering breakthrough technologies that redefine industry standards and push the boundaries of what\'s possible in professional AV.',
      icon: '⚡',
      principles: ['Continuous R&D Investment', 'Emerging Technology Adoption', 'Patent Development'],
      impact: 'Technology Leadership',
      // Changed to blue gradient
      color: 'from-blue-500 to-blue-700' 
    },
    {
      id: 'reliability',
      title: 'Uncompromising Reliability',
      description: 'Engineering solutions with enterprise-grade dependability, ensuring mission-critical performance when it matters most.',
      icon: '🛡️',
      principles: ['Rigorous Testing Protocols', '24/7 System Monitoring', 'Redundant Architecture'],
      impact: 'Zero Downtime',
      // Changed to a sky/cyan gradient
      color: 'from-sky-500 to-cyan-700' 
    },
    {
      id: 'partnership',
      title: 'Strategic Partnership',
      description: 'Building lasting relationships through deep technical expertise, responsive support, and collaborative solution development.',
      icon: '🤝',
      principles: ['Client-Centric Design', 'Responsive Technical Support', 'Long-term Relationships'],
      impact: 'Customer Success',
      // Changed to blue gradient
      color: 'from-blue-400 to-blue-600' 
    },
    {
      id: 'sustainability',
      title: 'Sustainable Innovation',
      description: 'Developing environmentally conscious solutions that reduce energy consumption while maximizing performance efficiency.',
      icon: '🌱',
      principles: ['Energy Efficiency', 'Sustainable Materials', 'Circular Design'],
      impact: 'Environmental Impact',
      // Changed to a teal gradient (complements blue well)
      color: 'from-teal-500 to-teal-700' 
    },
    {
      id: 'excellence',
      title: 'Operational Excellence',
      description: 'Maintaining the highest standards in manufacturing, quality assurance, and service delivery across all touchpoints.',
      icon: '⭐',
      principles: ['Quality Management', 'Continuous Improvement', 'Performance Metrics'],
      impact: 'Quality Assurance',
      // Changed to indigo gradient
      color: 'from-indigo-500 to-indigo-700' 
    },
    {
      id: 'agility',
      title: 'Market Agility',
      description: 'Rapidly adapting to evolving industry needs with flexible solutions and responsive product development cycles.',
      icon: '🚀',
      principles: ['Rapid Prototyping', 'Market Responsiveness', 'Flexible Architecture'],
      impact: 'Market Leadership',
      // Changed to a deeper blue gradient
      color: 'from-blue-700 to-blue-900' 
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 lg:px-20 bg-gradient-to-br from-gray-50 via-slate-50 to-stone-50 min-h-[75vh] relative overflow-hidden"
    >
      {/* Background Elements - updated to use more blue-ish blurs */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-24"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <span className="text-sm font-serif text-slate-500 tracking-widest uppercase">Core Principles</span>
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-24"></div>
          </div>
          
          <h2 className="text-5xl font-sans text-slate-900 tracking-tight mb-6 leading-tight">
            Foundation
            <span className="block font-sans text-4xl text-slate-700 mt-2">& Future</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-sans">
            Our mission, vision, and values form the strategic foundation that drives innovation, 
            guides decision-making, and shapes our commitment to audio-visual excellence.
          </p>
        </div>

{/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-sans mb-24 max-w-7xl mx-auto">
          {Object.entries(coreData).map(([key, data], index) => (
            <div
              key={key}
              className={`group transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveSection(key)}
            >
              <div className={`relative bg-white border border-slate-200 rounded-2xl p-10 shadow-sm
                                  transition-all duration-500 transform hover:shadow-xl hover:border-slate-300 hover:scale-[1.02]
                                  ${activeSection === key ? 'shadow-lg border-slate-300 scale-[1.02]' : ''}
                                  h-[500px]  // <--- Add a fixed height here, adjust as needed
                                `}>

                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${data.color} flex items-center justify-center shadow-lg`}>
                      <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-500 uppercase tracking-wider block">
                        {data.subtitle}
                      </span>
                      <h3 className="text-3xl font-medium text-slate-900">
                        {data.title}
                      </h3>
                    </div>
                  </div>

                  <div className={`h-1 w-20 bg-gradient-to-r ${data.color} rounded-full`}></div>
                </div>

                {/* Content */}
                <p className="text-slate-700 leading-relaxed text-lg font-sans mb-8">
                  {data.content}
                </p>

                {/* Highlight */}
                <div className="mb-6">
                  <span className="text-sm font-sans text-slate-500 uppercase tracking-wider">
                    Key Focus
                  </span>
                  <div className={`inline-block ml-4 px-4 py-2 bg-gradient-to-r ${data.color} text-white text-sm font-sans rounded-full`}>
                    {data.highlight}
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3">
                  {data.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-sans rounded-full border border-slate-200"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-medium text-slate-900 mb-4">Core Values</h3>
            <p className="text-slate-600 text-lg font-sans max-w-3xl mx-auto">
              Six fundamental principles that guide our operations, innovation, and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.id}
                className={`group transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredValue(value.id)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className={`bg-white border border-slate-200 rounded-xl p-8 h-full shadow-sm 
                                 transition-all duration-300 transform hover:shadow-lg hover:border-slate-300 hover:scale-105 
                                 ${hoveredValue === value.id ? 'shadow-md border-slate-300 -translate-y-1' : ''}`}>
                  
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-medium text-slate-900 leading-tight">
                        {value.title}
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    {value.description}
                  </p>

                  {/* Principles */}
                  <div className="mb-6">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-3">
                      Key Principles
                    </span>
                    <div className="space-y-2">
                      {value.principles.map((principle, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-slate-600">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Impact
                    </span>
                    <div className={`inline-block ml-3 px-3 py-1 bg-gradient-to-r ${value.color} text-white text-xs font-sans rounded-full`}>
                      {value.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-12 border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-2xl font-medium text-slate-900 mb-4">
              Driven by Purpose, Delivered with Excellence
            </h4>
            <p className="text-slate-600 font-sans">
              These principles guide every decision, every innovation, and every partnership 
              as we continue to shape the future of professional audio-visual technology.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVisionValues;