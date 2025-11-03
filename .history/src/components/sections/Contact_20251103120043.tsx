'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, MessageCircle, User, FileText, Zap, Clock, CheckCircle, School, Briefcase } from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'
import { useEffect, useRef, useState } from 'react'

export function Contact() {
  const { language } = useLanguageTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('message')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const cvFile = language === 'FR' ? '/Mayssem-Saad-CV_versionF.pdf' : '/Mayssem-Saad-Resume.pdf'
  const cvName = language === 'FR' ? 'Mayssem_Saad_CV_FR.pdf' : 'Mayssem_Saad_Resume_EN.pdf'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactMethods = [
    {
      icon: Mail,
      titleFR: 'Email',
      titleEN: 'Email',
      value: 'saadmaycem99@gmail.com',
      action: 'mailto:saadmaycem99@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      delay: '0ms'
    },
    {
      icon: Phone,
      titleFR: 'Téléphone',
      titleEN: 'Phone',
      value: '+216 52 715 523',
      action: 'tel:+21652715523',
      color: 'from-green-500 to-emerald-500',
      delay: '200ms'
    },
    {
      icon: MapPin,
      titleFR: 'Localisation',
      titleEN: 'Location',
      value: 'Tozeur, Tunisia',
      action: '#',
      color: 'from-purple-500 to-pink-500',
      delay: '400ms'
    }
  ]

  const quickSubjects = language === 'FR' 
    ? [
        { icon: School, text: "Stage Data Science", emoji: "🎓" },
        { icon: Briefcase, text: "Projet Académique", emoji: "📚" },
        { icon: MessageCircle, text: "Échange Professionnel", emoji: "💬" },
        { icon: User, text: "Rencontre Mentorale", emoji: "👥" }
      ]
    : [
        { icon: School, text: "Data Science Internship", emoji: "🎓" },
        { icon: Briefcase, text: "Academic Project", emoji: "📚" },
        { icon: MessageCircle, text: "Professional Exchange", emoji: "💬" },
        { icon: User, text: "Mentorship Meeting", emoji: "👥" }
      ]

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 px-6 lg:px-12 overflow-hidden bg-grid dark:bg-grid-light transition-all duration-700"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float animation-delay-1000 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float animation-delay-2000 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === HEADER === */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-blue-500/30">
            <School className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {language === 'FR' ? 'Recherche stage Janvier 2026' : 'Seeking internship January 2026'}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white dark:text-gray-900">
            {language === 'FR' ? 'Échangeons ' : "Let's Connect "}
            <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {language === 'FR' ? 'ensemble' : 'Together'}
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'FR'
              ? "Étudiante passionnée en Data Science et Actuariat, je suis ouverte aux opportunités de stage, collaborations académiques et échanges professionnels."
              : "Passionate student in Data Science and Actuarial Science, open to internship opportunities, academic collaborations, and professional exchanges."}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* === LEFT SIDE - Contact Methods === */}
          <div className="lg:col-span-2 space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className={`block group transform transition-all duration-500 ${
                  isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
                }`}
                style={{ animationDelay: method.delay }}
              >
                <div className="bg-gray-900/70 dark:bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 dark:border-gray-300/50 hover:border-cyan-400/50 dark:hover:border-blue-500/50 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-400 dark:text-gray-500">
                        {language === 'FR' ? method.titleFR : method.titleEN}
                      </p>
                      <p className="text-lg font-semibold text-white dark:text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Social & CV Card */}
            <div className={`bg-gray-900/70 dark:bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 dark:border-gray-300/50 shadow-2xl transform transition-all duration-500 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
            }`} style={{ animationDelay: '600ms' }}>
              <h4 className="font-semibold text-white dark:text-gray-900 mb-4 text-lg">
                {language === 'FR' ? 'Réseaux & CV' : 'Networks & CV'}
              </h4>
              
              <div className="flex gap-3 mb-4">
                <a
                  href="https://www.linkedin.com/in/mayssem-saad-a13799226"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/MaycemSaad"
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>

              <a
                href={cvFile}
                download={cvName}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl p-4 font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-cyan-500/25"
              >
                <Download className="w-5 h-5" />
                {language === 'FR' ? 'Télécharger mon CV' : 'Download my CV'}
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* === RIGHT SIDE - Interactive Form === */}
          <div className="lg:col-span-3">
            <div className={`bg-gray-900/70 dark:bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 dark:border-gray-300/50 shadow-2xl overflow-hidden transform transition-all duration-500 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
            }`}>
              {/* Form Header with Tabs */}
              <div className="border-b border-gray-700/50 dark:border-gray-300/50 bg-gray-800/50 dark:bg-gray-100/50">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('message')}
                    className={`flex-1 py-5 px-6 text-center font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === 'message'
                        ? 'text-cyan-400 dark:text-cyan-600 border-b-2 border-cyan-400 dark:border-cyan-600 bg-gray-900/50 dark:bg-white/50'
                        : 'text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-700'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {language === 'FR' ? 'Message Personnel' : 'Personal Message'}
                  </button>
                  <button
                    onClick={() => setActiveTab('quick')}
                    className={`flex-1 py-5 px-6 text-center font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === 'quick'
                        ? 'text-blue-400 dark:text-blue-600 border-b-2 border-blue-400 dark:border-blue-600 bg-gray-900/50 dark:bg-white/50'
                        : 'text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-700'
                    }`}
                  >
                    <Zap className="w-5 h-5" />
                    {language === 'FR' ? 'Sujets Rapides' : 'Quick Topics'}
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-3">
                      {language === 'FR' ? 'Message Envoyé !' : 'Message Sent!'}
                    </h3>
                    <p className="text-gray-400 dark:text-gray-600 text-lg">
                      {language === 'FR' 
                        ? 'Je vous remercie pour votre message. Je reviens vers vous rapidement.' 
                        : 'Thank you for your message. I will get back to you soon.'}
                    </p>
                  </div>
                ) : activeTab === 'message' ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-300 dark:text-gray-700 flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {language === 'FR' ? 'Nom complet' : 'Full Name'} *
                        </label>
                        <input
                          type="text"
                          placeholder={language === 'FR' ? 'Votre nom complet' : 'Your full name'}
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 dark:bg-gray-200/50 border border-gray-700 dark:border-gray-400 text-white dark:text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-300 dark:text-gray-700 flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email *
                        </label>
                        <input
                          type="email"
                          placeholder={language === 'FR' ? 'votre@email.com' : 'your@email.com'}
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 dark:bg-gray-200/50 border border-gray-700 dark:border-gray-400 text-white dark:text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-300 dark:text-gray-700 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        {language === 'FR' ? 'Sujet' : 'Subject'} *
                      </label>
                      <input
                        type="text"
                        placeholder={language === 'FR' ? 'Objet de votre message' : 'Message subject'}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 dark:bg-gray-200/50 border border-gray-700 dark:border-gray-400 text-white dark:text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-300 dark:text-gray-700 flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        {language === 'FR' ? 'Message' : 'Message'} *
                      </label>
                      <textarea
                        rows={5}
                        placeholder={language === 'FR' ? 'Votre message...' : 'Your message...'}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 dark:bg-gray-200/50 border border-gray-700 dark:border-gray-400 text-white dark:text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
                    >
                      <Send className="w-5 h-5" />
                      {language === 'FR' ? 'Envoyer le Message' : 'Send Message'}
                    </button>
                  </form>
                ) : (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">
                        {language === 'FR' ? 'Sujets Fréquents' : 'Common Topics'}
                      </h4>
                      <p className="text-gray-400 dark:text-gray-600">
                        {language === 'FR' 
                          ? 'Choisissez un sujet pour commencer'
                          : 'Choose a topic to get started'}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {quickSubjects.map((subject, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTab('message')}
                          className="p-4 rounded-xl bg-gray-800/50 dark:bg-gray-200/50 border-2 border-dashed border-gray-600 dark:border-gray-400 hover:border-cyan-400 dark:hover:border-cyan-500 hover:bg-gray-700/50 dark:hover:bg-gray-300/50 transition-all duration-300 group text-left"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{subject.emoji}</span>
                            <div>
                              <p className="font-medium text-white dark:text-gray-900 group-hover:text-cyan-400 dark:group-hover:text-cyan-600 transition-colors">
                                {subject.text}
                              </p>
                              <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
                                {language === 'FR' ? 'Cliquer pour écrire' : 'Click to write'}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="text-center pt-4">
                      <button
                        onClick={() => setActiveTab('message')}
                        className="text-cyan-400 dark:text-cyan-600 hover:text-cyan-300 dark:hover:text-cyan-500 font-semibold transition-all flex items-center justify-center gap-2 mx-auto"
                      >
                        {language === 'FR' 
                          ? 'Ou écrire un message personnalisé'
                          : 'Or write a custom message'}
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { icon: Clock, value: '24h', labelFR: 'Réponse', labelEN: 'Response', color: 'text-cyan-400' },
                { icon: CheckCircle, value: 'Dispo', labelFR: 'Disponible', labelEN: 'Available', color: 'text-green-400' },
                { icon: School, value: 'Étudiante', labelFR: 'Statut', labelEN: 'Student', color: 'text-blue-400' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-gray-900/70 dark:bg-white/80 backdrop-blur-xl rounded-xl p-4 text-center border border-gray-700/50 dark:border-gray-300/50 shadow-lg transform transition-all duration-500 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                  style={{ animationDelay: `${index * 200 + 800}ms` }}
                >
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-xl font-bold text-white dark:text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-600">
                    {language === 'FR' ? stat.labelFR : stat.labelEN}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}