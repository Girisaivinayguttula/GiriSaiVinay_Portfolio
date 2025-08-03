import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            <span className="block text-foreground">Giri Sai Vinay</span>
          </h1>
          
          <div className="space-y-4 mb-8">
            <p className="text-caps text-muted-foreground mb-2">
              Full Stack Developer · Associate Engineer @ Ascendion
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Merging performance and clean design — from frontend to backend
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="btn-professional group"
            >
              <a
                href="https://linkedin.com/in/girisaivinayguttula"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-widest text-sm"
              >
                <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="btn-outline-professional group"
            >
              <a
                href="mailto:girisaivinayguttula@gmail.com"
                className="uppercase tracking-widest text-sm"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;