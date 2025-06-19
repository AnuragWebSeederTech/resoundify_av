import React, { useState, useEffect, useRef } from 'react';

const DanteTechnologySpotlight = () => {
    // State to manage video playback
    const [isPlaying, setIsPlaying] = useState(false);
    // State to manage custom message box visibility and content
    const [messageBox, setMessageBox] = useState({ visible: false, message: '' });

    // Function to show the custom message box
    const showMessageBox = (message) => {
        setMessageBox({ visible: true, message });
    };

    // Function to hide the custom message box
    const hideMessageBox = () => {
        setMessageBox({ visible: false, message: '' });
    };

    // Placeholder function for interactivity - now uses custom message box
    const discoverProducts = () => {
        showMessageBox('Redirecting to Dante-enabled products. (This is a demo message, no actual redirect occurs)');
        // In a real application, you would navigate here:
        // window.location.href = 'https://www.example.com/dante-products';
    };

    const playVideo = () => {
        setIsPlaying(true);
    };

    // State to keep track of animated elements for scroll-based animation
    const [animatedElements, setAnimatedElements] = useState(new Set());

    // Refs for each animatable section
    const headerRef = useRef(null);
    const mainContentRef = useRef(null);
    const feature1Ref = useRef(null);
    const feature2Ref = useRef(null);
    const feature3Ref = useRef(null);
    const feature4Ref = useRef(null);
    const ctaButtonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimatedElements((prev) => new Set(prev).add(entry.target.dataset.animateId));
                        // Optionally, unobserve once animated if you only want it to animate once
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null, // relative to the viewport
                rootMargin: '0px',
                threshold: 0.2 // Trigger when 20% of the element is visible
            }
        );

        // Observe each ref
        if (headerRef.current) observer.observe(headerRef.current);
        if (mainContentRef.current) observer.observe(mainContentRef.current);
        if (feature1Ref.current) observer.observe(feature1Ref.current);
        if (feature2Ref.current) observer.observe(feature2Ref.current);
        if (feature3Ref.current) observer.observe(feature3Ref.current);
        if (feature4Ref.current) observer.observe(feature4Ref.current);
        if (ctaButtonRef.current) observer.observe(ctaButtonRef.current);

        // Cleanup function
        return () => {
            if (headerRef.current) observer.unobserve(headerRef.current);
            if (mainContentRef.current) observer.unobserve(mainContentRef.current);
            if (feature1Ref.current) observer.unobserve(feature1Ref.current);
            if (feature2Ref.current) observer.unobserve(feature2Ref.current);
            if (feature3Ref.current) observer.unobserve(feature3Ref.current);
            if (feature4Ref.current) observer.unobserve(feature4Ref.current);
            if (ctaButtonRef.current) observer.unobserve(ctaButtonRef.current);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    // Animation styles based on state for fade-in and slide-up
    const getAnimationStyle = (id) => ({
        transition: 'all 1000ms ease-out 400ms', // duration-1000 delay-400
        opacity: animatedElements.has(id) ? 1 : 0,
        transform: animatedElements.has(id) ? 'translateY(0)' : 'translateY(30px)', // Increased translate for more noticeable effect
    });

    return (
        <div style={{
            fontFamily: 'Inter, sans-serif', // Using Inter as requested, with sans-serif fallback
            background: 'linear-gradient(to bottom, #1E3A8A, #3B82F6)', // Blue-900 to Blue-700 gradient
            color: '#E0E7FF', // Light text color (blue-100)
            minHeight: '100vh',
            padding: '40px 20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center content horizontally
            justifyContent: 'flex-start', // Align content to the top
            overflowX: 'hidden' // Prevent horizontal scroll due to initial off-screen elements
        }}>
            {/* Custom Message Box */}
            {messageBox.visible && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#1E3A8A', // Blue-900 for message box background
                    color: 'white',
                    padding: '20px 30px',
                    borderRadius: '10px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
                    zIndex: 1000,
                    textAlign: 'center',
                    border: '2px solid #60A5FA', // Blue-400 border
                }}>
                    <p style={{ fontSize: '18px', marginBottom: '20px' }}>{messageBox.message}</p>
                    <button
                        onClick={hideMessageBox}
                        style={{
                            backgroundColor: '#60A5FA', // Blue-400 for message box button
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '20px',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'} // Darker blue on hover
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#60A5FA'}
                    >
                        Got It!
                    </button>
                </div>
            )}

            <div style={{
                maxWidth: '1200px',
                width: '100%', // Ensure it takes full width within max-width
                margin: '0 auto', // Center the main container
            }}>
                {/* Header Section */}
                <div
                    ref={headerRef}
                    data-animate-id="header"
                    style={{
                        ...getAnimationStyle('header'),
                        textAlign: 'center',
                        marginBottom: '60px',
                        fontFamily: 'Inter, sans-serif',
                    }}
                >
                    <h1 style={{
                        fontSize: '55px',
                        fontWeight: 'light',
                        color: '#E0E7FF', // blue-100 for title
                        marginBottom: '10px',
                        textShadow: animatedElements.has('header') ? '0 0 8px rgba(255, 255, 255, 0.4)' : 'none', // White text shadow
                        // Responsive font size for smaller screens
                        '@media (max-width: 768px)': {
                            fontSize: '35px',
                        },
                        '@media (max-width: 480px)': {
                            fontSize: '28px',
                        },
                    }}>
                        Technology Spotlight<br />
                        <span style={{
                            display: 'block',
                            fontSize: '28px',
                            fontWeight: 'normal',
                            color: '#BFDBFE', // blue-200 for subtitle
                            marginTop: '5px',
                            // Responsive font size for smaller screens
                            '@media (max-width: 768px)': {
                                fontSize: '22px',
                            },
                            '@media (max-width: 480px)': {
                                fontSize: '18px',
                            },
                        }}>
                            (Dante Integration)
                        </span>
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#BFDBFE', // blue-200 for paragraph
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                        // Responsive font size for smaller screens
                        '@media (max-width: 768px)': {
                            fontSize: '16px',
                        },
                        '@media (max-width: 480px)': {
                            fontSize: '14px',
                        },
                    }}>
                        Unleashing the power of seamless audio networking with cutting-edge technology.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div
                    ref={mainContentRef}
                    data-animate-id="main-content"
                    style={{
                        ...getAnimationStyle('main-content'),
                        display: 'grid',
                        gridTemplateColumns: '1fr', // Stacked on small screens by default
                        gap: '40px',
                        marginBottom: '60px',
                        alignItems: 'flex-start', // Align items to the top of their grid cells
                        // Responsive grid for larger screens
                        '@media (min-width: 768px)': {
                            gridTemplateColumns: '1fr 1fr', // Two columns on larger screens
                        },
                    }}
                >
                    {/* Left Content */}
                    <div>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#E0E7FF', // blue-100 for heading
                            marginBottom: '20px',
                            textShadow: animatedElements.has('main-content') ? '0 0 6px rgba(255, 255, 255, 0.3)' : 'none', // White text shadow
                            // Responsive font size for smaller screens
                            '@media (max-width: 768px)': {
                                fontSize: '28px',
                            },
                            '@media (max-width: 480px)': {
                                fontSize: '24px',
                            },
                        }}>
                            Benefits of <span style={{ color: '#60A5FA' }}>Dante Technology</span> {/* blue-400 for accent */}
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.6',
                            color: '#BFDBFE', // blue-200 for text
                            marginBottom: '15px',
                            // Responsive font size for smaller screens
                            '@media (max-width: 480px)': {
                                fontSize: '14px',
                            },
                        }}>
                            Dante is the leading solution for digital audio networking, delivering
                            uncompressed, multi-channel digital media via standard Ethernet networks
                            with near-zero latency and perfect synchronization. It simplifies system
                            setup, eliminates bulky analog cabling, and provides superior sound quality.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.6',
                            color: '#BFDBFE', // blue-200 for text
                            // Responsive font size for smaller screens
                            '@media (max-width: 480px)': {
                                fontSize: '14px',
                            },
                        }}>
                            <span style={{ color: '#60A5FA', fontWeight: 'bold' }}>Resoundify</span> leverages
                            Dante to provide unparalleled flexibility and scalability in audio
                            installations. This integration ensures our products offer a robust,
                            future-proof, and high-performance audio solution for any environment,
                            from professional studios to large-scale venues.
                        </p>
                    </div>

                    {/* Right Content - Video Placeholder or Actual Video */}
                    <div>
                        {isPlaying ? (
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/v7BVebH-xyA" // Corrected YouTube embed URL
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                style={{
                                    borderRadius: '10px',
                                    boxShadow: animatedElements.has('main-content') ? '0 4px 20px rgba(96, 165, 250, 0.4)' : 'none' // blue-300 highlight
                                }}
                            ></iframe>
                        ) : (
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    paddingBottom: '56.25%', // 16:9 aspect ratio
                                    backgroundColor: '#1A2F6D', // Darker blue, closer to blue-950 for video area
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: animatedElements.has('main-content') ? '0 4px 20px rgba(96, 165, 250, 0.4)' : 'none' // blue-300 highlight
                                }}
                                onClick={playVideo}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '0', left: '0', right: '0', bottom: '0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent overlay
                                }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '15px'
                                    }}>
                                        <div style={{
                                            width: '0',
                                            height: '0',
                                            borderLeft: '25px solid white',
                                            borderTop: '15px solid transparent',
                                            borderBottom: '15px solid transparent',
                                            marginLeft: '5px'
                                        }}></div>
                                    </div>
                                    <p style={{ color: 'white', fontWeight: '500' }}>Dante Integration Showcase</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Feature Boxes Grid - Your "pointers" */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Responsive grid
                    gap: '25px',
                    marginTop: '50px'
                }}>
                    {/* Feature 1 */}
                    <div
                        ref={feature1Ref}
                        data-animate-id="feature-1"
                        style={{
                            ...getAnimationStyle('feature-1'),
                            backgroundColor: '#1E3A8A', // blue-900 for feature boxes
                            borderRadius: '10px',
                            padding: '25px',
                            boxShadow: animatedElements.has('feature-1') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)', // blue-300 highlight
                            borderTop: '4px solid #60A5FA', // blue-400 top border
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            transition: 'all 0.3s ease-in-out', // Added for smooth hover
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(96, 165, 250, 0.5)'; // More prominent shadow on hover
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = animatedElements.has('feature-1') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)'; // Revert to initial shadow
                        }}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '8px',
                            backgroundColor: '#3B82F6', // blue-700 icon background
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '18px',
                        }}>
                            <svg width="28" height="28" fill="none" stroke="white" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 style={{
                            fontSize: '22px',
                            fontWeight: 'bold',
                            color: '#E0E7FF', // blue-100
                            marginBottom: '10px',
                            textShadow: animatedElements.has('feature-1') ? '0 0 6px rgba(255, 255, 255, 0.2)' : 'none', // White text shadow
                        }}>Effortless Setup</h3>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: '1.5',
                            color: '#BFDBFE' // blue-200
                        }}>Dante simplifies complex audio networks, making installation and configuration straightforward with intelligent auto-discovery.</p>
                    </div>

                    {/* Feature 2 */}
                    <div
                        ref={feature2Ref}
                        data-animate-id="feature-2"
                        style={{
                            ...getAnimationStyle('feature-2'),
                            backgroundColor: '#1E3A8A', // blue-900 for feature boxes
                            borderRadius: '10px',
                            padding: '25px',
                            boxShadow: animatedElements.has('feature-2') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)',
                            borderTop: '4px solid #60A5FA',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            transition: 'all 0.3s ease-in-out', // Added for smooth hover
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(96, 165, 250, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = animatedElements.has('feature-2') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)';
                        }}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '8px',
                            backgroundColor: '#3B82F6', // blue-700
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '18px'
                        }}>
                            <svg width="28" height="28" fill="none" stroke="white" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 style={{
                            fontSize: '22px',
                            fontWeight: 'bold',
                            color: '#E0E7FF', // blue-100
                            marginBottom: '10px',
                            textShadow: animatedElements.has('feature-2') ? '0 0 6px rgba(255, 255, 255, 0.2)' : 'none',
                        }}>Superior Quality</h3>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: '1.5',
                            color: '#BFDBFE' // blue-200
                        }}>Experience pristine, uncompressed audio with Dante's high-fidelity transmission and near-zero latency performance.</p>
                    </div>

                    {/* Feature 3 */}
                    <div
                        ref={feature3Ref}
                        data-animate-id="feature-3"
                        style={{
                            ...getAnimationStyle('feature-3'),
                            backgroundColor: '#1E3A8A', // blue-900 for feature boxes
                            borderRadius: '10px',
                            padding: '25px',
                            boxShadow: animatedElements.has('feature-3') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)',
                            borderTop: '4px solid #60A5FA',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            transition: 'all 0.3s ease-in-out', // Added for smooth hover
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(96, 165, 250, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = animatedElements.has('feature-3') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)';
                        }}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '8px',
                            backgroundColor: '#3B82F6', // blue-700
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '18px'
                        }}>
                            <svg width="28" height="28" fill="none" stroke="white" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                            </svg>
                        </div>
                        <h3 style={{
                            fontSize: '22px',
                            fontWeight: 'bold',
                            color: '#E0E7FF', // blue-100
                            marginBottom: '10px',
                            textShadow: animatedElements.has('feature-3') ? '0 0 6px rgba(255, 255, 255, 0.2)' : 'none',
                        }}>Unmatched Scalability</h3>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: '1.5',
                            color: '#BFDBFE' // blue-200
                        }}>Easily expand your audio system without complex re-cabling or compatibility issues, supporting thousands of channels.</p>
                    </div>

                    {/* Feature 4 */}
                    <div
                        ref={feature4Ref}
                        data-animate-id="feature-4"
                        style={{
                            ...getAnimationStyle('feature-4'),
                            backgroundColor: '#1E3A8A', // blue-900 for feature boxes
                            borderRadius: '10px',
                            padding: '25px',
                            boxShadow: animatedElements.has('feature-4') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)',
                            borderTop: '4px solid #60A5FA',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            transition: 'all 0.3s ease-in-out', // Added for smooth hover
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(96, 165, 250, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = animatedElements.has('feature-4') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)';
                        }}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '8px',
                            backgroundColor: '#3B82F6', // blue-700
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '18px'
                        }}>
                            <svg width="28" height="28" fill="none" stroke="white" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                            </svg>
                        </div>
                        <h3 style={{
                            fontSize: '22px',
                            fontWeight: 'bold',
                            color: '#E0E7FF', // blue-100
                            marginBottom: '10px',
                            textShadow: animatedElements.has('feature-4') ? '0 0 6px rgba(255, 255, 255, 0.2)' : 'none',
                        }}>Future-Proof</h3>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: '1.5',
                            color: '#BFDBFE' // blue-200
                        }}>Stay ahead with an adaptable platform ready for tomorrow's audio demands and emerging technologies.</p>
                    </div>
                </div>

                {/* CTA Button */}
                <div
                    ref={ctaButtonRef}
                    data-animate-id="cta-button"
                    style={{
                        ...getAnimationStyle('cta-button'),
                        textAlign: 'center',
                        marginTop: '80px',
                    }}
                >
                    <button
                        style={{
                            backgroundColor: '#3B82F6', // blue-700 button
                            color: 'white',
                            padding: '15px 30px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                            textShadow: animatedElements.has('cta-button') ? '0 0 5px rgba(255, 255, 255, 0.3)' : 'none', // White text shadow
                        }}
                        // Simple hover effect
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#2563EB'; // blue-800 on hover
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#3B82F6'; // Revert
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                        }}
                        onClick={discoverProducts}
                    >
                        Discover Dante-Enabled Products
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DanteTechnologySpotlight;
