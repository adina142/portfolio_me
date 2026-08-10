import { personalData } from "@/data/personal"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Briefcase } from "lucide-react"

export function About() {
  return (
    <div className="space-y-12">
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
        <div className="w-16 h-1 bg-primary mx-auto md:mx-0 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>{personalData.about.p1}</p>
          <p>{personalData.about.p2}</p>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">{personalData.education.degree}</h3>
                  <p className="text-sm text-muted-foreground">{personalData.education.university}</p>
                  <p className="text-xs text-muted-foreground mt-1">{personalData.education.period}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Briefcase className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Focus</h3>
                  <p className="text-sm text-muted-foreground">{personalData.education.focus}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm text-muted-foreground">{personalData.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
