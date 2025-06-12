import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Products Hero Component
const ProductsHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 to-purple-800 text-white py-28 px-6 lg:px-16 overflow-hidden shadow-xl">
      {/* Background circles for futuristic feel */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-200">Innovation</span>
        </h1>
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-10">
          Discover Resoundify's cutting-edge audio-visual solutions. Each product is engineered for unparalleled performance, seamlessly integrating with your vision.
        </p>
        <button className="bg-white text-indigo-700 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out">
          View All Products
        </button>
      </div>

      {/* CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

// Product Filter Component
const ProductFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16 px-4 py-3 bg-white rounded-full shadow-lg max-w-fit mx-auto">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`
            px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out
            relative overflow-hidden group
            ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-xl transform scale-105"
                : "bg-transparent text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
            }
          `}
        >
          {/* Animated background on hover/active */}
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <span className="relative z-10">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, isHovered }) => {
  // Determine status color
  const statusColor =
    product.status === "In Stock"
      ? "bg-green-500"
      : product.status === "Limited Stock"
      ? "bg-orange-500"
      : "bg-purple-500"; // For "New Arrival" or other statuses

  return (
    <div
      className={`
        relative bg-white rounded-3xl overflow-hidden shadow-xl
        transform transition-all duration-500 ease-in-out
        ${isHovered ? "scale-105 shadow-2xl ring-4 ring-indigo-300" : "hover:shadow-xl"}
      `}
    >
      {/* Product Image with dynamic overlay */}
      <div className="relative overflow-hidden h-64 md:h-72">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/CCCCCC/666666?text=Image+Unavailable"; }} // Fallback image
        />

        {/* Hover Overlay with CTA */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6
            transition-opacity duration-500 ease-in-out
            ${isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
        >
          <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl font-semibold text-lg
            hover:bg-white/30 hover:shadow-lg transition-all duration-300">
            View Details
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-5 text-base leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {product.features.map((feature, featureIndex) => (
            <span
              key={featureIndex}
              className="px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 text-sm rounded-full font-medium shadow-sm"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Status Indicator & Learn More */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 ${statusColor} rounded-full animate-pulse-slow`} />
            <span className="text-gray-700 text-sm font-medium">{product.status}</span>
          </div>
          <a
            href="#" // Replace with actual product detail link
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300 flex items-center space-x-1"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      {/* Animation for pulse-slow */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Products Grid Component
const ProductsGrid = ({ products, hoveredProduct, setHoveredProduct }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
      {products.map((product, index) => (
        <div
          key={product.id}
          onMouseEnter={() => setHoveredProduct(index)}
          onMouseLeave={() => setHoveredProduct(null)}
          className="group" // Group class for hover effects on child elements
        >
          <ProductCard product={product} isHovered={hoveredProduct === index} />
        </div>
      ))}
      {products.length === 0 && (
        <div className="col-span-full text-center text-xl text-gray-600 py-10">
          No products found in this category.
        </div>
      )}
    </div>
  );
};

// Products Call to Action Component
const ProductsCTA = () => {
  return (
    <div className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl py-16 px-8 shadow-2xl relative overflow-hidden">
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full transform translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to Elevate Your Audio Experience?
        </h2>
        <p className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Whether you're an audio engineer, system integrator, or simply an AV enthusiast, Resoundify provides the tools to bring your most ambitious sound visions to life.
        </p>
        <button className="bg-white text-indigo-700 font-bold px-12 py-5 rounded-full text-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out group">
          Contact Our Experts
          <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
        </button>
      </div>
    </div>
  );
};


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
    <div className="min-h-screen pt-30 bg-gray-50 font-inter text-gray-800">
      {/* Products Hero Section */}
      <ProductsHero />

      {/* Main Content Area */}
      <section className="py-16 px-6 lg:px-16">
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
          <ProductsCTA />
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ProductsPage;
