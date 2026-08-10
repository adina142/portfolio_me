import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { personalData } from "@/data/personal"
import { Mail, FileText, ArrowRight } from "lucide-react"
import { Icons } from "@/components/Icons"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
              OPEN TO SOFTWARE ENGINEERING INTERNSHIPS
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I&apos;m {personalData.name.split(" ")[0]}.
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                {personalData.title}
              </h2>
              <p className="text-lg text-muted-foreground font-mono">
                {personalData.secondaryTitle}
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Computer Science student at Information Technology University building modern web applications, AI-powered systems, and computer vision solutions with React, Node.js, Python, and modern development tools.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link href="#projects">
                <Button size="lg" className="w-full sm:w-auto gap-2 text-base h-12 px-8">
                  View My Projects <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={personalData.resumeUrl} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 text-base h-12 px-8">
                  <FileText className="h-4 w-4" /> Download Resume
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-muted-foreground">
              <Link href={personalData.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
                <Icons.github className="h-6 w-6" />
              </Link>
              <Link href={personalData.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Icons.linkedin className="h-6 w-6" />
              </Link>
              <Link href={`mailto:${personalData.email}`} className="hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            {/* Terminal/Code Visual */}
            <div className="rounded-xl overflow-hidden border bg-card/50 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center px-4 py-3 border-b bg-muted/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs font-mono text-muted-foreground">developer.ts</div>
              </div>
              <div className="p-6 overflow-x-auto text-sm md:text-base font-mono">
                <pre className="text-left">
                  <code className="text-muted-foreground">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">adina</span> = {'{'}
                    <br/>
                    {'  '}role: <span className="text-green-400">&quot;Software Engineer&quot;</span>,
                    <br/>
                    {'  '}focus: [
                    <br/>
                    {'    '}<span className="text-green-400">&quot;Full-Stack Development&quot;</span>,
                    <br/>
                    {'    '}<span className="text-green-400">&quot;AI / Machine Learning&quot;</span>,
                    <br/>
                    {'    '}<span className="text-green-400">&quot;Computer Vision&quot;</span>
                    <br/>
                    {'  '}],
                    <br/>
                    {'  '}stack: [
                    <br/>
                    {'    '}<span className="text-green-400">&quot;React&quot;</span>, <span className="text-green-400">&quot;Node.js&quot;</span>, <span className="text-green-400">&quot;MongoDB&quot;</span>, <span className="text-green-400">&quot;Python&quot;</span>
                    <br/>
                    {'  '}],
                    <br/>
                    {'  '}location: <span className="text-green-400">&quot;Pakistan&quot;</span>
                    <br/>
                    {'}'};
                  </code>
                </pre>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute top-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(120,119,198,0.15)] opacity-50 blur-[80px]" />
      </div>
    </div>
  )
}
