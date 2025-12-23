import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Title */}
          <div className={`fade-up ${isVisible ? "animate" : ""}`}>
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">
              About
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight leading-tight">
              Turning Moments Into
              <span className="gradient-accent-text"> Stories</span>
            </h2>
          </div>

          {/* Right - Description */}
          <div
            className={`space-y-6 fade-up fade-up-delay-1 ${
              isVisible ? "animate" : ""
            }`}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm Saichandu Sadam, a Video Editor and Photographer with 3+ years
              of experience in long format & UGC video editing and candidate
              photography.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in creating authentic, candid visuals that connect
              emotionally with audiences. From UGC-style content for Instagram
              Reels and YouTube Shorts to cinematic teasers and promos, every
              frame is crafted to tell a compelling story.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  3+
                </span>
                <p className="text-muted-foreground text-sm mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  100+
                </span>
                <p className="text-muted-foreground text-sm mt-1">
                  Projects Done
                </p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  2
                </span>
                <p className="text-muted-foreground text-sm mt-1">Companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className={`mt-20 fade-up ${isVisible ? "animate" : ""}`}>
          <h3 className="text-xl font-semibold mb-8 text-center">
            Work Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-semibold">
                  NxtWave Disruptive Technologies
                </h4>
                <span className="text-primary text-sm whitespace-nowrap ml-2">
                  Jul 2024 - Present
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Creating UGC-style videos for Instagram Reels & YouTube Shorts.
                Color grading, transitions, and motion graphics for brand
                campaigns and digital marketing.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-semibold">Wingding Stories</h4>
                <span className="text-primary text-sm whitespace-nowrap ml-2">
                  Jun 2022 - Jul 2024
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cinematic editor for teasers and promos. Event videos,
                photography, and social media content using Final Cut Pro &
                DaVinci Resolve.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div
          className={`mt-12 fade-up text-center ${isVisible ? "animate" : ""}`}
        >
          <p className="text-muted-foreground text-sm">
            <span className="text-foreground font-medium">Education:</span>{" "}
            Diploma in Electronic & Communicational Engineering — SVIST
            (2016-2019) with 87%
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
