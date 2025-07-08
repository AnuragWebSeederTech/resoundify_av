import React from 'react';

// WhyResoundify Component: This section highlights the key reasons to choose Resoundify's solutions.
const WhyResoundify = () => {
  // Defines an array of features, each with a title, description, image path, and image position.
  // The 'imagePosition' determines whether the image appears above or below the text within its card.
  const features = [
    {
      id: 1,
      title: "Dante Integration",
      description: "Seamless Dante integration for flawless AV transmission. Ensures reliable, ultra-low latency audio.",
      image: "/images/why2.png", // Image related to networking/integration
      imagePosition: "top" // Image will be at the top of the feature card
    },
    {
      id: 2,
      title: "Crystal-Clear Audio",
      description: "Delivers crystal-clear, professional-grade audio. Guarantees noise-free transmission over IP networks.",
      image: "/images/WhyR2.jpg", // Image related to clear audio/sound waves
      imagePosition: "bottom" // Image will be at the bottom of the feature card
    },
    {
      id: 3,
      title: "Ultra-Low Latency",
      description: "Achieve ultra-low latency for all real-time applications. Optimized for minimal delay and rapid response.",
      image: "/images/WhyR3.png", // Image related to speed/real-time
      imagePosition: "top" // Image will be at the top of the feature card
    },
    {
      id: 4,
      title: "Highly Scalable",
      description: "Highly scalable for any enterprise AV system. Supports hundreds of channels with flexible architecture.",
      image: "/images/WhyR4.png", // Image related to scalability/growth
      imagePosition: "bottom" // Image will be at the bottom of the feature card
    }
  ];

  // Defines a separate object for the Call-to-Action (CTA) feature.
  // This content is used in a distinct section with a background image and overlay.
  const ctaFeature = {
    id: 5, // Unique ID for the CTA feature
    title: "Guaranteed Uptime", // Title for the CTA
    description: "Experience unparalleled reliability with Resoundify's guaranteed 99.9% uptime. Our enterprise-grade systems are backed by redundant infrastructure and 24/7 monitoring, ensuring your audio-visual communications are always online and performing flawlessly.",
  };

  return (
    // Main section container with a vertical gradient background.
    <section className="py-8 lg:py-12 bg-gradient-to-b from-gray-100 via-blue-200 to-white">
      <div className="w-[90%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Main heading for the section. Uses the 'Tilt Neon' font as remembered from user preferences. */}
          {/* Includes a gradient text effect for 'Resoundify' and subtle text shadows. */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: 'Tilt Neon, cursive', textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Why Choose <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">Resoundify</span>
          </h2>
          {/* Sub-paragraph providing an overview of the section. */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
            Discover our comprehensive suite of advanced audio-visual solutions designed to transform your communication experience with cutting-edge technology.
          </p>
          {/* Decorative horizontal line with a gradient. */}
          <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Features Grid */}
        {/* Lays out the individual feature cards in a responsive grid (1 column on small screens, 2 on large). */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
          {features.map((feature) => (
            // Individual feature card container.
            // Applies shadow, hover effects, and conditional border-radius based on image position.
            <div
              key={feature.id}
              className={`bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${feature.imagePosition === 'top' ? 'rounded-t-2xl' : 'rounded-b-2xl'}`}
            >
              {/* Renders content if imagePosition is 'top'. */}
              {feature.imagePosition === 'top' && (
                <>
                  {/* Image container for the 'top' position. */}
                  {/* Sets aspect ratio, overflow hidden, and rounded corners for the image. */}
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-700 rounded-t-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full p-5 h-80 object-cover hover:scale-115 transition-transform duration-300 rounded-t-4xl" // Image styling with hover scale effect
                    />
                  </div>
                  {/* Text content for the 'top' image position. */}
                  <div className="p-12">
                    <h3 className="text-3xl font-light lg:font-bold text-gray-900 mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    {/* Learn more button with an arrow icon that moves on hover. */}
                    <div className="mt-8">
                      <button className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors flex items-center group">
                        Learn more
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Renders content if imagePosition is 'bottom'. */}
              {feature.imagePosition === 'bottom' && (
                <>
                  {/* Text content for the 'bottom' image position. */}
                  <div className="p-12 ">
                    <h3 className="text-3xl font-light lg:font-bold text-gray-900 mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                      {feature.description}
                    </p>
                    {/* Learn more button with an arrow icon that moves on hover. */}
                    <button className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors flex items-center group">
                      Learn more
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  {/* Image container for the 'bottom' position. */}
                  {/* Sets aspect ratio, overflow hidden, and rounded corners for the image. */}
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-700 rounded-b-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full p-5 h-80 object-cover hover:scale-115 transition-transform duration-300 rounded-b-4xl" // Image styling with hover scale effect
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* --- */}

        {/* Independent CTA Section with Background Image and Overlay */}
        {/* This section emphasizes the uptime guarantee with a distinct visual style. */}
        <div
          className="w-full text-white p-12 text-center shadow-xl rounded-2xl relative overflow-hidden"
          style={{
            // backgroundImage: "url('/images/Uptime.png')", // IMPORTANT: Uncomment and update this path to your actual background image!
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(0, 0, 0, 0.6)' // Fallback color and for overlay if image has transparent areas
          }}
        >
          {/* Dark overlay for better text readability over the background. */}
          {/* Uses a gradient for a more dynamic look. */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-700 to-black opacity-70 rounded-lg z-0"></div>

          {/* Content of the CTA. Positioned relatively with a higher z-index to appear above the overlay. */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* CTA Heading with a smaller sub-headline for emphasis. */}
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              <span className="block text-blue-300 text-2xl font-semibold mb-2">Experience Unwavering Reliability</span>
              99.9% Uptime Guarantee
            </h2>
            {/* CTA description, using the content defined in `ctaFeature`. */}
            <p className="text-lg sm:text-lg lg:text-xl mb-10 max-w-4xl mx-auto leading-relaxed">
              {ctaFeature.description}
            </p>
            {/* Placeholder for a CTA button. Uncomment and customize if needed. */}
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 shadow-lg">
              Contact Us
            </button> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyResoundify; // Exports the WhyResoundify component for use in other parts of the application.