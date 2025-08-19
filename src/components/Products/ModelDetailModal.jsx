import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Download, Share2, Heart, ShoppingCart, Play, Monitor, Cpu, Zap, Shield, Settings, Star, Award, Clock, Users, CheckCircle } from 'lucide-react';

const ModelDetailModal = ({ model, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Get images with fallback
  const images = model?.images && model.images.length > 0 
    ? model.images 
    : ["https://placehold.co/800x600/E5E7EB/6B7280?text=Product+Image"];

  // Reset image index when model changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsImageZoomed(false);
    setActiveTab('overview');
  }, [model]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Mock demo data - in real app, this would come from the model data
  const getDemoData = (modelName) => ({
    overview: {
      description: `The ${modelName} represents the pinnacle of modern engineering and innovation. This cutting-edge product combines advanced technology with user-friendly design to deliver exceptional performance across all applications. Whether you're a professional seeking reliability or an enthusiast demanding the best, this model exceeds expectations in every category.`,
      highlights: [
        "Industry-leading performance benchmarks",
        "Advanced AI-powered optimization",
        "Seamless integration capabilities", 
        "Enterprise-grade security features",
        "24/7 professional support included"
      ],
      rating: 4.8,
      reviews: 1247,
      availability: "In Stock"
    },
    features: [
      {
        icon: <Cpu className="w-6 h-6" />,
        title: "Advanced Processing Power",
        description: "Powered by next-generation processors that deliver up to 40% better performance than previous models, ensuring smooth operation even under heavy workloads."
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Lightning-Fast Response",
        description: "Ultra-low latency design with response times under 5ms, providing real-time feedback and instantaneous command execution."
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Enterprise Security",
        description: "Military-grade encryption with multi-layer security protocols, ensuring your data remains protected at all times."
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: "Customizable Interface",
        description: "Fully customizable dashboard with drag-and-drop widgets, personalized themes, and adaptive layouts that match your workflow."
      },
      {
        icon: <Monitor className="w-6 h-6" />,
        title: "Multi-Platform Support",
        description: "Compatible across all major platforms with native apps for Windows, macOS, Linux, iOS, and Android devices."
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Team Collaboration",
        description: "Built-in collaboration tools with real-time sharing, version control, and team management features for seamless teamwork."
      }
    ],
    specifications: {
      general: [
        { label: "Model Number", value: model?.id || "N/A" },
        { label: "Product Name", value: model?.name || "N/A" },
        { label: "Release Date", value: "2024" },
        { label: "Warranty", value: "3 Years" },
        { label: "Certification", value: "ISO 9001, CE, FCC" }
      ],
      technical: [
        { label: "Processing Speed", value: "3.2 GHz Base / 4.8 GHz Boost" },
        { label: "Memory", value: "32 GB DDR5" },
        { label: "Storage", value: "1 TB NVMe SSD" },
        { label: "Power Consumption", value: "150W (Typical)" },
        { label: "Operating Temperature", value: "0°C to 40°C" }
      ],
      connectivity: [
        { label: "Network", value: "Wi-Fi 6E, Bluetooth 5.3" },
        { label: "Ports", value: "4x USB 3.2, 2x USB-C, HDMI 2.1" },
        { label: "Expansion", value: "PCIe 5.0 x16 slots" },
        { label: "Audio", value: "7.1 Surround Sound" },
        { label: "Video Output", value: "4K @ 120Hz, 8K @ 60Hz" }
      ]
    },
    useCases: [
      {
        title: "Professional Development",
        description: "Perfect for software developers, designers, and content creators who need powerful processing capabilities and reliable performance.",
        benefits: ["Faster compilation times", "Smooth 4K video editing", "Multi-tasking efficiency"]
      },
      {
        title: "Enterprise Solutions",
        description: "Ideal for businesses requiring secure, scalable solutions with enterprise-grade features and professional support.",
        benefits: ["Enhanced security protocols", "Centralized management", "24/7 support"]
      },
      {
        title: "Creative Workflows",
        description: "Optimized for creative professionals working with graphics, video, audio, and other media-intensive applications.",
        benefits: ["Real-time rendering", "Color-accurate displays", "Professional I/O options"]
      },
      {
        title: "Gaming & Entertainment",
        description: "Delivers exceptional gaming performance with high frame rates and immersive audio-visual experiences.",
        benefits: ["120+ FPS gaming", "HDR support", "Low-latency audio"]
      }
    ],
    support: {
      documentation: [
        "Quick Start Guide",
        "User Manual (PDF)",
        "API Documentation", 
        "Video Tutorials",
        "Best Practices Guide"
      ],
      resources: [
        "24/7 Technical Support",
        "Community Forum",
        "Live Chat Support",
        "Remote Assistance",
        "Training Programs"
      ]
    }
  });

  if (!model) return null;

  const demoData = getDemoData(model.name);
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Monitor className="w-4 h-4" /> },
    { id: 'features', label: 'Features', icon: <Star className="w-4 h-4" /> },
    { id: 'specifications', label: 'Specifications', icon: <Settings className="w-4 h-4" /> },
    { id: 'use-cases', label: 'Use Cases', icon: <Users className="w-4 h-4" /> },
    { id: 'support', label: 'Support', icon: <Shield className="w-4 h-4" /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Product Rating & Status */}
            <div className="flex flex-wrap items-center gap-6 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(demoData.overview.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">{demoData.overview.rating}</span>
                <span className="text-gray-600">({demoData.overview.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-700">{demoData.overview.availability}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold text-emerald-700">Editor's Choice</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {demoData.overview.description}
              </p>

              {/* Key Highlights */}
              <div className="grid md:grid-cols-2 gap-4">
                {demoData.overview.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Features</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {demoData.features.map((feature, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-emerald-100 rounded-xl text-emerald-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'specifications':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
            
            {/* General Specifications */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">General</h4>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {demoData.specifications.general.map((spec, index) => (
                  <div key={index} className={`flex justify-between items-center p-4 ${index !== demoData.specifications.general.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-600 font-mono text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Technical</h4>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {demoData.specifications.technical.map((spec, index) => (
                  <div key={index} className={`flex justify-between items-center p-4 ${index !== demoData.specifications.technical.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-600 font-mono text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connectivity */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Connectivity</h4>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {demoData.specifications.connectivity.map((spec, index) => (
                  <div key={index} className={`flex justify-between items-center p-4 ${index !== demoData.specifications.connectivity.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-600 font-mono text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'use-cases':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Use Cases & Applications</h3>
            <div className="grid gap-6">
              {demoData.useCases.map((useCase, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'support':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Support & Resources</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Documentation */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Download className="w-5 h-5 mr-2 text-emerald-600" />
                  Documentation
                </h4>
                <div className="space-y-3">
                  {demoData.support.documentation.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                      <span className="text-gray-700">{doc}</span>
                      <Download className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Resources */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-emerald-600" />
                  Support Resources
                </h4>
                <div className="space-y-3">
                  {demoData.support.resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                      <span className="text-gray-700">{resource}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h4>
              <p className="text-gray-600 mb-4">Our support team is available 24/7 to help you with any questions or issues.</p>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                  Contact Support
                </button>
                <button className="px-4 py-2 border border-emerald-300 text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-none">
      {/* Header with Back Button */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4 px-4 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="flex items-center text-emerald-600 hover:text-emerald-800 font-semibold transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </button>
          <span className="text-gray-400">/</span>
          <h2 className="text-4xl font-bold text-gray-900">
            {model.name}
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
            Available
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Image Gallery Section */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Image Section */}
              <div className="space-y-6">
                {/* Main Image */}
                <div className="relative">
                  <div 
                    className={`relative w-full h-96 rounded-2xl overflow-hidden cursor-pointer bg-gray-100 ${
                      isImageZoomed ? 'h-[500px]' : ''
                    }`}
                    onClick={() => setIsImageZoomed(!isImageZoomed)}
                  >
                    <img
                      src={images[currentImageIndex]}
                      alt={`${model.name} - Image ${currentImageIndex + 1}`}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        isImageZoomed ? 'scale-110' : 'hover:scale-105'
                      }`}
                    />
                    
                    {/* Zoom indicator */}
                    <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-sm font-medium">
                      {isImageZoomed ? 'Click to zoom out' : 'Click to zoom in'}
                    </div>

                    {/* Play button overlay for demo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-emerald-600 p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                        <Play size={24} fill="currentColor" />
                      </button>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={goToPreviousImage}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={goToNextImage}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  )}
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                  <div className="flex space-x-3 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                          currentImageIndex === index 
                            ? 'border-emerald-500 shadow-md scale-105' 
                            : 'border-gray-200 hover:border-gray-300 hover:scale-105'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${model.name} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Info Section */}
              <div className="space-y-8">
                {/* Quick Description */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Highlights</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    {demoData.overview.description.substring(0, 200)}...
                  </p>
                </div>

                {/* Key Features Quick View */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
                  <div className="space-y-3">
                    {demoData.overview.highlights.slice(0, 4).map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center">
                      <ShoppingCart size={20} className="mr-2" />
                      Request Quote
                    </button>
                    <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center">
                      <Download size={20} className="mr-2" />
                      Datasheet
                    </button>
                  </div>

                  {/* Secondary Actions */}
                  <div className="flex justify-center space-x-6 pt-2">
                    <button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                      <Heart size={20} className="mr-2" />
                      Save to Favorites
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                      <Share2 size={20} className="mr-2" />
                      Share Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-emerald-600 border-emerald-500 bg-white'
                      : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8 lg:p-12">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailModal;