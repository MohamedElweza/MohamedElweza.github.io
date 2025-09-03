import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Laptop
} from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Summer Internship",
      company: "Senior Steps",
      location: "Egypt",
      period: "Summer 2024",
      type: "internship",
      icon: <Briefcase className="h-5 w-5" />,
      description: "Gained hands-on experience with DevOps tools and practices. Worked on real-world projects involving CI/CD pipelines, containerization, and cloud infrastructure.",
      technologies: ["Docker", "Jenkins", "AWS", "Linux", "Bash"]
    },
    {
      title: "Digital Egypt Builders",
      company: "Certified Training Program",
      location: "Egypt",
      period: "2024",
      type: "certification",
      icon: <GraduationCap className="h-5 w-5" />,
      description: "Completed comprehensive training on Cloud Computing, CI/CD practices, and DevOps tools. Earned certification in modern infrastructure management.",
      technologies: ["Cloud Computing", "CI/CD", "DevOps", "Infrastructure"]
    },
    {
      title: "Freelance Flutter Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2023 - Present",
      type: "freelance",
      icon: <Laptop className="h-5 w-5" />,
      description: "Developing mobile applications for clients, specializing in cross-platform solutions with Flutter. Focus on solving local problems through technology.",
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "internship":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "certification":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "freelance":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            From learning programming to building real-world solutions and gaining industry experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-accent/50 hidden md:block" />
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />
                  
                  <Card className="glass-card hover-lift border-border/50 group md:ml-20">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex items-start gap-3">
                          <div className="text-primary mt-1 group-hover:text-accent transition-colors">
                            {experience.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                              {experience.title}
                            </h3>
                            <p className="text-muted-foreground font-medium">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2 md:items-end">
                          <Badge 
                            variant="outline" 
                            className={`${getTypeColor(experience.type)} border`}
                          >
                            {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                          </Badge>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {experience.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;