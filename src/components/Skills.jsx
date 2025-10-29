import { useState, useEffect, useRef } from 'react';
import { skills } from "../data/skills";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate cards one by one
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedCards(prev => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const gradientColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500', 
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500'
  ];

  const iconBackgrounds = [
    'bg-gradient-to-br from-blue-100 to-cyan-100',
    'bg-gradient-to-br from-purple-100 to-pink-100',
    'bg-gradient-to-br from-green-100 to-emerald-100', 
    'bg-gradient-to-br from-orange-100 to-red-100'
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 rounded-full w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 mix-blend-multiply filter blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 rounded-full w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 mix-blend-multiply filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative px-6 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-20 text-center">
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-sm font-medium text-indigo-700 border rounded-full shadow-sm bg-white/80 backdrop-blur-sm border-indigo-200/50">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span>My Expertise</span>
            </div>
            
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              What I 
              <span className="ml-3 text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text">
                Do
              </span>
            </h2>
            
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            
            <p className="max-w-3xl mx-auto mt-8 text-xl leading-relaxed text-gray-600">
              Specialized in modern web technologies and full-stack development with a passion for creating 
              innovative digital solutions
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ease-out h-full ${
                animatedCards.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              {/* Card */}
              <div className="relative flex flex-col h-full p-8 overflow-hidden transition-all duration-500 border border-gray-100 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:-translate-y-3 hover:border-transparent">
                
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon Container */}
                <div className={`relative w-16 h-16 ${iconBackgrounds[index]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                  <span className="text-3xl filter group-hover:brightness-110">
                    {skill.icon}
                  </span>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="flex-shrink-0 mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-gray-800">
                    {skill.title}
                  </h3>
                  
                  <p className="flex-grow leading-relaxed text-gray-600 transition-colors group-hover:text-gray-700">
                    {skill.description}
                  </p>
                </div>
                
                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradientColors[index]} opacity-10 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`}></div>
                
                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientColors[index]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl p-8 mx-auto border border-gray-100 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Ready to bring your ideas to life?
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              Let's collaborate and create something amazing together using these technologies
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-xl bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:shadow-2xl hover:-translate-y-1 group"
            >
              <span>Start a Project</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
