import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'; // Assuming lucide-react for icons

const ContactUs = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State to manage form submission success and loading
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State to track which input field is focused (optional, for potential styling)
  const [focusedField, setFocusedField] = useState('');

  // Ref for the map container to potentially initialize a map library
  const mapRef = useRef(null);

  // useEffect to handle map initialization (e.g., Google Maps, Leaflet)
  useEffect(() => {
    // This is where you would integrate your map library.
    // For example, if using Google Maps:
    // const initMap = () => {
    //   if (mapRef.current) {
    //     new window.google.maps.Map(mapRef.current, {
    //       center: { lat: 19.0760, lng: 72.8777 }, // Mumbai coordinates
    //       zoom: 12,
    //       disableDefaultUI: true, // Example: disable UI controls
    //     });
    //   }
    // };

    // You'd typically load the Google Maps script dynamically if not already present
    // if (!window.google) {
    //   const script = document.createElement('script');
    //   script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_Maps_API_KEY&callback=initMap`;
    //   script.async = true;
    //   document.head.appendChild(script);
    //   window.initMap = initMap; // Make initMap globally accessible for the callback
    // } else {
    //   initMap();
    // }

    // For now, a simple console log indicates where the map logic would go
    if (mapRef.current) {
      console.log('Map container is ready. Integrate your map initialization logic here (e.g., Google Maps, Leaflet).');
      // You could also add a placeholder image or text if the map isn't loading
      mapRef.current.innerHTML = '<div class="flex items-center justify-center h-full text-gray-500">Map Loading...</div>';
    }

  }, []); // Empty dependency array means this runs once on mount

  // Handles changes in form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission
    setIsSubmitting(true); // Set submitting state to true

    // Simulate an API call delay
    try {
      // In a real application, you would send formData to your backend here
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

      setSubmitted(true); // Set submitted to true on success
      setFormData({ // Clear form data after successful submission
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, maybe show an error message to the user
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  // Data for contact methods in the sidebar
  const contactMethods = [
    {
      icon: Phone,
      primary: '+91 98765 43210',
      secondary: 'Mon-Fri 9am-5pm IST',
    },
    {
      icon: Mail,
      primary: 'support@resoundify.com',
      secondary: 'We respond within 24 hours',
    },
    {
      icon: Clock,
      primary: '24/7 Customer Care',
      secondary: 'Always here to help',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-3 gap-12">

        {/* Main Contact Form - Modified for General Inquiries */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl h-185 p-8 shadow-sm border border-gray-200 flex flex-col">

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

            {submitted ? (
              <div className="text-center flex-grow flex flex-col justify-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col justify-between">
                {/* Personal Info */}
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

                {/* Subject */}
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

                {/* Message */}
                <div className="relative flex-grow">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 resize-none h-70"
                    placeholder="Please describe your query or concern in detail..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3.5 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed "
                >
                  {isSubmitting ? (
                    <>
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

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
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

          {/* Working Map */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
              <MapPin className="w-5 h-5 text-gray-600" />
            </div>

            <div ref={mapRef} className="mb-4 rounded-lg overflow-hidden border border-gray-200 min-h-[180px]">
              {/* Map will be loaded here via useEffect */}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Audio District, Mumbai</p>
              <p className="text-sm text-gray-600">Maharashtra, India 400001</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Mumbai,+Maharashtra,+India" // Replace with actual map URL
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

export default ContactUs;