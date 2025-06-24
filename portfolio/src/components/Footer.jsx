import React from "react";
import {
  Linkedin,
  Github,
  Twitter,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";

const WhatsappIcon = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 32 32"
    fill="currentColor"
  >
    <path d="M16.002 2.999C8.82 2.999 2.998 8.82 2.998 15.998a13.93 13.93 0 0 0 2.033 7.19l-1.395 5.104 5.244-1.376a13.9 13.9 0 0 0 7.12 1.913h.002c7.18 0 13.002-5.822 13.002-13 0-7.18-5.822-13.002-13.002-13.002Zm.038 23.682c-2.343 0-4.64-.627-6.649-1.814l-.477-.281-3.107.816.827-3.025-.31-.496a10.94 10.94 0 0 1-1.687-5.853c0-6.057 4.931-10.989 10.99-10.989 2.936 0 5.698 1.145 7.773 3.219a10.933 10.933 0 0 1 3.22 7.77c0 6.057-4.932 10.989-10.99 10.989Zm5.846-8.25c-.32-.16-1.884-.93-2.178-1.036-.293-.107-.507-.16-.72.16-.213.32-.827 1.036-1.015 1.25-.187.213-.373.24-.693.08-.32-.16-1.349-.498-2.57-1.589-.95-.846-1.59-1.893-1.776-2.213-.187-.32-.02-.494.14-.654.143-.143.32-.373.48-.56.16-.187.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.38-.26-.627-.527-.54-.72-.547h-.6c-.213 0-.56.08-.853.4-.293.32-1.12 1.096-1.12 2.674 0 1.578 1.146 3.104 1.306 3.32.16.213 2.254 3.44 5.454 4.813.763.333 1.357.533 1.82.68.763.24 1.457.213 2.003.133.61-.093 1.884-.773 2.15-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
  </svg>
);

const TelegramIcon = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.43 7.33l-1.63 7.7c-.17.78-.63.98-1.3.66l-2.45-1.83-1.18 1.13c-.13.13-.26.16-.43.16l.18-2.67 4.55-4.12c.19-.17.07-.27-.17-.1L8 13.06l-2.38-.73c-.63-.19-.64-.67.14-.9L14.43 8.1c.5-.18.94.13.84.81z" />
  </svg>
);

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white px-6 py-8 rounded-t-3xl shadow-xl relative overflow-hidden">
      {/* subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-white"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left z-10">
        {/* Left Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">MD. SAKIN</h3>
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} MD. SAKIN. All rights reserved.
          </p>
        </div>

        {/* Middle Section - Quick Links in 2 columns */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Right Section - Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect With Me</h4>
          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            {[
              {
                href: "https://www.linkedin.com/in/md-sohanoor-rahaman-sakin-7006b824b/",
                label: "LinkedIn",
                icon: <Linkedin size={24} />,
                colorHover: "hover:text-blue-500",
              },
              {
                href: "https://github.com/Sakin08",
                label: "GitHub",
                icon: <Github size={24} />,
                colorHover: "hover:text-purple-500",
              },
              {
                href: "https://www.facebook.com/sakin44/",
                label: "Facebook",
                icon: <Facebook size={24} />,
                colorHover: "hover:text-blue-600",
              },
              {
                href: "https://www.instagram.com/sr.sakin/?hl=en",
                label: "Instagram",
                icon: <Instagram size={24} />,
                colorHover: "hover:text-pink-500",
              },
              {
                href: "https://wa.me/01823024067",
                label: "WhatsApp",
                icon: <WhatsappIcon className="h-6 w-6" />,
                colorHover: "hover:text-green-500",
              },
              {
                href: "https://t.me/+8801823024067",
                label: "Telegram",
                icon: <TelegramIcon className="h-6 w-6" />,
                colorHover: "hover:text-blue-400",
              },
              {
                href: "mailto:your.email@example.com",
                label: "Email",
                icon: <Mail size={24} />,
                colorHover: "hover:text-red-500",
              },
              {
                href: "https://x.com/sakin_sr",
                label: "Twitter",
                icon: <Twitter size={24} />,
                colorHover: "hover:text-sky-400",
              },
            ].map(({ href, label, icon, colorHover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-gray-300 transition-colors duration-300 p-2 rounded-md ${colorHover} hover:bg-white/10`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
