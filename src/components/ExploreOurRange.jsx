import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// ✅ Product Card (Cleaned)
const ProductPreviewCard = memo(({ product }) => {
  return (
    <div
      className={`
        relative bg-white rounded-3xl overflow-hidden shadow-md border border-slate-300
        ${product.sizeClass} ${product.rotateClass}
      `}
    >
      <div className="relative overflow-hidden h-3/4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x300/CCCCCC/666666?text=Image+Unavailable";
          }}
        />
      </div>
      <div className="p-2.5 text-center h-1/4 flex flex-col justify-center">
        <h3 className="text-sm font-bold text-slate-900 leading-tight truncate">
          {product.name}
        </h3>
        <p className="text-slate-600 text-xs font-semibold">{product.price}</p>
      </div>
    </div>
  );
});

// ✅ Main Static Section
const ExploreOurRange = () => {
  const products = [
    {
      name: 'Dante Pro Interface',
      price: '$1299',
      image: "/images/product1.jpg",
      sizeClass: 'w-40 h-56',
      positionClass: 'top-[10%] left-[5%] xl:left-[10%]',
      rotateClass: '-rotate-3',
    },
    {
      name: 'Compact Mixer X200',
      price: '$799',
      image: "/images/product2.jpg",
      sizeClass: 'w-52 h-72',
      positionClass: 'bottom-[15%] left-[0%] xl:left-[5%]',
      rotateClass: 'rotate-2',
    },
    {
      name: 'Studio Monitor Array',
      price: '$1899',
      image: "/images/product3.jpg",
      sizeClass: 'w-48 h-64',
      positionClass: 'top-[8%] right-[5%] xl:right-[10%]',
      rotateClass: 'rotate-4',
    },
    {
      name: 'Wireless Mic System',
      price: '$499',
      image: "/images/product4.jpg",
      sizeClass: 'w-40 h-56',
      positionClass: 'bottom-[8%] right-[0%] xl:right-[5%]',
      rotateClass: '-rotate-2',
    },
    {
      name: 'Audio Interface Pro-5',
      price: '$999',
      image: "/images/product5.jpg",
      sizeClass: 'w-44 h-60',
      positionClass: 'top-[35%] left-[2%] md:left-[20%] xl:left-[25%]',
      rotateClass: 'rotate-1',
    },
    {
      name: 'Digital Sound Processor',
      price: '$1499',
      image: "/images/product6.jpg",
      sizeClass: 'w-46 h-62',
      positionClass: 'bottom-[35%] right-[2%] md:right-[20%] xl:right-[25%]',
      rotateClass: 'rotate-3',
    }
  ];

  return (
    <section
      className="relative flex items-center justify-center py-24 px-4 sm:px-8 overflow-hidden bg-gradient-to-b from-slate-400 to-slate-600 text-slate-900 min-h-screen font-inter"
      // Changed 'via-slate-100' to 'via-slate-200' for a slightly more noticeable gradient
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Floating Cards */}
      {products.map((product, index) => (
        <div
          key={`product-${index}`}
          className={`absolute z-0 hidden md:block ${product.positionClass}`}
        >
          <ProductPreviewCard product={product} />
        </div>
      ))}

      {/* Center Content */}
      <div
        className="relative z-10 w-full max-w-2xl mx-auto text-center p-6 sm:p-8 md:p-12
                   bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-md border border-slate-300"
      >
        <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
          Unleash the future of{' '}
          <span className="font-semibold bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
            Audio Excellence
          </span>
        </h2>
        <p className="text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed text-slate-700 font-light">
          Discover our groundbreaking suite of Dante-enabled professional audio equipment.
          Engineered for unmatched clarity, unparalleled reliability, and limitless scalability, Resoundify empowers visionaries to craft immersive sonic experiences.
        </p>
        <Link
          to="/products"
          className="inline-block bg-slate-900 text-white font-bold px-10 py-4 sm:px-12 sm:py-5 rounded-full shadow-md hover:bg-slate-700 text-lg"
        >
          Explore Our Innovations
        </Link>
      </div>

      <style jsx>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default ExploreOurRange;