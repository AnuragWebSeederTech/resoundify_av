import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; // Import useInView
import { motion } from 'framer-motion'; // Import motion

// Dummy product data for the new elements with varied sizes
const products = [
  {
    name: 'Dante Pro Interface',
    price: '$1299',
    image: "/images/product1.jpg",
    sizeClass: 'w-40 h-56', // Small
    positionClass: 'top-[10%] left-[5%] xl:left-[10%]', // Top-left, pulled slightly further left on large screens
    rotateClass: '-rotate-3',
    delay: 0.6
  },
  {
    name: 'Compact Mixer X200',
    price: '$799',
    image: "/images/product2.jpg",
    sizeClass: 'w-52 h-72', // Big
    positionClass: 'bottom-[15%] left-[0%] xl:left-[5%]', // Bottom-left, slightly off edge
    rotateClass: 'rotate-2',
    delay: 0.8
  },
  {
    name: 'Studio Monitor Array',
    price: '$1899',
    image: "/images/product3.jpg",
    sizeClass: 'w-48 h-64', // Medium
    positionClass: 'top-[8%] right-[5%] xl:right-[10%]', // Top-right, pulled slightly further right on large screens
    rotateClass: 'rotate-4',
    delay: 0.7
  },
  {
    name: 'Wireless Mic System',
    price: '$499',
    image: "/images/product4.jpg",
    sizeClass: 'w-40 h-56', // Small
    positionClass: 'bottom-[8%] right-[0%] xl:right-[5%]', // Bottom-right, slightly off edge
    rotateClass: '-rotate-2',
    delay: 0.9
  },
  {
    name: 'Audio Interface Pro-5',
    price: '$999',
    image: "/images/product5.jpg",
    sizeClass: 'w-44 h-60', // Medium
    positionClass: 'top-[35%] left-[2%] md:left-[20%] xl:left-[25%]', // Mid-left, closer to center on smaller screens
    rotateClass: 'rotate-1',
    delay: 0.5
  },
  {
    name: 'Digital Sound Processor',
    price: '$1499',
    image: "/images/product6.jpg",
    sizeClass: 'w-46 h-62', // Medium-large
    positionClass: 'bottom-[35%] right-[2%] md:right-[20%] xl:right-[25%]', // Mid-right, closer to center on smaller screens
    rotateClass: 'rotate-3',
    delay: 1.0
  },
];

// Reusable Product Preview Card Component - Now also a motion component
const ProductPreviewCard = ({ product, inView, animationDelay }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define variants for the individual product cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: animationDelay } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`
        relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100
        transform transition-all duration-500 ease-in-out cursor-pointer
        ${product.sizeClass} /* Apply dynamic size here */
        ${product.rotateClass} /* Apply dynamic rotation */
        ${isHovered ? "scale-105 shadow-xl ring-4 ring-blue-200" : "hover:shadow-md"}
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
        <p className="text-blue-600 text-xs font-semibold">{product.price}</p>
      </div>
    </motion.div>
  );
};

const ExploreOurRange = () => {
  // Observer for the entire section to trigger animations
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  // Variants for the central content block
  const centerBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // State for hover animation of the central block (kept for completeness, though not explicitly used for the cards themselves anymore)
  const [isCenterHovered, setIsCenterHovered] = useState(false);


  return (
    <section
      ref={sectionRef} // Attach ref to the section
      className="relative flex items-center justify-center py-24 px-4 sm:px-8 overflow-hidden bg-slate-50 text-gray-900 min-h-screen font-inter"
    >
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Product Preview Cards - Scattered */}
      {products.map((product, index) => (
        <div
          key={`product-${index}`} // Unique key for each product
          className={`absolute z-0 hidden md:block ${product.positionClass}`}
        >
          <ProductPreviewCard product={product} inView={sectionInView} animationDelay={product.delay} />
        </div>
      ))}

      {/* Main Content Block (Centered) */}
      <motion.div
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"} // Animate based on section visibility
        variants={centerBlockVariants}
        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }} // Scale up and add deeper shadow on hover
        transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring transition
        className="relative z-10 w-full max-w-2xl mx-auto text-center p-6 sm:p-8 md:p-12
                   bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-100"
        onMouseEnter={() => setIsCenterHovered(true)}
        onMouseLeave={() => setIsCenterHovered(false)}
      >
        <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6 tracking-tight">
            Unleash the future of  <span className="font-semibold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Audio Excellence</span>
          </h2>
        <p className="text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed text-gray-700 font-light">
          Discover our groundbreaking suite of Dante-enabled professional audio equipment. Engineered for unmatched clarity, unparalleled reliability, and limitless scalability, Resoundify empowers visionaries to craft immersive sonic experiences.
        </p>
        <Link
          to="/products"
          className="inline-block relative z-10 bg-blue-500 text-white font-bold px-10 py-4 sm:px-12 sm:py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-400 ease-in-out text-lg sm:text-lg
                     focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75"
        >
          Explore Our Innovations
        </Link>
      </motion.div>

      {/* No more custom CSS for animations here; framer-motion handles them */}
      <style jsx>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default ExploreOurRange;