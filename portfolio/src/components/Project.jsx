import React from "react";

// Inline SVG for icons
const GithubIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.682-.217.682-.483 0-.237-.008-.867-.013-1.702-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.909-.623.069-.61.069-.61 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.829.091-.645.356-1.087.654-1.334-2.22-.253-4.555-1.113-4.555-4.93 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.025A9.435 9.435 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.827-2.338 4.673-4.562 4.922.357.309.676.92.676 1.855 0 1.334-.012 2.41-.012 2.727 0 .268.18 
           .579.688.482C21.137 20.198 24 16.442 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
  </svg>
);

const PersonLinesIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M12 20.354v-8.204m0 0a4 4 0 01-4-4V7a4 4 0 014-4h.01M12 12a4 4 0 004-4V7a4 4 0 00-4-4h-.01" />
  </svg>
);

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment gateway integration.",
      image: "https://placehold.co/600x400/A0D9FF/000000?text=E-commerce+Project",
      github: "https://github.com/Sakin08/ecommerce-app",
      live: "https://your-ecommerce-live-link.com",
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A responsive task management application allowing users to create, update, and track tasks with drag-and-drop functionality.",
      image: "https://placehold.co/600x400/FFA0D9/000000?text=Task+App+Project",
      github: "https://github.com/Sakin08/task-manager",
      live: "https://your-task-app-live-link.com",
    },
    {
      id: 3,
      name: "Social Media Dashboard",
      description: "A dashboard to monitor social media metrics, built with React and integrating various APIs for data visualization.",
      image: "https://placehold.co/600x400/D9FFA0/000000?text=Social+Media+Project",
      github: "https://github.com/Sakin08/social-dashboard",
      live: "https://your-social-dashboard-live-link.com",
    },
  ];

  return (
    <section id="projects" className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center border-b-4 border-blue-600 inline-block pb-1">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-xl overflow-hidden
                                           transform hover:scale-105 transition-transform duration-300 ease-in-out
                                           hover:shadow-2xl">
              <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-around mt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md
                                hover:bg-gray-700 transition-colors duration-200">
                    <GithubIcon className="h-5 w-5" /> <span>Code</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md
                                hover:bg-blue-700 transition-colors duration-200">
                    <PersonLinesIcon className="h-5 w-5" /> <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
