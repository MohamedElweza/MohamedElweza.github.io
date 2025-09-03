import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2025",
      verified: true,
      icon: "☁️",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      link: "https://www.credly.com/badges/c1e326db-dabf-4582-ad8a-5055e202005e/public_url"
    },
    {
      name: "Certified Kubernetes Preparation (CKA)",
      issuer: "KodeKloud",
      date: "2025",
      verified: true,
      icon: "⛵",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      link: "https://learn.kodekloud.com/certificate/2baaa25b-7b60-411f-94a9-3c1e06f7787a"
    },
    {
      name: "Amazon Cloud Summer Training Program",
      issuer: "NTI",
      date: "2024",
      verified: false,
      icon: "🏗️",
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
      name: "Red Hat System Administrator ||",
      issuer: "MaharaTech - ITIMooca",
      date: "2024",
      verified: false,
      icon: "💻",
      color: "bg-blue-600/10 text-blue-600 border-blue-600/20"
    },
    {
      name: "GCP Cloud Digital Leader Certification",
      issuer: "KodeKloud",
      date: "2025",
      verified: false,
      icon: "🔧",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      name: "Cisco CCNA Summer Training Program",
      issuer: "NTI",
      date: "2023",
      verified: false,
      icon: "📃",
      color: "bg-teal-500/10 text-teal-500 border-teal-500/20"
    }
  ];

  return (
    <section id="certificates" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
           <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Validated expertise in DevOps tools, cloud platforms, and development frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="glass-card hover-lift border-border/50 group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Badge 
                    variant="outline" 
                    className={`${cert.color} border text-xs`}
                  >
                    {cert.date}
                  </Badge>
                  
                  {cert.verified && (
                    <Badge 
                      variant="outline" 
                      className="bg-green-500/10 text-green-500 border-green-500/20 text-xs"
                    >
                      <Award className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                
                <div className="flex justify-center">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Certificate
                    </a>
                  ) : (
                    <div className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm">
                      <ExternalLink className="h-4 w-4" />
                      No Link
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
