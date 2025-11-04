'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'
import { GraduationCap, Target, Brain, Sparkles, Languages, Heart, Code2, Database, LineChart, Rocket, Cpu, BarChart3 } from 'lucide-react'

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeInterest, setActiveInterest] = useState<number | null>(null)
  const { language } = useLanguageTheme()
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const interests = language === 'FR'
    ? [
        { icon: LineChart, name: 'Finance quantitative', desc: 'Modèles financiers avancés, pricing dérivés et gestion de portefeuille' },
        { icon: Database, name: 'Actuariat vie', desc: 'Modélisation mortalité, produits assurance et calcul de réserves' },
        { icon: Brain, name: 'IA générative & LLM', desc: 'Transformers, RAG systems et applications business innovantes' },
        { icon: Target, name: 'Analyse ESG', desc: 'Metrics durabilité, scoring ESG et investissement responsable' },
        { icon: Code2, name: 'Ingénierie données', desc: 'Architectures data, pipelines ETL et plateformes scalable' },
        { icon: BarChart3, name: 'Machine Learning', desc: 'Modèles prédictifs, deep learning et feature engineering' },
      ]
    : [
        { icon: LineChart, name: 'Quantitative finance', desc: 'Advanced financial models, derivatives pricing and portfolio management' },
        { icon: Database, name: 'Life actuarial', desc: 'Mortality modeling, insurance products and reserve calculations' },
        { icon: Brain, name: 'Generative AI & LLMs', desc: 'Transformers, RAG systems and innovative business applications' },
        { icon: Target, name: 'ESG analytics', desc: 'Sustainability metrics, ESG scoring and responsible investment' },
        { icon: Code2, name: 'Data engineering', desc: 'Data architectures, ETL pipelines and scalable platforms' },
        { icon: BarChart3, name: 'Machine Learning', desc: 'Predictive modeling, deep learning and feature engineering' },
      ]

  const languages = [
    { nameFR: 'Arabe', nameEN: 'Arabic', levelFR: 'Langue maternelle', levelEN: 'Native', percent: 100, flag: '🇹🇳' },
    { nameFR: 'Français', nameEN: 'French', levelFR: 'Courant', levelEN: 'Fluent', percent: 95, flag: '🇫🇷' },
    { nameFR: 'Anglais', nameEN: 'English', levelFR: 'Courant', levelEN: 'Fluent', percent: 90, flag: '🇺🇸' },
    { nameFR: 'Italien', nameEN: 'Italian', levelFR: 'Débutante', levelEN: 'Beginner', percent: 40, flag: '🇮🇹' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-6 lg:px-12 bg-gray-950 text-gray-100 transition-all duration-700 min-h-screen flex items-center overflow-hidden"
    >
      {/* === Fond grille subtile === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* === Effets animés === */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch relative z-10">
        {/* === Colonne gauche === */}
        <div className="flex flex-col">
          <div
            className={`group bg-gray-900 rounded-3xl shadow-2xl p-8 lg:p-10 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-700 hover:shadow-purple-500/10 flex-1 min-h-[800px] flex flex-col ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {language === 'FR' ? 'À propos de moi' : 'About Me'}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2"></div>
              </div>
            </div>

            {/* === Texte === */}
            <div className="space-y-6 flex-1">
              <p className="text-lg leading-relaxed text-justify text-gray-300">
                {language === 'FR'
                  ? <>
                      <span className="text-purple-400 font-semibold">Étudiante ingénieure en informatique</span> en double diplôme avec l’Université du Mans, spécialisée en <span className="text-blue-400 font-medium">Data Science</span> et <span className="text-blue-400 font-medium">Actuariat</span>.
                    </>
                  : <>
                      <span className="text-purple-400 font-semibold">Computer Engineering student</span> in a double degree with Le Mans University, specialized in <span className="text-blue-400 font-medium">Data Science</span> and <span className="text-blue-400 font-medium">Actuarial Science</span>.
                    </>
                }
              </p>
            </div>
          </div>
        </div>

        {/* === Colonne droite === */}
        <div className="flex flex-col space-y-8">
          {/* Langues */}
          <div
            className={`group bg-gray-900 rounded-3xl shadow-2xl p-8 lg:p-10 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-700 hover:shadow-blue-500/10 flex-1 min-h-[400px] ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Languages className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {language === 'FR' ? 'Langues' : 'Languages'}
              </h3>
            </div>

            <div className="space-y-6">
              {languages.map((lang, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium text-gray-100">
                        {language === 'FR' ? lang.nameFR : lang.nameEN}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400 px-3 py-1 bg-gray-700/50 rounded-full">
                      {language === 'FR' ? lang.levelFR : lang.levelEN}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${lang.percent}%` : '0%',
                        transitionDelay: `${i * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centres d'intérêt */}
          <div
            className={`group bg-gray-900 rounded-3xl shadow-2xl p-8 lg:p-10 border border-green-500/30 hover:border-green-500/50 transition-all duration-700 hover:shadow-green-500/10 flex-1 min-h-[400px] ${
              isVisible ? 'animate-slide-in-right animation-delay-300' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {language === 'FR' ? "Expertises & Domaines" : 'Expertise & Domains'}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl bg-gray-800/50 border border-transparent hover:border-green-500/50 cursor-pointer transition-all duration-300 ${
                    activeInterest === i ? 'bg-gray-800/70 border-green-500/50' : ''
                  }`}
                  onMouseEnter={() => setActiveInterest(i)}
                  onMouseLeave={() => setActiveInterest(null)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeInterest === i
                          ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                          : 'bg-gray-700/50'
                      }`}
                    >
                      <interest.icon
                        className={`w-3.5 h-3.5 ${
                          activeInterest === i ? 'text-white' : 'text-gray-400'
                        }`}
                      />
                    </div>
                    <span
                      className={`font-medium text-xs ${
                        activeInterest === i ? 'text-green-400' : 'text-gray-100'
                      }`}
                    >
                      {interest.name}
                    </span>
                  </div>
                  <p
                    className={`text-xs text-gray-400 transition-all duration-300 leading-tight ${
                      activeInterest === i ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                    } overflow-hidden`}
                  >
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
