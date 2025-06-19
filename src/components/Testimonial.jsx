import React, { useRef, useEffect, useState } from 'react';
import { ShieldCheck, Settings, Award, Headset, Star } from 'lucide-react'; // Added Star icon for ratings

const testimonialsData = [
  {
    id: 1,
    name: 'Harikant Singh',
    handle: '@harikant_tw',
    avatar: 'https://via.placeholder.com/50/60a5fa/ffffff?text=HS', // Placeholder avatar
    content: "Absolutely blown away by the quality and support! Our audio setup has never been this robust. Their Dante solutions are truly next-level. Highly recommended for anyone serious about professional audio.",
    date: 'June 10, 2025',
    likes: 763,
    replies: 17,
  },
  {
    id: 2,
    name: 'Ankit Kashyap',
    handle: '@ankit_kashyap_tweets',
    avatar: 'https://via.placeholder.com/50/3b82f6/ffffff?text=AK', // Placeholder avatar
    content: "Excited to kick off my new journey with their systems! The integration was surprisingly smooth, and the performance is flawless. This is a game-changer for our live events.",
    date: 'June 21, 2025',
    likes: 336,
    replies: 8,
  },
  {
    id: 3,
    name: 'Shabunu',
    handle: '@Shabunu89',
    avatar: 'https://via.placeholder.com/50/2563eb/ffffff?text=S', // Placeholder avatar
    content: "Things have happened since joining them! From unwavering reliability to exceptional customer service, every interaction reinforces their commitment to excellence. Truly a premier partner.",
    date: 'July 17, 2025',
    likes: 127,
    replies: 5,
  },
  {
    id: 4,
    name: 'Nihar Hegde',
    handle: '@nihar_hegde',
    avatar: 'https://via.placeholder.com/50/1d4ed8/ffffff?text=NH', // Placeholder avatar
    content: "Just received my very first flawless payment system setup. The expertise and dedication are evident in every detail. My go-to for professional audio solutions from now on.",
    date: 'Aug 1, 2025',
    likes: 870,
    replies: 12,
  },
  {
    id: 5,
    name: 'Vineet',
    handle: '@vineetweb2',
    avatar: 'https://via.placeholder.com/50/1e40af/ffffff?text=V', // Placeholder avatar
    content: "Blessed to be a part of their ecosystem. Earned good returns from their products and got full-time offers due to the robust solutions they provide. A big thanks!",
    date: 'Aug 5, 2025',
    likes: 990,
    replies: 20,
  },
  {
    id: 6,
    name: 'Pranshu Soi',
    handle: '@pranshu22june',
    avatar: 'https://via.placeholder.com/50/0f316a/ffffff?text=PS', // Placeholder avatar
    content: "I am open to helping/informing talented folks in my network about their fantastic products. Their reliability and support are unmatched. Definitely recommend them to everyone!",
    date: 'June 20, 2025',
    likes: 627,
    replies: 10,
  },
];

const Testimonial = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="font-inter py-12 sm:py-16 lg:py-24 overflow-hidden relative"
      style={{
        background: 'linear-gradient(to bottom, #FFFFFF, #E0F2FE)', // Light gradient from white to light blue (AliceBlue equivalent)
        color: '#1A202C' // Default dark text for light theme
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <div className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

        {/* Centralized Value Proposition & Intro */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 leading-tight text-shadow-blue">
            What Our Customers Have to Say About Us
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Hear directly from the professionals and enthusiasts who trust our Dante-enabled products and unparalleled service. Their success stories are our greatest pride.
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

        {/* Customer Testimonials Section */}
        <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 text-shadow-blue">
                Voices of Our Satisfied Users
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 flex flex-col justify-between transform transition duration-300 hover:scale-[1.02] hover:shadow-xl group"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-blue-300" />
                <div>
                  <p className="font-bold text-blue-900 text-lg">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.handle}</p>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed mb-4 flex-grow">
                "{testimonial.content}"
              </p>
              <div className="border-t border-blue-100 pt-4 flex items-center justify-between text-gray-600 text-sm">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart mr-1 text-red-500">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                    {testimonial.likes}
                  </span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle mr-1 text-blue-500">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                    </svg>
                    {testimonial.replies}
                  </span>
                </div>
                <span className="text-gray-500">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <a
            href="/about-us#our-philosophy" // Example link
            className="inline-flex items-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-md text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 glow-on-hover-blue-light"
          >
            Discover Our Story
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      {/* Custom CSS for animations and the glow effect */}
      <style>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Adjusted text shadow for light theme */
        .text-shadow-blue {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08), -1px -1px 2px rgba(0, 0, 0, 0.08);
        }

        /* Standard shadow for hover on cards in light theme */
        .hover\\:shadow-xl:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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