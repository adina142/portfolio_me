import { ArrowDown } from "lucide-react"

export function FullStackHighlight() {
  const stack = [
    { name: "React.js", desc: "Frontend UI" },
    { name: "Node.js + Express", desc: "Backend Services" },
    { name: "REST APIs", desc: "Data Communication" },
    { name: "MongoDB", desc: "Database" },
    { name: "Git / GitHub", desc: "Version Control" },
    { name: "CI/CD", desc: "Deployment Pipeline" }
  ]

  return (
    <div className="space-y-12 py-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Full-Stack Development</h2>
        <p className="text-xl text-muted-foreground">Building beyond tutorials and coursework.</p>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-muted-foreground leading-relaxed">
          I&apos;ve worked on full-stack applications involving frontend development, backend services, REST APIs, databases, version control, CI/CD pipelines, debugging, and deployment workflows.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center">
          {stack.map((item, index) => (
            <div key={item.name} className="flex flex-col items-center w-full">
              <div className="w-full max-w-sm p-4 rounded-xl border bg-card text-card-foreground shadow-sm flex flex-col items-center justify-center relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono text-lg font-bold">{item.name}</span>
                <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{item.desc}</span>
              </div>
              
              {index < stack.length - 1 && (
                <div className="py-2 text-muted-foreground/50">
                  <ArrowDown className="h-6 w-6 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
