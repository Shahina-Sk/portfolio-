
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, MessageCircle, User, Send } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log({ name, email, message });
    setIsSent(true);
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-futuristic-purple/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-futuristic-cyan/20 blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-futuristic-purple to-futuristic-cyan mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold mb-6 text-futuristic-cyan">Send A Message</h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-white/70 mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-futuristic-purple/60" />
                  <input
                    id="name"
                    type="text"
                    className="bg-white/10 border border-white/20 rounded-lg py-3 px-10 w-full text-white focus:outline-none focus:ring-2 focus:ring-futuristic-cyan/50"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-white/70 mb-2">Your Email</label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-futuristic-purple/60" />
                  <input
                    id="email"
                    type="email"
                    className="bg-white/10 border border-white/20 rounded-lg py-3 px-10 w-full text-white focus:outline-none focus:ring-2 focus:ring-futuristic-cyan/50"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white/70 mb-2">Your Message</label>
                <textarea
                  id="message"
                  className="bg-white/10 border border-white/20 rounded-lg py-3 px-4 w-full h-32 text-white focus:outline-none focus:ring-2 focus:ring-futuristic-cyan/50"
                  placeholder="Hello, I'd like to discuss a project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-futuristic-purple to-futuristic-magenta text-white py-3 rounded-lg font-medium overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-futuristic-cyan to-futuristic-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </span>
              </button>
              
              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-futuristic-cyan/20 border border-futuristic-cyan/40 rounded-lg text-white text-center"
                >
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center"
          >
            <div className="relative w-48 h-48">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-futuristic-purple to-futuristic-cyan opacity-40 blur-xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-4 border-dashed border-futuristic-cyan/40" />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-3/4 h-3/4 rounded-full border-4 border-dashed border-futuristic-purple/30" />
              </motion.div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Bot className="w-24 h-24 text-futuristic-cyan" />
                </motion.div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-8 mb-4 text-futuristic-magenta">AI Assistant</h3>
            <p className="text-white/70 text-center">
              Our AI companion is ready to answer your questions and provide assistance
              with your project needs.
            </p>
            
            <div className="mt-8 w-full">
              <div className="p-4 bg-white/5 rounded-lg mb-4">
                <p className="text-white/90">
                  Hello! I'm your AI assistant. How can I help with your creative technology project today?
                </p>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  className="bg-white/10 border border-white/20 rounded-lg py-3 px-4 pr-12 w-full text-white focus:outline-none focus:ring-2 focus:ring-futuristic-cyan/50"
                  placeholder="Ask the AI something..."
                  disabled
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-futuristic-cyan disabled:opacity-50" disabled>
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-white/50 mt-2 text-center">AI assistant coming soon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

