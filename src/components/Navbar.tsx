"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, FileText } from "lucide-react"
import { Icons } from "@/components/Icons"
import { personalData } from "@/data/personal"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold font-mono tracking-tighter">
              A.K.
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 border-r pr-4">
              <Link href={personalData.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon">
                  <Icons.github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={personalData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon">
                  <Icons.linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <ThemeToggle />
            </div>
            <Link href={personalData.resumeUrl} target="_blank" rel="noreferrer">
              <Button variant="default" size="sm" className="gap-2">
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col space-y-2 border-t pt-4">
              <Link href={personalData.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2">
                <Icons.github className="h-5 w-5" />
                GitHub
              </Link>
              <Link href={personalData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2">
                <Icons.linkedin className="h-5 w-5" />
                LinkedIn
              </Link>
              <Link href={personalData.resumeUrl} target="_blank" rel="noreferrer" className="mt-2">
                <Button variant="default" className="w-full gap-2 justify-center">
                  <FileText className="h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
