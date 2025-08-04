import HeaderNavigation from "@/components/HeaderNavigation";
import NewHeroSection from "@/components/NewHeroSection";
import SkillsCarousel from "@/components/SkillsCarousel";
import TimelineSection from "@/components/TimelineSection";
import EducationTimelineSection from "@/components/EducationTimelineSection";
import ProjectsBentoSection from "@/components/ProjectsBentoSection";
import NewFooter from "@/components/NewFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeaderNavigation />
      <NewHeroSection />
      <SkillsCarousel />
      <TimelineSection />
      <EducationTimelineSection />
      <ProjectsBentoSection />
      <NewFooter />
    </main>
  );
};

export default Index;