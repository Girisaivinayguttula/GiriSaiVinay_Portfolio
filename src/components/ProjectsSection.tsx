import { Badge } from "@/components/ui/badge";
import { Shield, Star, TrendingUp, Users } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Intrusion Detection System (IoT)",
      tech: ["Python", "Machine Learning", "WEKA", "NSL-KDD", "IoT Security"],
      desc: "Deployed ML-based intrusion detection system that reduced security breach risk by 40% and improved threat detection accuracy by 20%. Implemented advanced anomaly detection algorithms for IoT networks.",
      icon: Shield,
      metrics: [
        { label: "Risk Reduction", value: "40%" },
        { label: "Detection Improvement", value: "20%" }
      ]
    },
    {
      name: "Movie Recommendation System", 
      tech: ["Collaborative Filtering", "Machine Learning", "Python", "Data Analysis"],
      desc: "Built an intelligent recommendation engine using collaborative filtering algorithms that resulted in a 50% increase in user satisfaction scores and improved content discovery.",
      icon: Star,
      metrics: [
        { label: "User Satisfaction", value: "50%" },
        { label: "Engagement Boost", value: "30%" }
      ]
    }
  ];

  return (
    <section id="projects" className="section-container bg-muted/30">
      <div className="section-header">
        <h2 className="section-title">AI-Driven Projects</h2>
        <p className="section-subtitle">
          Innovative solutions leveraging machine learning and data science
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <div 
              key={project.name}
              className="modern-card group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary rounded-xl">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-foreground leading-relaxed mb-4">
                      {project.desc}
                    </p>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-background/50 rounded-xl">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Tech Stack */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    Technologies Used
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="border-primary/20 text-primary hover:bg-primary/10"
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