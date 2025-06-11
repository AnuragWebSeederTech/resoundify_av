// About.jsx
import React from 'react';
import Header from '../components/Header'; // Adjust path if Header.js is in a different directory
import AboutHero from '../components/aboutComponents/AboutHero'; // Adjust path if AboutHero.js is in a different directory
import OurHistory from '../components/aboutComponents/OurHistory';
import MissionVisionValues from '../components/aboutComponents/MissionVisionValues';  
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="relative">
      <Header />
      <AboutHero />
      <OurHistory />
      <MissionVisionValues />
      <Footer />
      {/* Add more components as needed */}
    
    </div>
  );
};

export default About;