import { Layers, Server, Wrench, Brain, Database, Code2 } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Frontend",
      icon: Layers,
      color: "from-blue-500 to-purple-600",
      items: ["Angular 18", "TypeScript", "Tailwind CSS", "Responsive Design", "HTML5", "CSS3"]
    },
    {
      name: "Backend",
      icon: Server,
      color: "from-green-500 to-teal-600",
      items: ["Node.js", "Express.js", "REST APIs", "Mongoose", "MongoDB"]
    },
    {
      name: "AI/ML",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      items: ["Machine Learning", "Deep Learning", "Python", "Neural Networks", "Data Analysis"]
    },
    {
      name: "Database",
      icon: Database,
      color: "from-orange-500 to-red-600",
      items: ["MongoDB", "Mongoose", "Database Design", "Data Modeling", "Optimization"]
    },
    {
      name: "Development",
      icon: Code2,
      color: "from-indigo-500 to-blue-600",
      items: ["Git", "GitHub", "Agile", "Testing", "Code Review", "CI/CD"]
    },
    {
      name: "Tools",
      icon: Wrench,
      color: "from-teal-500 to-green-600",
      items: ["Postman", "NPM", "Karma", "Jasmine", "VS Code", "Figma"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={category.name}
            className="modern-card group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
            
            <div className="space-y-3">
              {category.items.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center py-2 px-3 bg-muted/50 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
          <div className="text-muted-foreground">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
          <div className="text-muted-foreground">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">70%</div>
          <div className="text-muted-foreground">Test Reliability</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50%</div>
          <div className="text-muted-foreground">Performance Boost</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;