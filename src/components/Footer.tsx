import { Linkedin, Github } from "lucide-react";
import { SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
      { href: "https://www.linkedin.com/in/mohamed-elweza/", icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", hover: "text-blue-500" },
    { href: "https://www.upwork.com/freelancers/~01a9ebd79d9538eae8", icon: <SiUpwork className="w-6 h-6" />, name: "Upwork", hover: "text-green-400" },
    { href: "https://github.com/MohamedElweza", icon: <Github className="w-6 h-6" />, name: "GitHub", hover: "text-purple-400" }
  ];

  return (
    <motion.footer 
      className="relative py-16 bg-gradient-to-t from-background/95 to-background/90 backdrop-blur-sm border-t border-border/20 text-foreground overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center">
          {/* Section Title */}
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Connect
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </motion.p>

           {/* Enhanced Social Links - Matching Hero Style */}
          <motion.div 
            className="flex gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {socialLinks.map((link, idx) => (
              <motion.div key={idx} className="relative group">
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--card) / 0.6), hsl(var(--muted) / 0.3))',
                    boxShadow: '0 4px 20px hsl(var(--primary) / 0.2)',
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    boxShadow: `0 12px 40px ${
                      link.name === 'LinkedIn' ? 'hsl(204 100% 50% / 0.5)' :
                      link.name === 'GitHub' ? 'hsl(270 100% 60% / 0.5)' :
                      'hsl(120 100% 50% / 0.5)'
                    }`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                >
                  <div className={`transition-all duration-300 ${link.hover} group-hover:scale-125`}>
                    {link.icon}
                  </div>
                  
                  {/* Animated Ring Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 opacity-0 pointer-events-none"
                    style={{
                      borderColor: link.name === 'LinkedIn' ? 'hsl(204 100% 50%)' :
                                   link.name === 'GitHub' ? 'hsl(270 100% 60%)' :
                                   'hsl(120 100% 50%)',
                    }}
                    animate={{ 
                      opacity: [0, 0.8, 0],
                      scale: [0.8, 1.3, 0.8],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2.5 + idx * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Pulsing Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${
                        link.name === 'LinkedIn' ? 'hsl(204 100% 50% / 0.4)' :
                        link.name === 'GitHub' ? 'hsl(270 100% 60% / 0.4)' :
                        'hsl(120 100% 50% / 0.4)'
                      }, transparent 70%)`,
                    }}
                    animate={{ 
                      opacity: [0, 0.7, 0],
                      scale: [0.6, 1.4, 0.6]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3 + idx * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                </motion.a>
                
                {/* Enhanced Tooltip */}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs bg-gradient-to-r from-card/90 to-muted/90 backdrop-blur-md px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-border/50 shadow-lg">
                  {link.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Separator */}
          <motion.div 
            className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />

          {/* Copyright */}
          <motion.p 
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            © 2025 Mohamed Elweza. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;