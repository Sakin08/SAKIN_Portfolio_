import React from 'react';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react'; // Importing icons from Lucide

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 rounded-t-xl shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        {/* Left Section: Copyright & Name */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">MD. SAKIN</h3>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MD. SAKIN. All rights reserved.
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-md p-1">Home</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-md p-1">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-md p-1">Portfolio</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-md p-1">Contact</a>
          </nav>
        </div>

        {/* Right Section: Social Media */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-3">Connect With Me</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              aria-label="Twitter Profile"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              aria-label="Email Me"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
