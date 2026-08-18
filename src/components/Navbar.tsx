"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, FileText } from "lucide-react"
import { Icons } from "@/components/Icons"
import { personalData } from "@/data/personal"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")

  const toggleMenu = () => setIsOpen(!isOpen)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section spy
      const sections = navLinks.map(link => link.name.toLowerCase())
      let current = ""
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section
        }
      }
      setActiveSection(current)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight text-primary">
              adina<span className="text-foreground">.dev</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-primary px-1 py-2",
                    activeSection === link.name.toLowerCase() ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                  {activeSection === link.name.toLowerCase() && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 border-r pr-4">
              <Link href={personalData.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Icons.github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={personalData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Icons.linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <Link href={personalData.resumeUrl} target="_blank" rel="noreferrer">
              <Button variant="outline" className="gap-2 border-primary/50 hover:bg-primary/10">
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  activeSection === link.name.toLowerCase() 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 px-3">
              <Link href={personalData.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 py-2 text-muted-foreground hover:text-primary">
                <Icons.github className="h-5 w-5" />
                GitHub
              </Link>
              <Link href={personalData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 py-2 text-muted-foreground hover:text-primary">
                <Icons.linkedin className="h-5 w-5" />
                LinkedIn
              </Link>
              <Link href={personalData.resumeUrl} target="_blank" rel="noreferrer" className="mt-2">
                <Button className="w-full gap-2 justify-center">
                  <FileText className="h-4 w-4" />
                  View Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
