import heroBg from "../assets/bgport.jpg"; // your background image

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white py-32 flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-5xl px-8 md:px-16 flex flex-col md:items-start items-center text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 opacity-90 drop-shadow-md">
          Hi, I am
        </h1>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent mb-4 drop-shadow-lg mt-5">
          Nethmi Pramoddya
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 drop-shadow-md">
          Full Stack Developer
        </h3>
        <p className="max-w-xl text-lg md:text-xl lg:text-2xl mb-8 opacity-90 drop-shadow-md">
          Passionate about creating secure, scalable, and user-friendly web applications.
          Explore my projects and skills below to see what I can do.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:-translate-y-2 transition-transform duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
