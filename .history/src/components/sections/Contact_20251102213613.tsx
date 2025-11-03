'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'
import { useEffect, useRef, useState } from 'react'

export function Contact() {
  const { language } = useLanguageTheme()
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const cvFile =
    language === 'FR'
      ? '/Mayssem-Saad-CV_versionF.pdf'
      : '/Mayssem-Saad-Resume.pdf'
  const cvName =
    language === 'FR'
      ? 'Mayssem_Saad_CV_FR.pdf'
      : 'Mayssem_Saad_Resume_EN.pdf'

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 px-6 lg:px-12 overflow-hidden bg-grid dark:bg-grid-light transition-all duration-700 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* === HEADER === */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            {language === 'FR' ? (
              <>
                Entrer en <span className="text-gradient">contact</span>
              </>
            ) : (
              <>
                Get in <span className="text-gradient">Touch</span>
              </>
            )}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {language === 'FR'
              ? "Intéressé par mon profil ? N’hésitez pas à me contacter pour discuter de futures collaborations ou opportunités."
              : "Interested in my profile? Feel free to reach out to discuss future collaborations or opportunities."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* === LEFT SIDE === */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <h3 className="text-3xl font-semibold mb-6 text-gradient">
              {language === 'FR' ? 'Restons connectés' : 'Stay Connected'}
            </h3>

            <div className="space-y-5">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  titleFR: 'Email',
                  titleEN: 'Email',
                  value: 'saadmaycem99@gmail.com',
                  color: 'from-blue-600 to-purple-600',
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  titleFR: 'Téléphone',
                  titleEN: 'Phone',
                  value: '+216 52 715 523',
                  color: 'from-green-500 to-teal-500',
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  titleFR: 'Localisation',
                  titleEN: 'Location',
                  value: 'Tozeur, Tunisia',
                  color: 'from-pink-500 to-purple-500',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700/90 backdrop-blur-md shadow-sm hover:shadow-lg transition"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {language === 'FR' ? item.titleFR : item.titleEN}
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* === Social Links === */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/mayssem-saad-a13799226"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all shadow"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-100" />
              </a>
              <a
                href="https://github.com/MaycemSaad"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 flex items-center justify-center transition-all shadow"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-100" />
              </a>
            </div>

            {/* === CV Download (Auto selon langue) === */}
            <a
              href={cvFile}
              download={cvName}
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium text-white shadow hover:brightness-110 transition"
            >
              <Download className="w-4 h-4" />
              {language === 'FR' ? 'Télécharger mon CV' : 'Download my Resume'}
            </a>
          </div>

          {/* === RIGHT SIDE === */}
          <div
            className={`bg-gray-900/80 dark:bg-white/70 rounded-2xl border border-gray-800 p-8 shadow-xl backdrop-blur-sm transition-all duration-700 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <form className="space-y-5">
              <InputField
                id="name"
                label={language === 'FR' ? 'Nom complet' : 'Full Name'}
                placeholder={language === 'FR' ? 'Votre nom' : 'Your name'}
              />
              <InputField
                id="email"
                label="Email"
                placeholder={language === 'FR' ? 'votre@email.com' : 'your@email.com'}
                type="email"
              />
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {language === 'FR' ? 'Message' : 'Message'}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={language === 'FR' ? 'Votre message...' : 'Your message...'}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-200 border border-gray-700 dark:border-gray-300 text-white dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:brightness-110 transition"
              >
                {language === 'FR' ? 'Envoyer le message' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* === Sous-composant champs === */
function InputField({
  id,
  label,
  placeholder,
  type = 'text',
}: {
  id: string
  label: string
  placeholder: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-200 border border-gray-700 dark:border-gray-300 text-white dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  )
}
