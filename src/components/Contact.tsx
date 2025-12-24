import { Mail, Phone, Youtube, ArrowUpRight, FolderOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "editort725@gmail.com",
    href: "mailto:editort725@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7286058314",
    href: "tel:+917286058314",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "Watch My Work",
    href: "https://youtu.be/y_g03JpwB9E",
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 fade-up ${isVisible ? "animate" : ""}`}
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Let's Create Something
            <span className="gradient-accent-text"> Amazing</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your vision to life.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-4 stagger-children ${
            isVisible ? "animate" : ""
          }`}
        >
          {contactLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">
                    {link.label}
                  </span>
                  <p className="font-medium mt-0.5">{link.value}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-12 fade-up ${isVisible ? "animate" : ""}`}
        >
          <a
            href="https://drive.google.com/drive/folders/1dfsEDESoRkeAwozf4_wXAt4mxIPbPXUm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-lg text-base hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <FolderOpen className="w-5 h-5" />
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
