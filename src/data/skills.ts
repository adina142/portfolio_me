export type SkillCategory = "Machine Learning" | "Computer Vision" | "Full-Stack" | "Programming" | "Engineering";

export const skillsData: Record<SkillCategory, string[]> = {
  "Machine Learning": [
    "Python", "PyTorch", "Scikit-learn", "XGBoost", "Random Forest", "Model Evaluation", "Data Preprocessing"
  ],
  "Computer Vision": [
    "OpenCV", "YOLOv8", "Object Detection", "Image Processing", "Kalman Filtering"
  ],
  "Full-Stack": [
    "React", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs"
  ],
  "Programming": [
    "Python", "C++", "Java", "JavaScript", "TypeScript"
  ],
  "Engineering": [
    "Git", "GitHub", "CI/CD", "API Integration", "Debugging", "Deployment"
  ]
};
