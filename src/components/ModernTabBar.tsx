import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  Award, 
  Mail,
  LucideIcon
} from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface ModernTabBarProps {
  onTabChange?: (tabId: string) => void;
  className?: string;
}

const tabs: Tab[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const ModernTabBar: React.FC<ModernTabBarProps> = ({ 
  onTabChange, 
  className = '' 
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Dynamic section detection based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = ['hero', 'about', 'skills', 'projects', 'certificates', 'contact'];
      
      let currentSection = 'home';
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId === 'hero' ? 'home' : sectionId;
          }
        }
      });
      
      if (currentSection !== activeTab) {
        setActiveTab(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-1 p-2 bg-card/20 backdrop-blur-md border border-border/50 rounded-2xl shadow-lg"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--card) / 0.3), hsl(var(--muted) / 0.2))',
          boxShadow: '0 8px 32px hsl(var(--background) / 0.3), inset 0 1px 0 hsl(var(--border) / 0.2)',
        }}
      >
        {/* Mobile: Horizontal scroll */}
        <div className="flex overflow-x-auto scrollbar-hide gap-1 max-w-[90vw] md:max-w-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const IconComponent = tab.icon;
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => {
                  handleTabClick(tab.id);
                  scrollToSection(tab.id === 'home' ? 'hero' : tab.id);
                }}
                className="relative flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap min-w-fit"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active background */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'var(--gradient-primary)',
                        boxShadow: '0 4px 20px hsl(var(--primary) / 0.4)',
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { 
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0.8,
                        transition: { duration: 0.2 }
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    color: isActive ? 'hsl(var(--primary-foreground))' : 'hsl(var(--muted-foreground))',
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent size={18} />
                </motion.div>

                {/* Label */}
                <motion.span
                  className="relative z-10 hidden sm:inline-block"
                  animate={{
                    color: isActive ? 'hsl(var(--primary-foreground))' : 'hsl(var(--muted-foreground))',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {tab.label}
                </motion.span>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0"
                  style={{
                    background: 'hsl(var(--primary) / 0.1)',
                  }}
                  whileHover={{
                    opacity: isActive ? 0 : 1,
                    transition: { duration: 0.2 }
                  }}
                />
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Glassmorphism background blur effect */}
      <div 
        className="absolute inset-0 rounded-2xl -z-10"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--background) / 0.1), hsl(var(--card) / 0.1))',
          backdropFilter: 'blur(20px)',
        }}
      />
    </div>
  );
};

export default ModernTabBar;