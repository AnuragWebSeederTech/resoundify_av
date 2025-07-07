import React from 'react';

const ModelDetailsCard = ({ model, isHovered }) => {
  return (
    <div
      className={`
        bg-white rounded-2xl overflow-hidden shadow-md p-6 font-[Exo_2]
        transform transition-all duration-300 ease-in-out
        ${isHovered ? "scale-105 shadow-lg ring-2 ring-blue-200" : "hover:shadow-lg"}
      `}
    >
      {/* Heading Font (for H1, H2): Tilt Neon applied here */}
      <h4 className="text-xl font-semibold text-gray-900 mb-2 font-[Tilt_Neon]">
        {model.name}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {model.description}
      </p>
      <button className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200">
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