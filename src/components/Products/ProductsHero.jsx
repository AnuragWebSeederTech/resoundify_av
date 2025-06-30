import React from 'react';

const ProductsHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-170 flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/productHero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="relative z-10 text-center text-white px-6">  
        <h1 className="text-5xl md:text-7xl text-black font-medium mb-6 leading-tight tracking-tighter font-[Tilt_Neon] mt-15">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Innovation</span>
        </h1>
        <p className="text-xl md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-10">
          Discover Resoundify's cutting-edge audio-visual solutions. Each product is engineered for unparalleled performance, seamlessly integrating with your vision.
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;
