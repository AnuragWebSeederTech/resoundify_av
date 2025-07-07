import React from 'react';

const ProductCard = ({ product, isHovered, onProductClick }) => {
  // Determine status color
  const statusColor =
    product.status === "In Stock"
      ? "bg-green-500"
      : product.status === "Limited Stock"
      ? "bg-orange-500"
      : "bg-purple-500"; // For "New Arrival" or other statuses

  return (
    // Primary Font (for entire site): Exo 2 applied here
    <div
      className={`
        relative bg-white rounded-3xl overflow-hidden shadow-xl
        flex flex-col h-full font-[Exo_2]
        transform transition-all duration-500 ease-in-out
        ${isHovered ? "scale-105 shadow-2xl ring-4 ring-indigo-300" : "hover:shadow-xl"}
      `}
    >
      {/* Product Image with dynamic overlay */}
      <div className="relative overflow-hidden h-64 md:h-72 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/CCCCCC/666666?text=Image+Unavailable"; }} // Fallback image
        />

        {/* Hover Overlay with CTA - changed text for series */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6
            transition-opacity duration-500 ease-in-out
            ${isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
        >
          <button
            onClick={() => onProductClick(product)} // Pass the entire series object
            className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl font-sans text-lg
            hover:bg-white/30 hover:shadow-lg transition-all duration-300">
            View Series Models
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* Product Info - Main content area that will grow */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Heading Font (for H1, H2): Tilt Neon applied here */}
        <h3 className="text-3xl font-medium text-gray-900 mb-2 leading-tight font-[Tilt_Neon]">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-5 text-base leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
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
        )}

        {/* Status Indicator & Learn More - Pushed to the bottom */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 ${statusColor} rounded-full animate-pulse-slow`} />
            <span className="text-gray-700 text-sm font-medium">{product.status}</span>
          </div>
          <button
            onClick={() => onProductClick(product)} // This button also clicks to view series models
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300 flex items-center space-x-1"
          >
            <span>Explore</span>
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
          </button>
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

export default ProductCard;