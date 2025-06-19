import React, { useState, useEffect, useRef } from 'react';

const DanteTechnologySpotlight = () => {
    // Placeholder functions for interactivity
    const playVideo = () => {
        alert('Video would play here.');
    };

    const discoverProducts = () => {
        alert('Redirecting to Dante-enabled products.');
    };

    // State to keep track of animated elements
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

    // Animation styles based on state
    const getAnimationStyle = (id) => ({
        transition: 'all 1000ms ease-out 400ms', // duration-1000 delay-400
        opacity: animatedElements.has(id) ? 1 : 0,
        transform: animatedElements.has(id) ? 'translateY(0)' : 'translateY(30px)', // Increased translate for more noticeable effect
        // Added text-shadow and box-shadow for highlights as per your theme preference
        // Note: text-shadow for text elements, box-shadow for block elements
    });

    return (
        <div style={{
            fontFamily: 'sans-serif', // Overall content font
            background: 'linear-gradient(to bottom, #000000, #000033)', // Dark gradient from black to blue-900
            color: '#E0E7FF', // Light text color
            minHeight: '100vh',
            padding: '40px 20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center content horizontally
            justifyContent: 'flex-start', // Align content to the top
            overflowX: 'hidden' // Prevent horizontal scroll due to initial off-screen elements
        }}>
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
                        fontFamily: 'sans-serif', // Ensure header also uses sans-serif
                    }}
                >
                    <h1 style={{
                        fontSize: '45px', // Adjusted to "medium" - between small (32px) and large (48px)
                        fontWeight: 'bold', // Still bold for prominence
                        color: '#60A5FA', // Simple blue for title
                        marginBottom: '10px',
                        textShadow: animatedElements.has('header') ? '0 0 8px rgba(255, 255, 255, 0.5), 0 0 15px rgba(96, 165, 250, 0.7)' : 'none' // White and blue-200 shadow
                    }}>
                        Technology Spotlight<br />
                        <span style={{
                            display: 'block',
                            fontSize: '28px', // Slightly smaller subtitle
                            fontWeight: 'normal',
                            color: '#93C5FD', // Lighter blue for subtitle
                            marginTop: '5px'
                        }}>
                            (Dante Integration)
                        </span>
                    </h1>
                    <p style={{
                        fontSize: '18px', // Consistent content font size
                        color: '#BFDBFE', // Light blue for paragraph
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6', // Improved readability
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
                        gridTemplateColumns: '1fr', // Stacked on small screens
                        gap: '40px',
                        marginBottom: '60px',
                        alignItems: 'flex-start', // Align items to the top of their grid cells
                    }}
                >
                    {/* Left Content */}
                    <div>
                        <h2 style={{
                            fontSize: '32px', // Consistent content heading size
                            fontWeight: 'bold',
                            color: '#E0E7FF', // White for heading
                            marginBottom: '20px',
                            textShadow: animatedElements.has('main-content') ? '0 0 8px rgba(255, 255, 255, 0.5), 0 0 15px rgba(96, 165, 250, 0.7)' : 'none'
                        }}>
                            Benefits of <span style={{ color: '#60A5FA' }}>Dante Technology</span>
                        </h2>
                        <p style={{
                            fontSize: '16px', // Consistent content font size
                            lineHeight: '1.6',
                            color: '#BFDBFE', // Light blue for text
                            marginBottom: '15px'
                        }}>
                            Dante is the leading solution for digital audio networking, delivering
                            uncompressed, multi-channel digital media via standard Ethernet networks
                            with near-zero latency and perfect synchronization. It simplifies system
                            setup, eliminates bulky analog cabling, and provides superior sound quality.
                        </p>
                        <p style={{
                            fontSize: '16px', // Consistent content font size
                            lineHeight: '1.6',
                            color: '#BFDBFE' // Light blue for text
                        }}>
                            <span style={{ color: '#60A5FA', fontWeight: 'bold' }}>Resoundify</span> leverages
                            Dante to provide unparalleled flexibility and scalability in audio
                            installations. This integration ensures our products offer a robust,
                            future-proof, and high-performance audio solution for any environment,
                            from professional studios to large-scale venues.
                        </p>
                    </div>

                    {/* Right Content - Video Placeholder */}
                    <div>
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                paddingBottom: '56.25%', // 16:9 aspect ratio
                                backgroundColor: '#1A1A1A', // Dark background for video area
                                borderRadius: '10px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: animatedElements.has('main-content') ? '0 4px 20px rgba(96, 165, 250, 0.4)' : 'none' // Blue-200 highlight
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
                    </div>
                </div>

                {/* Feature Boxes Grid - Your "pointers" */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Responsive grid, slightly smaller min width
                    gap: '25px', // Consistent gap
                    marginTop: '50px'
                }}>
                    {/* Feature 1 */}
                    <div
                        ref={feature1Ref}
                        data-animate-id="feature-1"
                        style={{
                            ...getAnimationStyle('feature-1'),
                            backgroundColor: '#1C1C1C', // Darker background for boxes
                            borderRadius: '10px',
                            padding: '25px', // Increased padding for better look
                            boxShadow: animatedElements.has('feature-1') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)', // Slightly stronger shadow with highlight
                            borderTop: '4px solid #60A5FA', // Thicker blue top border
                            display: 'flex', // Use flex for internal alignment
                            flexDirection: 'column',
                            alignItems: 'flex-start', // Align text left within box
                        }}
                    >
                        <div style={{
                            width: '56px', // Larger icon wrapper
                            height: '56px',
                            borderRadius: '8px',
                            backgroundColor: '#3B82F6', // Blue icon background
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '18px', // Increased margin
                        }}>
                            <svg width="28" height="28" fill="none" stroke="white" viewBox="0 0 24 24"> {/* Larger icon */}
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 style={{
                            fontSize: '22px', // Larger heading for pointers
                            fontWeight: 'bold', // Bold for prominence
                            color: '#E0E7FF',
                            marginBottom: '10px'
                        }}>Effortless Setup</h3>
                        <p style={{
                            fontSize: '15px', // Slightly larger content font
                            lineHeight: '1.5',
                            color: '#BFDBFE'
                        }}>Dante simplifies complex audio networks, making installation and configuration straightforward with intelligent auto-discovery.</p>
                    </div>

                    {/* Feature 2 */}
                    <div
                        ref={feature2Ref}
                        data-animate-id="feature-2"
                        style={{
                            ...getAnimationStyle('feature-2'),
                            backgroundColor: '#1C1C1C',
                            borderRadius: '10px',
                            padding: '25px',
                            boxShadow: animatedElements.has('feature-2') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)',
                            borderTop: '4px solid #60A5FA',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '8px',
                            backgroundColor: '#3B82F6',
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
                            color: '#E0E7FF',
                            marginBottom: '10px'
                        }}>Superior Quality</h3>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: '1.5',
                            color: '#BFDBFE'
                        }}>Experience pristine, uncompressed audio with Dante's high-fidelity transmission and near-zero latency performance.</p>
                    </div>

                    {/* Feature 3 */}
                    <div
                        ref={feature3Ref}
                        data-animate-id="feature-3"
                        style={{
                            ...getAnimationStyle('feature-3'),
                            backgroundColor: '#1C1C1C',
                            borderRadius: '10px',
                            padding: '25px',
                            boxShadow: animatedElements.has('feature-3') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)',
                            borderTop: '4px solid #60A5FA',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '8px',
                            backgroundColor: '#3B82F6',
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
                            color: '#E0E7FF',
                            marginBottom: '10px'
                        }}>Unmatched Scalability</h3>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: '1.5',
                            color: '#BFDBFE'
                        }}>Easily expand your audio system without complex re-cabling or compatibility issues, supporting thousands of channels.</p>
                    </div>

                    {/* Feature 4 */}
                    <div
                        ref={feature4Ref}
                        data-animate-id="feature-4"
                        style={{
                            ...getAnimationStyle('feature-4'),
                            backgroundColor: '#1C1C1C',
                            borderRadius: '10px',
                            padding: '25px',
                            boxShadow: animatedElements.has('feature-4') ? '0 4px 15px rgba(96, 165, 250, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.4)',
                            borderTop: '4px solid #60A5FA',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '8px',
                            backgroundColor: '#3B82F6',
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
                            color: '#E0E7FF',
                            marginBottom: '10px'
                        }}>Future-Proof</h3>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: '1.5',
                            color: '#BFDBFE'
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
                            backgroundColor: '#3B82F6', // Blue button
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
                            transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease', // Add transitions for smoothness
                        }}
                        // Simple hover effect
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#2563EB'; // Darker blue on hover
                            e.currentTarget.style.transform = 'translateY(-3px)'; // Lift effect
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#3B82F6'; // Revert
                            e.currentTarget.style.transform = 'translateY(0)'; // Revert
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