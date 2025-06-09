import React from 'react';
import { FaNetworkWired, FaVolumeUp, FaExpandAlt, FaRocket } from 'react-icons/fa';

const keyFeatures = [
  {
    title: 'Seamless Dante <span class="text-indigo-400">Integration</span>',
    description: 'Our products connect easily over standard network cables, ensuring flawless audio transmission and simplified setup.',
    icon: FaNetworkWired,
    imageUrl: '/images/dante2.jpg', // Placeholder - **Replace with actual image paths**
  },
  {
    title: 'Uncompromising <span class="text-indigo-400">Quality</span>',
    description: 'Experience top-notch sound and visuals, as we prioritize crystal-clear audio and robust hardware in every solution.',
    icon: FaVolumeUp,
    imageUrl: '/images/quality.webp', // Placeholder - **Replace with actual image paths**
  },
  {
    title: 'Scalable <span class="text-indigo-400">Solutions</span>',
    description: 'Our systems are designed to adapt, working perfectly for small meeting rooms and expanding seamlessly to large concert halls alike.',
    icon: FaExpandAlt,
    imageUrl: '/images/meeting.jpeg', // Placeholder - **Replace with actual image paths**
  },
  {
    title: 'Future-Ready <span class="text-indigo-400">Technology</span>',
    description: 'Stay ahead with cutting-edge products built to remain relevant and compatible as audio-visual technology evolves.',
    icon: FaRocket,
    imageUrl: '/images/future2.png', // Placeholder - **Replace with actual image paths**
  },
];

const KeyFeaturesGrid = () => {
  return (
    // Solid dark background, matching ExploreOurRange
    <section className="py-24 px-8 bg-white text-black">
      <h2 className="text-5xl lg:text-6xl font-bold text-center mb-20 tracking-wide leading-tight">
        Key <span className="text-indigo-400">Features</span> {/* Accent color for dark theme */}
      </h2>
      {/* Changed to a responsive 2-column grid for larger boxes */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Changed to 2 columns on medium screens and up */}
        {keyFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-indigo-900 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out" // Increased padding for bigger box feel
          >
            {/* Image at the top of the card - Increased size for larger box */}
            <div className="w-full mb-8"> {/* Increased bottom margin */}
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-64 object-cover rounded-md shadow-md" // Increased image height
              />
            </div>
            
            {/* Icon */}
            {React.createElement(feature.icon, { className: "text-7xl mb-8 text-indigo-400" })} {/* Increased icon size */}
            
            {/* Title */}
            <h3
              className="text-4xl font-semibold text-white mb-4 leading-tight" // Adjusted title size for bigger box
              dangerouslySetInnerHTML={{ __html: feature.title }}
            />
            
            {/* Description */}
            <p className="text-xl leading-relaxed text-indigo-200">{feature.description}</p> {/* Adjusted description size for bigger box */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeaturesGrid;