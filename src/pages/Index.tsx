import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      {/* Film Grain Overlay */}
      <div className="film-grain" />
      
      <Navigation />
      <Hero />
      <Showreel />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
