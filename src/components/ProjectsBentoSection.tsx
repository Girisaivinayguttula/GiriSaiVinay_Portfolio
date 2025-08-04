import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Code, Github, ExternalLink, Shield, Star, Globe, Database } from "lucide-react";

const ProjectsBentoSection = () => {
  const projects: BentoItem[] = [
    {
      title: "Angular CapStone",
      meta: "Live on Vercel",
      description: "Modern web dashboard built with Angular 18 for multi-user interactions and interface testing. Features responsive design and REST API integration.",
      icon: <Code className="w-4 h-4 text-blue-500" />,
      status: "Live",
      tags: ["Angular18", "TypeScript", "TailwindCSS"],
      colSpan: 2,
      hasPersistentHover: true,
      cta: "View Live →"
    },
    {
      title: "Intrusion Detection System",
      meta: "IoT Security",
      description: "ML-based IDS that reduced security breach risk by 40% and improved detection accuracy by 20% using NSL-KDD dataset.",
      icon: <Shield className="w-4 h-4 text-red-500" />,
      status: "Completed",
      tags: ["Python", "WEKA", "ML"],
      cta: "Learn More →"
    },
    {
      title: "Movie Recommendation System", 
      meta: "AI/ML Project",
      description: "Custom recommendation engine using collaborative filtering that resulted in 50% increase in user satisfaction scores.",
      icon: <Star className="w-4 h-4 text-yellow-500" />,
      status: "Deployed",
      tags: ["ML", "Collaborative-Filtering", "Python"],
      colSpan: 2,
      cta: "View Details →"
    },
    {
      title: "GitHub Profile",
      meta: "Open Source",
      description: "Explore my open source contributions and projects on GitHub. Active contributor to various repositories.",
      icon: <Github className="w-4 h-4 text-gray-800 dark:text-gray-200" />,
      status: "Active",
      tags: ["OpenSource", "Contributions"],
      cta: "Visit GitHub →"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning web development, AI/ML, and security systems.
          </p>
        </div>
        
        <BentoGrid items={projects} />
        
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://github.com/Girisaivinayguttula/CapStone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Source Code
            </a>
            <a 
              href="https://caba-pi.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBentoSection;