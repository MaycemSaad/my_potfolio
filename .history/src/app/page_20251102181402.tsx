import { Sidebar } from '@/components/layout/Sidebar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-grid text-white transition-colors duration-500">
      <Sidebar />

      <section className="animate-slide-in-left">
        <Hero />
      </section>

      <section className="animate-slide-in-right animation-delay-200">
        <About />
      </section>

      <section className="animate-slide-in-left animation-delay-400">
        <Skills />
      </section>

      <section className="animate-slide-in-right animation-delay-600">
        <Projects />
      </section>

      <section className="animate-slide-in-left animation-delay-800">
        <Experience />
      </section>

      <section className="animate-slide-in-right animation-delay-1000">
        <Contact />
      </section>
    </main>
  )
}
