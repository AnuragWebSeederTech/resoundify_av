import { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer'; // Assuming this path is correct
import TestimonialsSection from '../components/Testimonial'; // Assuming this path is correct
import Header from '../components/Header'; // Assuming this path is correct

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [scrollY, setScrollY] = useState(0); // This state is still here, but its usage for parallax was removed
  const mapRef = useRef(null);

  // This useEffect is for the scroll position, not directly related to the map issue
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize map when component mounts
  useEffect(() => {
    if (mapRef.current) {
      // Create a simple interactive map using iframe from OpenStreetMap
      const mapContainer = mapRef.current;
      mapContainer.innerHTML = `
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=72.8777,19.0760,72.8877,19.0860&layer=mapnik&marker=19.0810,72.8827"
          width="100%"
          height="240"
          style="border: none; border-radius: 12px;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `;
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '', budget: '', timeline: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      primary: "hello@resoundify.com",
      secondary: "Response within 2 hours"
    },
    {
      icon: Phone,
      label: "Phone",
      primary: "+91 98765 43210",
      secondary: "Available 24/7"
    },
    {
      icon: MapPin,
      label: "Location",
      primary: "Mumbai, Maharashtra",
      secondary: "Audio District, India"
    },
    {
      icon: Clock,
      label: "Hours",
      primary: "Mon-Fri 9AM-6PM",
      secondary: "Sat 10AM-4PM"
    }
  ];

  const budgetOptions = ["$5K - $10K", "$10K - $25K", "$25K - $50K", "$50K+"];
  const timelineOptions = ["1-2 weeks", "1 month", "2-3 months", "3+ months"];

  return (
    <>
      <Header />
      {/* The mt-25 class seems unusual for Tailwind; consider if you meant mt-24 or a custom spacing */}
      <div className="min-h-screen mt-24">
        {/* Hero Section with Background Image */}
        <div
          className="relative bg-cover bg-center bg-no-repeat h-140 flex items-center justify-center" // Increased height, added flex for centering
          style={{
            backgroundImage: "url('/images/Contactbg.jpg')", // Ensure this path is correct and the image exists in your public folder
          }}
        >
          {/* Overlay for better text readability */}
          {/* Consider making the overlay darker or lighter based on your image for better text contrast */}
          <div className="absolute inset-0 bg-black/40 z-0"></div> {/* Darkened overlay for better text contrast */}

          {/* Header Content */}
          <div className="relative z-10 text-center text-white px-6"> {/* Changed text color to white for better contrast */}
            {/* Removed the 'Available Now' badge and parallax for clarity and better design */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Let's Work Together
            </h1>

            <p className="text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to create something extraordinary? Share your vision with us and let's bring your audio project to life.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">

                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Start Your Project</h2>
                      <p className="text-sm text-gray-600">Tell us about your requirements</p>
                    </div>
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll get back to you within 2 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6"> {/* Added form tag and onSubmit */}
                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          id="name" // Added id
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField('')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200"
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email" // Added id
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Project Budget</label>
                        <select
                          id="budget" // Added id
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 bg-white"
                          required // Added required
                        >
                          <option value="">Select budget range</option>
                          {budgetOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div className="relative">
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                        <select
                          id="timeline" // Added id
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 bg-white"
                          required // Added required
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="relative">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject" // Added id
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200"
                        placeholder="What's your project about?"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                      <textarea
                        id="message" // Added id
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 resize-none"
                        placeholder="Tell us about your vision, goals, and requirements..."
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit" // Changed to type="submit" for form submission
                      disabled={isSubmitting}
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      We respect your privacy and will respond within 2 hours during business hours.
                    </p>
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
                          <p className="text-sm text-gray-600">{method.secondary}</p>
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

                <div ref={mapRef} className="mb-4 rounded-lg overflow-hidden border border-gray-200 min-h-[240px]">
                  {/* Added min-h-[240px] to ensure the map container has a height */}
                  {/* Map will be loaded here via useEffect */}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">Audio District, Mumbai</p>
                  <p className="text-sm text-gray-600">Maharashtra, India 400001</p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Mumbai,+Maharashtra,+India" // More robust Google Maps directions URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center">
                  <Users className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">1000+</p>
                  <p className="text-xs text-gray-600">Happy Clients</p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center">
                  <Award className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">5.0</p>
                  <p className="text-xs text-gray-600">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <Footer />
    </>
  );
}