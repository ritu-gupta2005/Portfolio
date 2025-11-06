import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white px-10 py-20">
     <h2 className="text-3xl font-bold text-purple-400 mb-6">Contact Me</h2>

      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Ritu Gupta"
          className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-purple-500"
        />
        <input
          type="email"
          placeholder="ritu42700@gmail.com"
          className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-purple-500"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-purple-500"
        ></textarea>
        <button className="bg-purple-500 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
