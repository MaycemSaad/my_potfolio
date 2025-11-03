'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 'esg',
    title: 'Plateforme ESG',
    subtitle: "Application d’analyse de rapports de durabilité",
    description:
      "Conception et déploiement d'une plateforme d’analyse ESG automatisée : extraction intelligente depuis PDF (PDFPlumber, PyTesseract, Regex), pipeline ETL, matching sémantique (NLP) et interface web pour visualiser plus de 100 KPI. Réduction du temps manuel de 60 % et couverture de données augmentée de 30 %. ",
    techs: ['Python', 'Streamlit', 'NLP', 'OCR', 'Regex', 'MongoDB'],
    demo: '#',
    source: '#',
    image: '/projects/esg.png',
  },
  {
    id: 'due-diligence',
    title: 'Due Diligence',
    subtitle: "Application d'analyse automatique de documents",
    description:
      "Plateforme d’extraction et d’analyse automatique de rapports annuels et contrats : parsing sémantique (LangChain), scoring de risque, génération automatique de rapports PowerPoint et chatbot RAG pour interrogation des documents.",
    techs: ['Streamlit', 'LangChain', 'NLP', 'MongoDB', 'Dash'],
    demo: '#',
    source: '#',
    image: '/projects/due-diligence.png',
  },
  {
    id: 'actuarialmind',
    title: 'ActuarialMind',
    subtitle: 'Plateforme RAG pour analyses actuarielle & financière',
    description:
      "Solution de question-réponse intelligente pour rapports actuariels : moteur hybride (FAISS + Sentence-BERT + Scikit-learn), chatbot expert (Ollama + Flask) et interface React pour exploration rapide des documents.",
    techs: ['FAISS', 'Sentence-BERT', 'Flask', 'React', 'MongoDB'],
    demo: '#',
    source: '#',
    image: '/projects/ActuarialMind.png',
  },
  {
    id: 'aidoctor',
    title: 'AI Doctor',
    subtitle: 'Application web de conseils médicaux (prototype)',
    description:
      "Plateforme e-santé intelligente fournissant recommandations personnalisées via chatbot (Rasa + OpenAI). Interface interactive pour indiquer localisation des symptômes et architecture full-stack (Next.js + NestJS + MySQL).",
    techs: ['Rasa', 'OpenAI', 'Next.js', 'NestJS', 'MySQL'],
    demo: '#',
    source: '#',
    image: '/projects/ai-doctor.png',
  },
]

export function Projects() {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Auto-play every 6s
  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isVisible])

  const next = () => setIndex((prev) => (prev + 1) % projects.length)
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length)

  const active = projects[index]
  const smallProjects = projects.filter((_, i) => i !== index).slice(0, 3)

  return (
    <section
      ref={ref}
      id="projects"
      className="py-24 bg-grid text-white transition-all duration-700 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Sélection de projets alliant Data Science, Actuariat et Intelligence Artificielle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* === LEFT SIDE === */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg text-xl">
                ★
              </div>
              <h3 className="text-3xl font-semibold">{active.title}</h3>
            </div>

            <p className="text-gray-200 text-lg">{active.subtitle}</p>
            <p className="text-gray-400 leading-relaxed text-justify text-base">
              {active.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {active.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-gray-800 rounded-full text-sm text-gray-200 shadow-sm border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a
                href={active.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-base font-medium shadow hover:brightness-110 transition"
              >
                <ExternalLink className="w-5 h-5" /> Live Demo
              </a>
              <a
                href={active.source}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-800 rounded-full text-base font-medium border border-gray-700 hover:bg-gray-700 transition"
              >
                <Github className="w-5 h-5" /> Source Code
              </a>
            </div>
          </div>

          {/* === RIGHT SIDE === */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            {/* Main Project */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-600/10 group">
              <div className="bg-gradient-to-br from-transparent via-transparent to-purple-900/10 absolute inset-0 pointer-events-none"></div>

              <div className="w-full h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {active.image ? (
                  <img
                    src={active.image}
                    alt={active.title}
                    className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-gray-500">Project preview</div>
                )}
              </div>

              {/* Navigation always visible */}
              <div className="absolute inset-0 flex justify-between items-center px-4 opacity-100">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="bg-gray-900/70 hover:bg-gray-800 transition rounded-full p-3 shadow-lg"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="bg-gray-900/70 hover:bg-gray-800 transition rounded-full p-3 shadow-lg"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Small project cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {smallProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setIndex(projects.findIndex((proj) => proj.id === p.id))}
                  className={`bg-gray-900/80 rounded-2xl p-5 border border-gray-800 hover:scale-[1.05] transition text-left backdrop-blur-sm ${
                    active.id === p.id ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <div className="h-32 bg-gray-800 rounded-md overflow-hidden">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="object-cover w-full h-full hover:scale-105 transition"
                      />
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>
                  <h5 className="mt-4 text-lg font-semibold">{p.title}</h5>
                  <p className="text-sm text-gray-400 line-clamp-3">{p.subtitle}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
