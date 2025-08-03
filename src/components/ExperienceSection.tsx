import { Calendar } from "lucide-react";

const ExperienceSection = () => {
  const jobs = [
    {
      title: "Associate Engineer",
      company: "Ascendion",
      period: "Jun 2024 – Present",
      bullets: [
        "Migrated legacy modules to BSO architecture for United Airlines using Angular 18, enhancing modularity and performance.",
        "Collaborated with UX teams and client stakeholders to build responsive interfaces from complex requirements.",
        "Implemented efficient REST API communication and improved test reliability by 70% using Karma + Jasmine."
      ]
    },
    {
      title: "Junior Engineer",
      company: "Phoenix Global",
      period: "Apr 2023 – Jun 2023",
      bullets: [
        "Developed ML-based plagiarism recognizer for text/image with 50% reduction in academic violations.",
        "Built an instructor dashboard with color-coded visualizations and Excel export; cut review time by 70%.",
        "Improved workflow automation saving ~4 hrs weekly via AI-backed reporting system."
      ]
    }
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light tracking-tight mb-4">Work Experience</h2>
        <div className="w-16 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="space-y-12">
        {jobs.map((job, index) => (
          <div key={index} className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:text-right space-y-2">
              <h3 className="text-xl font-medium text-primary">{job.title}</h3>
              <p className="text-lg text-foreground font-medium">{job.company}</p>
              <div className="flex items-center justify-end gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{job.period}</span>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <ul className="space-y-3">
                {job.bullets.map((bullet, bulletIndex) => (
                  <li 
                    key={bulletIndex}
                    className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;