import { useState } from 'react'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import WhyResoundify from './components/WhyResoundify.jsx'
import ExploreOurRange from './components/ExploreOurRange.jsx'
import JoinCommunitySection from './components/JoinCommunitySection.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <WhyResoundify />
      <ExploreOurRange />
      <JoinCommunitySection />
    </>
  )
}

export default App
