'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-grid text-white transition-all duration-700 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Intéressé par mon profil ? N’hésitez pas à me contacter pour discuter de futures
            collaborations ou opportunités.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - Infos */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-4">Restons connectés</h3>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  title: 'Email',
                  value: 'saadmaycem99@gmail.com',
                  color: 'from-blue-600 to-purple-600',
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  title: 'Téléphone',
                  value: '+216 52 715 523',
                  color: 'from-green-500 to-teal-500',
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  title: 'Localisation',
                  value: 'Tozeur, Tunisie',
                  color: 'from-pink-500 to-purple-500',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.title}</p>
                    <p className="text-base text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all shadow"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 flex items-center justify-center transition-all shadow"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </a>
            </div>

            {/* CV Download */}
            <button className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium shadow hover:brightness-110 transition">
              <Download className="w-4 h-4" /> Télécharger mon CV
            </button>
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="bg-gray-900/80 rounded-2xl border border-gray-800 p-8 shadow-xl backdrop-blur-sm">
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Nom complet
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Votre message..."
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:brightness-110 transition"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
