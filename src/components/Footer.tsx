
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-4 relative border-t border-white/10">
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-futuristic-purple/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-futuristic-cyan/10 blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-gradient">SHINY</h3>
            <p className="text-white/60">Creative Work</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <ul className="flex space-x-6">
              <li><a href="https://www.linkedin.com/in/shahina-shaik-17b755277/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/Shahina-Sk" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
          <p className="text-white/40 text-sm mt-2 md:mt-0">Designed & Developed with ❤️</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
