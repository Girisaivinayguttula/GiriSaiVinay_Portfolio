import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Giri Sai Vinay</h3>
            <p className="text-background/80 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              with modern web technologies and AI/ML integration.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-background/80 hover:text-background transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Girisaivinayguttula"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/10 hover:bg-background hover:text-foreground rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/girisaivinayguttula"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/10 hover:bg-background hover:text-foreground rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:girisaivinayguttula@gmail.com"
                className="p-3 bg-background/10 hover:bg-background hover:text-foreground rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-background/80 text-sm">
              Based in Hyderabad, India<br />
              Available for remote opportunities
            </p>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Giri Sai Vinay. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-background/60 text-sm">
              Built with <Heart className="w-4 h-4 text-red-400" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;