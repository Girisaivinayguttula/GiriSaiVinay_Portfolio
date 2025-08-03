import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2, Zap, Users, Monitor } from "lucide-react";

const CapstoneSection = () => {
  const stackItems = ["Angular 18", "TypeScript", "REST API", "Tailwind CSS", "Vercel"];
  
  const features = [
    {
      icon: Users,
      title: "Multi-User Support",
      description: "Designed for collaborative interactions"
    },
    {
      icon: Monitor,
      title: "Interface Testing",
      description: "Comprehensive UI/UX testing capabilities"
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Built with Angular 18 standalone components"
    }
  ];

  return (
    <section id="capstone" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Featured Project</h2>
        <p className="section-subtitle">
          Showcase of modern Angular development and deployment practices
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="modern-card group">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Project Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary rounded-2xl">
                  <Code2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                    Angular CapStone
                  </h3>
                  <p className="text-muted-foreground font-medium">Deployed on Vercel</p>
                </div>
              </div>
              
              <p className="text-lg text-foreground leading-relaxed">
                A comprehensive web dashboard built with Angular 18's latest standalone components architecture. 
                Features multi-user interactions, interface testing capabilities, and modern responsive design 
                patterns optimized for performance and scalability.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Key Features</h4>
                <div className="grid gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                      <feature.icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">{feature.title}</div>
                        <div className="text-sm text-muted-foreground">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {stackItems.map((tech) => (
                    <Badge 
                      key={tech}
                      className="skill-tag"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="btn-modern group">
                  <a
                    href="https://caba-pi.vercel.app/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="btn-outline-modern group">
                  <a
                    href="https://github.com/Girisaivinayguttula/CapStone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Project Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background/50 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Responsive</div>
                </div>
                <div className="text-center p-6 bg-background/50 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">18</div>
                  <div className="text-muted-foreground">Angular Version</div>
                </div>
                <div className="text-center p-6 bg-background/50 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">A+</div>
                  <div className="text-muted-foreground">Performance</div>
                </div>
                <div className="text-center p-6 bg-background/50 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">PWA</div>
                  <div className="text-muted-foreground">Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapstoneSection;