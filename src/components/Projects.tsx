
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Neural Interface",
      description: "A futuristic UI system with advanced gesture controls",
      tags: ["UI/UX", "Motion Design", "React"],
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070"
    },
    {
      id: 2,
      title: "Quantum Visualizer",
      description: "Real-time 3D visualization of quantum computing processes",
      tags: ["WebGL", "Data Viz", "Three.js"],
      image: "https://images.unsplash.com/photo-1639322537157-d3abbf6de6f8?q=80&w=1932"
    },
    {
      id: 3,
      title: "Cybernetic Assistant",
      description: "AI-powered digital assistant with personalized interactions",
      tags: ["ML", "NLP", "Python"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965"
    },
    {
      id: 4,
      title: "Holographic Projections",
      description: "Augmented reality experiences through holographic interfaces",
      tags: ["AR", "3D Modeling", "Unity"],
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2012"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-futuristic-magenta/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-futuristic-purple/20 blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-futuristic-purple to-futuristic-cyan mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative glassmorphism rounded-2xl overflow-hidden h-[300px] md:h-[400px] group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
                style={{ 
                  backgroundImage: `url(${project.image})`,
                  transform: hoveredProject === project.id ? "scale(1.1) translateY(-10px)" : "scale(1)"
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-futuristic-black to-transparent opacity-70" />
              
              <div className={cn(
                "absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-transform duration-500",
                hoveredProject === project.id ? "translate-y-0" : "translate-y-12"
              )}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                
                <p className={cn(
                  "text-white/80 mb-4 transition-opacity duration-300",
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                )}>
                  {project.description}
                </p>
                
                <div className={cn(
                  "flex flex-wrap gap-2 transition-opacity duration-300",
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                )}>
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
