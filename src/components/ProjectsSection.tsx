
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Virtual Fashion Fit",
      description: "Virtual Fashion Fit is an AI-powered application that lets users virtually try on traditional garments. Built with Angular and ASP.NET Core, it integrates computer vision for accurate garment detection and real-time image processing, enhancing the online shopping experience.",
      technologies: ["Angular", "Computer Vision", "Deep Learning", ".NET", "CNN"],
      image: "bg-gradient-to-br from-violet-900/20 to-purple-900/20",
      links: {
        github: "#",
      },
    },
    {
      title: "School Management System",
      description: "Developed a robust School Management System using Node.js and Angular. Features include role-based authentication, course enrollement, task and assignment management, progress tracking, and detailed reporting for administrators, teachers, and students.",
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js", "JWT Authentication"],
      image: "bg-gradient-to-br from-blue-900/20 to-teal-900/20",
      links: {
        github: "https://github.com/Ubaida10/10Pearls-Shine-Internship-Project.git",
      },
    },
    {
      title: "CardiLung Insight",
      description: "Designed and developed a multi-class classification end-to-end ML pipeline for classifying respiratory sounds using deep learning (TensorFlow/Keras). Implemented MFCC feature extraction, optimized preprocessing, and visualized model performance with accuracy plots and confusion matrices.",
      technologies: ["Python", "Jupyter Notebook", "TensorFlow", "Matplotlib"],
      image: "bg-gradient-to-br from-green-900/20 to-cyan-900/20",
      links: {
        github: "https://github.com/Ubaida10/CardiLung-Insight.git",
      },
    },
    {
      title: "CineTix",
      description: "Built a responsive e-commerce platform for cinema ticket booking using ASP.NET Core. Integrated user authentication, designed SQL Server schemas, and developed an admin panel for managing movies, actors, and producers.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "ADO.NET", "Identity"],
      image: "bg-gradient-to-br from-red-900/20 to-orange-900/20",
      links: {
        github: "https://github.com/Ubaida10/CineTix.git",
      },
    },
    {
      title: "IndeedApp",
      description: "Developed the frontend of an Indeed-like job search app using Kotlin. Designed an intuitive UI with smooth navigation to enhance user experience.",
      technologies: ["Kotlin"],
      image: "bg-gradient-to-br from-teal-900/20 to-green-900/20",
      links: {
        github: "https://github.com/Ubaida10/Indeed.git",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Recent Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-teal mx-auto mb-6"></div>
          <p className="text-lg text-white/70">
            A showcase of my work in MEAN Stack, ASP.NET Core & Machine Learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 opacity-20 ${project.image}`}></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white flex items-center gap-1 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
