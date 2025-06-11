// AboutHero.js
import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative h-[65vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/aboutImages/aboutbg.webp')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-6xl font-bold tracking-wider uppercase">About</h1>
      </div>
    </section>
  );
};

export default AboutHero;