import { MapPin, Calendar, Building, Award } from "lucide-react";

const ExperienceSection = () => {
  const jobs = [
    {
      title: "Associate Engineer",
      company: "Ascendion",
      type: "Full-time",
      location: "Hyderabad, India",
      period: "Jun 2024 – Present",
      logo: "A",
      achievements: [
        "Migrated legacy modules to BSO architecture for United Airlines using Angular 18, enhancing modularity and performance",
        "Collaborated with UX teams and client stakeholders to build responsive interfaces from complex requirements",
        "Implemented efficient REST API communication and improved test reliability by 70% using Karma + Jasmine",
        "Led code reviews and mentored junior developers on best practices"
      ]
    },
    {
      title: "Junior Engineer",
      company: "Phoenix Global",
      type: "Full-time",
      location: "Remote",
      period: "Apr 2023 – Jun 2023",
      logo: "P",
      achievements: [
        "Developed ML-based plagiarism recognizer for text/image with 50% reduction in academic violations",
        "Built an instructor dashboard with color-coded visualizations and Excel export; cut review time by 70%",
        "Improved workflow automation saving ~4 hrs weekly via AI-backed reporting system",
        "Collaborated with cross-functional teams to deliver features on tight deadlines"
      ]
    }
  ];

  return (
    <section id="experience" className="section-container bg-muted/30">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Building impactful solutions at forward-thinking companies
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {jobs.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="modern-card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-primary">{job.title}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground mt-1">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{job.period}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {job.achievements.map((achievement, achievementIndex) => (
                  <div 
                    key={achievementIndex}
                    className="flex items-start gap-3 p-4 bg-background/50 rounded-lg"
                  >
                    <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;