import React from "react";

// Inline SVG for icons
const MailIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 6v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4m0-7V7a2 2 0 012-2h10a2 2 0 012 2v1" />
  </svg>
);

const GithubIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.682-.217.682-.483 0-.237-.008-.867-.013-1.702-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.909-.623.069-.61.069-.61 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.829.091-.645.356-1.087.654-1.334-2.22-.253-4.555-1.113-4.555-4.93 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.025A9.435 9.435 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.827-2.338 4.673-4.562 4.922.357.309.676.92.676 1.855 0 1.334-.012 2.41-.012 2.727 0 .268.18 
           .579.688.482C21.137 20.198 24 16.442 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.784 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-xl mx-auto w-full bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center border-b-4 border-blue-600 inline-block pb-1">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Feel free to reach out to me for any questions or collaborations.
          You can send me a message directly below or connect with me on social media.
        </p>

        <form action="https://getform.io/f/your-form-endpoint" method="POST" className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y transition-all duration-200"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md
                       hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-6 mt-8">
          <a href="mailto:your_email@example.com"
             className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-4xl">
            <MailIcon className="h-10 w-10" />
          </a>
          <a href="https://github.com/Sakin08" target="_blank" rel="noopener noreferrer"
             className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-4xl">
            <GithubIcon className="h-10 w-10" />
          </a>
          <a href="https://www.linkedin.com/in/md-sohanoor-rahaman-sakin-7006b824b/" target="_blank" rel="noopener noreferrer"
             className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-4xl">
            <LinkedinIcon className="h-10 w-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
