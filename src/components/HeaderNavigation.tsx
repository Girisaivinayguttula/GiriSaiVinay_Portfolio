import { Tabs } from "@/components/ui/vercel-tabs";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const HeaderNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (tabId: string) => {
    const element = document.querySelector(`#${tabId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(tabId);
      setIsMenuOpen(false); // close mobile menu on click
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // More balanced detection area
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Get all visible entries and sort by their position and visibility
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .map(entry => ({
          id: entry.target.id,
          ratio: entry.intersectionRatio,
          top: entry.boundingClientRect.top,
          element: entry.target
        }))
        .sort((a, b) => {
          // Prioritize sections that are more centered in viewport
          const centerA = Math.abs(a.top + (a.element as HTMLElement).offsetHeight / 2);
          const centerB = Math.abs(b.top + (b.element as HTMLElement).offsetHeight / 2);
          return centerA - centerB;
        });

      if (visibleEntries.length > 0) {
        setActiveSection(visibleEntries[0].id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    tabs.forEach((tab) => {
      const element = document.querySelector(`#${tab.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [tabs]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4"> {/* matches Timeline width */}
        <div className="flex items-center justify-between">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-accent"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Tabs */}
          <div className="hidden md:flex justify-center flex-1">
            <Tabs
              tabs={tabs}
              activeTab={activeSection}
              onTabChange={scrollToSection}
            />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`block w-full text-left px-4 py-2 rounded hover:bg-accent ${activeSection === tab.id ? "bg-accent" : ""
                  }`}
                onClick={() => scrollToSection(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderNavigation;
