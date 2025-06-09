import React from 'react';
import { FaNetworkWired, FaVolumeUp, FaExpandAlt, FaRocket } from 'react-icons/fa'; // More specific icons

const keyFeatures = [
  {
    title: 'Seamless Dante Integration',
    description: 'Our products connect easily over standard network cables, ensuring flawless audio transmission and simplified setup.',
    icon: FaNetworkWired, // Using FaNetworkWired for integration
  },
  {
    title: 'Uncompromising Quality',
    description: 'Experience top-notch sound and visuals, as we prioritize crystal-clear audio and robust hardware in every solution.',
    icon: FaVolumeUp, // Using FaVolumeUp for audio/visual quality
  },
  {
    title: 'Scalable Solutions',
    description: 'Our systems are designed to adapt, working perfectly for small meeting rooms and expanding seamlessly to large concert halls alike.',
    icon: FaExpandAlt, // Using FaExpandAlt for scalability
  },
  {
    title: 'Future-Ready Technology',
    description: 'Stay ahead with cutting-edge products built to remain relevant and compatible as audio-visual technology evolves.',
    icon: FaRocket, // Using FaRocket for future-ready
  },
];

const KeyFeaturesGrid = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-800"> {/* Light grey background for contrast */}
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 tracking-wide">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {keyFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-12 px-8 bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center"
          >
            {/* Icon color set to primary accent color */}
            {React.createElement(feature.icon, { className: "text-5xl mb-6 text-indigo-600" })}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
            <p className="text-lg text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeaturesGrid;