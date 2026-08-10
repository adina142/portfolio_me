export type Project = {
  title: string;
  slug: string;
  category: "Full-Stack" | "AI/ML" | "Computer Vision";
  shortDescription: string;
  description: string;
  technologies: string[];
  features: string[];
  technicalHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export const projectsData: Project[] = [
  {
    title: "Threat-Fence",
    slug: "threat-fence",
    category: "Full-Stack",
    featured: true,
    shortDescription: "Full-stack cybersecurity platform developed using the MERN stack.",
    description: "Full-stack cybersecurity platform developed using the MERN stack, involving frontend development, backend services, RESTful APIs, database functionality, version control, and CI/CD workflows.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git/GitHub", "CI/CD"],
    features: [
      "Cybersecurity platform integration",
      "Full-stack MERN architecture",
      "Robust RESTful API design",
      "Automated CI/CD deployment"
    ],
    technicalHighlights: [
      "MERN architecture",
      "React frontend",
      "Node.js backend",
      "Express APIs",
      "MongoDB",
      "CI/CD",
      "Git/GitHub",
      "Performance optimization",
      "Debugging and reliability improvements"
    ],
    githubUrl: "YOUR_THREATFENCE_GITHUB_URL",
    liveUrl: "YOUR_THREATFENCE_LIVE_URL",
  },
  {
    title: "AwareOn",
    slug: "awareon",
    category: "Full-Stack",
    featured: true,
    shortDescription: "SaaS-oriented web application developed using modern frontend and backend technologies.",
    description: "Full-stack SaaS-oriented web application developed using modern frontend and backend technologies, with emphasis on reusable UI, API-driven functionality, database integration, and scalable application structure.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "SaaS architecture",
      "API-driven functionality",
      "Reusable UI components",
      "Scalable database integration"
    ],
    technicalHighlights: [
      "React frontend",
      "Node.js backend",
      "Express APIs",
      "MongoDB",
      "Reusable components",
      "API integration",
      "Full-stack architecture"
    ],
    githubUrl: "YOUR_AWAREON_GITHUB_URL",
    liveUrl: "YOUR_AWAREON_LIVE_URL",
  },
  {
    title: "Freelancer Marketplace",
    slug: "freelancer-marketplace",
    category: "Full-Stack",
    featured: true,
    shortDescription: "Full-stack marketplace platform designed to connect clients with service providers.",
    description: "Full-stack marketplace platform designed to connect clients with service providers.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "User authentication",
      "Role-based dashboards",
      "Job posting",
      "Profile management",
      "Real-time messaging",
      "Responsive interface"
    ],
    technicalHighlights: [
      "Client and service provider connectivity",
      "Custom UI design",
      "Dashboard architectures",
      "Responsive layout implementations"
    ],
    githubUrl: "https://github.com/adina142/FreeLancer_Website",
  },
  {
    title: "Cricket LBW Decision Review System",
    slug: "lbw-decision-review",
    category: "Computer Vision",
    featured: false,
    shortDescription: "AI-powered cricket LBW decision review system using custom YOLOv8.",
    description: "AI-powered cricket LBW decision review system designed to analyze match footage, detect relevant objects, track ball trajectory, and generate automated decision assessments.",
    technologies: ["Python", "YOLOv8", "OpenCV", "XGBoost", "Random Forest", "Kalman Filtering"],
    features: [
      "Match footage analysis",
      "Automated decision assessments",
      "Ball trajectory tracking"
    ],
    technicalHighlights: [
      "Custom YOLOv8 object detection",
      "Ball and stump detection",
      "Kalman filtering",
      "Trajectory tracking",
      "Polynomial regression",
      "XGBoost",
      "Random Forest",
      "Rule-based MCC Law 36 logic"
    ],
    githubUrl: "https://github.com/adina142/LBW_ML_Project",
  },
  {
    title: "LAPA — AI Medical Imaging Project",
    slug: "lapa",
    category: "AI/ML",
    featured: false,
    shortDescription: "Deep learning project focused on analyzing chest X-ray images.",
    description: "Deep learning project focused on analyzing chest X-ray images across multiple medical conditions, with an additional medical visual question answering component.",
    technologies: ["Python", "PyTorch", "Deep Learning", "Computer Vision"],
    features: [
      "Academic research implementation",
      "Medical visual question answering (VQA)",
      "Multi-condition analysis"
    ],
    technicalHighlights: [
      "COVID-19 detection",
      "Pneumonia",
      "Pleural effusion",
      "Cardiomegaly",
      "Pneumothorax",
      "Tuberculosis",
      "Real and synthetic X-ray dataset",
      "Medical VQA",
      "PyTorch training pipeline",
      "Data preprocessing"
    ],
    githubUrl: "https://github.com/adina142/LAPA-AI_Medical_Professor",
  },
  {
    title: "AI-Powered Pakistan Travel Chatbot",
    slug: "pakistan-travel-chatbot",
    category: "AI/ML",
    featured: false,
    shortDescription: "Web-based AI travel assistant providing mood-based city recommendations.",
    description: "Web-based AI travel assistant providing mood-based city recommendations across Pakistan.",
    technologies: ["React.js", "Gemini API", "Google Maps API"],
    features: [
      "Mood-based recommendations",
      "Google Maps integration",
      "User reviews"
    ],
    technicalHighlights: [
      "Gemini API integration",
      "Modular React.js architecture",
      "Object-oriented design",
      "Interactive map rendering"
    ],
    githubUrl: "YOUR_TRAVEL_CHATBOT_GITHUB_URL",
  }
];
