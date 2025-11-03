'use client'

import { ArrowRight, Mail, Phone, MapPin, Linkedin, Github, Download, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 bg-grid text-white transition-all duration-700 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* ==== Partie gauche (Photo + Contact) ==== */}
        <div className="bg-gray-900/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-purple-500/10 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in">
          
          {/* Photo */}
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 blur-xl animate-pulse"></div>
            <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src="/public/Photo-de-profil.jpg"
                alt="Mayssem Saad - Data Scientist & Actuaire"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Coordonnées */}
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>Tozeur, Tunisie</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <span>saadmaycem99@gmail.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <span>+216 52 715 523</span>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex space-x-4 justify-center lg:justify-start pt-6">
            <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-purple-900 transition-all duration-300 transform hover:scale-110">
              <Github className="h-5 w-5 text-gray-300" />
            </a>
          </div>
        </div>

        {/* ==== Partie droite (Texte principal) ==== */}
        <div className="bg-gray-900/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-blue-500/10 animate-slide-in-up">
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                INGÉNIEURE DATA SCIENCE
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                MASTER ACTUARIAT
              </span>
            </div>

            {/* Nom */}
            <h1 className="text-5xl font-extrabold text-gradient">Mayssem Saad</h1>
            <p className="text-xl text-gray-300">Data Scientist & Actuaire</p>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              Étudiante ingénieure en informatique spécialisée en <span className="text-blue-400 font-medium">Data Science</span> et 
              <span className="text-purple-400 font-medium"> Actuariat</span>. 
              Expertise en Machine Learning, IA générative et modélisation statistique. 
              À la recherche d’un <span className="text-blue-400 font-medium">stage de fin d’études à partir de janvier 2026</span>.
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="btn-primary group">
                <span>Voir mes projets</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group">
                <Download className="h-4 w-4 mr-2" />
                Télécharger CV
              </button>
            </div>

            {/* Disponibilité */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-400 pt-4">
              <Mail className="h-4 w-4" />
              <span>Disponible Janvier 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
