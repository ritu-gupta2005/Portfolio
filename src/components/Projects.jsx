import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio website built with React and Tailwind CSS showcasing projects and skills.",
    },
    {
      title: "E-Commerce App",
      desc: "Frontend online shopping platform designed using React and modern UI components.",
    },
    {
      title: "Chat Application",
      desc: "A real-time chat system built using Java Spring Boot and WebSocket.",
    },
    {
      title: "ATM Machine",
      desc: "Java project implementing OOP concepts for simulating ATM operations.",
    },
    {
      title: "CPU Scheduling Algorithms",
      desc: "Java project demonstrating FCFS, SJF, and Priority Scheduling techniques.",
    },
  ];

  return (
    <section id="projects" className="bg-gray-800 text-white px-10 py-16">
      <h2 className="text-3xl font-bold text-purple-400 mb-10">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition duration-300 w-full sm:w-80"
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-300">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
