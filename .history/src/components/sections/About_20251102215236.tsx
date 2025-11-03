'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'
import { GraduationCap, Target, Brain } from 'lucide-react'

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
      className="relative py-24 px-6 lg:px-12 bg-grid dark:bg-grid-light text-white dark:text-gray-900 transition-all duration-700 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
        {/* === Partie gauche === */}
        <div
          className={`bg-gray-900/70 dark:bg-gray-100/70 rounded-2xl shadow-2xl p-10 backdrop-blur-xl border border-purple-500/20 transition-all duration-700 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            {language === 'FR' ? 'À propos de moi' : 'About Me'}
          </h2>

          <p className="leading-relaxed text-justify text-gray-300 dark:text-gray-700">
            {language === 'FR' ? (
              <>
                Étudiante ingénieure en <span className="text-purple-400 font-semibold">informatique</span>, spécialisée en{' '}
                <span className="text-purple-400 font-semibold">Data Science</span> et en{' '}
                <span className="text-purple-400 font-semibold">Actuariat</span>. Passionnée par les{' '}
                <span className="text-blue-400 font-medium">modèles prédictifs</span>,{' '}
                <span className="text-blue-400 font-medium">l’analyse de données</span> et{' '}
                <span className="text-blue-400 font-medium">l’intelligence artificielle</span>, je conçois des solutions qui allient{' '}
                <span className="text-purple-400 font-semibold">rigueur scientifique</span> et{' '}
                <span className="text-purple-400 font-semibold">impact concret</span>.
              </>
            ) : (
              <>
                Engineering student specialized in{' '}
                <span className="text-purple-400 font-semibold">Data Science</span> and{' '}
                <span className="text-purple-400 font-semibold">Actuarial Science</span>. Passionate about{' '}
                <span className="text-blue-400 font-medium">predictive modeling</span>,{' '}
                <span className="text-blue-400 font-medium">data analytics</span> and{' '}
                <span className="text-blue-400 font-medium">artificial intelligence</span>, I design solutions that combine{' '}
                <span className="text-purple-400 font-semibold">scientific rigor</span> with{' '}
                <span className="text-purple-400 font-semibold">real-world impact</span>.
              </>
            )}
          </p>

          <p className="leading-relaxed mt-6 text-justify text-gray-300 dark:text-gray-700">
            {language === 'FR'
              ? "Mes intérêts portent sur le Machine Learning, les modèles génératifs (LLM) et les méthodes de Monte Carlo appliquées à la finance, l’assurance et la durabilité."
              : "My interests include Machine Learning, generative models (LLMs), and Monte Carlo methods applied to finance, insurance, and sustainability."}
          </p>

          <div className="mt-10 space-y-6 border-l-2 border-purple-500/40 pl-6">
            {[
              {
                icon: GraduationCap,
                titleFR: "Formation d'ingénieure en actuariat & data science",
                titleEN: 'Engineering background in actuarial & data science',
                descFR:
                  'Un parcours alliant statistique, finance et intelligence artificielle pour modéliser les risques complexes.',
                descEN:
                  'A background combining statistics, finance, and AI to model complex risks.',
              },
              {
                icon: Brain,
                titleFR: 'Esprit analytique et créatif',
                titleEN: 'Analytical and creative mindset',
                descFR:
                  'J’aime transformer les données en insights stratégiques à travers des approches innovantes et rigoureuses.',
                descEN:
                  'I love turning data into actionable insights using innovative and rigorous approaches.',
              },
              {
                icon: Target,
                titleFR: 'Vision orientée impact',
                titleEN: 'Impact-driven vision',
                descFR:
                  'Contribuer à des projets où la donnée soutient la durabilité, l’équité et la performance.',
                descEN:
                  'Contribute to projects where data drives sustainability, fairness, and performance.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <item.icon className="text-purple-400 w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">
                    {language === 'FR' ? item.titleFR : item.titleEN}
                  </h4>
                  <p className="text-sm text-gray-400 dark:text-gray-600">
                    {language === 'FR' ? item.descFR : item.descEN}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Partie droite === */}
        <div
          className={`bg-gray-900/70 dark:bg-gray-100/70 rounded-2xl shadow-2xl p-10 backdrop-blur-xl border border-blue-500/20 transition-all duration-700 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}
        >
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
                <div className="w-full bg-gray-700 dark:bg-gray-300 rounded-full h-2 overflow-hidden">
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
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {(language === 'FR'
              ? [
                  'Finance quantitative',
                  'Actuariat vie',
                  'IA générative & LLM',
                  'Analyse ESG',
                  'Innovation tech',
                  'Modélisation statistique',
                ]
              : [
                  'Quantitative finance',
                  'Life actuarial modeling',
                  'Generative AI & LLMs',
                  'ESG analytics',
                  'Tech innovation',
                  'Statistical modeling',
                ]
            ).map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
