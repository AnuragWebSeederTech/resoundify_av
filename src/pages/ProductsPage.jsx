import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/Products/ProductsHero';
import ProductFilter from '../components/Products/ProductFilter';
import ProductsGrid from '../components/Products/ProductsGrid';
import JoinCommunitySection from '../components/JoinCommunitySection';
import ModelDetailModal from '../components/Products/ModelDetailModal';

// Import the product data
import { productsData } from '../data/products';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [showDetailView, setShowDetailView] = useState(false);
  const [productsPerPage] = useState(12);
  const [productsToShow, setProductsToShow] = useState(12);

  // Categories array for filtering products
  const categories = [
    { id: "all", name: "All Products" },
    ...productsData.map(brand => ({
      id: brand.category,
      name: brand.name,
    })),
  ];

  // Get filtered products based on current selection
  const getDisplayProducts = () => {
    if (selectedSeries) {
      return selectedSeries.models;
    }

    if (activeCategory === "all") {
      return productsData.flatMap(brand => brand.series || []);
    } else {
      const selectedBrand = productsData.find(brand => brand.category === activeCategory);
      return selectedBrand ? selectedBrand.series : [];
    }
  };

  const allFilteredProducts = getDisplayProducts();
  const productsToRender = allFilteredProducts.slice(0, productsToShow);
  const hasMoreProducts = allFilteredProducts.length > productsToShow;

  // Event handlers
  const handleLoadMore = () => {
    setProductsToShow(prev => prev + productsPerPage);
  };

  const handleSeriesClick = (series) => {
    setSelectedSeries(series);
    setHoveredProduct(null);
    setProductsToShow(12);
  };

  const handleBackToSeries = () => {
    setSelectedSeries(null);
    setHoveredProduct(null);
    setProductsToShow(productsPerPage);
  };

  const handleLearnMore = (model) => {
    setSelectedModel(model);
    setShowDetailView(true);
  };

  const handleBackToProducts = () => {
    setShowDetailView(false);
    setSelectedModel(null);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSelectedSeries(null);
    setProductsToShow(productsPerPage);
    setShowDetailView(false);
    setSelectedModel(null);
    setHoveredProduct(null);
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        {/* Hero Section */}
        <ProductsHero />

        {/* Main Content with Sidebar Layout */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:20px_20px] opacity-30" />
          
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
            
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {selectedSeries ? `${selectedSeries.name} Models` : showDetailView ? selectedModel?.name : 'Our Products'}
                  </h1>
                  <p className="text-lg text-gray-600">
                    {selectedSeries 
                      ? `Explore all models in the ${selectedSeries.name} series` 
                      : showDetailView 
                      ? 'Detailed product information and specifications'
                      : 'Discover our complete range of innovative products'
                    }
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center space-x-3">
                  {(selectedSeries || showDetailView) && (
                    <button
                      onClick={() => {
                        setSelectedSeries(null);
                        setShowDetailView(false);
                        setSelectedModel(null);
                        setProductsToShow(productsPerPage);
                      }}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <span>All Products</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Breadcrumb */}
              {(selectedSeries || showDetailView) && (
                <nav className="mt-4 flex items-center space-x-2 text-sm text-gray-500">
                  <button
                    onClick={() => {
                      setSelectedSeries(null);
                      setShowDetailView(false);
                      setSelectedModel(null);
                    }}
                    className="hover:text-emerald-600 transition-colors duration-200"
                  >
                    Products
                  </button>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  {selectedSeries && (
                    <>
                      {!showDetailView ? (
                        <span className="text-emerald-600 font-medium">{selectedSeries.name}</span>
                      ) : (
                        <>
                          <button
                            onClick={handleBackToProducts}
                            className="hover:text-emerald-600 transition-colors duration-200"
                          >
                            {selectedSeries.name}
                          </button>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-emerald-600 font-medium">{selectedModel?.name}</span>
                        </>
                      )}
                    </>
                  )}
                </nav>
              )}
            </div>

            {/* Main Layout Grid */}
            <div className="grid lg:grid-cols-7 xl:grid-cols-8 gap-8 lg:gap-12">
              
              {/* Left Sidebar - Filter */}
              <div className="lg:col-span-2 xl:col-span-2">
                <ProductFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  setActiveCategory={handleCategoryChange}
                />
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-5 xl:col-span-6">
                
                {/* Results Header */}
                {!showDetailView && (
                  <div className="mb-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
                      <div className="flex items-center justify-between flex-wrap gap-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="font-semibold text-gray-900">
                              {productsToRender.length} of {allFilteredProducts.length}
                            </span>
                            <span className="text-gray-600">
                              {selectedSeries ? 'models' : 'products'} shown
                            </span>
                          </div>
                          
                          {activeCategory !== "all" && (
                            <div className="hidden sm:flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                              <span>Filtered by:</span>
                              <span className="font-semibold">
                                {categories.find(cat => cat.id === activeCategory)?.name}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center space-x-2">
                          <button className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Container */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  {showDetailView ? (
                    <ModelDetailModal 
                      model={selectedModel}
                      onBack={handleBackToProducts}
                    />
                  ) : (
                    <div className="p-8 lg:p-12">
                      {productsToRender.length > 0 ? (
                        <>
                          <ProductsGrid
                            products={productsToRender} 
                            hoveredProduct={hoveredProduct}
                            setHoveredProduct={setHoveredProduct}
                            onProductClick={selectedSeries ? null : handleSeriesClick}
                            isShowingModels={!!selectedSeries}
                            onLearnMore={handleLearnMore}
                          />

                          {/* Load More Section */}
                          {hasMoreProducts && (
                            <div className="mt-16 pt-12 border-t border-gray-200">
                              <div className="text-center">
                                <button
                                  onClick={handleLoadMore}
                                  className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl text-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                  <span>Load More</span>
                                  <div className="bg-white/20 rounded-full px-3 py-1 text-sm">
                                    +{Math.min(productsPerPage, allFilteredProducts.length - productsToRender.length)}
                                  </div>
                                  <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                  </svg>
                                </button>
                                <p className="mt-4 text-gray-500 text-sm">
                                  {allFilteredProducts.length - productsToRender.length} more {selectedSeries ? 'models' : 'products'} available
                                </p>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        /* Empty State */
                        <div className="text-center py-24">
                          <div className="w-40 h-40 mx-auto mb-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                            <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">No Products Found</h3>
                          <p className="text-gray-600 mb-12 max-w-lg mx-auto text-lg">
                            We couldn't find any products matching your current filter. Try selecting a different category or view all products.
                          </p>
                          <div className="flex items-center justify-center space-x-4">
                            <button
                              onClick={() => handleCategoryChange("all")}
                              className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                              </svg>
                              <span>View All Products</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-24">
          <JoinCommunitySection />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductsPage;