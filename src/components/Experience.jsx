import React from "react";

const Experience = () => {
  const experiences = [

    {
      
      desc: " Fresher i Worked on small projects, enhanced frontend and Create Java Project.",
    },
  ];

  return (
    <section id="experience" className="bg-gray-900 text-white px-10 py-16">
      <h2 className="text-3xl font-bold text-purple-400 mb-10">Experience</h2>

      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-300">
              {exp.role}
            </h3>
            <p className="text-gray-400 italic mb-2">
              {exp.company} • {exp.duration}
            </p>
            <p className="text-gray-300">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

    

