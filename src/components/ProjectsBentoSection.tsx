import { FeatureCarousel } from "@/components/ui/animated-feature-carousel";

const ProjectsBentoSection = () => {
  const projectImages = {
    alt: "Project screenshots",
    step1img1: "/lovable-uploads/cabaShop.png",
    step1img2: "/lovable-uploads/cabaHome.png",
    step2img1: "",
    step2img2: "",
    step3img: "",
    step4img: "",
  };

  return (
    <section id="projects" className="py-20 ">
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