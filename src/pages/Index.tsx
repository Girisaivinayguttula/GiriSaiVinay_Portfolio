import { memo, lazy, Suspense, useState, useEffect } from "react";
import HeaderNavigation from "@/components/HeaderNavigation";
import NewHeroSection from "@/components/NewHeroSection";
import SkillsCarousel from "@/components/SkillsCarousel";
import TimelineSection from "@/components/TimelineSection";
import EducationTimelineSection from "@/components/EducationTimelineSection";
import LoadingScreen from "@/components/LoadingScreen";
import AnimatedSection from "@/components/AnimatedSection";

// Lazy load components that are below the fold
const LazyProjectsBentoSection = lazy(() => import("@/components/ProjectsBentoSection"));
const LazyNewFooter = lazy(() => import("@/components/NewFooter"));

const Index = memo(() => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <main className="min-h-screen relative bg-transparent">
      <HeaderNavigation />
      <NewHeroSection />

      <AnimatedSection animation="fade-up" delay={200}>
        <SkillsCarousel />
      </AnimatedSection>

      <AnimatedSection animation="slide-up" delay={300}>
        <TimelineSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <EducationTimelineSection />
      </AnimatedSection>

      <AnimatedSection animation="scale-in" delay={400}>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          <LazyProjectsBentoSection />
        </Suspense>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={100}>
        <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
          <LazyNewFooter />
        </Suspense>
      </AnimatedSection>
    </main>
  );
});

Index.displayName = "Index";

export default Index;