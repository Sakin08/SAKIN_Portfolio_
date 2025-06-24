import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
    hover: { scale: 1.05, rotate: 2, transition: { type: "spring", stiffness: 300 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.95 },
  };

  const scrollToSection = (id, offset = -70) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center py-20 px-4"
    >
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-4 md:px-8 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Text Content */}
        <div className="order-2 md:order-1 max-w-xl mx-auto md:mx-0">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 relative pb-2"
            variants={textVariants}
          >
            About Me
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-blue-600 rounded-full"></span>
          </motion.h2>

          <motion.p className="text-lg text-gray-700 leading-relaxed mb-4" variants={textVariants}>
            Hi, I'm <span className="font-semibold text-indigo-700">MD. Sohanoor Rahaman Sakin</span>, a Computer Science and Engineering student at Shahjalal University of Science and Technology (SUST).
          </motion.p>

          <motion.p className="text-lg text-gray-700 leading-relaxed mb-4" variants={textVariants}>
            I’m currently learning and improving my skills in programming and web development. I have basic knowledge of <span className="text-purple-700 font-medium">C, C++, Java, and Python</span>, and I enjoy exploring how technology can solve real-world problems.
          </motion.p>

          <motion.p className="text-lg text-gray-700 leading-relaxed mb-4" variants={textVariants}>
            I'm also learning full-stack web development using tools like <span className="font-medium text-purple-700">HTML, CSS, JavaScript, React, Node.js, and MongoDB</span>. I enjoy building modern, efficient, and user-friendly applications.
          </motion.p>

          <motion.p className="text-lg text-gray-700 leading-relaxed mb-4" variants={textVariants}>
            I love to collaborate, learn continuously, and take on new challenges. My interests include <span className="text-indigo-700 font-medium">problem-solving, making MERN projects</span>.
          </motion.p>

          <motion.p className="text-lg text-gray-700 leading-relaxed mb-4" variants={textVariants}>
            Currently, I'm working on a Doctors Appointment system booking web app project and exploring more about APIs, authentication, and scalable frontend design.
          </motion.p>

          <motion.button
            onClick={() => scrollToSection("projects")}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out transform"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View My Work
          </motion.button>
        </div>

        {/* Image Content */}
        <motion.div
          className="order-1 md:order-2 flex justify-center p-4"
          variants={imageVariants}
          whileHover="hover"
        >
          <img
            src={profile}
            alt="MD. Sohanoor Rahaman Sakin"
            className="rounded-3xl shadow-2xl object-cover w-full max-w-xs md:max-w-md h-auto border-8 border-indigo-500 transform transition-all duration-300 ease-in-out"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
