import React, { useState } from 'react';

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
    <section className="relative py-20 px-10 bg-white text-gray-800 overflow-hidden font-inter"> {/* Main section background is white */}
      {/* Link to import the 'Inter' font from Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between z-10 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-4 lg:pl-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-indigo-700"> {/* Dark text gradient for contrast on white background */}
            Join the Resoundify Community
          </h2>
          <p className="mb-8 text-lg md:text-lg text-gray-700 leading-relaxed font-light"> {/* Dark gray text */}
            At Resoundify, we believe in the power of sound to inspire, connect, and transform. Let us help you create audio-visual experiences that resonate. Explore our products, connect with our team, and experience the future of AV with Resoundify.
          </p>
          <p className="mb-8 text-lg md:text-lg font-semibold text-indigo-700"> {/* Vibrant accent text */}
            Resoundify – Where Sound Meets Innovation.
          </p>
          {/* "Join the Community" Button */}
          <button
            onClick={() => setShowJoinForm(true)}
            className="inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            Join the Community
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 px-4 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Example image
            alt="Audio-visual collaboration"
            className="w-full max-w-2xl rounded-4xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Floating decorative elements (light colors for light theme) */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-bounce-slow" />
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce-slow" />

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
        // Overlay for the modal:
        // - fixed inset-0: Covers the whole viewport.
        // - bg-white/70: Semi-transparent white background for light theme.
        // - backdrop-blur-sm: Applies a subtle blur to content behind the modal.
        // - flex items-center justify-center: Centers the modal content.
        // - p-4: Padding for mobile viewports.
        // - z-50: High z-index to appear on top.
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          {/* Modal content container:
              - bg-white: Clear white background for the modal itself.
              - text-gray-800: Default text color within the modal for light theme.
              - rounded-3xl, shadow-2xl, p-8, max-w-md: Styling for the modal's appearance.
              - transform transition-all duration-500 ease-in-out: Enables smooth entry/exit animations.
              - scale-100 opacity-100 / scale-95 opacity-0: Control the animation based on showJoinForm. */}
          <div
            className={`bg-white text-gray-800 rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-500 ease-in-out
              ${showJoinForm ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-indigo-700"> {/* Dark text gradient for modal title */}
                Join Us!
              </h3>
              <button
                onClick={() => setShowJoinForm(false)} // Close the modal
                className="text-gray-500 hover:text-gray-700 transition duration-300" // Darker close button for light theme
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
              <div className="text-center text-green-600 text-lg font-semibold py-8"> {/* Green for success message */}
                {confirmationMessage}
              </div>
            ) : (
              // Form for joining the community
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2"> {/* Dark gray label text */}
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 text-lg placeholder-gray-500" // White background, dark text/placeholder for inputs
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block text-lg font-medium text-gray-700 mb-2"> {/* Dark gray label text */}
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 text-lg placeholder-gray-500" // White background, dark text/placeholder for inputs
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
                    className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-md bg-white" // White background, accent color checkbox
                  />
                  <label htmlFor="newsletter" className="text-base text-gray-800 cursor-pointer select-none"> {/* Dark gray label text */}
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
                    className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-md bg-white" // White background, accent color checkbox
                  />
                  <label htmlFor="notifications" className="text-base text-gray-800 cursor-pointer select-none"> {/* Dark gray label text */}
                    Receive notifications about new stock, product launches, and stock refills.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden" // Vibrant button gradient for light theme
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
                      className="lucide lucide-arrow-right-circle w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="m12 16 4-4-4-4" />
                    </svg>
                    Submit
                  </span>
                  {/* Subtle hover background for the button */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> {/* Matching hover gradient */}
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
