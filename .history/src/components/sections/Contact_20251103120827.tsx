'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, User, FileText, Clock, CheckCircle, School, Calendar } from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'
import { useEffect, useRef, useState } from 'react'

export function Contact() {
  const { language } = useLanguageTheme()
  const [isVisible, setIsVisible] = useState(false)
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
      descriptionFR: 'Pour les opportunités de stage et collaborations',
      descriptionEN: 'For internship opportunities and collaborations',
      color: 'from-orange-500 to-red-500',
      delay: '0ms'
    },
    {
      icon: Phone,
      titleFR: 'Téléphone',
      titleEN: 'Phone',
      value: '+216 52 715 523',
      action: 'tel:+21652715523',
      descriptionFR: 'Disponible pour échanger rapidement',
      descriptionEN: 'Available for quick discussions',
      color: 'from-teal-500 to-green-500',
      delay: '150ms'
    },
    {
      icon: MapPin,
      titleFR: 'Localisation',
      titleEN: 'Location',
      value: 'Tozeur, Tunisia',
      action: '#',
      descriptionFR: 'Ouverte aux opportunités nationales et internationales',
      descriptionEN: 'Open to national and international opportunities',
      color: 'from-indigo-500 to-purple-500',
      delay: '300ms'
    }
  ]

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 px-6 lg:px-12 overflow-hidden bg-grid dark:bg-grid-light transition-all duration-700"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-orange-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-teal-400 rounded-full animate-pulse opacity-60 animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-indigo-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* === HEADER === */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-orange-500/30">
            <Calendar className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
              {language === 'FR' ? 'Stage de fin d\'études - Janvier 2026' : 'Final year internship - January 2026'}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white dark:text-gray-900">
            {language === 'FR' ? 'Restons en ' : "Let's Stay in "}
            <span className="text-gradient bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              {language === 'FR' ? 'contact' : 'Touch'}
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 dark:text-gray-600 max-w-2xl mx-auto">
            {language === 'FR'
              ? "N'hésitez pas à me contacter pour discuter d'opportunités de stage, de projets académiques ou simplement échanger."
              : "Feel free to contact me to discuss internship opportunities, academic projects, or just to connect."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* === LEFT SIDE - Contact Methods with New Design === */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className={`block group transform transition-all duration-500 ${
                  isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
                }`}
                style={{ animationDelay: method.delay }}
              >
                <div className="bg-white/10 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/20 dark:border-gray-600/30 hover:border-orange-400/50 dark:hover:border-orange-500/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-white dark:text-gray-900 text-lg">
                          {language === 'FR' ? method.titleFR : method.titleEN}
                        </h3>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-white/90 dark:text-gray-700 font-medium text-lg mb-1">
                        {method.value}
                      </p>
                      <p className="text-white/70 dark:text-gray-500 text-sm">
                        {language === 'FR' ? method.descriptionFR : method.descriptionEN}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links - Horizontal Layout */}
            <div className={`bg-white/10 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/20 dark:border-gray-600/30 shadow-lg transform transition-all duration-500 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
            }`} style={{ animationDelay: '450ms' }}>
              <h4 className="font-semibold text-white dark:text-gray-900 mb-4 text-lg">
                {language === 'FR' ? 'Mes réseaux' : 'My Networks'}
              </h4>
              
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/mayssem-saad-a13799226"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex flex-col items-center justify-center gap-2"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/MaycemSaad"
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 shadow-md flex flex-col items-center justify-center gap-2"
                >
                  <Github className="w-6 h-6" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href={cvFile}
                  download={cvName}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 shadow-md flex flex-col items-center justify-center gap-2"
                >
                  <Download className="w-6 h-6" />
                  <span className="text-sm font-medium">CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* === RIGHT SIDE - Simple Contact Form === */}
          <div className={`bg-white/10 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl border-2 border-white/20 dark:border-gray-600/30 p-8 shadow-xl transform transition-all duration-500 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
          }`}>
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white dark:text-gray-900 mb-2">
                  {language === 'FR' ? 'Message envoyé !' : 'Message sent!'}
                </h3>
                <p className="text-white/70 dark:text-gray-500">
                  {language === 'FR' 
                    ? 'Merci pour votre message. Je vous répondrai rapidement.' 
                    : 'Thank you for your message. I will reply soon.'}
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-md">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white dark:text-gray-900">
                    {language === 'FR' ? 'Envoyer un message' : 'Send a message'}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white dark:text-gray-900">
                        {language === 'FR' ? 'Nom complet' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        placeholder={language === 'FR' ? 'Votre nom' : 'Your name'}
                        className="w-full px-4 py-3 rounded-xl bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600/50 text-white dark:text-gray-900 placeholder-white/50 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white dark:text-gray-900">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder={language === 'FR' ? 'votre@email.com' : 'your@email.com'}
                        className="w-full px-4 py-3 rounded-xl bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600/50 text-white dark:text-gray-900 placeholder-white/50 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white dark:text-gray-900">
                      {language === 'FR' ? 'Sujet' : 'Subject'} *
                    </label>
                    <input
                      type="text"
                      placeholder={language === 'FR' ? 'Objet du message' : 'Message subject'}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600/50 text-white dark:text-gray-900 placeholder-white/50 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white dark:text-gray-900">
                      {language === 'FR' ? 'Message' : 'Message'} *
                    </label>
                    <textarea
                      rows={4}
                      placeholder={language === 'FR' ? 'Votre message...' : 'Your message...'}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600/50 text-white dark:text-gray-900 placeholder-white/50 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {language === 'FR' ? 'Envoyer le message' : 'Send message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          {[
            { 
              icon: Clock, 
              value: '24h', 
              labelFR: 'Réponse rapide', 
              labelEN: 'Quick response',
              color: 'from-cyan-500 to-blue-500'
            },
            { 
              icon: CheckCircle, 
              value: language === 'FR' ? 'Disponible' : 'Available', 
              labelFR: 'Pour échanger', 
              labelEN: 'To connect',
              color: 'from-green-500 to-emerald-500'
            },
            { 
              icon: School, 
              value: language === 'FR' ? 'Étudiante' : 'Student', 
              labelFR: 'En Data Science', 
              labelEN: 'In Data Science',
              color: 'from-purple-500 to-pink-500'
            }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`bg-white/10 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/20 dark:border-gray-600/30 text-center transform transition-all duration-500 ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
              }`}
              style={{ animationDelay: `${index * 200 + 600}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white dark:text-gray-900 mb-1">{stat.value}</div>
              <div className="text-white/70 dark:text-gray-500 text-sm">
                {language === 'FR' ? stat.labelFR : stat.labelEN}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}