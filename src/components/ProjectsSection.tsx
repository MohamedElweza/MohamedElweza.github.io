import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import flutterProject from "@/assets/flutter-project.jpg";
import devopsProject from "@/assets/devops-project.jpg";
import cloudProject from "@/assets/cloud-project.jpg";
import awsProject from "@/assets/aws.gif";
import terraformProject from "@/assets/terraform.gif";
import ansibleProject from "@/assets/ansible.gif";
import weatherProject from "@/assets/weatherapp.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Deploying a Multi-Tier Java Web Application on AWS Cloud! ",
      description:
        "This project demonstrates how to deploy a multi-tier Java web application on AWS Cloud using EC2 instances and shell scripts. It is part of a series where we first deployed the application on-premises manually and then automated it with scripts. Now, we are taking the same architecture to AWS!",
      image: awsProject,
      technologies: [
        "Nginx",
        "MySQL",
        "Tomcat",
        "Memcached",
        "RabbitMQ",
        "Amazon EC2",
        "Amazon VPC",
      ],
      githubUrl:
        "https://github.com/MohamedElweza/Deploying-a-Multi-Tier-Java-Web-Application-on-AWS-Cloud",
      liveUrl: null,
      category: "Cloud",
      featured: true,
    },
    {
      title: "Kubernetes Microservices Deployment",
      description:
        "Deploying a multi-service weather application using Kubernetes. It covers Dockerization, creation of Kubernetes manifests, Secrets, ConfigMaps, StatefulSets, Services, Ingress with TLS, and initialization jobs for MySQL.",
      image: weatherProject,
      technologies: ["Kubernetes", "Docker", "Helm", "StatefulSets", "Secrets"],
      githubUrl:
        "https://github.com/MohamedElweza/Kubernetes-Deployment-for-Weather-Application",
      liveUrl: null,
      category: "Kubernetes",
      featured: true,
    },
    {
      title: "Dockerize a Java Web Application",
      description:
        "This project focuses on containerizing a multi-tier Java web application using Docker and Docker Compose. Each service runs in its own container, ensuring portability, scalability, and efficient management.",
      image: devopsProject,
      technologies: ["Docker", "Docker Compose", "Containerization"],
      githubUrl: "https://github.com/MohamedElweza/Dockerize-Java-App",
      liveUrl: null,
      category: "Docker",
    },
    {
      title: "HA Web App on AWS using Terraform",
      description:
        "This project demonstrates deploying a highly available web application on AWS using Terraform, with full infrastructure automation.",
      image: terraformProject,
      technologies: [
        "Terraform",
        "AWS",
        "Public and private subnets",
        "An Application Load Balancer (ALB)",
        "Auto Scaling Group (ASG)",
        "VPC",
        "IAM",
        "NAT Gateway",
        "Bastion host",
        " S3 for backups",
      ],
      githubUrl: "https://github.com/mohammedelweza/terraform-infrastructure",
      liveUrl: null,
      category: "Infrastructure as Code",
    },
    {
      title:
        "CI/CD Pipeline with Jenkins & ArgoCD on Kubernetes",
      description:
        "This project automates the deployment of a multi-tier Java web application on Kubernetes using Jenkins & ArgoCD. The pipeline ensures continuous integration and continuous deployment (CI/CD) with automated builds, testing, and Kubernetes synchronization..",
      image: devopsProject,
      technologies: ["Jenkins", "Docker", "ArgoCD", "Kubernetes"],
      githubUrl:
        "https://github.com/MohamedElweza/CI-CD-with-Jenkins-ArgoCD-for-Kubernetes-Deployment",
      liveUrl: null,
      category: "CI/CD Automation",
      featured: true,
    },
    {
      title: "Automating Multi-Tier Web App Deployment with Ansible",
      description:
        "In this project, participants will automate the build process of a multi-tier web application on their local infrastructure using Ansible playbook. Leveraging Ansible's powerful automation capabilities, participants will create virtual machines for each service using Vagrant and automate the configuration process using Ansible playbook.",
      image: ansibleProject,
      technologies: ["Ansible", "Playbooks", "Automation"],
      githubUrl: "https://github.com/MohamedElweza/Automating-Multi-Tier-Java-Web-Application-Deployment-with-Ansible",
      liveUrl: null,
      category: "Ansible",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in mobile development, DevOps automation, and cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover-lift border-border/50 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain bg-background transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {project.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {/* Cleaner outline / glass button */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="
                      flex-1
                      border border-primary/30
                      bg-card/30 backdrop-blur
                      text-foreground
                      hover:border-primary/60
                      hover:bg-primary/10
                      hover:text-primary
                      focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-0
                      transition-colors
                    "
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>

                  {/* Keep a strong, consistent primary for Live (when exists) */}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="
                        flex-1
                        bg-gradient-to-r from-primary to-accent
                        text-primary-foreground
                        shadow-lg
                        hover:opacity-90
                        focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-0
                      "
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="glass-card hover-lift border-primary/30 text-foreground px-8 py-4"
            asChild
          >
            <a
              href="https://github.com/MohamedElweza?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
