
import React from "react";
import { motion } from "framer-motion";
import { Circle, HexagonIcon } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-futuristic-purple/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-futuristic-cyan/20 blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-gradient text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-futuristic-purple to-futuristic-cyan mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-6 md:p-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-futuristic-cyan">The Vision</h3>
            <p className="text-white/80 mb-6">
              As a creative technologist, I blend cutting-edge technology with innovative design
              principles to create immersive digital experiences that push the boundaries of what's possible.
            </p>
            <p className="text-white/80 mb-6">
              My work exists at the intersection of art and technology, where I strive to create
              meaningful interactions that engage, inspire, and transform.
            </p>
            <div className="flex items-center space-x-4 text-white/60">
              <HexagonIcon className="h-6 w-6 text-futuristic-purple" />
              <span>Innovation-driven approach</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-futuristic-magenta">The Story</h3>
            <p className="text-white/80 mb-6">
              With over a decade of experience in digital product design and development, I've worked with
              startups, agencies, and Fortune 500 companies to deliver exceptional digital solutions.
            </p>
            <p className="text-white/80 mb-6">
              I believe in the power of technology to solve complex problems and create meaningful connections. 
              Every project is an opportunity to learn, grow, and push the boundaries of what's possible.
            </p>
            <div className="flex items-center space-x-4 text-white/60">
              <Circle className="h-6 w-6 text-futuristic-cyan" />
              <span>Endless curiosity</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
