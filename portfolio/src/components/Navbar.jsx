import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==== ICONS ====
const BarsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const TimesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const GithubIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.682-.217.682-.483 
    0-.237-.008-.867-.013-1.702-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.909-.623.069-.61.069-.61 
    1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.829.091-.645.356-1.087.654-1.334-2.22-.253-4.555-1.113-4.555-4.93 
    0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.025A9.435 9.435 0 0112 6.844c.85.004 1.705.115 
    2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.698 1.028 1.591 1.028 2.682 
    0 3.827-2.338 4.673-4.562 4.922.357.309.676.92.676 1.855 0 1.334-.012 2.41-.012 2.727 0 .268.18.579.688.482C21.137 20.198 
    24 16.442 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 
    0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 
    0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 
    1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
    0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.784 
    7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

// ==== SCROLL FUNCTION ====
const scrollToSection = (id, offset = -70) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

// ==== ANIMATED NAME ====
const AnimatedName = () => {
  const name = "MD. SAKIN".split("");

  return (
    <div
      onClick={() => scrollToSection("home")}
      className="flex space-x-1 cursor-pointer select-none"
    >
      {name.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, type: "spring", stiffness: 120 }}
          whileHover={{
            scale: 1.2,
            color: "#6366f1",
            textShadow: "0 0 6px rgba(99, 102, 241, 0.4)",
          }}
          className="text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};


// ==== NAVBAR ====
const Navbar = () => {
  const navItems = ["home", "about", "projects", "skills", "contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const githubUrl = "https://github.com/Sakin08";
  const linkedinUrl = "https://www.linkedin.com/in/md-sohanoor-rahaman-sakin-7006b824b/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map(item => document.getElementById(item));
      const scrollPosition = window.scrollY + 71;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg ${
        isScrolled ? "bg-white/70 shadow-lg py-2" : "bg-white/30 py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Animated Name */}
        <AnimatedName />

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <button
                onClick={() => scrollToSection(item)}
                className={`capitalize text-gray-800 text-lg font-medium relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full hover:text-blue-600 transition-transform duration-200 ease-in-out ${
                  activeSection === item ? "text-blue-600 before:w-full" : ""
                }`}
              >
                {item}
              </button>
            </motion.li>
          ))}
          <li className="ml-6 flex space-x-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              <GithubIcon />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              <LinkedinIcon />
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 text-2xl focus:outline-none">
            {isOpen ? <TimesIcon /> : <BarsIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-lg absolute top-full left-0 w-full py-4"
          >
            {navItems.map((item) => (
              <li key={item} className="text-center py-3">
                <button
                  onClick={() => {
                    scrollToSection(item);
                    setIsOpen(false);
                  }}
                  className={`capitalize text-gray-800 text-lg font-medium hover:text-blue-600 transition duration-200 ${
                    activeSection === item ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
            <li className="flex justify-center space-x-6 py-4">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-8 w-8 text-gray-700 hover:text-blue-600" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-8 w-8 text-gray-700 hover:text-blue-600" />
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
