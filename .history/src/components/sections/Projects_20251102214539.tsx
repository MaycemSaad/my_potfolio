'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'

export function Projects() {
  const { language } = useLanguageTheme()
  const [index, setIndex] = useState(0)
  const [imgIndex, setImgIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  const projects = [
    {
      id: 'esg',
      titleFR: 'Plateforme ESG',
      titleEN: 'ESG Platform',
      subtitleFR: "Application d’analyse de rapports de durabilité",
      subtitleEN: "Sustainability report analysis platform",
      descriptionFR:
        "Conception et déploiement d'une plateforme d’analyse ESG automatisée : extraction intelligente depuis PDF, pipeline ETL, matching sémantique (NLP) et interface web pour visualiser plus de 100 KPI.",
      descriptionEN:
        "Design and deployment of an automated ESG analytics platform with smart PDF extraction, ETL pipeline, NLP semantic matching, and dashboard for 100+ KPIs.",
      techs: ['Python', 'Streamlit', 'NLP', 'OCR', 'Regex', 'MongoDB'],
      demo: '#',
      source: '#',
      images: [
        '/projects/ESG.png',
        '/projects/esg9.jpg',
        '/projects/esg8.jpg',
        '/projects/esg7.jpg',
      ],
    },
    {
      id: 'actuarialmind',
      titleFR: 'ActuarialMind',
      titleEN: 'ActuarialMind',
      subtitleFR: 'Plateforme RAG pour analyses actuarielle & financière',
      subtitleEN: 'RAG platform for actuarial & financial analysis',
      descriptionFR:
        "Solution de question-réponse intelligente pour rapports actuariels : moteur hybride (FAISS + Sentence-BERT + Scikit-learn), chatbot expert (Ollama + Flask).",
      descriptionEN:
        "Intelligent Q&A system for actuarial reports: hybrid engine (FAISS + Sentence-BERT + Scikit-learn), expert chatbot (Ollama + Flask).",
      techs: ['FAISS', 'Sentence-BERT', 'Flask', 'React', 'MongoDB'],
      demo: '#',
      source: '#',
      images: ['/projects/ActuarialMind.png', '/projects/act2.png'],
    },
  ]

  const active = projects[index]

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 bg-grid dark:bg-grid-light text-white dark:text-gray-900 transition-all duration-700 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* === HEADER === */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4">
            {language === 'FR' ? (
              <>
                Projets <span className="text-gradient">Principaux</span>
              </>
            ) : (
              <>
                Featured <span className="text-gradient">Projects</span>
              </>
            )}
          </h2>
          <p className="text-gray-300 dark:text-gray-700 text-lg max-w-3xl mx-auto">
            {language === 'FR'
              ? 'Une sélection de projets combinant IA, Data Science et Actuariat.'
              : 'A selection of projects combining AI, Data Science, and Actuarial Science.'}
          </p>
        </div>

        {/* === PROJECT SECTION === */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? 'animate-slide-in-up' : 'opacity-0'
          }`}
        >
          {/* === LEFT SIDE === */}
          <div>
            <h3 className="text-3xl font-semibold mb-2">
              {language === 'FR' ? active.titleFR : active.titleEN}
            </h3>
            <p className="text-lg text-gray-300 dark:text-gray-700 mb-4">
              {language === 'FR' ? active.subtitleFR : active.subtitleEN}
            </p>
            <p className="text-gray-400 dark:text-gray-600 leading-relaxed text-justify mb-6">
              {language === 'FR' ? active.descriptionFR : active.descriptionEN}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {active.techs.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-gray-800 dark:bg-gray-200 rounded-full text-xs text-gray-200 dark:text-gray-800 border border-gray-700 dark:border-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={active.demo}
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow hover:scale-105 transition"
              >
                <ExternalLink className="w-4 h-4" />
                {language === 'FR' ? 'Voir la démo' : 'Live Demo'}
              </a>
              <a
                href={active.source}
                className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800 dark:bg-gray-200 rounded-full text-gray-200 dark:text-gray-800 border border-gray-700 dark:border-gray-300 hover:scale-105 transition"
              >
                <Github className="w-4 h-4" />
                {language === 'FR' ? 'Code source' : 'Source Code'}
              </a>
            </div>
          </div>

{/* === RIGHT SIDE RECTANGULAR IMAGE === */}
<div className="relative group w-full">
  <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)] bg-gradient-to-br from-gray-900/90 to-gray-800/80 dark:from-gray-100 dark:to-gray-200 flex items-center justify-center">
    <img
      src={active.images[imgIndex]}
      alt={active.titleEN}
      className="object-cover w-full h-[420px] rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
    />
  </div>

  {/* === IMAGE CONTROLS === */}
  <div className="absolute inset-0 flex justify-between items-center px-3">
    <button
      onClick={() =>
        setImgIndex((p) => (p - 1 + active.images.length) % active.images.length)
      }
      className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 transition rounded-full p-2 shadow-lg"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
    <button
      onClick={() => setImgIndex((p) => (p + 1) % active.images.length)}
      className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 transition rounded-full p-2 shadow-lg"
    >
      <ArrowRight className="w-5 h-5" />
    </button>
  </div>
</div>
        </div>

        {/* === NAVIGATION === */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setIndex((i) => (i - 1 + projects.length) % projects.length)}
            className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full p-2 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % projects.length)}
            className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full p-2 shadow-lg"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
