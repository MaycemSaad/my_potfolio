'use client'

import { ArrowRight, Mail, Phone, MapPin, Linkedin, Github, Download, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob dark:bg-blue-800 dark:opacity-10" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 dark:bg-purple-800 dark:opacity-10" />
        <div className="absolute top-40 left-32 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 dark:bg-pink-800 dark:opacity-10" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float animation-delay-1000 opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-2000 opacity-60"></div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Partie gauche - Photo avec animations */}
        <div className={`flex flex-col items-center lg:items-start space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          {/* Photo avec effet de halo */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur-xl transition-all duration-300 animate-pulse-glow"></div>
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl dark:border-gray-800 transform group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/mayssem-saad.jpg" 
                alt="Mayssem Saad"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge animé */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce-in">
              <Sparkles className="h-6 w-6 text-white animate-pulse" />
            </div>
          </div>

          {/* Informations de contact avec animation séquentielle */}
          <div className="space-y-4 text-center lg:text-left">
            <div className={`flex items-center justify-center lg:justify-start space-x-3 text-gray-600 dark:text-gray-400 ${isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
              <MapPin className="h-5 w-5" />
              <span>Tozeur, Tunisie</span>
            </div>
            <div className={`flex items-center justify-center lg:justify-start space-x-3 text-gray-600 dark:text-gray-400 ${isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
              <Mail className="h-5 w-5" />
              <span>saadmaycem99@gmail.com</span>
            </div>
            <div className={`flex items-center justify-center lg:justify-start space-x-3 text-gray-600 dark:text-gray-400 ${isVisible ? 'animate-fade-in animation-delay-700' : 'opacity-0'}`}>
              <Phone className="h-5 w-5" />
              <span>+216 52 715 523</span>
            </div>
            
            {/* Réseaux sociaux avec hover animations */}
            <div className={`flex space-x-4 justify-center lg:justify-start pt-4 ${isVisible ? 'animate-fade-in animation-delay-1000' : 'opacity-0'}`}>
              <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Partie droite - Contenu avec animations */}
        <div className={`space-y-8 text-center lg:text-left ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          {/* Badges avec animation */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium animate-scale-in">
              INGÉNIEURE DATA SCIENCE
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium animate-scale-in animation-delay-200">
              MASTER ACTUARIAT
            </span>
          </div>

          {/* Description avec effet de machine à écrire */}
          <div className="relative">
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in animation-delay-500">
              Étudiante ingénieure en informatique spécialisée en Data Science et Actuariat. 
              Expertise en Machine Learning, IA générative et modélisation statistique. 
              À la recherche d&apos;un stage de fin d&apos;études à partir de janvier 2026.
            </p>
          </div>

          {/* Boutons avec animations au hover */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn-primary group animate-bounce-in animation-delay-700">
              <span className="relative">
                Voir mes projets
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary group animate-bounce-in animation-delay-1000">
              <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              Télécharger CV
            </button>
          </div>

          {/* Divider animé */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto lg:mx-0 animate-scale-in animation-delay-1200" />

          {/* Nom et statut avec animations */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in animation-delay-1000">
              Mayssem <span className="text-gradient animate-gradient-shift bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-300%">Saad</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 animate-fade-in animation-delay-1200">
              Data Scientist & Actuaire
            </p>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500 dark:text-gray-400 animate-fade-in animation-delay-1400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 animate-pulse" />
                <span>Disponible Janvier 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}