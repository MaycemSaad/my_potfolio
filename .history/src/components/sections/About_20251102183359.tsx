'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-6 lg:px-12 bg-grid text-white transition-all duration-700 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* === Partie gauche : About Me === */}
        <div
          className={`bg-gray-900/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-purple-500/10 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gradient">À propos de moi</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            Étudiante ingénieure en informatique, spécialisée en <span className="text-purple-400 font-medium">Data Science</span> 
            et en <span className="text-purple-400 font-medium">Actuariat</span>. Mon parcours associe 
            l’analyse statistique, la modélisation des risques et les technologies d’intelligence artificielle 
            pour construire des solutions data-driven appliquées à la finance et à l’assurance.
          </p>

          <p className="text-gray-300 leading-relaxed mt-6 text-justify">
            Passionnée par la recherche et l’innovation, j’explore les domaines du <span className="text-blue-400 font-medium">
            Machine Learning</span>, de l’<span className="text-blue-400 font-medium">IA générative</span> 
            et des <span className="text-blue-400 font-medium">méthodes de Monte Carlo</span> pour mieux 
            modéliser les incertitudes et améliorer la prise de décision en environnement incertain.
          </p>

          <p className="text-gray-300 leading-relaxed mt-6 text-justify">
            Curieuse, rigoureuse et orientée impact, je souhaite contribuer à des projets où la 
            science des données peut avoir une réelle valeur ajoutée, notamment dans la gestion du risque, 
            la finance durable et les solutions d’assurance intelligentes.
          </p>
        </div>

        {/* === Partie droite : Langues === */}
        <div
          className={`bg-gray-900/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-blue-500/10 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl font-bold mb-8 text-gradient">Langues</h3>
          <div className="space-y-6">
            {[
              { name: 'Arabe', level: 'Langue maternelle', percent: 100 },
              { name: 'Français', level: 'Courant', percent: 90 },
              { name: 'Anglais', level: 'Courant', percent: 85 },
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
            <li>Intelligence artificielle appliquée</li>
            <li>Analyse de données ESG et durabilité</li>
            <li>Projets open-source et veille technologique</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
