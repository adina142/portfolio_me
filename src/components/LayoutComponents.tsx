import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Mail } from "lucide-react"
import { Icons } from "@/components/Icons"
import { personalData } from "@/data/personal"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-bold">{personalData.name}</span>
            <span className="text-sm text-muted-foreground">{personalData.title}</span>
            <span className="text-xs text-muted-foreground mt-1">{personalData.secondaryTitle}</span>
          </div>
          
          <div className="flex space-x-6">
            <Link href={personalData.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">GitHub</span>
              <Icons.github className="h-5 w-5" />
            </Link>
            <Link href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Icons.linkedin className="h-5 w-5" />
            </Link>
            <Link href={`mailto:${personalData.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {Math.max(year, 2026)} {personalData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
