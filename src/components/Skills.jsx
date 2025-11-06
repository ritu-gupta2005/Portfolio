import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    " Basic Knowledge of React",
    "Tailwind CSS",
    "MySQL",
    "C++",
    "Java"
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white px-10 py-16">
      <h2 className="text-3xl font-bold text-purple-400 mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-800 px-6 py-4 rounded-xl text-center hover:bg-purple-600 transition duration-300 shadow-md hover:shadow-purple-500/50"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;




