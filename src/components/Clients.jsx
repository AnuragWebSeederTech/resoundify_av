import React, { useEffect } from 'react';

const Clients = () => {
  const clientLogos = [
    { name: "Client A", url: "/images/ClientA.jpg", alt: "Innovate Solutions Logo" },
    { name: "Client B", url: "/images/ClientB.jpg", alt: "Tech Pioneers Logo" },
    { name: "Client C", url: "/images/ClientC.jpg", alt: "FutureForge Logo" },
    { name: "Client D", url: "/images/ClientD.jpg", alt: "Aether Dynamics Logo" },
    { name: "Client E", url: "/images/ClientE.png", alt: "Vertex Systems Logo" },
    { name: "Client F", url: "/images/ClientF.png", alt: "Catalyst Corp Logo" },
    { name: "Client G", url: "/images/ClientG.png", alt: "Nexus Innovations Logo" },
    { name: "Client H", url: "/images/ClientH.jpg", alt: "BrightWave Tech Logo" },
  ];

  // We still duplicate to ensure a seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  useEffect(() => {
    const marquee = document.querySelector('.client-marquee');
    let scrollPosition = -marquee.scrollWidth / 2; // Start from the left-most edge of the second set of logos
    const scrollSpeed = 1; // Adjust as needed for faster/slower scroll

    const animate = () => {
      scrollPosition += scrollSpeed; // Increment scrollPosition to move right
      if (marquee) {
        marquee.style.transform = `translateX(${scrollPosition}px)`;

        // Reset position when the second set of logos has scrolled past
        // (i.e., when the original first set is about to disappear from the right)
        const totalWidthOfOneSet = marquee.scrollWidth / 2;
        if (scrollPosition > 0) { // If we've scrolled past the starting point (0) to the right
          scrollPosition = -totalWidthOfOneSet; // Reset to the left-most edge of the first set
        }
      }
      requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className="bg-white font-inter py-24 overflow-hidden relative">
      {/* You might consider moving this <link> to your public/index.html or a global CSS file for better performance */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[Tilt_Neon] text-slate-900 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Success supported by <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">Powerful Clients.</span>
          </h2>
        <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-10 mb-10"></div>

      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-8">
        <div className="client-marquee whitespace-nowrap flex items-center" style={{ animation: 'none' }}>
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index} // Using index as key is generally discouraged if items can change order, but for a static, duplicated list, it's acceptable.
              className="inline-block mx-10 p-4 bg-white rounded-xl shadow-lg border border-slate-300 flex-shrink-0
                         transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:border-slate-700"
              style={{ width: '240px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img
                src={logo.url}
                alt={logo.alt}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to a plain placeholder if the image fails to load
                  e.target.onerror = null; // Prevent infinite loop if fallback also fails
                  e.target.src = `https://placehold.co/240x140/F0F8FF/000000?text=${logo.name.replace(/ /g, '+')}`; // Placeholder with dark text on light background
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Internal CSS for component-specific styles */}
      <style>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        .client-marquee {
          /* Ensures the container is wide enough for all content to scroll */
          width: max-content;
          position: relative; /* Essential for transform property to work correctly */
        }

        /* Basic fade-in-up animation for the heading */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .text-shadow-lg {
            text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Clients;