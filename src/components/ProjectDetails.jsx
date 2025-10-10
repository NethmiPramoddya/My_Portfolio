// src/pages/ProjectDetails.jsx
import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and TailwindCSS. It includes smooth scroll navigation, animations, and EmailJS contact integration.",
    tech: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
    image: "/images/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.vercel.app",
  },
  {
    id: 2,
    title: "E-commerce App",
    description:
      "A full-stack MERN e-commerce platform with authentication, product management, and Stripe payments.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/ecommerce.png",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://myecommerce.vercel.app",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const location = useLocation();

  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Project not found 😢</h2>
        <Link to="/" className="text-indigo-600 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl shadow-md mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-700 mb-6">{project.description}</p>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-indigo-600 text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-50 transition"
          >
            GitHub
          </a>
        </div>

        <div className="mt-10">
          <Link to="/" className="text-indigo-600 underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
