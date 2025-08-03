import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";

const CapstoneSection = () => {
  const stackItems = ["Angular 18", "REST API", "Tailwind CSS"];

  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light tracking-tight mb-4">CapStone Project</h2>
        <div className="w-16 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="card-swiss hover:scale-105 transition-all duration-300 group">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-primary/10 rounded-xl">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-2xl font-medium text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  Angular CapStone · Hosted on Vercel
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Modern web dashboard for multi-user interactions and interface testing. 
                  Built with Angular 18 standalone components and deployed on Vercel for 
                  optimal performance and scalability.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {stackItems.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="outline"
                    className="border-primary/20 text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  className="btn-professional group"
                >
                  <a
                    href="https://github.com/Girisaivinayguttula/CapStone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    View Code
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="btn-outline-professional group"
                >
                  <a
                    href="https://caba-pi.vercel.app/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapstoneSection;