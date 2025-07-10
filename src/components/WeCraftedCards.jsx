import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Custom Image component (compatible with standard React environments)
// This replaces next/image for Canvas preview functionality.
const Image = ({ src, alt, width, height, className }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImageSrc(src); // Reset image source if src prop changes
    setError(false);
  }, [src]);

  // Fallback to a placeholder if the image fails to load or src is empty
  const handleError = () => {
    setError(true);
    // Use a placeholder from placehold.co, dynamically adjusting size
    setImageSrc(`https://placehold.co/${width || 50}x${height || 50}/F0C419/FFFFFF?text=Logo`);
  };

  return (
    <img
      src={error ? imageSrc : src} // Use placeholder if error, otherwise original src
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      loading="lazy" // Add lazy loading for better performance
    />
  );
};

// WeCraftedCard component
const WeCraftedCard = ({ title, description, goal, stat, logo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ overflow: "hidden"}}
    >
      {/* Applied border-amber-400 to the top border */}
      <div className="border-b-1 py-10 h-full bg-white border-t-2 border-amber-400 md:flex md:items-start gap-6 transition-colors duration-1000 hover:bg-gray-200 px-4 rounded-lg shadow-md"> {/* Added rounded-lg and shadow-md for better aesthetics */}
        <div className="flex md:flex-col items-center justify-between md:py-0 py-5 md:h-full max-w-full">
          <div>
            {/* Applied the gradient classes and heading font to the title */}
            <h2
              className="text-sm md:text-xl font-semibold bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-transparent"
            >
              {title}
            </h2>
          </div>
          <div>
            {/* Using the custom Image component */}
            <Image
              src={logo}
              alt={title ? `${title} logo` : "Client logo"} // More descriptive alt text
              width={50} // Ensure these values match what you expect for sizing
              height={50} // Ensure these values match what you expect for sizing
              className="object-contain md:w-44 w-20 rounded-md" // Added rounded-md for logo
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 md:gap-10 w-full">
          <div>
            <p className="md:text-lg text-sm text-gray-800">{description}</p> {/* Ensured description text is visible */}
          </div>

          <div className="flex gap-5 md:gap-10">
            <div>
              {/* Changed text-gray-500 to text-amber-700 */}
              <p className="text-sm py-1 text-amber-700 font-semibold">Campaign Goal</p>
              <p className="text-xs md:text-sm text-black">{goal}</p>
            </div>

            <div>
              {/* Changed text-gray-500 to text-amber-700 */}
              <p className="text-sm py-1 text-amber-700 font-semibold">Key stat</p>
              <p className="text-xs md:text-sm text-black">{stat}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeCraftedCard;