import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      content: "Resoundify transformed our audio content strategy. The AI-powered transcription and analysis tools helped us create more engaging podcasts and reach a wider audience.",
      rating: 5,
      avatar: "SC"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Content Creator",
      company: "Digital Insights",
      content: "The quality of audio enhancement is incredible. What used to take hours of manual editing now happens in minutes. My podcast listeners have noticed the difference immediately.",
      rating: 5,
      avatar: "MR"
    },
    {
      id: 3,
      name: "Emily Thompson",
      role: "Education Specialist",
      company: "LearnTech Academy",
      content: "Using Resoundify for our educational content has been a game-changer. The automatic captioning and audio clarity improvements make our materials accessible to all students.",
      rating: 5,
      avatar: "ET"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Podcast Host",
      company: "Innovation Talks",
      content: "The real-time collaboration features and seamless integration with our workflow have made Resoundify an essential tool for our production team.",
      rating: 5,
      avatar: "DK"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Brand Manager",
      company: "Creative Studio",
      content: "Resoundify's analytics dashboard provides insights we never had before. Understanding our audio content performance has helped us make data-driven decisions.",
      rating: 5,
      avatar: "LA"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Audio Engineer",
      company: "Sound Dynamics",
      content: "As a professional in the audio industry, I'm impressed by the sophisticated algorithms and the intuitive interface. It's powerful yet accessible.",
      rating: 5,
      avatar: "JW"
    },{
      id: 7,
      name: "Emily Thompson",
      role: "Education Specialist",
      company: "LearnTech Academy",
      content: "Using Resoundify for our educational content has been a game-changer. The automatic captioning and audio clarity improvements make our materials accessible to all students.",
      rating: 5,
      avatar: "ET"
    },
    {
      id: 8,
      name: "David Kim",
      role: "Podcast Host",
      company: "Innovation Talks",
      content: "The real-time collaboration features and seamless integration with our workflow have made Resoundify an essential tool for our production team.",
      rating: 5,
      avatar: "DK"
    },{
      id: 9,
      name: "Emily Thompson",
      role: "Education Specialist",
      company: "LearnTech Academy",
      content: "Using Resoundify for our educational content has been a game-changer. The automatic captioning and audio clarity improvements make our materials accessible to all students.",
      rating: 5,
      avatar: "ET"
    },
    {
      id: 10,
      name: "David Kim",
      role: "Podcast Host",
      company: "Innovation Talks",
      content: "The real-time collaboration features and seamless integration with our workflow have made Resoundify an essential tool for our production team.",
      rating: 5,
      avatar: "DK"
    },
  ];

  const scrollContainerRef = useRef(null);
  const cardWidth = 360; // Defined card width
  const cardGap = 32;   // space-x-8 = 32px

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollAmount = cardWidth + cardGap;

      if (direction === 'left') {
        if (currentScroll - scrollAmount < 0) {
          // If trying to scroll left from near beginning, jump to end
          container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else { // direction === 'right'
        if (currentScroll + scrollAmount > maxScroll) {
          // If trying to scroll right from near end, jump to beginning
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="py-20 bg-white"> {/* Subtle, clean background */}
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-sans text-slate-900 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Trusted by <span className="font-semibold bg-gradient-to-br from-slate-900 to-slate-500 bg-clip-text text-transparent">Audio Professionals</span>
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed"> {/* Changed to text-slate-700 */}
            Discover how Resoundify is helping creators, educators, and businesses
            transform their audio content with cutting-edge AI technology.
          </p>
          <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8"></div>
       
        </div>

        {/* Testimonials Container */}
        <div className="w-full">
          <div className="overflow-x-auto custom-scrollbar-hide" ref={scrollContainerRef}>
            <div className="flex space-x-8 pb-6" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 flex-shrink-0
                             hover:shadow-xl hover:scale-[1.01] hover:border-slate-300 border border-slate-200 hover:bg-gradient-to-br from-blue-300 to-white" // Changed hover:border-blue-200 to hover:border-slate-300, border-slate-200 for initial border
                  style={{ width: '360px', minHeight: '300px' }}
                >
                  <div className="h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-5">
                      <Quote className="w-8 h-8 text-slate-900 opacity-70" /> {/* Changed to text-slate-900 */}
                    </div>
                    {/* Content */}
                    <div className="mb-7 flex-grow">
                      <p className="text-base text-slate-800 leading-relaxed"> {/* Changed to text-slate-800 */}
                        "{testimonial.content}"
                      </p>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-current" // Yellow remains for stars
                        />
                      ))}
                    </div>
                    {/* Author Info */}
                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mr-4 shadow-md"> {/* Changed to bg-slate-900 */}
                        <span className="text-sm font-bold text-white">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-slate-900"> {/* Changed to text-slate-900 */}
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-slate-700"> {/* Changed to text-slate-700 */}
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-slate-500"> {/* Changed to text-slate-500 */}
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Moved Below */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => scroll('left')}
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300
                          focus:outline-none focus:ring-4 focus:ring-slate-100 focus:ring-offset-2 {/* Changed to slate-100 */}
                          transform hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900" /> {/* Changed to text-slate-900 */}
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300
                          focus:outline-none focus:ring-4 focus:ring-slate-100 focus:ring-offset-2 {/* Changed to slate-100 */}
                          transform hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-slate-900" /> {/* Changed to text-slate-900 */}
            </button>
          </div>
        </div>
        
      </div>
      <style jsx>{`
        .custom-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;