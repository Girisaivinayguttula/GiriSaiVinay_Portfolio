import { Timeline } from "@/components/ui/timeline";
import { GraduationCap, Award, BookOpen, Brain } from "lucide-react";

const EducationTimelineSection = () => {
  const educationData = [
    {
      title: "2024",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                B.Tech in Electronics & Communication Engineering
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                GITAM University, Visakhapatnam • Graduated March 2024
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                CGPA: 8.09/10.0
              </span>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-500" />
                AI/ML Specialization
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Focused curriculum on artificial intelligence and machine learning technologies.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-green-500" />
                Key Coursework
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Machine Learning",
                  "Artificial Neural Networks", 
                  "Deep Learning",
                  "Modern AI Networks",
                  "Data Structures & Algorithms",
                  "Digital Signal Processing"
                ].map((course, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Academic Achievement:</strong> Maintained consistent academic performance throughout the program 
                with strong focus on practical applications of AI/ML concepts in real-world projects.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Started B.Tech Journey
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                GITAM University, Visakhapatnam • August 2020
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Embarked on my engineering journey with a strong foundation in mathematics, physics, and computer science. 
              Developed early interest in programming and technology during foundational courses.
            </p>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Early Achievements</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Excelled in programming fundamentals (C, C++, Java)</li>
                <li>• Active participation in coding competitions</li>
                <li>• Member of technical societies and clubs</li>
                <li>• Strong performance in mathematics and analytical subjects</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic foundation in Electronics & Communication Engineering with specialization in AI/ML
          </p>
        </div>
      </div>
      <Timeline data={educationData} />
    </section>
  );
};

export default EducationTimelineSection;