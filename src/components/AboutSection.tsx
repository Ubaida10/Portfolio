import { Code, Server, Database, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-teal mx-auto mb-6"></div>
          <p className="text-lg text-white/70">
            A passionate full-stack developer with expertise in MEAN Stack, ASP.NET Core & Machine Learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-right">
            <p className="text-white/80 mb-6">
              I’m Abu Ubaida, a dedicated Full-Stack Developer specializing in building dynamic and scalable web applications with Angular and ASP.NET Core. With a solid computer science background from Punjab University College of Information Technology (PUCIT), I strive to create innovative solutions that seamlessly combine functionality and user-friendly design.
            </p>
            
            <p className="text-white/80 mb-6">
              My journey as a developer has been driven by hands-on experience, including a MEAN Stack Developer Internship at 10Pearls, where I worked closely with cross-functional teams to design and implement efficient software solutions. I excel in agile environments, applying my problem-solving skills, teamwork, and adaptability to overcome complex challenges.
            </p>
            
            <p className="text-white/80 mb-6">
              Outside of work, I’m passionate about exploring new technologies, tackling programming challenges (with over 150 problems solved on Leetcode), and mentoring aspiring developers.
            </p>

            <p className="text-white/80 mb-6">
              My technical journey started with a degree in Computer Science, followed by a focus on software development and machine learning algorithms. I am committed to continuous learning and skill improvement to stay at the forefront of technology.
            </p>

            <p className="text-white/80 mb-6">
              When I'm not coding, I enjoy exploring new ML research papers, contributing to open-source projects, and sharing knowledge through technical blogs and community meetups.
            </p>

            {/* Resume Button */}
            <div className="text-center mt-6">
              <a
                href="https://drive.google.com/file/d/1Tw_fMuL1A-BbtdKNJrr80kmrMinuo-Zn/view?usp=sharing"
                className="inline-block px-6 py-3 mt-4 bg-accent-purple text-white font-semibold rounded-lg hover:bg-accent-teal transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Resume
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 animate-fade-in-left">
            <div className="flex items-start p-6 rounded-lg border border-gray-800 bg-black/40 hover:border-accent-purple transition-colors duration-300">
              <div className="flex-shrink-0 p-3 bg-accent-purple/10 rounded-full mr-4">
                <Code className="w-6 h-6 text-accent-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Frontend Development</h3>
                <p className="text-white/70">
                  Creating responsive, interactive user interfaces with Angular and modern JavaScript.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 rounded-lg border border-gray-800 bg-black/40 hover:border-accent-teal transition-colors duration-300">
              <div className="flex-shrink-0 p-3 bg-accent-teal/10 rounded-full mr-4">
                <Server className="w-6 h-6 text-accent-teal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Backend Development</h3>
                <p className="text-white/70">
                  Building robust APIs and server-side applications with Node.js, Express, and ASP.NET Core.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 rounded-lg border border-gray-800 bg-black/40 hover:border-accent-purple transition-colors duration-300">
              <div className="flex-shrink-0 p-3 bg-accent-purple/10 rounded-full mr-4">
                <Database className="w-6 h-6 text-accent-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Database Design</h3>
                <p className="text-white/70">
                  Designing and optimizing MongoDB and SQL Server databases for performance and scalability.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 rounded-lg border border-gray-800 bg-black/40 hover:border-accent-teal transition-colors duration-300">
              <div className="flex-shrink-0 p-3 bg-accent-teal/10 rounded-full mr-4">
                <Brain className="w-6 h-6 text-accent-teal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Machine Learning</h3>
                <p className="text-white/70">
                  Implementing intelligent solutions using TensorFlow, PyTorch, and scikit-learn for predictive analytics and data-driven insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
