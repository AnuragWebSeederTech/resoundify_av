import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/Testimonial';
import Header from '../components/Header';
import ContactForm from '../components/Contact/ContactForm';

// ContactPage component definition
export default function ContactPage() {
  // State for managing form input data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  // State to track if the form is currently submitting
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State to track if the form has been successfully submitted
  const [submitted, setSubmitted] = useState(false);
  // State to track which form field is currently focused (though not explicitly used in rendering here, could be for styling)
  const [focusedField, setFocusedField] = useState('');
  // State to store the current scroll position of the window
  const [scrollY, setScrollY] = useState(0);
  // Ref to directly access the DOM element for the map container
  const mapRef = useRef(null);

  // Effect hook to handle scroll events and update scrollY state
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs only once after initial render

  // Effect hook to embed the OpenStreetMap iframe
  useEffect(() => {
    // Ensure mapRef.current exists before trying to manipulate it
    if (mapRef.current) {
      const mapContainer = mapRef.current;
      // Set the inner HTML of the map container to an iframe embedding OpenStreetMap
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
  }, []); // Empty dependency array means this effect runs only once after initial render

  // Handler for input field changes, updates formData state
  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value // Dynamically updates the field corresponding to the input's 'name' attribute
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    setIsSubmitting(true); // Set submitting state to true
    // Simulate an API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false); // Set submitting state to false after delay
    setSubmitted(true); // Set submitted state to true to show success message
    // Reset form and submitted state after a short delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form fields
    }, 3000);
  };

  // Array of contact method objects, used to render contact information dynamically
  const contactMethods = [
    {
      icon: Mail, // Lucide-react icon component
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

  // JSX for rendering the ContactPage component
  return (
    <>
      <Header /> {/* Renders the Header component */}
      <div className="min-h-screen">
        {/* Hero section with background image and overlay */}
        <div
          className="relative bg-cover bg-center bg-no-repeat h-170 flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/contactbg2.png')", // Background image for the hero section
          }}
        >
          {/* Overlay for the background image to improve text readability */}
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          {/* Content for the hero section */}
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl text-white font-medium mb-6 leading-tight tracking-tighter mt-15">
              Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-200 to-pink-200">Resoundify</span>
            </h1>
            <p className="text-xl md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-10">
              Have questions or need assistance? Reach out to our customer care team, we're here to help!
            </p>
          </div>
        </div>

        {/* Main content area for the contact form */}
        <div className="max-w-7xl mx-auto px-6 py-0">
          <ContactForm /> {/* Renders the ContactForm component */}
        </div>
      </div>
      <TestimonialsSection /> {/* Renders the TestimonialsSection component */}
      <Footer /> {/* Renders the Footer component */}
    </>
  );
}