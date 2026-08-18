import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { WhatIWorkOn } from "@/components/sections/WhatIWorkOn"
import { Projects } from "@/components/sections/Projects"
import { MLPipeline } from "@/components/sections/MLPipeline"
import { Experience } from "@/components/sections/Experience"
import { Skills } from "@/components/sections/Skills"
import { Certifications } from "@/components/sections/Certifications"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIWorkOn />
      <Projects />
      <MLPipeline />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </>
  )
}
