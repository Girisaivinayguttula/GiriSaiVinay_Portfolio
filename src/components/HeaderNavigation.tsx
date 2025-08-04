import { Tabs } from "@/components/ui/vercel-tabs";

const HeaderNavigation = () => {
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
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <Tabs
            tabs={tabs}
            onTabChange={scrollToSection}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;