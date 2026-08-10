"use client"

import * as React from "react"
import { personalData } from "@/data/personal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Message sent! (Note: This is a demo form)")
    }, 1000)
  }

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let&apos;s Build Something</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          I&apos;m open to software engineering, full-stack, and AI/ML opportunities. If you&apos;re working on an interesting product or looking for a developer who enjoys solving technical problems, I&apos;d love to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a href={`mailto:${personalData.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                {personalData.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <span className="text-muted-foreground">{personalData.phone}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <span className="text-muted-foreground">{personalData.location}</span>
            </div>
          </div>

          <div className="pt-4">
            <Link href={`mailto:${personalData.email}`}>
              <Button size="lg" className="gap-2">
                <Mail className="h-4 w-4" /> Email Me Directly
              </Button>
            </Link>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" required placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" required placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" required placeholder="Hi Adina, I'd like to talk about..." rows={5} />
              </div>
              <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
