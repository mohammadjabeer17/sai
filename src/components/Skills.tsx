import { Film, Wand2, Palette, Camera, Layers, Image } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = [
  {
    icon: Film,
    name: "Final Cut Pro",
    description: "Professional editing & timeline mastery",
  },
  {
    icon: Film,
    name: "Premiere Pro",
    description: "Adobe Creative Suite expertise",
  },
  {
    icon: Wand2,
    name: "After Effects",
    description: "Motion graphics & visual effects",
  },
  {
    icon: Palette,
    name: "DaVinci Resolve",
    description: "Color grading & log footage workflows",
  },
  {
    icon: Camera,
    name: "Photography",
    description: "Candid & event photography",
  },
  {
    icon: Layers,
    name: "Motion Graphics",
    description: "Dynamic titles & animations",
  },
  {
    icon: Image,
    name: "Poster Design",
    description: "Creating posters & album designs",
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="skills" className="py-24 md:py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-16 fade-up ${isVisible ? "animate" : ""}`}
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Skills & Tools
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 stagger-children ${
            isVisible ? "animate" : ""
          }`}
        >
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
