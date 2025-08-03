const AboutSection = () => {
  return (
    <section className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-light tracking-tight">About Me</h2>
          <div className="w-16 h-1 bg-primary"></div>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a results-driven full stack developer based in Hyderabad, currently crafting 
            high-performance web platforms at Ascendion. I specialize in Angular 18 and scalable 
            backend architectures using Node.js and MongoDB.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            With a background in AI/ML, I'm passionate about clean code, collaborative delivery, 
            and user-centric engineering that makes a real difference.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="skill-badge">Problem Solving</span>
            <span className="skill-badge">Team Collaboration</span>
            <span className="skill-badge">Agile Development</span>
            <span className="skill-badge">Performance Optimization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;