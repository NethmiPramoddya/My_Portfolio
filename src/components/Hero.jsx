import { useState, useEffect } from 'react';
import Me from "../assets/meLinkeldn.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger animations on component mount
    setTimeout(() => setIsLoaded(true), 100);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Dynamic Background with Parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-shift bg-300%"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      
      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center min-h-screen gap-12 py-20 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Status Indicator */}
            <div className={`inline-flex items-center space-x-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm ${isLoaded ? 'animate-slide-down' : 'opacity-0'}`}>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-emerald-400">Available for work</span>
            </div>

            {/* Main Heading */}
            <div className="pl-4 space-y-4 lg:pl-8">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                <span className="block mb-2 text-2xl font-medium text-white/80 sm:text-3xl">
                  Hi, I'm
                </span>
                <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text">
                  Nethmi
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-purple-200 via-blue-100 to-white bg-clip-text">
                  Pramoddya
                </span>
              </h1>
            </div>

            {/* Role & Description */}
            <div className={`space-y-6 pl-4 lg:pl-8 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-semibold text-blue-300 sm:text-3xl lg:text-4xl">
                Full Stack Developer
              </h2>
              
              <p className="max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
                Crafting exceptional digital experiences through clean code and innovative design. 
                Passionate about building scalable, user-friendly applications that make a difference.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 justify-center lg:justify-start pl-4 lg:pl-8 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <a
                href="#projects"
                className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 group bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:scale-105 hover:shadow-2xl animate-glow"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View My Work</span>
                  
                </span>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:opacity-100" />
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 font-semibold text-white transition-all duration-300 border-2 border-white/20 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:scale-105"
              >
                Let's Connect
              </a>
            </div>

            {/* Social Links */}
            <div className={`flex gap-6 justify-center lg:justify-start pl-4 lg:pl-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <a 
                href="https://github.com/NethmiPramoddya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 transition-all duration-300 border bg-white/5 border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com/in/your-linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 transition-all duration-300 border bg-white/5 border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className={`flex justify-center ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              
              {/* Floating Decorative Elements */}
              <div className="absolute w-20 h-20 rounded-full -top-10 -left-10 sm:-top-20 sm:-left-20 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 animate-float" />
              <div className="absolute w-16 h-16 rounded-full -bottom-10 -right-10 sm:-bottom-20 sm:-right-20 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 animate-float" style={{ animationDelay: '2s' }} />
              
              {/* Main Image Container */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 border bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border-white/10 animate-glow" />
                <div className="relative w-full h-full p-4 sm:p-6">
                  <img 
                    src={Me} 
                    alt="Nethmi Pramoddya" 
                    className="object-cover w-full h-full shadow-2xl rounded-2xl"
                  />
                </div>
              </div>

              {/* Scroll Indicator - Below Image (Mobile Only) */}
              <div className="flex flex-col items-center mt-6 space-y-1 lg:hidden sm:space-y-2 animate-float">
                <span className="text-xs text-white/60 sm:text-sm">Scroll to explore</span>
                <div className="w-5 h-8 p-1 border-2 rounded-full sm:w-6 sm:h-10 border-white/30">
                  <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white/60 rounded-full animate-bounce" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Large Screens Only */}
      <div className="absolute hidden transform -translate-x-1/2 lg:flex bottom-8 left-1/2 animate-float">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-white/60">Scroll to explore</span>
          <div className="w-6 h-10 p-1 border-2 rounded-full border-white/30">
            <div className="w-1 h-3 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
