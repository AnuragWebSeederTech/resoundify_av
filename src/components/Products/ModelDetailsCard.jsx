import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModelDetailsCard = ({ model, isHovered, onLearnMore }) => {
  // Assuming 'model' object now has an 'images' array.
  // If no images are provided, a default placeholder is used.
  const images = model.images && model.images.length > 0 ? model.images : ["https://placehold.co/400x300/E5E7EB/6B7280?text=No+Image"];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = (e) => {
    e.stopPropagation(); // Prevent any parent click handlers
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = (e) => {
    e.stopPropagation(); // Prevent any parent click handlers
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLearnMoreClick = (e) => {
    e.stopPropagation(); // Prevent any parent click handlers
    if (onLearnMore) {
      onLearnMore(model);
    }
  };

  return (
    <div
      className={`
        bg-white rounded-2xl overflow-hidden shadow-md p-6 font-[Exo_2]
        transform transition-all duration-300 ease-in-out cursor-pointer
        ${isHovered ? "scale-105 shadow-lg ring-2 ring-emerald-300" : "hover:shadow-lg"}
      `}
    >
      {/* Image Slider Section */}
      <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${model.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
        />

        {/* Navigation Buttons - Visible only if there's more than one image */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPreviousImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-1.5 rounded-full z-10 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-1.5 rounded-full z-10 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Image indicator dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="space-y-3">
        {/* Heading Font: Tilt Neon */}
        <h4 className="text-xl font-semibold text-gray-900 font-[Tilt_Neon]">
          {model.name}
        </h4>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {model.description}
        </p>

        {/* Features preview */}
        {model.features && model.features.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {model.features.slice(0, 2).map((feature, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
            {model.features.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                +{model.features.length - 2} more
              </span>
            )}
          </div>
        )}

        <button 
          onClick={handleLearnMoreClick}
          className="w-full mt-4 inline-flex items-center justify-center text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 font-medium transition-all duration-200 py-2 px-4 rounded-lg border border-emerald-200 hover:border-emerald-300"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right ml-2 transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModelDetailsCard;