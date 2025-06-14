import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Facebook, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  // State to manage form input data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handles changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just log it to the console and show an alert.
    console.log('Form submitted:', formData);

    // Display a confirmation message to the user
    // Note: In a production app, you might use a custom modal instead of alert for better UX.
    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form fields after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    // Main container with a dark gradient background, text color, and custom font.
    // selection: classes style the text when selected by the user.
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 text-white font-inter selection:bg-purple-600 selection:text-white">
      {/* Link to import the 'Inter' font from Google Fonts */}
      {/* This ensures the chosen font is available for the page styling */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Hero Section: A prominent top section with a title, description, and call-to-action buttons. */}
      <section className="relative overflow-hidden py-24 sm:py-32 text-center">
        {/* Absolute positioned background image for a subtle effect, with reduced opacity */}
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("https://placehold.co/1920x1080/0A0A0A/FFFFFF?text=Resoundify+Abstract+Background")' }}></div>
        
        {/* Content of the hero section, positioned above the background image */}
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse-slow">
            Connect with Resoundify
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Let's amplify your vision. Our team is ready to assist you in creating unparalleled audio-visual experiences.
          </p>
          {/* Call-to-action buttons to navigate to different sections of the page */}
          <div className="flex justify-center space-x-4">
            <a href="#contact-form" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Send a Message <Send className="ml-2 w-5 h-5" />
            </a>
            <a href="#contact-info" className="inline-flex items-center px-6 py-3 border border-purple-500 text-base font-medium rounded-full shadow-lg text-purple-300 hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Our Details <MapPin className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area: Divided into two columns for contact information and the contact form */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        {/* Contact Information Card */}
        <div id="contact-info" className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-3xl p-8 sm:p-10 flex flex-col justify-between transform transition duration-500 hover:scale-[1.01] hover:shadow-purple-glow">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Reach Out to Us
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We're here to help you revolutionize your audio-visual setup. Get in touch with our experts.
            </p>

            {/* Individual contact details: Location, Email, Phone */}
            <div className="space-y-8">
              <div className="flex items-start text-lg">
                <MapPin className="flex-shrink-0 w-7 h-7 text-purple-400 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Our Location</h3>
                  <p className="text-gray-400">
                    Resoundify Headquarters<br />
                    123 Innovation Drive, Suite 400<br />
                    Tech City, AV 98765<br />
                    USA
                  </p>
                </div>
              </div>

              <div className="flex items-start text-lg">
                <Mail className="flex-shrink-0 w-7 h-7 text-purple-400 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Email Us</h3>
                  <p className="text-gray-400">
                    General Inquiries: <a href="mailto:info@resoundify.com" className="text-blue-400 hover:underline">info@resoundify.com</a><br />
                    Support: <a href="mailto:support@resoundify.com" className="text-blue-400 hover:underline">support@resoundify.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start text-lg">
                <Phone className="flex-shrink-0 w-7 h-7 text-purple-400 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Call Us</h3>
                  <p className="text-gray-400">
                    Sales & Support: <a href="tel:+1-800-RESOUND" className="text-blue-400 hover:underline">+1-800-RESOUND (737-6863)</a><br />
                    International: <a href="tel:+1-555-123-4567" className="text-blue-400 hover:underline">+1-555-123-4567</a>
                  </p>
                </div>
              </div>

              {/* Simple Map Placeholder: A visual representation of a map */}
              <div className="text-center mt-10">
                <h3 className="font-semibold text-xl mb-4">Find Us on the Map</h3>
                <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden border border-purple-500 shadow-lg flex items-center justify-center">
                  <Globe className="w-20 h-20 text-gray-500 opacity-60 animate-spin-slow" />
                  <span className="sr-only">Map Placeholder</span>
                </div>
                <p className="text-gray-500 text-sm mt-3">Interactive map coming soon!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div id="contact-form" className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-3xl p-8 sm:p-10 transform transition duration-500 hover:scale-[1.01] hover:shadow-indigo-glow">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            Send Us a Message
          </h2>
          {/* Contact form with input fields for name, email, subject, and message */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-700 bg-opacity-70 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-300 placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-700 bg-opacity-70 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-300 placeholder-gray-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-300 text-lg font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-700 bg-opacity-70 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-300 placeholder-gray-400"
                placeholder="Inquiry about Dante Solutions"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-700 bg-opacity-70 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-y transition duration-300 placeholder-gray-400"
                placeholder="Tell us more about your project or question..."
              ></textarea>
            </div>

            {/* Submit button with a gradient background and glow effect on hover */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl shadow-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95 glow-on-hover"
            >
              <Send className="mr-3 w-6 h-6" /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-gray-900 bg-opacity-70 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-200">Connect with Us Socially</h2>
          <p className="text-gray-400 text-lg mb-8">
            Follow Resoundify on our social channels for the latest updates, news, and insights.
          </p>
          {/* Social media icons with hover effects */}
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/resoundify" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-125">
              <Twitter className="w-10 h-10" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://linkedin.com/company/resoundify" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-125">
              <Linkedin className="w-10 h-10" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://facebook.com/resoundify" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-800 transition-colors duration-300 transform hover:scale-125">
              <Facebook className="w-10 h-10" />
              <span className="sr-only">Facebook</span>
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Resoundify. All rights reserved.</p>
        <p>Where Sound Meets Innovation.</p>
      </footer>

      {/* Custom CSS styles embedded within the component for specific animations and effects.
          These styles extend Tailwind's capabilities for unique visual elements. */}
      <style jsx>{`
        /* Applies the 'Inter' font to elements with this class */
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        /* Custom shadow for a deeper, more pronounced effect */
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
        }
        /* Slow pulse animation for text, creating a subtle glow/fade effect */
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        /* Slow spin animation for icons, used for the map placeholder */
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        /* Custom glow effect on hover for cards (purple glow) */
        .hover\\:shadow-purple-glow:hover {
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.7), 0 0 60px rgba(168, 85, 247, 0.5);
        }
        /* Custom glow effect on hover for cards (indigo glow) */
        .hover\\:shadow-indigo-glow:hover {
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.7), 0 0 60px rgba(99, 102, 241, 0.5);
        }
        /* Styles for the button's glowing border effect on hover */
        .glow-on-hover {
          position: relative;
          z-index: 1;
        }
        .glow-on-hover:before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #a855f7, #6366f1, #a855f7); /* Gradient for the glow */
          background-size: 400% 400%;
          filter: blur(8px); /* Blur to create the glow effect */
          opacity: 0;
          transition: opacity .3s ease-in-out;
          border-radius: 12px; /* Matches button border-radius */
          z-index: -1; /* Puts the glow behind the button text */
        }
        .glow-on-hover:hover:before {
          opacity: 1; /* Make glow visible on hover */
          animation: glowing 8s linear infinite; /* Animate the glow */
        }
        @keyframes glowing {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
}

export default App;
