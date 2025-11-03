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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden bg-white dark:bg-gray-950">
      
      {/* Background animé */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-blue-800"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-purple-800"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-800"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Partie gauche - AVEC VOTRE PHOTO */}
        <div className="flex flex-col items-center lg:items-start space-y-8 animate-fade-in">
          
          {/* Photo avec effet - VOTRE PHOTO ICI */}
          <div className="relative group">
            {/* Effet de halo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur-xl transition-all duration-300 animate-pulse"></div>
            
            {/* VOTRE PHOTO */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl dark:border-gray-800 transform group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/mayssem-saad.jpg" 
                alt="Mayssem Saad - Data Scientist & Actuaire"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Badge animé */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="h-6 w-6 text-white" />
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
              <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Partie droite - Contenu */}
        <div className="space-y-8 text-center lg:text-left animate-fade-in animation-delay-300">
          {/* Badges avec animation */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium animate-scale-in">
              INGÉNIEURE DATA SCIENCE
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium animate-scale-in animation-delay-200">
              MASTER ACTUARIAT
            </span>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Étudiante ingénieure en informatique spécialisée en Data Science et Actuariat. 
            Expertise en Machine Learning, IA générative et modélisation statistique. 
            À la recherche d&apos;un stage de fin d&apos;études à partir de janvier 2026.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn-primary group">
              <span>Voir mes projets</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary group">
              <Download className="h-4 w-4 mr-2" />
              Télécharger CV
            </button>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto lg:mx-0 animate-scale-in animation-delay-500" />

          {/* Nom et statut */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Mayssem <span className="text-gradient">Saad</span>
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}