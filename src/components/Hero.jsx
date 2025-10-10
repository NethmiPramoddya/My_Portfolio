import heroBg from "../assets/bgport.jpg"; // your background image

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center py-24 text-white md:py-32"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative flex flex-col items-center max-w-5xl px-6 text-center md:px-16 md:items-start md:text-left">
        <h1 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl sm:mb-4 opacity-90 drop-shadow-md">
          Hi, I am
        </h1>
        <h2 className="mt-3 mb-3 text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-white to-gray-100 bg-clip-text sm:mb-4 drop-shadow-lg sm:mt-5">
          Nethmi Pramoddya
        </h2>
        <h3 className="mb-4 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl sm:mb-6 drop-shadow-md">
          Full Stack Developer
        </h3>
        <p className="max-w-xl mb-6 text-base sm:text-lg md:text-xl lg:text-2xl sm:mb-8 opacity-90 drop-shadow-md">
          Passionate about creating secure, scalable, and user-friendly web applications.
          Explore my projects and skills below to see what I can do.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 font-semibold text-indigo-600 transition-transform duration-300 bg-white rounded-full shadow-lg sm:px-8 sm:py-4 hover:-translate-y-1 sm:hover:-translate-y-2"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
