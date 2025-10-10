// src/components/Projects.jsx
import { useRef } from "react";
import BMH from "../assets/BMH_bg.png"
import Glam from "../assets/Glam.png"
import TPB from "../assets/TPBbg.png"
import survey from "../assets/SurvayBg.png"


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
    tech: [ "Supabase", "React", "JavaScript"],
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
    <section id="projects" className="">
      <div className="max-w-6xl px-6 py-20 mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold">My Projects</h2>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-5 transition bg-white shadow-md rounded-2xl hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <button
                onClick={() => scrollToProject(project.id)}
                className="inline-block px-4 py-2 text-white transition rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:-translate-y-1"
              >
                View Details 
              </button>
            </div>
          ))}
        </div>

        {/* Project Details Sections */}
        <div className="mt-20">
          {projects.map((project) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className="min-h-screen px-6 py-20 mb-10 shadow-md bg-gray-50 rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-8 shadow-md rounded-2xl"
              />
              <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
              <p className="mb-6 text-gray-700">{project.description}</p>
              <div className="mb-6">
                <h3 className="mb-2 font-semibold">Technologies Used:</h3>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm text-indigo-700 bg-indigo-100 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-white transition bg-indigo-600 rounded-full hover:bg-indigo-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-indigo-600 transition border-2 border-indigo-600 rounded-full hover:bg-indigo-50"
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
