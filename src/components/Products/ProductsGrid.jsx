import React from 'react';
import ProductCard from './ProductCard'; // For displaying Series
import ModelDetailsCard from './ModelDetailsCard'; // Component for displaying Models

const ProductsGrid = ({ 
  products, 
  hoveredProduct, 
  setHoveredProduct, 
  onProductClick, 
  isShowingModels,
  onLearnMore 
}) => {
  return (
    // The key change is here: "lg:grid-cols-3 xl:grid-cols-3"
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-20">
      {products.map((product, index) => (
        <div
          key={product.id}
          onMouseEnter={() => setHoveredProduct(index)}
          onMouseLeave={() => setHoveredProduct(null)}
          className="group" // Group class for hover effects on child elements
        >
          {isShowingModels ? (
            <ModelDetailsCard 
              model={product} 
              isHovered={hoveredProduct === index}
              onLearnMore={onLearnMore}
            />
          ) : (
            <ProductCard 
              product={product} 
              isHovered={hoveredProduct === index} 
              onProductClick={onProductClick} 
            />
          )}
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
