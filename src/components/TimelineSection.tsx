import { ArcTimeline } from "@/components/magicui/arc-timeline";
import { Building2, Code, GraduationCap } from "lucide-react";

const TimelineSection = () => {
  const timelineData = [
    {
      time: "2024",
      steps: [
        {
          icon: <Building2 className="w-4 h-4" />,
          content: "Associate Engineer at Ascendion - Migrated United Airlines modules to BSO architecture using Angular 18"
        }
      ]
    },
    {
      time: "2023", 
      steps: [
        {
          icon: <Code className="w-4 h-4" />,
          content: "Junior Engineer at Phoenix Global - Built ML plagiarism detector reducing violations by 50%"
        }
      ]
    },
    {
      time: "2020-2024",
      steps: [
        {
          icon: <GraduationCap className="w-4 h-4" />,
          content: "University Projects - IoT Intrusion Detection System and Movie Recommendation System"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
        <p className="text-muted-foreground">Journey through my career milestones</p>
      </div>
      <ArcTimeline data={timelineData} />
    </section>
  );
};
export default TimelineSection;