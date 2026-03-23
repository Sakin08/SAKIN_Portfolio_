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
            I'm a <span className="font-semibold text-indigo-700">Computer Science Engineering student</span> at Shahjalal University of Science and Technology (SUST) with a passion for building scalable web applications and solving complex problems through code.
          </motion.p>

          <motion.p className="text-lg text-gray-700 leading-relaxed mb-4" variants={textVariants}>
            Specializing in <span className="text-purple-700 font-medium">full-stack development</span> with the MERN stack, I've built 10+ projects including social platforms, healthcare systems, and mobile applications as learning projects and portfolio demonstrations.
          </motion.p>

          <motion.p className="text-lg text-gray-700 leading-relaxed mb-4" variants={textVariants}>
            My technical expertise spans <span className="font-medium text-purple-700">React, Node.js, MongoDB, React Native, and Kotlin</span>. I'm particularly interested in creating user-centered solutions with clean, maintainable code and modern development practices.
          </motion.p>

          <motion.div className="bg-indigo-50 p-4 rounded-lg mb-6" variants={textVariants}>
            <h3 className="font-semibold text-indigo-900 mb-2">Currently Working On:</h3>
            <p className="text-indigo-700">Expanding SUST Connect platform and exploring advanced React patterns, microservices architecture, and cloud deployment strategies.</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4 mb-6" variants={textVariants}>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-blue-700">Projects Built</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">3+</div>
              <div className="text-sm text-green-700">Years Learning</div>
            </div>
          </motion.div>

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