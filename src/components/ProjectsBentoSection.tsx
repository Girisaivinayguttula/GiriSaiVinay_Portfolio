import { FeatureCarousel } from "@/components/ui/animated-feature-carousel";

const ProjectsBentoSection = () => {
  const projectImages = {
    alt: "Project screenshots",
    step1img1: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop",
    step1img2: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1740&auto=format&fit=crop",
    step2img1: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1740&auto=format&fit=crop",
    step2img2: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1674&auto=format&fit=crop",
    step3img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1740&auto=format&fit=crop",
    step4img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1742&auto=format&fit=crop",
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning web development, AI/ML, and security systems.
          </p>
        </div>
        
        <FeatureCarousel image={projectImages} />
      </div>
    </section>
  );
};

export default ProjectsBentoSection;