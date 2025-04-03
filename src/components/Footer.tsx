
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/70">
              © {new Date().getFullYear()} Muhammad Abu Ubaida. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/Ubaida10"
              className="p-2 text-white/70 hover:text-accent-purple transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abu-ubaida-aljerah/"
              className="p-2 text-white/70 hover:text-accent-teal transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="abuubaidaalj@gmail.com"
              className="p-2 text-white/70 hover:text-accent-purple transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-accent-purple/10 rounded-full hover:bg-accent-purple/20 transition-colors duration-300"
          >
            <ArrowUp className="w-5 h-5 text-accent-purple" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
