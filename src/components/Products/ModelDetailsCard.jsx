import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModelDetailsCard = ({ model, isHovered }) => {
  // Assuming 'model' object now has an 'images' array.
  // If no images are provided, a default placeholder is used.
  const images = model.images && model.images.length > 0 ? model.images : ["https://placehold.co/400x300/E5E7EB/6B7280?text=No+Image"];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={`
        bg-white rounded-2xl overflow-hidden shadow-md p-6 font-[Exo_2]
        transform transition-all duration-300 ease-in-out
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
      </div>

      {/* Heading Font: Tilt Neon */}
      <h4 className="text-xl font-semibold text-gray-900 mb-2 font-[Tilt_Neon]">
        {model.name}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {model.description}
      </p>
      <button className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-200">
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
          className="lucide lucide-arrow-right ml-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ModelDetailsCard;