import React from 'react';
import { FaMicrophone, FaCheckCircle, FaCogs, FaRocket } from 'react-icons/fa';

const features = [
  {
    title: 'Dante-Centric <span class="text-indigo-400">Innovation</span>',
    description: 'Our products seamlessly integrate with Dante, ensuring flawless audio transmission, low latency, and unmatched scalability.',
    icon: FaMicrophone,
    imageUrl: '/images/dante.jpeg',
  },
  {
    title: 'Uncompromising <span class="text-indigo-400">Quality</span>',
    description: 'From crystal-clear audio to robust hardware, we prioritize performance and reliability in every product.',
    icon: FaCheckCircle,
    imageUrl: '/images/quality.avif',
  },
  {
    title: 'Simplified <span class="text-indigo-400">Solutions</span>',
    description: 'Our solutions are designed to be intuitive, user-friendly, and adaptable to your needs.',
    icon: FaCogs,
    imageUrl: '/images/meeting.jpeg',
  },
  {
    title: 'Future-Ready <span class="text-indigo-400">Technology</span>',
    description: 'We stay ahead of the curve, offering products compatible with today’s standards and tomorrow’s innovations.',
    icon: FaRocket,
    imageUrl: '/images/future2.png',
  },
];

const WhyResoundify = () => {
  return (
    // Section with background GIF and overlay
    <section
      className="relative py-24 px-8 text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/images/bgwhy.gif")', // **IMPORTANT: Replace with your actual GIF path**
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Makes the GIF parallax scroll
      }}
    >
      {/* Overlay for fading the GIF and ensuring text readability */}
      <div className="absolute inset-0 bg-indigo-950 opacity-95 z-0"></div> {/* Dark overlay */}

      {/* Main Heading (relative z-index to be above overlay) */}
      <h2 className="relative z-10 text-5xl md:text-6xl font-extrabold text-center mb-20 tracking-wide leading-tight">
        Why <span className="text-indigo-400">Resoundify</span>?
      </h2>
      <div className="relative z-10 max-w-7xl mx-auto space-y-24"> {/* Content container with z-index */}
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center justify-between gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          >
            {/* Image Half */}
            <div className="lg:w-1/2 w-full">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            {/* Text Content Half */}
            <div className="lg:w-1/2 w-full text-center lg:text-left p-6">
              {React.createElement(feature.icon, { className: "text-6xl mb-8 text-indigo-400 mx-auto lg:mx-0" })}
              <h3
                className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" // Updated text size and weight
                dangerouslySetInnerHTML={{ __html: feature.title }}
              />
              <p className="text-xl md:text-2xl leading-relaxed text-indigo-200 font-normal">{feature.description}</p> {/* Updated text size and weight */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyResoundify;