"use client"

import { Button } from "@/components/ui/button"
import { personalData } from "@/data/personal"
import { FileText, ArrowRight, Terminal } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  const codeLines = [
    { text: "adina@portfolio:~$ whoami", color: "text-primary" },
    { text: "AI/ML Engineer", color: "text-foreground" },
    { text: "Computer Vision Developer", color: "text-foreground" },
    { text: "Full-Stack Developer", color: "text-foreground" },
    { text: "adina@portfolio:~$ focus", color: "text-primary", delay: 2 },
    { text: "Machine Learning", color: "text-foreground", delay: 2.2 },
    { text: "Computer Vision", color: "text-foreground", delay: 2.3 },
    { text: "Intelligent Applications", color: "text-foreground", delay: 2.4 },
    { text: "adina@portfolio:~$ _", color: "text-primary animate-pulse", delay: 2.8 }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                {personalData.title}
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-primary">
                {personalData.secondaryTitle}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {personalData.heroSubtitle}
              </p>
            </div>

            {/* Capability Labels */}
            <div className="flex flex-wrap gap-3">
              {["AI / ML", "COMPUTER VISION", "FULL-STACK"].map((label, i) => (
                <motion.div 
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                  className="px-3 py-1.5 rounded bg-secondary/50 border border-border text-xs font-mono tracking-wider text-secondary-foreground"
                >
                  {label}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#projects">
                <Button size="lg" className="w-full sm:w-auto gap-2 text-primary-foreground">
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={personalData.resumeUrl} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-primary/20 hover:bg-primary/10">
                  <FileText className="h-4 w-4" /> View Resume
                </Button>
              </Link>
            </div>

            {/* Availability Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 pt-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                {personalData.heroAvailability}
              </p>
            </motion.div>
          </motion.div>

          {/* Animated Terminal / Code Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-600/30 blur-2xl rounded-xl opacity-50"></div>
            
            <div className="relative rounded-xl bg-[#0d0d0d] border border-border shadow-2xl overflow-hidden flex flex-col h-[320px]">
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 bg-[#161616] border-b border-border">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto flex items-center text-xs text-muted-foreground font-mono">
                  <Terminal className="w-3 h-3 mr-2" />
                  adina@portfolio: ~
                </div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-5 font-mono text-sm leading-relaxed overflow-hidden">
                {codeLines.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: line.delay || (idx * 0.15) }}
                    className={line.color}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
