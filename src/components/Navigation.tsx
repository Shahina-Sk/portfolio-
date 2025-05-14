
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 300;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };
  
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a nav item
  };

  return (
    <motion.nav 
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glassmorphism px-6 py-3 rounded-full w-auto md:w-auto"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "px-3 py-2 rounded-lg transition-all duration-300",
                activeSection === item.id
                  ? "text-futuristic-cyan neon-glow neon-glow-cyan"
                  : "text-white/70 hover:text-white"
              )}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between">
        <button 
          onClick={toggleMobileMenu}
          className="text-white p-1 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="ml-2 text-futuristic-cyan font-medium">
          {activeSection === "hero" ? "Menu" : navItems.find(item => item.id === activeSection)?.label}
        </span>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-3 w-48 glassmorphism rounded-xl overflow-hidden z-50"
          >
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavItemClick(item.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 transition-all duration-300",
                      activeSection === item.id
                        ? "text-futuristic-cyan bg-white/5"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
