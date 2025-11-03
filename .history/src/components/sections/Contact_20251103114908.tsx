'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, MessageCircle, User, FileText, Sparkles, Zap, Target } from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'
import { useEffect, useRef, useState } from 'react'

export function Contact() {
  const { language } = useLanguageTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('message')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
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
    // Simulation d'envoi
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const quickMessages = language === 'FR' 
    ? [
        "Projet Data Science",
        "Opportunité de stage",
        "Collaboration IA",
        "Consultation actuarielle"
      ]
    : [
        "Data Science Project",
        "Internship Opportunity", 
        "AI Collaboration",
        "Actuarial Consultation"
      ]

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-all duration-700"
    >
      {/* Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === HEADER === */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-700 shadow-sm">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {language === 'FR' ? 'Disponible immédiatement' : 'Available immediately'}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            {language === 'FR' ? 'Connectons-nous' : "Let's Connect"}
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {language === 'FR'
              ? "Prête à transformer vos données en solutions innovantes. Discutons de votre prochain projet en Data Science, IA ou Actuariat."
              : "Ready to transform your data into innovative solutions. Let's discuss your next project in Data Science, AI, or Actuarial Science."}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* === LEFT SIDE - Contact Cards === */}
          <div
            className={`lg:col-span-1 space-y-6 transition-all duration-700 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            {/* Contact Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {language === 'FR' ? 'Contact Direct' : 'Direct Contact'}
                </h3>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:saadmaycem99@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Email</p>
                    <p className="text-gray-900 dark:text-white font-semibold">saadmaycem99@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+21652715523"
                  className="flex items-center gap-4 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 hover:border-green-300 dark:hover:border-green-600 transition-all group"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {language === 'FR' ? 'Téléphone' : 'Phone'}
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold">+216 52 715 523</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                      {language === 'FR' ? 'Localisation' : 'Location'}
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold">Tozeur, Tunisia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & CV Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'FR' ? 'Réseaux & CV' : 'Networks & Resume'}
              </h4>
              
              <div className="flex gap-3 mb-4">
                <a
                  href="https://www.linkedin.com/in/mayssem-saad-a13799226"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-3 text-center transition-all hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5 mx-auto" />
                </a>
                <a
                  href="https://github.com/MaycemSaad"
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white rounded-xl p-3 text-center transition-all hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Github className="w-5 h-5 mx-auto" />
                </a>
              </div>

              <a
                href={cvFile}
                download={cvName}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl p-4 font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                {language === 'FR' ? 'Télécharger CV' : 'Download Resume'}
              </a>
            </div>
          </div>

          {/* === RIGHT SIDE - Interactive Form === */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden">
              {/* Form Header with Tabs */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('message')}
                    className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                      activeTab === 'message'
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5 inline-block mr-2" />
                    {language === 'FR' ? 'Message' : 'Message'}
                  </button>
                  <button
                    onClick={() => setActiveTab('quick')}
                    className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                      activeTab === 'quick'
                        ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    <Zap className="w-5 h-5 inline-block mr-2" />
                    {language === 'FR' ? 'Rapide' : 'Quick'}
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {activeTab === 'message' ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {language === 'FR' ? 'Nom complet' : 'Full Name'} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={language === 'FR' ? 'Votre nom' : 'Your name'}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={language === 'FR' ? 'votre@email.com' : 'your@email.com'}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {language === 'FR' ? 'Sujet' : 'Subject'} *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={language === 'FR' ? 'Objet du message' : 'Message subject'}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {language === 'FR' ? 'Message' : 'Message'} *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={language === 'FR' ? 'Décrivez votre projet en détail...' : 'Describe your project in detail...'}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      {language === 'FR' ? 'Envoyer le message' : 'Send Message'}
                    </button>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                      {language === 'FR' 
                        ? 'Sélectionnez un sujet prédéfini pour un contact rapide'
                        : 'Select a predefined topic for quick contact'}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {quickMessages.map((message, index) => (
                        <button
                          key={index}
                          onClick={() => setFormData(prev => ({ ...prev, subject: message }))}
                          className="p-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm text-center"
                        >
                          {message}
                        </button>
                      ))}
                    </div>

                    <div className="text-center">
                      <button
                        onClick={() => setActiveTab('message')}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-all"
                      >
                        {language === 'FR' 
                          ? 'Ou écrivez un message personnalisé →'
                          : 'Or write a custom message →'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24h</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'FR' ? 'Réponse' : 'Response'}
                </div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'FR' ? 'Disponible' : 'Available'}
                </div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">FR/EN</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'FR' ? 'Langues' : 'Languages'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}