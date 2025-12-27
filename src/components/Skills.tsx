import {
  Film,
  Wand2,
  Palette,
  Camera,
  Layers,
  Image,
  Scissors,
  Video,
  Edit3,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

const skills = [
  {
    icon: Scissors,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92JI_ziFSk8HxgBUMRkjU5dlj_Kz6TDg-Zg&s",
    name: "Final Cut Pro",
    description: "Professional editing & timeline mastery",
  },
  {
    icon: Video,
    image:
      "https://cdn.prod.website-files.com/662b8a4944dbb4e0ccd51a28/68c813be3659063740e4bed9_Capture%20d%E2%80%99e%CC%81cran%202025-09-15%20a%CC%80%2015.25.07.png",
    name: "Premiere Pro",
    description: "Adobe Creative Suite expertise",
  },
  {
    icon: Wand2,
    image:
      "https://pbs.twimg.com/profile_images/1272878358150275078/iBJehkOi_400x400.png",
    name: "After Effects",
    description: "Motion graphics & visual effects",
  },
  {
    icon: Palette,
    image:
      "https://cdn.pngedits.com/uploads/preview/davinci-resolve-logo-png-thumbnail-vsaqo4v.webp",
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
    icon: Edit3,
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
                className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                  {skill.image ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <IconComponent className="w-6 h-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a
              href="https://drive.google.com/drive/folders/1PPtG7wYzYE4_AFcDMrjIwwMrJzHX9G2v?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Brand Content
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
