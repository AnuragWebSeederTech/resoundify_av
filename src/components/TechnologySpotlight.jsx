import React from 'react';

const DanteBenefitsSection = () => {
  return (
    <div className="mx-auto px-20 py-12 bg-gradient-to-br from-blue-50 to-blue-200"> {/* Added blue gradient background */}

      {/* New: Technology Spotlight Heading */}
      <div className="text-center mb-16"> {/* Centered and more margin-bottom */}
        <h2 className="text-5xl lg:text-6xl font-light text-slate-800 mb-6 tracking-tight">
            Technology <span className="font-semibold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Spotlight</span>
        </h2>
        <p className="text-2xl md:text-3xl font-light text-gray-700 max-w-3xl mx-auto">
          Unleashing the power of seamless audio networking with cutting-edge technology.
        </p>
      </div>

      {/* 1. Benefits of Dante Technology */}
      <section className="mb-16 bg-white p-8 rounded-xl shadow-lg border border-gray-100 animate-fade-in-up"> {/* Enhanced styling */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-3">Benefits of Dante Technology</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dante is the leading solution for digital audio networking, delivering uncompressed, multi-channel digital media
          via standard Ethernet networks with near-zero latency and perfect synchronization. It simplifies system setup,
          eliminates bulky analog cabling, and provides superior sound quality. <strong className="text-blue-600">Resoundify</strong> leverages Dante to provide
          unparalleled flexibility and scalability in audio installations.
        </p>
      </section>

      {/* 2. Video on Left, 4 Points on Right */}
      <section className="flex flex-col md:flex-row gap-10 items-stretch"> {/* Increased gap, items-stretch for equal height */}

        {/* Left Column: Video */}
        <div className="w-full md:w-2/5 lg:w-1/2 xl:w-2/5 flex flex-col justify-center items-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
          {/* Enhanced styling for video container */}
          <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Dante Integration in Action</h3>
          {/* Replace 'YOUR_VIDEO_EMBED_CODE_HERE' with your actual video embed code */}
          <div className="relative w-full" style={{paddingTop: '56.25%'}}> {/* 16:9 aspect ratio container */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg" // Tailwind classes for sizing and rounding
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE" // REPLACE THIS WITH YOUR VIDEO EMBED URL
                title="Dante Technology Explanation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">See how Dante revolutionizes audio setups.</p>
        </div>

        {/* Right Column: 4 Points */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full"> {/* Increased gap */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-blue-700 mb-3 flex items-center">
              <svg className="w-7 h-7 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Effortless Setup
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dante simplifies complex audio networks, making installation and configuration straightforward with intelligent auto-discovery.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-blue-700 mb-3 flex items-center">
              <svg className="w-7 h-7 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2 2m-2-2h2m2 4l2 2m-2-2v2m-2 4h2v2m-2-2H9v2m2-2h2m-2-2v2m-2 4h2v2"></path></svg>
              Superior Quality
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Experience pristine, uncompressed audio with Dante's high-fidelity transmission and near-zero latency performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-blue-700 mb-3 flex items-center">
              <svg className="w-7 h-7 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 19v-7a2 2 0 012-2h4a2 2 0 012 2v7M5 19V6a2 2 0 012-2h4a2 2 0 012 2v13"></path></svg>
              Unmatched Scalability
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Easily expand your audio system without complex re-cabling or compatibility issues, supporting thousands of channels.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-blue-700 mb-3 flex items-center">
              <svg className="w-7 h-7 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Future-Proof
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Stay ahead with an adaptable platform ready for tomorrow's audio demands and emerging technologies.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DanteBenefitsSection;