import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/Testimonial';
import Header from '../components/Header';
import ContactForm from '../components/Contact/ContactForm';

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
      <div className="min-h-screen">
        <div
          className="relative bg-cover bg-center bg-no-repeat h-170 flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/contactbg2.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          <div className="relative z-10 text-center text-white px-6">  
            <h1 className="text-5xl md:text-7xl text-white font-medium mb-6 leading-tight tracking-tighter mt-15">
              Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-200 to-pink-200">Resoundify</span>
            </h1>
            <p className="text-xl md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-10">
              Have questions or need assistance? Reach out to our customer care team, we're here to help!
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-0">
          <ContactForm />
        </div>
      </div>
      <TestimonialsSection />
      <Footer />
    </>
  );
}