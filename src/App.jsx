import { useState } from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx'; // Corrected import name
import WhatResoundifyDoes from './components/WhatResoundifyDoes.jsx';
import WhyResoundify from './components/WhyResoundify.jsx';
import TechnologySpotlight from './components/TechnologySpotlight.jsx';
import ExploreOurRange from './components/ExploreOurRange.jsx';
import JoinCommunitySection from './components/JoinCommunitySection.jsx';
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection /> {/* Corrected component usage */}
      <WhatResoundifyDoes />
      <WhyResoundify />
      <TechnologySpotlight />
      <ExploreOurRange />
      <JoinCommunitySection />
      <Footer />
    </>
  );
}

export default App;