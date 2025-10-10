import { skills } from "../data/skills";

const Skills = () => (
  <section id="skills" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r from-indigo-500 to-purple-600 after:mx-auto after:mt-3">
        What I Do
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:-translate-y-2 transition hover:border-indigo-500 hover:shadow-lg"
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {skill.title}
            </h3>
            <p className="text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
