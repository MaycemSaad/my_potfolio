'use client'

import { ArrowRight, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-9 w-9 rounded-md border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Partie gauche - Photo et informations de contact */}
        <div className="flex flex-col items-center lg:items-start space-y-8">
          {/* Photo */}
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl dark:border-gray-800">
              <img 
                src="/images/mayssem-saad.jpg" 
                alt="Mayssem Saad"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge décoratif */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI/DS</span>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600 dark:text-gray-400">
              <MapPin className="h-5 w-5" />
              <span>Tozeur, Tunisie</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600 dark:text-gray-400">
              <Mail className="h-5 w-5" />
              <span>saadmaycem99@gmail.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600 dark:text-gray-400">
              <Phone className="h-5 w-5" />
              <span>+216 52 715 523</span>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 justify-center lg:justify-start pt-4">
              <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Partie droite - Contenu principal */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
              INGÉNIEURE DATA SCIENCE
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium">
              MASTER ACTUARIAT
            </span>
          </div>

          {/* Description principale */}
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Étudiante ingénieure en informatique spécialisée en Data Science et Actuariat. 
            Expertise en Machine Learning, IA générative et modélisation statistique. 
            À la recherche d'un stage de fin d'études à partir de janvier 2026.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Voir mes projets
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">
              Télécharger CV
            </button>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto lg:mx-0" />

          {/* Nom et statut */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Mayssem Saad
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Data Scientist & Actuaire
            </p>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Disponible Janvier 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob dark:bg-blue-800 dark:opacity-10" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 dark:bg-purple-800 dark:opacity-10" />
        <div className="absolute top-40 left-32 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 dark:bg-pink-800 dark:opacity-10" />
      </div>
    </div>
  )
}