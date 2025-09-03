import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Cloud,
  Container,
  Settings,
  Database,
  Code,
  GitBranch,
  Server,
  Zap,
  Globe,
  Monitor,
  Cpu,
  Shield,
  Network,
  Brain,
  Layers,
  Terminal
} from "lucide-react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("devops");
  
  const devopsSkills = [
    { name: "Docker", icon: <Container className="h-5 w-5" />, color: "from-blue-500 to-blue-600" },
    { name: "Kubernetes", icon: <Settings className="h-5 w-5" />, color: "from-purple-500 to-purple-600" },
     { name: "Helm", icon: <Container className="h-5 w-5" />, color: "from-blue-500 to-blue-600" },
    { name: "Ansible", icon: <Server className="h-5 w-5" />, color: "from-red-500 to-red-600" },
    { name: "Terraform", icon: <Cloud className="h-5 w-5" />, color: "from-violet-500 to-violet-600" },
    { name: "Jenkins", icon: <GitBranch className="h-5 w-5" />, color: "from-orange-500 to-orange-600" },
    { name: "Linux (Admin 1 & 2)", icon: <Terminal className="h-5 w-5" />, color: "from-green-600 to-green-700" },
   
    { name: "AWS (EC2, S3,..)", icon: <Database className="h-5 w-5" />, color: "from-yellow-600 to-orange-600" },
    
    
      { name: "CI/CD", icon: <Layers className="h-5 w-5" />, color: "from-indigo-500 to-blue-600" },
     
        { name: "ArgoCD", icon: <GitBranch className="h-5 w-5" />, color: "from-orange-500 to-orange-600" },

    { name: "Prometheus", icon: <Monitor className="h-5 w-5" />, color: "from-emerald-500 to-teal-600" },
     { name: "Grafana", icon: <Monitor className="h-5 w-5" />, color: "from-emerald-500 to-teal-600" },

        { name: "Git", icon: <GitBranch className="h-5 w-5" />, color: "from-orange-500 to-red-500" },
           { name: "GitHub", icon: <GitBranch className="h-5 w-5" />, color: "from-orange-500 to-red-500" },
             { name: "GitHub Actions", icon: <Code className="h-5 w-5" />, color: "from-gray-700 to-gray-800" },
    { name: "Nginx", icon: <Globe className="h-5 w-5" />, color: "from-green-500 to-lime-600" },
   

  ];

  const mobileSkills = [
    { name: "Flutter", icon: <Smartphone className="h-5 w-5" />, color: "from-blue-400 to-cyan-400" },
    { name: "Dart", icon: <Code className="h-5 w-5" />, color: "from-blue-600 to-blue-700" },
    { name: "Firebase", icon: <Database className="h-5 w-5" />, color: "from-yellow-500 to-orange-500" },
    { name: "REST APIs", icon: <Server className="h-5 w-5" />, color: "from-green-500 to-green-600" },
    { name: "Provider", icon: <Settings className="h-5 w-5" />, color: "from-purple-500 to-purple-600" },
    { name: "Bloc", icon: <GitBranch className="h-5 w-5" />, color: "from-indigo-500 to-indigo-600" },
    { name: "SQLite", icon: <Database className="h-5 w-5" />, color: "from-gray-600 to-gray-700" },
    { name: "UI/UX Design", icon: <Monitor className="h-5 w-5" />, color: "from-pink-500 to-rose-600" },
    { name: "App Store", icon: <Smartphone className="h-5 w-5" />, color: "from-cyan-500 to-blue-500" },
    { name: "Google Play", icon: <Smartphone className="h-5 w-5" />, color: "from-blue-600 to-yellow-500" }
  ];

  const programmingSkills = [
    { name: "Bash", icon: <Code className="h-5 w-5" />, color: "from-blue-600 to-indigo-600" },
    { name: "Python", icon: <Code className="h-5 w-5" />, color: "from-blue-600 to-yellow-500" },
    { name: "Object-Oriented Programming(OOP)", icon: <Server className="h-5 w-5" />, color: "from-green-500 to-emerald-600" },
  ];

  const networkingSkills = [
    { name: "Cisco Certified Network Associate (CCNA)", icon: <Shield className="h-5 w-5" />, color: "from-red-500 to-orange-500" },
    { name: "TCP/IP", icon: <Network className="h-5 w-5" />, color: "from-blue-500 to-cyan-500" },
    { name: "DNS", icon: <Globe className="h-5 w-5" />, color: "from-green-500 to-emerald-500" },
    { name: "Load Balancing", icon: <Layers className="h-5 w-5" />, color: "from-purple-500 to-violet-500" },
    { name: "VPN", icon: <Shield className="h-5 w-5" />, color: "from-indigo-500 to-blue-600" },
    { name: "Firewall", icon: <Shield className="h-5 w-5" />, color: "from-red-500 to-orange-500" },
    { name: "HTTPS/SSL", icon: <Shield className="h-5 w-5" />, color: "from-emerald-500 to-green-600" }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const renderSkills = (skills: { name: string; icon: JSX.Element; color: string }[]) => (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12" 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, staggerChildren: 0.1 }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={`${skill.name}-${index}`}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0, 
            scale: 1 
          } : {}}
          transition={{ 
            duration: 0.4, 
            delay: index * 0.08,
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.05,
            y: -5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          className="group relative"
        >
          <div className="relative bg-background/40 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl">
            {/* Animated gradient background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <div className="flex items-center gap-3 sm:gap-4 relative z-10">
              <motion.div 
                className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {skill.icon}
              </motion.div>
              <span className="text-sm sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>
            </div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
              style={{ width: '50%' }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section id="skills" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across DevOps practices, cloud infrastructure, programming, and networking.
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Tab Bar with 4 Categories */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative bg-background/20 backdrop-blur-md p-1 sm:p-2 rounded-2xl border border-white/10 shadow-xl overflow-x-auto">
              <div className="flex gap-1 sm:gap-2 min-w-max">
                {[
                  { id: "devops", label: "DevOps", icon: Zap },
                  { id: "programming", label: "Programming", icon: Code },
                  { id: "mobile", label: "Mobile", icon: Smartphone },
                  { id: "networking", label: "Networking", icon: Network }
                ].map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl shadow-lg"
                        layoutId="activeSkillTab"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <motion.div
                      className="relative z-10 flex items-center gap-2 sm:gap-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <tab.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </motion.div>
                      <span className="hidden xs:inline">{tab.label}</span>
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {activeTab === "devops" && renderSkills(devopsSkills)}
              {activeTab === "programming" && renderSkills(programmingSkills)}
              {activeTab === "mobile" && renderSkills(mobileSkills)}
              {activeTab === "networking" && renderSkills(networkingSkills)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
