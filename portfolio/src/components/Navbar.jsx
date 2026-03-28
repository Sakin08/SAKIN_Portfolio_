import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItemHover } from "../utils/animations";

// Social Icons
const GithubIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionChange);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50"
        : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            variants={navItemHover}
            initial="rest"
            whileHover="hover"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              MD.SAKIN
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${activeSection === item.id
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                    }`}
                  variants={navItemHover}
                  initial="rest"
                  whileHover="hover"
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20"
                      layoutId="activeTab"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://github.com/Sakin08"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200 border border-gray-600/50 hover:border-gray-500"
              variants={navItemHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <GithubIcon className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/md-sohanoor-rahaman-sakin-7006b824b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200 border border-gray-600/50 hover:border-blue-500/50"
              variants={navItemHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <LinkedInIcon className="h-5 w-5" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <motion.span
                  className="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 0 : -8
                  }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1
                  }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? 0 : 8
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${activeSection === item.id
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Mobile Social Links */}
              <motion.div
                className="flex gap-4 px-3 py-4 border-t border-gray-700/50 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <a
                  href="https://github.com/Sakin08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200 border border-gray-600/50 hover:border-gray-500"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/md-sohanoor-rahaman-sakin-7006b824b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200 border border-gray-600/50 hover:border-blue-500/50"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;