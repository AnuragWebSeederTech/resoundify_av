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
      impact: 'Innovation',
      // Changed to blue gradient
      color: 'from-blue-500 to-blue-700' 
    },
    {
      id: 'reliability',
      title: 'Uncompromising Reliability',
      description: 'Engineering solutions with enterprise-grade dependability, ensuring mission-critical performance when it matters most.',
      icon: '🛡️',
      principles: ['Rigorous Testing Protocols', '24/7 System Monitoring', 'Redundant Architecture'],
      impact: 'Reliability',
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

  // Intersection Observer to trigger animations when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );
    
    // If the sectionRef is present, observe it
    if (sectionRef.current) observer.observe(sectionRef.current);
    // Cleanup function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    // Primary Font (for entire site): Exo 2 applied here
    // Section wrapper with responsive padding and background
    <section 
      ref={sectionRef}
      className="py-12 px-4 md:py-20 md:px-6 lg:px-20 bg-gradient-to-br from-gray-50 via-slate-50 to-stone-50 min-h-screen relative overflow-hidden font-[Exo_2]"
    >
      {/* Background Elements - updated to use more blue-ish blurs */}
      {/* These elements create a subtle animated background effect */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          {/* Heading Font (for H1, H2): Tilt Neon applied here */}
          {/* Main title with responsive font sizes and a gradient effect */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[Tilt_Neon] text-slate-900 mb-4 md:mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Foundation <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">& Future</span>
          </h2>
          {/* Sub-headline with responsive text size */}
          <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed px-2">
            Our mission, vision, and values form the strategic foundation that drives innovation, guides decision-making, and shapes our commitment to audio-visual excellence.
          </p>
          {/* Decorative separator line */}
          <div className="w-56 md:w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-6 md:mt-8"></div>
        </div>

        {/* Mission & Vision Section */}
        {/* Responsive grid for mission and vision cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 font-sans mb-16 md:mb-24 max-w-7xl mx-auto">
          {Object.entries(coreData).map(([key, data], index) => (
            <div
              key={key}
              // Animation class based on visibility and transition delay
              className={`group transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveSection(key)}
              onMouseLeave={() => setActiveSection('none')} // Reset active section on mouse leave
            >
              {/* Individual Mission/Vision Card */}
              <div className={`relative bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm
                                transition-all duration-500 transform hover:shadow-xl hover:border-slate-300 hover:scale-[1.02]
                                ${activeSection === key ? 'shadow-lg border-slate-300 scale-[1.02]' : ''}
                                min-h-[450px] flex flex-col // Use flexbox for consistent height and content alignment
                              `}>

                {/* Header for the card */}
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    {/* Icon placeholder with dynamic gradient color */}
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${data.color} flex items-center justify-center shadow-lg`}>
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded opacity-80"></div>
                    </div>
                    <div>
                      {/* Subtitle */}
                      <span className="text-sm font-medium text-slate-500 uppercase tracking-wider block">
                        {data.subtitle}
                      </span>
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-medium text-slate-900">
                        {data.title}
                      </h3>
                    </div>
                  </div>
                  {/* Decorative line under the header */}
                  <div className={`h-1 w-16 md:w-20 bg-gradient-to-r ${data.color} rounded-full`}></div>
                </div>

                {/* Content */}
                <p className="text-slate-700 leading-relaxed text-base md:text-lg font-sans mb-6 md:mb-8 flex-grow"> {/* flex-grow to push metrics to bottom */}
                  {data.content}
                </p>

                {/* Highlight */}
                <div className="mb-4 md:mb-6">
                  <span className="text-xs md:text-sm font-sans text-slate-500 uppercase tracking-wider">
                    Key Focus
                  </span>
                  {/* Highlight tag with dynamic gradient color */}
                  <div className={`inline-block ml-2 md:ml-4 px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r ${data.color} text-white text-xs md:text-sm font-sans rounded-full`}>
                    {data.highlight}
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 md:gap-3 mt-auto"> {/* mt-auto pushes this to the bottom */}
                  {data.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 md:px-3 md:py-1 bg-slate-100 text-slate-700 text-xs md:text-sm font-sans rounded-full border border-slate-200"
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
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-12 md:mb-16">
            {/* Heading Font (for H1, H2): Tilt Neon applied here */}
            {/* Core Values main title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[Tilt_Neon] text-slate-900 mb-4 md:mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
            >
              Core <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">Values</span>
            </h2>
            {/* Sub-headline for values section */}
            <p className="text-base md:text-lg text-slate-600 font-sans max-w-3xl mx-auto px-2">
              Six fundamental principles that guide our operations, innovation, and commitment to excellence.
            </p>
            {/* Decorative separator line */}
            <div className="w-56 md:w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-6 md:mt-8"></div>
          </div>

          {/* Responsive grid for individual value cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.id}
                // Animation class based on visibility and transition delay
                className={`group transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredValue(value.id)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                {/* Individual Value Card */}
                <div className={`bg-white border border-slate-200 rounded-xl p-6 md:p-8 h-full shadow-sm flex flex-col // Use flexbox for consistent height and content alignment
                                  transition-all duration-300 transform hover:shadow-lg hover:border-slate-300 hover:scale-105 
                                  ${hoveredValue === value.id ? 'shadow-md border-slate-300 -translate-y-1' : ''}`}>
                  
                  {/* Icon & Title */}
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      {/* Value icon with dynamic gradient color */}
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                        {value.icon}
                      </div>
                      {/* Value title */}
                      <h4 className="text-lg md:text-xl font-medium text-slate-900 leading-tight">
                        {value.title}
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-4 md:mb-6 font-sans flex-grow"> {/* flex-grow to push principles/impact to bottom */}
                    {value.description}
                  </p>

                  {/* Principles */}
                  <div className="mb-4 md:mb-6">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-2 md:mb-3">
                      Key Principles
                    </span>
                    <div className="space-y-1 md:space-y-2">
                      {value.principles.map((principle, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-slate-400 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-slate-600">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="pt-3 md:pt-4 border-t border-slate-100 mt-auto"> {/* mt-auto pushes this to the bottom */}
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Impact
                    </span>
                    {/* Impact tag with dynamic gradient color */}
                    <div className={`inline-block ml-2 md:ml-3 px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r ${value.color} text-white text-xs font-sans rounded-full`}>
                      {value.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 md:pt-12 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-2">
            <h4 className="text-xl md:text-2xl font-medium text-slate-900 mb-3 md:mb-4">
              Driven by Purpose, Delivered with Excellence
            </h4>
            <p className="text-sm md:text-base text-slate-600 font-sans">
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
