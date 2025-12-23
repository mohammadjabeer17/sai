import { useState } from "react";
import { Play, X, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    id: 1,
    title: "Cinematic Teaser",
    category: "Cinematic",
    thumbnail: "https://img.youtube.com/vi/y_g03JpwB9E/maxresdefault.jpg",
    videoId: "y_g03JpwB9E",
    year: "2024",
  },
  {
    id: 2,
    title: "Event Promo",
    category: "Promo",
    thumbnail: "https://img.youtube.com/vi/2tiZPX0dBhQ/maxresdefault.jpg",
    videoId: "2tiZPX0dBhQ",
    year: "2024",
  },
  {
    id: 3,
    title: "Wedding Film",
    category: "Cinematic",
    thumbnail: "https://img.youtube.com/vi/qnQju45aEH4/maxresdefault.jpg",
    videoId: "qnQju45aEH4",
    year: "2024",
  },
  {
    id: 4,
    title: "UGC Reel - NxtWave",
    category: "UGC",
    thumbnail: "https://img.youtube.com/vi/9rNzu0kXuDs/maxresdefault.jpg",
    videoId: "9rNzu0kXuDs",
    year: "2024",
  },
  {
    id: 5,
    title: "Brand Content",
    category: "UGC",
    thumbnail: "https://img.youtube.com/vi/LItmZYdTMJM/maxresdefault.jpg",
    videoId: "LItmZYdTMJM",
    year: "2024",
  },
];

const filters = ["All", "Cinematic", "UGC", "Promo"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section ref={ref} id="work" className="py-24 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 fade-up ${isVisible ? "animate" : ""}`}
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Selected Work
          </h2>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 fade-up fade-up-delay-1 ${
            isVisible ? "animate" : ""
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${
            isVisible ? "animate" : ""
          }`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer hover-lift"
              onClick={() => setPlayingVideo(project.id)}
            >
              <div className="aspect-video overflow-hidden">
                {playingVideo === project.id ? (
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingVideo(null);
                      }}
                      className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.title}
                      </h3>
                      <span className="text-muted-foreground text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        {project.year}
                      </span>
                    </div>

                    {/* Play Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <Play
                        className="w-5 h-5 text-primary-foreground ml-0.5"
                        fill="currentColor"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Link */}
        <div
          className={`text-center mt-12 fade-up ${isVisible ? "animate" : ""}`}
        >
          <a
            href="https://drive.google.com/drive/folders/1dfsEDESoRkeAwozf4_wXAt4mxIPbPXUm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span>View Full Portfolio on Drive</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
