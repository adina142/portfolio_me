"use client"

import { skillsData, SkillCategory } from "@/data/skills"
import { motion } from "framer-motion"

export function Skills() {
  const categories = Object.keys(skillsData) as SkillCategory[]

  return (
    <section id="skills" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border/50">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData[category].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium text-secondary-foreground rounded-md border border-border cursor-default"
                  >
                    {skill}
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
