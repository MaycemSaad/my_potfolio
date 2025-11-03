'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const skills = [
  {
    category: "Data Science & AI",
    items: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "NLP", level: 80 },
      { name: "Generative AI", level: 75 },
      { name: "Computer Vision", level: 70 }
    ]
  },
  {
    category: "Développement",
    items: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "React/Next.js", level: 80 },
      { name: "SQL/NoSQL", level: 90 },
      { name: "Java", level: 75 }
    ]
  },
  {
    category: "Outils & Frameworks",
    items: [
      { name: "TensorFlow/PyTorch", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Git", level: 95 },
      { name: "AWS", level: 70 }
    ]
  }
]

const languages = [
  { name: "Arabic", level: "Native", percentage: 100 },
  { name: "English", level: "Professional", percentage: 90 },
  { name: "French", level: "Upper Intermediate", percentage: 75 },
  { name: "Spanish", level: "Elementary", percentage: 40 }
]

export function About() {
  const { ref, isVisible } = useScrollAnimation()
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building intelligent systems at the intersection of AI, security, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar animée */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <button
                onClick={() => setActiveTab('skills')}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'skills'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activeTab === 'skills' ? 'bg-white' : 'bg-blue-500'
                  }`} />
                  <span className="font-semibold">Skills</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('languages')}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'languages'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activeTab === 'languages' ? 'bg-white' : 'bg-purple-500'
                  }`} />
                  <span className="font-semibold">Languages</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('experience')}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activeTab === 'experience' ? 'bg-white' : 'bg-pink-500'
                  }`} />
                  <span className="font-semibold">Experience</span>
                </div>
              </button>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              {activeTab === 'skills' && (
                <div className={`space-y-8 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Technical Skills
                  </h3>
                  {skills.map((skillGroup, groupIndex) => (
                    <div key={groupIndex} className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {skillGroup.category}
                      </h4>
                      <div className="space-y-3">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <div key={skillIndex} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                              <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: isVisible ? `${skill.level}%` : '0%',
                                  transitionDelay: `${skillIndex * 100}ms`
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'languages' && (
                <div className={`space-y-8 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Languages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {languages.map((language, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {language.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400">
                            {language.level}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${language.percentage}%` : '0%',
                              transitionDelay: `${index * 150}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className={`space-y-6 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Professional Experience
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Product Owner & Full-Stack Engineering Student
                        </h4>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          Current
                        </span>
                      </div>
                      <p className="text-gradient font-medium mb-2">The SamurAI</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        US-based cyber security & Consulting solutions company
                      </p>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>Supervising development of two major projects</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>The SamurAI Dojo - Next-generation automated product testing and security validation lab</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>Arab Platform - Localized cybersecurity website for MENA region markets</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        Specializations:
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                          <h6 className="font-medium text-gray-900 dark:text-white mb-2">
                            Full-Stack Development
                          </h6>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            React, Next.js, Django, NestJS
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                          <h6 className="font-medium text-gray-900 dark:text-white mb-2">
                            AI/ML
                          </h6>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            LLMs, RAG, Deep Learning, BERT, TensorFlow, Hugging Face
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                          <h6 className="font-medium text-gray-900 dark:text-white mb-2">
                            DevOps Infrastructure
                          </h6>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Docker, Grafana, Prometheus, SonarQube
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                          <h6 className="font-medium text-gray-900 dark:text-white mb-2">
                            Threat Detection Systems
                          </h6>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Security validation and threat detection
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}