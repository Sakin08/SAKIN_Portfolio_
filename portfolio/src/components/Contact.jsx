import React from "react";
import { motion } from "framer-motion";

// LocationIcon is kept as it's relevant to the address in the Contact section
const LocationIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13401 2 5 5.13401 5 9C5 13.25 12 22 12 22C12 22 19 13.25 19 9C19 5.13401 15.866 2 12 2ZM7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9C17 11.38 14.213 15.319 12 18.132C9.78697 15.319 7 11.38 7 9ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" />
  </svg>
);


const PhoneIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.69.59 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.49.59 3.69a1 1 0 01-.24 1.01l-2.2 2.2z" />
  </svg>
);

const EmailIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
  </svg>
);



const Contact = () => {
  // Framer Motion Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.98 },
  };

  const addressVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };





  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Use environment variable for access key
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "49c4736c-0179-4719-b3a7-1abb118c3f9f";
    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully! I'll get back to you soon.");
        event.target.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };



  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background decorative shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
        initial={{ y: -50, x: -50, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
        initial={{ y: 50, x: 50, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.3 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="relative z-10 max-w-xl mx-auto w-full bg-white rounded-xl shadow-2xl p-8 md:p-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center relative pb-2"
          variants={itemVariants}
        >
          Get In Touch
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
        </motion.h2>
        <motion.p className="text-lg text-gray-700 text-center mb-8" variants={itemVariants}>
          Have a question or a project in mind? I'd love to hear from you.
          Let's connect and create something amazing!
        </motion.p>

        <form onSubmit={onSubmit} action="https://getform.io/f/your-form-endpoint" method="POST" className="space-y-6">
          {/* IMPORTANT: Replace "https://getform.io/f/your-form-endpoint" with your actual form service endpoint */}
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-gray-800 placeholder-gray-500"
            required
            variants={formItemVariants}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-gray-800 placeholder-gray-500"
            required
            variants={formItemVariants}
          />
          <motion.textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y transition-all duration-200 text-gray-800 placeholder-gray-500"
            required
            variants={formItemVariants}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out transform"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Send Message
          </motion.button>
        </form>

        {/* The social media links and general email have been moved to the Footer component */}

        <motion.div
          className="mt-8 text-center text-gray-700 space-y-4"
          variants={addressVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Email Line */}
          <div className="flex items-center justify-center text-gray-600">
            <EmailIcon className="h-6 w-6 mr-2" />
            <span>www.mdsrsakin2001@gmail.com</span>
          </div>

          {/* Location and Phone Line */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 text-gray-600">
            <div className="flex items-center justify-center">
              <LocationIcon className="h-6 w-6 mr-2" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center justify-center">
              <PhoneIcon className="h-6 w-6 mr-2" />
              <span>+880 1823-024067</span> {/* Replace with your number */}
            </div>
          </div>
        </motion.div>




      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.4, 0.4, 0.8);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;
