'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, MessageCircle, User, FileText } from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'
import { useEffect, useRef, useState } from 'react'

export function Contact() {
  const { language } = useLanguageTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitted(true)
    setIsLoading(false)
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 px-6 lg:px-12 overflow-hidden bg-grid dark:bg-grid-light transition-all duration-700 text-gray-900 dark:text-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* === HEADER === */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <MessageCircle className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {language === 'FR' ? 'Disponible pour de nouvelles opportunités' : 'Available for new opportunities'}
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {language === 'FR' ? (
              <>
                Travaillons <span className="text-gradient">ensemble</span>
              </>
            ) : (
              <>
                Let's Work <span className="text-gradient">Together</span>
              </>
            )}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
            {language === 'FR'
              ? "Prête à relever de nouveaux défis en Data Science, Actuariat ou Intelligence Artificielle. Discutons de votre projet !"
              : "Ready to take on new challenges in Data Science, Actuarial Science, or Artificial Intelligence. Let's discuss your project!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* === LEFT SIDE - Enhanced === */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 dark:from-white/90 dark:to-gray-100/90 rounded-3xl p-8 backdrop-blur-xl border border-purple-500/20 shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {language === 'FR' ? 'Coordonnées' : 'Contact Information'}
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    titleFR: 'Email Professionnel',
                    titleEN: 'Professional Email',
                    value: 'saadmaycem99@gmail.com',
                    color: 'from-blue-500 to-cyan-500',
                    href: 'mailto:saadmaycem99@gmail.com',
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    titleFR: 'Téléphone',
                    titleEN: 'Phone',
                    value: '+216 52 715 523',
                    color: 'from-green-500 to-emerald-500',
                    href: 'tel:+21652715523',
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    titleFR: 'Localisation',
                    titleEN: 'Location',
                    value: 'Tozeur, Tunisia',
                    color: 'from-pink-500 to-purple-500',
                    href: '#',
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 dark:bg-gray-200/50 border border-gray-700/50 dark:border-gray-300/50 hover:border-purple-500/50 hover:bg-gray-800/70 dark:hover:bg-gray-200/70 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                        {language === 'FR' ? item.titleFR : item.titleEN}
                      </p>
                      <p className="font-semibold text-white dark:text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* === Social Links Enhanced === */}
              <div className="flex space-x-4 pt-6 mt-6 border-t border-gray-700/50 dark:border-gray-300/50">
                {[
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    href: 'https://www.linkedin.com/in/mayssem-saad-a13799226',
                    color: 'from-blue-600 to-blue-700',
                    label: 'LinkedIn'
                  },
                  {
                    icon: <Github className="w-5 h-5" />,
                    href: 'https://github.com/MaycemSaad',
                    color: 'from-gray-700 to-gray-900',
                    label: 'GitHub'
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group relative`}
                    aria-label={social.label}
                  >
                    {social.icon}
                    <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* === CV Download Enhanced === */}
            <a
              href={cvFile}
              download={cvName}
              className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-lg">
                    {language === 'FR' ? 'Télécharger mon CV' : 'Download my Resume'}
                  </p>
                  <p className="text-blue-100 text-sm">
                    {language === 'FR' ? 'PDF - Version actuelle' : 'PDF - Current version'}
                  </p>
                </div>
              </div>
              <Download className="w-5 h-5 text-white group-hover:animate-bounce transition-transform" />
            </a>
          </div>

          {/* === RIGHT SIDE - Enhanced Form === */}
          <div
            className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 dark:from-white/90 dark:to-gray-100/90 rounded-3xl border border-blue-500/20 p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-700 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-3">
                  {language === 'FR' ? 'Message envoyé !' : 'Message Sent!'}
                </h3>
                <p className="text-gray-400 dark:text-gray-600">
                  {language === 'FR' 
                    ? 'Je vous répondrai dans les plus brefs délais.' 
                    : 'I will get back to you as soon as possible.'}
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {language === 'FR' ? 'Envoyer un message' : 'Send a Message'}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputField
                      id="name"
                      label={language === 'FR' ? 'Nom complet' : 'Full Name'}
                      placeholder={language === 'FR' ? 'Votre nom complet' : 'Your full name'}
                      icon={<User className="w-4 h-4" />}
                      required
                    />
                    <InputField
                      id="email"
                      label="Email"
                      placeholder={language === 'FR' ? 'votre@email.com' : 'your@email.com'}
                      type="email"
                      icon={<Mail className="w-4 h-4" />}
                      required
                    />
                  </div>
                  
                  <InputField
                    id="subject"
                    label={language === 'FR' ? 'Sujet' : 'Subject'}
                    placeholder={language === 'FR' ? 'Objet de votre message' : 'Message subject'}
                    icon={<FileText className="w-4 h-4" />}
                    required
                  />

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-white dark:text-gray-900">
                      {language === 'FR' ? 'Message' : 'Message'} *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder={language === 'FR' ? 'Décrivez votre projet ou demande...' : 'Describe your project or request...'}
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/50 dark:bg-gray-200/50 border border-gray-700/50 dark:border-gray-300/50 text-white dark:text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        {language === 'FR' ? 'Envoi en cours...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        {language === 'FR' ? 'Envoyer le message' : 'Send Message'}
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* === Enhanced Input Field Component === */
function InputField({
  id,
  label,
  placeholder,
  type = 'text',
  icon,
  required = false,
}: {
  id: string
  label: string
  placeholder: string
  type?: string
  icon?: React.ReactNode
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-white dark:text-gray-900">
        {label} {required && '*'}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
            {icon}
          </div>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 dark:bg-gray-200/50 border border-gray-700/50 dark:border-gray-300/50 text-white dark:text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 ${
            icon ? 'pl-10' : ''
          }`}
        />
      </div>
    </div>
  )
}