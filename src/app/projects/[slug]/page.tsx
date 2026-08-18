import { projectsData } from "@/data/projects"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft, CheckCircle2, Activity } from "lucide-react"
import { Icons } from "@/components/Icons"
import Link from "next/link"
import { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Adina Khalid`,
    description: project.shortDescription,
  }
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="font-mono uppercase tracking-wider text-secondary-foreground border border-border">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge className="bg-primary text-primary-foreground uppercase tracking-wider">
                Featured
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.githubUrl && !project.githubUrl.includes("YOUR_") && (
              <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                <Button size="lg" className="gap-2 text-primary-foreground">
                  <Icons.github className="h-5 w-5" /> View Source Code
                </Button>
              </Link>
            )}
            {project.liveUrl && !project.liveUrl.includes("YOUR_") && (
              <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-secondary">
                  <ExternalLink className="h-5 w-5" /> Live Demo
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10 border-t border-border">
          <div className="md:col-span-2 space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">My Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.approach}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Results & Impact</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.results}
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono bg-secondary text-secondary-foreground border border-border">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {project.pipeline && (
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  System Pipeline
                </h3>
                <div className="space-y-3">
                  {project.pipeline.map((step, i) => (
                    <div key={step} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-secondary-foreground border border-border">
                          {i + 1}
                        </div>
                        {i < project.pipeline!.length - 1 && (
                          <div className="w-0.5 h-full bg-border my-1"></div>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground mt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
