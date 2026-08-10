import { projectsData } from "@/data/projects"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react"
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="font-mono uppercase tracking-wider">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge className="bg-primary text-primary-foreground uppercase tracking-wider">
                Featured
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.githubUrl && !project.githubUrl.includes("YOUR_") && (
              <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                <Button size="lg" className="gap-2">
                  <Icons.github className="h-5 w-5" /> View Source Code
                </Button>
              </Link>
            )}
            {project.liveUrl && !project.liveUrl.includes("YOUR_") && (
              <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <ExternalLink className="h-5 w-5" /> Live Demo
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10 border-t">
          <div className="md:col-span-2 space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Technical Highlights</h2>
              <ul className="space-y-3">
                {project.technicalHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl border bg-card">
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
