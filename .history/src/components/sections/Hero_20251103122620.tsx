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
        {/* === Texte principal === */}
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

        {/* === Carte profil === */}
        <div
          className={`relative bg-gray-900/70 dark:bg-white/80 rounded-2xl p-8 shadow-2xl border border-purple-500/20 
                      backdrop-blur-2xl text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-2xl rounded-2xl"></div>

          <div className="relative flex flex-col items-center space-y-6 z-10">
            <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
              <img
                src="/Photo-de-profil.jpg"
                alt="Mayssem Saad - Data Scientist & Actuary"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Mayssem Saad</h3>
              <p className="text-purple-400 font-medium">
                Data Scientist & Actuary
              </p>
              <div className="flex items-center justify-center space-x-2 mt-2 text-sm text-gray-400 dark:text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span>
                  {language === 'FR'
                    ? 'Disponible Janvier 2026'
                    : 'Available January 2026'}
                </span>
              </div>
            </div>

            {/* === Infos contact === */}
            <div className="flex flex-col items-center space-y-3 text-gray-300 dark:text-gray-700 text-sm">
              {[
                { icon: Mail, text: 'saadmaycem99@gmail.com' },
                { icon: Phone, text: '+216 52 715 523' },
                { icon: MapPin, text: 'Tozeur, Tunisia' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Icon className="h-4 w-4 text-blue-400" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* === Réseaux sociaux === */}
            <div className="flex space-x-4 justify-center pt-3">
              {[
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/mayssem-saad-a13799226',
                  color: 'blue',
                },
                {
                  icon: Github,
                  href: 'https://github.com/MaycemSaad',
                  color: 'purple',
                },
              ].map(({ icon: Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  className={`p-2 bg-gray-800 dark:bg-gray-200 rounded-lg hover:bg-${color}-900 dark:hover:bg-${color}-300 
                             transition-all duration-300 transform hover:scale-110 shadow-md`}
                >
                  <Icon className="h-5 w-5 text-gray-300 dark:text-gray-700" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
