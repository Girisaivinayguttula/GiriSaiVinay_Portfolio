import { Timeline } from "@/components/ui/timeline";

const TimelineSection = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-6">
            <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Associate Engineer - Ascendion
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
              Jun 2024 – Present
            </p>
          </div>
          <div className="space-y-3 text-neutral-800 dark:text-neutral-200 text-sm">
            <p>• Migrated legacy modules to BSO architecture for United Airlines using Angular 18, enhancing modularity and performance.</p>
            <p>• Collaborated with UX teams and client stakeholders to build responsive interfaces from complex requirements.</p>
            <p>• Implemented efficient REST API communication and improved test reliability by 70% using Karma + Jasmine.</p>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-6">
            <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Junior Engineer - Phoenix Global
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
              Apr 2023 – Jun 2023
            </p>
          </div>
          <div className="space-y-3 text-neutral-800 dark:text-neutral-200 text-sm mb-6">
            <p>• Developed ML-based plagiarism recognizer for text/image with 50% reduction in academic violations.</p>
            <p>• Built an instructor dashboard with color-coded visualizations and Excel export; cut review time by 70%.</p>
            <p>• Improved workflow automation saving ~4 hrs weekly via AI-backed reporting system.</p>
          </div>
          
          <div className="mt-8">
            <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Education Completed
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
              B.Tech in Electronics & Communication (AI/ML Specialization)
            </p>
            <div className="space-y-2 text-neutral-800 dark:text-neutral-200 text-sm">
              <p>• GITAM University, Visakhapatnam</p>
              <p>• GPA: 8.09/10.0</p>
              <p>• Specialized in Machine Learning, AI Networks, Deep Learning</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020-2024",
      content: (
        <div>
          <div className="mb-6">
            <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              University Projects & Learning
            </h4>
          </div>
          <div className="space-y-4">
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
              <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Intrusion Detection System (IoT)
              </h5>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                Python, HTML, WEKA, NSL-KDD
              </p>
              <p className="text-sm text-neutral-800 dark:text-neutral-200">
                Deployed ML-based IDS that reduced security breach risk by 40% and improved detection by 20%.
              </p>
            </div>
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
              <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Movie Recommendation System
              </h5>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                Collaborative Filtering, ML
              </p>
              <p className="text-sm text-neutral-800 dark:text-neutral-200">
                Custom recommendation system resulting in a 50% increase in user satisfaction scores.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience">
      <Timeline data={timelineData} />
    </section>
  );
};

export default TimelineSection;