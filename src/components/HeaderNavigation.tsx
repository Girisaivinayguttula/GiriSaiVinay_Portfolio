import { Tabs } from "@/components/ui/vercel-tabs";
import { useState, useEffect, useRef } from "react";
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

  // Track active section by measuring which section's center is closest to the viewport center
  useEffect(() => {
    let ticking = false;

    const updateActiveFromScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestId = activeSection;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const tab of tabs) {
        const el = document.getElementById(tab.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // Only consider if the section intersects the viewport at least partially
        const intersects = rect.bottom > 0 && rect.top < window.innerHeight;
        if (!intersects) continue;

        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = tab.id;
        }
      }

      if (closestId && closestId !== activeSection) {
        setActiveSection(closestId);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActiveFromScroll();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Initial calculation
    updateActiveFromScroll();

    return () => {
      window.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("resize", onScroll as EventListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs, activeSection]);

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
