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
    image: '/projects/Home.png',
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

  // Auto-play
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
      className="py-20 bg-grid text-white transition-all duration-700 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Sélection de projets alliant Data Science, Actuariat et Intelligence Artificielle.
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
              <h3 className="text-2xl font-semibold">{active.title}</h3>
            </div>

            <p className="text-gray-200 text-base">{active.subtitle}</p>
            <p className="text-gray-400 leading-relaxed text-justify text-sm">
              {active.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {active.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-200 border border-gray-700"
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
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium shadow hover:brightness-110 transition"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
              <a
                href={active.source}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800 rounded-full text-sm font-medium border border-gray-700 hover:bg-gray-700 transition"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            {/* Main Project */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-600/10 group w-full max-w-[600px] mx-auto">
              <div className="bg-gradient-to-br from-transparent via-transparent to-purple-900/10 absolute inset-0 pointer-events-none"></div>

              <div className="w-full h-[280px] md:h-[300px] lg:h-[320px] bg-gray-900 flex items-center justify-center overflow-hidden rounded-2xl">
                {active.image ? (
                  <img
                    src={active.image}
                    alt={active.title}
                    width={600}
                    height={320}
                    className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-gray-500">Project preview</div>
                )}
              </div>

              {/* Navigation */}
              <div className="absolute inset-0 flex justify-between items-center px-3 opacity-100">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="bg-gray-900/70 hover:bg-gray-800 transition rounded-full p-2 shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="bg-gray-900/70 hover:bg-gray-800 transition rounded-full p-2 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Small project cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {smallProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setIndex(projects.findIndex((proj) => proj.id === p.id))}
                  className={`bg-gray-900/80 rounded-xl p-4 border border-gray-800 hover:scale-[1.04] transition text-left backdrop-blur-sm w-full ${
                    active.id === p.id ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <div className="w-full h-[120px] bg-gray-800 rounded-md overflow-hidden flex items-center justify-center">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        width={250}
                        height={120}
                        className="object-contain w-full h-full hover:scale-105 transition"
                      />
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>
                  <h5 className="mt-3 text-base font-semibold">{p.title}</h5>
                  <p className="text-xs text-gray-400 line-clamp-3">{p.subtitle}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
