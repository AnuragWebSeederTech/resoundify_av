import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Facebook, Send, MessageCircle, Clock, Users } from 'lucide-react';
import Header from '../components/Header'; // Verify this path is correct
import Footer from '../components/Footer'; // Verify this path is correct

// Import Leaflet components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Don't forget to import Leaflet's CSS!

// Fix for default marker icon issues with Webpack (common with Leaflet)
// This ensures the default blue Leaflet markers are visible.
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [activeTab, setActiveTab] = useState('general');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a production app, consider a more user-friendly modal or toast notification
    // instead of alert for better user experience.
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Define contact methods for the dynamic display
  const contactMethods = [
    {
      id: 'general',
      icon: MessageCircle,
      title: 'General Inquiries',
      description: 'Questions about our services',
      contact: 'info@resoundify.com',
      response: '24 hours'
    },
    {
      id: 'support',
      icon: Users,
      title: 'Technical Support',
      description: 'Need help with your setup?',
      contact: 'support@resoundify.com',
      response: '2 hours'
    },
    {
      id: 'sales',
      icon: Phone,
      title: 'Sales Team',
      description: 'Ready to transform your space?',
      contact: '+1-800-RESOUND',
      response: 'Immediate'
    }
  ];

  // Define the coordinates for the map marker
  // IMPORTANT: Replace these with your actual headquarters coordinates.
  // This example uses a general New York City location.
  const mapPosition = [22.72547599965755, 75.89151350630961]; // Coordinates for WebSeeder Technologies from your iframe

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-inter pt-10 overflow-hidden">
        {/* Link to import the 'Inter' font from Google Fonts for consistent typography */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* Animated Background Elements for visual flair */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Hero Section - Prominent title and call-to-action */}
        <section className="relative pt-20 pb-10">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                Available 24/7 for Support
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Let's Create
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Something Amazing
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Ready to revolutionize your audio-visual experience? Our team of experts is here to bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods Grid - Displays different ways to contact, with active state styling */}
        <section className="relative py-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={method.id}
                    onClick={() => setActiveTab(method.id)}
                    className={`group cursor-pointer p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                      activeTab === method.id
                        ? 'bg-blue-500/20 border-blue-400/50 shadow-2xl shadow-blue-500/25'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl transition-colors duration-300 ${
                        activeTab === method.id ? 'bg-blue-500' : 'bg-white/10 group-hover:bg-blue-500/50'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                        <p className="text-slate-400 text-sm mb-3">{method.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-300 font-medium">{method.contact}</span>
                          <div className="flex items-center text-xs text-slate-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {method.response}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content - Split Layout for Contact Form and Info/Map */}
        <section className="relative py-10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              
              {/* Left Side - Contact Form (Takes 3/5 of space on large screens) */}
              <div className="lg:col-span-3">
                <div className="sticky top-8">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        Start the Conversation
                      </h2>
                      <p className="text-slate-400">Tell us about your project and we'll get back to you within 24 hours.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-300">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-300">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Project Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                          placeholder="Audio System Integration"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Project Details</label>
                        <textarea
                          name="message"
                          rows="6"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all duration-300"
                          placeholder="Tell us about your vision, space requirements, budget, and timeline..."
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                          Send Message
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Info & Map (Takes 2/5 of space on large screens) */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Contact Information Block */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-500/20 rounded-xl">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Headquarters</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          123 Innovation Drive, Suite 400<br />
                          Tech City, AV 98765, USA
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-green-500/20 rounded-xl">
                        <Mail className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-slate-400 text-sm">
                          <a href="mailto:hello@resoundify.com" className="text-blue-300 hover:text-blue-200 transition-colors">
                            hello@resoundify.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-500/20 rounded-xl">
                        <Phone className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-slate-400 text-sm">
                          <a href="tel:+1-800-RESOUND" className="text-blue-300 hover:text-blue-200 transition-colors">
                            +1-800-RESOUND
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Map Section */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-xl font-bold mb-4">Find Us</h3>
                  <div className="w-full h-80 rounded-2xl border border-white/10 overflow-hidden">
                    {/* MapContainer for displaying the Leaflet map */}
                    <MapContainer 
                      center={mapPosition} 
                      zoom={13} 
                      scrollWheelZoom={true} // Enabled scroll wheel zoom
                      style={{ height: '100%', width: '100%' }}
                      className="rounded-2xl" // Apply rounded corners to the map itself
                    >
                      {/* TileLayer defines the map's visual tiles (OpenStreetMap in this case) */}
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {/* Marker to indicate the specific location */}
                      <Marker position={mapPosition}>
                        {/* Popup content when the marker is clicked */}
                        <Popup>
                          Resoundify Headquarters <br /> WebSeeder Technologies.
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                  <p className="text-slate-300 text-sm mt-3 text-center">Drag to explore, zoom to see details!</p>
                </div>

                {/* Social Links Block */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Twitter, color: 'text-blue-400', href: 'https://twitter.com/resoundify' },
                      { icon: Linkedin, color: 'text-blue-500', href: 'https://linkedin.com/company/resoundify' },
                      { icon: Facebook, color: 'text-blue-600', href: 'https://facebook.com/resoundify' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-3 bg-white/5 rounded-xl ${social.color} hover:bg-white/10 hover:scale-110 transition-all duration-300`}
                        target="_blank" // Open in new tab
                        rel="noopener noreferrer" // Security best practice for target='_blank'
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        {/* CSS Styles for animations and custom properties */}
        <style jsx>{`
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
          
          /* Keyframes for the blob animation */
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          
          .animate-blob {
            animation: blob 7s infinite;
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          
          /* Keyframes for the gradient-x animation */
          @keyframes gradient-x {
            0%, 100% {
              background-size: 200% 200%;
              background-position: left center;
            }
            50% {
              background-size: 200% 200%;
              background-position: right center;
            }
          }
          
          .animate-gradient-x {
            animation: gradient-x 3s ease infinite;
          }
        `}</style>
      </div>
    </>
  );
}

export default ContactPage;
