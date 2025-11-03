'use client'

const skills = [
  {
    category: "Data Science & AI",
    items: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "LLMs", "Computer Vision"]
  },
  {
    category: "Développement",
    items: ["Python", "R", "Java", "JavaScript", "TypeScript", "SQL", "NoSQL"]
  },
  {
    category: "Outils & Frameworks",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "React", "Next.js", "Docker", "Git"]
  },
  {
    category: "Actuariat & Finance",
    items: ["Modélisation Actuarielle", "Solvabilité II", "Monte Carlo", "Analyse de Risque"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un éventail de compétences techniques couvrant la data science, le développement et l&apos;actuariat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}