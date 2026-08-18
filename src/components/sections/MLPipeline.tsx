"use client"

import { Database, Brain, LineChart, Server } from "lucide-react"
import { motion } from "framer-motion"

const pipelineSteps = [
  {
    title: "Data Engineering",
    icon: <Database className="w-6 h-6 text-primary" />,
    description: "Collecting, cleaning, and preprocessing raw datasets to ensure high-quality inputs for model training.",
    tools: "Pandas, NumPy, OpenCV"
  },
  {
    title: "Model Architecture",
    icon: <Brain className="w-6 h-6 text-primary" />,
    description: "Designing and selecting optimal neural network architectures or machine learning algorithms for the specific problem domain.",
    tools: "PyTorch, YOLOv8, Scikit-learn"
  },
  {
    title: "Training & Evaluation",
    icon: <LineChart className="w-6 h-6 text-primary" />,
    description: "Iterative training, hyperparameter tuning, and rigorous evaluation using cross-validation and relevant metrics.",
    tools: "TensorFlow, Matplotlib, Weights & Biases"
  },
  {
    title: "Production Deployment",
    icon: <Server className="w-6 h-6 text-primary" />,
    description: "Optimizing models for inference and deploying them within robust, scalable backend architectures and RESTful APIs.",
    tools: "Node.js, Express, Docker"
  }
]

export function MLPipeline() {
  return (
    <section className="py-24 bg-background border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl font-bold text-foreground">How I Build ML Systems</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full md:mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A structured, engineering-first approach to moving from raw data to production-ready intelligent applications.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border hidden md:block -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/5 transition-all shadow-sm">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {step.tools}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
