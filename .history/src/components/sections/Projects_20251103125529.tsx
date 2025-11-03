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
      titleFR: 'Plateforme IA d’Analyse ESG',
      titleEN: 'AI ESG Analytics Platform',
      subtitleFR: 'Automatisation complète de l’analyse des rapports RSE',
      subtitleEN: 'Automated ESG report intelligence system',
      descriptionFR:
        "Développement d’une plateforme d’analyse ESG intégrant extraction intelligente (OCR + NLP), moteur de similarité sémantique, pipeline ETL et interface web pour suivre +100 KPI. Un chatbot LLM (Ollama) aide à interpréter les rapports.",
      descriptionEN:
        "Developed an ESG analytics platform integrating smart extraction (OCR + NLP), semantic matching engine, ETL pipeline, and web dashboard with over 100 KPIs. Integrated an LLM chatbot for report interpretation.",
      techs: ['Python', 'Streamlit', 'NLP', 'OCR', 'MongoDB', 'Regex', 'Ollama'],
      demo: '#',
      source: '#',
      images: ['/projects/ESG.png', '/projects/esg8.jpg', '/projects/esg9.jpg'],
    },
    {
      id: 'actuarialmind',
      titleFR: 'ActuarialMind',
      titleEN: 'ActuarialMind',
      subtitleFR: 'Plateforme RAG pour analyses actuarielles & financières',
      subtitleEN: 'RAG platform for actuarial and financial analysis',
      descriptionFR:
        "Chatbot d’analyse actuarielle intégrant moteur de recherche sémantique (FAISS + Sentence-BERT + Scikit-learn) et backend Flask. Interface React, stockage MongoDB et mémoire conversationnelle intelligente.",
      descriptionEN:
        "Actuarial analytics chatbot powered by FAISS + Sentence-BERT + Scikit-learn hybrid search and Flask backend. Includes React UI, MongoDB, and smart chat memory.",
      techs: ['FAISS', 'Sentence-BERT', 'Flask', 'React', 'MongoDB'],
      demo: '#',
      source: '#',
      images: ['/projects/ActuarialMind.png', '/projects/act2.png'],
    },
    {
      id: 'due-diligence',
      titleFR: 'Due Diligence Intelligence',
      titleEN: 'Due Diligence Analyzer',
      subtitleFR: 'Analyse automatique de documents financiers',
      subtitleEN: 'AI-powered financial document analyzer',
      descriptionFR:
        "Application complète d’extraction et de scoring de rapports annuels et bilans financiers via LangChain, NLP et LLMs. Génération automatique de synthèses et de dashboards interactifs.",
      descriptionEN:
        "AI-driven extraction and scoring system for annual reports and balance sheets using LangChain, NLP, and LLMs. Auto-generates dashboards and insights.",
      techs: ['Python', 'LangChain', 'LLMs', 'Streamlit', 'Dash', 'MongoDB'],
      demo: '#',
      source: '#',
      images: ['/projects/due1.png', '/projects/due2.png'],
    },
  ]

  const active = projects[index]

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => setIsVisible(e.isIntersecting)),
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 bg-grid dark:bg-grid-light text-white dark:text-gray-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* === HEADER === */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4">
            {language === 'FR' ? (
              <>
                Mes <span className="text-gradient">Projets</span> en Action
              </>
            ) : (
              <>
                My <span className="text-gradient">Projects</span> in Action
              </>
            )}
          </h2>
          <p className="text-gray-300 dark:text-gray-700 text-lg max-w-3xl mx-auto">
            {language === 'FR'
              ? "Une immersion dans mes réalisations combinant Intelligence Artificielle, Data Science et Actuariat."
              : "An immersive look at my AI, Data Science, and Actuarial projects."}
          </p>
        </div>

        {/* === PROJECT GRID === */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* === TEXT SIDE === */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-semibold mb-2">
              {language === 'FR' ? active.titleFR : active.titleEN}
            </h3>
            <p className="text-lg text-purple-400 mb-4">
              {language === 'FR' ? active.subtitleFR : active.subtitleEN}
            </p>
            <p className="text-gray-400 dark:text-gray-600 leading-relaxed mb-6 text-justify">
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

          {/* === IMAGE SIDE === */}
          <div
            className="relative group rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.25)] 
                       bg-gray-900/70 dark:bg-gray-100/80 backdrop-blur-xl 
                       transition-transform duration-700 hover:scale-[1.02]"
          >
            <img
              src={active.images[imgIndex]}
              alt={active.titleEN}
              className="object-cover w-full h-[420px] transition-all duration-700 ease-in-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button
                onClick={() =>
                  setImgIndex((p) => (p - 1 + active.images.length) % active.images.length)
                }
                className="bg-gray-900/60 dark:bg-gray-200/60 hover:bg-gray-800 dark:hover:bg-gray-300 transition rounded-full p-2 shadow-md"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setImgIndex((p) => (p + 1) % active.images.length)
                }
                className="bg-gray-900/60 dark:bg-gray-200/60 hover:bg-gray-800 dark:hover:bg-gray-300 transition rounded-full p-2 shadow-md"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* === NAVIGATION === */}
        <div className="flex justify-center gap-4 mt-12 animate-fade-in">
          <button
            onClick={() => setIndex((i) => (i - 1 + projects.length) % projects.length)}
            className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full p-2 shadow-lg transition-transform hover:scale-110"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % projects.length)}
            className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full p-2 shadow-lg transition-transform hover:scale-110"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
