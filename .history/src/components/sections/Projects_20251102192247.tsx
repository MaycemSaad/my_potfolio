'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'

type Projects = {
  id: string
  title: string
  subtitle?: string
  description: string
  techs: string[]
  demo?: string
  source?: string
  image?: string
}

const projects: Projects[] = [
  {
    id: 'esg',
    title: 'Plateforme ESG',
    subtitle: 'Plateforme d’analyse de rapports de durabilité',
    description:
      "Conception et déploiement d'une plateforme d’analyse ESG automatisée : extraction intelligente depuis PDF (PDFPlumber, PyTesseract, Regex), pipeline ETL, matching sémantique (NLP) et interface web pour visualiser >100 KPI. Réduction du temps manuel de +60% et couverture de données augmentée de 30%.",
    techs: ['Python', 'Streamlit', 'NLP', 'OCR', 'Regex', 'MongoDB'],
    demo: '#',
    source: '#',
    image: '/projects/esg.png'
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
    image: '/projects/due-diligence.png'
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
    image: '/projects/actuarialmind.png'
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
    image: '/projects/ai-doctor.png'
  },
  {
    id: 'taskapp',
    title: 'Application de gestion de tâches',
    subtitle: 'Projet full-stack (Allence internship)',
    description:
      "Application collaborative (microservices) de gestion de tâches conçue avec Next.js et NestJS, base PostgreSQL normalisée, rôles et chiffrement ; amélioration UX réduisant le temps de gestion des tâches de 40%.",
    techs: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
    demo: '#',
    source: '#',
    image: '/projects/taskify.png'
  }
]

export function FeaturedProjects() {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    timeoutRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % projects.length)
    }, 6000)
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current)
    }
  }, [isVisible])

  const prev = () => {
    setIndex((i) => (i - 1 + projects.length) % projects.length)
    if (timeoutRef.current) clearInterval(timeoutRef.current)
  }
  const next = () => {
    setIndex((i) => (i + 1) % projects.length)
    if (timeoutRef.current) clearInterval(timeoutRef.current)
  }

  const active = projects[index]

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-grid text-white transition-all duration-700 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From research prototypes to full-stack platforms — selected work demonstrating data science, RAG and production web apps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-md">★</div>
              <h3 className="text-xl font-semibold">{active.title}</h3>
            </div>

            <p className="text-gray-300">{active.subtitle}</p>
            <p className="text-gray-400 leading-relaxed">{active.description}</p>

            <div className="flex flex-wrap gap-2">
              {active.techs.map((t) => (
                <span key={t} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={active.demo || '#'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium shadow hover:brightness-110 transition"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
              <a
                href={active.source || '#'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-gray-700 hover:bg-gray-700 transition"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>
          </div>

          <div className={`relative transition-all duration-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-600/10">
              <div className="bg-gradient-to-br from-transparent via-transparent to-purple-900/10 absolute inset-0 pointer-events-none"></div>
              <div className="w-full h-64 md:h-72 lg:h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {active.image ? (
                  <img src={active.image} alt={active.title} className="object-cover w-full h-full" />
                ) : (
                  <div className="text-gray-500">Project preview</div>
                )}
              </div>

              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-800/60 p-2 rounded-full hover:bg-gray-700 transition">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-800/60 p-2 rounded-full hover:bg-gray-700 transition">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
