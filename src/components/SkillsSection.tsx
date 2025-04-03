
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Brain, Code, Server, Database, Languages, Wrench } from "lucide-react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("mean");
  
  const skillsData = {
    mean: [
      { 
        name: "MongoDB", 
        logo: "/lovable-uploads/mongodb.svg", 
        alt: "MongoDB Logo",
        description: "NoSQL database for modern applications"
      },
      { 
        name: "Express.js", 
        logo: "/lovable-uploads/express.png", 
        alt: "Express.js Logo",
        description: "Fast, unopinionated web framework for Node.js"
      },
      { 
        name: "Angular", 
        logo: "https://angular.io/assets/images/logos/angular/angular.svg", 
        alt: "Angular Logo",
        description: "Platform for building mobile and desktop web applications"
      },
      { 
        name: "Node.js", 
        logo: "https://nodejs.org/static/images/logo.svg", 
        alt: "Node.js Logo",
        description: "JavaScript runtime built on Chrome's V8 engine"
      },
      { 
        name: "TypeScript", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", 
        alt: "TypeScript Logo",
        description: "Typed superset of JavaScript that compiles to plain JavaScript"
      },
      { 
        name: "JavaScript", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", 
        alt: "JavaScript Logo",
        description: "High-level, interpreted programming language"
      },
    ],
    dotnet: [
      { 
        name: "ASP.NET Core", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg", 
        alt: "ASP.NET Core Logo",
        description: "Cross-platform, high-performance framework for building cloud-based applications"
      },
      { 
        name: "C#", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg", 
        alt: "C# Logo",
        description: "Elegant and type-safe object-oriented language"
      },
      { 
        name: "Entity Framework", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg", 
        alt: "Entity Framework Logo",
        description: "Object-database mapper for .NET"
      },
      { 
        name: "SQL Server", 
        logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg", 
        alt: "SQL Server Logo",
        description: "Microsoft's relational database management system"
      },
      { 
        name: "Razor Pages", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg", 
        alt: "Razor Pages Logo",
        description: "Page-focused framework for building dynamic, data-driven web sites"
      },
      { 
        name: "Blazor", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png", 
        alt: "Blazor Logo",
        description: "Framework for building interactive client-side web UI with .NET"
      },
    ],
    ml: [
      { 
        name: "TensorFlow", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", 
        alt: "TensorFlow Logo",
        description: "End-to-end open source platform for machine learning"
      },
      { 
        name: "PyTorch", 
        logo: "https://pytorch.org/assets/images/pytorch-logo.png", 
        alt: "PyTorch Logo",
        description: "Open source machine learning framework"
      },
      { 
        name: "scikit-learn", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", 
        alt: "scikit-learn Logo",
        description: "Machine learning library for Python"
      },
      { 
        name: "Neural Networks", 
        logo: "/lovable-uploads/neural.png", 
        alt: "Neural Networks Representation",
        description: "Computing systems inspired by the human brain"
      },
      { 
        name: "NLP", 
        logo: "/lovable-uploads/nlp.png", 
        alt: "NLP Representation",
        description: "Processing and analyzing natural language data"
      },
      { 
        name: "Computer Vision", 
        logo: "/lovable-uploads/vision.png", 
        alt: "Computer Vision Representation",
        description: "AI field that enables computers to derive information from images"
      },
    ],
    languages: [
      {
        name: "Python",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
        alt: "Python Logo",
        description: "High-level, interpreted, and general-purpose programming language"
      },
      {
        name: "Java",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
        alt: "Java Logo",
        description: "High-level, object-oriented programming language"
      },
      {
        name: "SQL",
        logo: "/lovable-uploads/sql.png",
        alt: "SQL Logo",
        description: "Structured query language for managing relational databases"
      },
      {
        name: "C++",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
        alt: "C++ Logo",
        description: "High-level, statically typed, general-purpose programming language"
      },
      {
        name: "C",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg",
        alt: "C Logo",
        description: "Low-level, statically typed, general-purpose programming language"
      },
      {
        name: "Kotlin",
        logo: "/lovable-uploads/kotlin.png",
        alt: "Kotlin Logo",
        description: "Statically-typed, general-purpose programming language"
      },
    ],
    other: [
      { 
        name: "Git", 
        logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", 
        alt: "Git Logo",
        description: "Distributed version control system"
      },
      { 
        name: "Docker", 
        logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png", 
        alt: "Docker Logo",
        description: "Platform for developing, shipping, and running applications"
      },
      { 
        name: "RESTful APIs", 
        logo: "/lovable-uploads/api.png", 
        alt: "API Representation",
        description: "Architectural style for designing networked applications"
      },
      { 
        name: "Microservices", 
        logo: "/lovable-uploads/services.png", 
        alt: "Microservices Representation",
        description: "Method of developing software applications as a suite of small services"
      },
      { 
        name: "Azure", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg", 
        alt: "Azure Logo",
        description: "Microsoft's cloud computing service"
      },
      { 
        name: "AWS", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", 
        alt: "AWS Logo",
        description: "Amazon's cloud computing platform"
      },
    ],
  };

  // Get the appropriate icon for section headings
  const getTabIcon = (tab: string) => {
  switch (tab) {
    case "mean":
      return <Code className="w-5 h-5 mr-2" />; // MEAN Stack
    case "dotnet":
      return <Server className="w-5 h-5 mr-2" />; // ASP.NET Core
    case "ml":
      return <Brain className="w-5 h-5 mr-2" />; // Machine Learning
    case "languages":
      return <Languages className="w-5 h-5 mr-2" />; // Programming Languages
    case "other":
      return <Wrench className="w-5 h-5 mr-2" />; // Other Skills (Tools, DevOps, etc.)
    default:
      return <Database className="w-5 h-5 mr-2" />; // Default case
  }
};

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-teal mx-auto mb-6"></div>
          <p className="text-lg text-white/70">
            My expertise in various technologies and frameworks
          </p>
        </div>
        
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-md border border-gray-800 overflow-hidden flex-wrap">
            <button
              className={cn(
                "px-6 py-3 font-medium transition-colors duration-200 flex items-center",
                activeTab === "mean"
                  ? "bg-accent-purple text-white"
                  : "bg-black text-white/70 hover:text-white"
              )}
              onClick={() => setActiveTab("mean")}
            >
              {getTabIcon("mean")} MEAN Stack
            </button>
            <button
              className={cn(
                "px-6 py-3 font-medium transition-colors duration-200 flex items-center",
                activeTab === "dotnet"
                  ? "bg-accent-purple text-white"
                  : "bg-black text-white/70 hover:text-white"
              )}
              onClick={() => setActiveTab("dotnet")}
            >
              {getTabIcon("dotnet")} ASP.NET Core
            </button>
            <button
              className={cn(
                "px-6 py-3 font-medium transition-colors duration-200 flex items-center",
                activeTab === "ml"
                  ? "bg-accent-purple text-white"
                  : "bg-black text-white/70 hover:text-white"
              )}
              onClick={() => setActiveTab("ml")}
            >
              {getTabIcon("ml")} Machine Learning
            </button>
            <button
              className={cn(
                "px-6 py-3 font-medium transition-colors duration-200 flex items-center",
                activeTab === "languages"
                  ? "bg-accent-purple text-white"
                  : "bg-black text-white/70 hover:text-white"
              )}
              onClick={() => setActiveTab("languages")}
            >
              {getTabIcon("languages")} Languages
            </button>
            <button
              className={cn(
                "px-6 py-3 font-medium transition-colors duration-200 flex items-center",
                activeTab === "other"
                  ? "bg-accent-purple text-white"
                  : "bg-black text-white/70 hover:text-white"
              )}
              onClick={() => setActiveTab("other")}
            >
              {getTabIcon("other")} Other Skills
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData[activeTab as keyof typeof skillsData].map((skill) => (
            <div key={skill.name} className="skill-card animate-fade-in group hover:scale-105 transition-transform">
              <div className="flex flex-col items-center justify-center">
                <div className="w-24 h-24 mb-4 overflow-hidden flex items-center justify-center">
                  <img 
                    src={skill.logo} 
                    alt={skill.alt} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                <p className="text-sm text-white/60 text-center">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
