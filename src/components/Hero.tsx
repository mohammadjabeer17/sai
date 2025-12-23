import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cinematic background"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className={`fade-up ${isVisible ? "animate" : ""}`}>
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Creative Vision
          </span>
        </div>

        <h1
          className={`fade-up fade-up-delay-1 ${
            isVisible ? "animate" : ""
          } text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6`}
        >
          Saichandu <span className="gradient-accent-text">Sadam</span>
        </h1>

        <p
          className={`fade-up fade-up-delay-2 ${
            isVisible ? "animate" : ""
          } text-muted-foreground text-lg md:text-xl mb-4 tracking-wide`}
        >
          Video Editor • Photographer • Visual Creator
        </p>

        <p
          className={`fade-up fade-up-delay-3 ${
            isVisible ? "animate" : ""
          } text-muted-foreground/70 text-base max-w-xl mx-auto mb-10`}
        >
          3+ years of expertise in long format & UGC video editing and
          photography. Creating authentic visuals that connect emotionally with
          audiences.
        </p>

        <div
          className={`fade-up fade-up-delay-4 ${
            isVisible ? "animate" : ""
          } flex flex-col sm:flex-row gap-4 justify-center`}
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-base hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <Play className="w-5 h-5" />
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-muted-foreground/30 bg-transparent text-foreground font-medium px-8 py-4 rounded-lg text-base hover:bg-secondary hover:border-muted-foreground/50 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 fade-up fade-up-delay-5 ${
          isVisible ? "animate" : ""
        }`}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
