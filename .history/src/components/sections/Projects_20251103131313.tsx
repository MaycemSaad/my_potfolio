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
        "Développement d’une plateforme complète d’analyse ESG : extraction (OCR + NLP), matching sémantique, dashboard interactif et chatbot d’interprétation. +100 KPI analysés automatiquement.",
      descriptionEN:
        "Full ESG analytics platform: OCR & NLP extraction, semantic matching, interactive dashboards, and an AI chatbot for interpretation. 100+ KPIs analyzed automatically.",
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
      subtitleEN: 'RAG platform for actuarial & financial analysis',
      descriptionFR:
        "Chatbot d’analyse actuarielle intégrant FAISS + Sentence-BERT, Flask et MongoDB. Il offre une recherche intelligente et des réponses contextualisées aux rapports d’assurance.",
      descriptionEN:
        "Actuarial chatbot using FAISS + Sentence-BERT + Flask, providing smart contextualized answers to insurance reports.",
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
        "Application IA pour analyser des rapports annuels et bilans financiers. Extraction avec LangChain + LLMs, scoring automatisé et visualisation dynamique en Dash.",
      descriptionEN:
        "AI-powered tool analyzing annual reports with LangChain + LLMs, automatic scoring and interactive Dash visualizations.",
      techs: ['LangChain', 'LLMs', 'Dash', 'Python', 'NLP'],
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
      className="relative py-24 px-6 lg:px-12 bg-grid dark:bg-grid-light text-white dark:text-gray-900 overflow-hidden transition-all duration-700"
    >
      {/* === BACKGROUND ANIMATIONS === */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* === HEADER === */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4">
            {language === 'FR' ? (
              <>
                Mes <span className="text-gradient">Projets</span>
              </>
            ) : (
              <>
                My <span className="text-gradient">Projects</span>
              </>
            )}
          </h2>
          <p className="text-gray-300 dark:text-gray-700 text-lg max-w-3xl mx-auto">
            {language === 'FR'
              ? "Découvrez mes projets alliant IA, Data Science et Actuariat — conçus avec passion et précision."
              : "Discover my projects combining AI, Data Science, and Actuarial Science — crafted with passion and precision."}
          </p>
        </div>

        {/* === PROJECT CONTENT === */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* === TEXT SIDE === */}
          <div className="animate-slide-in-left space-y-6">
            <h3 className="text-3xl font-semibold">
              {language === 'FR' ? active.titleFR : active.titleEN}
            </h3>
            <p className="text-purple-400 text-lg font-medium">
              {language === 'FR' ? active.subtitleFR : active.subtitleEN}
            </p>
            <p className="text-gray-400 dark:text-gray-600 leading-relaxed text-justify">
              {language === 'FR' ? active.descriptionFR : active.descriptionEN}
            </p>

            <div className="flex flex-wrap gap-2">
              {active.techs.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-gray-800 dark:bg-gray-200 rounded-full text-xs text-gray-200 dark:text-gray-800 border border-gray-700 dark:border-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-4">
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
            className="relative group rounded-2xl overflow-hidden border border-purple-500/20 
                       shadow-[0_0_25px_rgba(168,85,247,0.25)] bg-gray-900/80 dark:bg-gray-100/80 
                       backdrop-blur-xl transition-transform duration-700 hover:scale-[1.03] animate-slide-in-right"
          >
            <img
              src={active.images[imgIndex]}
              alt={active.titleEN}
              className="object-cover w-full h-[420px] transition-all duration-700 ease-in-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Controls */}
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

        {/* === PROJECT NAVIGATION === */}
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
