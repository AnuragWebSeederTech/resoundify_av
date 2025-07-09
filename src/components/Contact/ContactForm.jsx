import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import emailjs from '@emailjs/browser'; // Import EmailJS library

// Import icons from lucide-react
import { Phone, Mail, CheckCircle, MapPin, ArrowRight, XCircle } from 'lucide-react'; // Added XCircle for error messages

// Fix default marker icon issue in Leaflet + Webpack/Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const ContactForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState({ type: '', text: '' }); // State for success/error messages

  // State for tracking focused input field (for potential styling)
  const [focusedField, setFocusedField] = useState('');

  // Refs for animation/intersection observation
  const animatedElementsRef = useRef([]); // To hold refs of elements to animate
  const [animatedElements, setAnimatedElements] = useState(new Set()); // To track which elements are in view

  // Ref for the map container to ensure it's mounted before Leaflet tries to render
  const mapRef = useRef(null);

  // Ref for the form element, needed by EmailJS
  const formRef = useRef();

  // Dubai location coordinates for the map
  const dubaiCoordinates = [25.1972, 55.2744]; // Approximate coordinates for Burj Khalifa area

  // EmailJS configuration (REPLACE WITH YOUR ACTUAL IDs)
  const EMAILJS_SERVICE_ID = 'service_pdp24wn'; // e.g., 'service_xxxxxxx'
  const EMAILJS_TEMPLATE_ID = 'template_9ea33d8'; // e.g., 'template_xxxxxxx'
  const EMAILJS_PUBLIC_KEY = 'LDfDmnFH0NNjK-AGp'; // e.g., 'your_public_key_xxxxxxx'

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.animate);
            setAnimatedElements((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe all elements that have a 'data-animate' attribute
    animatedElementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array means this runs once on mount

  // Leaflet Map Initialization
  useEffect(() => {
    let map = null;

    // Check if mapRef.current exists and if Leaflet map is not already initialized on it
    if (mapRef.current && !mapRef.current._leaflet_id) {
      map = L.map(mapRef.current).setView(dubaiCoordinates, 13); // Set view to Dubai

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add a marker to the map
      L.marker(dubaiCoordinates).addTo(map)
        .bindPopup('Our office at Burj Khalifa!')
        .openPopup();
    }

    // Cleanup function to remove map when component unmounts
    return () => {
      if (map && mapRef.current && mapRef.current._leaflet_id) {
        map.remove();
      }
    };
  }, [mapRef]); // Depend on mapRef to ensure it's available

  // Handles changes in form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed: Name=${name}, Value=${value}`); // Debugging line
    setFormData((prevData) => {
      const newState = {
        ...prevData,
        [name]: value,
      };
      console.log('Current formData after update:', newState); // Debugging line
      return newState;
    });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission
    setIsSubmitting(true); // Set submitting state to true
    setSubmissionMessage({ type: '', text: '' }); // Clear previous messages

    try {
      // Send email using EmailJS
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);

      setSubmitted(true); // Set submitted to true on success
      setSubmissionMessage({ type: 'success', text: 'Message sent successfully! We will get back to you within 24 hours.' });
      setFormData({ // Clear form data after successful submission
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
      setSubmitted(false); // Ensure form is visible again if submission failed
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  // Function to reset the form and allow new input
  const handleSendAnotherMessage = () => {
    setSubmitted(false);
    setSubmissionMessage({ type: '', text: '' });
    setFormData({ // Optionally clear form data again, though it should already be clear from successful submission
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  // Data for contact methods in the sidebar
  const contactMethods = [
    {
      icon: Phone,
      primary: '+971 4 888 8888', // Updated to a Dubai-like number
      secondary: 'Mon-Fri 9am-5pm GST', // Updated to GST (Gulf Standard Time)
    },
    {
      icon: Mail,
      primary: 'support@resoundify.com',
      secondary: 'We respond within 24 hours',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12" style={{ fontFamily: '"Exo 2", sans-serif' }}> {/* Primary Font applied here */}
      {/* Heading - Moved outside the grid container */}
      <div
        className={`text-center mb-12 transition-all duration-1000 ${
          animatedElements.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        data-animate={0}
        ref={(el) => (animatedElementsRef.current[0] = el)} // Attach ref for animation
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[Tilt_Neon] text-slate-900 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Contact <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">Our Team</span>
          </h2>
        <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Contact Form - Modified for General Inquiries */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl h-[700px] p-8 shadow-sm border border-gray-200 flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
                  <p className="text-sm text-gray-600">For all your queries and customer care needs</p>
                </div>
              </div>
            </div>

            {/* Submission Message Display */}
            {submissionMessage.text && (
              <div className={`p-4 rounded-lg mb-4 flex items-center gap-3 ${
                submissionMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {submissionMessage.type === 'success' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
                <p className="text-sm font-medium">{submissionMessage.text}</p>
              </div>
            )}

            {submitted && submissionMessage.type === 'success' ? (
              <div className="text-center flex-grow flex flex-col justify-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">We'll get back to you within 24 hours.</p>
                <button
                  onClick={handleSendAnotherMessage}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-200"
                >
                  Send Another Message
                  <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                </button>
              </div>
            ) : (
              <form key={submitted ? 'submitted-form' : 'initial-form'} ref={formRef} onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col justify-between">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name" // CHANGED: from user_name to name
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
                      name="email" // CHANGED: from user_email to email
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
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 resize-none h-40"
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

            <div ref={mapRef} className="mb-4 rounded-lg overflow-hidden border border-gray-200 min-h-[250px] w-full">
              {/* Added a more robust min-height for the map and full width */}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Burj Khalifa</p>
              <p className="text-sm text-gray-600">1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, Dubai, UAE</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Burj+Khalifa"
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
