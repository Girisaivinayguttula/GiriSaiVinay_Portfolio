import { Badge } from "@/components/ui/badge";
import { Shield, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Intrusion Detection System (IoT)",
      tech: ["Python", "HTML", "WEKA", "NSL-KDD"],
      desc: "Deployed ML-based IDS that reduced security breach risk by 40% and improved detection by 20%.",
      icon: Shield
    },
    {
      name: "Movie Recommendation System", 
      tech: ["Collaborative Filtering", "ML"],
      desc: "Custom recommendation system resulting in a 50% increase in user satisfaction scores.",
      icon: Star
    }
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light tracking-tight mb-4">AI-Driven Projects</h2>
        <div className="w-16 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <div 
              key={project.name}
              className="card-swiss group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-medium text-primary group-hover:text-primary/80 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;