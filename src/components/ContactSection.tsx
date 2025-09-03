import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { SiUpwork } from "react-icons/si";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_m038rad", // Service ID
        "template_1qeeaff", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        "EVYUAuoWudSiTbZJm" // Public Key
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!"
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "mohamed.farouk1702@gmail.com",
      href: "mailto:mohamed.farouk1702@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+20 1289757885",
      href: "tel:+201289757885"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/MohamedElweza"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamed-elweza/"
    },
    {
      icon: <SiUpwork className="h-5 w-5" />,
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~01a9ebd79d9538eae8"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work
            together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="resize-none"
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full primary-glow bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info + Socials */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card border-border/30 hover:border-primary/50 hover:text-primary transition-all group"
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">
                    Available for opportunities
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Open to freelance projects, full-time positions, and
                  collaboration opportunities in DevOps, Flutter development,
                  and cloud infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
