

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-purple-400">
          Ritu <span className="text-white">Gupta</span>
        </h1>

        <i
          className={`fa ${menuOpen ? "fa-times" : "fa-bars"} md:hidden text-2xl cursor-pointer`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
        <ul className="hidden md:flex space-x-6">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:text-purple-400">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {menuOpen && (
        <ul className="md:hidden bg-gray-800 px-6 py-6 space-y-5 text-lg">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-purple-400"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
