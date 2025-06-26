import React from 'react';

const ProductsHero = () => {
  return (
    // Primary Font (for entire site): Exo 2 applied here
    <section 
      className="relative text-white h-[65vh] py-55 px-6 lg:px-16 overflow-hidden shadow-lg bg-cover bg-center font-[Exo_2]"
      style={{ backgroundImage: `url('/images/productHero.png')` }} // Placeholder image path
    >
      <div className="absolute inset-0 bg-black opacity-30"></div> 

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Heading Font (for H1, H2): Tilt Neon applied here */}
        <h1 className="text-5xl md:text-7xl text-black font-medium mb-6 leading-tight tracking-tighter font-[Tilt_Neon]">
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
