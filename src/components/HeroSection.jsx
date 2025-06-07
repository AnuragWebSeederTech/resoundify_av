import React, { useState, useEffect } from 'react';

const slides = [
  "Welcome to Resoundify – Elevating Audio-Visual Experiences",
  "At Resoundify, we are passionate about delivering cutting-edge audio-visual solutions that redefine how you connect, communicate, and create.",
  "As a trusted AV brand specializing in Dante-enabled products, we bring seamless, high-quality audio networking to the forefront of your projects.",
  "Whether you're designing a state-of-the-art conference room, a dynamic live event space, or an immersive entertainment environment, Resoundify empowers you with the tools to achieve exceptional results.",
];

const SliderText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 4000 ms = 4 seconds
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
            <p className="text-xl md:text-2xl font-semibold text-white text-center">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSectionWithSlider = () => {
  return (
    <div className="h-[50vh] relative w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/path-to-your-image.jpg')",
        }}
      ></div>

      {/* Overlay with semi-transparent background for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
        {/* Slider Text */}
        <SliderText />

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center mt-4 px-4">
          OUR GOAL IS CLEAR: RESOUNDIFY EMPOWERS YOUR VOICE.
        </h1>
        {/* Call to Action Button */}
        <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded hover:bg-gray-200 transition duration-300">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default HeroSectionWithSlider;