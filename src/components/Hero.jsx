import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white px-10 pt-20"
    >
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-purple-400">
            <Typewriter
              words={["Ritu Gupta"]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <h3 className="text-2xl font-semibold mb-6 text-gray-200">
          <Typewriter
            words={[
              "Software Developer",
              "Java Enthusiast",
              "Problem Solver",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>

        <p className="text-gray-300 mb-8 max-w-md">
        I am a passionate Java and Web Design enthusiast who loves building clean, responsive, and user-friendly applications.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="border border-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="/rituimg.jpeg"
          alt="Profile"
          className="w-90 h-90 rounded-full border-4 border-purple-500 shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default Hero;


