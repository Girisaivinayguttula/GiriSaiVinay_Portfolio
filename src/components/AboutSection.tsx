import { Users, Code, Zap, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative development and delivery"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency"
    },
    {
      icon: Target,
      title: "User-Centric",
      description: "Building with the end user in mind"
    }
  ];

  return (
    <section id="about" className="section-container bg-muted/30">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about creating exceptional digital experiences
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              I'm a <span className="font-semibold text-primary">results-driven full stack developer</span> based in Hyderabad, 
              currently crafting high-performance web platforms at <span className="font-semibold">Ascendion</span>.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              I specialize in <span className="font-semibold text-primary">Angular 18</span> and scalable backend architectures 
              using <span className="font-semibold text-primary">Node.js</span> and <span className="font-semibold text-primary">MongoDB</span>. 
              With a background in AI/ML, I'm passionate about building solutions that make a real impact.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <span className="skill-tag">Problem Solving</span>
            <span className="skill-tag">Team Leadership</span>
            <span className="skill-tag">Agile Development</span>
            <span className="skill-tag">Performance Optimization</span>
            <span className="skill-tag">AI/ML Integration</span>
          </div>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={highlight.title}
              className="modern-card text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <highlight.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;