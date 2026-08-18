export type Project = {
  title: string;
  slug: string;
  category: "Full-Stack" | "AI/ML" | "Computer Vision";
  shortDescription: string;
  problem: string;
  approach: string;
  results: string;
  technologies: string[];
  pipeline?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export const projectsData: Project[] = [
  {
    title: "Cricket LBW Decision Review System",
    slug: "lbw-decision-review",
    category: "Computer Vision",
    featured: true,
    shortDescription: "AI-powered cricket LBW decision review system using custom YOLOv8.",
    problem: "Umpire decisions in cricket for Leg Before Wicket (LBW) are subjective and prone to error without expensive tracking systems like Hawk-Eye.",
    approach: "Developed an AI-powered system that analyzes match footage to detect relevant objects (ball, stumps) and track the ball trajectory using custom YOLOv8, Kalman filtering, and polynomial regression.",
    results: "Successfully tracked ball trajectory and generated automated decision assessments based on MCC Law 36 logic.",
    technologies: ["Python", "YOLOv8", "OpenCV", "XGBoost", "Random Forest", "Kalman Filtering"],
    pipeline: ["Data Preprocessing", "YOLOv8 Detection", "Kalman Filter Tracking", "Polynomial Regression", "Rule-based Assessment"],
    githubUrl: "https://github.com/adina142/LBW_ML_Project",
  },
  {
    title: "LAPA — AI Medical Imaging Project",
    slug: "lapa",
    category: "AI/ML",
    featured: true,
    shortDescription: "Deep learning project focused on analyzing chest X-ray images for multiple conditions.",
    problem: "Medical professionals need rapid, accurate preliminary analysis of chest X-rays to prioritize patient care across various conditions.",
    approach: "Built a deep learning pipeline using PyTorch to analyze chest X-ray images for conditions like COVID-19, Pneumonia, Tuberculosis, and Cardiomegaly. Integrated a medical visual question answering (VQA) component.",
    results: "Created a robust multi-condition analysis tool trained on real and synthetic X-ray datasets.",
    technologies: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "Medical VQA"],
    pipeline: ["Dataset Curation", "Image Preprocessing", "PyTorch Training", "Multi-condition Classification", "VQA Integration"],
    githubUrl: "https://github.com/adina142/LAPA-AI_Medical_Professor",
  },
  {
    title: "AI-Powered Pakistan Travel Chatbot",
    slug: "pakistan-travel-chatbot",
    category: "AI/ML",
    featured: true,
    shortDescription: "Web-based AI travel assistant providing mood-based city recommendations.",
    problem: "Travelers struggle to find destinations in Pakistan that perfectly match their current mood or specific preferences.",
    approach: "Engineered a web-based AI travel assistant utilizing the Gemini API for natural language understanding and Google Maps API for interactive geographical rendering.",
    results: "Delivered a responsive application that provides dynamic, mood-based city recommendations with an interactive UI.",
    technologies: ["React.js", "Gemini API", "Google Maps API", "JavaScript"],
    pipeline: ["User Input", "Gemini API Prompting", "Data Parsing", "Google Maps Rendering"]
  },
  {
    title: "Threat-Fence",
    slug: "threat-fence",
    category: "Full-Stack",
    featured: true,
    shortDescription: "MERN-based cybersecurity platform focused on security workflows.",
    problem: "Needed a comprehensive platform to manage cybersecurity workflows, vulnerabilities, and team operations.",
    approach: "Designed and developed a full-stack cybersecurity platform utilizing the MERN stack with robust RESTful APIs, secure database architecture, and automated CI/CD deployment pipelines.",
    results: "Deployed a functional, scalable platform with role-based access and security integration.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git/GitHub", "CI/CD"]
  },
  {
    title: "AwareOn",
    slug: "awareon",
    category: "Full-Stack",
    featured: false,
    shortDescription: "SaaS-oriented web application developed using modern frontend and backend technologies.",
    problem: "Required a scalable SaaS architecture for managing user services and API-driven functionality.",
    approach: "Built a MERN-stack SaaS application emphasizing reusable UI components, secure database integration, and highly structured API endpoints.",
    results: "Created a performant, modular web application ready for production deployment.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Freelancer Marketplace",
    slug: "freelancer-marketplace",
    category: "Full-Stack",
    featured: false,
    shortDescription: "Marketplace platform designed to connect clients with service providers.",
    problem: "Freelancers and clients need a streamlined, centralized platform for discovering services, posting jobs, and managing communication.",
    approach: "Developed a responsive web platform with user authentication, role-based dashboards, job posting mechanics, and real-time messaging functionality.",
    results: "Successfully implemented custom UI designs and client-provider connectivity logic.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/adina142/FreeLancer_Website",
  }
];
