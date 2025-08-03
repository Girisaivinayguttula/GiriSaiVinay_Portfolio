import { GraduationCap, MapPin } from "lucide-react";

const EducationSection = () => {
  const courses = [
    "Machine Learning",
    "Artificial Neural Networks", 
    "Deep Learning",
    "Modern AI Networks"
  ];

  return (
    <section className="section-container bg-muted/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-light tracking-tight">Education</h2>
          </div>
          <div className="w-16 h-1 bg-primary"></div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              B.Tech in Electronics & Communication
            </h3>
            <p className="text-lg text-muted-foreground font-medium">
              AI/ML Specialization
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>GITAM University, Visakhapatnam</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
              <span className="text-muted-foreground">Aug 2020 – Mar 2024</span>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">GPA:</span>
                <span className="font-semibold text-primary">8.09 / 10.0</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card-swiss">
          <h4 className="text-lg font-medium mb-4 text-primary">Key Coursework</h4>
          <div className="grid grid-cols-2 gap-3">
            {courses.map((course) => (
              <div
                key={course}
                className="px-3 py-2 bg-secondary/50 rounded-md text-sm font-medium text-secondary-foreground text-center"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;