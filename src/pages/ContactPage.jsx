import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Briefcase, CalendarCheck, Globe, Award, Star } from 'lucide-react'; // Added Star icon for testimonials

// Import your Header and Footer components
import Header from '../components/Header'; // Adjust path if your Header is elsewhere
import Footer from '../components/Footer'; // Adjust path if your Footer is elsewhere

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    mobile: '',
    interestedService: '',
    projectBudget: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const [isContentVisible, setIsContentVisible] = useState(false); // For entry animation

  useEffect(() => {
    // Trigger entry animation for main content on mount
    setIsContentVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.company) newErrors.company = 'Company Name is required.';
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile Number is required.';
    } else if (!/^\+?\d{10,15}$/.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number.';
    }
    if (!formData.interestedService) newErrors.interestedService = 'Please select a service.';
    if (!formData.projectBudget) newErrors.projectBudget = 'Please select a budget.';
    if (!formData.message) newErrors.message = 'Message is required.';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setIsLoading(true); // Start loading
      setIsSubmitted(false); // Reset submitted status

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted for Resoundify:', formData);
        setIsSubmitted(true);
        setErrors({}); // Clear any previous errors
        setFormData({
          fullName: '',
          email: '',
          company: '',
          mobile: '',
          interestedService: '',
          projectBudget: '',
          message: '',
        });
      } catch (error) {
        console.error("Submission error:", error);
        // You might set an error state here to show a submission error message
      } finally {
        setIsLoading(false); // End loading
      }
    }
  };

  const serviceOptions = [
    'Dante Integration Consulting',
    'Audio System Design',
    'Hardware Solutions (Specify product type)',
    'Software & Firmware Development',
    'Technical Support & Training',
    'Other Audio-Visual Needs',
  ];

  const budgetOptions = [
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    'More than $50,000',
    'Custom Project',
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'CEO, InnovateTech',
      quote: "Resoundify transformed our office's audio conferencing. The clarity is exceptional, and their team was incredibly professional and efficient.",
      rating: 5,
      avatar: '/path-to-sarah-avatar.jpg', // Placeholder
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Event Manager, Grand Venues',
      quote: 'We relied on Resoundify for our latest concert venue sound design. The results were phenomenal, exceeding all expectations. True audio masters!',
      rating: 5,
      avatar: '/path-to-michael-avatar.jpg', // Placeholder
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'CTO, FutureWave Studios',
      quote: 'Their Dante integration expertise is unmatched. They seamlessly integrated complex systems, and their support has been excellent.',
      rating: 4,
      avatar: '/path-to-emily-avatar.jpg', // Placeholder
    },
    {
      id: 4,
      name: 'David Lee',
      title: 'Education Director, Summit Academy',
      quote: 'Resoundify provided us with an intuitive and powerful audio solution for our lecture halls. Highly recommend their services.',
      rating: 5,
      avatar: '/path-to-david-avatar.jpg', // Placeholder
    },
    {
      id: 5,
      name: 'Priya Sharma',
      title: 'Marketing Head, Global Brands',
      quote: 'We needed a custom audio solution for our interactive exhibit, and Resoundify delivered beyond imagination. Creative and technically brilliant!',
      rating: 5,
      avatar: '/path-to-priya-avatar.jpg', // Placeholder
    },
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill={i < rating ? "currentColor" : "none"} stroke={i < rating ? "currentColor" : "gray"} />
        ))}
      </div>
    );
  };

  return (
    // Main container with light theme background and black text
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Header /> {/* Call the Header component */}

      {/* Main Content Area - Wrapped for animation */}
      <div className={`pt-25 flex flex-col lg:flex-row flex-grow transform transition-all duration-1000 ease-out
        ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Left Section: Info and Stats */}
        <div className="lg:w-1/2 p-8 md:p-16 pt-16 lg:pt-0 flex flex-col justify-center bg-gray-50 shadow-lg lg:shadow-none rounded-lg mx-4 lg:mx-0 my-4 lg:my-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Get a quote for your project
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-12">
            Let us help you achieve superior audio-visual experiences. Fill in the form and our team will get back to you.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md
                          transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
              <CalendarCheck className="w-8 h-8 text-blue-500 mr-4" />
              <div>
                <div className="text-3xl font-bold text-gray-900">99%</div>
                <div className="text-gray-600 text-base">Client Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md
                          transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
              <Briefcase className="w-8 h-8 text-green-500 mr-4" />
              <div>
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-gray-600 text-base">Years in AV Innovation</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md
                          transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
              <Globe className="w-8 h-8 text-purple-500 mr-4" />
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600 text-base">Successful Deployments</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md
                          transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
              <Award className="w-8 h-8 text-yellow-500 mr-4" />
              <div>
                <div className="text-3xl font-bold text-gray-900">Leading</div>
                <div className="text-gray-600 text-base">Dante Solutions Provider</div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Recognitions</h3>
            <div className="flex justify-center flex-wrap gap-8">
              <div className="flex flex-col items-center group bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-xl">
                <img src={"image_9408ec.png"} alt="Best Audio Tech Innovation Award" className="h-24 w-24 mb-2 object-contain
                               transition-transform duration-300 group-hover:scale-110" />
                <p className="text-gray-800 text-sm font-semibold">"Best Audio Tech"<br />Innovation Award</p>
                <p className="text-xs text-gray-500">2023 Tech Excellence</p>
              </div>
              <div className="flex flex-col items-center group bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-xl">
                <img src={"image_9405e5.png"} alt="Top Industry Solution Provider" className="h-24 w-24 mb-2 object-contain
                               transition-transform duration-300 group-hover:scale-110" />
                <p className="text-gray-800 text-sm font-semibold">"Top Industry"<br />Solution Provider</p>
                <p className="text-xs text-gray-500">AV Integration Summit</p>
              </div>
              <div className="flex flex-col items-center group bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-xl">
                <img src={"image_9409c7.png"} alt="Trusted Partner Excellence Badge" className="h-24 w-24 mb-2 object-contain
                               transition-transform duration-300 group-hover:scale-110" />
                <p className="text-gray-800 text-sm font-semibold">"Trusted Partner"<br />Excellence Badge</p>
                <p className="text-xs text-gray-500">Dante Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        {/* Changed background to blue-600 for contrast but still within blue theme */}
        <div className="lg:w-1/2 p-8 md:p-16 bg-blue-600 text-white flex flex-col justify-center relative overflow-hidden rounded-lg mx-4 lg:mx-0 my-4 lg:my-0 lg:ml-0">
            {/* Background elements (kept white for subtle contrast) */}
            <div className="absolute inset-0 z-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" className="animate-pulse-slow"></circle>
                  <circle cx="20" cy="80" r="15" stroke="white" strokeWidth="0.5" className="animate-pulse-slow animation-delay-2s"></circle>
                  <circle cx="80" cy="20" r="20" stroke="white" strokeWidth="0.5" className="animate-pulse-slow animation-delay-4s"></circle>
              </svg>
            </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-8 relative z-10 text-white">Hello there :)</h2>

          {isSubmitted && (
            <div className="bg-green-600 text-white px-4 py-3 rounded-lg relative mb-6 text-base animate-fadeInUp z-10 shadow-lg">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline ml-2">Your message has been sent. We'll get back to you soon!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-blue-100 mb-2">
                  Full Name<span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full p-3 bg-blue-700 text-white border ${
                    errors.fullName ? 'border-red-400' : 'border-blue-500'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-base placeholder-blue-200 shadow-inner`}
                  placeholder="Enter your name"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-300">{errors.fullName}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                  Email Address<span className="text-red-300">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 bg-blue-700 text-white border ${
                    errors.email ? 'border-red-400' : 'border-blue-500'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-base placeholder-blue-200 shadow-inner`}
                  placeholder="Enter your email id"
                />
                {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-2">
                  Company<span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full p-3 bg-blue-700 text-white border ${
                    errors.company ? 'border-red-400' : 'border-blue-500'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-base placeholder-blue-200 shadow-inner`}
                  placeholder="Enter your company name"
                />
                {errors.company && <p className="mt-1 text-sm text-red-300">{errors.company}</p>}
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-blue-100 mb-2">
                  Mobile Number<span className="text-red-300">*</span>
                </label>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 text-sm text-blue-200 bg-blue-700 border border-blue-500 rounded-l-md h-[42px] shadow-inner">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`flex-1 p-3 bg-blue-700 text-white border ${
                      errors.mobile ? 'border-red-400' : 'border-blue-500'
                    } rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-base placeholder-blue-200 shadow-inner`}
                    placeholder="Phone number"
                  />
                </div>
                {errors.mobile && <p className="mt-1 text-sm text-red-300">{errors.mobile}</p>}
              </div>

              <div>
                <label htmlFor="interestedService" className="block text-sm font-medium text-blue-100 mb-2">
                  Interested Service<span className="text-red-300">*</span>
                </label>
                <select
                  id="interestedService"
                  name="interestedService"
                  value={formData.interestedService}
                  onChange={handleChange}
                  className={`w-full p-3 bg-blue-700 text-white border ${
                    errors.interestedService ? 'border-red-400' : 'border-blue-500'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none text-base custom-select-light shadow-inner`}
                >
                  <option value="">Select Interested Service</option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.interestedService && <p className="mt-1 text-sm text-red-300">{errors.interestedService}</p>}
              </div>
              <div>
                <label htmlFor="projectBudget" className="block text-sm font-medium text-blue-100 mb-2">
                  Project Budget<span className="text-red-300">*</span>
                </label>
                <select
                  id="projectBudget"
                  name="projectBudget"
                  value={formData.projectBudget}
                  onChange={handleChange}
                  className={`w-full p-3 bg-blue-700 text-white border ${
                    errors.projectBudget ? 'border-red-400' : 'border-blue-500'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none text-base custom-select-light shadow-inner`}
                >
                  <option value="">Select Project Budget</option>
                  {budgetOptions.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
                {errors.projectBudget && <p className="mt-1 text-sm text-red-300">{errors.projectBudget}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                Message<span className="text-red-300">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 bg-blue-700 text-white border ${
                  errors.message ? 'border-red-400' : 'border-blue-500'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-base placeholder-blue-200 shadow-inner`}
                placeholder="Tell us about your audio-visual project..."
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-300">{errors.message}</p>}
            </div>

            <p className="text-blue-100 text-base pt-4">
                We're excited to help you amplify your sound experience!
            </p>

            <button
              type="submit"
              disabled={isLoading} // Disable button when loading
              className="w-full py-4 px-6 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-xl
                          hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2
                          disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-400"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                <>
                  <span>SUBMIT NOW</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* "What Our Clients Say" Section */}
      <section className="py-16 px-8 bg-gray-100 text-gray-900 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-900">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200
                                                transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-blue-500 shadow-md"
                />
              )}
              {renderStars(testimonial.rating)}
              <p className="text-lg italic text-gray-700 mb-6 mt-4 line-clamp-4">
                "{testimonial.quote}"
              </p>
              <h4 className="font-bold text-gray-900 text-xl">{testimonial.name}</h4>
              <p className="text-gray-600 text-sm">{testimonial.title}</p>
            </div>
          ))}
        </div>
        <button className="mt-12 py-3 px-8 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg
                           hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-400">
          Read More Testimonials
        </button>
      </section>

      <Footer /> {/* Call the Footer component */}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/yourresoundifynumber"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-xl hover:bg-green-600 transition-colors z-50
                   transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Custom CSS for animations and text shadows (removed text shadows on light elements) */}
      <style jsx>{`
        @keyframes pulse-slow {
            0%, 100% {
                transform: scale(0.9);
                opacity: 0.1;
            }
            50% {
                transform: scale(1.1);
                opacity: 0.3;
            }
        }
        .animate-pulse-slow {
            animation: pulse-slow 6s infinite ease-in-out;
        }
        .animation-delay-2s {
            animation-delay: 2s;
        }
        .animation-delay-4s {
            animation-delay: 4s;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Custom style for select arrow color in light theme */
        .custom-select-light {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23ffffff'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem; /* Space for the custom arrow */
        }
      `}</style>
    </div>
  );
};

export default ContactPage;