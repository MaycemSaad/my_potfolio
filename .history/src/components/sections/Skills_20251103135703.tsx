'use client'

import {
  Brain,
  Database,
  BarChart3,
  GraduationCap,
  Award,
  Code,
  TerminalSquare,
  Sparkles,
  Cpu,
  Cloud,
  Zap,
  BookOpen,
  ChevronRight
} from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'
import { useEffect, useRef, useState } from 'react'

export function Skills() {
  const { language } = useLanguageTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('datascience')
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      id: 'datascience',
      icon: Brain,
      title: language === 'FR' ? 'Data Science & IA' : 'Data Science & AI',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Machine Learning', level: 95 },
        { name: 'Deep Learning', level: 90 },
        { name: 'NLP & LLMs', level: 85 },
        { name: 'Computer Vision', level: 80 },
        { name: 'Generative AI', level: 85 },
        { name: 'TensorFlow/PyTorch', level: 90 }
      ]
    },
    {
      id: 'development',
      icon: Code,
      title: language === 'FR' ? 'Développement' : 'Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Node.js/Next.js', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Docker & Git', level: 85 }
      ]
    },
    {
      id: 'databases',
      icon: Database,
      title: language === 'FR' ? 'Bases de données' : 'Databases',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'SQL/PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Big Data (Hadoop/Spark)', level: 75 },
        { name: 'Neo4j', level: 70 },
        { name: 'Data Modeling', level: 85 }
      ]
    },
    {
      id: 'actuarial',
      icon: BarChart3,
      title: language === 'FR' ? 'Actuariat' : 'Actuarial',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: language === 'FR' ? 'Modélisation actuarielle' : 'Actuarial Modeling', level: 85 },
        { name: 'Monte Carlo', level: 80 },
        { name: 'Solvabilité II', level: 75 },
        { name: language === 'FR' ? 'Analyse de risque' : 'Risk Analysis', level: 85 },
        { name: language === 'FR' ? 'Finance quantitative' : 'Quantitative Finance', level: 80 }
      ]
    }
  ]

  // === Certifications regroupées par domaine ===
  const certifications = [
    {
      domain: 'AI & Data Science',
      color: 'from-purple-500 to-pink-500',
      items: [
        { icon: Cpu, title: 'Fundamentals of Deep Learning', issuer: 'NVIDIA', year: '2024' },
        { icon: Sparkles, title: 'Generative AI with Diffusion Models', issuer: 'NVIDIA', year: '2024' },
        { icon: BookOpen, title: 'Introduction to Transformer-Based NLP', issuer: 'NVIDIA', year: '2024' }
      ]
    },
    {
      domain: 'Cloud & Infrastructure',
      color: 'from-orange-500 to-yellow-500',
      items: [
        { icon: Cloud, title: 'AWS Cloud Foundations', issuer: 'AWS Academy', year: '2024' }
      ]
    },
    {
      domain: 'Development & Tools',
      color: 'from-cyan-500 to-blue-500',
      items: [
        { icon: TerminalSquare, title: 'Hashgraph Developer Certification', issuer: 'Hedera', year: '2024' }
      ]
    },
    {
      domain: 'Networking',
      color: 'from-green-500 to-teal-500',
      items: [
        { icon: Code, title: 'Cisco CCNA - Switching, Routing, Wireless Essentials', issuer: 'Cisco', year: '2024' }
      ]
    },
    {
      domain: 'Business Intelligence',
      color: 'from-lime-500 to-green-500',
      items: [
        { icon: Zap, title: 'Power BI', issuer: '365 Data Science', year: '2023' }
      ]
    }
  ]

  const education = [
    {
      degree: language === 'FR' ? 'Master en Actuariat' : 'Master in Actuarial Science',
      school: 'Université du Mans',
      period: '2024 – Présent',
      location: 'Le Mans, France'
    },
    {
      degree: language === 'FR' ? 'Diplôme d’ingénieur en Data Science' : 'Engineering Degree in Data Science',
      school: 'ESPRIT',
      period: '2023 – Présent',
      location: 'Tunis, Tunisia'
    },
    {
      degree: language === 'FR' ? 'Licence en Génie Logiciel' : 'Bachelor in Software Engineering',
      school: 'ISI Mahdia',
      period: '2020 – 2023',
      location: 'Mahdia, Tunisia'
    }
  ]

  const currentCategory = skillCategories.find((cat) => cat.id === activeCategory)

  return (
    <section
      ref={ref}
      id="skills"
      className="py-24 bg-grid dark:bg-grid-light text-white dark:text-gray-900 min-h-screen transition-all duration-700"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* === Header === */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-blue-500/30">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {language === 'FR' ? 'Expertise Technique' : 'Technical Expertise'}
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white dark:text-gray-900">
            {language === 'FR' ? 'Compétences & ' : 'Skills & '}
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {language === 'FR' ? 'Formations' : 'Qualifications'}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* === Left Column === */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="bg-gray-900/70 dark:bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 dark:border-gray-300/50 shadow-2xl p-8">
              {/* Navigation */}
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {language === 'FR' ? "Domaines d'Expertise" : 'Expertise Domains'}
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                      activeCategory === category.id
                        ? `border-transparent bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'border-gray-600 dark:border-gray-400 bg-gray-800/50 dark:bg-gray-200/50 hover:border-blue-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${category.color}`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-sm">{category.title}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Skill Progress */}
              {currentCategory && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentCategory.color} flex items-center justify-center shadow-lg`}>
                      <currentCategory.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{currentCategory.title}</h4>
                      <p className="text-gray-400 text-sm">
                        {language === 'FR' ? 'Niveau de maîtrise' : 'Skill level'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {currentCategory.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm font-medium">
                          <span>{skill.name}</span>
                          <span className="text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 dark:bg-gray-300 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${currentCategory.color} transition-all duration-1000`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${i * 100}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* === Right Column === */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
            <div className="bg-gray-900/70 dark:bg-white/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-2xl p-8">
              {/* === Education === */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {language === 'FR' ? 'Formation' : 'Education'}
                  </h3>
                </div>

                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div key={i} className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-all">
                      <h4 className="font-semibold text-sm">{edu.degree}</h4>
                      <p className="text-blue-400 text-xs">{edu.school}</p>
                      <p className="text-gray-400 text-xs">{edu.period} • {edu.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* === Certifications === */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {language === 'FR' ? 'Certifications' : 'Certifications'}
                  </h3>
                </div>

                <div className="space-y-6">
                  {certifications.map((group, i) => (
                    <div key={i} className={`transition-all duration-500 delay-[${i * 100}ms]`}>
                      <h4 className={`text-sm font-semibold mb-2 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                        {group.domain}
                      </h4>
                      {group.items.map((cert, j) => (
                        <div key={j} className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-all group">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${group.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                            <cert.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold">{cert.title}</h4>
                            <p className="text-xs text-gray-400">{cert.issuer} • {cert.year}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
