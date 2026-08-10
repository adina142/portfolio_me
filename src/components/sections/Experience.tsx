import { experienceData } from "@/data/experience"
import { Badge } from "@/components/ui/badge"
import { personalData } from "@/data/personal"

export function Experience() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {experienceData.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
              <div className="md:col-span-1 md:text-right mb-2 md:mb-0 pt-1">
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              
              <div className="md:col-span-4 relative">
                {/* Timeline dot */}
                <div className="absolute -left-[39px] md:-left-5 top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                {/* Timeline line */}
                {index !== experienceData.length - 1 && (
                  <div className="absolute -left-[34px] md:-left-[15px] top-5 bottom-[-40px] w-0.5 bg-border" />
                )}
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="text-lg text-primary/80 font-medium">{item.company}</p>
                  </div>
                  
                  <ul className="space-y-2 text-muted-foreground list-disc pl-4 marker:text-muted-foreground/50">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.badges.map((badge) => (
                      <Badge key={badge} variant="outline" className="font-mono text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold tracking-tight mb-8">Certifications & Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalData.certifications.map((cert, index) => (
            <div key={index} className="p-4 rounded-lg border bg-card/30">
              <h4 className="font-semibold">{cert.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{cert.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
