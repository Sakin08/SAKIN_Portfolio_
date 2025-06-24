import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen bg-gray-100 flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 inline-block pb-1">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hello! I'm Md. Sohanoor Rahaman Sakin, a passionate Full Stack Developer with a knack for creating dynamic and responsive web applications. My journey in tech started with a curiosity about how digital experiences are built, and it quickly evolved into a dedication to crafting robust and scalable solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I specialize in both front-end and back-end development, using technologies like React, Node.js, Express, and databases like MongoDB and PostgreSQL. I thrive on solving complex problems and continuously learning new technologies to stay ahead in the ever-evolving web development landscape.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I'm not coding, you can find me exploring new programming concepts, contributing to open-source projects, or enjoying a good book. I'm always eager to collaborate on exciting projects and contribute to innovative teams.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="https://placehold.co/400x400/CCCCCC/FFFFFF?text=Your+Photo"
            alt="MD.SAKIN"
            className="rounded-full shadow-xl object-cover w-64 h-64 md:w-80 md:h-80 border-4 border-blue-500 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
