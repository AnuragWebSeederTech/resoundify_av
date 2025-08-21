// About.jsx
import React from 'react';
import Header from '../components/Header'; // Adjust path if Header.js is in a different directory
import AboutHero from '../components/aboutComponents/AboutHero'; // Adjust path if AboutHero.js is in a different directory
// import OurHistory from '../components/aboutComponents/OurHistory';
import MissionVisionValues from '../components/aboutComponents/MissionVisionValues';  
import Footer from '../components/Footer';
import Clients from '../components/Clients';
import Testimonial from '../components/Testimonial';
import ContactForm from '../components/Contact/ContactForm';

const About = () => {
  return (
    <div className="relative">
      {/* console.log("About page rendered"); */}
      <Header />
      <AboutHero />
      <MissionVisionValues />
      {/* <OurHistory /> */}
      <Testimonial />
      {/* <Clients /> */}
      <ContactForm />
      <Footer />

    
    </div>
  );
};

export default About;