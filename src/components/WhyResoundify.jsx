import React, { useState, useRef, useEffect } from 'react';

const features = [
    {
        title: 'Dante-Centric <span class="text-cyan-400">Integration</span>',
        description: 'Our products achieve seamless harmony with Dante, ensuring pristine audio transmission, ultra-low latency, and unmatched scalability across complex networks.',
        imagePlaceholder: 'NETWORK', // Placeholder for image
    },
    {
        title: 'Uncompromising <span class="text-cyan-400">Fidelity</span>',
        description: 'From crystal-clear sonic delivery to aerospace-grade robust hardware, we engineer for peak performance and unwavering reliability in every crafted solution.',
        imagePlaceholder: 'SONIC', // Placeholder for image
    },
    {
        title: 'Intuitive <span class="text-cyan-400">Command</span>',
        description: 'Our solutions are meticulously designed for intuitive interaction, user-centric simplicity, and intelligent adaptability to your most dynamic requirements.',
        imagePlaceholder: 'CONTROL', // Placeholder for image
    },
    {
        title: 'Evolving <span class="text-cyan-400">Frontiers</span>',
        description: 'We proactively innovate, delivering products that resonate with today’s rigorous industry benchmarks and seamlessly integrate with tomorrow’s transformative breakthroughs.',
        imagePlaceholder: 'FUTURE', // Placeholder for image
    },
    // Adding a final page for a concluding message
    {
        title: 'The Resoundify <span class="text-cyan-400">Journey</span>',
        description: 'Thank you for exploring how Resoundify redefines audio technology. We invite you to experience the difference firsthand.',
        imagePlaceholder: 'LOGO', // Placeholder for image
    },
];

const WhyResoundify = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState('next'); // 'next' or 'prev'
    const pageRef = useRef(null); // Reference to the element that performs the turn

    const totalFeatures = features.length;

    // Automatic Page Advancement
    useEffect(() => {
        const interval = setInterval(() => {
            // Only trigger if not currently animating
            if (!isAnimating) {
                setIsAnimating(true);
                setAnimationDirection('next');
                setTimeout(() => {
                    setCurrentPageIndex((prevIndex) => (prevIndex + 1) % totalFeatures);
                }, 400); // Half of 800ms animation duration (reduced for faster turn)
                setTimeout(() => {
                    setIsAnimating(false);
                }, 800); // Matches CSS animation duration (reduced for faster turn)
            }
        }, 5000); // Change page every 5 seconds (reduced from 7 seconds)

        return () => clearInterval(interval); // Cleanup on unmount
    }, [isAnimating, totalFeatures]); // Re-run if isAnimating or totalFeatures changes

    const currentFeature = features[currentPageIndex];
    const contentAfterTurn = features[(currentPageIndex + 1) % totalFeatures];
    const contentBeforeTurn = features[(currentPageIndex - 1 + totalFeatures) % totalFeatures];

    // Base64 encoded placeholder image for a subtle circuit pattern
    const bgImagePlaceholder = '/images/bgwhy.gif';


    return (
        <section
            className="relative py-24 px-8 text-white overflow-hidden font-['Outfit',_sans-serif] bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 min-h-screen flex flex-col justify-center items-center"
        >
            {/* Background Ambience - More dynamic and less flat */}
            <div className="absolute inset-0 z-0 bg-gray-950 opacity-60"
                 style={{ backgroundImage: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)' }}>
                {/* Subtle Moving Grid */}
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    animation: 'moveGrid 120s linear infinite',
                }}></div>
                {/* Very faint, large celestial body or energy field */}
                <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen opacity-[0.02] blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen opacity-[0.02] blur-3xl animate-float-medium animation-delay-2000"></div>
            </div>

            <h2 className="relative z-20 text-5xl md:text-7xl font-extrabold text-center mb-20 tracking-tight leading-tight text-white animate-fade-in-up">
                Why{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent relative inline-block">
                    Resoundify
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-cyan-400 opacity-50"></span>
                </span>
                ?
            </h2>

            {/* The Activated Quantum Chronicon - Increased Size & Extraordinary Design */}
            <div className="relative w-full max-w-8xl h-[750px] bg-gradient-to-br from-gray-950 to-gray-800 rounded-xl shadow-2xl overflow-hidden flex border border-gray-700/50 perspective-1000"
                 style={{
                    boxShadow: '0 25px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 80px rgba(99, 102, 241, 0.3) inset', // Deep, emissive shadow
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px), radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, transparent 80%)', // Subtle grid + core glow
                    backgroundSize: '20px 20px, 20px 20px, 100%',
                    backgroundBlendMode: 'overlay, overlay, normal',
                 }}>
                {/* Left Side (High-Tech Cover & Hyper-Dynamic Data Spine) */}
                <div className="relative w-1/2 h-full bg-gradient-to-br from-gray-900 to-gray-700 flex flex-col justify-between items-center p-8 text-center rounded-l-xl border-r border-gray-700/50"
                     style={{
                        boxShadow: 'inset -5px 0 15px rgba(0,0,0,0.5)', // Inner shadow for depth
                     }}>
                    <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg text-shadow-glow mt-8">Quantum Codex</h3>
                    
                    {/* Dynamic Image Display Area */}
                    <div className="relative w-full max-w-sm h-72 flex items-center justify-center rounded-lg overflow-hidden flex-shrink-0 my-4"
                         style={{
                             border: '1px solid rgba(0,255,255,0.2)',
                             boxShadow: 'inset 0 0 20px rgba(0,255,255,0.1), 0 0 30px rgba(0,255,255,0.15)',
                             background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3))',
                         }}>
                        {/* The dynamic image/visual with fade-in */}
                        <div key={currentPageIndex} // Key to force re-render and re-apply animation
                             className="absolute inset-0 flex items-center justify-center p-4 animate-fade-in-image"
                             style={{
                                 // Replace this with actual image URLs if available:
                                 // backgroundImage: `url(${yourActualImageUrls[currentPageIndex]})`,
                                 // backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                             }}>
                             <span className="text-cyan-400 text-6xl font-bold opacity-70 text-shadow-light-cyan">
                                 {currentFeature.imagePlaceholder}
                             </span>
                        </div>
                        {/* Subtle grid/overlay on top of the image */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                        }}></div>
                    </div>

                    <p className="text-gray-300 opacity-80 max-w-xs mx-auto text-lg text-shadow-subtle mb-8">Unveiling the future of audio technology, page by page.</p>

                    {/* Hyper-Dynamic Data Spine / Binding */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-950 to-gray-800 rounded-l-xl border-r border-indigo-700/60 flex flex-col justify-around py-4 opacity-90"
                         style={{
                            boxShadow: 'inset 0 0 20px rgba(0,255,255,0.1), 0 0 15px rgba(0,255,255,0.15)', // Glowing spine effect
                         }}>
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-full h-0.5 bg-cyan-400 opacity-30 mx-auto animate-pulse-line" style={{animationDelay: `${i * 0.06}s`}}></div>
                        ))}
                        <div className="absolute inset-0 bg-gray-900/50 rounded-l-xl"></div> {/* Dark overlay for depth */}
                        {/* Central glowing core in spine */}
                        <div className="absolute inset-y-1/3 left-0 right-0 h-1/3 bg-cyan-500 rounded-full blur-xl opacity-10 animate-pulse-light"></div>
                    </div>
                </div>

                {/* Right Side (The Dynamic Page Area) - Holographic Page Displays */}
                <div className="relative w-1/2 h-full bg-black text-gray-900 rounded-r-xl shadow-inner flex flex-col justify-center items-center p-8 transform-style-preserve-3d"
                     style={{
                        boxShadow: 'inset 1px 0px 10px rgba(0,0,0,0.15)', // More pronounced inner shadow
                     }}>
                    {/* The static "underneath" page, showing content that will be revealed */}
                    

                    {/* The turning page - This is the actual page that visually flips */}
                    <div
                        ref={pageRef}
                        className={`absolute inset-0 text-gray-900 flex flex-col justify-center items-center p-8 transition-transform duration-800 ease-in-out origin-left backface-hidden // Reduced duration to 800ms
                            ${isAnimating ? (animationDirection === 'next' ? 'animate-page-turn-next' : 'animate-page-turn-prev') : ''}
                        `}
                        style={{
                            zIndex: isAnimating ? 2 : 1, // Ensure turning page is above revealed page
                            boxShadow: isAnimating ? (animationDirection === 'next' ? '10px 0 40px rgba(0,0,0,0.4), 0 0 20px rgba(0,255,255,0.1)' : '-10px 0 40px rgba(0,0,0,0.4), 0 0 20px rgba(0,255,255,0.1)') : 'none', // Stronger shadow + subtle glow on turning edge
                            borderRadius: '0 12px 12px 0', // Match outer book radius
                            // THIS IS THE LINE WHERE YOU CAN PLACE THE BACKGROUND IMAGE:
                            backgroundImage: `
                                url(), /* Your new background image here */
                                radial-gradient(circle at 70% 30%, rgba(0,255,255,0.03) 0%, transparent 40%),
                                linear-gradient(to bottom, rgba(0,0,0,0.01) 1px, transparent 1px),
                                linear-gradient(to right, rgba(0,0,0,0.005) 1px, transparent 1px),
                                url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iI0YzRjNGMyIgb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')`, // Subtle dot pattern
                            backgroundSize: 'cover, 100% 100%, 15px 15px, 15px 15px, 20px 20px', // 'cover' for the new image
                            backgroundRepeat: 'no-repeat, no-repeat, repeat, repeat, repeat', // No-repeat for the new image
                            backgroundPosition: 'center center, 100% 100%, 0 0, 0 0, 0 0', // Center for the new image
                            backgroundBlendMode: 'overlay, overlay, normal, normal, normal', // Blend the new image
                        }}
                    >
                        {/* Subtle animated scanline effect on turning page */}
                        <div className="absolute inset-0 z-10 scanline-overlay"></div>

                        {/* Additional Page Design Elements (on turning page for consistency) */}
                        <div className="absolute top-8 left-8 w-1/4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent opacity-30 animate-fade-in-long"></div>
                        <div className="absolute top-8 right-8 w-1/4 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent opacity-30 animate-fade-in-long animation-delay-200"></div>
                        <div className="absolute bottom-8 left-8 w-1/4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent opacity-30 animate-fade-in-long animation-delay-400"></div>
                        <div className="absolute bottom-8 right-8 w-1/4 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent opacity-30 animate-fade-in-long animation-delay-600"></div>

                        {/* Central pulsating glow effect */}
                        <div className="absolute inset-x-1/4 inset-y-1/4 w-1/2 h-1/2 bg-gray-500/5 rounded-full blur-xl animate-scale-pulse"></div>

                        {/* Faint, rotating crosshair/target */}
                        <div className="absolute inset-0 rotate-crosshair z-0" style={{
                            backgroundImage: 'radial-gradient(circle at center, transparent 40%, rgba(0, 255, 255, 0.02) 42%, transparent 45%), linear-gradient(to right, rgba(0,255,255,0.01) 50%, transparent 50%), linear-gradient(to bottom, rgba(0,255,255,0.01) 50%, transparent 50%)',
                            backgroundSize: '100% 100%, 100% 1px, 1px 100%',
                            animation: 'rotate-360 40s linear infinite',
                            opacity: 0.5,
                        }}></div>

                        <h3 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-800 drop-shadow-lg text-shadow-light-cyan z-20" dangerouslySetInnerHTML={{ __html: currentFeature.title }}></h3>
                        <p className="text-lg md:text-xl text-center text-gray-600 max-w-md leading-relaxed text-shadow-subtle z-20">
                            {currentFeature.description}
                        </p>
                         {/* Digital Page number */}
                        <div className="absolute bottom-6 right-8 text-gray-400 text-sm opacity-80 flex items-center space-x-1 font-mono z-20">
                            <span className="text-cyan-400 text-xs animate-flicker">&#9679;</span>
                            <span>{(currentPageIndex + 1).toString().padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>
                {/* Removed Navigation Buttons */}
            </div>

            {/* Custom CSS for 3D transforms and animations */}
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800;900&family=Share+Tech+Mono&display=swap'); /* Added for digital font */

                .font-mono { font-family: 'Share Tech Mono', monospace; } /* Apply digital font to page number */

                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }

                @keyframes fadeInTop {
                    from { opacity: 0; transform: translateY(-30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInTop 1.2s ease-out forwards;
                }

                /* Page turn animation for 'next' */
                @keyframes page-turn-next {
                    0% { transform: rotateY(0deg); }
                    50% { transform: rotateY(-90deg); } /* Mid-point: content swap happens here */
                    100% { transform: rotateY(-180deg); }
                }
                .animate-page-turn-next {
                    animation: page-turn-next 0.8s ease-in-out forwards; /* Reduced duration */
                }

                /* Page turn animation for 'previous' */
                @keyframes page-turn-prev {
                    0% { transform: rotateY(-180deg); } /* Start flipped */
                    50% { transform: rotateY(-90deg); }
                    100% { transform: rotateY(0deg); }
                }
                .animate-page-turn-prev {
                    animation: page-turn-prev 0.8s ease-in-out forwards; /* Reduced duration */
                }

                /* Background Animations */
                @keyframes moveGrid {
                    from { background-position: 0 0; }
                    to { background-position: 40px 40px; } /* Moves one tile */
                }

                @keyframes float-slow {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(10px, 10px); }
                    100% { transform: translate(0, 0); }
                }
                .animate-float-slow { animation: float-slow 40s ease-in-out infinite alternate; }

                @keyframes float-medium {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(-15px, 5px); }
                    100% { transform: translate(0, 0); }
                }
                .animate-float-medium { animation: float-medium 35s ease-in-out infinite alternate; }

                /* Data Spine Animation */
                @keyframes pulse-line {
                    0% { opacity: 0.3; transform: scaleX(0.8); }
                    50% { opacity: 0.8; transform: scaleX(1); }
                    100% { opacity: 0.3; transform: scaleX(0.8); }
                }
                .animate-pulse-line { animation: pulse-line 2s ease-in-out infinite; }

                /* Page Border Animation */
                @keyframes pulse-border {
                    0% { border-color: rgba(0, 255, 255, 0.15); box-shadow: 0 0 8px rgba(0, 255, 255, 0.08); }
                    50% { border-color: rgba(0, 255, 255, 0.6); box-shadow: 0 0 25px rgba(0, 255, 255, 0.4); }
                    100% { border-color: rgba(0, 255, 255, 0.15); box-shadow: 0 0 8px rgba(0, 255, 255, 0.08); }
                }
                .animate-pulse-border { animation: pulse-border 2.5s ease-in-out infinite; } /* More pronounced and slightly faster */

                /* Page Surface Scanline Effect */
                .scanline-overlay {
                    background: linear-gradient(to bottom, transparent 49%, rgba(0, 0, 0, 0.03) 50%, transparent 51%);
                    background-size: 100% 2px;
                    animation: scanline-move 1s steps(20) infinite; /* Fast scanlines */
                }
                @keyframes scanline-move {
                    from { background-position-y: 0; }
                    to { background-position-y: 20px; }
                }

                /* Text Shadows for Digital Effect */
                .text-shadow-glow {
                    text-shadow: 0 0 8px rgba(0, 255, 255, 0.4), 0 0 2px rgba(0, 255, 255, 0.2);
                }
                .text-shadow-light-cyan {
                    text-shadow: 0 0 5px rgba(0, 255, 255, 0.2);
                }
                .text-shadow-subtle {
                    text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                }
                @keyframes flicker {
                    0%, 100% { opacity: 0.8; }
                    50% { opacity: 0.3; }
                }
                .animate-flicker { animation: flicker 1s steps(5) infinite; }

                /* Spine Core Pulse */
                @keyframes pulse-light {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.4; }
                }
                .animate-pulse-light { animation: pulse-light 3s ease-out infinite alternate; }

                /* New Page Corner Animations */
                @keyframes fade-in-long {
                    0% { opacity: 0; transform: scaleX(0); }
                    100% { opacity: 0.3; transform: scaleX(1); } /* Increased opacity for more presence */
                }
                .animate-fade-in-long { animation: fade-in-long 1s ease-out forwards; }
                .animation-delay-200 { animation-delay: 0.2s; }
                .animation-delay-400 { animation-delay: 0.4s; }
                .animation-delay-600 { animation-delay: 0.6s; }

                /* New Page Central Pulse */
                @keyframes scale-pulse {
                    0%, 100% { transform: scale(1); opacity: 0.05; }
                    50% { transform: scale(1.1); opacity: 0.1; }
                }
                .animate-scale-pulse { animation: scale-pulse 4s ease-in-out infinite alternate; }

                /* New Rotating Crosshair/Target */
                @keyframes rotate-360 {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .rotate-crosshair {
                    transform-origin: center center;
                }

                /* New Image Fade-in Animation for Left Panel */
                @keyframes fade-in-image {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in-image {
                    animation: fade-in-image 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default WhyResoundify;