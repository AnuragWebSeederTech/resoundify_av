import React from 'react';

// Icons (optional, can be replaced)
import { FaMicrophone, FaCheckCircle, FaCogs, FaRocket } from 'react-icons/fa';

const features = [
  {
    title: 'Dante-Centric Innovation',
    description: 'Our products seamlessly integrate with Dante, ensuring flawless audio transmission, low latency, and unmatched scalability.',
    icon: FaMicrophone, // Passing component reference instead of JSX for easier prop passing if needed
  },
  {
    title: 'Uncompromising Quality',
    description: 'From crystal-clear audio to robust hardware, we prioritize performance and reliability in every product.',
    icon: FaCheckCircle,
  },
  {
    title: 'Simplified Solutions',
    description: 'Our solutions are designed to be intuitive, user-friendly, and adaptable to your needs.',
    icon: FaCogs,
  },
  {
    title: 'Future-Ready Technology',
    description: 'We stay ahead of the curve, offering products compatible with today’s standards and tomorrow’s innovations.',
    icon: FaRocket,
  },
];

const WhyResoundify = () => {
  return (
    // Background remains white, but the cards will use a refined subtle background
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 tracking-wide">
        Why Resoundify?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"> {/* Adjusted to 4 columns for desktop */}
        {features.map((feature, index) => (
          <div
            key={index}
            // Background changed to a very subtle light grey for the cards.
            // Adjusted padding to standard Tailwind values (e.g., py-12 px-8).
            // Adjusted mb for title to be a bit smaller.
            className="flex flex-col items-center justify-center py-12 px-8 bg-gray-50 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center"
          >
            {/* Icon color updated to the consistent brand accent color (indigo-600) */}
            {React.createElement(feature.icon, { className: "text-5xl mb-6 text-indigo-600" })}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3> {/* Reduced font size and mb for better balance */}
            <p className="text-lg text-gray-600">{feature.description}</p> {/* Adjusted font size */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyResoundify;