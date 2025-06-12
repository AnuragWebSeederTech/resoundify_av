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

    // Corrected the string literal by using double quotes to avoid syntax error with the apostrophe
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
    <section className="relative py-20 px-6 bg-gray-50 text-gray-800 overflow-hidden font-inter"> {/* Added font-inter */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between z-10 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-4 lg:pl-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide text-gray-900">
            Join the Resoundify Community
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            At Resoundify, we believe in the power of sound to inspire, connect, and transform. Let us help you create audio-visual experiences that resonate. Explore our products, connect with our team, and experience the future of AV with Resoundify.
          </p>
          <p className="mb-8 text-lg md:text-xl font-semibold text-indigo-700">
            Resoundify – Where Sound Meets Innovation.
          </p>
          {/* "Join the Community" Button */}
          <button
            onClick={() => setShowJoinForm(true)} // Set showJoinForm to true when button is clicked
            className="inline-block bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-600 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
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

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-bounce-slow" />
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce-slow" />

      {/* Custom bounce animation */}
      <style jsx>{`
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

      {/* Join Form Modal */}
      {showJoinForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div
            className={`bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-500 ease-in-out
              ${showJoinForm ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900">Join Us!</h3>
              <button
                onClick={() => setShowJoinForm(false)} // Close the modal
                className="text-gray-500 hover:text-gray-700 transition duration-300"
                aria-label="Close form"
              >
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
              <div className="text-center text-green-600 text-lg font-semibold py-8">
                {confirmationMessage}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block text-lg font-medium text-gray-700 mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
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
                    className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-md"
                  />
                  <label htmlFor="newsletter" className="text-base text-gray-800 cursor-pointer select-none">
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
                    className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-md"
                  />
                  <label htmlFor="notifications" className="text-base text-gray-800 cursor-pointer select-none">
                    Receive notifications about new stock, product launches, and stock refills.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-300 ease-in-out text-lg"
                >
                  Submit
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
