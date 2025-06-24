import React from "react";

// Helper function for smooth scrolling (assuming it's in a shared utility or global scope)
const scrollToSection = (id, offset = -70) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const Home = () => {
  return (
    <section id="home" className="w-full h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-2">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          MD. SOHANOOR RAHAMAN <span className="text-purple-600">SAKIN</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-6">
          I'm a <span className="text-pink-500">Full Stack Developer.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Passionate about building innovative web applications from front to back.
          I love to create efficient, scalable, and user-friendly solutions.
        </p>
        <div>
          <button onClick={() => scrollToSection("projects")} className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700
                                transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            View Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
