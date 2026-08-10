import { Hero } from "@/components/sections/Hero"
import { WhatIBuild } from "@/components/sections/WhatIBuild"
import { FullStackHighlight } from "@/components/sections/FullStackHighlight"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"
import { Section } from "@/components/LayoutComponents"

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="what-i-build" className="bg-muted/30 pt-10">
        <WhatIBuild />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="full-stack" className="bg-primary/5">
        <FullStackHighlight />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="experience" className="bg-muted/30">
        <Experience />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact" className="bg-muted/30 pb-32">
        <Contact />
      </Section>
    </>
  )
}
