'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Download, ArrowDown, Sparkles, Cpu, Brain } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const sectionRef = useRef<HTMLElement | null>(null)
  const { language } = useLanguageTheme()

  const roles = language === 'FR' 
    ? ['Data Scientist', 'Actuaire', 'Ingénieure IA']
    : ['Data Scientist', 'Actuary', 'AI Engineer']

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => setIsVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 
                 bg-grid dark:bg-grid-light text-white dark:text-gray-900 
                 transition-all duration-700 overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* === Left Side - Enhanced Text Content === */}
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-100px]'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">
              {language === 'FR' ? 'Recherche stage Janvier 2026' : 'Seeking internship January 2026'}
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
                Mayssem
              </span>
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mt-2">
                Saad
              </span>
            </h1>

            {/* Animated Role Text */}
            <div className="h-16 flex items-center">
              <div className="relative">
                <div className="text-2xl md:text-3xl font-semibold text-gray-300 dark:text-gray-600">
                  {language === 'FR' ? 'Je suis ' : 'I am '}
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold">
                    {roles[textIndex]}
                  </span>
                </div>
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-600 leading-relaxed max-w-2xl">
            {language === 'FR'
              ? "Étudiante ingénieure passionnée par l'intersection entre la Data Science, l'Intelligence Artificielle et l'Actuariat. Je développe des solutions innovantes alliant rigueur mathématique et expertise technique."
              : "Engineering student passionate about the intersection of Data Science, Artificial Intelligence, and Actuarial Science. I develop innovative solutions combining mathematical rigor and technical expertise."}
          </p>

          {/* Tech Stack Indicators */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Cpu, label: 'Machine Learning' },
              { icon: Brain, label: 'Deep Learning' },
              { icon: Sparkles, label: 'Generative AI' }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 dark:bg-gray-200/50 backdrop-blur-sm border border-gray-700/50 dark:border-gray-400/50"
              >
                <item.icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-white dark:text-gray-900">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl 
                         font-semibold text-white shadow-2xl hover:shadow-3xl 
                         transform hover:scale-105 transition-all duration-300 
                         flex items-center justify-center gap-2"
            >
              <span>{language === 'FR' ? 'Voir mes projets' : 'View my projects'}</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <a
              href={language === 'FR' ? '/Mayssem-Saad-CV_versionF.pdf' : '/Mayssem-Saad-Resume.pdf'}
              download
              className="group px-8 py-4 bg-gray-800/50 dark:bg-gray-200/50 rounded-2xl 
                         font-semibold text-white dark:text-gray-900 border border-gray-700 dark:border-gray-400
                         hover:bg-gray-700/50 dark:hover:bg-gray-300/50 transform hover:scale-105 
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>{language === 'FR' ? 'Télécharger CV' : 'Download CV'}</span>
            </a>
          </div>
        </div>

        {/* === Right Side - Enhanced Profile Card === */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[100px]'
          }`}
        >
          <div className="relative group">
            {/* Main Card */}
            <div className="bg-gray-900/70 dark:bg-white/80 rounded-3xl p-8 shadow-2xl border border-blue-500/30 
                           backdrop-blur-xl transform group-hover:scale-105 transition-all duration-500">
              
              {/* Profile Image with Enhanced Effects */}
              <div className="relative mx-auto w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-blue-400/50 shadow-2xl">
                  <img
                    src="/Photo-de-profil.jpg"
                    alt="Mayssem Saad - Data Scientist & Actuary"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Online Status */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"></div>
              </div>

              {/* Profile Info */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-gray-900">Mayssem Saad</h3>
                  <p className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
                    Data Scientist & Actuary
                  </p>
                </div>

                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-medium">
                    {language === 'FR' ? 'Disponible Jan 2026' : 'Available Jan 2026'}
                  </span>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 text-sm">
                  {[
                    { icon: Mail, text: 'saadmaycem99@gmail.com' },
                    { icon: Phone, text: '+216 52 715 523' },
                    { icon: MapPin, text: 'Tozeur, Tunisia' },
                  ].map(({ icon: Icon, text }, i) => (
                    <a
                      key={i}
                      href={Icon === Mail ? 'mailto:saadmaycem99@gmail.com' : Icon === Phone ? 'tel:+21652715523' : '#'}
                      className="flex items-center justify-center gap-3 p-2 rounded-xl bg-gray-800/50 dark:bg-gray-200/50 
                                 hover:bg-gray-700/50 dark:hover:bg-gray-300/50 transition-all duration-300 group/item"
                    >
                      <Icon className="w-4 h-4 text-blue-400 group-hover/item:scale-110 transition-transform" />
                      <span className="text-white dark:text-gray-900 font-medium">{text}</span>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-4">
                  {[
                    {
                      icon: Linkedin,
                      href: 'https://www.linkedin.com/in/mayssem-saad-a13799226',
                      label: 'LinkedIn'
                    },
                    {
                      icon: Github,
                      href: 'https://github.com/MaycemSaad',
                      label: 'GitHub'
                    },
                  ].map(({ icon: Icon, href, label }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="w-12 h-12 bg-gray-800 dark:bg-gray-200 rounded-2xl flex items-center justify-center 
                                 hover:bg-blue-600 dark:hover:bg-blue-600 hover:scale-110 transition-all duration-300 
                                 shadow-lg hover:shadow-blue-500/25 group/social"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 dark:text-gray-600 group-hover/social:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full blur-sm animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/20 rounded-full blur-sm animate-float animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}