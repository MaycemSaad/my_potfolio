'use client'

import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "Plateforme IA d'Analyse ESG",
    description: "Conception et déploiement d'une plateforme d'analyse ESG automatisée avec extraction intelligente d'informations et chatbot IA.",
    technologies: ["Python", "NLP", "React", "MongoDB", "Ollama"],
    image: "/images/esg-platform.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "Due Diligence - Analyse de Documents",
    description: "Plateforme intelligente d'extraction et d'analyse automatique d'informations issues de documents complexes.",
    technologies: ["Python", "LangChain", "Streamlit", "LLMs", "MongoDB"],
    image: "/images/due-diligence.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "ActuarialMind - RAG Intelligent",
    description: "Solution de question-réponse intelligente pour l'analyse rapide de rapports actuariels et financiers.",
    technologies: ["FAISS", "BERT", "Flask", "React", "MongoDB"],
    image: "/images/actuarialmind.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "AI Doctor - Conseil Médical",
    description: "Plateforme e-santé exploitant l'IA pour fournir des conseils médicaux personnalisés selon les symptômes.",
    technologies: ["Rasa", "OpenAI", "Next.js", "NestJS", "MySQL"],
    image: "/images/ai-doctor.jpg",
    github: "#",
    live: "#"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projets
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une sélection de mes projets les plus significatifs en data science et développement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card p-6 group hover-lift">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{project.title}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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