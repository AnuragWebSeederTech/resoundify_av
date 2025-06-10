import React from 'react';

const WhatResoundifyDoes = () => {
  const applications = [
    { name: "Offices & Corporate", icon: "🏢" },
    { name: "Schools & Universities", icon: "🎓" },
    { name: "Hotels & Restaurants", icon: "🏨" },
    { name: "Live Events & Venues", icon: "🎵" }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-wide leading-tight">
            What <span className="text-indigo-600">Resoundify</span> Does
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
            We create smart audio and video systems that deliver crystal-clear sound 
            for professional environments of all sizes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/images/what.jpg"
              alt="Professional AV systems"
              className="w-full h-72 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Perfect For
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{app.icon}</span>
                    <span className="text-xl md:text-2xl text-gray-700 font-normal leading-relaxed">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Dante Technology
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 font-normal leading-relaxed">
                Our systems use Dante network technology to transmit high-quality audio 
                over standard cables — no complex wiring, no delays, just reliable, 
                professional sound quality.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatResoundifyDoes;