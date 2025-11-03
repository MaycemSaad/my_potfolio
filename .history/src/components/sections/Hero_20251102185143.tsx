'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
        {/* === TEXTE À GAUCHE === */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="block text-blue-500">DATA SCIENTIST</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              & ACTUAIRE
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-lg">
            Étudiante ingénieure en informatique spécialisée en Data Science et Actuariat. 
            Expertise en Machine Learning, IA générative et modélisation statistique. 
            À la recherche d’un stage de fin d’études à partir de janvier 2026.
          </p>

          <div className="mt-10">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium shadow-lg hover:scale-105 transition-transform">
              Voir mes projets
            </button>
          </div>
        </div>

        {/* === CARTE AVEC PHOTO + CONTACT === */}
        <div
          className={`bg-gray-900/70 rounded-2xl shadow-xl border border-purple-500/20 p-8 backdrop-blur-lg text-center transition-all duration-700 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
              <img
                src="/Photo-de-profil.jpg"
                alt="Mayssem Saad - Data Scientist & Actuaire"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Mayssem Saad</h3>
              <p className="text-purple-400 font-medium">Data Scientist & Actuaire</p>
              <div className="flex items-center justify-center space-x-2 mt-3 text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Disponible Janvier 2026</span>
              </div>
            </div>

            {/* === Infos de contact === */}
            <div className="flex flex-col items-center space-y-3 text-gray-300 mt-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Tozeur, Tunisie</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>saadmaycem99@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+216 52 715 523</span>
              </div>
              <div className="flex space-x-4 justify-center pt-4">
                <a
                  href="#"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-purple-900 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="h-5 w-5 text-gray-300" />
                </a>
              </div>
            </div>

            <button className="mt-6 flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:scale-105 transition-transform">
              <Download className="h-4 w-4" />
              <span>Télécharger CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
