const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Frontend",
      items: ["Angular 18 (Standalone)", "TypeScript", "Responsive Design", "Bootstrap", "HTML5", "CSS3"]
    },
    {
      name: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "Mongoose"]
    },
    {
      name: "Dev & Tools",
      items: ["Git", "GitHub", "Postman", "NPM", "Agile", "Karma", "Jasmine"]
    }
  ];

  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light tracking-tight mb-4">Tech Stack</h2>
        <div className="w-16 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={category.name}
            className="card-swiss text-center group hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-xl font-medium mb-6 text-primary">{category.name}</h3>
            
            <div className="space-y-3">
              {category.items.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-secondary/50 rounded-md text-sm font-medium text-secondary-foreground"
                  title={`Used in production since 2023`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;