import { useState } from "react";
import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Showreel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 fade-up ${isVisible ? "animate" : ""}`}
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">
            Featured Reel
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Cinematic Showreel
          </h2>
        </div>

        <div
          className={`relative group fade-up fade-up-delay-1 ${
            isVisible ? "animate" : ""
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl aspect-video shadow-2xl shadow-background/50">
            {!isPlaying ? (
              <>
                <img
                  src="https://img.youtube.com/vi/y_g03JpwB9E/maxresdefault.jpg"
                  alt="Showreel thumbnail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-background/40 transition-opacity duration-300 group-hover:bg-background/20" />

                {/* Play Button */}
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={handlePlayClick}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary animate-pulse-glow">
                    <Play
                      className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm font-medium">
                  Click to Play
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/y_g03JpwB9E?autoplay=1"
                title="Cinematic Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl" />
        </div>

        <p
          className={`text-center text-muted-foreground mt-8 max-w-xl mx-auto fade-up fade-up-delay-2 ${
            isVisible ? "animate" : ""
          }`}
        >
          A collection of my best cinematic teasers, promos, and event videos.
        </p>
      </div>
    </section>
  );
};

export default Showreel;
