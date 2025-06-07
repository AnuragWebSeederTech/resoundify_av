import React, { useState, useEffect } from 'react';

const slides = [
  "Welcome to Resoundify – Elevating Audio-Visual Experiences",
  "Resoundify delivers next-gen AV experiences that inspire connection and creativity.",
  "Resoundify: Trusted for seamless, professional Dante audio solutions.",
  "Create impactful experiences with Resoundify — anytime, anywhere.",
];

const SliderText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 4 seconds
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
            <p className="text-xl md:text-4xl font-semibold text-gray-800 text-center">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSectionWithSlider = () => {
  return (
    <div className="h-[50vh] relative w-full rounded-b-4xl overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('/images/HeroSectionImg.jpg')", // Replace with your image path
        }}
      ></div>

      {/* Overlay with semi-transparent background for readability */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center p-4 gap-10">
        {/* Slider Text */}
        <SliderText />
        {/* Call to Action Button */}
        <button className="bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded hover:bg-gray-200 transition duration-300">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default HeroSectionWithSlider;