

import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateSkills(true), 600);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "JavaScript", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    { name: "React.js", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "Express.js", color: "bg-gray-100 text-gray-800 border-gray-200" },
    { name: "MongoDB", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    { name: "Supabase", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { name: "SQL", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
    { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800 border-cyan-200" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 rounded-full w-72 h-72 bg-blue-200/20 mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-indigo-200/20 mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-6xl px-6 mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-sm font-medium text-indigo-700 border rounded-full shadow-sm bg-white/80 backdrop-blur-sm border-indigo-200/50">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span>Get to know me</span>
            </div>
            
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              About 
              <span className="ml-3 text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text">
                Me
              </span>
            </h2>
            
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid items-start gap-12 lg:grid-cols-12">
          
          {/* Left Column - Description */}
          <div className="lg:col-span-7">
            <div className={`space-y-8 transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              
              {/* Professional Description */}
              <div className="p-8 border border-gray-100 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
                <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <div className="w-3 h-3 mr-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                  Professional Journey
                </h3>
                
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  <span className="font-semibold text-indigo-600">Driven IT undergraduate</span> in Computing and Information Systems, 
                  specializing in software development and web technologies including JavaScript, React.js, Node.js, Express.js, 
                  MongoDB, Supabase, SQL, and Tailwind CSS.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  <span className="font-semibold text-purple-600">Experienced in leading full-stack projects</span> and collaborating 
                  in team-driven environments. Passionate about building innovative, real-world IT solutions and continuously 
                  advancing technical expertise.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 text-white shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl">
                  <div className="mb-2 text-3xl font-bold">2+</div>
                  <div className="font-medium text-indigo-100">Years Learning</div>
                </div>
                <div className="p-6 text-white shadow-lg bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                  <div className="mb-2 text-3xl font-bold">4</div>
                  <div className="font-medium text-blue-100">Projects Built</div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="/Nethmi_Pramoddya_Software_Engineering_Intern.pdf"
                  download
                  className="inline-flex items-center px-8 py-4 space-x-3 font-semibold text-white transition-all duration-300 shadow-xl group bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CV</span>
                
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-5">
            <div className={`transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              
              <div className="sticky p-8 border border-gray-100 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl top-8">
                <h4 className="flex items-center mb-8 text-2xl font-bold text-gray-900">
                  <div className="w-3 h-3 mr-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  Technical Skills
                </h4>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`transform transition-all duration-500 ease-out ${
                        animateSkills 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 100 + 700}ms` }}
                    >
                      <div className={`group px-4 py-3 rounded-xl border-2 ${skill.color} hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default`}>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{skill.name}</span>
                          <div className="w-2 h-2 transition-opacity bg-current rounded-full opacity-60 group-hover:opacity-100"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-6 mt-8 border-t border-gray-200">
                  <div className="text-center">
                    <p className="mb-4 text-gray-600">Ready to collaborate?</p>
                    <a
                      href="#contact"
                      className="inline-flex items-center px-6 py-3 space-x-2 font-medium text-indigo-600 transition-all duration-300 border-2 border-indigo-300 rounded-lg hover:bg-indigo-50 hover:border-indigo-400"
                    >
                      <span>Let's Connect</span>
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
