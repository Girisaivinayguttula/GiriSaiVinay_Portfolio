import { HeroSection } from "@/components/ui/hero-section-6";
import AnimatedSection from "@/components/AnimatedSection";

const NewHeroSection = () => {
  return (
    <AnimatedSection animation="fade-in" duration="0.8s">
      <section id="hero" className="pt-8">
        <HeroSection />
      </section>
    </AnimatedSection>
  );
};

export default NewHeroSection;