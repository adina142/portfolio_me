import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MonitorSmartphone, BrainCircuit, ServerCog } from "lucide-react"

export function WhatIBuild() {
  const offerings = [
    {
      title: "Full-Stack Applications",
      description: "Responsive web applications with React, Node.js, Express, MongoDB, REST APIs, authentication, dashboards, and reusable UI components.",
      icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "AI-Powered Applications",
      description: "Intelligent applications combining modern web development with AI APIs, machine learning, and computer vision.",
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      technologies: ["Python", "PyTorch", "YOLOv8", "Gemini API"]
    },
    {
      title: "Reliable Software Systems",
      description: "Development workflows involving Git/GitHub, REST APIs, CI/CD, debugging, data processing, and deployment practices.",
      icon: <ServerCog className="h-8 w-8 text-primary" />,
      technologies: ["Git", "GitHub", "REST APIs", "CI/CD"]
    }
  ]

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What I Build</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offerings.map((item, index) => (
          <Card key={index} className="border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="mb-4 bg-primary/10 w-fit p-3 rounded-lg">
                {item.icon}
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <CardDescription className="text-base leading-relaxed">
                {item.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map(tech => (
                  <span key={tech} className="text-xs font-mono font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
