import React from 'react';

// Icons (optional, can be replaced)
import { FaMicrophone, FaCheckCircle, FaCogs, FaRocket } from 'react-icons/fa';

const features = [
  {
    title: 'Dante-Centric Innovation',
    description: 'Our products seamlessly integrate with Dante, ensuring flawless audio transmission, low latency, and unmatched scalability.',
    icon: <FaMicrophone className="text-4xl mb-4 text-gray-800" />,
  },
  {
    title: 'Uncompromising Quality',
    description: 'From crystal-clear audio to robust hardware, we prioritize performance and reliability in every product.',
    icon: <FaCheckCircle className="text-4xl mb-4 text-gray-800" />,
  },
  {
    title: 'Simplified Solutions',
    description: 'Our solutions are designed to be intuitive, user-friendly, and adaptable to your needs.',
    icon: <FaCogs className="text-4xl mb-4 text-gray-800" />,
  },
  {
    title: 'Future-Ready Technology',
    description: 'We stay ahead of the curve, offering products compatible with today’s standards and tomorrow’s innovations.',
    icon: <FaRocket className="text-4xl mb-4 text-gray-800" />,
  },
];

const WhyResoundify = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 tracking-wide">
        Why Resoundify?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center pt-30 pb-30 bg-gray-100 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {feature.icon}
            <h3 className="text-3xl font-semibold text-gray-800 mb-10 text-center">{feature.title}</h3>
            <p className="text-xl text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyResoundify;