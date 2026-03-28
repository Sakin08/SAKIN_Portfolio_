import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  heroTextVariants,
  fadeInUp,
  staggerContainer,
  buttonHover,
  backgroundVariants
} from "../utils/animations";
import profile from "../assets/profile.jpg";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = ["Full Stack Developer", "MERN Stack Specialist", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let timeout;
    const currentFullRole = roles[currentRoleIndex];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenRoles = 2000;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentFullRole.substring(0, displayedRole.length - 1));
        if (displayedRole.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedRole(currentFullRole.substring(0, displayedRole.length + 1));
        if (displayedRole.length === currentFullRole.length) {
          timeout = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, currentRoleIndex, roles]);

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
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-40"
        variants={backgroundVariants}
        animate="animate"
      />

      {/* Cursor Spotlight Effect */}
      <div
        className="absolute pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6"
              variants={heroTextVariants}
              custom={0}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Available for Opportunities
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-lg md:text-xl text-gray-400 font-medium mb-4"
              variants={heroTextVariants}
              custom={1}
            >
              👋 Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={heroTextVariants}
              custom={2}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                MD. Sohanoor
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Rahaman Sakin
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-8 min-h-[3rem]"
              variants={heroTextVariants}
              custom={3}
            >
              <span className="text-blue-400">{displayedRole}</span>
              <span className="inline-block w-1 h-8 bg-blue-400 ml-1 animate-pulse" />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed"
              variants={heroTextVariants}
              custom={4}
            >
              Computer Science student at SUST, building scalable web applications with{" "}
              <span className="text-blue-400 font-semibold">React</span>,{" "}
              <span className="text-green-400 font-semibold">Node.js</span>, and{" "}
              <span className="text-purple-400 font-semibold">MongoDB</span>.
              Passionate about creating efficient, user-centered solutions.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start"
              variants={heroTextVariants}
              custom={5}
            >
              {["React", "Node.js", "MongoDB", "JavaScript", "Python", "Tailwind CSS"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={heroTextVariants}
              custom={6}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                View My Work
              </motion.button>

              <motion.a
                href="https://drive.google.com/drive/u/0/folders/1ombUDLQNjuZcMMupRx_ZPei8iay_9xF-"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-400 transition-all duration-300 text-center"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 scale-110" />

              {/* Image Container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-700/50 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={profile}
                  alt="MD. Sohanoor Rahaman Sakin"
                  className="w-full h-full object-cover"
                  draggable={false}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-20 blur-xl"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center text-gray-400 cursor-pointer"
            onClick={() => scrollToSection("about")}
            whileHover={{ y: -5 }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-blue-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;