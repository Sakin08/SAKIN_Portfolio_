import { assets } from "../assets";

// Inline SVG Icons
const GithubIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504..."
      clipRule="evenodd"
    />
  </svg>
);

const PersonLinesIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292..." />
  </svg>
);

// Component
const Project = () => {
  const projects = [
    {
      id: 1,
      name: "SUST Connect",
      description:
        "A comprehensive campus social networking and management platform with secure JWT authentication, real-time messaging, social networking, campus marketplace, event management, food ordering, blood donation network, digital election system, and study groups.",
      image: "/sustconnect.png",
      github: "https://github.com/Sakin08/sust-connect", // Update with actual repo URL
      live: "https://sust-connect.vercel.app/", // Update with actual live URL
      tech: "React 19 • Node.js • Express • MongoDB • Socket.IO • Tailwind CSS • Cloudinary"
    },
    {
      id: 2,
      name: "Medicare - Doctor's Appointment Booking System ",
      description:
        "A full-featured appointment booking system for doctors and patients with scheduling, notifications, and patient management.",
      image: "/medicare.png",
      github: "https://github.com/Sakin08/Doctors-Appointment-Booking-system",
      live: "https://medicare-two-rosy.vercel.app/",
    },
    {
      id: 3,
      name: "Math Game App (Kotlin)",
      description: "A fun and educational math game app for primary school students built using Kotlin. Includes addition, subtraction, and multiplication challenges with scoring.",
      image: "https://i.postimg.cc/hPMwF45n/photo-2025-06-25-12-14-36.jpg",
      github: "https://github.com/Sakin08/Math-Game", // Replace with actual repo if different
      live: "https://drive.google.com/drive/u/0/folders/1T4k7SpmQfL5B2ffbfYfmixWVrCAClrnr",
    },

    {
      id: 4,
      name: "To-Do List App (Kotlin)",
      description: "A simple and intuitive To-Do list Android app built using Kotlin. Features include task creation, deletion, completion toggling, and persistent local storage.",
      image: assets.todolist, // Or replace with a real screenshot later
      github: "https://github.com/Sakin08/To-Do-List", // Update if different
      live: "https://drive.google.com/drive/u/0/folders/1xI3QK2TBbC-tojB8d0nebubm8MeNuqG7",
    },
    {
      id: 5,
      name: "Matrix Calculator",
      description:
        "A C++ terminal-based calculator supporting all essential matrix operations like addition, multiplication, inverse, and determinant.",
      image: assets.matrix,
      github: "https://github.com/Sakin08/Matrix-Calculator",
      live: "https://github.com/Sakin08/Matrix-Calculator", // leave empty or add a demo link if available
    },


    {
      id: 6,
      name: "Netflix front page Clone",
      description:
        "A static front page of Netflix built using HTML and CSS, and visually similar to the original.",
      image: assets.netflix,
      github: "https://github.com/Sakin08/NETFLIX_CLONE",
      live: "https://netflix-clone-one-livid.vercel.app/",
    },

    {
      id: 7,
      name: "Amazon front page Clone",
      description:
        "A static front page of Amazon built using HTML and CSS, mimicking the layout and design.",
      image: assets.amazon,
      github: "https://github.com/Sakin08/Amazon_Fornt_page_clone",
      live: "https://amazon-fornt-page-clone.vercel.app/",
    },

    {
      id: 8,
      name: "Profile Card",
      description:
        "A clean and modern personal profile card with social links and contact information built using HTML and CSS.",
      image: assets.profilecard, // ✅ Correct
      github: "https://github.com/Sakin08/PROFILE_CARD",
      live: "https://profile-card-ten-xi.vercel.app/",
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
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
            >
              <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-around mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200"
                  >
                    <GithubIcon className="h-5 w-5" /> <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
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
