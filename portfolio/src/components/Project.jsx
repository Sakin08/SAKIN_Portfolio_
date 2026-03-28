import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  projectCardVariants,
  textReveal,
  fadeInUp,
  buttonHover,
  viewportConfig
} from "../utils/animations";
import { projects, featuredProjects } from "../data/projects";
import ProjectModal from "./ProjectModal";

// Icons
const GithubIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project, onViewCaseStudy, index }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "Full Stack": return "from-blue-500 to-cyan-500";
      case "Mobile Development": return "from-purple-500 to-pink-500";
      case "Frontend": return "from-green-500 to-emerald-500";
      case "System Programming": return "from-orange-500 to-red-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <motion.div
      className="group bg-gray-800/30 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500"
      variants={projectCardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={viewportConfig}
      transition={{ delay: index * 0.1 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-sm font-medium rounded-full shadow-lg`}>
            {project.category}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-gray-900/80 text-white rounded-lg hover:bg-gray-800 transition-colors backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon className="h-4 w-4" />
            <span className="text-sm">Code</span>
          </motion.a>

          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-blue-600/80 text-white rounded-lg hover:bg-blue-700 transition-colors backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLinkIcon className="h-4 w-4" />
            <span className="text-sm">Live</span>
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-blue-400 font-medium text-sm mb-3">{project.tagline}</p>
          <p className="text-gray-400 line-clamp-2 leading-relaxed">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full border border-gray-600/50">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => onViewCaseStudy(project)}
            className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-300 hover:underline"
            whileHover={{ x: 5 }}
          >
            View Case Study →
          </motion.button>

          <div className="flex gap-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className="h-4 w-4" />
            </motion.a>

            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLinkIcon className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayProjects = showAll ? projects : featuredProjects;

  const handleViewCaseStudy = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
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
                Featured
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
              variants={fadeInUp}
            >
              A showcase of my technical skills through real-world applications,
              from full-stack web platforms to mobile solutions
            </motion.p>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              variants={fadeInUp}
            />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {displayProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewCaseStudy={handleViewCaseStudy}
                index={index}
              />
            ))}
          </motion.div>

          {/* Show More Button */}
          {!showAll && projects.length > featuredProjects.length && (
            <motion.div
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.button
                onClick={() => setShowAll(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                View All Projects ({projects.length - featuredProjects.length} more)
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Project;