import { Tabs } from "@/components/ui/vercel-tabs";
import { useState, useEffect } from "react";

const HeaderNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

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
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(tabId);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px',
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length > 0) {
        setActiveSection(visibleEntries[0].target.id);
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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <Tabs
            tabs={tabs}
            activeTab={activeSection}
            onTabChange={scrollToSection}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;