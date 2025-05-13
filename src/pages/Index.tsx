
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Import framer-motion manually
import { MotionConfig } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-futuristic-black text-white overflow-hidden">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-futuristic-purple via-futuristic-cyan to-futuristic-magenta z-50 origin-left"
          style={{ scaleX }}
        />
        
        <Navigation />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default Index;

