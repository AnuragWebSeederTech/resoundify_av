import React, { useState, useEffect, useRef } from 'react';
// Assuming lucide-react is installed: npm install lucide-react
import { Mail, CheckCircle, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  // This state was used in the original snippet but doesn't seem to have a visual effect.
  // Keeping it for completeness based on the provided code, but it can be removed if not used.
  const [focusedField, setFocusedField] = useState('');

  const mapRef = useRef(null); // Ref for the map container

  // Define contact methods for the sidebar
  const contactMethods = [
    { icon: Phone, primary: 'Call Us', secondary: '+91 98765 43210' },
    { icon: Mail, primary: 'Email Us', secondary: 'support@example.com' },
    { icon: MapPin, primary: 'Our Location', secondary: 'Audio District, Mumbai' },
  ];

  /**
   * Handles changes to form input fields.
   * @param {Object} e - The event object from the input change.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Handles form submission.
   * @param {Object} e - The event object from the form submission.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true); // Set submitting state to true

    // Simulate an asynchronous API call or backend submission
    // In a real application, you would send `formData` to your backend here.
    try {
      // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
      console.log('Form submitted successfully:', formData);
      setSubmitted(true); // Show success message
      // Optionally reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  /**
   * Effect hook to initialize the map when the component mounts.
   * This is a placeholder; a real map integration (e.g., Google Maps API)
   * would involve loading external scripts and initializing the map object.
   */
  useEffect(() => {
    if (mapRef.current) {
      // console.log('Map container is ready:', mapRef.current);
      // Example for Google Maps API integration (requires Google Maps API script to be loaded in index.html):
      // if (window.google && window.google.maps) {
      //   new window.google.maps.Map(mapRef.current, {
      //     center: { lat: 19.0760, lng: 72.8777 }, // Coordinates for Mumbai, India
      //     zoom: 12,
      //     disableDefaultUI: true, // Optional: disable default map controls
      //   });
      // } else {
      //   console.warn("Google Maps API not loaded. Map will not display.");
      // }
    }
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <div className="container mx-auto px-4 py-12 font-sans">
      {/* Main grid layout for the contact form and sidebar */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl h-full p-8 shadow-sm border border-gray-200 flex flex-col">
            {/* Contact Team Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Contact Our Team</h2>
                  <p className="text-sm text-gray-600">For all your queries and customer care needs</p>
                </div>
              </div>
            </div>

            {/* Conditional rendering for submission status */}
            {submitted ? (
              // Success message after form submission
              <div className="text-center flex-grow flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 2 hours.</p>
              </div>
            ) : (
              // Contact Form
              <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col justify-between">
                {/* Personal Info fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="e.g., Order Inquiry, Technical Support, General Question"
                    required
                  />
                </div>

                {/* Message field */}
                <div className="relative flex-grow">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    // The h-70 class might be a custom Tailwind utility or need adjustment.
                    // Tailwind's default height scale usually goes up to h-96.
                    // If h-70 is intended as a specific pixel height, consider using h-[17.5rem] for 280px (70*0.25rem)
                    // or defining h-70 in your tailwind.config.js. For now, it's kept as is.
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 resize-none h-full min-h-[120px]"
                    placeholder="Please describe your query or concern in detail..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting} // Disable button while submitting
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3.5 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      {/* Spinner for loading state */}
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Sidebar Section */}
        <div className="space-y-8">
          {/* Contact Information Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon; // Dynamic icon component
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{method.primary}</p>
                      <p className="text-xs text-gray-600">{method.secondary}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Our Location / Map Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
              <MapPin className="w-5 h-5 text-gray-600" />
            </div>

            {/* Map Placeholder */}
            <div ref={mapRef} className="mb-4 rounded-lg overflow-hidden border border-gray-200 min-h-[180px] bg-gray-100 flex items-center justify-center text-gray-500">
              {/* Map will be loaded here via useEffect or display a placeholder */}
              {/* For a live preview, consider adding a simple image placeholder if no map API is connected */}
              <p>Map Placeholder</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Audio District, Mumbai</p>
              <p className="text-sm text-gray-600">Maharashtra, India 400001</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Mumbai,+Maharashtra,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-900 hover:text-gray-700 transition-colors"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
