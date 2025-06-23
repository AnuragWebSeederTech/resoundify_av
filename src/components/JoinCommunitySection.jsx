import React, { useRef, useEffect, useState } from 'react'; // Corrected import statement

const JoinCommunitySection = () => {
  // State to control the visibility of the join form modal
  const [showJoinForm, setShowJoinForm] = useState(false);
  // States for form inputs
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [receiveNotifications, setReceiveNotifications] = useState(false);
  // State for showing a confirmation message
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Ref for the section to observe for scroll animation
  const sectionRef = useRef(null);
  // State to control the visibility of the section content for scroll animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update isVisible state based on whether the section is intersecting
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // In a real application, you would send this data to a backend server.
    // For now, we'll just log it and show a confirmation message.
    console.log({
      email,
      contactNumber,
      subscribeNewsletter,
      receiveNotifications,
    });

    setConfirmationMessage("Thank you for joining the community! We'll be in touch.");
    // Optionally clear the form after submission
    setEmail('');
    setContactNumber('');
    setSubscribeNewsletter(false);
    setReceiveNotifications(false);
    // Automatically close the modal after a short delay
    setTimeout(() => {
      setShowJoinForm(false);
      setConfirmationMessage(''); // Clear message when modal closes
    }, 3000); // Close after 3 seconds
  };

  return (
    <section
      ref={sectionRef} // Attach the ref for Intersection Observer
      className="relative py-20 px-4 sm:px-10 bg-white text-slate-900 overflow-hidden font-inter" // Changed bg-slate-50 to bg-white
    >
      {/* Font import link is ideally in your public/index.html or global CSS, but kept here for self-containment if needed */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <div className={`relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between z-10 space-y-8 lg:space-y-0 lg:space-x-8
        transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}> {/* Apply animation classes here */}
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-4 lg:pl-10">
          <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight"> {/* Changed text-slate-800 to text-slate-900 */}
            Join the <span className="font-semibold bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">Resoundify Community</span> {/* Changed from-slate-800 to from-slate-900 and to-blue-700 to to-slate-500 */}
          </h2>
          <p className="mb-8 text-lg sm:text-xl text-slate-700 leading-relaxed font-light"> {/* Changed text-gray-700 to text-slate-700 */}
            At Resoundify, we believe in the power of sound to inspire, connect, and transform. Let us help you create audio-visual experiences that resonate. Explore our products, connect with our team, and experience the future of AV with Resoundify.
          </p>
          <p className="mb-8 text-lg sm:text-xl font-semibold text-slate-700"> {/* Changed text-blue-700 to text-slate-700 */}
            Resoundify – Where Sound Meets Innovation.
          </p>
          {/* "Join the Community" Button */}
          <button
            onClick={() => setShowJoinForm(true)}
            className="inline-block bg-slate-900 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-slate-700 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-4 focus:ring-slate-300 focus:ring-opacity-75" // Changed bg-blue-500 to bg-slate-900, hover:bg-blue-600 to hover:bg-slate-700, and focus:ring-blue-300 to focus:ring-slate-300
          >
            Join the Community
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 px-4 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Example image
            alt="Audio-visual collaboration"
            className="w-full max-w-2xl rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-slate-300" // Changed border-gray-100 to border-slate-300
          />
        </div>
      </div>

      {/* Custom animations for the section */}
      <style jsx>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Join Form Modal - Conditional rendering based on showJoinForm state */}
      {showJoinForm && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div
            className={`bg-white text-slate-900 rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-500 ease-in-out border border-slate-300
              ${showJoinForm ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} // Changed text-gray-900 to text-slate-900 and border-gray-100 to border-slate-300
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-slate-900"> {/* Changed text-gray-900 to text-slate-900 */}
                Join Us!
              </h3>
              <button
                onClick={() => setShowJoinForm(false)} // Close the modal
                className="text-slate-500 hover:text-slate-700 transition duration-300" // Changed text-gray-500 to text-slate-500 and hover:text-gray-700 to hover:text-slate-700
                aria-label="Close form"
              >
                {/* SVG for a close (X) icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {confirmationMessage ? (
              // Confirmation message display
              <div className="text-center text-slate-700 text-lg font-semibold py-8"> {/* Changed text-green-600 to text-slate-700, assuming it's a general confirmation, not necessarily a "success green" */}
                {confirmationMessage}
              </div>
            ) : (
              // Form for joining the community
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-slate-700 mb-2"> {/* Changed text-gray-700 to text-slate-700 */}
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-slate-300 bg-white rounded-xl shadow-sm focus:ring-slate-500 focus:border-slate-500 text-slate-900 text-lg placeholder-slate-500" // Changed border-gray-300 to border-slate-300, focus:ring-blue-500 to focus:ring-slate-500, focus:border-blue-500 to focus:border-slate-500, text-gray-900 to text-slate-900, placeholder-gray-500 to placeholder-slate-500
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block text-lg font-medium text-slate-700 mb-2"> {/* Changed text-gray-700 to text-slate-700 */}
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-slate-300 bg-white rounded-xl shadow-sm focus:ring-slate-500 focus:border-slate-500 text-slate-900 text-lg placeholder-slate-500" // Changed border-gray-300 to border-slate-300, focus:ring-blue-500 to focus:ring-slate-500, focus:border-blue-500 to focus:border-slate-500, text-gray-900 to text-slate-900, placeholder-gray-500 to placeholder-slate-500
                    placeholder="+91-9876543210"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={subscribeNewsletter}
                    onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                    className="h-6 w-6 text-slate-900 focus:ring-slate-500 border-slate-300 rounded-md bg-white" // Changed text-blue-600 to text-slate-900, focus:ring-blue-500 to focus:ring-slate-500, border-gray-300 to border-slate-300
                  />
                  <label htmlFor="newsletter" className="text-base text-slate-800 cursor-pointer select-none"> {/* Changed text-gray-800 to text-slate-800 */}
                    Subscribe to our newsletter for the latest updates and exclusive content.
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    id="notifications"
                    name="notifications"
                    type="checkbox"
                    checked={receiveNotifications}
                    onChange={(e) => setReceiveNotifications(e.target.checked)}
                    className="h-6 w-6 text-slate-900 focus:ring-slate-500 border-slate-300 rounded-md bg-white" // Changed text-blue-600 to text-slate-900, focus:ring-blue-500 to focus:ring-slate-500, border-gray-300 to border-slate-300
                  />
                  <label htmlFor="notifications" className="text-base text-slate-800 cursor-pointer select-none"> {/* Changed text-gray-800 to text-slate-800 */}
                    Receive notifications about new stock, product launches, and stock refills.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-slate-900 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-slate-300/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden" // Changed bg-blue-500 to bg-slate-900, hover:shadow-blue-500/25 to hover:shadow-slate-300/30
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right-circle w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 text-white" // Added text-white to ensure icon color is white against slate background
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="m12 16 4-4-4-4" />
                    </svg>
                    Submit
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default JoinCommunitySection;