import React from 'react';

const Clients = () => {
  const clientLogos = [
    { name: "Client A", url: "https://placehold.co/200x100/F0F8FF/1A2C59?text=Client+A", alt: "Innovate Solutions Logo" },
    { name: "Client B", url: "https://placehold.co/200x100/E8F2FF/2C4373?text=Client+B", alt: "Tech Pioneers Logo" },
    { name: "Client C", url: "https://placehold.co/200x100/E0ECFC/3E5A8D?text=Client+C", alt: "FutureForge Logo" },
    { name: "Client D", url: "https://placehold.co/200x100/D8E6FA/5171A8?text=Client+D", alt: "Aether Dynamics Logo" },
    { name: "Client E", url: "https://placehold.co/200x100/D0DFF7/6389C3?text=Client+E", alt: "Vertex Systems Logo" },
    { name: "Client F", url: "https://placehold.co/200x100/C8D8F4/76A0DE?text=Client+F", alt: "Catalyst Corp Logo" },
    { name: "Client G", url: "https://placehold.co/200x100/C0D2F1/89B6F9?text=Client+G", alt: "Nexus Innovations Logo" },
    { name: "Client H", url: "https://placehold.co/200x100/B8CCEE/9CCDFB?text=Client+H", alt: "BrightWave Tech Logo" },
  ];

  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 font-inter py-24 overflow-hidden relative">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-14">
          Our Valued Clients
          <div className="w-28 h-1 bg-blue-600 mx-auto mt-4 rounded-full shadow-md"></div>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden py-8">
        <div className="client-marquee whitespace-nowrap flex items-center animate-marquee-left">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="inline-block mx-10 p-6 bg-white rounded-xl shadow-lg border border-blue-100 flex-shrink-0"
              style={{ width: '240px', height: '140px' }}
            >
              <img
                src={logo.url}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain mx-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/200x100/E0F2FE/0B204F?text=${logo.name.replace(/ /g, '+')}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }


        .client-marquee {
          width: max-content;
        }

        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Clients;
