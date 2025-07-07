import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/Products/ProductsHero';
import ProductFilter from '../components/Products/ProductFilter';
import ProductsGrid from '../components/Products/ProductsGrid';
import JoinCommunitySection from '../components/JoinCommunitySection';

// Import the product data
import { productsData } from '../data/products';

// Main Products Page component
const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // --- NEW STATE FOR LOAD MORE ---
  const [productsPerPage, setProductsPerPage] = useState(8); // Number of cards to show initially and load per click
  const [productsToShow, setProductsToShow] = useState(productsPerPage);
  // --- END NEW STATE ---

  // Categories array for filtering products, derived from the new productsData
  const categories = [
    { id: "all", name: "All Products" },
    ...productsData.map(brand => ({
      id: brand.category,
      name: brand.name,
    })),
  ];

  // Filtered products: if a category is selected, filter brands, then extract their series.
  // If a series is selected, display its models.
  const getDisplayProducts = () => {
    if (selectedSeries) {
      return selectedSeries.models; // Display models of the selected series
    }

    if (activeCategory === "all") {
      // For "All Products", flatten all series from all brands
      return productsData.flatMap(brand => brand.series || []);
    } else {
      // Find the brand corresponding to the active category
      const selectedBrand = productsData.find(brand => brand.category === activeCategory);
      return selectedBrand ? selectedBrand.series : []; // Display series of the selected brand
    }
  };

  const allFilteredProducts = getDisplayProducts(); // Get all products for the current filter
  // --- NEW: Slice the array to show only a limited number ---
  const productsToRender = allFilteredProducts.slice(0, productsToShow);
  // --- END NEW ---

  // Check if there are more products to load
  const hasMoreProducts = allFilteredProducts.length > productsToShow;

  // Function to handle loading more products
  const handleLoadMore = () => {
    setProductsToShow(prev => prev + productsPerPage);
  };

  // Function to handle clicking on a series card
  const handleSeriesClick = (series) => {
    setSelectedSeries(series);
    setHoveredProduct(null);
  };

  // Function to go back to the series view from model view
  const handleBackToSeries = () => {
    setSelectedSeries(null);
    setHoveredProduct(null);
    setProductsToShow(productsPerPage); // Reset productsToShow when going back to series view
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
        <ProductsHero />

        <section className="py-8 lg:py-12 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto lg:py-8">
            <ProductFilter
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={(categoryId) => {
                setActiveCategory(categoryId);
                setSelectedSeries(null); // Reset selected series when category changes
                setProductsToShow(productsPerPage); // Reset productsToShow when category changes
              }}
            />

            {selectedSeries && (
              <div className="mb-8 flex items-center space-x-2" style={{ fontFamily: 'Exo 2' }}>
                <button
                  onClick={handleBackToSeries}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
                  Back to Series
                </button>
                <span className="text-gray-400">/</span>
                <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Tilt Neon' }}>
                  {selectedSeries.name} Models
                </h2>
              </div>
            )}

            <ProductsGrid
              products={productsToRender} 
              hoveredProduct={hoveredProduct}
              setHoveredProduct={setHoveredProduct}
              onProductClick={selectedSeries ? null : handleSeriesClick}
              isShowingModels={!!selectedSeries}
            />

            {/* --- NEW LOAD MORE BUTTON --- */}
            {hasMoreProducts && !selectedSeries && ( // Only show if there are more products AND not viewing models
              <div className="text-center mt-10">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold
                             hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
                  style={{ fontFamily: 'Exo 2' }} // Apply primary font
                >
                  Load More Products
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">➡️</span>
                </button>
              </div>
            )}
            {/* --- END NEW LOAD MORE BUTTON --- */}

          </div>
          <JoinCommunitySection />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;