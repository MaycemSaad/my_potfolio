'use client'

import { GraduationCap, Briefcase, Award } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À Propos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionnée par la data science et l&apos;actuariat, je combine expertise technique et vision stratégique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Formation */}
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Formation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Double diplôme Ingénieur Informatique (ESPRIT) et Master Actuariat (Université du Mans)
            </p>
          </div>

          {/* Expérience */}
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expérience</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Stages en Data Science et Développement Full Stack avec projets concrets en IA et analyse de données
            </p>
          </div>

          {/* Certifications */}
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Certifications</h3>
            <p className="text-gray-600 dark:text-gray-400">
              NVIDIA Deep Learning, AWS Cloud, Power BI et plusieurs certifications en IA générative
            </p>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-400">Projets Réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-400">Stages Professionnels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-400">Langues Maîtrisées</div>
          </div>
        </div>
      </div>
    </section>
  )
}