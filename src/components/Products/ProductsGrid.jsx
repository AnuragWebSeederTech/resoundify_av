import React from 'react';
import ProductCard from './ProductCard';

const ProductsGrid = ({ products, hoveredProduct, setHoveredProduct }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
      {products.map((product, index) => (
        <div
          key={product.id}
          onMouseEnter={() => setHoveredProduct(index)}
          onMouseLeave={() => setHoveredProduct(null)}
          className="group" // Group class for hover effects on child elements
        >
          <ProductCard product={product} isHovered={hoveredProduct === index} />
        </div>
      ))}
      {products.length === 0 && (
        <div className="col-span-full text-center text-xl text-gray-600 py-10">
          No products found in this category.
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
