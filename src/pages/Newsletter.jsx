import React, { useEffect, useRef } from 'react';

const Newsletter = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // GSAP CDN load kora
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    
    script.onload = () => {
      const gsap = window.gsap;
      
      // Container fade in and scale
      gsap.from(containerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        delay: 0.3,
        ease: 'back.out(1.7)'
      });

      // Text animation
      gsap.from(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.5,
        ease: 'power2.out'
      });

      // Form animation
      gsap.from(formRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.7,
        ease: 'power3.out'
      });

      // Gradient animation
      gsap.to(containerRef.current, {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'none'
      });
    };
    
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  

  return (
    <div 
      ref={containerRef}
      className="m-10 py-12 px-4 rounded-2xl"
      style={{
        background: 'linear-gradient(90deg, #ff0080, #7928ca, #2afadf, #7928ca, #ff0080)',
        backgroundSize: '200% 100%'
      }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 
          ref={headingRef}
          className="text-3xl font-semibold mb-4 text-white"
        >
          Stay Updated with Our Latest News!
        </h2>
        <p 
          ref={textRef}
          className="mb-6 text-gray-100"
        >
          Subscribe to our newsletter and never miss an update.
        </p>
        
        <div 
          ref={formRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg w-full sm:w-64 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <button
            className="py-3 px-6 rounded-lg w-full sm:w-auto bg-white text-purple-700 font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;