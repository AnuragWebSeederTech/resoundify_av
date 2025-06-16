import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dummy product data for the new elements with varied sizes
const products = [
  {
    name: 'Dante Pro Interface',
    price: '$1299',
    image: 'https://placehold.co/300x220/F0F4F8/60A5FA?text=Pro+Audio', // Smaller image for smaller card
    sizeClass: 'w-36 h-52', // Smallest card
    positionClass: 'top-[15%] left-[8%]', // More scattered position
    rotateClass: '-rotate-3', // Slight rotation
    delay: '0.6s'
  },
  {
    name: 'Compact Mixer X200',
    price: '$799',
    image: 'https://placehold.co/350x260/E0F2F7/4FD1C5?text=Studio+Mixer', // Medium image
    sizeClass: 'w-44 h-60', // Slightly larger card
    positionClass: 'bottom-[20%] left-[5%]', // More scattered position
    rotateClass: 'rotate-2', // Slight rotation
    delay: '0.8s'
  },
  {
    name: 'Studio Monitor Array',
    price: '$1899',
    image: 'https://placehold.co/350x260/F3E8FF/A78BFA?text=High-Res+Monitors', // Medium image
    sizeClass: 'w-44 h-60', // Slightly larger card
    positionClass: 'top-[25%] right-[5%]', // More scattered position
    rotateClass: 'rotate-4', // Slight rotation
    delay: '0.7s'
  },
  {
    name: 'Wireless Mic System',
    price: '$499',
    image: 'https://placehold.co/300x220/FFFBEB/FCD34D?text=Wireless+Mics', // Smaller image
    sizeClass: 'w-38 h-54', // Small card
    positionClass: 'bottom-[10%] right-[8%]', // More scattered position
    rotateClass: '-rotate-2', // Slight rotation
    delay: '0.9s'
  },
];

// Reusable Product Preview Card Component
const ProductPreviewCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100
        transform transition-all duration-500 ease-in-out cursor-pointer
        ${product.sizeClass} /* Apply dynamic size here */
        ${product.rotateClass} /* Apply dynamic rotation */
        ${isHovered ? "scale-105 shadow-xl ring-4 ring-blue-200" : "hover:shadow-md"} {/* Changed ring color to blue-200 */}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden h-3/4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/CCCCCC/666666?text=Image+Unavailable"; }}
        />
      </div>

      {/* Product Info */}
      <div className="p-2.5 text-center h-1/4 flex flex-col justify-center">
        <h3 className="text-sm font-bold text-gray-900 leading-tight truncate">
          {product.name}
        </h3>
        <p className="text-blue-600 text-xs font-semibold">{product.price}</p> {/* Changed accent color to blue-600 */}
      </div>
    </div>
  );
};

const ExploreOurRange = () => {
  return (
    <section
      className="relative flex items-center justify-center py-24 px-4 sm:px-8 overflow-hidden bg-slate-50 text-gray-900 min-h-screen font-inter" // Added font-inter for consistency
    >
      {/* Font import link is ideally in your public/index.html or global CSS, but added here for self-containment if needed */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Product Preview Cards - Left Side (Absolute Positioning) */}
      {products.slice(0, 2).map((product, index) => (
        <div
          key={`left-${index}`}
          className={`absolute z-0 hidden md:block opacity-0 animate-fade-in-up ${product.positionClass}`}
          style={{ animationDelay: product.delay }}
        >
          <ProductPreviewCard product={product} />
        </div>
      ))}

      {/* Main Content Block (Centered) */}
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center p-6 sm:p-8 md:p-12
                      bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-100
                      transition-transform duration-700 ease-in-out animate-fade-in-up">
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tighter leading-tight text-gray-900"> {/* Adjusted text size to lg:text-6xl */}
          Unleash the Future of <span className="text-blue-500">Audio Excellence</span> {/* Changed accent color to blue-500 */}
        </h2>
        <p className="text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed text-gray-700 font-light"> {/* Adjusted text size to sm:text-xl */}
          Discover our groundbreaking suite of Dante-enabled professional audio equipment. Engineered for unmatched clarity, unparalleled reliability, and limitless scalability, Resoundify empowers visionaries to craft immersive sonic experiences.
        </p>
        <Link
          to="/products"
          className="inline-block relative z-10 bg-blue-500 text-white font-bold px-10 py-4 sm:px-12 sm:py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-400 ease-in-out text-lg sm:text-lg
                     focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75" // Changed button color to solid blue-500 and ring to blue-300
        >
          Explore Our Innovations
        </Link>
      </div>

      {/* Product Preview Cards - Right Side (Absolute Positioning) */}
      {products.slice(2, 4).map((product, index) => (
        <div
          key={`right-${index}`}
          className={`absolute z-0 hidden md:block opacity-0 animate-fade-in-up ${product.positionClass}`}
          style={{ animationDelay: product.delay }}
        >
          <ProductPreviewCard product={product} />
        </div>
      ))}

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        @keyframes fadeInUp {
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
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0; /* Hidden by default */
        }
        /* Keeping fadeInRight, blob, spinSlow, spinReverseSlow keyframes just in case for other parts of site */
        /* They are not directly used in this component after removing blobs and central box rotation */
        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite alternate;
        }
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 30s linear infinite;
        }

        @keyframes spinReverseSlow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-reverse-slow {
          animation: spinReverseSlow 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ExploreOurRange;