'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function About() {
  const { ref, isVisible } = useScrollAnimation()
  const [activeTab, setActiveTab] = useState('skills')

  return (
<section
  id="about"
  ref={ref}
  className="py-12 md:py-16 px-6 lg:px-12 bg-grid text-white transition-all duration-700 min-h-screen flex items-center"
>
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-3">
            Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">& Qualifications</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Compétences techniques et expériences à l’intersection de la Data Science et de l’Actuariat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {['skills', 'languages', 'experience'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-900/60 hover:bg-gray-800 text-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activeTab === tab ? 'bg-white' : 'bg-blue-400'
                  }`} />
                  <span className="font-semibold capitalize">{tab}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm">
              {activeTab === 'skills' && (
                <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'} space-y-10`}>
                  <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-3">Data Science & AI</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>Machine Learning, Deep Learning, NLP, Computer Vision</li>
                        <li>R, Python (NumPy, Pandas, Scikit-learn)</li>
                        <li>TensorFlow, PyTorch</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-blue-400 font-semibold mb-3">Développement & Outils</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>JavaScript, TypeScript, NestJS, Node.js</li>
                        <li>PostgreSQL, SQL, Git, Docker</li>
                        <li>Streamlit, Dash, Power BI</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-blue-400 font-semibold mb-3">Actuariat</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>Probabilités de survie, calculs de rentes et capitaux décès</li>
                        <li>Simulation Monte Carlo et modélisation du risque</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-blue-400 font-semibold mb-3">Soft Skills</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>Communication, rigueur analytique, gestion de projet</li>
                        <li>Travail en équipe pluridisciplinaire</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'languages' && (
                <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'} space-y-8`}>
                  <h3 className="text-2xl font-semibold mb-6">Languages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: 'Arabic', level: 'Native', percent: 100 },
                      { name: 'French', level: 'Professional', percent: 85 },
                      { name: 'English', level: 'Fluent', percent: 90 },
                    ].map((lang, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>{lang.name}</span>
                          <span>{lang.level}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: isVisible ? `${lang.percent}%` : '0%' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'} space-y-8`}>
                  <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-semibold text-lg">Stagiaire en Data Science & IA – Plateforme ESG</h4>
                    <p className="text-gray-400 text-sm mb-2">06/2025 – 08/2025 | Tunis, Tunisie</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Développement d’une plateforme d’analyse ESG avec automatisation de traitement de rapports PDF.</li>
                      <li>Extraction et structuration des indicateurs à l’aide de Python (PDFPlumber, Regex, OCR).</li>
                      <li>Optimisation du temps d’analyse manuelle de 60%.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-lg">Projet académique – Simulation actuarielle</h4>
                    <p className="text-gray-400 text-sm mb-2">2025 | Institut Supérieur d’Ingénieurs</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Modélisation de tables de mortalité et calculs de rentes viagères en R.</li>
                      <li>Application des méthodes de Monte Carlo pour la simulation de survie et risques.</li>
                    </ul>
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
