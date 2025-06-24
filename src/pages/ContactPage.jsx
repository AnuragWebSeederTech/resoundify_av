import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/Testimonial';
import Header from '../components/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const mapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const mapContainer = mapRef.current;
      mapContainer.innerHTML = `
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=72.8777,19.0760,72.8877,19.0860&layer=mapnik&marker=19.0810,72.8827"
          width="100%"
          height="180" {/* Adjusted map height */}
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
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

  return (
    <>
      <Header />
      <div className="min-h-screen mt-24">
        {/* Hero Section with Background Image */}
        <div
          className="relative bg-cover bg-center bg-no-repeat h-140 flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/Contactbg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Get in Touch with Resoundify
            </h1>

            <p className="text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions or need assistance? Reach out to our customer care team, we're here to help!
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Contact Form - Modified for General Inquiries */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl h-185 p-8 shadow-sm border border-gray-200 flex flex-col"> {/* Added flex flex-col */}

                <div className="mb-6"> {/* Adjusted margin-bottom */}
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
                  <div className="text-center flex-grow flex flex-col justify-center"> {/* Added flex-grow */}
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">We'll get back to you within 2 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col justify-between"> {/* Adjusted space-y and added flex-grow */}
                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-4"> {/* Adjusted gap */}
                      <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label> {/* Adjusted margin-bottom */}
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
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label> {/* Adjusted margin-bottom */}
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label> {/* Adjusted margin-bottom */}
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
                    <div className="relative flex-grow"> {/* Added flex-grow */}
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message</label> {/* Adjusted margin-bottom */}
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
                          <p className="text-xs text-gray-600">{method.secondary}</p> {/* Adjusted font size */}
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

                <div ref={mapRef} className="mb-4 rounded-lg overflow-hidden border border-gray-200 min-h-[180px]"> {/* Adjusted min-height */}
                  {/* Map will be loaded here via useEffect */}
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
      </div>
      <TestimonialsSection />
      <Footer />
    </>
  );
}