import HeaderNavigation from "@/components/HeaderNavigation";
import NewHeroSection from "@/components/NewHeroSection";
import SkillsCarousel from "@/components/SkillsCarousel";
import TimelineSection from "@/components/TimelineSection";
import NewFooter from "@/components/NewFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeaderNavigation />
      <NewHeroSection />
      <SkillsCarousel />
      <TimelineSection />
      <NewFooter />
    </main>
  );
};

export default Index;