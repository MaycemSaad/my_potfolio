'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'

const projects = [
  {
    id: 'esg',
    titleFR: 'Plateforme ESG',
    titleEN: 'ESG Platform',
    subtitleFR: "Application d’analyse de rapports de durabilité",
    subtitleEN: "Sustainability report analysis platform",
    descriptionFR:
      "Conception et déploiement d'une plateforme d’analyse ESG automatisée : extraction intelligente depuis PDF (PDFPlumber, PyTesseract, Regex), pipeline ETL, matching sémantique (NLP) et interface web pour visualiser plus de 100 KPI.",
    descriptionEN:
      "Design and deployment of an automated ESG analytics platform: smart PDF extraction (PDFPlumber, PyTesseract, Regex), ETL pipeline, semantic matching (NLP), and web interface to visualize over 100 KPIs.",
    techs: ['Python', 'Streamlit', 'NLP', 'OCR', 'Regex', 'MongoDB'],
    demo: '#',
    source: '#',
    images: [
      '/projects/ESG.png',
      '/projects/esg9.jpg',
      '/projects/esg8.jpg',
      '/projects/esg7.jpg',
      '/projects/esg6.jpg',
    ],
  },
  {
    id: 'due-diligence',
    titleFR: 'Due Diligence',
    titleEN: 'Due Diligence',
    subtitleFR: "Application d'analyse automatique de documents",
    subtitleEN: "Automated document analysis application",
    descriptionFR:
      "Plateforme d’extraction et d’analyse automatique de rapports annuels et contrats : parsing sémantique (LangChain), scoring de risque, génération automatique de rapports PowerPoint et chatbot RAG.",
    descriptionEN:
      "Automated extraction and analysis of annual reports and contracts: semantic parsing (LangChain), risk scoring, automated PowerPoint reports, and RAG chatbot.",
    techs: ['Streamlit', 'LangChain', 'NLP', 'MongoDB', 'Dash'],
    demo: '#',
    source: '#',
    images: ['/projects/due1.png', '/projects/due2.png', '/projects/due3.png'],
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
    images: ['/projects/ActuarialMind.png', '/projects/act2.png', '/projects/act3.png'],
  },
  {
    id: 'aidoctor',
    titleFR: 'AI Doctor',
    titleEN: 'AI Doctor',
    subtitleFR: 'Application web de conseils médicaux (prototype)',
    subtitleEN: 'Web app for medical advice (prototype)',
    descriptionFR:
      "Plateforme e-santé intelligente fournissant recommandations personnalisées via chatbot (Rasa + OpenAI).",
    descriptionEN:
      "Smart e-health platform providing personalized medical advice through chatbot (Rasa + OpenAI).",
    techs: ['Rasa', 'OpenAI', 'Next.js', 'NestJS', 'MySQL'],
    demo: '#',
    source: '#',
    images: [
      '/projects/Home.jpg',
      '/projects/Inscription.jpg',
      '/projects/Articles.jpg',
      '/projects/Chatbot.jpg',
    ],
  },
]

export function Projects() {
  const [index, setIndex] = useState(0)
  const [imgIndex, setImgIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguageTheme()
  const ref = useRef<HTMLElement | null>(null)
  const active = projects[index]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % projects.length)
      setImgIndex(0)
    }, 7000)
    return () => clearInterval(interval)
  }, [isVisible])

  const nextProject = () => {
    setIndex((p) => (p + 1) % projects.length)
    setImgIndex(0)
  }
  const prevProject = () => {
    setIndex((p) => (p - 1 + projects.length) % projects.length)
    setImgIndex(0)
  }

  const nextImage = () => setImgIndex((p) => (p + 1) % active.images.length)
  const prevImage = () => setImgIndex((p) => (p - 1 + active.images.length) % active.images.length)

  const smallProjects = projects.filter((_, i) => i !== index).slice(0, 3)

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 bg-grid dark:bg-grid-light text-white dark:text-gray-900 transition-all duration-700 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
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
          <p className="text-gray-300 dark:text-gray-700 max-w-3xl mx-auto text-lg">
            {language === 'FR'
              ? 'Sélection de projets alliant Data Science, Actuariat et Intelligence Artificielle.'
              : 'A selection of projects combining Data Science, Actuarial Science, and Artificial Intelligence.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg text-lg">
                ★
              </div>
              <h3 className="text-2xl font-semibold">
                {language === 'FR' ? active.titleFR : active.titleEN}
              </h3>
            </div>

            <p className="text-gray-200 dark:text-gray-700 text-base">
              {language === 'FR' ? active.subtitleFR : active.subtitleEN}
            </p>
            <p className="text-gray-400 dark:text-gray-600 leading-relaxed text-justify text-sm">
              {language === 'FR' ? active.descriptionFR : active.descriptionEN}
            </p>

            <div className="flex flex-wrap gap-2">
              {active.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 dark:bg-gray-200 rounded-full text-xs text-gray-200 dark:text-gray-800 border border-gray-700 dark:border-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-4">
              <a
                href={active.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium text-white shadow hover:brightness-110 transition"
              >
                <ExternalLink className="w-4 h-4" />
                {language === 'FR' ? 'Voir la démo' : 'Live Demo'}
              </a>
              <a
                href={active.source}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800 dark:bg-gray-200 rounded-full text-sm font-medium border border-gray-700 dark:border-gray-300 hover:bg-gray-700 dark:hover:bg-gray-300 transition"
              >
                <Github className="w-4 h-4" />
                {language === 'FR' ? 'Code source' : 'Source Code'}
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-600/10 group w-full max-w-[600px] mx-auto">
              <div className="w-full h-[320px] bg-gray-900 dark:bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  key={active.images[imgIndex]}
                  src={active.images[imgIndex]}
                  alt={`${active.titleFR} image ${imgIndex + 1}`}
                  width={600}
                  height={320}
                  className="object-contain w-full h-full transition-transform duration-700 ease-in-out"
                />
              </div>

              <div className="absolute inset-0 flex justify-between items-center px-3">
                <button
                  onClick={prevImage}
                  className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 transition rounded-full p-2 shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 transition rounded-full p-2 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={prevProject}
                className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 transition rounded-full p-2 shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextProject}
                className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 transition rounded-full p-2 shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Miniatures des autres projets */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {smallProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setIndex(projects.findIndex((proj) => proj.id === p.id))
                    setImgIndex(0)
                  }}
                  className={`bg-gray-900/80 dark:bg-gray-100/80 rounded-xl p-4 border border-gray-800 dark:border-gray-300 hover:scale-[1.04] transition text-left backdrop-blur-sm w-full ${
                    active.id === p.id ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <div className="w-full h-[120px] bg-gray-800 dark:bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
                    <img
                      src={p.images[0]}
                      alt={language === 'FR' ? p.titleFR : p.titleEN}
                      width={250}
                      height={120}
                      className="object-contain w-full h-full hover:scale-105 transition"
                    />
                  </div>
                  <h5 className="mt-3 text-base font-semibold">
                    {language === 'FR' ? p.titleFR : p.titleEN}
                  </h5>
                  <p className="text-xs text-gray-400 dark:text-gray-600 line-clamp-3">
                    {language === 'FR' ? p.subtitleFR : p.subtitleEN}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
