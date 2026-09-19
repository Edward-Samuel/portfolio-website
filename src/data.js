export const profile = {
  firstName: "Edward",
  lastName: "Samuel L",
  initials: "ES",
  photo: "/edward-samuel-profile.jpeg",
  tagline:
    "Junior AI/ML Developer @Justo Global | AI & ML Enthusiast | Python Developer | CIT ’26",
  email: "edwardsamuel9697@gmail.com",
  location: "Coimbatore, Tamil Nadu, India",
  linkedIn: "https://www.linkedin.com/in/edwardsamuel13",
  github: "https://github.com/Edward-Samuel",
  youtube: "https://www.youtube.com/@samsworld19-w2l",
  resume:
    "https://drive.google.com/file/d/11CI6QM_c3zVDpP9NLKkkh-5yr3b5ptin/view?usp=sharing",
  resumeDownload:
    "https://drive.google.com/uc?export=download&id=11CI6QM_c3zVDpP9NLKkkh-5yr3b5ptin",
  resumeFallback: "/Profile.pdf",
  summary:
    "I am an AI & Data Science graduate from Coimbatore Institute of Technology (CIT) with a passion for building intelligent, data-driven solutions that solve real-world problems. My interests span artificial intelligence, machine learning, data science, computer vision, and full-stack development, with hands-on experience developing end-to-end applications.\n\nI have built projects in AI-powered healthcare, computer vision, web content extraction, and GPS-based toll automation, leveraging technologies such as Python, Flask, React, FastAPI, MongoDB, MySQL, and modern AI frameworks. I enjoy transforming complex ideas into practical, user-centric solutions that are scalable and impactful.\n\nI am particularly interested in applying AI across healthcare, education, and smart mobility, while continuously exploring emerging technologies such as generative AI, large language models (LLMs), and agentic AI. As a lifelong learner, I am eager to collaborate with innovative teams, contribute to meaningful products, and create technology that delivers measurable real-world impact.",
};

export const greetings = [
  "Hello",
  "வணக்கம்",
  "नमस्ते",
  "Bonjour",
  "Hola",
  "Konnichiwa",
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const bio = {
  paragraph: profile.summary,
  education: {
    degree: "Bachelor of Technology – Artificial Intelligence and Data Science",
    college: "Coimbatore Institute of Technology",
    duration: "November 2022 – May 2026",
  },
};

export const skills = [
  {
    category: "Top Skills",
    items: [
      "AI Application Development",
      "Full-Stack Web Development",
      "API Integration & Backend Services",
    ],
  },
  {
    category: "Languages & Frameworks",
    items: [
      "Python",
      "JavaScript / TypeScript",
      "Java",
      "React",
      "Flask",
      "FastAPI",
      "Node.js / Express",
      "HTML",
      "Jinja2",
    ],
  },
  {
    category: "Data & AI",
    items: [
      "Machine Learning",
      "NLP",
      "Agentic AI",
      "Feature Engineering",
      "Model Training",
      "Symptom Analysis",
      "Computer Vision (CNN, ResNet, ViT)",
      "Data Analysis",
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Git / GitHub",
      "REST APIs",
      "Webhooks",
      "JSON",
      "Chrome Extension Development",
    ],
  },
  {
    category: "Certifications",
    items: [
      "500 difficulty rating",
      "Java (Basic)",
      "Object Oriented Programming – Basics to Advance (Java OOP)",
      "SQL (Basic)",
      "Data Analysis Using Python",
    ],
  },
];

export const experiences = [
  {
    role: "Data Science Intern",
    company: "Justo Global",
    duration: "February 2026 – Present",
    location: "Coimbatore",
    description:
      "Developed AI-powered bot detection, automated email alerting, and enterprise AI solutions for the ARK AI platform.\n\nBuilt Retrieval-Augmented Generation (RAG) pipelines and AI assistants using Gloo AI Studio for intelligent knowledge retrieval.\n\nImplemented video ingestion, semantic search, and natural language querying over YouTube and enterprise video content.\n\nEnhanced image and video content moderation with OpenCLIP by developing deployment-ready MLOps pipelines for NSFW detection.\n\n",
  },
  {
    role: "Full Stack AI Developer",
    company: "Swinburne University of Technology Sarawak Campus",
    duration: "July 2025 – June 2026",
    location: "",
    description:
      "Led development of the MediBot AI Medical Assistant Platform end-to-end, including architecture, feature implementation, and deployment workflows. Built core modules for symptom intake, AI-driven response generation, and patient-facing chat flows while improving reliability, response quality, and usability. Delivered secure user authentication, medical conversation history management, and API integrations for model and backend services. Optimized performance and reduced production issues through code reviews, debugging, and test coverage improvements. Collaborated across product and technical priorities to ship features on schedule and support ongoing platform scaling.\n\nTech Stack: Python, JavaScript/TypeScript, React, Node.js/Express or FastAPI, OpenAI API / LLM integration, REST APIs, JSON, Webhooks, PostgreSQL or MongoDB, Git/GitHub",
  },
  {
    role: "Mini Project – iCliniq",
    company: "Orane Healthcare India Pvt Ltd",
    duration: "August 2024 – April 2025",
    location: "",
    description:
      "Developed an AI-powered medical assistant that predicts possible diseases based on user-inputted symptoms and EHR/EMR data. The system uses ML models to analyze symptoms, track patient history, and provide recommendations through a user-friendly web interface. Integrated with MongoDB for secure medical data handling and supports both backend (Flask) and frontend (React) applications.\n\nTech Stack: Python (FastAPI), Machine Learning (Symptom Analysis, NLP), MongoDB\n\nKey Skills: AI/ML, Healthcare Analytics, Web Development, Data Engineering, Model Deployment",
  },
  {
    role: "Software Developer Internship",
    company: "M/s LOFTY AGROTECH",
    duration: "January 2025 – February 2025",
    location: "",
    description:
      "Designed and trained multiple deep learning models using CNN (ResNet) and Vision Transformer (ViT) architectures. Achieved a 97% testing accuracy in disease classification across multiple paddy leaf conditions. Collaborated with a small R&D team and contributed via GitHub to streamline code and experiment tracking.",
  },
  {
    role: "Mini Project – Samsung Prism",
    company: "Samsung R&D Institute India – Bangalore",
    duration: "July 2024 – February 2025",
    location: "",
    description:
      "Developed a machine learning-based browser reader mode for webpage readability detection and content extraction. The system detects whether a webpage is readable with >95% accuracy and extracts clean content without ads, banners, or popups. Integrated with Chrome as an extension, supporting multiple languages and optimized for mobile devices.\n\nTech Stack: Python, ML (Feature Engineering, Model Training), Web Crawling, DOM Parsing, Chrome Extension Development\n\nKey Skills: AI/ML, NLP, Feature Engineering, Web Scraping, Model Deployment",
  },
  {
    role: "Intern – Intel Unnati",
    company: "Intel Labs",
    duration: "May 2024 – July 2024",
    location: "",
    description:
      "Developed a Flask-based web application that automates toll collection using GPS tracking. The system calculates toll charges based on vehicle movement within a geofenced area, updates balances in a MySQL database, and visualizes routes using Folium maps. Integrated Geopy for distance calculations and built a user-friendly interface for seamless interaction.\n\nTech Stack: Python (Flask, Geopy, Folium, MySQL), HTML, Jinja2\n\nKey Skills: Full-Stack Development, Geospatial Computing, Database Management, API Integration",
  },
];

export const projects = [
  {
    title: "MediBot AI Medical Assistant Platform",
    description:
      "End-to-end AI medical assistant featuring symptom intake, AI-driven response generation, patient-facing chat flows, secure user authentication, medical conversation history, and model API integrations.",
    tags: [
      "Python",
      "React",
      "Node.js / Express",
      "FastAPI",
      "OpenAI API",
      "MongoDB / PostgreSQL",
      "Git / GitHub",
    ],
    icon: "FaStethoscope",
    overview: {
      src: "/project-overviews/medibot-logo.png",
      alt: "MediBot AI Medical Assistant Platform logo",
      fit: "contain",
      label: "Project logo",
    },
    client: {
      name: "Swinburne University of Technology Sarawak Campus",
      logo: "/client-logos/swinburne.svg",
      alt: "Swinburne University of Technology Sarawak Campus logo",
    },
    github:
      "https://github.com/Edward-Samuel/MediBot_AI-Medical-Assistant-Platform",
    live: "https://medi-bot-ai-medical-assistant-platf.vercel.app/",
  },
  {
    title: "Holistic Differential Diagnosis System (iCliniq)",
    description:
      "AI-powered medical assistant that predicts possible diseases from symptoms and EHR/EMR data, tracks patient history, and provides recommendations through a Flask/React web interface.",
    tags: ["Python", "FastAPI", "Machine Learning", "NLP", "MongoDB", "React"],
    icon: "FaUserMd",
    overview: {
      src: "/project-overviews/icliniq-logo.jpg",
      alt: "iCliniq Holistic Differential Diagnosis System logo",
      fit: "contain",
      label: "Project logo",
    },
    client: {
      name: "Orane Healthcare / iCliniq",
      logo: "/client-logos/icliniq.svg",
      alt: "iCliniq logo",
    },
    github:
      "https://github.com/Edward-Samuel/Holistic-Differential-Diagnosis-System-Using-EHR-EMR-Data",
  },
  {
    title: "Paddy Leaf Disease Classification",
    description:
      "Deep-learning crop-disease classifier using CNN (ResNet) and Vision Transformer (ViT) architectures, achieving 97% testing accuracy across multiple paddy leaf conditions.",
    tags: ["Python", "CNN", "ResNet", "Vision Transformer", "Git / GitHub"],
    icon: "FaLeaf",
    overview: {
      src: "/project-overviews/plant-disease-plot.png",
      alt: "Training accuracy and loss plots for the plant disease classifier",
      fit: "contain",
      label: "Training plots",
    },
    client: {
      name: "Lofty Agrotech",
      logo: "/client-logos/lofty.png",
      alt: "Lofty Agrotech logo",
    },
    github: "https://github.com/Edward-Samuel/Plant-disease-classifier",
  },
  {
    title: "Webpage Readability & Simplified View (Samsung Prism)",
    description:
      "ML-based browser reader mode that detects webpage readability with >95% accuracy and extracts clean content without ads or popups, integrated as a Chrome extension with multi-language and mobile support.",
    tags: [
      "Python",
      "Machine Learning",
      "Feature Engineering",
      "Web Crawling",
      "DOM Parsing",
      "Chrome Extension",
    ],
    icon: "FaChrome",
    overview: {
      src: "/project-overviews/webpage-icon.png",
      alt: "Webpage Readability Chrome extension icon",
      fit: "contain",
      label: "Extension icon",
    },
    client: {
      name: "Samsung R&D Institute India",
      logo: "/client-logos/samsung.svg",
      alt: "Samsung logo",
    },
    github:
      "https://github.com/Edward-Samuel/Webpage_article_detection_and_Simplified_view_using_AI_ML",
  },
  {
    title: "GPS Toll-Based Simulation System",
    description:
      "Flask web app that automates toll collection using GPS tracking and geofencing, calculates charges based on vehicle movement, updates a MySQL wallet, and visualizes routes with Folium maps.",
    tags: ["Python", "Flask", "Geopy", "Folium", "MySQL", "HTML", "Jinja2"],
    icon: "FaMapMarkedAlt",
    overview: {
      src: "/project-overviews/gps-toll-overview.svg",
      alt: "Conceptual diagram of a GPS-mapped route passing through a toll gate",
      fit: "cover",
      label: "Conceptual overview",
    },
    client: {
      name: "Intel Unnati (Intel)",
      logo: "/client-logos/intel.svg",
      alt: "Intel logo",
    },
    github:
      "https://github.com/Edward-Samuel/GPS_Toll_based_simulation_in_python",
  },
];
