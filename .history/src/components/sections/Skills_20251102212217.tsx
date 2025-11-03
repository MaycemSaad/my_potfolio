'use client'

import {
  Brain,
  Database,
  BarChart3,
  GraduationCap,
  Award,
  Code,
  TerminalSquare,
} from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'

export function Skills() {
  const { language } = useLanguageTheme()

  return (
    <section
      id="skills"
      className="py-20 bg-grid dark:bg-grid-light text-white dark:text-gray-900 min-h-screen transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* === Titre principal === */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">
            {language === 'FR' ? (
              <>
                Compétences <span className="text-gradient">& Formations</span>
              </>
            ) : (
              <>
                Skills <span className="text-gradient">& Qualifications</span>
              </>
            )}
          </h2>
          <p className="text-gray-400 dark:text-gray-700 text-lg">
            {language === 'FR'
              ? 'Expertise technique couvrant la Data Science, l’IA, l’Actuariat et le Développement Full-Stack.'
              : 'Technical expertise spanning Data Science, AI, Actuarial Science, and Full-Stack Development.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* === Bloc : Skills & Tools === */}
          <div className="bg-gray-900/60 dark:bg-gray-100/70 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold text-purple-400">
                {language === 'FR' ? 'Compétences & Outils' : 'Skills & Tools'}
              </h3>
            </div>

            {/* Data Science & AI */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Brain className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold text-blue-300">
                  {language === 'FR' ? 'Data Science & IA' : 'Data Science & AI'}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300 dark:text-gray-700">
                {[
                  'Machine Learning',
                  'Deep Learning',
                  'NLP',
                  'Generative AI',
                  'LLMs',
                  'Computer Vision',
                  'Rasa',
                  'TensorFlow',
                  'PyTorch',
                  'Scikit-learn',
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 dark:bg-gray-200 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Développement */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <TerminalSquare className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold text-blue-300">
                  {language === 'FR'
                    ? 'Développement & Frameworks'
                    : 'Development & Frameworks'}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300 dark:text-gray-700">
                {[
                  'Python',
                  'R',
                  'Java',
                  'JavaScript',
                  'TypeScript',
                  'Node.js',
                  'Next.js',
                  'NestJS',
                  'Symfony',
                  'FastAPI',
                  'Streamlit',
                  'Dash',
                  'Flask',
                  'React',
                  'Docker',
                  'Git',
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 dark:bg-gray-200 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Database className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold text-blue-300">
                  {language === 'FR'
                    ? 'Bases de Données & Big Data'
                    : 'Databases & Big Data'}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300 dark:text-gray-700">
                {[
                  'PostgreSQL',
                  'MySQL',
                  'SQL',
                  'MongoDB',
                  'Neo4j',
                  'Firebase',
                  'Hadoop',
                  'Spark',
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 dark:bg-gray-200 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Actuariat */}
            <div>
              <div className="flex items-center mb-2">
                <BarChart3 className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold text-blue-300">
                  {language === 'FR'
                    ? 'Actuariat & Modélisation'
                    : 'Actuarial & Modelling'}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300 dark:text-gray-700">
                {[
                  language === 'FR'
                    ? 'Modélisation Actuarielle'
                    : 'Actuarial Modelling',
                  'Solvabilité II',
                  'Monte Carlo',
                  language === 'FR'
                    ? 'Analyse du Risque'
                    : 'Risk Analysis',
                  language === 'FR'
                    ? 'Tables de mortalité'
                    : 'Mortality Tables',
                  language === 'FR'
                    ? 'Finance Durable'
                    : 'Sustainable Finance',
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 dark:bg-gray-200 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* === Bloc Éducation & Certifications === */}
          <div className="space-y-8">
            {/* Éducation */}
            <div className="bg-gray-900/60 dark:bg-gray-100/70 rounded-2xl p-8 border border-blue-500/10 shadow-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-blue-400">
                  {language === 'FR' ? 'Éducation' : 'Education'}
                </h3>
              </div>
              <ul className="text-sm text-gray-300 dark:text-gray-700 space-y-3">
                <li>
                  <strong>Université du Mans</strong> —{' '}
                  {language === 'FR'
                    ? 'Master en Actuariat (2024 – Présent)'
                    : 'Master in Actuarial Science (2024 – Present)'}
                </li>
                <li>
                  <strong>ESPRIT</strong> —{' '}
                  {language === 'FR'
                    ? 'Diplôme d’ingénieur en Data Science (2023 – Présent)'
                    : 'Engineering degree in Data Science (2023 – Present)'}
                </li>
                <li>
                  <strong>ISI Mahdia</strong> —{' '}
                  {language === 'FR'
                    ? 'Licence en Génie Logiciel (2020 – 2023)'
                    : 'Bachelor in Software Engineering (2020 – 2023)'}
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-gray-900/60 dark:bg-gray-100/70 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold text-purple-400">
                  {language === 'FR' ? 'Certifications' : 'Certifications'}
                </h3>
              </div>

              <div className="space-y-5 text-sm text-gray-300 dark:text-gray-700">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">
                    {language === 'FR' ? 'IA & Machine Learning' : 'AI & Machine Learning'}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>NVIDIA – Fundamentals of Deep Learning</li>
                    <li>NVIDIA – Transformer-Based NLP</li>
                    <li>NVIDIA – Generative AI with Diffusion Models</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">
                    {language === 'FR' ? 'Cloud & Données' : 'Cloud & Data'}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>AWS Academy – Cloud Foundations</li>
                    <li>365 Data Science – Power BI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
