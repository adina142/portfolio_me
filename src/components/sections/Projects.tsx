"use client"

import * as React from "react"
import { projectsData } from "@/data/projects"
import { ExternalLink, Activity, Network, Layers } from "lucide-react"
import { Icons } from "@/components/Icons"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// Helper to generate abstract diagrams based on category
function ProjectVisual({ category }: { category: string }) {
  if (category === "Computer Vision") {
    return (
      <div className="w-full h-full bg-[#0d0d0d] flex items-center justify-center p-6 border-b border-border">
        <div className="w-full max-w-sm flex items-center justify-between opacity-80">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-primary/40 rounded flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 border-t-2 border-primary animate-[spin_3s_linear_infinite]"></div>
              <CameraIcon />
            </div>
            <span className="text-[10px] font-mono mt-2 text-muted-foreground">FRAME</span>
          </div>
          <div className="h-0.5 w-12 bg-primary/30 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-primary/50 rotate-45"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-blue-500/40 rounded flex items-center justify-center bg-blue-500/5">
              <Activity className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-[10px] font-mono mt-2 text-muted-foreground">YOLOv8</span>
          </div>
          <div className="h-0.5 w-12 bg-primary/30 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-primary/50 rotate-45"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-green-500/40 rounded flex items-center justify-center bg-green-500/5">
              <div className="w-8 h-8 border border-green-500/50 rounded-sm"></div>
            </div>
            <span className="text-[10px] font-mono mt-2 text-muted-foreground">BBOX</span>
          </div>
        </div>
      </div>
    )
  }
  
  if (category === "AI/ML") {
    return (
      <div className="w-full h-full bg-[#0d0d0d] flex items-center justify-center p-6 border-b border-border">
        <div className="w-full max-w-sm flex items-center justify-between opacity-80">
          <div className="flex flex-col gap-2">
            {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-primary/50"></div></div>)}
          </div>
          <div className="flex-1 flex justify-center">
            <Network className="w-12 h-12 text-primary/40 stroke-1" />
          </div>
          <div className="flex flex-col gap-4">
            {[1,2].map(i => <div key={i} className="w-6 h-6 rounded-full border border-blue-400/30 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-blue-400/50"></div></div>)}
          </div>
        </div>
      </div>
    )
  }

  // Full-Stack
  return (
    <div className="w-full h-full bg-[#0d0d0d] flex flex-col items-center justify-center p-6 border-b border-border">
      <div className="w-full max-w-xs space-y-4 opacity-80">
        <div className="w-full h-10 border border-primary/30 rounded flex items-center justify-center bg-primary/5">
          <span className="text-xs font-mono text-primary/70">Frontend (React)</span>
        </div>
        <div className="flex justify-center">
          <div className="w-0.5 h-6 bg-border relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Layers className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
        <div className="w-full h-10 border border-blue-500/30 rounded flex items-center justify-center bg-blue-500/5">
          <span className="text-xs font-mono text-blue-400/70">API (Express/Node)</span>
        </div>
        <div className="flex justify-center">
          <div className="w-0.5 h-6 bg-border"></div>
        </div>
        <div className="w-full h-10 border border-green-500/30 rounded flex items-center justify-center bg-green-500/5 flex-col gap-1">
          <div className="w-full h-[1px] bg-green-500/20"></div>
          <div className="w-full h-[1px] bg-green-500/20"></div>
          <div className="w-full h-[1px] bg-green-500/20"></div>
        </div>
      </div>
    </div>
  )
}

function CameraIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
      <circle cx="12" cy="13" r="3"></circle>
    </svg>
  )
}

export function Projects() {
  const [filter, setFilter] = React.useState<string>("All")
  const categories = ["All", "AI/ML", "Computer Vision", "Full-Stack"]

  const filteredProjects = projectsData.filter(project => 
    filter === "All" ? true : project.category === filter
  )

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:border-primary/50 transition-colors flex flex-col group"
              >
                {/* Visual Header */}
                <div className="h-48 relative overflow-hidden bg-muted">
                  <ProjectVisual category={project.category} />
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-mono text-primary mb-2 block">{project.category}</span>
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                            <Icons.github className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {project.approach}
                  </p>

                  {/* Pipeline / Tech Stack */}
                  <div className="space-y-4">
                    {project.pipeline && (
                      <div className="pt-4 border-t border-border">
                        <p className="text-xs font-medium text-foreground mb-2 flex items-center gap-2">
                          <Activity className="h-3 w-3 text-primary" />
                          Pipeline Pipeline
                        </p>
                        <div className="flex flex-wrap gap-x-2 gap-y-1">
                          {project.pipeline.map((step, i) => (
                            <div key={step} className="flex items-center text-xs text-muted-foreground">
                              {i > 0 && <span className="mx-1 opacity-50">→</span>}
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] font-mono rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] font-mono rounded">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
