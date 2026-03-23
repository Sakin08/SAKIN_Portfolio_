export const projects = [
  {
    id: 1,
    name: "SUST Connect",
    tagline: "Campus Social Networking & Management Platform",
    description:
      "A comprehensive platform connecting SUST students with social networking, marketplace, events, and academic features.",
    problem:
      "SUST students lacked a centralized platform for campus communication, event management, and academic collaboration.",
    solution:
      "Built a full-featured social platform with real-time messaging, marketplace, event management, and study groups.",
    image: "/sustconnect.png",
    github: "https://github.com/Sakin08/sust-connect",
    live: "https://sust-connect.vercel.app/",
    tech: [
      "React 19",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "Cloudinary",
    ],
    features: [
      "JWT Authentication & Authorization",
      "Real-time messaging with Socket.IO",
      "Campus marketplace with image uploads",
      "Event management system",
      "Blood donation network",
      "Digital election system",
      "Study groups and academic collaboration",
    ],
    impact: "Deployed and functional platform ready for campus adoption",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 2,
    name: "Medicare",
    tagline: "Doctor's Appointment Booking System",
    description:
      "A complete healthcare management system for booking appointments, managing patient records, and doctor schedules.",
    problem:
      "Patients struggled with manual appointment booking and doctors needed better schedule management.",
    solution:
      "Developed an automated booking system with calendar integration, notifications, and patient management.",
    image: "/medicare.png",
    github: "https://github.com/Sakin08/Doctors-Appointment-Booking-system",
    live: "https://medicare-two-rosy.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    features: [
      "Patient registration and profile management",
      "Doctor availability calendar",
      "Appointment booking with time slots",
      "Email notifications and reminders",
      "Admin dashboard for management",
      "Medical history tracking",
    ],
    impact:
      "Streamlined appointment process with intuitive user interface and automated scheduling",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    name: "SUST Election System",
    tagline: "Secure Digital Election Platform",
    description:
      "A secure online voting platform for university elections with multi-position voting and real-time results.",
    problem:
      "Traditional paper-based elections were time-consuming, prone to errors, and lacked transparency.",
    solution:
      "Created a secure digital platform with Google OAuth, real-time voting, and transparent result tracking.",
    image: "/election1.png",
    github:
      "https://github.com/Sakin08/SUST-Student-Election-Management-System",
    live: "https://sust-student-election-management-sy.vercel.app/",
    tech: [
      "React 18",
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      "Google OAuth authentication",
      "Hall-specific and university-wide elections",
      "Multi-position voting system",
      "Panel-based and independent candidates",
      "Real-time vote counting",
      "Secure ballot encryption",
      "Admin election management",
    ],
    impact:
      "Demonstrates secure voting system with modern authentication and real-time features",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 4,
    name: "Smart Attendance (Web)",
    tagline: "QR Code & GPS Attendance Tracking",
    description:
      "A comprehensive attendance system using QR codes and GPS verification for universities.",
    problem:
      "Manual attendance tracking was time-consuming and prone to proxy attendance issues.",
    solution:
      "Built a QR code-based system with GPS verification to ensure authentic attendance marking.",
    image: "/attendence-web.png",
    github: "https://github.com/Sakin08/Smart-Attendance-System",
    live: "https://smart-attendance-system-u5hv.vercel.app/",
    tech: [
      "React 18",
      "Node.js",
      "Express",
      "MongoDB",
      "Leaflet",
      "html5-qrcode",
      "Tailwind CSS",
    ],
    features: [
      "QR code generation for sessions",
      "GPS location verification",
      "Real-time attendance tracking",
      "Teacher dashboard for session management",
      "Student attendance history",
      "Location-based session restrictions",
      "Automated attendance reports",
    ],
    impact:
      "Efficient attendance system with GPS verification to prevent proxy attendance",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 5,
    name: "Smart Attendance (Mobile)",
    tagline: "Mobile App for Attendance Marking",
    description:
      "React Native mobile app complementing the web system for real-time attendance marking.",
    problem:
      "Students needed a mobile solution for quick and convenient attendance marking.",
    solution:
      "Developed a React Native app with QR scanning and GPS verification synchronized with the web backend.",
    image: "/attendence-app.png",
    github: "https://github.com/Sakin08/Smart-Attendance-App",
    live: "https://drive.google.com/drive/u/0/folders/1jZE3QClGqt7Jv7hMMb4_H4sdAJ49O416",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "QR code scanning with camera",
      "GPS location verification",
      "Real-time session validation",
      "Attendance history view",
      "Push notifications",
      "Offline capability",
      "Synchronized with web platform",
    ],
    impact:
      "Cross-platform mobile solution with seamless QR scanning and GPS integration",
    category: "Mobile Development",
    featured: true,
  },
  {
    id: 6,
    name: "Math Game App",
    tagline: "Educational Game for Primary Students",
    description:
      "An engaging math game app built with Kotlin to help primary school students practice arithmetic.",
    problem:
      "Primary students needed an engaging way to practice math skills outside the classroom.",
    solution:
      "Created a gamified learning experience with progressive difficulty and scoring system.",
    image: "/mathgame.jpeg",
    github: "https://github.com/Sakin08/Math-Game",
    live: "https://drive.google.com/drive/u/0/folders/1bYtwpBYg47_kr2LJBOy6jR3zlt6V5xe1",
    tech: ["Kotlin", "Android SDK", "SQLite"],
    features: [
      "Addition, subtraction, multiplication challenges",
      "Progressive difficulty levels",
      "Score tracking and achievements",
      "Colorful, kid-friendly interface",
      "Local data persistence",
      "Performance analytics",
    ],
    impact:
      "Engaging educational app with progressive difficulty and achievement system",
    category: "Mobile Development",
  },
  {
    id: 7,
    name: "To-Do List App",
    tagline: "Task Management Android App",
    description:
      "A simple and intuitive To-Do list Android app built using Kotlin with local storage.",
    problem:
      "Need for a simple, offline task management solution for daily productivity.",
    solution:
      "Built a clean Android app with task creation, completion tracking, and persistent storage.",
    image: "/todolist.png",
    github: "https://github.com/Sakin08/To-Do-List",
    live: "https://drive.google.com/drive/u/0/folders/1xI3QK2TBbC-tojB8d0nebubm8MeNuqG7",
    tech: ["Kotlin", "Android SDK", "SQLite"],
    features: [
      "Task creation and deletion",
      "Completion status toggling",
      "Persistent local storage",
      "Clean, intuitive interface",
      "Offline functionality",
    ],
    impact:
      "Simple yet effective task management solution with offline capability",
    category: "Mobile Development",
  },
  {
    id: 8,
    name: "Matrix Calculator",
    tagline: "C++ Mathematical Computing Tool",
    description:
      "A C++ terminal-based calculator supporting essential matrix operations for mathematical computing.",
    problem:
      "Need for a reliable tool to perform complex matrix calculations efficiently.",
    solution:
      "Developed a comprehensive C++ application with all major matrix operations.",
    image: "/matrix.webp",
    github: "https://github.com/Sakin08/Matrix-Calculator",
    live: "https://github.com/Sakin08/Matrix-Calculator",
    tech: ["C++", "STL", "Linear Algebra"],
    features: [
      "Matrix addition and subtraction",
      "Matrix multiplication",
      "Determinant calculation",
      "Matrix inverse computation",
      "Input validation and error handling",
    ],
    impact:
      "Efficient mathematical tool demonstrating C++ proficiency and algorithm implementation",
    category: "System Programming",
  },
  {
    id: 9,
    name: "Netflix Clone",
    tagline: "Frontend UI Recreation",
    description:
      "A pixel-perfect recreation of Netflix's landing page using HTML and CSS.",
    problem: "Practice modern CSS techniques and responsive design principles.",
    solution:
      "Built a visually identical clone focusing on layout, styling, and responsiveness.",
    image: "/netflix.png",
    github: "https://github.com/Sakin08/NETFLIX_CLONE",
    live: "https://netflix-clone-one-livid.vercel.app/",
    tech: ["HTML5", "CSS3", "Flexbox", "Grid"],
    features: [
      "Responsive design",
      "Modern CSS techniques",
      "Cross-browser compatibility",
      "Pixel-perfect recreation",
      "Hover effects and animations",
    ],
    impact: "Demonstrates CSS mastery and attention to design detail",
    category: "Frontend",
  },
  {
    id: 10,
    name: "Amazon Clone",
    tagline: "E-commerce Frontend Design",
    description:
      "A frontend recreation of Amazon's homepage showcasing e-commerce design patterns.",
    problem:
      "Understanding complex e-commerce layouts and component structures.",
    solution:
      "Recreated Amazon's interface focusing on layout complexity and user experience.",
    image: "/amazon.png",
    github: "https://github.com/Sakin08/Amazon_Fornt_page_clone",
    live: "https://amazon-fornt-page-clone.vercel.app/",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Complex grid layouts",
      "Interactive navigation",
      "Product showcase sections",
      "Responsive design",
      "Modern CSS techniques",
    ],
    impact: "Showcases ability to recreate complex commercial website layouts",
    category: "Frontend",
  },
  {
    id: 11,
    name: "Profile Card",
    tagline: "Personal Branding Component",
    description:
      "A clean and modern personal profile card with social links and contact information.",
    problem:
      "Creating a reusable personal branding component for web projects.",
    solution:
      "Designed a modern profile card with clean aesthetics and social integration.",
    image: "/profilecard.png",
    github: "https://github.com/Sakin08/PROFILE_CARD",
    live: "https://profile-card-ten-xi.vercel.app/",
    tech: ["HTML5", "CSS3", "Flexbox", "Modern Design"],
    features: [
      "Modern card design",
      "Social media integration",
      "Responsive layout",
      "Clean typography",
      "Hover animations",
    ],
    impact: "Demonstrates UI/UX design skills and component-based thinking",
    category: "Frontend",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const projectsByCategory = projects.reduce((acc, project) => {
  if (!acc[project.category]) {
    acc[project.category] = [];
  }
  acc[project.category].push(project);
  return acc;
}, {});
