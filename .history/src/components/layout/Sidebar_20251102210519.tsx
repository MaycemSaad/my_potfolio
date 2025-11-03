'use client'

import { useEffect, useState } from 'react'
import { Home, User, Code2, Briefcase, MessageSquare, Globe } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero')
  const { language, toggleLanguage } = useLanguageTheme()

  const sections = [
    { id: 'hero', icon: <Home size={20} /> },
    { id: 'about', icon: <User size={20} /> },
    { id: 'skills', icon: <Code2 size={20} /> },
    { id: 'projects', icon: <Briefcase size={20} /> },
    { id: 'contact', icon: <MessageSquare size={20} /> },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      let current = 'hero'
      sections.forEach((section) => {
        const el = document.getElementById(section.id)
        if (el && el.offsetTop - 100 <= scrollPos) {
          current = section.id
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-6 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-gray-800">
      {/* Navigation icons */}
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`p-2 rounded-xl transition-all ${
            activeSection === section.id
              ? 'bg-white/10 text-white border border-white/20'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {section.icon}
        </button>
      ))}

      <div className="border-t border-gray-700 w-8 my-2" />

      {/* Theme + Language */}
      <div className="flex flex-col items-center space-y-4">
        <ThemeToggle />
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition flex flex-col items-center"
        >
          <Globe size={18} />
          <span className="text-xs mt-1">{language}</span>
        </button>
      </div>
    </aside>
  )
}
