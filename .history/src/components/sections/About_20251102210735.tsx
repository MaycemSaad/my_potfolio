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
              {language === 'FR' ? (
                <>
                  Étudiante ingénieure en informatique, spécialisée en{' '}
                  <span className="text-purple-400 font-semibold">Data Science</span> et en{' '}
                  <span className="text-purple-400 font-semibold">Actuariat</span>. Mon parcours combine{' '}
                  <span className="text-blue-400 font-medium">l’analyse de données</span>,{' '}
                  <span className="text-blue-400 font-medium">la modélisation statistique</span> et{' '}
                  <span className="text-blue-400 font-medium">l’intelligence artificielle</span> pour transformer des
                  problématiques complexes en solutions concrètes à forte valeur ajoutée.
                </>
              ) : (
                <>
                  Engineering student specialized in{' '}
                  <span className="text-purple-500 font-semibold">Data Science</span> and{' '}
                  <span className="text-purple-500 font-semibold">Actuarial Science</span>. My background combines{' '}
                  <span className="text-blue-400 font-medium">data analysis</span>,{' '}
                  <span className="text-blue-400 font-medium">statistical modeling</span>, and{' '}
                  <span className="text-blue-400 font-medium">artificial intelligence</span> to turn complex problems
                  into impactful, data-driven solutions.
                </>
              )}
            </p>

            <p className="leading-relaxed mt-6 text-justify">
              {language === 'FR' ? (
                <>
                  Mon intérêt se concentre sur le{' '}
                  <span className="text-blue-400 font-semibold">Machine Learning</span>, les{' '}
                  <span className="text-blue-400 font-semibold">LLM</span> et les{' '}
                  <span className="text-blue-400 font-semibold">méthodes de Monte Carlo</span>, appliqués à la{' '}
                  <span className="text-purple-400 font-medium">gestion des risques</span> et à la{' '}
                  <span className="text-purple-400 font-medium">prévision financière</span>.
                </>
              ) : (
                <>
                  My interests focus on{' '}
                  <span className="text-blue-400 font-semibold">Machine Learning</span>,{' '}
                  <span className="text-blue-400 font-semibold">LLMs</span>, and{' '}
                  <span className="text-blue-400 font-semibold">Monte Carlo methods</span> applied to{' '}
                  <span className="text-purple-400 font-medium">risk management</span> and{' '}
                  <span className="text-purple-400 font-medium">financial forecasting</span>.
                </>
              )}
            </p>

            <p className="leading-relaxed mt-6 text-justify">
              {language === 'FR' ? (
                <>
                  Je cherche à évoluer dans un environnement où{' '}
                  <span className="text-blue-400 font-medium">la technologie</span> et{' '}
                  <span className="text-blue-400 font-medium">les données</span> se mettent au service de{' '}
                  <span className="text-purple-400 font-semibold">l’innovation</span> et de{' '}
                  <span className="text-purple-400 font-semibold">l’impact durable</span>.
                </>
              ) : (
                <>
                  I aim to grow in an environment where{' '}
                  <span className="text-blue-400 font-medium">technology</span> and{' '}
                  <span className="text-blue-400 font-medium">data</span> serve{' '}
                  <span className="text-purple-400 font-semibold">innovation</span> and{' '}
                  <span className="text-purple-400 font-semibold">sustainable impact</span>.
                </>
              )}
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
