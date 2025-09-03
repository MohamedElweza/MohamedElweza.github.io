import { ArrowRight, Download, Linkedin, Github, Code, Rocket } from "lucide-react";
import { SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpeg";
import NeuralNetwork from "./NeuralNetwork";
import bgImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { href: "https://www.linkedin.com/in/mohamed-elweza/", icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", hover: "text-blue-500" },
    { href: "https://www.upwork.com/freelancers/~01a9ebd79d9538eae8", icon: <SiUpwork className="w-6 h-6" />, name: "Upwork", hover: "text-green-400" },
    { href: "https://github.com/MohamedElweza", icon: <Github className="w-6 h-6" />, name: "GitHub", hover: "text-purple-400" }
  ];

  return (
   <section
  id="hero"
  className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-white pt-28 sm:pt-32 md:pt-40"
>

   {/* Background Image with Blur + Overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(8px)",
      opacity: 0.4,
    }}
  />

  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        {/* Left side - Intro Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Mohamed Ahmed -
            </span>{" "}
            DevOps Engineer Automating the Future
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all duration-300 touch-target"
            >
              View My Work <ArrowRight className="w-5 h-5 animate-bounce" />
            </button>
            <a
              href="/Mohamed-Ahmed-Farouk-Resume.pdf"
              download
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg border border-white/20 transition-all touch-target"
            >
              Download Resume <Download className="w-5 h-5" />
            </a>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {socialLinks.map((link, idx) => (
              <motion.div key={idx} className="relative group">
                <motion.a
                  href={link.href}
                  target="_blank"
                  className="relative flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--card) / 0.4), hsl(var(--muted) / 0.2))',
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: '0 8px 32px hsl(var(--primary) / 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <div className={`transition-colors duration-300 ${link.hover} group-hover:scale-110`}>
                    {link.icon}
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${
                        link.name === 'LinkedIn' ? 'hsl(204 100% 50% / 0.3)' :
                        link.name === 'GitHub' ? 'hsl(270 100% 60% / 0.3)' :
                        'hsl(120 100% 50% / 0.3)'
                      }, transparent 70%)`,
                    }}
                    animate={{ 
                      opacity: [0, 0.6, 0],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3 + idx * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                </motion.a>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-card/80 backdrop-blur-md px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-border/50">
                  {link.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

       {/* Right side - Profile Image */}
<motion.div
  className="flex flex-col items-center relative"
  initial={{ opacity: 0, x: 80, scale: 0.85 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
>
  <div className="relative w-80 h-80 sm:w-96 sm:h-96">
    {/* Neural Network background */}
    <div className="absolute -inset-12 z-0 opacity-70">
      <NeuralNetwork />
    </div>

    {/* Glow ring */}
    <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary-glow/30 blur-2xl animate-glow-pulse" />

    {/* Profile Image */}
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-xl">
      <img
        src={profileImage}
        alt="Mohamed Elweza - DevOps Engineer & Flutter Developer"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5" />
    </div>

    {/* Floating top icon */}
    <motion.div
      className="absolute -top-6 -right-6 p-4 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-lg border-2 border-white/30 shadow-lg"
      animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <Code className="h-7 w-7 text-blue-300" />
    </motion.div>

    {/* Floating bottom icon */}
    <motion.div
      className="absolute -bottom-6 -left-6 p-4 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-lg border-2 border-white/30 shadow-lg"
      animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
    >
      <Rocket className="h-7 w-7 text-purple-300" />
    </motion.div>
  </div>

  {/* Availability Indicator - Centered under image */}
  <div className="flex items-center gap-2 mt-4 justify-center">
    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
    <span className="text-sm font-medium text-green-400">Available for Work</span>
  </div>
</motion.div>


      </div>
     
    </section>
  );
};

export default HeroSection;
