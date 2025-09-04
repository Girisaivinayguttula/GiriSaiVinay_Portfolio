import { ArcTimeline } from "@/components/magicui/arc-timeline";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const EducationTimelineSection = () => {
  const educationData = [
    {
      time: "2024",
      steps: [
        {
          icon: <GraduationCap className="w-4 h-4" />,
          content: "B.Tech ECE Graduate - GITAM University, CGPA: 8.09/10.0, AI/ML Specialization"
        }
      ]
    },
    {
      time: "2020-2024",
      steps: [
        {
          icon: <BookOpen className="w-4 h-4" />,
          content: "Academic Journey - Machine Learning, Neural Networks, Deep Learning coursework"
        }
      ]
    },
    {
      time: "2020",
      steps: [
        {
          icon: <Award className="w-4 h-4" />,
          content: "Started B.Tech - Strong foundation in programming and mathematics"
        }
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
        <p className="text-muted-foreground">My academic foundation in Electronics & Communication Engineering</p>
      </div>
      <ArcTimeline data={educationData} />
    </section>
  );
};

export default EducationTimelineSection;