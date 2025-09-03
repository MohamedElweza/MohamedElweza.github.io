import { Card, CardContent } from "@/components/ui/card";
import { Download, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import coverImage from "@/assets/aboutt.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "DevOps",
    "Cloud",
    "Docker",
    "Kubernetes",
    "AWS",
    "Ansible",
    "Jenkins",
    "Terraform",
    "CI/CD",
    "Flutter",
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-20 lg:py-24 relative overflow-hidden"
      ref={ref}
    >
      {/* Background animated blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-accent/20 rounded-full blur-3xl animate-bounce-slow" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Mohamed Ahmed</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <p className="text-xl text-muted-foreground">
              Passionate about turning innovative ideas into scalable solutions
            </p>
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
          </div>
        </motion.div>

        {/* Main content: Image + Text side by side */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Profile Image */}
          <motion.div
            className="relative w-full lg:w-1/2 flex-shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-full h-80 sm:h-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-xl">
              <img
                src={coverImage}
                alt="Mohamed Elweza - DevOps Engineer & Flutter Developer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-8 w-full lg:w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Journey */}
            <Card className="glass-card border-border/50 overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-gradient">
                  My Journey
                </h3>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    My journey began with a strong foundation in{" "}
                    <span className="font-semibold text-gradient">programming</span>{" "}
                    and problem-solving, exploring languages like Python, Dart, and
                    Java to bring ideas to life. Over time, my passion evolved into
                    building{" "}
                    <span className="font-semibold text-gradient">
                      scalable cloud systems
                    </span>{" "}
                    and mastering modern{" "}
                    <span className="font-semibold text-gradient">
                      DevOps practices
                    </span>
                    .
                  </p>
                  <p>
                    Through the{" "}
                    <strong className="text-primary">DevOps Workshop</strong> and
                    real-world projects, I gained hands-on expertise in{" "}
                    <strong className="text-primary">
                      Docker, Kubernetes, Terraform, Jenkins, and AWS
                    </strong>
                    —designing infrastructures that achieve{" "}
                    <span className="font-semibold">99.95% uptime</span> and reduce
                    deployment times significantly.
                  </p>
                  <p>
                    Beyond the technical side, I’ve always loved{" "}
                    <span className="font-semibold text-gradient">
                      sharing knowledge
                    </span>
                    . I volunteered as a programming instructor for kids, boosting
                    their creativity, and contributed to{" "}
                    <strong className="text-primary">IEEE Mansoura</strong> as a
                    leader and organizer of tech events, empowering others to
                    explore{" "}
                    <span className="font-semibold text-gradient">
                      Cloud & DevOps
                    </span>
                    .
                  </p>
                  <p>
                    Today, I combine my{" "}
                    <span className="font-semibold text-gradient">
                      Cloud DevOps engineering expertise
                    </span>{" "}
                    with my{" "}
                    <span className="font-semibold text-gradient">
                      programming background
                    </span>{" "}
                    to deliver solutions that are resilient, automated, and
                    innovative—always aiming to make technology more impactful for
                    people.
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Download Button */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                  <a
                    href="/Mohamed-Ahmed-Farouk-Resume.pdf"
                    download
                    className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all duration-300 touch-target"
                  >
                    Download Resume <Download className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
