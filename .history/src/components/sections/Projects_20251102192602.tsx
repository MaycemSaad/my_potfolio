'use client'

import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "Plateforme IA d'Analyse ESG",
    description:
      "Conception et déploiement d'une plateforme d'analyse ESG automatisée : extraction intelligente d'informations depuis PDF, pipeline NLP et visualisation des KPI via Streamlit et MongoDB.",
    technologies: ["Python", "NLP", "Streamlit", "OCR", "Regex", "MongoDB"],
    image: "/images/esg-platform.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Due Diligence - Analyse de Documents",
    description:
      "Plateforme intelligente d'extraction et d'analyse automatique d'informations issues de documents complexes avec LangChain et LLMs pour la compréhension sémantique.",
    technologies: ["Python", "LangChain", "Streamlit", "LLMs", "MongoDB"],
    image: "/images/due-diligence.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "ActuarialMind - RAG Intelligent",
    description:
      "Solution de question-réponse intelligente pour l'analyse rapide de rapports actuariels et financiers, basée sur FAISS, BERT et Flask.",
    technologies: ["FAISS", "BERT", "Flask", "React", "MongoDB"],
    image: "/images/actuarialmind.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "AI Doctor - Conseil Médical",
    description:
      "Plateforme e-santé exploitant l'IA pour fournir des conseils médicaux personnalisés en fonction des symptômes. Développée avec Rasa et OpenAI.",
    technologies: ["Rasa", "OpenAI", "Next.js", "NestJS", "MySQL"],
    image: "/images/ai-doctor.jpg",
    github: "#",
    live: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une sélection de projets démontrant mon expertise en data science,
            actuariat et développement full-stack.
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/60 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image du projet */}
              <div className="relative mb-5 overflow-hidden rounded-xl">
                <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-white font-semibold text-lg">
                      {project.title}
                    </span>
                  )}
                </div>
              </div>

              {/* Titre et description */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-900/40 text-blue-200 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Liens */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">Démo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
