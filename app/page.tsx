import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { CaseStudies } from "@/components/sections/case-studies"
import { Skills } from "@/components/sections/skills"
import { Testimonials } from "@/components/sections/testimonials"
import { Process } from "@/components/sections/process"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <CaseStudies />
      <Skills />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
