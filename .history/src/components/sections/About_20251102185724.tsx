'use client'

import { useEffect, useRef, useState } from 'react'

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting))
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-6 lg:px-12 bg-grid text-white transition-all duration-700 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">

        {/* === Partie gauche : À propos === */}
        <div
          className={`bg-gray-900/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-purple-500/10 flex flex-col justify-between h-full transition-all duration-700 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gradient">À propos de moi</h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              Étudiante ingénieure en informatique, spécialisée en <span className="text-purple-400 font-medium">Data Science</span> 
              et en <span className="text-purple-400 font-medium">Actuariat</span>. Mon parcours combine l’analyse de données, 
              la modélisation statistique et les techniques avancées d’intelligence artificielle pour transformer 
              des problématiques complexes en solutions concrètes à forte valeur ajoutée.
            </p>

            <p className="text-gray-300 leading-relaxed mt-6 text-justify">
              Mon intérêt se concentre particulièrement sur le <span className="text-blue-400 font-medium">Machine Learning</span>, 
              les <span className="text-blue-400 font-medium">LLM</span> et les <span className="text-blue-400 font-medium">méthodes de Monte Carlo</span>, 
              appliqués à la gestion des risques et à la prévision financière. J’aime explorer la manière dont les algorithmes peuvent 
              aider à mieux comprendre les comportements incertains et à soutenir la prise de décision en assurance et finance.
            </p>

            <p className="text-gray-300 leading-relaxed mt-6 text-justify">
              Dotée d’un esprit analytique, d’une rigueur scientifique et d’une curiosité constante, 
              je cherche à évoluer dans un environnement stimulant où la technologie et les données 
              se mettent au service de l’innovation et de l’impact durable.
            </p>
          </div>
        </div>

        {/* === Partie droite : Langues & Intérêts === */}
        <div
          className={`bg-gray-900/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-blue-500/10 flex flex-col justify-between h-full transition-all duration-700 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}
        >
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gradient">Langues</h3>
            <div className="space-y-6">
              {[
                { name: 'Arabe', level: 'Langue maternelle', percent: 100 },
                { name: 'Français', level: 'Courant', percent: 90 },
                { name: 'Anglais', level: 'Courant', percent: 85 },
                { name: 'Italien', level: 'Débutante', percent: 40 },
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

            <h3 className="text-2xl font-bold mt-12 mb-6 text-gradient">Centres d’intérêt</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Finance quantitative et actuariat vie</li>
              <li>Intelligence artificielle et LLM appliqués</li>
              <li>Analyse de données ESG et durabilité</li>
              <li>Projets open-source et innovation technologique</li>
              <li>Recherche appliquée en modélisation statistique</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
