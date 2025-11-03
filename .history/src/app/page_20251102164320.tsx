import Navigation from "@/components/layout/Navigation"
import { Hero  from '@/components/sections/Hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Navigation />
      <Hero />
    </main>
  )
}