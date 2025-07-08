import React from 'react';
import { Star, Quote } from 'lucide-react';

// TestimonialsSection Component: Displays customer testimonials in a continuously scrolling marquee.
const TestimonialsSection = () => {
  // Array of testimonial data, each containing details about the reviewer and their feedback.
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      content: "Resoundify transformed our audio content strategy. The AI-powered transcription and analysis tools helped us create more engaging podcasts and reach a wider audience.",
      rating: 5, // Star rating
      avatar: "SC" // Initials for avatar placeholder
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

  // Duplicates the testimonials array multiple times to create a seamless looping effect for the marquee.
  // This avoids abrupt jumps when the animation restarts.
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    // Main container for the testimonials section.
    // Sets padding, background color, and applies the primary font 'Exo 2' as remembered from user preferences.
    <div className="py-5 sm:py-10 bg-white" style={{ fontFamily: '"Exo 2", sans-serif' }}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header for the Testimonials Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Section title. Uses the heading font 'Tilt Neon' as remembered from user preferences. */}
          {/* Includes a gradient text effect for "Audio Professionals" and subtle text shadows. */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[Tilt_Neon] text-slate-900 mb-4 sm:mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Trusted by <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">Audio Professionals</span>
          </h2>
          {/* Descriptive paragraph for the section. */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed px-2">
            Discover how Resoundify is helping creators, educators, and businesses transform their audio content with cutting-edge AI technology.
          </p>
          {/* Decorative horizontal line with a gradient. */}
          <div className="w-64 sm:w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-6 sm:mt-8"></div>
        </div>

        {/* Testimonials Container - Implements the marquee effect */}
        <div className="w-full overflow-hidden relative">
          {/* 'marquee-content' class applies the CSS animation for continuous horizontal scrolling. */}
          <div className="flex space-x-6 sm:space-x-8 pb-6 marquee-content">
            {duplicatedTestimonials.map((testimonial, index) => (
              // Individual testimonial card.
              // Uses unique key combining id and index to handle duplicated items.
              // Applies various Tailwind classes for styling, responsiveness, and hover effects.
              <div
                key={`${testimonial.id}-${index}`} // Unique key for duplicated items
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 flex-shrink-0
                           hover:shadow-xl hover:scale-[1.01] hover:border-slate-300 border border-slate-200 hover:bg-slate-100"
                style={{ width: '90vw', minHeight: '280px', maxWidth: '360px' }} /* Responsive width constraint */
              >
                <div className="h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4 sm:mb-5">
                    <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-slate-900 opacity-70" />
                  </div>
                  {/* Testimonial Content */}
                  <div className="mb-5 sm:mb-7 flex-grow"> {/* flex-grow ensures content takes available space, pushing author info to bottom */}
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  {/* Star Rating */}
                  <div className="flex items-center mb-4 sm:mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" // Filled star icon
                      />
                    ))}
                  </div>
                  {/* Author Information */}
                  <div className="flex items-center mt-auto"> {/* mt-auto pushes this div to the bottom */}
                    {/* Avatar placeholder with initials. */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-md">
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {testimonial.avatar}
                      </span>
                    </div>
                    {/* Author's name, role, and company. */}
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700">
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
      {/* Embedded CSS for the marquee animation. */}
      <style>{`
        /* Defines the animation for the marquee content */
        .marquee-content {
          animation: marquee 60s linear infinite; /* Adjust duration for speed */
          display: flex;
          width: max-content; /* Ensures content extends beyond viewport for seamless loop */
        }

        /* Keyframes for the marquee animation: moves content from right to left */
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%); /* Moves exactly half the content width */
          }
        }

        /* Pauses the animation on hover */
        .marquee-content:hover {
          animation-play-state: paused;
        }

        /* Hide default scrollbar if it appears (for cross-browser compatibility) */
        .overflow-x-auto.custom-scrollbar-hide {
          -ms-overflow-style: none; /* For Internet Explorer/Edge */
          scrollbar-width: none; /* For Firefox */
        }
        .overflow-x-auto.custom-scrollbar-hide::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection; // Exports the TestimonialsSection component for use elsewhere.