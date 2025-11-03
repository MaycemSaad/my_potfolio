'use client'

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const { language } = useLanguageTheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => setIsVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 
                 bg-grid dark:bg-grid-light text-white dark:text-gray-900 
                 transition-all duration-700 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* === Texte gauche === */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="block text-blue-500 tracking-widest">
              DATA SCIENTIST
            </span>
            <span className="block text-blue-500 text-4xl">&</span>
            <span className="inline-block mt-3 px-6 py-2 bg-gradient-to-r from-purple-600/40 to-blue-600/40 
                             border border-blue-400/60 rounded-md shadow-[0_0_20px_rgba(99,102,241,0.5)] 
                             backdrop-blur-sm font-semibold tracking-wider text-white dark:text-gray-900">
              ACTUAIRE
            </span>
            <span className="block italic text-purple-400 text-4xl mt-3 tracking-wide">
              INGÉNIEURE
            </span>
          </h1>

          <p className="mt-6 text-gray-300 dark:text-gray-700 text-lg max-w-lg leading-relaxed">
            {language === 'FR'
              ? "Étudiante ingénieure en informatique spécialisée en Data Science et Actuariat. Expertise en Machine Learning, IA générative et modélisation statistique. À la recherche d’un stage de fin d’études à partir de janvier 2026."
              : "Engineering student specialized in Data Science and Actuarial Science. Expertise in Machine Learning, Generative AI, and statistical modeling. Seeking a final-year internship starting January 2026."}
          </p>

          <div className="mt-10">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full 
                               font-medium text-white shadow-[0_0_15px_rgba(99,102,241,0.6)] 
                               hover:shadow-[0_0_25px_rgba(99,102,241,0.9)] hover:scale-105 transition-all">
              {language === 'FR' ? 'Voir mes projets' : 'View my projects'}
            </button>
          </div>
        </div>

        {/* === Carte de profil — version rectangle élégante === */}
        <div
          className={`relative bg-gradient-to-br from-[#0f0f1a]/90 to-[#1b1b2f]/90 
                      border border-[#2a2a40] shadow-[0_0_40px_rgba(100,100,255,0.1)] 
                      backdrop-blur-md p-8 rounded-xl transition-all duration-700 
                      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-40 h-40 overflow-hidden rounded-lg shadow-[0_0_25px_rgba(168,85,247,0.5)] border border-purple-500/30">
              <img
                src="/Photo-de-profil.jpg"
                alt="Mayssem Saad"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold">Mayssem Saad</h3>
              <p className="text-purple-400 font-medium">
                Data Scientist & Actuary
              </p>
              <p className="flex items-center justify-center text-sm text-gray-400 mt-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                {language === 'FR'
                  ? 'Disponible Janvier 2026'
                  : 'Available January 2026'}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>saadmaycem99@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+216 52 715 523</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Tozeur, Tunisia</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/mayssem-saad-a13799226"
                target="_blank"
                className="p-2 bg-[#151528] rounded-md hover:bg-blue-600/50 transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-200" />
              </a>
              <a
                href="https://github.com/MaycemSaad"
                target="_blank"
                className="p-2 bg-[#151528] rounded-md hover:bg-purple-600/50 transition-all"
              >
                <Github className="w-5 h-5 text-gray-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
