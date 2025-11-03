'use client'

const experiences = [
  {
    company: "Value",
    position: "Stagiaire en Data Science & IA",
    period: "Juin 2025 - Août 2025",
    description: "Développement d'une plateforme d'analyse ESG automatisée avec extraction intelligente d'informations et moteur de matching sémantique.",
    technologies: ["Python", "NLP", "React", "MongoDB", "Ollama"],
    type: "Stage"
  },
  {
    company: "Allence",
    position: "Stagiaire en Développement Full Stack",
    period: "Juillet 2024 - Août 2024",
    description: "Développement d'une application web collaborative avec architecture microservices et interface utilisateur dynamique.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    type: "Stage"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Expérience Professionnelle
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mon parcours professionnel dans le domaine de la data science et du développement.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card p-6 relative">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-gradient font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}