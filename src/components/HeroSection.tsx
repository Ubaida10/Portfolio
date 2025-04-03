
import { ArrowDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Hi, I'm <span className="gradient-text">Abu Ubaida</span>
          </h2>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-white/90 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Full Stack Developer & AI/ML Specialist
          </h1>
          
          <p className="text-lg text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            Specialized in MEAN Stack, ASP.NET Core, and advanced Machine Learning technologies.
            Building intelligent web applications and data-driven solutions.
          </p>
          
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <a
              href="#contact"
              className="px-6 py-3 bg-accent-purple rounded-full font-medium text-white hover:bg-accent-purple/90 transition-colors duration-300"
            >
              Contact Me
            </a>
            
            <a
              href="#projects"
              className="px-6 py-3 bg-transparent border border-accent-teal rounded-full font-medium text-white hover:bg-accent-teal/10 transition-colors duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300 animate-bounce"
        style={{ animationDuration: "2s" }}
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
