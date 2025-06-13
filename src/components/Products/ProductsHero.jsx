import React from 'react';

const ProductsHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-black to-blue-900 text-white py-28 px-6 lg:px-16 overflow-hidden shadow-xl">
      {/* Background circles for futuristic feel */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-200">Innovation</span>
        </h1>
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-10">
          Discover Resoundify's cutting-edge audio-visual solutions. Each product is engineered for unparalleled performance, seamlessly integrating with your vision.
        </p>
        <button className="bg-white text-indigo-700 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out">
          View All Products
        </button>
      </div>

      {/* CSS for blob animation */}
      <style jsx>{`
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
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ProductsHero;
