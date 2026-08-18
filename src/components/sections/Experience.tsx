"use client"

import { experienceData } from "@/data/experience"
import { Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground">Experience</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 pb-4">
            {experienceData.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-sm">
                  <Briefcase className="w-3.5 h-3.5 text-primary" />
                </div>

                <div className="bg-card border border-border p-6 rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-sm font-mono text-muted-foreground bg-secondary px-3 py-1.5 rounded-md w-fit">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="text-muted-foreground leading-relaxed mb-6 space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <p key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span> {resp}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.badges.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground border border-border rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
