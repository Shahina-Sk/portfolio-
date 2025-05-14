
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MessageCircle, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Saman",
      role: "Full Stack Developer",
      company: "Tech Innovators",
      content: "Working with this visionary developer was an incredible experience. The attention to detail and innovative approach transformed our concept into a stunning digital reality.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Suvarna",
      role: "Developer",
      company: "Digital Solutions",
      content: "Extraordinary talent and exceptional execution. Our project requirements were complex, but the solutions provided were elegant and future-proof.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Shannu",
      role: "Python Developer",
      company: "Data Dynamics",
      content: "A rare combination of technical excellence and creative vision. The work delivered exceeded our expectations and set a new standard for our digital products.",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 relative">
      <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-futuristic-magenta/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-futuristic-purple/20 blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient text-3xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-futuristic-purple to-futuristic-cyan mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="flex justify-center mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <button
                  className={cn(
                    "mx-2 transition-all duration-300 rounded-full overflow-hidden",
                    activeTestimonial === index 
                      ? "border-4 border-futuristic-cyan scale-110" 
                      : "border-2 border-white/20 opacity-50 scale-90"
                  )}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 object-cover"
                  />
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute top-0 left-0 w-full transition-all duration-500 glassmorphism rounded-2xl p-8",
                  activeTestimonial === index 
                    ? "opacity-100 translate-y-0 z-10" 
                    : "opacity-0 translate-y-8 -z-10"
                )}
                initial={false}
                animate={{ 
                  opacity: activeTestimonial === index ? 1 : 0,
                  y: activeTestimonial === index ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-futuristic-cyan mr-2" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-futuristic-cyan" fill="#33C3F0" />
                    ))}
                  </div>
                </div>
                
                <p className="text-white/90 text-lg mb-6">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-futuristic-cyan to-futuristic-magenta rounded-full blur-xl opacity-20"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Empty div to maintain height */}
          <div className="glassmorphism rounded-2xl p-8 opacity-0 pointer-events-none">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 mr-2" />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" />
                ))}
              </div>
            </div>
            <p className="text-lg mb-6">"{testimonials[0].content}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold"></h4>
                <p className="text-sm"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
