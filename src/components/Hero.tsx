import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const heroText = "shiny creative work";
  const subtitle = "Bridging design and technology to craft immersive digital experiences";

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      textElement.innerHTML = '';
      
      // Create and animate each character with staggered delays
      heroText.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${index * 0.1}s`;
        span.className = 'animate-letter';
        span.style.transform = 'translateY(20px)';
        textElement.appendChild(span);
      });
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-futuristic-purple/20 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-futuristic-cyan/20 blur-3xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-futuristic-magenta/20 blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      
      <div className="z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
            {heroText}
          </h1>
        </motion.div>
        
        <motion.p
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-futuristic-purple to-futuristic-magenta text-white font-medium relative overflow-hidden group">
            <span className="relative z-10">Explore My Work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-futuristic-cyan to-futuristic-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white/50 mb-2">Scroll to discover</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
