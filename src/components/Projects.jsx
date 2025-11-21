// src/components/Projects.jsx
import { useState, useEffect, useRef } from "react";
import BMH from "../assets/BMH_bg.png";
import Glam from "../assets/Glamore.png";
import TPB from "../assets/TPBbg.png";
import survey from "../assets/SurvayBg.png";

const projects = [
  {
    id: 1,
    title: "Bring Me Home",
    description: "full-stack MERN peer-to-peer international delivery platform connecting senders with travelers for cost-efficient deliveries",
    image: BMH,
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/NethmiPramoddya/Bring-Me-Home-web-app-Capstone-Group21.git",
    demo: "https://www.linkedin.com/posts/nethmi-kathriarachchi-916bb7328_mern-capstoneproject-fullstackdevelopment-activity-7381304460368728064-DIwz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLCc2IBxLX4mcOGiVe7p5sZQ6XG3RoV3mo",
    gradient: "from-gray-700 to-gray-900",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Glamore",
    description: "a full-stack e-commerce cosmetics website supporting 200+ product listings, shopping cart, and secure Google login",
    image: Glam,
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/NethmiPramoddya/Shopping_app.git",
    demo: "https://shopping-app-bay-eta.vercel.app/",
    gradient: "from-gray-600 to-gray-800",
    category: "E-Commerce"
  },
  {
    id: 3,
    title: "The Perfect Buddy Tennis Community(TPB)",
    description: "Collaborated on a full-stack tennis community platform that connected 100+ players through game hosting, join requests, and a player ranking system",
    image: TPB,
    tech: ["Supabase", "React", "JavaScript"],
    github: "https://github.com/mayuraabhayasinghe/tpb-tennis-community.git",
    demo: "https://tpb-tennis-community.vercel.app/",
    gradient: "from-slate-600 to-slate-800",
    category: "Community"
  },
  {
    id: 4,
    title: "Circuit Booking System for Surveying Department",
    description: "Collaborated on developing a booking system used to manage 10+ Survey circuit bungalows across Sri Lanka, digitizing a previously manual process",
    image: survey,
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/ThashmikaRathnayake/Circuit-Bungalows-Booking-System.git",
    demo: "https://www.linkedin.com/posts/nethmi-kathriarachchi-916bb7328_webdevelopment-fullstack-reactjs-activity-7382449901869248512-m17f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLCc2IBxLX4mcOGiVe7p5sZQ6XG3RoV3mo",
    gradient: "from-zinc-600 to-zinc-800",
    category: "Management"
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const projectRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative pt-16 pb-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/20"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 rounded-full w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative px-6 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-2 mb-4 space-x-2 text-sm font-medium text-blue-700 border rounded-full shadow-sm bg-white/80 backdrop-blur-sm border-blue-200/50">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>My Work</span>
            </div>
            
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Featured 
              <span className="ml-3 text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text">
                Projects
              </span>
            </h2>
            
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
        </div>

        {/* Enhanced Project Details Sections */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className="relative"
            >
              <div className="overflow-hidden border shadow-xl bg-white/90 backdrop-blur-sm rounded-3xl border-white/20">
                
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-3 md:p-4 text-white relative overflow-hidden`}>
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <div className="mb-1 text-xs font-medium tracking-wider uppercase text-white/80">
                        {project.category} Project
                      </div>
                      <h1 className="text-xl font-bold md:text-2xl">
                        {project.title}
                      </h1>
                    </div>
                    <div className="text-3xl font-bold md:text-4xl text-white/10">
                      {String(project.id).padStart(2, '0')}
                    </div>
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 rounded-full bg-white/10"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <div className="grid items-start gap-8 lg:grid-cols-2">
                    
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full shadow-lg rounded-2xl"
                      />
                    </div>
                    
                    {/* Project Details */}
                    <div className="space-y-6">
                      
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-gray-900">About This Project</h3>
                        <p className="leading-relaxed text-gray-700">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h3 className="mb-3 text-lg font-bold text-gray-900">Built With</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {project.tech.map((tech) => (
                            <div key={tech} className="flex items-center p-3 space-x-3 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100">
                              <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                              <span className="text-sm font-medium text-gray-800">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center flex-1 px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg group bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl hover:shadow-xl hover:-translate-y-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>Live Demo</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                
                          </svg>
                        </a>
                        
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center flex-1 px-6 py-3 space-x-2 font-semibold text-gray-700 transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg group hover:border-gray-400 hover:text-gray-800 hover:bg-gray-50"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>View Code</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
