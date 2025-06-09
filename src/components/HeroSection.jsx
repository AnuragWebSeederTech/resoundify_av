import React, { useState, useEffect } from 'react';

const slides = [
  "Welcome to Resoundify – Elevating Audio-Visual Experiences",
  "Resoundify delivers next-gen AV experiences that inspire connection and creativity.",
  "Resoundify: Trusted for seamless, professional Dante audio solutions.",
  "Create impactful experiences with Resoundify — anytime, anywhere.",
];

const SliderText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5000 ms = 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden h-24 md:h-32 flex items-center justify-center bg-transparent relative">
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((text, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex items-center justify-center px-4"
          >
            {/* Text color changed to black as requested */}
            <p className="text-xl md:text-4xl font-semibold text-black text-center">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSectionWithSlider = () => {
  return (
    <div className="h-[70vh] relative w-full rounded-b-4xl overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/HeroSectionImg.jpg')", // Ensure this image has sufficient contrast
        }}
      ></div>

      {/* Overlay with subtle gradient for readability and aesthetic. */}
      {/* Note: With black text, you might need to adjust this overlay further 
          to be much lighter for the text to be clearly visible. */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/70 via-transparent to-indigo-950/40 flex flex-col justify-center items-center p-4 gap-10">
        {/* Slider Text */}
        <SliderText />
        {/* Call to Action Button: Updated style to match brand's primary accent color */}
        <a
          href="#learn-more"
          className="inline-block bg-indigo-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-600 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default HeroSectionWithSlider;