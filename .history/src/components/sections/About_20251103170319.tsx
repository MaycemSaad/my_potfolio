'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'
import {
  GraduationCap,
  Target,
  Brain,
  Sparkles,
  Languages,
  Heart,
  Code2,
  Database,
  LineChart,
  Rocket,
  Cpu,
  BarChart3
} from 'lucide-react'

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
        { icon: BarChart3, name: 'Machine Learning', desc: 'Modèles prédictifs, deep learning et feature engineering' }
      ]
    : [
        { icon: LineChart, name: 'Quantitative finance', desc: 'Advanced financial models, derivatives pricing and portfolio management' },
        { icon: Database, name: 'Life actuarial', desc: 'Mortality modeling, insurance products and reserve calculations' },
        { icon: Brain, name: 'Generative AI & LLMs', desc: 'Transformers, RAG systems and innovative business applications' },
        { icon: Target, name: 'ESG analytics', desc: 'Sustainability metrics, ESG scoring and responsible investment' },
        { icon: Code2, name: 'Data engineering', desc: 'Data architectures, ETL pipelines and scalable platforms' },
        { icon: BarChart3, name: 'Machine Learning', desc: 'Predictive modeling, deep learning and feature engineering' }
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
      className="relative py-24 px-6 lg:px-12 bg-gray-950 text-gray-100 min-h-screen flex items-center overflow-hidden"
    >
      {/* === Fond grille subtile === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* === Bulles animées === */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch z-10">
        {/* === Colonne gauche === */}
        <div className="flex flex-col">
          <div
            className={`group bg-gray-900/90 rounded-3xl shadow-2xl p-8 lg:p-10 backdrop-blur-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-700 hover:shadow-purple-500/10 flex-1 min-h-[800px] ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            {/* === Titre === */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 animate-pulse"></div>
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
              <p className="leading-relaxed text-gray-300">
                {language === 'FR'
                  ? "Je suis étudiante en 2ᵉ année d’ingénierie en actuariat, passionnée par l’application de la data science à la finance et à l’assurance."
                  : "I'm a 2nd-year actuarial engineering student passionate about applying data science to finance and insurance."}
              </p>
              <p className="leading-relaxed text-gray-300">
                {language === 'FR'
                  ? "Mon parcours m’a permis de développer des compétences solides en modélisation statistique, calcul actuariel et programmation scientifique, notamment avec Python, R, et SQL."
                  : "My background has given me strong skills in statistical modeling, actuarial computation, and scientific programming with Python, R, and SQL."}
              </p>
              <p className="leading-relaxed text-gray-300">
                {language === 'FR'
                  ? "J’accorde une grande importance à la rigueur, la clarté des analyses et la recherche de solutions innovantes, en particulier dans le domaine de l’actuariat vie et de l’IA appliquée."
                  : "I value rigor, clear analysis, and the pursuit of innovative solutions, particularly in life actuarial work and applied AI."}
              </p>
              <p className="leading-relaxed text-gray-300">
                {language === 'FR'
                  ? "Je me prépare actuellement à un double diplôme avec l’Université du Mans en actuariat, dans le but de renforcer mes compétences analytiques et financières."
                  : "I am currently preparing for a double degree with Le Mans University in Actuarial Science to strengthen my analytical and financial expertise."}
              </p>
            </div>
          </div>
        </div>

        {/* === Colonne droite === */}
        <div className="flex flex-col space-y-8">
          {/* === Langues === */}
          <div
            className={`group bg-gray-900/90 rounded-3xl shadow-2xl p-8 lg:p-10 backdrop-blur-xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-700 hover:shadow-blue-500/10 flex-1 min-h-[400px] ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Languages className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-semibold text-blue-300">
                {language === 'FR' ? 'Langues' : 'Languages'}
              </h3>
            </div>
            <div className="space-y-5">
              {languages.map((lang, i) => (
                <div key={i}>
                  <div className="flex justify-between text-gray-300 mb-1">
                    <span>
                      {lang.flag} {language === 'FR' ? lang.nameFR : lang.nameEN}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {language === 'FR' ? lang.levelFR : lang.levelEN}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${lang.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === Centres d’intérêt === */}
          <div
            className={`group bg-gray-900/90 rounded-3xl shadow-2xl p-8 lg:p-10 backdrop-blur-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-700 hover:shadow-green-500/10 flex-1 min-h-[400px] ${
              isVisible ? 'animate-slide-in-right animation-delay-300' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-semibold text-green-300">
                {language === 'FR' ? 'Centres d’intérêt' : 'Interests'}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => {
                const Icon = interest.icon
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveInterest(index)}
                    onMouseLeave={() => setActiveInterest(null)}
                    className={`p-4 rounded-xl border border-gray-800 bg-gray-950/50 hover:border-green-500/40 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-md hover:shadow-green-500/10 ${
                      activeInterest === index ? 'scale-[1.02]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-green-400" />
                      <h4 className="font-medium text-gray-200">{interest.name}</h4>
                    </div>
                    <p className="text-sm text-gray-400">{interest.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
