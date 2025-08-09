import { Logos3 } from "@/components/ui/logos3";

const SkillsCarousel = () => {
  const techLogos = [
    {
      id: "angular",
      description: "Angular",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
      className: "h-8 w-auto",
    },
    {
      id: "typescript",
      description: "TypeScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      className: "h-8 w-auto",
    },
    {
      id: "nodejs",
      description: "Node.js",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      className: "h-8 w-auto",
    },
    {
      id: "mongodb",
      description: "MongoDB",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      className: "h-8 w-auto",
    },
    {
      id: "react",
      description: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      className: "h-8 w-auto",
    },
    {
      id: "python",
      description: "Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      className: "h-8 w-auto",
    },
    {
      id: "git",
      description: "Git",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      className: "h-8 w-auto",
    },
    {
      id: "tailwind",
      description: "Tailwind CSS",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      className: "h-8 w-auto",
    },
  ];

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-4 px-2 sm:px-4">
      <Logos3
        heading="Technologies & Skills"
        logos={techLogos}
      />
    </section>
  );
};

export default SkillsCarousel;