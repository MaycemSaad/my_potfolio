'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Github, Sparkles, Zap } from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'

export function Projects() {
  const { language } = useLanguageTheme()
  const [index, setIndex] = useState(0)
  const [imgIndex, setImgIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState('right')
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

  const handleNext = () => {
    setDirection('right')
    setIndex((i) => (i + 1) % projects.length)
    setImgIndex(0)
  }

  const handlePrev = () => {
    setDirection('left')
    setIndex((i) => (i - 1 + projects.length) % projects.length)
    setImgIndex(0)
  }

  const nextImage = () => {
    setImgIndex((p) => (p + 1) % active.images.length)
  }

  const prevImage = () => {
    setImgIndex((p) => (p - 1 + active.images.length) % active.images.length)
  }

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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === HEADER === */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-blue-500/30">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {language === 'FR' ? 'Projets Innovants' : 'Innovative Projects'}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white dark:text-gray-900">
            {language === 'FR' ? (
              <>
                Mes <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projets</span>
              </>
            ) : (
              <>
                My <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
              </>
            )}
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'FR'
              ? "Découvrez mes projets alliant IA, Data Science et Actuariat — conçus avec passion et précision."
              : "Discover my projects combining AI, Data Science, and Actuarial Science — crafted with passion and precision."}
          </p>
        </div>

        {/* === PROJECT CONTENT === */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* === TEXT SIDE === */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${
              isVisible 
                ? direction === 'right' 
                  ? 'animate-slide-in-left' 
                  : 'animate-slide-in-left-reverse'
                : 'opacity-0 translate-x-[-100px]'
            }`}
          >
            <div className="space-y-6">
              {/* Project Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span className="text-xs font-medium text-purple-400">
                  {language === 'FR' ? 'Projet IA Avancé' : 'Advanced AI Project'}
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white dark:text-gray-900">
                {language === 'FR' ? active.titleFR : active.titleEN}
              </h3>
              
              <p className="text-lg font-medium text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                {language === 'FR' ? active.subtitleFR : active.subtitleEN}
              </p>
              
              <p className="text-gray-300 dark:text-gray-600 leading-relaxed text-justify text-lg">
                {language === 'FR' ? active.descriptionFR : active.descriptionEN}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {active.techs.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-gray-800/50 dark:bg-gray-200/50 rounded-xl text-sm text-white dark:text-gray-900 border border-gray-700/50 dark:border-gray-400/50 hover:bg-gray-700/50 dark:hover:bg-gray-300/50 transition-all duration-300 hover:scale-105"
                    style={{ 
                      animationDelay: `${techIndex * 100}ms`,
                      animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={active.demo}
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {language === 'FR' ? 'Voir la démo' : 'Live Demo'}
                </a>
                <a
                  href={active.source}
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-800/50 dark:bg-gray-200/50 rounded-xl text-white dark:text-gray-900 font-semibold border border-gray-700 dark:border-gray-400 hover:bg-gray-700/50 dark:hover:bg-gray-300/50 transform hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {language === 'FR' ? 'Code source' : 'Source Code'}
                </a>
              </div>
            </div>
          </div>

          {/* === IMAGE SIDE === */}
          <div
            className={`transition-all duration-1000 ${
              isVisible 
                ? direction === 'right' 
                  ? 'animate-slide-in-right' 
                  : 'animate-slide-in-right-reverse'
                : 'opacity-0 translate-x-[100px]'
            }`}
          >
            <div className="relative group rounded-2xl overflow-hidden border border-purple-500/30 
                           shadow-2xl bg-gray-900/80 dark:bg-gray-100/80 backdrop-blur-xl 
                           hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              
              {/* Main Image */}
              <img
                src={active.images[imgIndex]}
                alt={language === 'FR' ? active.titleFR : active.titleEN}
                className="w-full h-[400px] object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {active.images.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setImgIndex(dotIndex)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      dotIndex === imgIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={prevImage}
                  className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full p-3 shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full p-3 shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* === PROJECT NAVIGATION === */}
        <div className={`flex justify-center gap-4 mt-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <button
            onClick={handlePrev}
            className="group bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-2xl p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          {/* Project Indicators */}
          <div className="flex items-center gap-3 mx-8">
            {projects.map((project, projectIndex) => (
              <button
                key={project.id}
                onClick={() => {
                  setDirection(projectIndex > index ? 'right' : 'left')
                  setIndex(projectIndex)
                  setImgIndex(0)
                }}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  projectIndex === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-800/50 dark:bg-gray-200/50 text-gray-400 dark:text-gray-600 hover:bg-gray-700/50 dark:hover:bg-gray-300/50'
                }`}
              >
                {projectIndex + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="group bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-2xl p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeftReverse {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRightReverse {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-left-reverse {
          animation: slideInLeftReverse 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-slide-in-right-reverse {
          animation: slideInRightReverse 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}