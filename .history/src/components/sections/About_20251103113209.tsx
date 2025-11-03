'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'
import { GraduationCap, Target, Brain, Sparkles, Languages, Heart, Code2, Database, LineChart } from 'lucide-react'

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
        { icon: LineChart, name: 'Finance quantitative', desc: 'Modèles financiers avancés et pricing dérivés' },
        { icon: Database, name: 'Actuariat vie', desc: 'Modélisation mortalité et produits assurance' },
        { icon: Brain, name: 'IA générative & LLM', desc: 'Transformers et applications business' },
        { icon: Target, name: 'Analyse ESG', desc: 'Metrics durabilité et investissement responsable' },
        { icon: Code2, name: 'Innovation tech', desc: 'Nouvelles technologies et architecture data' },
        { icon: GraduationCap, name: 'Modélisation statistique', desc: 'Machine Learning et méthodes bayésiennes' }
      ]
    : [
        { icon: LineChart, name: 'Quantitative finance', desc: 'Advanced financial models and derivatives pricing' },
        { icon: Database, name: 'Life actuarial', desc: 'Mortality modeling and insurance products' },
        { icon: Brain, name: 'Generative AI & LLMs', desc: 'Transformers and business applications' },
        { icon: Target, name: 'ESG analytics', desc: 'Sustainability metrics and responsible investment' },
        { icon: Code2, name: 'Tech innovation', desc: 'Emerging technologies and data architecture' },
        { icon: GraduationCap, name: 'Statistical modeling', desc: 'Machine Learning and Bayesian methods' }
      ]

  const languages = [
    { nameFR: 'Arabe', nameEN: 'Arabic', levelFR: 'Langue maternelle', levelEN: 'Native', percent: 100, flag: '🇹🇳' },
    { nameFR: 'Français', nameEN: 'French', levelFR: 'Courant', levelEN: 'Fluent', percent: 90, flag: '🇫🇷' },
    { nameFR: 'Anglais', nameEN: 'English', levelFR: 'Courant', levelEN: 'Fluent', percent: 85, flag: '🇺🇸' },
    { nameFR: 'Italien', nameEN: 'Italian', levelFR: 'Débutante', levelEN: 'Beginner', percent: 40, flag: '🇮🇹' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-6 lg:px-12 bg-grid dark:bg-grid-light text-white dark:text-gray-900 transition-all duration-700 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch relative z-10">
        {/* === Left Column - Enhanced === */}
        <div
          className={`group bg-gray-900/80 dark:bg-white/90 rounded-3xl shadow-2xl p-8 lg:p-10 backdrop-blur-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-700 hover:shadow-purple-500/10 hover:shadow-2xl ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
          }`}
        >
          {/* Header with animated icon */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {language === 'FR' ? 'À propos de moi' : 'About Me'}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2"></div>
            </div>
          </div>

          {/* Enhanced description with highlighted skills */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-justify text-gray-300 dark:text-gray-700">
              {language === 'FR' ? (
                <>
                  <span className="text-purple-400 font-semibold">Étudiante ingénieure</span> passionnée par la convergence entre la{' '}
                  <span className="text-blue-400 font-medium">Data Science</span>, l'
                  <span className="text-blue-400 font-medium">Intelligence Artificielle</span> et l'
                  <span className="text-blue-400 font-medium">Actuariat</span>. Je développe des solutions innovantes qui transforment 
                  les données complexes en <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">insights stratégiques</span>.
                </>
              ) : (
                <>
                  <span className="text-purple-400 font-semibold">Engineering student</span> passionate about the convergence of{' '}
                  <span className="text-blue-400 font-medium">Data Science</span>,{' '}
                  <span className="text-blue-400 font-medium">Artificial Intelligence</span>, and{' '}
                  <span className="text-blue-400 font-medium">Actuarial Science</span>. I develop innovative solutions that transform 
                  complex data into <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">strategic insights</span>.
                </>
              )}
            </p>

            <p className="leading-relaxed text-justify text-gray-300 dark:text-gray-700">
              {language === 'FR'
                ? "Expertise en modèles prédictifs, deep learning, et méthodes stochastiques appliquées à la finance quantitative, l'assurance et l'analyse ESG."
                : "Expertise in predictive modeling, deep learning, and stochastic methods applied to quantitative finance, insurance, and ESG analytics."}
            </p>
          </div>

          {/* Enhanced features with hover effects */}
          <div className="mt-10 space-y-6 border-l-2 border-gradient-to-b from-purple-500 to-blue-500 pl-6">
            {[
              {
                icon: GraduationCap,
                titleFR: "Double diplôme Ingénierie & Actuariat",
                titleEN: 'Dual Degree Engineering & Actuarial Science',
                descFR: 'Combinaison unique de compétences techniques avancées et d\'expertise quantitative en finance et assurance.',
                descEN: 'Unique combination of advanced technical skills and quantitative expertise in finance and insurance.',
              },
              {
                icon: Brain,
                titleFR: 'Innovation par la Data & IA',
                titleEN: 'Innovation through Data & AI',
                descFR: 'Transformation des défis complexes en opportunités via des approches data-driven et algorithmes innovants.',
                descEN: 'Transforming complex challenges into opportunities through data-driven approaches and innovative algorithms.',
              },
              {
                icon: Target,
                titleFR: 'Impact Business & Technologique',
                titleEN: 'Business & Technological Impact',
                descFR: 'Développement de solutions qui allient performance technique et valeur business tangible.',
                descEN: 'Developing solutions that combine technical excellence with tangible business value.',
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className="group/item flex items-start space-x-4 p-4 rounded-xl bg-gray-800/50 dark:bg-gray-100/50 hover:bg-gray-800/70 dark:hover:bg-gray-100/70 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => {}}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-white dark:text-gray-900 group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-purple-400 group-hover/item:to-blue-400 group-hover/item:bg-clip-text transition-all duration-300">
                    {language === 'FR' ? item.titleFR : item.titleEN}
                  </h4>
                  <p className="text-sm text-gray-400 dark:text-gray-600 mt-1 leading-relaxed">
                    {language === 'FR' ? item.descFR : item.descEN}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Right Column - Enhanced === */}
        <div className="space-y-8">
          {/* Languages Card */}
          <div
            className={`group bg-gray-900/80 dark:bg-white/90 rounded-3xl shadow-2xl p-8 lg:p-10 backdrop-blur-xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-700 hover:shadow-blue-500/10 ${
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
                <div 
                  key={i} 
                  className="group/item p-4 rounded-xl bg-gray-800/50 dark:bg-gray-100/50 hover:bg-gray-800/70 dark:hover:bg-gray-100/70 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium text-white dark:text-gray-900">
                        {language === 'FR' ? lang.nameFR : lang.nameEN}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400 dark:text-gray-600 px-3 py-1 bg-gray-700/50 dark:bg-gray-200/50 rounded-full">
                      {language === 'FR' ? lang.levelFR : lang.levelEN}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 dark:bg-gray-300 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${lang.percent}%` : '0%',
                        transitionDelay: `${i * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Card */}
          <div
            className={`group bg-gray-900/80 dark:bg-white/90 rounded-3xl shadow-2xl p-8 lg:p-10 backdrop-blur-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-700 hover:shadow-green-500/10 ${
              isVisible ? 'animate-slide-in-right animation-delay-300' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {language === 'FR' ? "Expertises & Passions" : 'Expertise & Passions'}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl bg-gray-800/50 dark:bg-gray-100/50 border border-transparent hover:border-green-500/50 cursor-pointer transition-all duration-300 group/interest ${
                    activeInterest === i ? 'bg-gray-800/70 dark:bg-gray-100/70 border-green-500/50' : ''
                  }`}
                  onMouseEnter={() => setActiveInterest(i)}
                  onMouseLeave={() => setActiveInterest(null)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeInterest === i 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                        : 'bg-gray-700/50 dark:bg-gray-200/50'
                    }`}>
                      <interest.icon className={`w-4 h-4 transition-all duration-300 ${
                        activeInterest === i ? 'text-white' : 'text-gray-400 dark:text-gray-600'
                      }`} />
                    </div>
                    <span className={`font-medium text-sm transition-all duration-300 ${
                      activeInterest === i 
                        ? 'text-green-400' 
                        : 'text-white dark:text-gray-900'
                    }`}>
                      {interest.name}
                    </span>
                  </div>
                  <p className={`text-xs text-gray-400 dark:text-gray-600 transition-all duration-300 ${
                    activeInterest === i ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'
                  }`}>
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