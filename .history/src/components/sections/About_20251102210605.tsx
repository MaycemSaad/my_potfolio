'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguageTheme()
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 px-6 lg:px-12 bg-grid text-white dark:text-gray-900 transition-all duration-700 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
        {/* === Partie gauche === */}
        <div
          className={`bg-gray-900/60 dark:bg-gray-100/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-purple-500/10 flex flex-col justify-between h-full transition-all duration-700 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gradient">
              {language === 'FR' ? 'À propos de moi' : 'About Me'}
            </h2>
            <p className="leading-relaxed text-justify">
              {language === 'FR'
                ? "Étudiante ingénieure en informatique, spécialisée en Data Science et en Actuariat. Mon parcours combine l’analyse de données, la modélisation statistique et l’intelligence artificielle pour transformer des problématiques complexes en solutions concrètes à forte valeur ajoutée."
                : "Engineering student specialized in Data Science and Actuarial Science. My background combines data analysis, statistical modeling, and artificial intelligence to turn complex problems into impactful, data-driven solutions."}
            </p>

            <p className="leading-relaxed mt-6 text-justify">
              {language === 'FR'
                ? "Mon intérêt se concentre sur le Machine Learning, les LLM et les méthodes de Monte Carlo, appliqués à la gestion des risques et à la prévision financière."
                : "My interests focus on Machine Learning, LLMs, and Monte Carlo methods applied to risk management and financial forecasting."}
            </p>

            <p className="leading-relaxed mt-6 text-justify">
              {language === 'FR'
                ? "Je cherche à évoluer dans un environnement où la technologie et les données se mettent au service de l’innovation et de l’impact durable."
                : "I aim to evolve in an environment where technology and data serve innovation and sustainable impact."}
            </p>
          </div>
        </div>

        {/* === Partie droite === */}
        <div
          className={`bg-gray-900/60 dark:bg-gray-100/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-blue-500/10 flex flex-col justify-between h-full transition-all duration-700 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}
        >
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gradient">
              {language === 'FR' ? 'Langues' : 'Languages'}
            </h3>
            <div className="space-y-6">
              {[
                { nameFR: 'Arabe', nameEN: 'Arabic', levelFR: 'Langue maternelle', levelEN: 'Native', percent: 100 },
                { nameFR: 'Français', nameEN: 'French', levelFR: 'Courant', levelEN: 'Fluent', percent: 90 },
                { nameFR: 'Anglais', nameEN: 'English', levelFR: 'Courant', levelEN: 'Fluent', percent: 85 },
                { nameFR: 'Italien', nameEN: 'Italian', levelFR: 'Débutante', levelEN: 'Beginner', percent: 40 },
              ].map((lang, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>{language === 'FR' ? lang.nameFR : lang.nameEN}</span>
                    <span>{language === 'FR' ? lang.levelFR : lang.levelEN}</span>
                  </div>
                  <div className="w-full bg-gray-700 dark:bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: isVisible ? `${lang.percent}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-gradient">
              {language === 'FR' ? "Centres d'intérêt" : 'Interests'}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {language === 'FR' ? (
                <>
                  <li>Finance quantitative et actuariat vie</li>
                  <li>Intelligence artificielle et LLM appliqués</li>
                  <li>Analyse de données ESG et durabilité</li>
                  <li>Projets open-source et innovation technologique</li>
                  <li>Recherche appliquée en modélisation statistique</li>
                </>
              ) : (
                <>
                  <li>Quantitative finance and life actuarial science</li>
                  <li>Artificial intelligence and applied LLMs</li>
                  <li>ESG data analysis and sustainability</li>
                  <li>Open-source projects and tech innovation</li>
                  <li>Applied research in statistical modeling</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
