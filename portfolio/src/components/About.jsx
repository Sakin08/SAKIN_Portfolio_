import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  textReveal,
  viewportConfig
} from "../utils/animations";
import profile from "../assets/profile.jpg";

const About = () => {
  const stats = [
    { number: "10+", label: "Projects Built", color: "from-blue-500 to-cyan-500" },
    { number: "3+", label: "Years Learning", color: "from-purple-500 to-pink-500" },
    { number: "5+", label: "Technologies", color: "from-green-500 to-emerald-500" },
    { number: "100%", label: "Commitment", color: "from-orange-500 to-red-500" }
  ];

  const highlights = [
    {
      icon: "🎓",
      title: "Computer Science Student",
      description: "Studying at Shahjalal University of Science and Technology (SUST)"
    },
    {
      icon: "💻",
      title: "Full-Stack Developer",
      description: "Specializing in MERN stack with modern development practices"
    },
    {
      icon: "🚀",
      title: "Problem Solver",
      description: "Building solutions that make a real impact on users' lives"
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={textReveal}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            variants={fadeInUp}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Content */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeInLeft}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Building the Future, One Line of Code at a Time
              </h3>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-blue-400 font-semibold">Computer Science Engineering student</span> at
                  Shahjalal University of Science and Technology (SUST) with a passion for creating
                  scalable web applications and solving complex problems through elegant code.
                </p>

                <p>
                  Specializing in <span className="text-purple-400 font-semibold">full-stack development</span> with
                  the MERN stack, I've built 10+ projects including social platforms, healthcare systems,
                  and mobile applications that demonstrate my commitment to quality and innovation.
                </p>

                <p>
                  My technical expertise spans <span className="text-green-400 font-semibold">React, Node.js, MongoDB,
                    React Native, and Kotlin</span>. I'm particularly interested in creating user-centered
                  solutions with clean, maintainable code and modern development practices.
                </p>
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6"
              variants={fadeInLeft}
            >
              <h4 className="text-xl font-semibold text-blue-400 mb-3 flex items-center">
                <span className="mr-2">🎯</span>
                Currently Working On
              </h4>
              <p className="text-gray-300">
                Expanding SUST Connect platform and exploring advanced React patterns,
                microservices architecture, and cloud deployment strategies.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={fadeInLeft}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Work
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Image & Highlights */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Profile Image */}
            <motion.div
              className="relative mx-auto max-w-md"
              variants={fadeInRight}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 scale-105" />

              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-2xl">
                <img
                  src={profile}
                  alt="MD. Sohanoor Rahaman Sakin"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  draggable={false}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-2xl" />
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="grid gap-4"
              variants={staggerContainer}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                  variants={fadeInRight}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;