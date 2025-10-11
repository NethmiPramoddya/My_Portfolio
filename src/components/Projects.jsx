// src/components/Projects.jsx
import { useRef } from "react";
import BMH from "../assets/BMH_bg.png";
import Glam from "../assets/Glam.png";
import TPB from "../assets/TPBbg.png";
import survey from "../assets/SurvayBg.png";
import HireMeSection from "./HireMeSection";

const projects = [
  {
    id: 1,
    title: "Bring Me Home",
    description: "full-stack MERN peer-to-peer international delivery platform connecting senders with travelers for cost-efficient deliveries",
    image: BMH,
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/NethmiPramoddya/Bring-Me-Home-web-app-Capstone-Group21.git",
    demo: "https://www.linkedin.com/posts/nethmi-kathriarachchi-916bb7328_mern-capstoneproject-fullstackdevelopment-activity-7381304460368728064-DIwz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLCc2IBxLX4mcOGiVe7p5sZQ6XG3RoV3mo",
  },
  {
    id: 2,
    title: "Glamore",
    description: "a full-stack e-commerce cosmetics website supporting 200+ product listings, shopping cart, and secure Google login",
    image: Glam,
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/NethmiPramoddya/Shopping_app.git",
    demo: "https://shopping-app-bay-eta.vercel.app/",
  },
  {
    id: 3,
    title: "The Perfect Buddy Tennis Community(TPB)",
    description: "Collaborated on a full-stack tennis community platform that connected 100+ players through game hosting, join requests, and a player ranking system",
    image: TPB,
    tech: ["Supabase", "React", "JavaScript"],
    github: "https://github.com/mayuraabhayasinghe/tpb-tennis-community.git",
    demo: "https://tpb-tennis-community.vercel.app/",
  },
  {
    id: 4,
    title: "Circuit Booking System for Surveying Department",
    description: "Collaborated on developing a booking system used to manage 10+ Survey circuit bungalows across Sri Lanka, digitizing a previously manual process",
    image: survey,
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/ThashmikaRathnayake/Circuit-Bungalows-Booking-System.git",
    demo: "https://www.linkedin.com/posts/nethmi-kathriarachchi-916bb7328_webdevelopment-fullstack-reactjs-activity-7382449901869248512-m17f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLCc2IBxLX4mcOGiVe7p5sZQ6XG3RoV3mo",
  },
];

const Projects = () => {
  const projectRefs = useRef({});

  const scrollToProject = (id) => {
    projectRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="projects">
      <div className="max-w-6xl px-4 py-16 mx-auto text-center sm:px-6 md:px-6 sm:py-20">
        <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl md:text-3xl">My Projects</h2>

        {/* Project Cards */}
        <div className="grid gap-6 mb-20 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 transition bg-white shadow-md sm:p-5 rounded-2xl hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48 mb-4 sm:mb-6 rounded-xl sm:h-56"
              />
              <h3 className="mb-2 text-lg font-semibold sm:text-xl">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-600 sm:text-base">{project.description}</p>
              <button
                onClick={() => scrollToProject(project.id)}
                className="inline-block px-4 py-2 text-sm text-white transition rounded-full sm:text-base bg-gradient-to-r from-indigo-500 to-purple-600 hover:-translate-y-1"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

         <HireMeSection />

        {/* Project Details Sections */}
        <div className="mt-12 sm:mt-20">
          {projects.map((project) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 mb-8 sm:mb-10 shadow-md bg-gray-50 rounded-2xl min-h-[auto] md:min-h-screen"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full mb-6 shadow-md sm:mb-8 rounded-2xl max-h-64 sm:max-h-96"
              />
              <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">{project.title}</h1>
              <p className="mb-6 text-sm text-gray-700 sm:text-base md:text-lg">{project.description}</p>
              <div className="mb-6">
                <h3 className="mb-2 text-sm font-semibold sm:text-base">Technologies Used:</h3>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start md:flex md:items-center md:justify-center">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs text-indigo-700 bg-indigo-100 rounded-full sm:px-3 sm:text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start sm:gap-4 md:flex md:items-center md:justify-center">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm text-white transition bg-indigo-600 rounded-full sm:text-base hover:bg-indigo-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm text-indigo-600 transition border-2 border-indigo-600 rounded-full sm:text-base hover:bg-indigo-50"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
