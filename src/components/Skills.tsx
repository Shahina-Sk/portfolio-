import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const skills: Skill[] = [
    { name: "UI/UX Design", level: 95, color: "#8B5CF6" },
    { name: "React Development", level: 90, color: "#33C3F0" },
    { name: "TypeScript", level: 88, color: "#3178C6" },
    { name: "Next.js", level: 85, color: "#000000" },
    { name: "Python", level: 75, color: "#D6BCFA" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions and handle responsive sizing
    const setCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      // Get the device pixel ratio for better rendering on high-DPI screens
      const dpr = window.devicePixelRatio || 1;
      
      // Set the canvas dimensions based on the container size
      canvas.width = container.clientWidth * dpr;
      canvas.height = container.clientHeight * dpr;
      
      // Scale the canvas CSS dimensions
      canvas.style.width = `${container.clientWidth}px`;
      canvas.style.height = `${container.clientHeight}px`;
      
      // Scale the context to account for the device pixel ratio
      ctx.scale(dpr, dpr);
    };

    setCanvasDimensions();
    
    // Re-render on window resize
    const handleResize = () => {
      setCanvasDimensions();
      drawSkills(true); // Redraw immediately on resize
    };
    
    window.addEventListener("resize", handleResize);

    // Animation variables
    let animationFrameId: number;
    let animationProgress = 0;
    const animationDuration = 120; // frames

    // Draw skill graph
    const drawSkills = (immediate = false) => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate center and radius
      const dpr = window.devicePixelRatio || 1;
      const centerX = (canvas.width / dpr) / 2;
      const centerY = (canvas.height / dpr) / 2;
      const maxRadius = Math.min(centerX, centerY) * 0.7; // Slightly smaller radius for better visibility
      
      // Draw background circles
      for (let i = 5; i > 0; i--) {
        const radius = (maxRadius / 5) * i;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.stroke();
      }
      
      // Calculate angle between skills
      const angleIncrement = (Math.PI * 2) / skills.length;
      
      // Draw skill lines
      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleIncrement;
        
        // Draw skill line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + Math.cos(angle) * maxRadius,
          centerY + Math.sin(angle) * maxRadius
        );
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.stroke();
        
        // Draw skill labels on all screen sizes
        const screenWidth = window.innerWidth;
        
        // Calculate label position based on screen size
        const labelDistanceMultiplier = screenWidth < 768 ? 0.85 : 1.1;
        const labelDistance = maxRadius * labelDistanceMultiplier;
        const labelX = centerX + Math.cos(angle) * labelDistance;
        const labelY = centerY + Math.sin(angle) * labelDistance;
        
        // Responsive font size
        const fontSize = screenWidth < 768 ? 10 : (screenWidth < 1024 ? 12 : 14);
        
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.font = `${fontSize}px sans-serif`;
        ctx.textAlign = angle > Math.PI / 2 && angle < Math.PI * 3/2 ? "right" : "left";
        ctx.textBaseline = angle > 0 && angle < Math.PI ? "top" : "bottom";
        
        // Add a small background for better readability on mobile
        if (screenWidth < 768) {
          const textMetrics = ctx.measureText(skills[i].name);
          const textWidth = textMetrics.width;
          const textHeight = fontSize;
          const padding = 4;
          
          ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
          ctx.fillRect(
            angle > Math.PI / 2 && angle < Math.PI * 3/2 ? labelX - textWidth - padding : labelX - padding,
            angle > 0 && angle < Math.PI ? labelY - padding : labelY - textHeight - padding,
            textWidth + padding * 2,
            textHeight + padding * 2
          );
          
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        }
        
        ctx.fillText(skills[i].name, labelX, labelY);
      }
      
      // Draw skill data points
      ctx.beginPath();
      
      const progress = Math.min(animationProgress / animationDuration, 1);
      
      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleIncrement;
        const skillLevel = skills[i].level / 100;
        const radius = maxRadius * skillLevel * progress;
        
        const pointX = centerX + Math.cos(angle) * radius;
        const pointY = centerY + Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      
      // Close the path to first point
      const firstSkillLevel = skills[0].level / 100;
      const firstRadius = maxRadius * firstSkillLevel * progress;
      ctx.lineTo(
        centerX + Math.cos(0) * firstRadius,
        centerY + Math.sin(0) * firstRadius
      );
      
      // Fill the radar chart
      ctx.fillStyle = "rgba(139, 92, 246, 0.2)";
      ctx.fill();
      
      // Draw stroke around the chart
      ctx.strokeStyle = "rgba(139, 92, 246, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw skill data points
      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleIncrement;
        const skillLevel = skills[i].level / 100;
        const radius = maxRadius * skillLevel * progress;
        
        const pointX = centerX + Math.cos(angle) * radius;
        const pointY = centerY + Math.sin(angle) * radius;
        
        // Draw the point
        ctx.beginPath();
        ctx.arc(pointX, pointY, 6, 0, Math.PI * 2);
        ctx.fillStyle = skills[i].color;
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      if (immediate) {
        // Skip animation if immediate redraw is requested (e.g., after resize)
        animationProgress = animationDuration;
      } else if (animationProgress < animationDuration) {
        animationProgress++;
        animationFrameId = requestAnimationFrame(() => drawSkills());
      }
    };
    
    // Start animation
    drawSkills();
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-futuristic-cyan/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-futuristic-purple/20 blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient text-3xl md:text-5xl font-bold mb-6">Skill Radar</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-futuristic-purple to-futuristic-cyan mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-4 glassmorphism rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-futuristic-cyan">Technical Expertise</h3>
            
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Circle className="h-3 w-3" style={{ color: skill.color }} />
                  <span className="text-white/80">{skill.name}</span>
                  <span className="text-white/60 ml-auto">{skill.level}%</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <p className="text-white/70">
                My multidisciplinary skill set allows me to approach problems from multiple angles,
                combining technical expertise with design thinking.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-8 glassmorphism rounded-2xl p-6 h-[300px] sm:h-[350px] md:h-[400px]"
          >
            <canvas ref={canvasRef} className="w-full h-full"></canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
