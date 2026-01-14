import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-purple-400">Ritu <span className="text-white">Gupta</span></h1>
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

