"use client"

import * as React from "react"
import { projectsData } from "@/data/projects"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Icons } from "@/components/Icons"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Projects() {
  const [filter, setFilter] = React.useState<"All" | "Full-Stack" | "AI/ML" | "Computer Vision">("Full-Stack")

  const categories = ["All", "Full-Stack", "AI/ML", "Computer Vision"] as const

  const filteredProjects = projectsData.filter(
    (project) => filter === "All" || project.category === filter
  )

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card 
            key={project.slug} 
            className={cn(
              "flex flex-col overflow-hidden border transition-all duration-300 hover:shadow-md hover:border-primary/40",
              project.featured ? "md:col-span-2 lg:col-span-1 border-primary/20 bg-primary/5" : ""
            )}
          >
            <CardHeader className="space-y-2">
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wider">
                  {project.category}
                </Badge>
                {project.featured && (
                  <Badge className="bg-primary text-primary-foreground text-[10px] uppercase tracking-wider">
                    Featured
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl md:text-2xl mt-2">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <CardDescription className="text-base text-foreground/80 line-clamp-3">
                {project.shortDescription}
              </CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-xs font-mono bg-muted text-muted-foreground px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs font-mono bg-muted text-muted-foreground px-2 py-1 rounded-md">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-4 border-t flex flex-wrap gap-3">
              <Link href={`/projects/${project.slug}`} className="w-full sm:w-auto">
                <Button variant="default" className="w-full gap-2">
                  View Details <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              {project.githubUrl && !project.githubUrl.includes("YOUR_") && (
                <Link href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
                  <Button variant="outline" className="w-full gap-2" aria-label="GitHub Repository">
                    <Icons.github className="h-4 w-4" />
                    <span className="sr-only sm:not-sr-only sm:inline">Code</span>
                  </Button>
                </Link>
              )}
              {project.liveUrl && !project.liveUrl.includes("YOUR_") && (
                <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
                  <Button variant="outline" className="w-full gap-2" aria-label="Live Demo">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only sm:not-sr-only sm:inline">Live</span>
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
