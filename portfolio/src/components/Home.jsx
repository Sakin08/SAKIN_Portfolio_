import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const scrollToSection = (id, offset = -70) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Home = () => {
  const roles = ["CSE Student and", "Full Stack Web Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenRoles = 1500;

  useEffect(() => {
    let timeout;
    const currentFullRole = roles[currentRoleIndex];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
    hover: { scale: 1.05, rotate: 2, transition: { type: "spring", stiffness: 300 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Decorative Shapes */}
      <motion.div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
        initial={{ y: -50, x: -50, opacity: 0 }} animate={{ y: 0, x: 0, opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
      <motion.div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
        initial={{ y: 50, x: 50, opacity: 0 }} animate={{ y: 0, x: 0, opacity: 0.3 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
      <motion.div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
        initial={{ y: 30, x: -30, opacity: 0 }} animate={{ y: 0, x: 0, opacity: 0.3 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-y-8 md:gap-x-8 lg:gap-x-4 xl:gap-x-2">
        {/* Text */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex-1 text-center md:text-left space-y-4">
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-indigo-700 font-semibold mb-2">Hi, my name is</motion.p>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            MD. SOHANOOR RAHAMAN <span className="text-purple-700">SAKIN</span>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-semibold text-gray-700 min-h-[3rem]">
            I'm a <span className="text-pink-600 font-bold tracking-wide">{displayedRole}</span>
            <span className="inline-block w-1 h-8 bg-pink-600 ml-1 align-bottom animate-blink"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 pt-2">
            Passionate about building innovative web applications from front to back. I love to create efficient, scalable, and user-friendly solutions.
          </motion.p>
          <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <motion.button onClick={() => scrollToSection("projects")} className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out transform"
              variants={buttonVariants} whileHover="hover" whileTap="tap">
              View My Work
            </motion.button>
            <motion.a href="https://drive.google.com/drive/u/0/folders/1ombUDLQNjuZcMMupRx_ZPei8iay_9xF-" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-xl shadow-lg hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-in-out transform flex items-center justify-center"
              variants={buttonVariants} whileHover="hover" whileTap="tap">
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div className="flex-1 flex justify-center md:justify-end" variants={imageVariants} initial="hidden" animate="visible" whileHover="hover">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-indigo-500 shadow-xl bg-gradient-to-br from-indigo-200 to-purple-200 p-1 flex items-center justify-center">
            <img src={profile} alt="Md Sohanoor Rahaman Sakin" className="w-full h-full object-cover rounded-full" draggable={false} />
            <div className="absolute inset-0 rounded-full ring-4 ring-indigo-400 ring-opacity-50 animate-pulse-slow"></div>
          </div>
        </motion.div>
      </div>

      {/* Global animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite cubic-bezier(0.6, 0.4, 0.4, 0.8); }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.03); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s infinite ease-in-out; }

        @keyframes blink {
          50% { border-color: transparent; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }
      `}</style>
    </section>
  );
};

export default Home;
