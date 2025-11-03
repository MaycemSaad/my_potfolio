'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-6 lg:px-12 bg-grid text-white min-h-screen flex items-center transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* === Partie gauche : Profil === */}
        <div
          className={`bg-gray-900/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-purple-500/10 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-600 mb-6">
              <Image
                src="/profile.jpg" // ← mets ta photo ici
                alt="Mayssem Saad"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-gradient mb-2">Mayssem Saad</h2>
            <p className="text-gray-400 text-sm mb-4">
              Étudiante ingénieure en Informatique — Data Science & Actuariat
            </p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Étudiante en double diplôme (ESPRIT & Le Mans), spécialisée en Data Science et
              Actuariat. Passionnée par l’IA, la modélisation statistique et la finance quantitative.
              Actuellement à la recherche d’un stage de fin d’études en janvier 2026 pour appliquer
              mes compétences en analyse, automatisation et intelligence artificielle.
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <p>📍 Tozeur, Tunisie</p>
              <p>📧 saadmaycem99@gmail.com</p>
              <p>📞 +216 52 715 523</p>
            </div>
          </div>
        </div>

        {/* === Partie droite : Langues === */}
        <div
          className={`bg-gray-900/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-blue-500/10 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-gradient">Langues</h3>
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

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gradient">Certifications</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>NVIDIA – Fundamentals of Deep Learning</li>
            <li>NVIDIA – Introduction to Transformer-Based NLP</li>
            <li>NVIDIA – Generative AI with Diffusion Models</li>
            <li>AWS Academy Graduate – Cloud Foundations</li>
            <li>Power BI – 365 Data Science</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
