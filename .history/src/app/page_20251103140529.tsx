import { Sidebar } from '@/components/layout/Sidebar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { SectionDots } from '@/components/layout/SectionDots'  // ✅ ajoute ceci

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Sidebar />

      {/* ✅ Points de navigation à droite */}
      <SectionDots />

      {/* ✅ Sections du portfolio */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
