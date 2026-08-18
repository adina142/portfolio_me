"use client"

import { personalData } from "@/data/personal"
import { Award } from "lucide-react"
import { motion } from "framer-motion"

export function Certifications() {
  if (!personalData.certifications || personalData.certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground">Certifications & Awards</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {personalData.certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{cert.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
