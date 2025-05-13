
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Star, BookUser, User, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-futuristic-purple/20 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-futuristic-cyan/20 blur-3xl animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-futuristic-magenta/20 blur-2xl animate-pulse-glow"></div>
      
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
        
        {/* Personal Information Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="glassmorphism border border-white/20 relative group overflow-hidden">
            {/* Shine effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-futuristic-purple via-futuristic-cyan to-futuristic-magenta rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">SHAHINA SHAIK</h3>
                <p className="text-xl text-futuristic-cyan mb-4">Developer</p>
              </div>
              
              <div className="space-y-4 max-w-3xl mx-auto">
                <p className="text-white/80 mb-6 text-center">
                  Energetic and quick-learning Computer Science graduate with hands-on project experience in web development, machine
                  learning, and IoT systems. Strong problem-solving and client handling skills developed through project-based learning.
                  Seeking a dynamic role at ICICI Bank to enhance digital customer service and contribute to technology-driven financial
                  solutions.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-futuristic-magenta" />
                    <span>shahinashaik5277@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-futuristic-purple" />
                    <span>Ongole, A.P, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-futuristic-cyan" />
                    <span>9701506751</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-futuristic-purple" />
                    <a href="#" className="hover:text-futuristic-cyan transition-colors">LinkedIn</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-futuristic-magenta" />
                    <a href="#" className="hover:text-futuristic-cyan transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-6 md:p-8 flex flex-col justify-center relative group"
          >
            {/* Shine effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-futuristic-purple via-futuristic-cyan to-futuristic-magenta rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-futuristic-cyan flex items-center gap-2">
              <GraduationCap className="h-7 w-7" strokeWidth={1.5} />
              <span>Fresh Graduate</span>
            </h3>
            <p className="text-white/80 mb-6">
              As a recent graduate in <span className="text-futuristic-magenta font-semibold">Computer Science</span>, 
              I bring a unique blend of technical expertise and artistic innovation to the digital landscape.
            </p>
            <p className="text-white/80 mb-6">
              My educational journey has equipped me with cutting-edge skills in both design and 
              development, allowing me to create immersive digital experiences that push boundaries.
            </p>
            <div className="flex items-center space-x-4 text-white/70">
              <BookUser className="h-6 w-6 text-futuristic-purple" />
              <span>Continuous learner & innovator</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-6 md:p-8 relative group"
          >
            {/* Shine effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-futuristic-magenta via-futuristic-purple to-futuristic-cyan rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-futuristic-magenta flex items-center gap-2">
              <Briefcase className="h-7 w-7" strokeWidth={1.5} />
              <span>Seeking Opportunities</span>
            </h3>
            <p className="text-white/80 mb-6">
              I'm actively looking for exciting roles where I can apply my passion for 
              <span className="text-futuristic-cyan font-semibold"> creative problem-solving</span> and 
              technical innovation to create meaningful digital experiences.
            </p>
            <p className="text-white/80 mb-6">
              My goal is to join a forward-thinking team where I can contribute my fresh perspective 
              while growing alongside industry professionals who share my enthusiasm for pushing technological boundaries.
            </p>
            <div className="flex items-center space-x-4 text-white/70">
              <Star className="h-6 w-6 text-futuristic-cyan" />
              <span>Ready to make an impact</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
