import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0">
        <img
          src="/images/herobg1.jpeg"
          alt="Background"
          className="w-full h-full object-cover filter blur-4xl"
        />
        {/* Overlay to darken the background for better text contrast */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Connect to Stripe. <br /> Start selling.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Outseta is an all-in-one billing system purpose built for SaaS and membership businesses. Payments, subscription management, and tax compliance integrated with your site—and the rest of your tech stack—in minutes.
        </p>

        {/* Optional Call-to-Action Button */}
        {/* <button className="mt-6 px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;