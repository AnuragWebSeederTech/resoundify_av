// TechnologySpotlight.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const TechnologySpotlight = () => {
  // Define refs and inView status for each section/element you want to animate
  const [headerRef, headerInView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.3, // Percentage of element in view to trigger
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [videoRef, videoInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [pointersRef, pointersInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust threshold as needed for these smaller items
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Define animation variants
  const fadeInRise = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };


  return (
    <section
      className="w-full py-12 md:py-16 lg:py-20 font-sans relative overflow-hidden"
      style={{
        color: '#1A202C' // Default dark text for light theme
      }}
    >
      {/* Ensure Inter font is loaded for consistency */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Background Image with Black Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/Dante_Centric.png')` // Placeholder image URL
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Adjust opacity for desired darkness */}
      </div>


      {/* Main content div, now wider and with adjusted padding */}
      <div className="w-[90%] max-w-7xl mx-auto px-4 sm:px-8 lg:px-0 relative z-10">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeInRise}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight text-shadow-blue">
            Technology Spotlight <br className="md:hidden" /> (Dante Integration)
          </h2>
          <p className="mt-4 text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Unleashing the power of seamless audio networking with cutting-edge technology.
          </p>
        </motion.div>

        {/* Main Content Grid: About (Left) and Video (Right) */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          {/* About Text Content (Left) */}
          <motion.div
            ref={aboutRef}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInRise}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Benefits of <span className="text-blue-300">Dante Technology</span>
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Dante is the leading solution for digital audio networking, delivering
              uncompressed, multi-channel digital media via standard Ethernet networks
              with near-zero latency and perfect synchronization. It simplifies system
              setup, eliminates bulky analog cabling, and provides superior sound quality.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              <span className="font-semibold text-blue-300">Resoundify</span> leverages
              Dante to provide unparalleled flexibility and scalability in audio
              installations. This integration ensures our products offer a robust,
              future-proof, and high-performance audio solution for any environment,
              from professional studios to large-scale venues.
            </p>
          </motion.div>

          {/* Visual Content Placeholder (Right) */}
          <motion.div
            ref={videoRef}
            initial="hidden"
            animate={videoInView ? "visible" : "hidden"}
            variants={scaleIn}
            className="relative group overflow-hidden rounded-2xl shadow-xl border border-blue-500 aspect-video bg-blue-700 flex items-center justify-center transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
          >
            <img
              src="https://placehold.co/600x400/BFDBFE/1E3A8A?text=Dante+Integration+Video"
              alt="Dante Integration Video Placeholder"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/600x400/BFDBFE/1E3A8A?text=Video+Loading+Failed'; }}
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Play icon SVG */}
              <svg className="h-20 w-20 text-blue-300 transform hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
            <p className="absolute bottom-4 left-4 text-xs text-blue-100 bg-blue-900 px-3 py-1 rounded-full opacity-80">
              Placeholder for Video / Infographic
            </p>
          </motion.div>
        </div>

        {/* Two Pointers Per Line Section */}
        <motion.div
          ref={pointersRef}
          initial="hidden"
          animate={pointersInView ? "visible" : "hidden"}
          variants={fadeIn} // Using a simple fade-in for the container
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-10"
        >
          {/* Pointer 1: Effortless Setup & Management */}
          <motion.div variants={fadeInRise} className="flex items-start space-x-4 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md border border-gray-700 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl group">
            <div className="flex-shrink-0">
              {/* Checkmark icon SVG */}
              <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">Effortless Setup & Management</h4>
              <p className="mt-1 text-gray-200">Dante simplifies complex audio networks, making installation and configuration straightforward.</p>
            </div>
          </motion.div>

          {/* Pointer 2: Superior Sound Quality */}
          <motion.div variants={fadeInRise} className="flex items-start space-x-4 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md border border-gray-700 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl group">
            <div className="flex-shrink-0">
              {/* Lightning bolt icon SVG */}
              <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">Superior Sound Quality</h4>
              <p className="mt-1 text-gray-200">Experience pristine, uncompressed audio with Dante's high-fidelity transmission.</p>
            </div>
          </motion.div>

          {/* Pointer 3: Unmatched Scalability */}
          <motion.div variants={fadeInRise} className="flex items-start space-x-4 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md border border-gray-700 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl group">
            <div className="flex-shrink-0">
              {/* Code icon SVG */}
              <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">Unmatched Scalability</h4>
              <p className="mt-1 text-gray-200">Easily expand your audio system without complex re-cabling or compatibility issues.</p>
            </div>
          </motion.div>

          {/* Pointer 4: Future-Proof & Flexible */}
          <motion.div variants={fadeInRise} className="flex items-start space-x-4 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md border border-gray-700 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl group">
            <div className="flex-shrink-0">
              {/* Dots/connectivity icon SVG */}
              <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM12 21c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2zM12 3c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM12 14c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2z"></path></svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">Future-Proof & Flexible</h4>
              <p className="mt-1 text-gray-200">Stay ahead with an adaptable platform ready for tomorrow's audio demands.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={scaleIn}
          className="text-center mt-16"
        >
          <button className="group relative inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 p-0.5 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 glow-on-hover-blue-light">
            <span className="absolute h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-blue-900 px-8 py-3 text-lg transition-all duration-300 group-hover:bg-transparent">
              Discover Dante-Enabled Products
              <svg className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Custom CSS for text shadow and glow effect */}
      <style>{`
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* Adjusted text shadow for dark theme */
        .text-shadow-blue {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.3);
        }

        /* New glow effect for the CTA button, for a lighter blue shade */
        .glow-on-hover-blue-light {
          position: relative;
          z-index: 1;
        }
        .glow-on-hover-blue-light:before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #60a5fa, #3b82f6, #60a5fa); /* Blue-400, Blue-500 */
          background-size: 400% 400%;
          filter: blur(8px);
          opacity: 0;
          transition: opacity .3s ease-in-out;
          border-radius: 9999px; /* Matches rounded-full */
          z-index: -1;
        }
        .glow-on-hover-blue-light:hover:before {
          opacity: 1;
          animation: glowing-blue-light 8s linear infinite;
        }
        @keyframes glowing-blue-light {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default TechnologySpotlight;