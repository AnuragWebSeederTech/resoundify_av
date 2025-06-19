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

  // State to keep track of animated testimonial IDs
  const [animatedTestimonialIds, setAnimatedTestimonialIds] = useState(new Set());

  // Refs for each testimonial card
  const testimonialRefs = useRef([]);

  useEffect(() => {
    // Initialize testimonialRefs array with nulls
    testimonialRefs.current = testimonials.map(
      (_, i) => testimonialRefs.current[i] ?? React.createRef()
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonialId = parseInt(entry.target.dataset.testimonialId);
            setAnimatedTestimonialIds((prev) => new Set(prev).add(testimonialId));
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // viewport as the root
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the item is visible
      }
    );

    // Observe each testimonial card
    testimonialRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Clean up observer on component unmount
    return () => {
      testimonialRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [testimonials]); // Re-run if testimonials array changes

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
    <div className="py-20 bg-gray-50"> {/* Subtle, clean background */}
      <div className="max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-10"> {/* Changed from w-500 to max-w-screen-xl */}
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-light text-slate-800 mb-6 tracking-tight">
            Trusted by <span className="font-semibold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Audio</span> Professionals
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover how Resoundify is helping creators, educators, and businesses
            transform their audio content with cutting-edge AI technology.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="w-full">
          <div className="overflow-x-auto custom-scrollbar-hide" ref={scrollContainerRef}>
            <div className="flex space-x-8 pb-6" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  ref={testimonialRefs.current[index]} // Assign ref to each card
                  data-testimonial-id={testimonial.id} // Store ID for observer
                  className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-700 ease-out flex-shrink-0
                              hover:shadow-xl hover:scale-[1.01] hover:border-blue-200 border border-transparent
                              ${
                                animatedTestimonialIds.has(testimonial.id)
                                  ? 'opacity-100 translate-y-0'
                                  : 'opacity-0 translate-y-8'
                              }`}
                  style={{ width: '360px', minHeight: '300px' }}
                >
                  <div className="h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-5">
                      <Quote className="w-8 h-8 text-blue-500 opacity-70" />
                    </div>
                    {/* Content */}
                    <div className="mb-7 flex-grow">
                      <p className="text-base text-gray-800 leading-relaxed">
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
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                        <span className="text-sm font-bold text-white">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-gray-500">
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
                                  focus:outline-none focus:ring-4 focus:ring-blue-100 focus:ring-offset-2
                                  transform hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300
                                  focus:outline-none focus:ring-4 focus:ring-blue-100 focus:ring-offset-2
                                  transform hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 bg-white rounded-full px-10 py-5 shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <span className="text-xl font-medium text-gray-800">
              Ready to elevate your audio?
            </span>
            <button className="bg-blue-600 hover:bg-blue-700
                                       text-white text-lg font-semibold px-8 py-4 rounded-full
                                       transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Start Your Free Trial Today
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