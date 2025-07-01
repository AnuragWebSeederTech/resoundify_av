import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/Products/ProductsHero';
import ProductFilter from '../components/Products/ProductFilter';  
import ProductCard from '../components/Products/ProductCard';
import ProductsGrid from '../components/Products/ProductsGrid';
// import ProductsCTA from '../components/Products/ProductsCTA';
import JoinCommunitySection from '../components/JoinCommunitySection';

// Main Products Page component
const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState(null); // State to manage hovered product for animation

  // Mock product data for the products page
  const products = [
    {
      id: 1,
      name: "AcousticSculpt Pro",
      category: "interfaces",
      description: "Cutting-edge 32-channel Dante audio interface with AI-powered acoustic shaping.",
      image: "https://placehold.co/400x300/F0F4F8/3B82F6?text=AcousticSculpt", // Placeholder image
      features: ["32 Channels", "Ultra-Low Latency", "AI-Enhanced DSP", "Dante Enabled"],
      status: "In Stock",
    },
    {
      id: 2,
      name: "SonicBloom Power Amp",
      category: "amplifiers",
      description: "High-fidelity modular power amplifier, delivering crystal-clear sound across all frequencies.",
      image: "https://placehold.co/400x300/F0F4F8/EF4444?text=SonicBloom", // Placeholder image
      features: ["2000W Output (Modular)", "Adaptive Impedance", "Network Control", "Integrated Safeguards"],
      status: "In Stock",
    },
    {
      id: 3,
      name: "EchoSphere Digital Processor",
      category: "processors",
      description: "Advanced spatial audio processor, creating immersive soundscapes with precision.",
      image: "https://placehold.co/400x300/F0F4F8/22C55E?text=EchoSphere", // Placeholder image
      features: ["3D Audio Engine", "Parametric EQ", "Reverb & Delay", "Touch Interface"],
      status: "Limited Stock",
    },
    {
      id: 4,
      name: "QuantumLink 16i",
      category: "interfaces",
      description: "16-channel quantum-optimized audio interface for unparalleled signal purity.",
      image: "https://placehold.co/400x300/F0F4F8/6366F1?text=QuantumLink", // Placeholder image
      features: ["16 Channels", "Quantum Purity", "Thunderbolt 4", "Modular I/O"],
      status: "In Stock",
    },
    {
      id: 5,
      name: "PulseWave Matrix Amp",
      category: "amplifiers",
      description: "Versatile 32-zone matrix amplifier with advanced routing capabilities.",
      image: "https://placehold.co/400x300/F0F4F8/F59E0B?text=PulseWave", // Placeholder image
      features: ["32 Zones", "Flexible Routing", "Energy Efficient", "Remote Monitoring"],
      status: "In Stock",
    },
    {
      id: 6,
      name: "NeuralSound AI Processor",
      category: "processors",
      description: "AI-driven audio processor for real-time sound optimization and enhancement.",
      image: "https://placehold.co/400x300/F0F4F8/EC4899?text=NeuralSound", // Placeholder image
      features: ["Machine Learning", "Dynamic EQ", "Noise Reduction", "Adaptive Filters"],
      status: "New Arrival",
    },
    {
      id: 7,
      name: "SyncFlow HDMI Extender",
      category: "accessories",
      description: "Long-range HDMI extender with zero latency and Ethernet passthrough.",
      image: "https://placehold.co/400x300/F0F4F8/10B981?text=SyncFlow", // Placeholder image
      features: ["4K@60Hz", "100m Range", "PoE Support", "HDCP 2.2"],
      status: "In Stock",
    },
    {
      id: 8,
      name: "VortexMic Pro",
      category: "microphones",
      description: "Professional condenser microphone with advanced noise cancellation.",
      image: "https://placehold.co/400x300/F0F4F8/8B5CF6?text=VortexMic", // Placeholder image
      features: ["Cardioid Pattern", "Noise Cancellation", "Studio Grade", "USB-C Connectivity"],
      status: "In Stock",
    },
  ];

  // Categories array for filtering products
  const categories = [
    { id: "all", name: "All Products" },
    { id: "interfaces", name: "Audio Interfaces" },
    { id: "amplifiers", name: "Amplifiers" },
    { id: "processors", name: "Processors" },
    { id: "microphones", name: "Microphones" },
    { id: "accessories", name: "Accessories" },
  ];

  // Filter products based on the active category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Products Hero Section */}
      <ProductsHero />

      {/* Main Content Area */}
      <section className="py-8 lg:py-12 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Product Filter Section */}
          <ProductFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* Products Grid Section */}
          <ProductsGrid
            products={filteredProducts}
            hoveredProduct={hoveredProduct}
            setHoveredProduct={setHoveredProduct}
          />

          {/* Call to Action Section */}
        </div>
        <JoinCommunitySection />
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ProductsPage;
