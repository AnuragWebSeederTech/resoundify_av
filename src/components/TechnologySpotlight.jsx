import React from 'react';

const DanteBenefitsSection = () => {
  return (
    <div className="mx-auto px-20 py-16 bg-gradient-to-b from-white to-slate-400 min-h-screen">

      <div className="text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-sans text-slate-900 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
          >
            Technology <span className="font-semibold bg-gradient-to-br from-slate-900 to-slate-500 bg-clip-text text-transparent">Spotlight</span>
          </h2>
        <p className="text-2xl md:text-3xl font-light text-slate-600 max-w-3xl mx-auto">
          Unleashing the power of seamless audio networking with cutting-edge technology.
        </p>
      </div>

      <section className="mb-20 bg-white p-10 rounded-xl shadow-xl border border-slate-100 animate-fade-in-up transition-all duration-500 ease-in-out hover:shadow-2xl hover:border-slate-200">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-3">Benefits of Dante Technology</h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          Dante is the leading solution for digital audio networking, delivering uncompressed, multi-channel digital media
          via standard Ethernet networks with near-zero latency and perfect synchronization. It simplifies system setup,
          eliminates bulky analog cabling, and provides superior sound quality. <strong className="text-slate-900">Resoundify</strong> leverages Dante to provide
          unparalleled flexibility and scalability in audio installations.
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-10 items-stretch">

        <div className="w-full md:w-2/5 lg:w-1/2 xl:w-2/5 flex flex-col justify-center items-center p-6 rounded-xl shadow-lg border border-slate-100 overflow-hidden transform transition-all duration-500 ease-in-out bg-white hover:scale-103 hover:shadow-2xl hover:border-slate-200">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">Dante Integration in Action</h3>
          <div className="relative w-full" style={{paddingTop: '56.25%'}}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                title="Dante Technology Explanation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
          </div>
          <p className="mt-4 text-sm text-slate-600 text-center">See how Dante revolutionizes audio setups.</p>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Card 1 */}
          <div className="relative p-7 rounded-xl shadow-lg border border-slate-100 transform transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl group overflow-hidden bg-white
                        before:absolute before:inset-0 before:bg-gradient-to-br before:from-slate-100 before:to-slate-300 before:opacity-0 before:transition-opacity before:duration-500 before:rounded-xl
                        hover:before:opacity-100 hover:border-transparent"> {/* Added pseudo-element for animated gradient border */}
            <div className="relative z-10"> {/* Ensures content is above pseudo-element */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center">
                    <div className="p-2 rounded-full bg-slate-50 transition-colors duration-300 group-hover:bg-slate-100 mr-3">
                        <svg className="w-7 h-7 text-slate-700 transition-colors duration-300 group-hover:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    Effortless Setup
                </h3>
                <p className="text-slate-700 leading-relaxed">
                    Dante simplifies complex audio networks, making installation and configuration straightforward with intelligent auto-discovery.
                </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative p-7 rounded-xl shadow-lg border border-slate-100 transform transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl group overflow-hidden bg-white
                        before:absolute before:inset-0 before:bg-gradient-to-br before:from-slate-100 before:to-slate-300 before:opacity-0 before:transition-opacity before:duration-500 before:rounded-xl
                        hover:before:opacity-100 hover:border-transparent">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center">
                    <div className="p-2 rounded-full bg-slate-50 transition-colors duration-300 group-hover:bg-slate-100 mr-3">
                        <svg className="w-7 h-7 text-slate-700 transition-colors duration-300 group-hover:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2 2m-2-2h2m2 4l2 2m-2-2v2m-2 4h2v2m-2-2H9v2m2-2h2m-2-2v2m-2 4h2v2"></path></svg>
                    </div>
                    Superior Quality
                </h3>
                <p className="text-slate-700 leading-relaxed">
                    Experience pristine, uncompressed audio with Dante's high-fidelity transmission and near-zero latency performance.
                </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative p-7 rounded-xl shadow-lg border border-slate-100 transform transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl group overflow-hidden bg-white
                        before:absolute before:inset-0 before:bg-gradient-to-br before:from-slate-100 before:to-slate-300 before:opacity-0 before:transition-opacity before:duration-500 before:rounded-xl
                        hover:before:opacity-100 hover:border-transparent">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center">
                    <div className="p-2 rounded-full bg-slate-50 transition-colors duration-300 group-hover:bg-slate-100 mr-3">
                        <svg className="w-7 h-7 text-slate-700 transition-colors duration-300 group-hover:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 19v-7a2 2 0 012-2h4a2 2 0 012 2v7M5 19V6a2 2 0 012-2h4a2 2 0 012 2v13"></path></svg>
                    </div>
                    Unmatched Scalability
                </h3>
                <p className="text-slate-700 leading-relaxed">
                    Easily expand your audio system without complex re-cabling or compatibility issues, supporting thousands of channels.
                </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative p-7 rounded-xl shadow-lg border border-slate-100 transform transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl group overflow-hidden bg-white
                        before:absolute before:inset-0 before:bg-gradient-to-br before:from-slate-100 before:to-slate-300 before:opacity-0 before:transition-opacity before:duration-500 before:rounded-xl
                        hover:before:opacity-100 hover:border-transparent">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center">
                    <div className="p-2 rounded-full bg-slate-50 transition-colors duration-300 group-hover:bg-slate-100 mr-3">
                        <svg className="w-7 h-7 text-slate-700 transition-colors duration-300 group-hover:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    Future-Proof
                </h3>
                <p className="text-slate-700 leading-relaxed">
                    Stay ahead with an adaptable platform ready for tomorrow's audio demands and emerging technologies.
                </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DanteBenefitsSection;