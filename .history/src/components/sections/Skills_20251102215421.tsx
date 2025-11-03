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
import { useEffect, useRef, useState } from 'react'

export function Skills() {
  const { language } = useLanguageTheme()
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="skills"
      className="py-24 bg-grid dark:bg-grid-light text-white dark:text-gray-900 min-h-screen transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* === Titre === */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl font-extrabold mb-3 text-gradient">
            {language === 'FR'
              ? 'Compétences & Formations'
              : 'Skills & Qualifications'}
          </h2>
          <p className="text-gray-400 dark:text-gray-700 text-lg max-w-2xl mx-auto">
            {language === 'FR'
              ? "Une expertise multidisciplinaire alliant Data Science, Intelligence Artificielle, Actuariat et Développement Full-Stack."
              : 'A multidisciplinary expertise combining Data Science, Artificial Intelligence, Actuarial Science, and Full-Stack Development.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* === Colonne gauche : compétences === */}
          <div
            className={`bg-gray-900/70 dark:bg-gray-100/70 rounded-2xl p-10 border border-purple-500/20 shadow-2xl backdrop-blur-xl transition-all duration-700 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <div className="flex items-center mb-8">
              <Code className="h-7 w-7 text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold text-purple-400">
                {language === 'FR' ? 'Compétences techniques' : 'Technical Skills'}
              </h3>
            </div>

            <SkillGroup
              icon={<Brain className="h-5 w-5 text-blue-400 mr-2" />}
              title={language === 'FR' ? 'Data Science & IA' : 'Data Science & AI'}
              skills={[
                'Machine Learning',
                'Deep Learning',
                'NLP',
                'Generative AI',
                'LLMs',
                'Computer Vision',
                'TensorFlow',
                'PyTorch',
                'Scikit-learn',
              ]}
            />

            <SkillGroup
              icon={<TerminalSquare className="h-5 w-5 text-blue-400 mr-2" />}
              title={
                language === 'FR'
                  ? 'Développement & Frameworks'
                  : 'Development & Frameworks'
              }
              skills={[
                'Python',
                'R',
                'Java',
                'JavaScript',
                'TypeScript',
                'Node.js',
                'Next.js',
                'NestJS',
                'Symfony',
                'Streamlit',
                'FastAPI',
                'Flask',
                'Docker',
                'Git',
              ]}
            />

            <SkillGroup
              icon={<Database className="h-5 w-5 text-blue-400 mr-2" />}
              title={
                language === 'FR'
                  ? 'Bases de données & Big Data'
                  : 'Databases & Big Data'
              }
              skills={[
                'PostgreSQL',
                'MySQL',
                'MongoDB',
                'Firebase',
                'Neo4j',
                'Hadoop',
                'Spark',
              ]}
            />

            <SkillGroup
              icon={<BarChart3 className="h-5 w-5 text-blue-400 mr-2" />}
              title={
                language === 'FR'
                  ? 'Actuariat & Modélisation'
                  : 'Actuarial & Modeling'
              }
              skills={[
                language === 'FR' ? 'Modélisation actuarielle' : 'Actuarial modeling',
                'Solvabilité II',
                'Monte Carlo',
                language === 'FR' ? 'Analyse du risque' : 'Risk analysis',
                language === 'FR' ? 'Tables de mortalité' : 'Mortality tables',
                language === 'FR' ? 'Finance durable' : 'Sustainable finance',
              ]}
            />
          </div>

          {/* === Colonne droite : éducation & certifications === */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            {/* === Éducation === */}
            <div className="bg-gray-900/70 dark:bg-gray-100/70 rounded-2xl p-10 border border-blue-500/20 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-blue-400">
                  {language === 'FR' ? 'Formation académique' : 'Academic Background'}
                </h3>
              </div>
              <ul className="space-y-4 text-sm text-gray-300 dark:text-gray-700">
                <li>
                  🎓 <strong>Université du Mans</strong> —{' '}
                  {language === 'FR'
                    ? 'Master en Actuariat (2024 – Présent)'
                    : 'Master in Actuarial Science (2024 – Present)'}
                </li>
                <li>
                  💻 <strong>ESPRIT</strong> —{' '}
                  {language === 'FR'
                    ? "Diplôme d’ingénieur en Data Science (2023 – Présent)"
                    : 'Engineering degree in Data Science (2023 – Present)'}
                </li>
                <li>
                  🧩 <strong>ISI Mahdia</strong> —{' '}
                  {language === 'FR'
                    ? 'Licence en Génie Logiciel (2020 – 2023)'
                    : 'Bachelor in Software Engineering (2020 – 2023)'}
                </li>
              </ul>
            </div>

            {/* === Certifications === */}
            <div className="bg-gray-900/70 dark:bg-gray-100/70 rounded-2xl p-10 border border-purple-500/20 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold text-purple-400">
                  {language === 'FR' ? 'Certifications' : 'Certifications'}
                </h3>
              </div>

              <div className="space-y-5 text-sm text-gray-300 dark:text-gray-700">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">
                    {language === 'FR'
                      ? 'Intelligence Artificielle & Machine Learning'
                      : 'Artificial Intelligence & Machine Learning'}
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
                    <li>Google – Data Analytics Foundations</li>
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

/* --- Sous composant --- */
function SkillGroup({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode
  title: string
  skills: string[]
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        {icon}
        <h4 className="text-lg font-semibold text-blue-300">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2 text-sm text-gray-300 dark:text-gray-700">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-800 dark:bg-gray-200 rounded-lg hover:scale-105 transition-transform"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
