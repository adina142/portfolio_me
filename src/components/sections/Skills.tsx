import { skillsData } from "@/data/skills"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const categories = [
    { title: "Languages", skills: skillsData.languages },
    { title: "Frontend", skills: skillsData.frontend },
    { title: "Backend & Full-Stack", skills: skillsData.backend },
    { title: "AI / Machine Learning / CV", skills: skillsData.ai },
    { title: "Tools & Practices", skills: skillsData.tools },
    { title: "APIs", skills: skillsData.apis },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1.5 font-mono text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
