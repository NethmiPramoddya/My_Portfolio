import me from "../assets/Me-removebg-preview.png";

const About = () => (
  <section id="about" className="py-20">
    <div className="flex flex-col items-center max-w-6xl gap-10 px-6 mx-auto md:flex-row md:items-start">
      
      {/* Image on the left */}
      <div className="flex justify-center w-full md:w-1/2 md:justify-start">
        <img
          src={me}
          alt="My Photo"
          className="object-cover w-3/4 h-auto md:w-full"
        />
      </div>

      {/* Text content on the right */}
      <div className="w-full text-center md:w-1/2 md:text-left md:-ml-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-gradient-to-r from-indigo-500 to-purple-600 after:mt-3">
          Who Am I?
        </h2>
        <h3 className="mb-4 text-2xl font-semibold text-indigo-600">About Me</h3>
        <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
          Driven IT undergraduate with 2+ years of academic experience in Computing and Information Systems, specializing in
          software development and web technologies including React, Node.js, Tailwind CSS, SQL, and MongoDB. Experienced in
          leading full-stack projects and collaborating in team-driven environments. Passionate about building innovative, realworld IT solutions and advancing technical expertise.
        </p>

        <a
          href="/cv.pdf"
          download="Pramoddya_Kathriarachchi_CV.pdf"
          className="px-8 py-4 text-lg font-semibold transition-colors duration-300 border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white"
        >
          Download CV
        </a>

      </div>
    </div>
  </section>
);

export default About;
