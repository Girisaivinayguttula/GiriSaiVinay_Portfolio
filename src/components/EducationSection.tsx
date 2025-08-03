import { GraduationCap, MapPin, Calendar, Award, Book } from "lucide-react";

const EducationSection = () => {
  const courses = [
    "Machine Learning",
    "Artificial Neural Networks", 
    "Deep Learning",
    "Modern AI Networks"
  ];

  return (
    <section id="education" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic foundation in engineering and artificial intelligence
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="modern-card">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="flex items-center mb-6 lg:mb-0">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-6">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
                  B.Tech in Electronics & Communication
                </h3>
                <p className="text-lg font-medium text-muted-foreground">
                  Specialization in AI/ML
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-2">
                <Award className="w-4 h-4 mr-2" />
                GPA: 8.09 / 10.0
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">GITAM University, Visakhapatnam</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Aug 2020 – Mar 2024</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">4</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8">
            <div className="flex items-center gap-3 mb-6">
              <Book className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-semibold">Key Coursework</h4>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {courses.map((course, index) => (
                <div
                  key={course}
                  className="p-4 bg-muted/50 rounded-xl text-center hover:bg-primary/10 hover:text-primary transition-all duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="font-medium">{course}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;