"use client"

import { BrainCircuit, Camera, Layers } from "lucide-react"
import { motion } from "framer-motion"

const focusAreas = [
  {
    title: "Artificial Intelligence & ML",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    description: "Building predictive models, natural language processing applications, and deep learning pipelines using PyTorch and Scikit-learn.",
    tags: ["PyTorch", "XGBoost", "Data Preprocessing", "LLMs"]
  },
  {
    title: "Computer Vision",
    icon: <Camera className="h-8 w-8 text-primary" />,
    description: "Developing custom object detection models and visual tracking systems using YOLOv8, OpenCV, and Kalman filtering.",
    tags: ["YOLOv8", "OpenCV", "Object Detection", "Image Processing"]
  },
  {
    title: "Full-Stack Engineering",
    icon: <Layers className="h-8 w-8 text-primary" />,
    description: "Architecting robust web applications with the MERN stack and Next.js, integrating complex APIs and secure databases.",
    tags: ["React/Next.js", "Node.js", "MongoDB", "REST APIs"]
  }
]

export function WhatIWorkOn() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl font-bold text-foreground">What I Work On</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full md:mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My expertise spans the entire development pipeline—from training custom neural networks to deploying them in production-ready web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border p-8 rounded-xl shadow-sm hover:border-primary/50 transition-colors group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
