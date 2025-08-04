import { memo, lazy, Suspense } from "react";
import HeaderNavigation from "@/components/HeaderNavigation";
import NewHeroSection from "@/components/NewHeroSection";
import SkillsCarousel from "@/components/SkillsCarousel";
import TimelineSection from "@/components/TimelineSection";
import EducationTimelineSection from "@/components/EducationTimelineSection";
import ProjectsBentoSection from "@/components/ProjectsBentoSection";
import NewFooter from "@/components/NewFooter";

// Lazy load components that are below the fold
const LazyProjectsBentoSection = lazy(() => import("@/components/ProjectsBentoSection"));
const LazyNewFooter = lazy(() => import("@/components/NewFooter"));

const Index = memo(() => {
  return (
    <main className="min-h-screen bg-background">
      <HeaderNavigation />
      <NewHeroSection />
      <SkillsCarousel />
      <TimelineSection />
      <EducationTimelineSection />
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <LazyProjectsBentoSection />
      </Suspense>
      <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
        <LazyNewFooter />
      </Suspense>
    </main>
  );
});

Index.displayName = "Index";

export default Index;