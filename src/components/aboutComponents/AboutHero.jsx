// AboutHero.js
import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative h-[65vh] bg-cover bg-top" style={{ backgroundImage: "url('/images/aboutHero.png')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-7xl font-bold tracking-wider ">ABOUT</h1>
      </div>
    </section>
  );
};

export default AboutHero;