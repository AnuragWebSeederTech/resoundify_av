import React, { useRef, useEffect, useState } from 'react';
import { ShieldCheck, Settings, Award, Headset } from 'lucide-react'; // Icons for features

const Testimonial = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update isVisible state based on whether the section is intersecting
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section
      ref={sectionRef} // Attach the ref to the section
      className="font-inter py-2 sm:py-12 lg:py-12 overflow-hidden relative"
      style={{
        // Reverted to original light gradient
        background: 'linear-gradient(to bottom, #FFFFFF, #60A5FA)', // Light gradient from white to AliceBlue
        color: '#1A202C' // Default dark text for light theme
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <div className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

        {/* Centralized Value Proposition & Intro */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 leading-tight text-shadow-blue">
            Your Premier Partner in Professional Audio. Period.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            We're not just selling Dante-enabled products; we're delivering a complete ecosystem. Expect **unwavering reliability**, **cutting-edge innovation**, and **unparalleled customer focus**. Your audio, flawless every time.
          </p>

          {/* Client Satisfaction Rate - Prominently displayed */}
          <div className="flex items-center justify-center gap-6 bg-blue-50 py-4 px-6 rounded-lg shadow-md border border-blue-100 animate-pulse-light mx-auto max-w-sm">
            <span className="text-blue-800 text-4xl font-extrabold">99%</span>
            <p className="text-lg font-medium text-gray-700 text-left">
              Client Satisfaction <br /><span className="text-sm text-gray-500">Rated Excellent by Users</span>
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Feature 1: Reliability */}
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-blue-100 text-center transform transition duration-300 hover:scale-[1.02] hover:shadow-xl group">
            <ShieldCheck className="w-14 h-14 text-blue-700 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">Unwavering Reliability</h3>
            <p className="text-gray-700 text-base">
              Consistent, crystal-clear audio performance with our Dante-powered systems. Always.
            </p>
          </div>

          {/* Feature 2: Integration */}
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-blue-100 text-center transform transition duration-300 hover:scale-[1.02] hover:shadow-xl group">
            <Settings className="w-14 h-14 text-blue-700 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">Seamless Integration</h3>
            <p className="text-gray-700 text-base">
              Effortlessly connect our products with your existing AV infrastructure.
            </p>
          </div>

          {/* Feature 3: Expertise/Support */}
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-blue-100 text-center transform transition duration-300 hover:scale-[1.02] hover:shadow-xl group">
            <Award className="w-14 h-14 text-blue-700 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">Dedicated Expertise</h3>
            <p className="text-gray-700 text-base">
              Benefit from our deep industry knowledge and responsive technical assistance.
            </p>
          </div>

          {/* Feature 4: Partnership */}
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-blue-100 text-center transform transition duration-300 hover:scale-[1.02] hover:shadow-xl group">
            <Headset className="w-14 h-14 text-blue-700 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">True Partnership</h3>
            <p className="text-gray-700 text-base">
              Committed to your long-term success through proactive service and continuous innovation.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <a
            href="/about-us#our-philosophy" // Example link
            className="inline-flex items-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-md text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 glow-on-hover-blue-light"
          >
            Explore Our Commitment
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      {/* Custom CSS for animations and the glow effect */}
      <style>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Original animate-fade-in-up is now handled by the inline classes */
        /* .animate-fade-in-up {
           animation: fade-in-up 0.8s ease-out forwards;
           opacity: 0;
         }
         @keyframes fade-in-up {
           from { opacity: 0; transform: translateY(20px); }
           to { opacity: 1; transform: translateY(0); }
         } */

        /* Adjusted text shadow for light theme */
        .text-shadow-blue {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08), -1px -1px 2px rgba(0, 0, 0, 0.08);
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

        /* Animation for pulse effect (used on satisfaction rate circle) */
        .animate-pulse-light {
          animation: pulse-light 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-light {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); } /* Blue-500 */
          70% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); } /* Blue-500 */
        }
      `}</style>
    </section>
  );
};

export default Testimonial;