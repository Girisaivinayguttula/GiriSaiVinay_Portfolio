import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © 2025 · Built with Swiss style & 21st.dev components
          </p>
          
          <div className="flex justify-center">
            <a
              href="https://github.com/Girisaivinayguttula"
              target="_blank"
              rel="noopener noreferrer"
              className="link-professional flex items-center gap-2 text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
          
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Giri Sai Vinay · Full Stack Developer · Hyderabad, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;