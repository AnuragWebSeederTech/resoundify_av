import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatResoundifyDoes from '../components/WhatResoundifyDoes';
import WhyResoundify from '../components/WhyResoundify';
import TechnologySpotlight from '../components/TechnologySpotlight';
import ExploreOurRange from '../components/ExploreOurRange';
import JoinCommunitySection from '../components/JoinCommunitySection';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import Clients from '../components/Clients';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatResoundifyDoes />
      <WhyResoundify />
      <TechnologySpotlight />
      <ExploreOurRange />
      <Testimonial />
      <Clients />
      <JoinCommunitySection />
      <Footer />
    </>
  );
}