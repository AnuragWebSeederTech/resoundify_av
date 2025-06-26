import React, { useRef, useEffect } from 'react';
import { Star, Quote } from 'lucide-react'; // Removed ChevronLeft, ChevronRight

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
    },
  ];

  // Duplicate testimonials for a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="py-20 bg-white" style={{ fontFamily: '"Exo 2", sans-serif' }}> {/* Primary Font applied here */}
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-[Tilt_Neon] text-slate-900 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Trusted by <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">Audio Professionals</span>
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Discover how Resoundify is helping creators, educators, and businesses transform their audio content with cutting-edge AI technology.
          </p>
          <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Testimonials Container */}
        <div className="w-full overflow-hidden relative">
          <div className="flex space-x-8 pb-6 marquee-content">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`} // Use a unique key for duplicated items
                className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 flex-shrink-0
                           hover:shadow-xl hover:scale-[1.01] hover:border-slate-300 border border-slate-200 hover:bg-slate-100"
                style={{ width: '360px', minHeight: '300px' }}
              >
                <div className="h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-5">
                    <Quote className="w-8 h-8 text-slate-900 opacity-70" />
                  </div>
                  {/* Content */}
                  <div className="mb-7 flex-grow">
                    <p className="text-base text-slate-800 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  {/* Author Info */}
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <span className="text-sm font-bold text-white">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-700">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-slate-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .marquee-content {
          animation: marquee 60s linear infinite; /* Adjust duration for desired speed */
          display: flex;
          width: max-content; /* Ensure content takes up full width for animation */
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%); /* Move half the duplicated content width */
          }
        }

        /* Optional: Pause on hover */
        .marquee-content:hover {
          animation-play-state: paused;
        }

        /* Hide default scrollbar if it appears */
        .overflow-x-auto.custom-scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none;    /* Firefox */
        }
        .overflow-x-auto.custom-scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;