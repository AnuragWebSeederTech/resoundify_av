import React, { memo } from 'react'; // Import memo

// Define the GradientButton component
const GradientButton = memo(({ text = 'Button', href = '#' }) => {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-center px-8 py-5 w-60 text-lg font-medium bg-transparent border-none cursor-pointer user-select-none overflow-hidden font-inherit text-royalblue-500 group" // Added 'group' class here
    >
      {/* Button text */}
      <span className="block z-10 group-hover:text-black transition-colors duration-300"> {/* Added group-hover:text-white and transition */}
        {text}
      </span>
      {/* Outer border span */}
      <span class="absolute inset-0 z-0 border-3 border-royalblue-500 rounded-2xl overflow-hidden group-hover:border-black transition-colors duration-300"> {/* Changed group-hover:border-white to group-hover:border-black */}
        {/* Inner span for the sweeping effect with gradient */}
        <span
          class="block absolute w-0 h-[500%] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-60 transition-all duration-1000 ease-out
                     group-hover:-rotate-90 group-hover:w-full group-hover:bg-white
                     active:bg-gray-200"
        ></span>
      </span>
    </a>
  );
});

const ResoundifyHeroSection = () => {
  return (
    <div className="relative w-full max-w-fit mx-auto my-8 h-96
                    bg-gradient-to-b from-black via-slate-900 to-black
                    flex items-center justify-between overflow-hidden
                    rounded-xl shadow-2xl"> {/* Added max-w, mx-auto, my-8, rounded-xl, shadow-2xl, and gradient */}

      {/* Left side: Image (placeholder for an AV product or a stylized sound wave/icon) with radial gradient */}
      <div className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gradient-to-l from-black-50 via-slate-600  to-black-50"
          // style={{
          //   background: 'radial-gradient(circle at center, rgba(30,30,30,1) 0%, rgba(0,0,0,0) 70%)',
          // }}
        ></div>
        {/* Placeholder for a Resoundify-specific visual element */}
        <img
          src="https://i.giphy.com/l3vR4Fiim9wdPWp5C.webp" // Replace with an actual Resoundify icon or stylized audio-visual element
          alt="Resoundify Icon"
          className="relative z-10 w-48 h-48 rounded-3xl object-contain"
        />
      </div>

      {/* Right side: Text content - Adapted from Resoundify content */}
      <div className="relative z-20 flex-1 flex flex-col items-start justify-center p-8 text-white ml-[50%]">
        <h2 className="text-5xl font-bold mb-4">
          Resoundify Community
        </h2>
        <p className="text-xl mb-8">
          At Resoundify, we believe in the power of sound to inspire, connect, and transform. Explore our products, connect with our team, and experience the future of AV with Resoundify.
        </p>
        {/* Integrated GradientButton */}
        <GradientButton text="Join Now!" href="#" />
      </div>

      {/* Navigation Arrows (Optional, if this is part of a carousel) */}
      {/*
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition">
        &lt;
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition">
        &gt;
      </button>
      */}
    </div>
  );
};

export default ResoundifyHeroSection;