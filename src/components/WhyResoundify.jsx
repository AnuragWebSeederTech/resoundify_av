import React from 'react';

const WhyResoundify = () => {
  const features = [
    {
      id: 1,
      title: "Dante Integration",
      description: "Seamless Dante integration for flawless AV transmission. Ensures reliable, ultra-low latency audio.",
      image: "/images/why2.png", // Image related to networking/integration
      imagePosition: "top"
    },
    {
      id: 2,
      title: "Crystal-Clear Audio",
      description: "Delivers crystal-clear, professional-grade audio. Guarantees noise-free transmission over IP networks.",
      image: "/images/why1.png", // Image related to clear audio/sound waves
      imagePosition: "bottom"
    },
    {
      id: 3,
      title: "Ultra-Low Latency",
      description: "Achieve ultra-low latency for all real-time applications. Optimized for minimal delay and rapid response.",
      image: "/images/Latency.png", // Image related to speed/real-time
      imagePosition: "top"
    },
    {
      id: 4,
      title: "Highly Scalable",
      description: "Highly scalable for any enterprise AV system. Supports hundreds of channels with flexible architecture.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11677?w=500&h=400&fit=crop", // Image related to scalability/growth
      imagePosition: "bottom"
    },
    {
      id: 5,
      title: "Guaranteed Uptime",
      description: "Guaranteed 99.9% uptime with enterprise-grade reliability. Supported by redundant systems and 24/7 monitoring.",
      image: "/images/why5.png", // Image related to reliability/uptime
      imagePosition: "top"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-blue-200">
      <div className="w-[90%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Choose Resoundify?
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Discover our comprehensive suite of advanced audio-visual solutions designed to transform your communication experience with cutting-edge technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image on top layout */}
              {feature.imagePosition === 'top' && (
                <>
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
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

              {/* Text on top layout */}
              {feature.imagePosition === 'bottom' && (
                <>
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {feature.description}
                    </p>
                    <button className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors flex items-center group">
                      Learn more
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyResoundify;