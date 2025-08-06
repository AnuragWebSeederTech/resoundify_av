import React, { useState, useEffect } from 'react';

const ProductsHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    '/images/Products/all_in_one_processor/231127A_CLIMBER-2009 full input.webp',
    '/images/Products/all_in_one_processor/231127A_CLIMBER-2009 full range.webp', 
    '/images/Products/all_in_one_processor/CLIMBER-2009 front 2.webp',
    '/images/Products/av_over_ip_soln/StreamPro_HDN-EB100AT.webp', 
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-170 flex items-center justify-center overflow-hidden">
      {/* Background Images Container with Fade Transition */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out
              ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        {/* Semi-transparent overlay to darken the overall background */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content - With a clear, semi-transparent background for readability */}
      <div className="relative z-10 text-center font-extrabold text-white px-8 py-10 rounded-2xl bg-black/0 mx-auto max-w-4xl transition-all duration-300">
        <h1 className="text-5xl md:text-7xl font-[Tilt_Neon] font-medium mb-6 leading-tight tracking-tighter mt-15">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Innovation</span>
        </h1>
        <p className="text-xl md:text-xl font-[Exo_2] opacity-90 max-w-3xl mx-auto leading-relaxed">
          Discover Resoundify's cutting-edge audio-visual solutions. Each product is engineered for unparalleled performance, seamlessly integrating with your vision.
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;