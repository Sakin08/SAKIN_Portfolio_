import React from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  skillCardVariants,
  textReveal,
  fadeInUp,
  viewportConfig
} from "../utils/animations";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },
    {
      title: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Python", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "REST APIs", level: "Advanced", icon: "🔗" },
        { name: "Socket.IO", level: "Intermediate", icon: "🔌" }
      ]
    },
    {
      title: "Mobile Development",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React Native", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Kotlin", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
        { name: "Android SDK", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
        { name: "SQLite", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" }
      ]
    },
    {
      title: "Tools & Technologies",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", level: "Advanced", icon: "🚀" },
        { name: "Figma", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Vercel", level: "Advanced", icon: "▲" }
      ]
    },
    {
      title: "Programming Languages",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "JavaScript", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C++", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Java", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Kotlin", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert": return "text-green-400 bg-green-500/10 border-green-500/30";
      case "Advanced": return "text-blue-400 bg-blue-500/10 border-blue-500/30";
      case "Intermediate": return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
      default: return "text-gray-400 bg-gray-500/10 border-gray-500/30";
    }
  };

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
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
              Technical
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            variants={fadeInUp}
          >
            A comprehensive toolkit for building modern, scalable applications
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            variants={fadeInUp}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
              variants={skillCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={viewportConfig}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                  {category.title}
                </h3>
                <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full opacity-30`} />
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={viewportConfig}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3">
                      {skill.icon.startsWith('http') ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "https://placehold.co/32x32?text=?";
                          }}
                        />
                      ) : (
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                      )}
                      <span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>

                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getLevelColor(skill.level)} transition-all duration-300`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="text-gray-400 text-lg mb-6">
            Always learning and exploring new technologies to stay at the forefront of development
          </p>

          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="mr-2">🚀</span>
            Continuously Growing & Learning
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;