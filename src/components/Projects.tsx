
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Blog Website",
      description: "A modern blog platform with dynamic content management and responsive design",
      tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070",
      link: "https://example.com/blog-project"
    },
    {
      id: 2,
      title: "Social Network Platform",
      description: "Feature-rich social networking application with real-time messaging and content sharing",
      tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2070",
      link: "https://open-scroll-hub.vercel.app/"
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "ChatGPT-like conversational AI platform with natural language processing capabilities",
      tags: ["React", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=2070",
      link: "https://example.com/ai-chat-assistant"
    },
    {
      id: 4,
      title: "Fresh Harvest Market",
      description: "E-commerce platform for organic vegetables with inventory management and delivery tracking",
      tags: ["React", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070",
      link: "https://ecommerce-5z5q.vercel.app/"
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
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-futuristic-purple to-futuristic-cyan rounded-full text-sm text-white font-medium transition-all hover:scale-105 hover:shadow-glow",
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  )}
                >
                  Visit Project <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
