import { personalData } from "@/data/personal"
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-background/50 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left: Statement */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-medium text-foreground">
              Bridging AI Research & Production Software
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>{personalData.about.p1}</p>
              <p>{personalData.about.p2}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {personalData.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                {personalData.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                {personalData.phone}
              </div>
            </div>
          </div>

          {/* Right: Engineering Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-lg text-foreground">Education & Focus</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">{personalData.education.degree}</h4>
                  <p className="text-muted-foreground text-sm">{personalData.education.university}</p>
                  <p className="text-xs text-muted-foreground mt-1">{personalData.education.period}</p>
                </div>
                
                <div className="pt-2">
                  <p className="text-sm font-medium text-foreground mb-3">Core Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {personalData.education.areas.map(area => (
                      <span 
                        key={area}
                        className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
